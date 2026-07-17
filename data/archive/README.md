# Inactive research snapshots

These JSONL files preserve the full research state from before Startup
Graveyard moved from an outcome-date slice to an explicit 2021 startup cohort.

- `reviewed-through-2026-07-16.jsonl` contains the complete reviewed snapshot,
  including both active and pre-2021 cases.
- `candidates-through-2026-07-16.jsonl` contains the corresponding candidate
  and promotion history.

They are not build inputs and do not appear in the database, quality metrics,
or website. The active files remain `data/raw/startups.jsonl` and
`data/candidates.jsonl`; records without resolved cohort metadata remain
outcome-only until enriched.
