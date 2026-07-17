"""Cut a versioned, citable data release into releases/<version>/.

Exports every table as CSV plus the analysis JSON and proxy validation,
with SHA-256 checksums and a data README. Releases are committed to git —
they ARE the citable artifact; the DuckDB file stays local.

Usage: PYTHONPATH=src .venv/bin/python scripts/make_release.py v1.0.0
"""
from __future__ import annotations

import hashlib
import json
import shutil
import sys
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))
from lifecycle.db import PROJECT_ROOT, connect  # noqa: E402

TABLES = [
    "companies", "funding_rounds", "timeline_events", "wayback_snapshots",
    "wayback_notices", "hn_mentions", "shutdown_enrichment",
]


def main(version: str) -> None:
    out = PROJECT_ROOT / "releases" / version
    out.mkdir(parents=True, exist_ok=True)

    with connect() as con:
        for t in TABLES:
            path = out / f"{t}.csv"
            con.execute(f"COPY (SELECT * FROM {t} ORDER BY 1) TO '{path}' (HEADER, DELIMITER ',')")
            n = con.execute(f"SELECT count(*) FROM {t}").fetchone()[0]
            print(f"  {t}.csv: {n} rows")

    for extra in ("export.json", "proxy_validation.json"):
        src = PROJECT_ROOT / "data" / extra
        if src.exists():
            shutil.copy(src, out / extra)

    checksums = []
    for f in sorted(out.iterdir()):
        if f.name in ("SHA256SUMS", "README.md"):
            continue
        digest = hashlib.sha256(f.read_bytes()).hexdigest()
        checksums.append(f"{digest}  {f.name}")
    (out / "SHA256SUMS").write_text("\n".join(checksums) + "\n")

    (out / "README.md").write_text(f"""# Startup Lifecycle Project — data release {version}

Snapshot date: {date.today()}. Cohort: Y Combinator batches 2021–2026
(3,566 companies). See the repository README for full methodology,
entity-resolution rules, and known limitations — read the limitations
before citing any rate.

Files: one CSV per pipeline table (schema in repository `schema.sql`),
`export.json` (aggregates, Kaplan-Meier curves with Greenwood CIs, Wilson
CIs on all rates), `proxy_validation.json` (death-proxy error sample),
`SHA256SUMS`.

License: data compiled from public sources (YC directory via yc-oss,
Wayback Machine, Hacker News via Algolia, SEC EDGAR); the compilation is
released CC BY 4.0. Cite as:

> Gawli, R. (2026). The Startup Lifecycle Project: outcomes of Y Combinator
> startups, 2021–2026 batches. Data release {version}.
""")
    print(f"release written to {out}")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "v1.0.0")
