# 2021 YC cohort date-enrichment plan

This plan enriches the frozen YC Winter 2021/Summer 2021 sampling frame. It
does not change cohort membership, infer outcomes from YC status, or fill a
date merely because a company participated in a 2021 batch.

The roster is a public-launch frame (727 records in the current snapshot), not
the complete set of companies YC funded. `batch_year = 2021` therefore remains
separate from the lifecycle fields `founded_on` and `first_funded_on`.

## Date fields and provenance

Date values may be a year, year-month, or full ISO date. Every non-null value
must carry a source URL, retrieval date, extraction method, and evidence text.
Use an enrichment sidecar or reviewed record rather than modifying the raw YC
JSON. Recommended fields are:

| Field | Meaning |
| --- | --- |
| `founded_on` | When the startup began, based on an explicit company/founder statement; legal incorporation is a separate field. |
| `legal_incorporation_on` | Incorporation date for the matched legal entity, when available. It is not automatically the startup founding date. |
| `first_funded_on` | Earliest evidenced institutional financing date. A Form D `SALE_DATE` is a first-sale proxy, not proof of every funding event. |
| `funding_announcement_on` | Date a public source announced a round; this is not substituted for the transaction date. |
| `yc_batch` / `yc_batch_year` | YC participation metadata. Never convert this to `first_funded_on`. |
| `date_precision` | `year`, `month`, or `day`; do not add precision absent from the source. |
| `date_method` / `source_id` / `evidence` | How the value was obtained, its URL/key, and a short supporting quote. |

## Source hierarchy

### 1. YC identity and company evidence

Use the frozen YC record as the identity anchor: YC company ID, slug, former
names, canonical domain, YC profile URL, and batch. The YC `long_description`
or a linked company/founder page may contain an explicit statement such as
“founded in 2021.” Extract only the stated date and preserve the sentence and
URL. A missing statement remains null.

The YC batch is useful context, but it is not a founding date or a universally
valid first-funding date. YC pages and statuses are current, mutable signals;
they must not be promoted to `active`, `shutdown`, or another outcome without
independent evidence.

### 2. Government or registry records

For a legal-entity match, OpenCorporates can provide an incorporation date,
jurisdiction, current status, previous names, registry URL, and provenance:
<https://api.opencorporates.com/documentation/API-Reference>. The API requires
an account token and coverage varies by jurisdiction. Store this as
`legal_incorporation_on`; only use it as `founded_on` when the source itself
explicitly equates the two. Companies House or another official registry may
be used for a known jurisdiction under the same rule.

### 3. SEC Form D first-sale proxy

The SEC publishes quarterly Form D bulk files at
<https://www.sec.gov/data-research/sec-markets-data/form-d-data-sets>; the
schema is documented at <https://www.sec.gov/files/Form_D.pdf>. Download the
2021 Q1–Q4 files (and later quarters when studying follow-on rounds). Join the
tab-delimited tables on `ACCESSIONNUMBER`:

- `ISSUERS`: `CIK`, `ENTITYNAME`, `JURISDICTIONOFINC`, and
  `YEAROFINC_VALUE_ENTERED`.
- `FORMDSUBMISSION`: `FILING_DATE`, `FILE_NUM`, and submission type.
- `OFFERING`: `SALE_DATE`, `ISAMENDMENT`, `PREVIOUSACCESSIONNUMBER`, and
  offering/sold amounts.

Match a Form D issuer to the YC roster by exact legal name or a reviewed alias,
then confirm jurisdiction/address. Do not accept a name-only match when there
are plausible alternatives. For an accepted match:

1. Follow the amendment chain using `PREVIOUSACCESSIONNUMBER`.
2. Start with the earliest non-amendment `SALE_DATE`, but use a later
   amendment's explicitly corrected date when the chain changes it. Retain
   the initial value, corrected value, amendment flag, and every accession URL
   so the reviewer can see the discrepancy.
3. If `YETTOOCCUR` is set or `SALE_DATE` is absent, leave the candidate null.
4. Preserve `FILING_DATE` separately; it is when the notice was filed, not the
   first sale.

Form D covers only issuers that filed a U.S. exempt-offering notice. It can
include funds and non-startup entities, and the data are “as filed,” including
amendments and possible errors. Review the original EDGAR filing before a
candidate becomes a reviewed date. A Form D date is evidence of a reported
offering, not a claim that the company had no earlier bootstrapping or funding.

### 4. Public funding announcements (fallback)

Use GDELT DOC 2.0 or a linked primary announcement to find dated funding
coverage: <https://blog.gdeltproject.org/gdelt-doc-2-0-api-debuts/>. Keep the
article URL, publication date, query, and quote in an event table as
`funding_announcement_on`. An announcement date is not silently converted to
`first_funded_on`; it can be later than the transaction and may describe a
follow-on round.

## Acceptance rules

1. Unknown is valid. Do not invent a date from the YC batch, `launched_at`, a
   domain-registration date, a dead/alive website, or an unverified database.
2. Keep partial precision (`2021`, `2021-03`) when that is all the source
   supports. Never manufacture month/day values.
3. Require a source URL and evidence quote for every accepted date. Record the
   retrieval date and source type (`company`, `founder`, `regulatory`,
   `journalism`, or `archive`).
4. Keep competing candidates rather than overwriting them. A reviewer chooses
   the accepted value and records why; rejected candidates remain auditable.
5. Do not assign lifecycle outcomes from `yc_status`, website availability,
   hiring flags, or a missing Form D. Outcomes require separate evidence and
   review.
6. A company is eligible for a 2021 founded cohort only when `founded_on` is
   known to have year 2021. It is eligible for a 2021 first-funded cohort only
   when `first_funded_on` is evidenced to have year 2021. Batch membership alone
   qualifies neither axis.

## Minimal sidecar shape

```json
{
  "startup_id": "yc-winter-2021-example",
  "founded_on": null,
  "legal_incorporation_on": null,
  "first_funded_on": null,
  "funding_announcement_on": null,
  "yc_batch": "Winter 2021",
  "date_candidates": [],
  "review_status": "needs_review",
  "reviewed_on": null
}
```

The empty candidates in this example are intentional: no date should be
written until a source and evidence have been reviewed.

The first automated review queue is generated with:

```bash
python3 scripts/extract_yc_date_candidates.py
```

It extracts only exact `founded in YYYY` phrases from the frozen YC
descriptions into `founding-date-candidates.jsonl`. These are candidate claims
with `review_status: "needs_review"`; they are not yet eligible cohort fields.

The SEC candidate queue is generated offline after downloading the official
quarterly ZIPs into a temporary directory. The current run uses 2018 Q1
through 2021 Q4 so earlier reported sales can be surfaced:

```bash
python3 scripts/fetch_sec_form_d_data.py \
  --start-year 2018 \
  --end-year 2021 \
  --output-dir /tmp/formd-history
python3 scripts/build_sec_form_d_candidates.py \
  --zip-dir /tmp/formd-history \
  --coverage-label 'SEC Form D 2018 Q1 through 2021 Q4'
```

The script emits one row per roster company, including unmatched rows, so
coverage is auditable. Name matching is intentionally conservative and the
output's `sec_sale_candidate_on` is never copied into `first_funded_on` without
review of the underlying EDGAR filing and the historical filing chain.
