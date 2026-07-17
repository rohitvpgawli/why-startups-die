# Product specification: MVP

## Product promise

Startup Graveyard helps founders, operators, and investors learn from startup
lifecycles without turning endings into spectacle. A visitor should be able to
see what happened, when it happened, what evidence supports the account, and
what patterns appear across comparable companies.

The primary study population is startups founded in 2021 or first receiving
institutional funding in 2021. These are separate cohort axes (`founded_on`
and `first_funded_on`) and must be reported separately; a combined view is
allowed only when its membership rule is explicit. The design studies the
ZIRP-era funding boom and the repricing, fundraising constraints, and
operating corrections that followed—not the full history of venture-backed
companies.

Every release freezes an `observed_through` cutoff before analysis; it must not
move with the page-view date. A company with no documented terminal event by
that date is right-censored. It may be
active, dormant, or simply under-observed; none of those states is evidence of
failure. The cutoff and censoring rules are displayed wherever a metric is
shown.

## Primary audience

- Founders evaluating recurring risks and trade-offs
- Operators and investors researching lifecycle patterns
- Data practitioners evaluating the reproducibility of the analysis

## MVP experience

### Graveyard explorer

Filter reviewed records by cohort axis/year, sector, geography, funding stage,
status at the observation cutoff, and cited factor. Show the denominator,
sample size, right-censored count, and unknown values alongside every aggregate.

### Company story

Each profile contains a neutral summary, founded and first-funded dates when
known, cohort basis/year, outcome date when an event was observed,
`observed_through`, status at the cutoff, funding information when sourced, a
lifecycle timeline, and contributing factor claims. Each claim links to
evidence and displays provenance type and confidence.

### Launch analyses

1. Cohort funnel at the fixed cutoff: terminal outcomes, active, dormant, and
   unknown, with a right-censoring flag, split by sector and funding stage
2. Time-to-event summaries that retain right-censored companies rather than
   treating them as failures
3. Co-occurring cited factors among documented terminal outcomes, with
   denominators and missingness
4. Funding raised versus observed lifespan across the rate-cycle reset,
   explicitly avoiding causal language

## Outcome vocabulary

- `shutdown`: operations ceased without a continuing business
- `wind_down`: an orderly cessation announced by the company
- `acquired`: business or material assets purchased and continued
- `acquihire`: acquisition primarily framed around the team
- `pivoted`: original product ended while the legal entity continued
- `ipo`: the company reached a public listing during the observation window
- `active`: evidence supports ongoing operations at the cutoff
- `active_after_pivot`: the original product ended but the company continued
  with a materially different product at the cutoff
- `dormant`: no confirmed terminal event, with little or no evidence of current
  operations; treated as right-censored
- `unknown`: public evidence does not support a more precise label

Only terminal outcomes (`shutdown`, `wind_down`, `acquired`, `acquihire`,
`pivoted`, and `ipo`) are events in time-to-event analyses. `active`,
`active_after_pivot`, `dormant`, and `unknown` are non-terminal statuses at the
cutoff and must remain visible in denominators.

## Factor vocabulary

- `product_market_fit`
- `unit_economics`
- `fundraising`
- `competition`
- `market_timing`
- `regulation`
- `operations`
- `founder_or_team`
- `technology`
- `external_shock`
- `strategic_change`
- `unknown`

These are cited contributing factors, not definitive causes. A record can have
multiple factors, and the primary designation reflects editorial judgment.

## Launch acceptance criteria

- A documented denominator of at least 100 reviewed, cohort-eligible companies
  (founded in 2021 and/or first funded in 2021), from at least three independent
  source families
- Every status or terminal outcome has at least one accessible source and an
  `observed_through` date
- Terminal outcomes have an event date; non-terminal statuses do not invent one
- Every factor claim points to an evidence excerpt and source
- Duplicate detection and an explicit manual review queue
- Automated schema, date, vocabulary, and referential-integrity checks
- Aggregate views expose denominator, record count, censoring, and missingness
- A methodology page documents collection limitations and selection bias
- A reproducible one-command local build

The current seed records do not meet the denominator requirement and must not
be presented as failure or survival rates. Until the 2021 roster is assembled,
and first-funded dates are systematically enriched, the product is an
evidence-backed case explorer and methodology demonstration.

## Explicitly out of scope for MVP

- Predicting whether active startups will fail
- Ranking founders or investors
- Scraping sites in violation of their terms
- Treating funding or headcount correlations as causal
- Publishing personal or sensitive information
