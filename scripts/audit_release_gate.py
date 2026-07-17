"""Audit source, generated-site, and 100-record release-gate counts."""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from src.startup_graveyard.contract import validate


def _records(path: Path) -> list[dict]:
    rows = [json.loads(line) for line in path.read_text().splitlines() if line.strip()]
    for row in rows:
        validate(row)
    return rows


def _generated_export(path: Path, variable: str, suffix: str) -> list[dict] | dict:
    text = path.read_text()
    match = re.search(rf"export const {re.escape(variable)} = (\[.*\]|\{{.*\}}) {re.escape(suffix)}\n", text, re.S)
    if not match:
        raise ValueError(f"could not find {variable} export in {path}")
    return json.loads(match.group(1))


def audit(
    source_path: Path = Path("data/raw/startups.jsonl"),
    generated_path: Path = Path("web/app/startups.generated.ts"),
    roster_path: Path = Path("data/cohort/yc-2021/roster.jsonl"),
    cohort_generated_path: Path = Path("web/app/cohort.generated.ts"),
    minimum: int = 100,
) -> dict:
    source = _records(source_path)
    generated = _generated_export(generated_path, "startups", "satisfies Startup[];")
    roster = [json.loads(line) for line in roster_path.read_text().splitlines() if line.strip()]
    frame = _generated_export(cohort_generated_path, "yc2021SamplingFrame", "satisfies SamplingFrame;")
    source_ids = {row["id"] for row in source}
    generated_ids = {row["id"] for row in generated}
    cohort_eligible = [row for row in source if row.get("cohort_year") and row.get("cohort_basis")]
    return {
        "minimum": minimum,
        "reviewed_source_records": len(source),
        "reviewed_source_unique_ids": len(source_ids),
        "reviewed_cohort_eligible_records": len(cohort_eligible),
        "generated_site_records": len(generated),
        "generated_site_unique_ids": len(generated_ids),
        "generated_site_matches_source": generated_ids == source_ids and len(generated) == len(source),
        "sampling_frame_source_records": len(roster),
        "sampling_frame_generated_records": frame["records"],
        "sampling_frame_matches_source": frame["records"] == len(roster),
        "gates": {
            "site_has_minimum_reviewed_stories": len(generated) >= minimum,
            "reviewed_cohort_gate": len(cohort_eligible) >= minimum,
            "sampling_frame_has_minimum_startups": len(roster) >= minimum,
        },
        "missing_reviewed_stories": max(0, minimum - len(source)),
        "missing_reviewed_cohort_records": max(0, minimum - len(cohort_eligible)),
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="Audit Startup Graveyard release-gate counts")
    parser.add_argument("--minimum", type=int, default=100)
    parser.add_argument("--strict", action="store_true", help="return non-zero when a reviewed gate is not met")
    args = parser.parse_args()
    result = audit(minimum=args.minimum)
    print(json.dumps(result, indent=2, sort_keys=True))
    return 1 if args.strict and not all(result["gates"].values()) else 0


if __name__ == "__main__":
    raise SystemExit(main())
