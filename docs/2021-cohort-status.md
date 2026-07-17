# 2021 cohort status

The project now uses a deliberately narrow, reproducible sampling frame:
publicly launched YC Winter 2021 and Summer 2021 companies. The frame has 727
rows (336 Winter, 391 Summer). YC's directory status is retained as source
metadata, not treated as a lifecycle outcome.

## What is verified

- Four YC descriptions contained an explicit “founded in 2021” candidate.
- Three were accepted after checking the current YC company pages: Mach9,
  Nash, and Parallel Bio.
- Alokai remains conflicted: its description says 2021 while the YC metadata
  says 2020, so it is excluded from the verified founded-2021 set.
- Three operating-status records have provisional evidence, but none is a
  final `active` outcome yet.

## First-funding evidence layer

The SEC [Form D bulk data sets](https://www.sec.gov/data-research/sec-markets-data/form-d-data-sets)
for 2021 Q1–Q4 were joined by conservative normalized legal-name/alias
matching. The resulting `sec-sale-candidates.jsonl` contains all 727 roster
rows:

| Result | Rows |
| --- | ---: |
| Exact match requiring review | 68 |
| Ambiguous match requiring identity review | 2 |
| No exact match in the 2018–2021 files | 657 |

The 70 matched rows have a reported `SALE_DATE` candidate and EDGAR filing
links, but `first_funded_on` remains null. A 2021 quarterly snapshot cannot
prove that a sale was the company's first funding event, and a missing Form D
does not prove that no funding occurred. Amendments, legal-entity identity,
jurisdiction, and pre-2021 filings must be reviewed before a date enters the
cohort denominator.

The expanded 2018–2021 comparison now finds 70 matched roster rows and 25
candidate sale dates before 2021. One especially important conflict is Mach9:
the SEC queue reports a 2020 sale for `Mach9, LLC`, while the reviewed YC page
states the company was founded in 2021. That conflict is preserved in
`sec-date-conflicts.jsonl`; neither date is promoted to `first_funded_on`.

The generated [review queue](../data/cohort/yc-2021/review-queue.jsonl) makes
the staging state explicit: 3 verified founded-2021 records, 42 records with
a 2021 sale candidate still awaiting first-funding verification, 13 with an
earlier candidate, 11 explicitly rejected identity joins, 3 related
predecessors, and 3 reviewed right-censored operating outcomes. No terminal
lifecycle rate is published yet.

Financing review is prioritized: the Mach9 filing was rejected as a
company-name-only near-match after reviewing the original filing and founder
names; the two Finary identity matches are also resolved, as are the ARQ,
GetDot, Coast, Lobby, Sleek, Purpose, Flux, gaiia, Lalabox, Forcyte,
Moonshot, Nourish, Axiom, Fathom, inBalance, Lendflow, Observa, Stoke Space,
and Taloflow joins, plus AOA Dx, Bite Ninja, BoldVoice, Breadcrumbs.io,
Evidence, Evidently AI, Heimdal, Hirebolt, Kodex, Laudable, Mable, Onsite Pro,
and Pirouette Pharma, plus Abacum, Alba Orbital, Auricle, authzed, Clay,
Codingal, Dyte, and Encord, plus Positional, Hilos, Zuma, Stepful, Turion
Space, Yummy, Fable, FifthTry, StrideQ, GroMo, Howdy.com, June, Mindee,
Moichor, Moxion Power, Poliglota, Queenly, Quicknode, Svix, and Zealth.
Noble is explicitly rejected as a generic-name collision. Twelve are rejected,
three are retained as predecessor relationships, and 55 are accepted. No
medium- or standard-priority joins remain. The accepted 2021 `SALE_DATE`
signals remain candidates rather than verified first-funding dates.

## Current publication rule

No lifecycle rate is published yet. A company enters a 2021 denominator only
after its founding or first-funding date is independently evidenced, and its
terminal or right-censored status has a source, observation date, and review
decision. The current 57 reviewed stories remain a separate outcome dataset;
they are not silently mixed into the 727-row YC sampling frame.

Useful checks:

```bash
python3 scripts/report_yc_2021_roster.py
python3 -m unittest discover -s tests -q
```
