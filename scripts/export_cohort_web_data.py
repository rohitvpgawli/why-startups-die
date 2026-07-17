"""Export a frozen cohort roster and sampling-frame summary for the web app.

YC directory status is descriptive metadata, not a reviewed lifecycle outcome.
"""

from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime, timezone
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from scripts.report_yc_2021_roster import report


HEADER = """export type SamplingFrameBreakdown = {
  label: string;
  count: number;
};

export type SamplingFrameCompany = {
  id: string;
  name: string;
  slug: string;
  batch: string;
  launched_on: string | null;
  description: string;
  industry: string;
  tags: string[];
  status: string;
  team_size: number | null;
  website: string | null;
  yc_profile_url: string;
};

export type SamplingFrame = {
  id: string;
  title: string;
  description: string;
  records: number;
  retrieved_at: string;
  source_repository: string;
  source_note: string;
  companies: SamplingFrameCompany[];
  batches: SamplingFrameBreakdown[];
  directory_status: SamplingFrameBreakdown[];
  review_progress: {
    verified_founded_2021: number;
    sale_candidates_2021: number;
    sale_candidates_before_2021: number;
    publishable_outcomes: number;
    reviewed_right_censored: number;
    high_priority_reviews: number;
  };
};

// Generated from a frozen cohort roster. Do not edit by hand.
"""


def export_summary(roster_path: Path, manifest_path: Path, output_path: Path, review_summary_path: Path) -> int:
    metrics = report(roster_path, manifest_path)
    manifest = json.loads(manifest_path.read_text())
    review_summary = json.loads(review_summary_path.read_text())
    roster = [json.loads(line) for line in roster_path.read_text().splitlines() if line.strip()]
    raw_rows = {}
    raw_dir = roster_path.parent / "raw"
    for raw_path in sorted(raw_dir.glob("*.json")):
        for raw_row in json.loads(raw_path.read_text()):
            raw_rows[raw_row["slug"]] = raw_row

    def launched_on(value: int | None) -> str | None:
        if value is None:
            return None
        return datetime.fromtimestamp(value, tz=timezone.utc).date().isoformat()

    companies = [
        {
            "id": row["id"],
            "name": row["name"],
            "slug": row["yc_api_url"].rsplit("/", 1)[-1].removesuffix(".json"),
            "batch": row["batch"],
            "launched_on": launched_on(raw_rows.get(row["yc_api_url"].rsplit("/", 1)[-1].removesuffix(".json"), {}).get("launched_at")),
            "description": row.get("one_liner") or "",
            "industry": row.get("industry") or "—",
            "tags": row.get("tags") or [],
            "status": row.get("yc_status") or "Unknown",
            "team_size": row.get("team_size"),
            "website": row.get("website"),
            "yc_profile_url": row["yc_profile_url"],
        }
        for row in roster
    ]
    payload = {
        "id": "yc-2021",
        "title": "YC 2021 public-directory sampling frame",
        "description": "A frozen roster of publicly launched YC Winter 2021 and Summer 2021 directory records. It defines a research frame, not a complete YC-funded-company denominator or a reviewed outcome dataset.",
        "records": metrics["records"],
        "retrieved_at": manifest["retrieved_at"],
        "source_repository": manifest["source_repository"],
        "source_note": manifest["source_note"],
        "companies": companies,
        "batches": [
            {"label": label, "count": count}
            for label, count in sorted(metrics["batch_counts"].items())
        ],
        "directory_status": [
            {"label": label, "count": count}
            for label, count in sorted(metrics["yc_status_counts"].items())
        ],
        "review_progress": {
            "verified_founded_2021": review_summary["founded_2021_verified"],
            "sale_candidates_2021": review_summary["reported_sale_2021_pending_review"],
            "sale_candidates_before_2021": review_summary["eligibility_counts"]["reported_sale_before_2021"],
            "publishable_outcomes": review_summary["publishable_outcomes"],
            "reviewed_right_censored": review_summary["reviewed_right_censored"],
            "high_priority_reviews": review_summary["review_priority_counts"].get("high", 0),
        },
    }
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(f"{HEADER}export const yc2021SamplingFrame = {json.dumps(payload, indent=2, ensure_ascii=False)} satisfies SamplingFrame;\n")
    return metrics["records"]


def main() -> None:
    parser = argparse.ArgumentParser(description="Export a frozen cohort sampling-frame summary for the web explorer")
    parser.add_argument("--roster", type=Path, default=Path("data/cohort/yc-2021/roster.jsonl"))
    parser.add_argument("--manifest", type=Path, default=Path("data/cohort/yc-2021/manifest.json"))
    parser.add_argument("--output", type=Path, default=Path("web/app/cohort.generated.ts"))
    parser.add_argument("--review-summary", type=Path, default=Path("data/cohort/yc-2021/review-queue.summary.json"))
    args = parser.parse_args()
    count = export_summary(args.roster, args.manifest, args.output, args.review_summary)
    print(f"exported {count} cohort records as a sampling-frame summary to {args.output}")


if __name__ == "__main__":
    main()
