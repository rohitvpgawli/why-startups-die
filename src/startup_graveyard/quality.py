from __future__ import annotations

import argparse
import json
import sqlite3
from collections import Counter
from pathlib import Path


def report(database: Path) -> dict:
    connection = sqlite3.connect(database)
    connection.row_factory = sqlite3.Row
    try:
        startups = connection.execute("SELECT * FROM startups ORDER BY id").fetchall()
        startup_columns = {column[1] for column in connection.execute("PRAGMA table_info(startups)")}
        sources = connection.execute("SELECT * FROM sources").fetchall()
        factors = connection.execute("SELECT * FROM factors").fetchall()
    finally:
        connection.close()

    source_types = Counter(row["source_type"] for row in sources)
    outcome_types = Counter(row["outcome_type"] for row in startups)
    factor_categories = Counter(row["category"] for row in factors)
    scalar_fields = (
        "canonical_domain", "founded_on", "first_funded_on", "cohort_basis",
        "cohort_year", "observed_through", "hq_country", "funding_usd", "funding_stage",
    )
    total = len(startups)
    missingness = {
        field: (
            round(sum(row[field] is None for row in startups) / total, 3)
            if total and field in startup_columns else (None if not total else 1.0)
        )
        for field in scalar_fields
    }
    cohort_fields = ("first_funded_on", "cohort_basis", "cohort_year")
    cohort_coverage = {
        field: (
            round(sum(row[field] is not None for row in startups) / total, 3)
            if total and field in startup_columns else (None if not total else 0.0)
        )
        for field in cohort_fields
    }
    primary_sources = source_types["company"] + source_types["founder"]
    return {
        "startups": total,
        "reviewed_startups": sum(row["review_status"] == "reviewed" for row in startups),
        "sources": len(sources),
        "factor_claims": len(factors),
        "primary_source_share": round(primary_sources / len(sources), 3) if sources else None,
        "missingness": missingness,
        "cohort_coverage": cohort_coverage,
        "outcomes": dict(sorted(outcome_types.items())),
        "source_types": dict(sorted(source_types.items())),
        "factor_categories": dict(sorted(factor_categories.items())),
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Report Startup Graveyard cohort quality")
    parser.add_argument("--database", type=Path, required=True)
    args = parser.parse_args()
    print(json.dumps(report(args.database), indent=2, sort_keys=True))


if __name__ == "__main__":
    main()
