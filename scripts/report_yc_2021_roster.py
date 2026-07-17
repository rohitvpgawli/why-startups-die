"""Validate and summarize the frozen YC 2021 sampling frame.

The roster is a source-defined sampling frame, not a lifecycle dataset.  In
particular, ``batch_year`` describes the YC batch and must not be interpreted
as the company's founding year.  YC's directory ``yc_status`` is retained as
source metadata and is never promoted to a Startup Graveyard outcome.
"""

from __future__ import annotations

import argparse
import hashlib
import json
from collections import Counter
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse


class RosterError(ValueError):
    """Raised when a roster or its manifest is malformed."""


REQUIRED_FIELDS = {
    "id",
    "name",
    "batch",
    "batch_year",
    "cohort_basis",
    "cohort_year",
    "yc_status",
    "roster_source",
    "retrieved_at",
    "review_status",
    "outcome_type",
    "outcome_on",
    "observed_through",
}

# These fields are deliberately included in missingness even though they are
# not part of the YC source.  Their absence makes the batch/founding caveat
# visible in the report instead of allowing a batch year to stand in for it.
OPTIONAL_FIELDS = (
    "canonical_domain",
    "website",
    "all_locations",
    "industry",
    "subindustry",
    "team_size",
    "founded_on",
    "first_funded_on",
    "outcome_type",
    "outcome_on",
    "observed_through",
)

URL_FIELDS = ("roster_source", "website", "yc_profile_url", "yc_api_url")


def _missing(value: object) -> bool:
    return value is None or value == "" or value == []


def _url(value: object, field: str, *, required: bool = False) -> None:
    if value in (None, "") and not required:
        return
    if not isinstance(value, str):
        raise RosterError(f"{field} must be an absolute http(s) URL or null")
    parsed = urlparse(value)
    if parsed.scheme not in {"http", "https"} or not parsed.netloc:
        raise RosterError(f"{field} must be an absolute http(s) URL")


def _timestamp(value: object, field: str) -> None:
    if not isinstance(value, str):
        raise RosterError(f"{field} must be an ISO timestamp")
    try:
        datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError as exc:
        raise RosterError(f"{field} must be an ISO timestamp") from exc


def validate_record(record: dict) -> None:
    """Validate one normalized YC roster record.

    A roster row cannot carry a lifecycle outcome.  Such evidence belongs in a
    separately reviewed Startup Graveyard record, so non-null outcome fields
    are rejected here rather than silently treated as verified statuses.
    """

    missing = sorted(REQUIRED_FIELDS - record.keys())
    if missing:
        raise RosterError(f"missing fields: {', '.join(missing)}")
    record_id = record["id"]
    if not isinstance(record_id, str) or not record_id or record_id.lower() != record_id or " " in record_id:
        raise RosterError("id must be a non-empty lowercase slug")
    if not isinstance(record["name"], str) or not record["name"].strip():
        raise RosterError("name must be non-empty")
    if not isinstance(record["batch"], str) or not record["batch"].strip():
        raise RosterError("batch must be a non-empty string")
    if record["batch_year"] != 2021 or record["cohort_year"] != 2021:
        raise RosterError("YC 2021 roster records must have batch_year and cohort_year equal to 2021")
    if record["cohort_basis"] != "yc_batch":
        raise RosterError("cohort_basis must be yc_batch for this roster")
    if not isinstance(record["yc_status"], str) or not record["yc_status"].strip():
        raise RosterError("yc_status must be a non-empty source status")
    if record["review_status"] != "unreviewed":
        raise RosterError("YC roster rows must remain unreviewed until lifecycle evidence is checked")
    for field in URL_FIELDS:
        _url(record.get(field), field, required=field == "roster_source")
    _timestamp(record["retrieved_at"], "retrieved_at")
    for field in ("outcome_type", "outcome_on", "observed_through"):
        if record[field] is not None:
            raise RosterError(f"{field} must be null in a source roster; review lifecycle evidence separately")
    if record.get("team_size") is not None and (
        not isinstance(record["team_size"], int) or isinstance(record["team_size"], bool) or record["team_size"] < 0
    ):
        raise RosterError("team_size must be a non-negative integer or null")


def load_roster(path: Path) -> list[dict]:
    """Load and validate a JSONL roster, including duplicate checks."""

    records: list[dict] = []
    seen_ids: set[str] = set()
    seen_domains: dict[str, str] = {}
    for line_number, line in enumerate(path.read_text().splitlines(), 1):
        if not line.strip():
            continue
        try:
            record = json.loads(line)
            if not isinstance(record, dict):
                raise RosterError("record must be a JSON object")
            validate_record(record)
        except (json.JSONDecodeError, RosterError, TypeError) as exc:
            raise RosterError(f"{path}:{line_number}: {exc}") from exc
        if record["id"] in seen_ids:
            raise RosterError(f"{path}:{line_number}: duplicate id {record['id']}")
        domain = record.get("canonical_domain")
        if domain and domain in seen_domains:
            raise RosterError(
                f"{path}:{line_number}: duplicate canonical_domain {domain} "
                f"(already used by {seen_domains[domain]})"
            )
        seen_ids.add(record["id"])
        if domain:
            seen_domains[domain] = record["id"]
        records.append(record)
    if not records:
        raise RosterError(f"{path}: roster is empty")
    return records


