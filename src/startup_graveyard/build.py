from __future__ import annotations

import argparse
import json
import sqlite3
from pathlib import Path

from .contract import ContractError, validate

SCHEMA = """
PRAGMA foreign_keys = ON;
CREATE TABLE startups (
  id TEXT PRIMARY KEY, name TEXT NOT NULL, canonical_domain TEXT,
  founded_on TEXT, first_funded_on TEXT, cohort_basis TEXT, cohort_year INTEGER,
  observed_through TEXT,
  outcome_on TEXT, outcome_type TEXT NOT NULL,
  sector TEXT NOT NULL, hq_country TEXT, funding_usd INTEGER,
  funding_stage TEXT, summary TEXT NOT NULL, review_status TEXT NOT NULL,
  reviewed_on TEXT NOT NULL
);
CREATE TABLE sources (
  startup_id TEXT NOT NULL REFERENCES startups(id), source_id TEXT NOT NULL,
  url TEXT NOT NULL, title TEXT NOT NULL, publisher TEXT NOT NULL,
  published_on TEXT NOT NULL, source_type TEXT NOT NULL,
  PRIMARY KEY (startup_id, source_id)
);
CREATE TABLE factors (
  startup_id TEXT NOT NULL, category TEXT NOT NULL, is_primary INTEGER NOT NULL,
  confidence REAL NOT NULL, source_id TEXT NOT NULL, evidence TEXT NOT NULL,
  FOREIGN KEY (startup_id, source_id) REFERENCES sources(startup_id, source_id)
);
"""


def load(path: Path) -> list[dict]:
    records = []
    seen = set()
    for number, line in enumerate(path.read_text().splitlines(), 1):
        if not line.strip():
            continue
        try:
            record = json.loads(line)
            validate(record)
        except (json.JSONDecodeError, ContractError) as exc:
            raise ContractError(f"{path}:{number}: {exc}") from exc
        if record["id"] in seen:
            raise ContractError(f"{path}:{number}: duplicate id {record['id']}")
        seen.add(record["id"])
        records.append(record)
    return records


def build(records: list[dict], output: Path) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    connection = sqlite3.connect(output)
    try:
        connection.executescript("DROP TABLE IF EXISTS factors; DROP TABLE IF EXISTS sources; DROP TABLE IF EXISTS startups;")
        connection.executescript(SCHEMA)
        for record in records:
            connection.execute(
                """INSERT INTO startups (
                    id, name, canonical_domain, founded_on, first_funded_on,
                    cohort_basis, cohort_year, observed_through, outcome_on,
                    outcome_type, sector,
                    hq_country, funding_usd, funding_stage, summary,
                    review_status, reviewed_on
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
                tuple(record.get(key) for key in (
                    "id", "name", "canonical_domain", "founded_on", "first_funded_on",
                    "cohort_basis", "cohort_year", "observed_through", "outcome_on",
                    "outcome_type", "sector",
                    "hq_country", "funding_usd", "funding_stage", "summary",
                    "review_status", "reviewed_on",
                )),
            )
            for source in record["sources"]:
                connection.execute("INSERT INTO sources VALUES (?, ?, ?, ?, ?, ?, ?)", (
                    record["id"], source["id"], source["url"], source["title"],
                    source["publisher"], source["published_on"], source["source_type"],
                ))
            for factor in record["factors"]:
                connection.execute("INSERT INTO factors VALUES (?, ?, ?, ?, ?, ?)", (
                    record["id"], factor["category"], int(factor["is_primary"]),
                    factor["confidence"], factor["source_id"], factor["evidence"],
                ))
        connection.commit()
    finally:
        connection.close()


def main() -> None:
    parser = argparse.ArgumentParser(description="Build the Startup Graveyard database")
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    records = load(args.input)
    build(records, args.output)
    factors = sum(len(record["factors"]) for record in records)
    print(f"built {args.output} with {len(records)} startups and {factors} factor claims")


if __name__ == "__main__":
    main()
