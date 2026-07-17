# Startup Graveyard

Startup Graveyard is an evidence-first intelligence platform for studying how
startups wind down, pivot, get acquired, or otherwise reach the end of a
chapter. It is designed as a public data product: every important claim traces
back to a source, uncertainty is explicit, and the underlying pipeline is
reproducible.

The active research cohort is the set of startups founded in 2021 or first
receiving institutional funding in 2021. These are two complementary cohorts,
not interchangeable definitions: `founded_on` measures when the company
started, while `first_funded_on` measures when outside capital first arrived.
The distinction lets us study companies born during the zero-interest-rate
boom and companies that first became venture-backed during it without quietly
mixing the populations.

Every release uses a fixed observation cutoff (`observed_through`). A company
with no documented terminal event by that cutoff is right-censored: it may
still be operating, or its public trail may simply be incomplete. Right-censored
and genuinely unknown outcomes are never counted as shutdowns. Earlier reviewed
cases are preserved under `data/archive/`, but they do not appear in current
cohort metrics or the website.

## First milestone

The first publishable release will answer three questions:

1. What happened to the 2021-founded and 2021-first-funded cohorts by the
   observation cutoff?
2. Which factors are most often cited in their documented endings, and how do
   those patterns change as capital becomes more expensive?
3. How do outcomes differ by sector, funding stage, and time under observation?

The MVP is intentionally narrower than a general startup directory. It covers
verified terminal outcomes and explicitly labeled non-terminal statuses, with a
company profile, lifecycle timeline, evidence-backed factor classification,
and aggregate explorer.

## Repository layout

```text
data/cohort/           frozen sampling frames used to define a cohort
data/raw/              human-readable reviewed records with source evidence
docs/                  product scope and data contracts
scripts/               reproducible roster/export utilities
src/startup_graveyard/ ingestion and validation code
tests/                 executable contract tests
```

## Run the vertical slice

No third-party packages are required.

```bash
python3 -m unittest discover -s tests -v
python3 scripts/fetch_yc_2021_roster.py
python3 scripts/report_yc_2021_roster.py
python3 scripts/extract_yc_date_candidates.py
python3 scripts/apply_yc_date_reviews.py
python3 -m src.startup_graveyard.build \
  --input data/raw/startups.jsonl \
  --output data/startup_graveyard.db
python3 -m src.startup_graveyard.quality \
  --database data/startup_graveyard.db
python3 scripts/export_web_data.py
python3 scripts/export_cohort_web_data.py
python3 -m src.startup_graveyard.triage \
  --candidates data/candidates.jsonl \
  --reviewed data/raw/startups.jsonl
python3 scripts/build_html_report.py
```

The generated standalone report is [docs/report.html](docs/report.html). It is
fully self-contained: open it directly in a browser after cloning, or rebuild
it from the reviewed JSONL with `python3 scripts/build_html_report.py`. The
interactive explorer under `web/` is the richer application surface; the HTML
report is included so the core analysis is inspectable without Node, a server,
or third-party packages.

## Recreate from a fresh clone

```bash
git clone https://github.com/rohitvpgawli/why-startups-die.git
cd why-startups-die
python3 -m unittest discover -s tests -v
python3 scripts/build_html_report.py
open docs/report.html  # macOS; use your browser's file-open command elsewhere
```

The build command validates each record, creates a SQLite database, and prints
a compact build report. The current seed cohort contains a small set of
reviewed public cases and is a research demonstration, not yet a denominator
of all 2021 startups or a statistically representative dataset. It cannot
support failure, survival, or sector-rate estimates yet; first-funded cohort
metadata is also incomplete. Real companies must not be added without source
URLs and reviewed evidence.

The roster command freezes 727 publicly launched YC W21/S21 directory records
into `data/cohort/yc-2021/`. This is a source-defined sampling frame, not the
full set of YC-funded companies and not a reviewed outcome dataset. Batch year
is retained separately from founding year; companies enter published lifecycle
metrics only after their cohort dates and outcomes are independently reviewed.

The export commands validate the reviewed JSONL records and generate the typed
data modules consumed by the interactive explorer in `web/`. The cohort export
contains only aggregate sampling-frame metadata; YC directory statuses never
enter the reviewed outcome archive or masquerade as lifecycle outcomes.

Candidate discoveries are kept in a separate, validated research queue. The
triage report summarizes review readiness, source-family coverage, and possible
duplicates without allowing unreviewed records into published analyses.

## Editorial principles

- Describe outcomes, not people, as failures.
- Separate a company's own explanation from third-party reporting.
- Store contributing factors as claims, not objective truth.
- Never infer sensitive founder attributes.
- Prefer `unknown` over manufactured precision.

See [docs/product-spec.md](docs/product-spec.md) and
[docs/data-contract.md](docs/data-contract.md) for the working specification.
