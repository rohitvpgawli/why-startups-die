"""Mine final Wayback homepage snapshots for shutdown notices.

Many dead startups announce on their own homepage ("Hera is going to shut
down on September 1st") — founder-letter-grade evidence that never makes the
news. This fetches each inactive company's last-alive snapshot and greps for
shutdown language. Every check is recorded in wayback_notices (including
"checked, nothing found"), so re-runs only visit unchecked companies —
archive.org rate-limits sustained crawls, so resumability matters.
"""
from __future__ import annotations

import re
import time

import httpx

from lifecycle.db import connect

REQUEST_DELAY_S = 3.0
BACKOFF_S = 30.0

PHRASES = [
    "shutting down", "shut down", "winding down", "wound down", "sunsetting",
    "sunsetted", "saying goodbye", "farewell", "no longer available",
    "no longer operating", "has closed", "we have closed", "closing its doors",
    "closed its doors", "end of an era", "has been acquired", "acquired by",
    "joining forces with", "wind down",
]

TAG_RE = re.compile(r"<script[\s\S]*?</script>|<style[\s\S]*?</style>|<[^>]+>")
WS_RE = re.compile(r"\s+")


def page_text(html: str) -> str:
    return WS_RE.sub(" ", TAG_RE.sub(" ", html))


def ingest(status_filter: str = "Inactive", limit: int = None) -> None:
    with connect() as con:
        query = """
            SELECT c.company_id, c.domain,
                   strftime(max(w.snapshot_month), '%Y%m') || '28' AS ts,
                   max(w.snapshot_month) AS last_alive
            FROM companies c
            JOIN wayback_snapshots w ON w.company_id = c.company_id AND w.status_code = '200'
            LEFT JOIN wayback_notices n ON n.company_id = c.company_id
            WHERE c.status = ? AND c.domain IS NOT NULL AND n.company_id IS NULL
            GROUP BY 1, 2 ORDER BY 1
        """
        params = [status_filter]
        if limit:
            query += f" LIMIT {int(limit)}"
        targets = con.execute(query, params).fetchall()
        print(f"scanning final snapshots for {len(targets)} unchecked companies")

        found = errors = 0
        headers = {"User-Agent": "StartupLifecycleProject research rohit.gawli@furtribe.in"}
        with httpx.Client(headers=headers) as client:
            for i, (cid, dom, ts, last_alive) in enumerate(targets, 1):
                url = f"https://web.archive.org/web/{ts}/http://{dom}/"
                try:
                    r = client.get(url, timeout=45, follow_redirects=True)
                    r.raise_for_status()
                    txt = page_text(r.text)[:15000]
                except Exception as e:
                    errors += 1
                    print(f"  [{i}/{len(targets)}] {cid}: fetch failed ({type(e).__name__}), backing off")
                    time.sleep(BACKOFF_S)
                    continue
                low = txt.lower()
                phrase = snippet = None
                for p in PHRASES:
                    idx = low.find(p)
                    if idx >= 0:
                        phrase, snippet = p, txt[max(0, idx - 250): idx + 450].strip()
                        break
                con.execute(
                    "INSERT OR REPLACE INTO wayback_notices (company_id, snapshot_url, phrase, snippet) VALUES (?, ?, ?, ?)",
                    [cid, url, phrase, snippet],
                )
                if phrase:
                    found += 1
                    print(f"  [{i}/{len(targets)}] {cid}: NOTICE ('{phrase}')")
                    con.execute(
                        "DELETE FROM timeline_events WHERE company_id = ? AND event_type = 'homepage_shutdown_notice'",
                        [cid],
                    )
                    con.execute(
                        """
                        INSERT INTO timeline_events (company_id, event_date, event_type, detail, source, source_url)
                        VALUES (?, ?, 'homepage_shutdown_notice', ?, 'wayback', ?)
                        """,
                        [cid, last_alive, (snippet or "")[:900], url],
                    )
                time.sleep(REQUEST_DELAY_S)
    print(f"notice mining done: {found} notices, {errors} errors (re-run to retry errored companies)")
