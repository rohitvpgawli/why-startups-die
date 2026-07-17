# Data contract

The raw interface is newline-delimited JSON. One line represents a canonical
startup and embeds its evidence-backed factor claims. The build converts this
interface into normalized SQLite tables.

The 2021 study cohort is defined by a cohort field, not by the year in which an
outcome was observed. A company may have been founded before 2021 and first
funded in 2021, or founded in 2021 and funded later. Analyses must keep these
cases separate and state which cohort they use. Pre-2021 research is retained
as an inactive archive and is excluded from published cohort metrics unless a
future release explicitly says otherwise.

Each release also declares an analysis cutoff (`observed_through`). Events
after that date are outside the release. Companies with no documented terminal
event by the cutoff are right-censored; they must not be silently counted as
shutdowns. `unknown` means the available public evidence cannot support a more
specific outcome and is reported separately from every terminal outcome.
The release cutoff should be fixed before collection is summarized (normally the
latest complete observation date); per-company `observed_through` values may be
earlier when evidence was last checked earlier.

## Required startup fields

| Field | Type | Rule |
|---|---|---|
| `id` | string | stable lowercase slug |
| `name` | string | non-empty display name |
| `canonical_domain` | string or null | hostname only |
| `founded_on` | partial ISO date or null | `YYYY`, `YYYY-MM`, or `YYYY-MM-DD` |
| `first_funded_on` | partial ISO date or null | first institutional funding date, when known |
| `cohort_basis` | enum or null | `founded_on` or `first_funded_on`; identifies the 2021 cohort axis |
| `cohort_year` | integer or null | calendar year used with `cohort_basis` (the active study year is 2021) |
| `observed_through` | partial ISO date or null | latest date through which the company's public status was reviewed |
| `outcome_on` | partial ISO date or null | terminal-event date; null for active-at-cutoff or right-censored records |
| `outcome_type` | enum | value from product vocabulary |
| `sector` | string | normalized editorial category |
| `hq_country` | string or null | ISO 3166-1 alpha-2 |
| `funding_usd` | integer or null | non-negative nominal USD |
| `funding_stage` | string or null | normalized last known stage |
| `summary` | string | neutral, sourced synopsis |
| `review_status` | enum | `reviewed` or `needs_review` |
| `reviewed_on` | ISO date | date of the latest human evidence review |
| `sources` | array | at least one source object |
| `factors` | array | zero or more factor claims |

When either cohort metadata field is present, both `cohort_basis` and
`cohort_year` are required. The corresponding date field must be present and
its year must equal `cohort_year`. Records may omit cohort fields while they are
being researched; they are not eligible for a 2021 cohort estimate until the
basis and year are resolved. A missing `first_funded_on` does not
mean the company was unfunded—it means the date is not established by the
reviewed evidence.

`observed_through` is required for new non-terminal records (`active`,
`active_after_pivot`, `dormant`, or `unknown`). Legacy terminal records may
omit it while they are being migrated; new terminal records should include it
so the release cutoff and evidence freshness are auditable.

## Source object

Required: `url`, `title`, `publisher`, `published_on`, and `source_type`.
`source_type` is one of `company`, `founder`, `journalism`, `regulatory`, or
`archive`. A source ID is local to its startup record and referenced by factor
claims.

## Factor claim

Required: `category`, `is_primary`, `confidence`, `source_id`, and `evidence`.
Confidence is an editorial score in `[0, 1]`; it is not a statistical
probability. Evidence is a short paraphrase or legally usable excerpt retained
for auditability.

## Missing data

Unknown scalar values are represented as JSON `null`, never empty strings,
zeroes, or invented defaults. Unknown factors use the `unknown` category only
when a source explicitly leaves the reason unclear; absence of a factor claim
is otherwise preferred. An unresolved outcome uses `outcome_type: "unknown"`;
it is not a synonym for `shutdown`.

Date precision is retained in the value itself. For example, `2025-08` means
the source supports August 2025 but not a specific day. Pipelines must not
silently convert it to August 1. Analyses that estimate duration from partial
dates must label that duration as approximate. The release-level
`observed_through` cutoff is fixed before metrics are computed; a company with
no event by that date is right-censored rather than failed. Censoring and
unknownness must be visible in denominators and filters.
