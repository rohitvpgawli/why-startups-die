# The Startup Lifecycle Project

**An open dataset and pipeline tracking what became of every Y Combinator
startup from the 2021+ batches** — still operating, acquired, gone public, or
shut down — built entirely from free, public sources, with LLM-extracted,
evidence-linked shutdown reasons.

Working name: *Startup Graveyard*. Public framing is deliberately *lifecycle*,
not *failure*: the cohort includes every outcome from IPO to wind-down, and the
denominators that framing provides are what make the analysis valid.

## Headline findings (as of 2026-07-17)

| Finding | Number |
|---|---|
| Companies tracked (YC batches 2021–2026) | 3,566 |
| Shut down | 300 · 2021 cohort alone: 17.2% |
| Acquired | 197 · IPOs: **0** |
| Consumer shutdown rate (2021–23 cohorts) | **26.6%** — vs Healthcare 7.5% |
| Kaplan-Meier survival, 2021 cohort at 66 months | 81.2% |
| Shutdown rate: no Form D found / <$5M filed / ≥$5M filed | 14.2% [12.6–16.0] / 13.3% [7.4–22.8] / 11.1% [6.3–18.8] — **overlapping CIs: no detectable difference** |
| Shutdowns that left *any* public post-mortem trail | ~6 of 300 — **most startups die silently** |
| "Inactive" companies that were actually quiet acquisitions | 3 found via homepage-notice mining (Fabius, Flike, Launcher Labs) |

## Why the 2021+ window

Five years captures three regimes in one cohort: the ZIRP funding peak (2021),
the correction (2022–23), and the AI wave (2023–). **Right-censoring rules
everything**: a 2025 company that is "Active" is an unfinished observation, not
a survivor. Rate comparisons use 2021–23 cohorts only; lifespan questions use
Kaplan-Meier estimation, never naive averages.

---

## Architecture

```
ingest (per source) ──> resolve (canonical id + precision guards) ──> enrich (LLM, evidence-linked) ──> export ──> dashboard
                                        │
                              DuckDB (data/lifecycle.duckdb)
```

Storage is a single DuckDB file. Every fact carries its source; every ingester
is idempotent (`INSERT OR REPLACE` keyed on natural keys), so any step can be
re-run safely.

## Data sources

All free, all public. Politeness delays are the price of $0 data.

