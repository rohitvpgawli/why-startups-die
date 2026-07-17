# Editorial workflow

Startup Graveyard separates discovery from publication. Finding a convincing
article is not enough to create a reviewed company record.

## Review states

1. `discovered` — a potentially useful outcome or postmortem was found.
2. `ready_for_review` — the candidate has at least one accessible source that
   supports the outcome and appears detailed enough for factor extraction.
3. `blocked` — the outcome is plausible, but a source is inaccessible,
   contradictory, or too vague.
4. `rejected` — the candidate is out of scope, duplicated, or unsupported.
5. `promoted` — the candidate completed review and now has a canonical record
   in `data/raw/startups.jsonl`.

Only records in `data/raw/startups.jsonl` are published. Candidate records in
`data/candidates.jsonl` are an internal research queue and must never appear in
the explorer or aggregate analyses.

## Required review pass

- Confirm the cohort basis and year (`founded_on` or `first_funded_on`) instead
  of using the outcome date as a proxy for cohort membership. A 2021 outcome
  from an older company is an outcome record, not automatically a 2021 cohort
  member.
- Record `observed_through` for active, dormant, and otherwise right-censored
  companies. Do not convert an absent public trail into a shutdown.
- Confirm the company identity and distinguish similarly named businesses.
- Confirm the outcome status. Terminal outcomes require an event date, while
  active, dormant, and unknown records use `observed_through` and leave
  `outcome_on` null. Never assume an announcement date is the same as an
  operational closure date.
- Prefer company and founder sources; add independent reporting when it changes
  or challenges the account.
- Encode every factor as a sourced claim with a short paraphrase and editorial
  confidence.
- Preserve unknown values and partial dates.
- Check for duplicate ID, normalized name, and canonical domain.
- Record the review date and set `review_status` to `reviewed` only after a
  human has inspected every cited page.

## Source families

- `first_party`: company announcements and founder postmortems
- `independent_reporting`: professional journalism and regulatory records
- `community_primary`: a directly attributable founder or company statement on
  a community platform such as Hacker News or LinkedIn
- `archive`: archived copies used when the original is unavailable

Launch requires three independent source families across the cohort; this does
not mean that three sources are required for every company.