def validate_manifest(manifest_path: Path, roster_path: Path, records: list[dict]) -> dict:
    """Validate manifest counts and hashes against the frozen source files."""

    try:
        manifest = json.loads(manifest_path.read_text())
    except (OSError, json.JSONDecodeError) as exc:
        raise RosterError(f"cannot read manifest {manifest_path}: {exc}") from exc
    if not isinstance(manifest, dict) or not isinstance(manifest.get("batches"), list):
        raise RosterError("manifest must contain a batches list")
    expected_records = manifest.get("records")
    if expected_records != len(records):
        raise RosterError(f"manifest records={expected_records} but roster has {len(records)} rows")

    batch_checks: list[dict] = []
    for batch in manifest["batches"]:
        for field in ("batch", "source_url", "path", "records", "sha256"):
            if field not in batch:
                raise RosterError(f"manifest batch is missing {field}")
        source_path = manifest_path.parent / batch["path"]
        if not source_path.exists():
            raise RosterError(f"manifest source file does not exist: {source_path}")
        payload = source_path.read_bytes()
        try:
            rows = json.loads(payload)
        except json.JSONDecodeError as exc:
            raise RosterError(f"manifest source file is not valid JSON: {source_path}") from exc
        if not isinstance(rows, list):
            raise RosterError(f"manifest source file must contain a JSON list: {source_path}")
        actual_hash = hashlib.sha256(payload).hexdigest()
        if batch["records"] != len(rows):
            raise RosterError(f"manifest records for {batch['batch']} do not match raw source")
        if batch["sha256"] != actual_hash:
            raise RosterError(f"manifest hash for {batch['batch']} does not match raw source")
        roster_batch = batch["batch"].replace("-", " ").casefold()
        roster_count = sum(
            record["batch"].casefold() == roster_batch
            for record in records
        )
        if roster_count != len(rows):
            raise RosterError(
                f"manifest records for {batch['batch']} do not match roster batch count "
                f"({roster_count} vs {len(rows)})"
            )
        batch_checks.append({
            "batch": batch["batch"],
            "records": len(rows),
            "roster_records": roster_count,
            "sha256_match": True,
            "path": str(source_path),
        })
    return {"records": expected_records, "batches": batch_checks}


