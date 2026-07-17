"""Assemble the auditable 2021 YC cohort review queue.

The queue joins source roster metadata with reviewed founding-date decisions,
SEC sale-date candidates, and provisional lifecycle signals. It is a staging
artifact: no row receives a lifecycle outcome or ``first_funded_on`` here.
"""

from __future__ import annotations

import argparse
import json
from collections import Counter
from pathlib import Path


def _load(path: Path) -> list[dict]:
    rows = [json.loads(line) for line in path.read_text().splitlines() if line.strip()]
    if not rows:
        raise ValueError(f"empty sidecar: {path}")
    return rows


def _indexed(path: Path, key: str) -> dict[str, dict]:
    rows = _load(path)
    result = {}
    for row in rows:
        value = row.get(key)
        if not value or value in result:
            raise ValueError(f"duplicate or missing {key} in {path}: {value!r}")
        result[value] = row
    return result


def build_queue(
    roster_path: Path,
    enriched_path: Path,
    sec_candidates_path: Path,
    lifecycle_reviews_path: Path,
    sec_conflicts_path: Path,
    lifecycle_outcomes_path: Path,
    sec_reviews_path: Path,
) -> tuple[list[dict], dict]:
    roster = _indexed(roster_path, "id")
    enriched = _indexed(enriched_path, "id")
    sec_candidates = _indexed(sec_candidates_path, "startup_id")
    lifecycle_reviews = _indexed(lifecycle_reviews_path, "startup_id")
    conflicts = _indexed(sec_conflicts_path, "startup_id")
    lifecycle_outcomes = _indexed(lifecycle_outcomes_path, "startup_id")
    sec_reviews = _indexed(sec_reviews_path, "startup_id")
    if not set(lifecycle_outcomes).issubset(set(roster)):
        raise ValueError("reviewed lifecycle outcome IDs must be present in the roster")
    for outcome in lifecycle_outcomes.values():
        if outcome.get("review_status") != "reviewed" or outcome.get("outcome_type") not in {"active", "active_after_pivot", "dormant", "unknown"}:
            raise ValueError("reviewed lifecycle outcomes must use a reviewed non-terminal outcome")
        if not outcome.get("observed_through") or outcome.get("outcome_on") is not None:
            raise ValueError("reviewed non-terminal outcomes require observed_through and null outcome_on")

    if set(roster) != set(enriched) or set(roster) != set(sec_candidates):
        raise ValueError("roster, enriched roster, and SEC candidate IDs must match exactly")

    rows = []
    for startup_id in sorted(roster):
        source = roster[startup_id]
        dated = enriched[startup_id]
        sec = sec_candidates[startup_id]
        lifecycle = lifecycle_reviews.get(startup_id)
        lifecycle_outcome = lifecycle_outcomes.get(startup_id)
        conflict = conflicts.get(startup_id)
        sec_review = sec_reviews.get(startup_id)
        sec_review_decision = sec_review.get("decision") if sec_review else None
        sale_on = sec.get("sec_sale_candidate_on")
        if dated.get("cohort_eligibility") == "founded_2021":
            eligibility = "founded_2021_verified"
        elif sec_review_decision == "rejected_identity_match":
            eligibility = "sec_identity_rejected"
        elif sec_review_decision == "related_predecessor":
            eligibility = "predecessor_sale_before_2021"
        elif conflict is not None:
            eligibility = "funding_date_conflict"
        elif sale_on and sale_on.startswith("2021"):
            eligibility = "reported_sale_2021_pending_review"
        elif sale_on:
            eligibility = "reported_sale_before_2021"
        else:
            eligibility = "not_yet_eligible"
        identity_reviewed = startup_id in sec_reviews
        if conflict is not None and not identity_reviewed:
            review_priority = "high"
            review_reason = "resolve legal-entity identity or founding/funding chronology conflict"
        elif conflict is not None and identity_reviewed:
            review_priority = "resolved"
            review_reason = "date conflict reviewed; financing filing rejected or otherwise excluded from startup history"
        elif sec.get("match_status") == "ambiguous" and not identity_reviewed:
            review_priority = "high"
            review_reason = "resolve ambiguous legal-entity identity"
        elif sec.get("match_status") == "ambiguous" and identity_reviewed:
            review_priority = "resolved"
            review_reason = "identity reviewed; retain sale date as a financing candidate"
        elif sec_review_decision in {"accepted_identity_match", "rejected_identity_match", "related_predecessor"}:
            review_priority = "resolved"
            review_reason = "identity reviewed; retain, exclude, or separate this filing from first-funding history"
        elif sale_on and sale_on < "2021-01-01":
            review_priority = "medium"
            review_reason = "reported sale predates the 2021 cohort window"
        elif sale_on:
            review_priority = "standard"
            review_reason = "review 2021 sale candidate against original EDGAR filing and prior history"
        else:
            review_priority = "not_started"
            review_reason = "no exact SEC Form D match in supplied coverage"
        rows.append({
            "startup_id": startup_id,
            "name": source["name"],
            "batch": source["batch"],
            "yc_status": source["yc_status"],
            "founded_on": dated.get("founded_on"),
            "founded_on_review_status": dated.get("founded_on_review_status"),
            "founded_on_evidence_url": dated.get("founded_on_evidence_url"),
            "founded_on_evidence_quote": dated.get("founded_on_evidence_quote"),
            "sec_sale_candidate_on": sale_on,
            "first_observed_sale_on": sec.get("first_observed_sale_on"),
            "earliest_reported_sale_on": sec.get("earliest_reported_sale_on"),
            "sec_match_status": sec.get("match_status"),
            "sec_review_status": sec.get("review_status"),
            "sec_candidate_filing_count": sec.get("matched_filing_count", 0),
            "lifecycle_status_candidate": lifecycle_outcome.get("outcome_type") if lifecycle_outcome else lifecycle.get("status_candidate") if lifecycle else None,
            "lifecycle_review_status": lifecycle_outcome.get("review_status") if lifecycle_outcome else lifecycle.get("review_status") if lifecycle else None,
            "reviewed_outcome_type": lifecycle_outcome.get("outcome_type") if lifecycle_outcome else None,
            "reviewed_outcome_on": lifecycle_outcome.get("outcome_on") if lifecycle_outcome else None,
            "reviewed_observed_through": lifecycle_outcome.get("observed_through") if lifecycle_outcome else None,
            "right_censored": bool(lifecycle_outcome and lifecycle_outcome.get("right_censored")),
            "sec_date_conflict": conflict is not None,
            "eligibility_decision": eligibility,
            "review_priority": review_priority,
            "review_reason": review_reason,
            "sec_identity_reviewed": identity_reviewed,
            "sec_identity_review_decision": sec_review_decision,
            "first_funded_on": None,
            "outcome_type": None,
            "outcome_on": None,
            "observed_through": None,
            "publishable_outcome": lifecycle_outcome is not None,
        })
    summary = {
        "records": len(rows),
        "eligibility_counts": dict(sorted(Counter(row["eligibility_decision"] for row in rows).items())),
        "founded_2021_verified": sum(row["eligibility_decision"] == "founded_2021_verified" for row in rows),
        "reported_sale_2021_pending_review": sum(row["eligibility_decision"] == "reported_sale_2021_pending_review" for row in rows),
        "lifecycle_status_candidates": sum(row["lifecycle_status_candidate"] is not None for row in rows),
        "publishable_outcomes": sum(row["publishable_outcome"] for row in rows),
        "reviewed_right_censored": sum(row["right_censored"] for row in rows),
        "review_priority_counts": dict(sorted(Counter(row["review_priority"] for row in rows).items())),
    }
    return rows, summary


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    root = Path("data/cohort/yc-2021")
    parser.add_argument("--roster", type=Path, default=root / "roster.jsonl")
    parser.add_argument("--enriched", type=Path, default=root / "roster-enriched.jsonl")
    parser.add_argument("--sec-candidates", type=Path, default=root / "sec-sale-candidates.jsonl")
    parser.add_argument("--lifecycle-reviews", type=Path, default=root / "lifecycle-status-reviews.jsonl")
    parser.add_argument("--sec-conflicts", type=Path, default=root / "sec-date-conflicts.jsonl")
    parser.add_argument("--lifecycle-outcomes", type=Path, default=root / "lifecycle-outcomes-reviewed.jsonl")
    parser.add_argument("--sec-reviews", type=Path, default=root / "sec-sale-reviews.jsonl")
    parser.add_argument("--output", type=Path, default=root / "review-queue.jsonl")
    parser.add_argument("--summary", type=Path, default=root / "review-queue.summary.json")
    args = parser.parse_args()
    rows, summary = build_queue(args.roster, args.enriched, args.sec_candidates, args.lifecycle_reviews, args.sec_conflicts, args.lifecycle_outcomes, args.sec_reviews)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text("".join(json.dumps(row, ensure_ascii=False, sort_keys=True) + "\n" for row in rows))
    args.summary.write_text(json.dumps(summary, indent=2, sort_keys=True) + "\n")
    print(json.dumps(summary, indent=2, sort_keys=True))


if __name__ == "__main__":
    main()
