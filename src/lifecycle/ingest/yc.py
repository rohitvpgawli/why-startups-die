"""Ingest the YC company directory via the yc-oss mirror.

https://github.com/yc-oss/api republishes YC's public directory as static
JSON, refreshed daily. Companies carry a labeled outcome (Active / Acquired /
Inactive / Public), which gives the dataset correct denominators.
"""
from __future__ import annotations

import json
import re
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional
from urllib.parse import urlparse

import httpx

from lifecycle.db import connect

ALL_COMPANIES_URL = "https://yc-oss.github.io/api/companies/all.json"
COHORT_START_YEAR = 2021


def batch_year(batch: str) -> Optional[int]:
    """'Winter 2021' -> 2021, 'W21' -> 2021, 'Fall 2024' -> 2024."""
    if not batch:
        return None
    m = re.search(r"(20\d{2})", batch)
    if m:
        return int(m.group(1))
    m = re.search(r"[A-Za-z]+(\d{2})$", batch)
    if m:
        return 2000 + int(m.group(1))
    return None


def apex_domain(website: str) -> Optional[str]:
    if not website:
        return None
    host = urlparse(website if "//" in website else f"https://{website}").netloc.lower()
    host = host.split(":")[0]
    if host.startswith("www."):
        host = host[4:]
    return host or None


def fetch_companies() -> List[Dict[str, Any]]:
    resp = httpx.get(ALL_COMPANIES_URL, timeout=60, follow_redirects=True)
    resp.raise_for_status()
    return resp.json()


def ingest() -> None:
    companies = fetch_companies()
    current_year = datetime.now(tz=timezone.utc).year
    cohort = [
        c
        for c in companies
        if COHORT_START_YEAR <= (batch_year(c.get("batch", "")) or 0) <= current_year
    ]
    print(f"fetched {len(companies)} YC companies, {len(cohort)} in {COHORT_START_YEAR}+ cohort")

    with connect() as con:
        for c in cohort:
            slug = c.get("slug") or str(c.get("id"))
            year = batch_year(c.get("batch", ""))
            con.execute(
                """
                INSERT OR REPLACE INTO companies
                    (company_id, name, website, domain, one_liner, long_description,
                     batch, cohort_year, status, industry, subindustry, tags, region, team_size)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                [
                    slug,
                    c.get("name"),
                    c.get("website"),
                    apex_domain(c.get("website") or ""),
                    c.get("one_liner"),
                    c.get("long_description"),
                    c.get("batch"),
                    year,
                    c.get("status"),
                    c.get("industry"),
                    c.get("subindustry"),
                    c.get("tags") or [],
                    (c.get("regions") or [None])[0],
                    c.get("team_size"),
                ],
            )
            con.execute(
                """
                INSERT OR REPLACE INTO company_sources
                    (company_id, source, source_id, source_url, raw)
                VALUES (?, 'yc', ?, ?, ?)
                """,
                [slug, str(c.get("id")), c.get("url"), json.dumps(c)],
            )
            launched = c.get("launched_at")
            if launched:
                launched_date = datetime.fromtimestamp(launched, tz=timezone.utc).date()
                con.execute(
                    "DELETE FROM timeline_events WHERE company_id = ? AND event_type = 'yc_listed' AND source = 'yc'",
                    [slug],
                )
                con.execute(
                    """
                    INSERT INTO timeline_events (company_id, event_date, event_type, detail, source, source_url)
                    VALUES (?, ?, 'yc_listed', ?, 'yc', ?)
                    """,
                    [slug, launched_date, f"Listed in YC directory ({c.get('batch')})", c.get("url")],
                )
    print("YC ingest done")
