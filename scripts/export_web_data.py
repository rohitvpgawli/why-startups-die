"""Export reviewed JSONL records into the static web application bundle."""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from src.startup_graveyard.contract import validate

HEADER = """export type Source = {
  id: string;
  url: string;
  title: string;
  publisher: string;
  published_on: string;
  source_type: \"company\" | \"founder\" | \"journalism\" | \"regulatory\" | \"archive\";
};

export type Factor = {
  category: string;
  is_primary: boolean;
  confidence: number;
  source_id: string;
  evidence: string;
};

export type CohortBasis = "founded_on" | "first_funded_on";

export type Startup = {
  id: string;
  name: string;
  canonical_domain: string | null;
  founded_on: string | null;
  first_funded_on?: string | null;
  cohort_basis?: CohortBasis | null;
  cohort_year?: number | null;
  observed_through?: string | null;
  outcome_on: string | null;
  outcome_type: \"shutdown\" | \"wind_down\" | \"acquired\" | \"acquihire\" | \"pivoted\" | \"active\" | \"active_after_pivot\" | \"dormant\" | \"ipo\" | \"unknown\";
  sector: string;
  hq_country: string | null;
  funding_usd: number | null;
  funding_stage: string | null;
  summary: string;
  review_status: \"reviewed\" | \"needs_review\";
  reviewed_on: string;
  sources: Source[];
  factors: Factor[];
};

// Generated from data/raw/startups.jsonl. Do not edit by hand.
// Cohort fields are explicit metadata and are intentionally independent of outcome_on.
"""


def export(input_path: Path, output_path: Path) -> int:
    records = []
    for line_number, line in enumerate(input_path.read_text().splitlines(), 1):
        if not line.strip():
            continue
        record = json.loads(line)
        try:
            validate(record)
        except ValueError as exc:
            raise ValueError(f"{input_path}:{line_number}: {exc}") from exc
        records.append(record)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(records, indent=2, ensure_ascii=False)
    output_path.write_text(f"{HEADER}export const startups = {payload} satisfies Startup[];\n")
    return len(records)


def main() -> None:
    parser = argparse.ArgumentParser(description="Export reviewed startup data for the web explorer")
    parser.add_argument("--input", type=Path, default=Path("data/raw/startups.jsonl"))
    parser.add_argument("--output", type=Path, default=Path("web/app/startups.generated.ts"))
    args = parser.parse_args()
    count = export(args.input, args.output)
    print(f"exported {count} reviewed startup records to {args.output}")


if __name__ == "__main__":
    main()
