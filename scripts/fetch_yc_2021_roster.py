"""Fetch and freeze the publicly launched YC W21/S21 roster.

This is a sampling frame, not a reviewed outcome dataset. YC's directory status
is retained as a source field and is never promoted to shutdown/active evidence
without a separate review pass.
"""

from __future__ import annotations

import argparse
import hashlib
import json
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse
from urllib.request import Request, urlopen

BATCHES = ("winter-2021", "summer-2021")
BASE_URL = "https://raw.githubusercontent.com/yc-oss/api/main/batches/{batch}.json"


def fetch(url: str) -> bytes:
    request = Request(url, headers={"User-Agent": "startup-graveyard/2026 roster fetch"})
    with urlopen(request, timeout=30) as response:
        return response.read()


def host(url: str | None) -> str | None:
    if not url:
        return None
    parsed = urlparse(url)
    return parsed.hostname.lower() if parsed.hostname else None


def normalize(row: dict, batch: str, retrieved_at: str, source_url: str) -> dict:
    return {
        "id": f"yc-{batch}-{row['slug']}",
        "name": row["name"],
        "aliases": row.get("former_names") or [],
        "canonical_domain": host(row.get("website")),
        "website": row.get("website"),
        "yc_profile_url": row.get("url"),
        "yc_api_url": row.get("api"),
        "batch": row.get("batch", batch.replace("-", " ").title()),
        "batch_year": 2021,
        "cohort_basis": "yc_batch",
        "cohort_year": 2021,
        "all_locations": row.get("all_locations"),
        "industry": row.get("industry"),
        "subindustry": row.get("subindustry"),
        "industries": row.get("industries") or [],
        "regions": row.get("regions") or [],
        "tags": row.get("tags") or [],
        "one_liner": row.get("one_liner"),
        "team_size": row.get("team_size"),
        "stage": row.get("stage"),
        "yc_status": row.get("status"),
        "is_hiring": bool(row.get("isHiring")),
        "nonprofit": bool(row.get("nonprofit")),
        "roster_source": source_url,
        "retrieved_at": retrieved_at,
        "review_status": "unreviewed",
        "outcome_type": None,
        "outcome_on": None,
        "observed_through": None,
    }


def build_roster(output_dir: Path) -> dict:
    retrieved_at = datetime.now(timezone.utc).replace(microsecond=0).isoformat()
    raw_dir = output_dir / "raw"
    raw_dir.mkdir(parents=True, exist_ok=True)
    records: list[dict] = []
    files: list[dict] = []

    for batch in BATCHES:
        source_url = BASE_URL.format(batch=batch)
        payload = fetch(source_url)
        raw_path = raw_dir / f"{batch}.json"
        raw_path.write_bytes(payload)
        rows = json.loads(payload)
        records.extend(normalize(row, batch, retrieved_at, source_url) for row in rows)
        files.append({
            "batch": batch,
            "source_url": source_url,
            "path": str(raw_path.relative_to(output_dir)),
            "records": len(rows),
            "sha256": hashlib.sha256(payload).hexdigest(),
        })

    deduped = {record["id"]: record for record in records}
    if len(deduped) != len(records):
        raise ValueError("duplicate YC roster ids detected")
    roster_path = output_dir / "roster.jsonl"
    roster_path.write_text(
        "".join(
            json.dumps(record, ensure_ascii=False, sort_keys=True) + "\n"
            for record in sorted(deduped.values(), key=lambda item: item["id"])
        )
    )
    manifest = {
        "retrieved_at": retrieved_at,
        "source_repository": "https://github.com/yc-oss/api",
        "source_note": "Publicly launched companies with YC directory pages; not the full funded-company denominator.",
        "batches": files,
        "records": len(deduped),
        "output": "roster.jsonl",
    }
    (output_dir / "manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n")
    return manifest


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output-dir", type=Path, default=Path("data/cohort/yc-2021"))
    args = parser.parse_args()
    manifest = build_roster(args.output_dir)
    print(f"wrote {manifest['records']} YC 2021 roster records to {args.output_dir}")


if __name__ == "__main__":
    main()
