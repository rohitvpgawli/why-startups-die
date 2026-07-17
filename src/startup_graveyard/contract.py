from __future__ import annotations

from datetime import date
import re
from urllib.parse import urlparse

OUTCOME_TYPES = {
    "shutdown", "wind_down", "acquired", "acquihire", "pivoted", "ipo",
    "active", "active_after_pivot", "dormant", "unknown",
}
# These statuses describe a company that has not reached a dated terminal
# outcome.  Their outcome_on value may therefore be null (right-censored).
NON_TERMINAL_OUTCOMES = {"active", "active_after_pivot", "dormant", "unknown"}
# Cohort membership is based on an explicit lifecycle/funding field, rather
# than on the date at which a company reached an outcome.  The latter is an
# observation about the end of a chapter and can occur years after founding or
# first funding.
COHORT_BASES = {"founded_on", "first_funded_on"}
FACTOR_CATEGORIES = {
    "product_market_fit", "unit_economics", "fundraising", "competition",
    "market_timing", "regulation", "operations", "founder_or_team",
    "technology", "external_shock", "strategic_change", "unknown",
}
SOURCE_TYPES = {"company", "founder", "journalism", "regulatory", "archive"}
REVIEW_STATUSES = {"reviewed", "needs_review"}


class ContractError(ValueError):
    pass


def _date(value: str | None, field: str) -> date | None:
    if value is None:
        return None
    try:
        return date.fromisoformat(value)
    except (TypeError, ValueError) as exc:
        raise ContractError(f"{field} must be an ISO date") from exc


def _partial_date(value: str | None, field: str) -> tuple[int, ...] | None:
    if value is None:
        return None
    if not isinstance(value, str) or not re.fullmatch(r"\d{4}(?:-\d{2}(?:-\d{2})?)?", value):
        raise ContractError(f"{field} must be YYYY, YYYY-MM, YYYY-MM-DD, or null")
    parts = tuple(int(part) for part in value.split("-"))
    try:
        if len(parts) >= 2 and not 1 <= parts[1] <= 12:
            raise ValueError
        if len(parts) == 3:
            date(*parts)
    except ValueError as exc:
        raise ContractError(f"{field} is not a valid partial ISO date") from exc
    return parts


def validate(record: dict) -> None:
    required = {"id", "name", "outcome_on", "outcome_type", "sector", "summary", "review_status", "reviewed_on", "sources", "factors"}
    missing = sorted(required - record.keys())
    if missing:
        raise ContractError(f"missing fields: {', '.join(missing)}")
    if not record["id"] or record["id"].lower() != record["id"] or " " in record["id"]:
        raise ContractError("id must be a non-empty lowercase slug")
    if not isinstance(record["name"], str) or not record["name"].strip():
        raise ContractError("name must be non-empty")
    outcome_type = record["outcome_type"]
    if outcome_type not in OUTCOME_TYPES:
        raise ContractError("invalid outcome_type")
    founded = _partial_date(record.get("founded_on"), "founded_on")
    first_funded = _partial_date(record.get("first_funded_on"), "first_funded_on")
    observed_through = _partial_date(record.get("observed_through"), "observed_through")
    outcome = _partial_date(record["outcome_on"], "outcome_on")
    if outcome is None and outcome_type not in NON_TERMINAL_OUTCOMES:
        raise ContractError("outcome_on is required for terminal outcome_type")
    if outcome_type in NON_TERMINAL_OUTCOMES and observed_through is None:
        raise ContractError("observed_through is required for non-terminal outcome_type")
    if founded and outcome and tuple(list(outcome) + [1] * (3 - len(outcome))) < tuple(list(founded) + [1] * (3 - len(founded))):
        raise ContractError("outcome_on must not precede founded_on")
    if outcome and observed_through and tuple(list(observed_through) + [1] * (3 - len(observed_through))) < tuple(list(outcome) + [1] * (3 - len(outcome))):
        raise ContractError("observed_through must not precede outcome_on")

    cohort_basis = record.get("cohort_basis")
    if cohort_basis is not None and cohort_basis not in COHORT_BASES:
        raise ContractError("cohort_basis must be founded_on or first_funded_on")
    cohort_year = record.get("cohort_year")
    if cohort_year is not None and (
        isinstance(cohort_year, bool) or not isinstance(cohort_year, int) or not 1900 <= cohort_year <= 2100
    ):
        raise ContractError("cohort_year must be an integer between 1900 and 2100 or null")

    # Cohort metadata is optional for legacy records.  Once either side of the
    # basis/year pair is supplied, both are required; the basis must identify
    # an available date and the explicit year must agree with that date.  A
    # first_funded_on date may still be captured before its cohort assignment
    # is editorially resolved.
    basis_date = {"founded_on": founded, "first_funded_on": first_funded}.get(cohort_basis)
    if cohort_basis is None and cohort_year is not None:
        raise ContractError("cohort_basis is required when cohort_year is set")
    if cohort_basis is not None and cohort_year is None:
        raise ContractError("cohort_year is required when cohort_basis is set")
    if cohort_basis is not None and basis_date is None:
        raise ContractError(f"{cohort_basis} is required when cohort_basis is set")
    if cohort_year is not None and cohort_basis is not None and basis_date is not None and basis_date[0] != cohort_year:
        raise ContractError("cohort_year must match the year in the selected cohort date")
    if record["review_status"] not in REVIEW_STATUSES:
        raise ContractError("invalid review_status")
    _date(record["reviewed_on"], "reviewed_on")
    funding = record.get("funding_usd")
    if funding is not None and (not isinstance(funding, int) or funding < 0):
        raise ContractError("funding_usd must be a non-negative integer or null")
    sources = record["sources"]
    if not isinstance(sources, list) or not sources:
        raise ContractError("at least one source is required")
    source_ids = set()
    for source in sources:
        needed = {"id", "url", "title", "publisher", "published_on", "source_type"}
        if needed - source.keys():
            raise ContractError("source is missing required fields")
        if source["id"] in source_ids:
            raise ContractError("source ids must be unique within a record")
        source_ids.add(source["id"])
        parsed = urlparse(source["url"])
        if parsed.scheme not in {"http", "https"} or not parsed.netloc:
            raise ContractError("source url must be absolute http(s)")
        _date(source["published_on"], "source.published_on")
        if source["source_type"] not in SOURCE_TYPES:
            raise ContractError("invalid source_type")
    primary_count = 0
    for factor in record["factors"]:
        needed = {"category", "is_primary", "confidence", "source_id", "evidence"}
        if needed - factor.keys():
            raise ContractError("factor is missing required fields")
        if factor["category"] not in FACTOR_CATEGORIES:
            raise ContractError("invalid factor category")
        if factor["source_id"] not in source_ids:
            raise ContractError("factor references an unknown source")
        if not isinstance(factor["confidence"], (int, float)) or not 0 <= factor["confidence"] <= 1:
            raise ContractError("factor confidence must be between 0 and 1")
        if not isinstance(factor["evidence"], str) or not factor["evidence"].strip():
            raise ContractError("factor evidence must be non-empty")
        primary_count += factor["is_primary"] is True
    if primary_count > 1:
        raise ContractError("at most one factor may be primary")
