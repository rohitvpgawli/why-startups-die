from __future__ import annotations

from pathlib import Path

import duckdb

PROJECT_ROOT = Path(__file__).resolve().parents[2]
DB_PATH = PROJECT_ROOT / "data" / "lifecycle.duckdb"
SCHEMA_PATH = PROJECT_ROOT / "schema.sql"


def connect() -> duckdb.DuckDBPyConnection:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    return duckdb.connect(str(DB_PATH))


def init_db() -> None:
    with connect() as con:
        con.execute(SCHEMA_PATH.read_text())
    print(f"schema applied -> {DB_PATH}")
