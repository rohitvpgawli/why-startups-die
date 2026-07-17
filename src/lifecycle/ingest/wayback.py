"""Wayback Machine snapshot timelines via the CDX API.

Website liveness over time is the cheapest reliable shutdown detector:
a domain that stops returning 200s (or starts redirecting to a parked page)
marks the practical end of a company far more precisely than news coverage.
Snapshots are collapsed to one per month per company.
"""
from __future__ import annotations

import time
from datetime import date
from typing import List, Tuple

import httpx

from lifecycle.db import connect

CDX_URL = "https://web.archive.org/cdx/search/cdx"
REQUEST_DELAY_S = 1.0  # be polite to archive.org


def fetch_monthly_snapshots(domain: str) -> List[Tuple[date, str, str]]:
    params = {
        "url": domain,
        "output": "json",
        "fl": "timestamp,statuscode",
        "collapse": "timestamp:6",  # one per YYYYMM
        "from": "2020",
    }
    resp = httpx.get(CDX_URL, params=params, timeout=60, follow_redirects=True)
    resp.raise_for_status()
    rows = resp.json()
    out = []
    for ts, status in rows[1:]:  # first row is the header
        month = date(int(ts[0:4]), int(ts[4:6]), 1)
        snap_url = f"https://web.archive.org/web/{ts}/{domain}"
        out.append((month, status, snap_url))
    return out


def ingest(status_filter: str = None, limit: int = None) -> None:
    with connect() as con:
        query = "SELECT company_id, domain FROM companies WHERE domain IS NOT NULL"
        params = []
        if status_filter:
            query += " AND status = ?"
            params.append(status_filter)
        query += " ORDER BY company_id"
        if limit:
            query += f" LIMIT {int(limit)}"
        targets = con.execute(query, params).fetchall()
        print(f"fetching wayback timelines for {len(targets)} companies")

        for i, (company_id, domain) in enumerate(targets, 1):
            try:
                snapshots = fetch_monthly_snapshots(domain)
            except Exception as e:
                print(f"  [{i}/{len(targets)}] {company_id} ({domain}): FAILED {e}")
                time.sleep(REQUEST_DELAY_S)
                continue
            for month, status_code, snap_url in snapshots:
                con.execute(
                    """
                    INSERT OR REPLACE INTO wayback_snapshots
                        (company_id, snapshot_month, status_code, snapshot_url)
                    VALUES (?, ?, ?, ?)
                    """,
                    [company_id, month, status_code, snap_url],
                )
            print(f"  [{i}/{len(targets)}] {company_id} ({domain}): {len(snapshots)} monthly snapshots")
            time.sleep(REQUEST_DELAY_S)
    print("wayback ingest done")
