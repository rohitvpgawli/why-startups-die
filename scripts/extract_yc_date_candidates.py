"""Extract explicit founding-year claims from the frozen YC descriptions.

The output is a review queue, not a promoted Startup Graveyard record. Only an
explicit statement in a YC description is extracted; batch membership,
``launched_at``, and directory status are never treated as founding evidence.
"""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

FOUNDING_CLAIM = re.compile(r".{0,180}\bfounded in (?P<year>20\d{2})\b.{0,220}", re.IGNORECASE)


def _quote(text: str) -> str | None:
    match = FOUNDING_CLAIM.search(" ".join(text.split()))
    if not match:
        return None
    return " ".join(match.group(0).split())


def extract_row(row: dict, source_file: Path) -> dict | None:
    description = row.get("long_description") or ""
    quote = _quote(description)
    if quote is None:
        return None
    year = FOUNDING_CLAIM.search(" ".join(description.split())).group("year")
    return {
        "startup_id": f"yc-{row['batch'].lower().replace(' ', '-')}-{row['slug']}",
        "name": row["name"],
        "batch": row["batch"],
        "candidate_field": "founded_on",
        "candidate_value": year,
        "evidence_url": row.get("url"),
        "evidence_source_type": "company",
        "evidence_quote": quote,
        "evidence_method": "yc_long_description_exact_phrase",
        "source_snapshot": str(source_file),
        "review_status": "needs_review",
        "reviewed_on": None,
    }


def extract(raw_dir: Path, output: Path) -> int:
    candidates: dict[str, dict] = {}
    for source_file in sorted(raw_dir.glob("*.json")):
        for row in json.loads(source_file.read_text()):
            candidate = extract_row(row, source_file)
            if candidate is not None:
                candidates[candidate["startup_id"]] = candidate
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(
        "".join(json.dumps(item, ensure_ascii=False, sort_keys=True) + "\n"
                for item in sorted(candidates.values(), key=lambda item: item["startup_id"]))
    )
    return len(candidates)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--raw-dir", type=Path, default=Path("data/cohort/yc-2021/raw"))
    parser.add_argument("--output", type=Path, default=Path("data/cohort/yc-2021/founding-date-candidates.jsonl"))
    args = parser.parse_args()
    count = extract(args.raw_dir, args.output)
    print(f"extracted {count} founding-date candidates to {args.output}")


if __name__ == "__main__":
    main()
