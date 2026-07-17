from __future__ import annotations

import argparse
import json
import re
from collections import Counter
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

STATUSES = {"discovered", "ready_for_review", "blocked", "rejected", "promoted"}
SOURCE_FAMILIES = {"first_party", "independent_reporting", "community_primary", "archive"}


class CandidateError(ValueError):
    pass


def normalize_name(value: str) -> str:
    return re.sub(r"[^a-z0-9]", "", value.casefold())


def validate_candidate(candidate: dict) -> None:
    required = {"id", "name", "canonical_domain", "status", "priority", "discovered_on", "sources", "notes"}
    missing = sorted(required - candidate.keys())
    if missing:
        raise CandidateError(f"missing fields: {', '.join(missing)}")
    if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", candidate["id"]):
        raise CandidateError("id must be a lowercase slug")
    if not isinstance(candidate["name"], str) or not candidate["name"].strip():
        raise CandidateError("name must be non-empty")
    if candidate["status"] not in STATUSES:
        raise CandidateError("invalid status")
    if candidate["priority"] not in {1, 2, 3}:
        raise CandidateError("priority must be 1, 2, or 3")
    try:
        date.fromisoformat(candidate["discovered_on"])
    except (TypeError, ValueError) as exc:
        raise CandidateError("discovered_on must be an ISO date") from exc
    if not isinstance(candidate["sources"], list) or not candidate["sources"]:
        raise CandidateError("at least one candidate source is required")
    for source in candidate["sources"]:
        if set(source) != {"url", "source_family"}:
            raise CandidateError("candidate sources require url and source_family")
        parsed = urlparse(source["url"])
        if parsed.scheme not in {"http", "https"} or not parsed.netloc:
            raise CandidateError("candidate source URL must be absolute http(s)")
        if source["source_family"] not in SOURCE_FAMILIES:
            raise CandidateError("invalid source_family")


def load_jsonl(path: Path, validator) -> list[dict]:
    records = []
    for number, line in enumerate(path.read_text().splitlines(), 1):
        if not line.strip():
            continue
        try:
            record = json.loads(line)
            validator(record)
        except (json.JSONDecodeError, ValueError) as exc:
            raise CandidateError(f"{path}:{number}: {exc}") from exc
        records.append(record)
    return records


def triage_report(candidates: list[dict], reviewed: list[dict]) -> dict:
    reviewed_ids = {item["id"] for item in reviewed}
    reviewed_names = {normalize_name(item["name"]): item["id"] for item in reviewed}
    reviewed_domains = {item["canonical_domain"]: item["id"] for item in reviewed if item.get("canonical_domain")}
    duplicate_matches = []
    promoted_matches = []
    promoted_without_record = []
    seen_ids = set()
    for candidate in candidates:
        reasons = []
        if candidate["id"] in seen_ids:
            reasons.append("duplicate_candidate_id")
        if candidate["id"] in reviewed_ids:
            reasons.append("reviewed_id")
        normalized = normalize_name(candidate["name"])
        if normalized in reviewed_names:
            reasons.append(f"reviewed_name:{reviewed_names[normalized]}")
        domain = candidate.get("canonical_domain")
        if domain and domain in reviewed_domains:
            reasons.append(f"reviewed_domain:{reviewed_domains[domain]}")
        if candidate["status"] == "promoted":
            if candidate["id"] in reviewed_ids:
                promoted_matches.append(candidate["id"])
            else:
                promoted_without_record.append(candidate["id"])
        elif reasons:
            duplicate_matches.append({"candidate_id": candidate["id"], "reasons": reasons})
        seen_ids.add(candidate["id"])

    statuses = Counter(item["status"] for item in candidates)
    families = Counter(source["source_family"] for item in candidates for source in item["sources"])
    return {
        "candidates": len(candidates),
        "ready_for_review": statuses["ready_for_review"],
        "statuses": dict(sorted(statuses.items())),
        "source_families": dict(sorted(families.items())),
        "duplicate_matches": duplicate_matches,
        "promoted_matches": promoted_matches,
        "promoted_without_record": promoted_without_record,
    }


def main() -> None:
    from .contract import validate

    parser = argparse.ArgumentParser(description="Report Startup Graveyard candidate-review readiness")
    parser.add_argument("--candidates", type=Path, required=True)
    parser.add_argument("--reviewed", type=Path, required=True)
    args = parser.parse_args()
    candidates = load_jsonl(args.candidates, validate_candidate)
    reviewed = load_jsonl(args.reviewed, validate)
    print(json.dumps(triage_report(candidates, reviewed), indent=2, sort_keys=True))


if __name__ == "__main__":
    main()
