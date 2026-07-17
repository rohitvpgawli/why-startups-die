"""Apply reviewed founding-date decisions to a derived YC roster.

The frozen ``roster.jsonl`` is never modified. This command creates a staging
copy with date evidence attached; it still contains no lifecycle outcomes.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path


def apply_reviews(roster_path: Path, reviews_path: Path, output_path: Path) -> int:
    rows = {
        row["id"]: row
        for row in (json.loads(line) for line in roster_path.read_text().splitlines() if line.strip())
    }
    reviews = {}
    for line in reviews_path.read_text().splitlines():
        if line.strip():
            review = json.loads(line)
            if review["startup_id"] in reviews:
                raise ValueError(f"duplicate review for {review['startup_id']}")
            reviews[review["startup_id"]] = review

    for row in rows.values():
        row["founded_on"] = None
        row["founded_on_review_status"] = "pending"
        row["founded_on_evidence_url"] = None
        row["founded_on_evidence_quote"] = None
        row["cohort_eligibility"] = "pending"
        review = reviews.get(row["id"])
        if review is None:
            continue
        row["founded_on_review_status"] = review["decision"]
        row["founded_on_evidence_url"] = review["evidence_url"]
        row["founded_on_evidence_quote"] = review["evidence_quote"]
        if review["decision"] == "accepted" and review["accepted_value"] == "2021":
            row["founded_on"] = "2021"
            row["cohort_eligibility"] = "founded_2021"

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(
        "".join(json.dumps(row, ensure_ascii=False, sort_keys=True) + "\n"
                for row in sorted(rows.values(), key=lambda item: item["id"]))
    )
    return len(rows)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--roster", type=Path, default=Path("data/cohort/yc-2021/roster.jsonl"))
    parser.add_argument("--reviews", type=Path, default=Path("data/cohort/yc-2021/founding-date-reviews.jsonl"))
    parser.add_argument("--output", type=Path, default=Path("data/cohort/yc-2021/roster-enriched.jsonl"))
    args = parser.parse_args()
    count = apply_reviews(args.roster, args.reviews, args.output)
    print(f"wrote {count} derived roster rows to {args.output}")


if __name__ == "__main__":
    main()
