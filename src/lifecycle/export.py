"""Export the dataset as JSON for the dashboard.

Aggregates for the full cohort; full detail (timeline, HN evidence, Form D
rounds, enrichment) only for Inactive companies to keep the payload small.
"""
from __future__ import annotations

import json
from datetime import date
from pathlib import Path

from lifecycle.db import PROJECT_ROOT, connect

EXPORT_PATH = PROJECT_ROOT / "data" / "export.json"

# Approximate batch start months for lifespan math.
SEASON_MONTH = {"Winter": 1, "Spring": 4, "Summer": 6, "Fall": 9}


def batch_start(batch: str, year: int) -> str:
    for season, month in SEASON_MONTH.items():
        if batch and batch.startswith(season):
            return f"{year}-{month:02d}"
    return f"{year}-01"


def run() -> None:
    with connect() as con:
        by_status = dict(
            con.execute("SELECT status, count(*) FROM companies GROUP BY status").fetchall()
        )
        by_year = [
            {"year": r[0], "total": r[1], "inactive": r[2], "acquired": r[3], "public": r[4]}
            for r in con.execute(
                """
                SELECT cohort_year, count(*),
                       count(*) FILTER (status = 'Inactive'),
                       count(*) FILTER (status = 'Acquired'),
                       count(*) FILTER (status = 'Public')
                FROM companies GROUP BY 1 ORDER BY 1
                """
            ).fetchall()
        ]
        by_industry = [
            {"industry": r[0], "total": r[1], "inactive": r[2], "acquired": r[3]}
            for r in con.execute(
                """
                SELECT coalesce(industry, 'Unknown'), count(*),
                       count(*) FILTER (status = 'Inactive'),
                       count(*) FILTER (status = 'Acquired')
                FROM companies GROUP BY 1 ORDER BY 2 DESC
                """
            ).fetchall()
        ]

        inactive = []
        rows = con.execute(
            """
            SELECT c.company_id, c.name, c.one_liner, c.batch, c.cohort_year,
                   c.industry, c.region, c.team_size, c.domain
            FROM companies c WHERE c.status = 'Inactive' ORDER BY c.cohort_year, c.name
            """
        ).fetchall()
        for cid, name, one_liner, batch, year, industry, region, team_size, domain in rows:
            last_alive = con.execute(
                "SELECT max(snapshot_month) FROM wayback_snapshots WHERE company_id = ? AND status_code = '200'",
                [cid],
            ).fetchone()[0]
            hn = [
                {"title": r[0], "url": r[1], "points": r[2], "date": str(r[3])[:10],
                 "hn_url": f"https://news.ycombinator.com/item?id={r[4]}"}
                for r in con.execute(
                    """
                    SELECT title, url, points, created_at, story_id FROM hn_mentions
                    WHERE company_id = ? ORDER BY points DESC LIMIT 3
                    """,
                    [cid],
                ).fetchall()
            ]
            funding = [
                {"date": str(r[0]), "amount": r[1], "url": r[2]}
                for r in con.execute(
                    """
                    SELECT announced_date, amount_usd, source_url FROM funding_rounds
                    WHERE company_id = ? ORDER BY announced_date
                    """,
                    [cid],
                ).fetchall()
            ]
            e = con.execute(
                """
                SELECT primary_reason, secondary_reason, category, confidence,
                       evidence_quote, evidence_source_url, source_quality
                FROM shutdown_enrichment WHERE company_id = ?
                """,
                [cid],
            ).fetchone()
            enrichment = None
            if e:
                enrichment = {
                    "primary_reason": e[0], "secondary_reason": e[1], "category": e[2],
                    "confidence": e[3], "quote": e[4], "source_url": e[5], "source_quality": e[6],
                }

            start = batch_start(batch or "", year)
            lifespan_months = None
            if last_alive:
                sy, sm = int(start[:4]), int(start[5:7])
                lifespan_months = (last_alive.year - sy) * 12 + (last_alive.month - sm)

            inactive.append({
                "id": cid, "name": name, "one_liner": one_liner, "batch": batch,
                "year": year, "industry": industry, "region": region,
                "team_size": team_size, "domain": domain,
                "batch_start": start,
                "last_alive": str(last_alive) if last_alive else None,
                "lifespan_months": lifespan_months,
                "hn": hn, "funding": funding, "enrichment": enrichment,
            })

        categories = [
            {"category": r[0], "count": r[1], "avg_confidence": round(r[2], 2)}
            for r in con.execute(
                """
                SELECT category, count(*), avg(confidence)
                FROM shutdown_enrichment GROUP BY 1 ORDER BY 2 DESC
                """
            ).fetchall()
        ]

        payload = {
            "generated": str(date.today()),
            "cohort": "YC batches 2021 or later",
            "by_status": by_status,
            "by_year": by_year,
            "by_industry": by_industry,
            "inactive": inactive,
            "shutdown_categories": categories,
        }

    EXPORT_PATH.write_text(json.dumps(payload, default=str))
    print(f"exported {len(inactive)} inactive companies -> {EXPORT_PATH}")


if __name__ == "__main__":
    run()
