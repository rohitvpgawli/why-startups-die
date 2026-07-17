# The Startup Lifecycle Project

An open dataset and pipeline tracking the full lifecycle of startups — founded,
funded, launched, peaked, pivoted, acquired, wound down — for companies from
**2021 onward**, built from public sources.

Working name: *Startup Graveyard*. Public framing: lifecycle, not failure —
outcomes include IPO, acquisition, still operating, pivot, acquihire, wind-down,
and shutdown.

## Why 2021+

The 5-year window captures three distinct regimes in one cohort: the ZIRP
funding peak (2021), the correction (2022–23), and the AI wave (2023–).

**Methodology note (right-censoring):** recent cohorts haven't had time to
reach an outcome. A 2024 company that is "Active" is not evidence of survival —
it's an unfinished observation. Lifespan and survival questions use
survival-analysis framing (Kaplan-Meier style), never naive averages.

## Data sources

| Source | Status | What it gives us |
|---|---|---|
| YC directory (via [yc-oss/api](https://github.com/yc-oss/api)) | ✅ implemented | Clean cohort with labeled outcomes (Active / Acquired / Inactive / Public) |
| Wayback Machine CDX API | ✅ implemented | Website liveness over time — the best free shutdown detector |
| Hacker News (Algolia API) | ✅ implemented | Launch posts, shutdown discussions, community post-mortems |
| SEC EDGAR (Form D full-text search) | ✅ implemented | Fundraising events with amounts, straight from filings |
| Wikidata | 🔜 planned | Defunct-company facts, acquisition records, entity linking |
| layoffs.fyi | 🔜 planned | Layoff events (pre-death signal) |
| TechCrunch / news RSS | 🔜 planned | Funding + shutdown coverage |
| GitHub org activity | 🔜 planned | Engineering pulse for devtools companies |
| Wayback homepage shutdown notices | ✅ implemented | Founder-letter-grade evidence mined from final snapshots |
| Shutdown letters / founder post-mortems | ✅ partial | HN threads + homepage notices feed enrichment |

## Pipeline

```
ingest (per source) → resolve (canonical company id) → enrich (LLM, evidence-linked) → analyze / visualize
```

Storage is DuckDB (`data/lifecycle.duckdb`). Every fact carries its source.
LLM enrichment (shutdown reason, category, confidence) always stores the
evidence quote and source URL alongside the extraction — no unsourced claims.

## Setup

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
```

## Usage

```bash
export PYTHONPATH=src
.venv/bin/python -m lifecycle init-db        # create schema
.venv/bin/python -m lifecycle ingest-yc      # YC cohort, batches 2021+
.venv/bin/python -m lifecycle ingest-wayback --status Inactive   # snapshot timelines
.venv/bin/python -m lifecycle ingest-hn --status Inactive        # HN mentions
.venv/bin/python -m lifecycle ingest-edgar                       # Form D filings (full cohort)
.venv/bin/python -m lifecycle ingest-wayback-notices             # homepage shutdown notices
.venv/bin/python -m lifecycle enrich         # LLM shutdown-reason extraction (needs ANTHROPIC_API_KEY)
.venv/bin/python -m lifecycle export         # JSON export for the dashboard
.venv/bin/python -m lifecycle stats          # cohort summary
```

## Enrichment methodology

The `enrich` step (Claude, structured outputs) reads each inactive company's
public evidence — YC profile, HN stories and comment threads, the Wayback
death timeline — and extracts primary/secondary shutdown reason, a controlled
category, and a confidence score. Confidence is capped by source quality:
founder letters and news up to 0.9, community testimony up to 0.7, pure
inference from a dead website at most 0.4. Every row carries a verbatim
evidence quote and its source URL — no unsourced claims enter the dataset.

## Weekly refresh

`scripts/refresh.sh` re-runs the whole pipeline idempotently (new deaths
arrive as YC directory status flips). A scheduled task runs it every Monday
morning, reviews new homepage notices for enrichment, rebuilds the
dashboard, and republishes the artifact.