def report(
    roster_path: Path,
    manifest_path: Path | None = None,
    date_candidates_path: Path | None = None,
    status_reviews_path: Path | None = None,
    sec_candidates_path: Path | None = None,
    sec_reviews_path: Path | None = None,
    sec_conflicts_path: Path | None = None,
) -> dict:
    """Return batch/status/missingness metrics for a validated roster."""

    records = load_roster(roster_path)
    total = len(records)
    batch_counts = Counter(record["batch"] for record in records)
    status_counts = Counter(record["yc_status"] for record in records)
    review_counts = Counter(record["review_status"] for record in records)
    missingness = {
        field: sum(_missing(record.get(field)) for record in records)
        for field in OPTIONAL_FIELDS
    }
    missingness_share = {
        field: round(count / total, 4)
        for field, count in missingness.items()
    }
    result = {
        "records": total,
        "batch_counts": dict(sorted(batch_counts.items())),
        "yc_status_counts": dict(sorted(status_counts.items())),
        "review_status_counts": dict(sorted(review_counts.items())),
        "missingness": missingness,
        "missingness_share": missingness_share,
        "outcome_fields_populated": {
            field: total - missingness[field]
            for field in ("outcome_type", "outcome_on", "observed_through")
        },
        "manifest": None,
        "caveats": [
            "YC batch year is not the company's founding year; cohort_year=2021 here means YC batch membership only.",
            "This is a roster of publicly launched YC companies in Winter 2021 and Summer 2021, not all companies founded or funded in 2021.",
            "yc_status is directory metadata, not a verified active, dormant, acquired, or shutdown outcome.",
            "Founding and first-funding dates must be separately sourced before a company enters a lifecycle denominator.",
        ],
    }
    if manifest_path is not None:
        result["manifest"] = validate_manifest(manifest_path, roster_path, records)
    if date_candidates_path is not None:
        candidates = [
            json.loads(line)
            for line in date_candidates_path.read_text().splitlines()
            if line.strip()
        ]
        result["date_candidates"] = {
            "records": len(candidates),
            "by_candidate_value": dict(sorted(Counter(item.get("candidate_value") for item in candidates).items())),
            "review_status_counts": dict(sorted(Counter(item.get("review_status") for item in candidates).items())),
        }
    if status_reviews_path is not None:
        status_reviews = [
            json.loads(line)
            for line in status_reviews_path.read_text().splitlines()
            if line.strip()
        ]
        if any(item.get("decision") != "provisional" or item.get("review_status") != "needs_review" for item in status_reviews):
            raise RosterError("lifecycle status sidecar may only contain provisional needs_review records")
        result["lifecycle_status_candidates"] = {
            "records": len(status_reviews),
            "status_candidates": dict(sorted(Counter(item.get("status_candidate") for item in status_reviews).items())),
            "decision_counts": dict(sorted(Counter(item.get("decision") for item in status_reviews).items())),
        }
    if sec_candidates_path is not None:
        sec_candidates = [
            json.loads(line)
            for line in sec_candidates_path.read_text().splitlines()
            if line.strip()
        ]
        if len(sec_candidates) != total:
            raise RosterError(
                f"SEC candidate sidecar has {len(sec_candidates)} rows but roster has {total}"
            )
        if any(item.get("first_funded_on") is not None for item in sec_candidates):
            raise RosterError("SEC candidate sidecar must not promote first_funded_on")
        result["sec_sale_candidates"] = {
            "records": len(sec_candidates),
            "match_status_counts": dict(sorted(Counter(item.get("match_status") for item in sec_candidates).items())),
            "review_status_counts": dict(sorted(Counter(item.get("review_status") for item in sec_candidates).items())),
            "candidate_dates": sum(item.get("sec_sale_candidate_on") is not None for item in sec_candidates),
        }
    if sec_reviews_path is not None:
        sec_reviews = [
            json.loads(line)
            for line in sec_reviews_path.read_text().splitlines()
            if line.strip()
        ]
        if any(item.get("review_status") != "reviewed" for item in sec_reviews):
            raise RosterError("SEC identity reviews must be marked reviewed")
        if any(item.get("decision") not in {"accepted_identity_match", "rejected_identity_match", "related_predecessor"} for item in sec_reviews):
            raise RosterError("SEC identity review has an unsupported decision")
        if any(item.get("first_funded_on") is not None for item in sec_reviews):
            raise RosterError("SEC identity reviews must not promote first_funded_on")
        result["sec_identity_reviews"] = {
            "records": len(sec_reviews),
            "decision_counts": dict(sorted(Counter(item.get("decision") for item in sec_reviews).items())),
        }
    if sec_conflicts_path is not None:
        sec_conflicts = [
            json.loads(line)
            for line in sec_conflicts_path.read_text().splitlines()
            if line.strip()
        ]
        if any(item.get("review_status") != "reviewed" for item in sec_conflicts):
            raise RosterError("SEC date conflicts must be marked reviewed")
        if any(item.get("decision") not in {"unresolved_date_conflict", "resolved_identity_mismatch"} for item in sec_conflicts):
            raise RosterError("SEC date conflict has an unsupported decision")
        if any(item.get("first_funded_on") is not None for item in sec_conflicts):
            raise RosterError("SEC date conflicts must not promote first_funded_on")
        result["sec_date_conflicts"] = {
            "records": len(sec_conflicts),
            "decision_counts": dict(sorted(Counter(item.get("decision") for item in sec_conflicts).items())),
        }
    return result


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--roster", type=Path, default=Path("data/cohort/yc-2021/roster.jsonl"))
    parser.add_argument("--manifest", type=Path, default=Path("data/cohort/yc-2021/manifest.json"))
    parser.add_argument("--date-candidates", type=Path, default=None)
    parser.add_argument("--sec-candidates", type=Path, default=None)
    args = parser.parse_args()
    candidates_path = args.date_candidates
    if candidates_path is None:
        default_candidates = args.roster.parent / "founding-date-candidates.jsonl"
        candidates_path = default_candidates if default_candidates.exists() else None
    status_path = args.roster.parent / "lifecycle-status-reviews.jsonl"
    status_path = status_path if status_path.exists() else None
    sec_path = args.sec_candidates
    if sec_path is None:
        default_sec = args.roster.parent / "sec-sale-candidates.jsonl"
        sec_path = default_sec if default_sec.exists() else None
    sec_reviews_path = args.roster.parent / "sec-sale-reviews.jsonl"
    sec_reviews_path = sec_reviews_path if sec_reviews_path.exists() else None
    sec_conflicts_path = args.roster.parent / "sec-date-conflicts.jsonl"
    sec_conflicts_path = sec_conflicts_path if sec_conflicts_path.exists() else None
    print(json.dumps(report(args.roster, args.manifest, candidates_path, status_path, sec_path, sec_reviews_path, sec_conflicts_path), indent=2, sort_keys=True))


if __name__ == "__main__":
    main()
