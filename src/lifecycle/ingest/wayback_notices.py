"""Mine Wayback final snapshots for homepage shutdown notices.

Many dead startups announce on their own homepage ("Hera is going to shut
down on September 1st") — founder-letter-grade evidence that never makes the
news. This fetches each inactive company's last-alive snapshot and greps for
shutdown language, storing hits as timeline events for the enrichment pass.

Be gentle: archive.org rate-limits aggressively after sustained crawling.
"""
from __future__ import annotations

import re
import time

import httpx

from lifecycle.db import connect

PHRASES = [
    "shutting down", "shut down", "winding down", "wound down", "sunsetting",
    "saying goodbye", "farewell", "no longer available", "no longer operating",
    "has closed", "we have closed", "closing its doors", "acquired by",
]
REQUEST_DELAY_S = 3.0


def strip_html(h: str) -> str:
    h = re.sub(r"<script[\s\S]*?</script>|<style[\s\S]*?</style>|<[^>]+>", " ", h)
    return re.sub(r"\s+", " ", h)


def ingest(limit: int = None) -> None:
    with connect() as con:
        query = """
            SELECT c.company_id, c.domain,
                   strftime(max(w.snapshot_month), '%Y%m') || '28' AS ts
            FROM companies c
            JOIN wayback_snapshots w ON w.company_id = c.company_id AND w.status_code = '200'
            WHERE c.status = 'Inactive' AND c.domain IS NOT NULL
            GROUP BY 1, 2 ORDER BY 1
        """
        if limit:
            query += f" LIMIT {int(limit)}"
        targets = con.execute(query).fetchall()
        print(f"scanning final snapshots for {len(targets)} companies")

        found = 0
        for i, (cid, dom, ts) in enumerate(targets, 1):
            url = f"https://web.archive.org/web/{ts}/http://{dom}/"
            try:
                r = httpx.get(url, timeout=40, follow_redirects=True)
                txt = strip_html(r.text)[:12000]
            except Exception as e:
                print(f"  [{i}] {cid}: fetch failed ({e})")
                time.sleep(REQUEST_DELAY_S)
                continue
            low = txt.lower()
            for p in PHRASES:
                idx = low.find(p)
                if idx >= 0:
                    snippet = txt[max(0, idx - 250):idx + 450].strip()
                    con.execute(
                        "DELETE FROM timeline_events WHERE company_id = ? AND event_type = 'homepage_shutdown_notice'",
                        [cid],
                    )
                    con.execute(
                        """
                        INSERT INTO timeline_events (company_id, event_date, event_type, detail, source, source_url)
                        VALUES (?, ?, 'homepage_shutdown_notice', ?, 'wayback', ?)
                        """,
                        [cid, f"{ts[:4]}-{ts[4:6]}-01", snippet[:900], url],
                    )
                    found += 1
                    print(f"  [{i}] {cid}: notice found ('{p}')")
                    break
            time.sleep(REQUEST_DELAY_S)
    print(f"done: {found} homepage shutdown notices")
