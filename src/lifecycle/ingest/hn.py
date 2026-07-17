"""Hacker News mentions via the Algolia search API.

Launch posts, shutdown threads, and community post-mortems. HN comment
threads are a key triangulation source for shutdown reasons — founders'
letters say 'market timing', HN threads often say what actually happened.
"""
from __future__ import annotations

import re
import time
from datetime import datetime, timezone

import httpx

from lifecycle.db import connect

SEARCH_URL = "https://hn.algolia.com/api/v1/search"
REQUEST_DELAY_S = 0.3
MIN_POINTS = 5  # drop zero-traction noise

# Startup-context tokens: a short/common company name in a title only counts
# when the title also reads like startup news.
CONTEXT_TOKENS = (
    "yc", "y combinator", "show hn", "launch", "shut", "shutdown", "shutting",
    "closes", "closing", "closed", "acquire", "acquired", "acquisition",
    "post-mortem", "postmortem", "winding down", "wind down", "dead", "startup",
    "raises", "funding", "seed", "series a",
)


def is_relevant(name: str, domain: str, title: str, url: str) -> bool:
    """Cut homonym noise: domain match is decisive; a name match in the
    title needs either a distinctive name or startup context around it."""
    if domain and domain in (url or ""):
        return True
    title_lower = (title or "").lower()
    if not re.search(r"\b" + re.escape(name.lower()) + r"\b", title_lower):
        return False
    if len(name) >= 8:
        return True
    return any(tok in title_lower for tok in CONTEXT_TOKENS)


def search_stories(query: str) -> list:
    params = {"query": query, "tags": "story", "hitsPerPage": 20}
    resp = httpx.get(SEARCH_URL, params=params, timeout=30)
    resp.raise_for_status()
    return resp.json().get("hits", [])


def ingest(status_filter: str = None, limit: int = None) -> None:
    with connect() as con:
        query = "SELECT company_id, name, domain FROM companies"
        params = []
        if status_filter:
            query += " WHERE status = ?"
            params.append(status_filter)
        query += " ORDER BY company_id"
        if limit:
            query += f" LIMIT {int(limit)}"
        targets = con.execute(query, params).fetchall()
        print(f"searching HN for {len(targets)} companies")

        for i, (company_id, name, domain) in enumerate(targets, 1):
            # Two probes: exact name (launches, general buzz) and name + shut down.
            queries = [f'"{name}"', f'"{name}" shut down']
            kept = 0
            for q in queries:
                try:
                    hits = search_stories(q)
                except Exception as e:
                    print(f"  [{i}/{len(targets)}] {company_id}: search FAILED {e}")
                    break
                for h in hits:
                    if (h.get("points") or 0) < MIN_POINTS:
                        continue
                    title = h.get("title") or ""
                    url = h.get("url") or ""
                    if not is_relevant(name, domain, title, url):
                        continue
                    created = datetime.fromtimestamp(h["created_at_i"], tz=timezone.utc)
                    con.execute(
                        """
                        INSERT OR REPLACE INTO hn_mentions
                            (company_id, story_id, title, url, points, num_comments, created_at, matched_query)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                        """,
                        [
                            company_id,
                            str(h["objectID"]),
                            title,
                            url,
                            h.get("points"),
                            h.get("num_comments"),
                            created,
                            q,
                        ],
                    )
                    kept += 1
                time.sleep(REQUEST_DELAY_S)
            print(f"  [{i}/{len(targets)}] {company_id}: {kept} mentions")
    print("HN ingest done")