| Source | Endpoint | What it provides | Rate handling |
|---|---|---|---|
| YC directory | `https://yc-oss.github.io/api/companies/all.json` (daily mirror of YC's public directory) | The cohort itself, with labeled outcomes: Active / Acquired / Inactive / Public. This is the ground-truth denominator. | none needed (static JSON) |
| Wayback Machine CDX | `https://web.archive.org/cdx/search/cdx?url={domain}&collapse=timestamp:6` | Monthly website-liveness timeline per company. Last live snapshot = death-date proxy. | 1s delay; archive.org throttles sustained crawls |
| Wayback final snapshots | `https://web.archive.org/web/{YYYYMM}28/http://{domain}/` | Homepage shutdown notices — founder-letter-grade evidence ("X is shutting down in December 2025") | 3s delay, 30s backoff, resumable via `wayback_notices` table |
| Hacker News (Algolia) | `https://hn.algolia.com/api/v1/search` and `/items/{id}` | Launch posts, shutdown threads, community post-mortems (comments often say what founder letters won't) | 0.3s delay |
| SEC EDGAR full-text search | `https://efts.sec.gov/LATEST/search-index?q="{name}"&forms=D` + `primary_doc.xml` per filing | Form D fundraising events with dollar amounts, straight from filings | 0.5s delay, declared User-Agent (SEC fair-access policy) |

Considered and rejected for v1: Crunchbase (licensed, five figures), LinkedIn
(ToS + litigation risk), Twitter/X (API cost). Planned: Wikidata, layoffs.fyi.

## Reproduction from scratch

```bash
git clone https://github.com/rohitvpgawli/why-startups-die.git
cd why-startups-die
python3 -m venv .venv                      # Python 3.9+ works
.venv/bin/pip install -r requirements.txt  # duckdb, httpx, anthropic
export PYTHONPATH=src

.venv/bin/python -m lifecycle init-db                  # apply schema.sql
.venv/bin/python -m lifecycle ingest-yc                # ~30s   — 3,566 companies
.venv/bin/python -m lifecycle ingest-wayback --status Inactive   # ~30min — liveness timelines
.venv/bin/python -m lifecycle ingest-hn --status Inactive        # ~10min — HN mentions
.venv/bin/python -m lifecycle ingest-edgar             # ~75min — Form D, full cohort
.venv/bin/python -m lifecycle ingest-wayback-notices   # ~20min — homepage notices (resumable; re-run to retry errors)
.venv/bin/python -m lifecycle enrich                   # needs ANTHROPIC_API_KEY; skips already-enriched
.venv/bin/python -m lifecycle export                   # data/export.json
.venv/bin/python dashboard/build.py                    # data/dashboard.html (self-contained)
.venv/bin/python -m lifecycle stats                    # sanity check
```

`scripts/refresh.sh` chains all of the above for a manual full re-run (new
deaths arrive as YC directory status flips, so re-running later grows the
dataset).

## Schema (DuckDB — see `schema.sql`)

| Table | Contents | Natural key |
|---|---|---|
| `companies` | Canonical company: slug, name, apex domain, batch, cohort year, status, industry, team size | `company_id` (YC slug) |
| `company_sources` | Per-source identity + raw record (entity-resolution ledger) | `(company_id, source)` |
| `funding_rounds` | Form D filings with `amount_usd` (totalAmountSold, fallback totalOfferingAmount) and filing URL | delete-then-insert by `source_url` |
| `timeline_events` | Unified dated-event stream (yc_listed, funding, layoff, shutdown_notice…) — a company page is `ORDER BY event_date` | — |
| `wayback_snapshots` | One row per company-month with HTTP status | `(company_id, snapshot_month)` |
| `wayback_notices` | Final-snapshot check results — `phrase NULL` means "checked, nothing found" (this is what makes the miner resumable) | `company_id` |
| `hn_mentions` | Filtered HN stories | `(company_id, story_id)` |
| `shutdown_enrichment` | LLM extraction: reasons, category, confidence, **verbatim quote + source URL (NOT NULL)** | `company_id` |

## Entity resolution — the actual hard part (~40% of the work)

Precision over recall throughout. Every rule below exists because the naive
version demonstrably polluted the data:

1. **Canonical identity** = YC slug; **apex domain** is the cross-source join
   key.
2. **HN homonym filter** (`ingest/hn.py`): a story counts only if the company
   domain appears in the story URL, or the exact name appears in the title
   AND (name ≥ 8 chars, or the title contains startup-context tokens: "YC",
   "Show HN", "shut down", "raises"…). Companies named June, Cache, Fable,
   Nexus otherwise match endless unrelated news. Post-ingest purge applies a
   stricter rule for names < 8 chars.
3. **EDGAR matcher** (`ingest/sec_edgar.py`): filer name must equal the
   company name exactly, or name + corporate-suffix tokens only (Inc, LLC,
   Corp…). Leading-prefix matching assigned 789 unrelated fund filings to
   companies named "Galaxy" and "Stellar" before this rule; exact matching
   yields 452 filings across 251 companies.
4. **Ambiguity guards**: a company matching > 2 distinct CIKs is dropped
   entirely; a filing assigned to more than one company (two YC companies
   named "Hyper") is dropped for both.
5. **Notice-miner false positives**: "acquired by" on a homepage is only
   evidence if it's about *this* company — team-bio mentions of other
   companies' exits (MindPortal, Rubber Ducky Labs) were rejected on manual
   review. Human/LLM review of snippets is a required step, not optional.

## Enrichment methodology

Model: Claude (`claude-opus-4-8` via `enrich/shutdown_reason.py`, structured
outputs). Input evidence per company: YC profile, HN stories + top comments,
Wayback death timeline, homepage notice. Output schema:

- `primary_reason`, `secondary_reason` — free text, grounded in evidence
- `category` — controlled vocabulary: `no_product_market_fit`,
  `ran_out_of_funding`, `founder_issues`, `competition`, `market_timing`,
  `failed_pivot`, `acquihire_wind_down`, `regulatory`,
  `technical_or_product`, `pivoted_new_entity`, `unknown`
- `confidence` — 0..1, **capped by source quality**: founder letter or news
  with a stated reason ≤ 0.9; community testimony ≤ 0.7; inference from a
  dead website alone ≤ 0.4
- `evidence_quote` + `evidence_source_url` — **verbatim and mandatory**; no
  unsourced claims enter the dataset
- `source_quality` — `founder_letter | news | community | inferred`

Two epistemic rules: shutdown letters are PR documents (founders write
"market timing", not "my co-founder and I stopped speaking") — weigh HN
comments against official statements; and absence of evidence is recorded as
`unknown`/no row, never guessed.

## Survival methodology

- **Death proxy**: last calendar month with an HTTP 200 Wayback snapshot.
  Websites outlive companies by a few months sometimes; they also die with
  them. It is the best free signal available.
- **Kaplan-Meier** per cohort year: entry at batch start (Winter=Jan,
  Spring=Apr, Summer=Jun, Fall=Sep); Inactive companies are events at their
  death month; Active/Acquired/Public are right-censored at the export date
  (acquired ≠ dead, and acquisition dates aren't available). Inactive
  companies with no Wayback trace (17 of 300) are excluded, not imputed.
- **Rate comparisons** (industry, funding) use 2021–23 cohorts only, and
  every published rate carries a **Wilson 95% CI** (whiskers on the
  dashboard); KM curves carry **Greenwood 95% bands**.
- **Proxy validation** (`data/proxy_validation.json`): against 6 shutdowns
  with independently documented announcement dates, the proxy ran **late** —
  deltas of 0, +2, +4, and +20 months (median +3), with 2 of 6 leaving no
  usable Wayback trace at all. Read KM lifespans as *upper bounds*: websites
  outlive companies, occasionally by years (Moxion Power's site zombied for
  20 months after the shutdown news).

## Known limitations — disclose these when citing

1. Form D coverage: only US exempt offerings actually filed. "No Form D
   found" ≠ "raised nothing".
2. The funding-vs-death comparison is correlational; selection effects
   (better companies raise more) likely make money's causal effect even
   smaller than the observed 3pp.
3. YC's own status labels lag reality (we found quiet acquisitions listed as
   Inactive) and "Inactive" conflates shutdown, zombie, and pivot-elsewhere.
4. Enrichment coverage is honest, not complete: ~10 evidence-backed rows of
   300 deaths, because that's all the public record supports.
5. Common-word company names are dropped from EDGAR rather than guessed —
   recall sacrificed for precision.
6. archive.org throttles sustained crawls; the notice miner records every
   check so re-runs only visit unchecked companies.

## Tests

`PYTHONPATH=src python -m unittest discover tests` — regression tests pin
every entity-resolution rule to the concrete failure that motivated it
(Galaxy-fund pollution, Abel/June homonyms, month-name subjects). Writing
them caught and fixed two further live filter leaks.

## Data releases & citation

`scripts/make_release.py vX.Y.Z` cuts a versioned, committable release into
`releases/`: one CSV per table, the analysis JSON (all CIs included), the
proxy-validation sample, and SHA-256 checksums. **`releases/v1.0.0/` is the
citable artifact** — the DuckDB working file stays local.

Suggested citation:

> Gawli, R. (2026). The Startup Lifecycle Project: outcomes of Y Combinator
> startups, 2021–2026 batches. Data release v1.0.0.

## License

Code and data compilation are released under the **MIT License** (see
[`LICENSE`](LICENSE)) — free to use, modify, and redistribute with
attribution. The underlying facts are drawn from public sources (see
[Data sources](#data-sources)); please cite this project when you build on it.

## Repository layout

```
schema.sql                     # DuckDB schema, safe to re-apply
src/lifecycle/
  __main__.py                  # CLI: init-db / ingest-* / enrich / export / stats
  db.py                        # connection + schema application
  ingest/yc.py                 # cohort + statuses (the denominator)
  ingest/wayback.py            # CDX monthly liveness
  ingest/wayback_notices.py    # final-snapshot shutdown notices (resumable)
  ingest/hn.py                 # Algolia search + homonym filtering
  ingest/sec_edgar.py          # Form D full-text search + amount extraction
  enrich/shutdown_reason.py    # Claude structured-output extraction
  export.py                    # aggregates + KM curves + registry JSON
dashboard/template.html        # self-contained dashboard (charts + registry)
dashboard/build.py             # injects export.json -> data/dashboard.html
scripts/refresh.sh             # manual full-pipeline re-run
scripts/make_release.py        # cut a versioned CSV release + checksums
tests/test_matchers.py         # regression tests for entity-resolution rules
releases/v1.0.0/               # committed, citable data release
data/                          # gitignored: DuckDB file, export, dashboard
```

## Dashboard

`data/dashboard.html` is a single self-contained file (no external requests):
hero counts, outcome rates by batch year, industry mortality, lifespan
histogram, Kaplan-Meier survival curves, funding-vs-death, shutdown-reason
categories, and a searchable registry of all 300 dead companies — each with
its timeline, Form D links, HN evidence, and shutdown reason with the verbatim
quote.

---

Built by Rohit Gawli ([rohit.gawli@furtribe.in](mailto:rohit.gawli@furtribe.in)) —
2x founder (1 exit, 1 wind-down), building data products in public.
Pipeline and analysis co-built with Claude.
