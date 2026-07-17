"""Form D fundraising events via SEC EDGAR full-text search.

Form D is filed for exempt offerings (most US venture rounds), so it captures
fundraising directly from filings rather than press coverage. Matching is by
exact company-name phrase against EDGAR full-text search, restricted to
Form D / D/A, filed 2020 onward. Precision over recall: ambiguous matches are
skipped, and every stored round links its filing URL.

SEC fair-access rules: declared User-Agent, <=10 req/s (we stay far below).
"""
from __future__ import annotations

import re
import time
from typing import Optional

import httpx

from lifecycle.db import connect

FTS_URL = "https://efts.sec.gov/LATEST/search-index"
HEADERS = {"User-Agent": "StartupLifecycleProject research rohit.gawli@furtribe.in"}
REQUEST_DELAY_S = 0.5

# Generic words that make a name too ambiguous to trust an exact-phrase match.
AMBIGUOUS_NAMES = {"alpha", "beta", "prime", "atlas", "nova", "apex", "arc", "core"}


def search_form_d(name: str) -> list:
    params = {"q": f'"{name}"', "forms": "D"}  # root form; amendments (D/A) share root_forms=["D"]
    resp = httpx.get(FTS_URL, params=params, headers=HEADERS, timeout=30)
    resp.raise_for_status()
    hits = resp.json().get("hits", {}).get("hits", [])
    return [h for h in hits if (h.get("_source", {}).get("file_date") or "") >= "2020-01-01"]


CORP_SUFFIX_TOKENS = {
    "inc", "incorporated", "llc", "corp", "corporation", "co", "company",
    "ltd", "limited", "pbc", "holdings", "labs", "technologies", "inc",
}


def name_matches(company_name: str, filer_name: str) -> bool:
    """Exact-name matching: the filer must be the company name alone or the
    name followed only by corporate-suffix tokens. 'AIRBYTE, INC.' matches
    'Airbyte'; 'Galaxy Digital LP' must NOT match 'Galaxy' — leading-prefix
    matching floods common-word names with unrelated funds."""
    canon = re.sub(r"[^a-z0-9 ]", "", company_name.lower()).strip()
    filer = re.sub(r"\(cik[^)]*\)", "", (filer_name or "").lower())
    filer = re.sub(r"[^a-z0-9 ]", "", filer).strip()
    if not canon:
        return False
    if filer == canon:
        return True
    if filer.startswith(canon + " "):
        rest = filer[len(canon) + 1:].split()
        return all(t in CORP_SUFFIX_TOKENS for t in rest)
    return False


def offering_amount(adsh: str, cik: str) -> Optional[int]:
    """Fetch the Form D primary_doc.xml and pull totalAmountSold (fallback:
    totalOfferingAmount). Returns None when unparseable or 'Indefinite'."""
    accession = adsh.replace("-", "")
    url = f"https://www.sec.gov/Archives/edgar/data/{int(cik)}/{accession}/primary_doc.xml"
    try:
        resp = httpx.get(url, headers=HEADERS, timeout=30)
        resp.raise_for_status()
    except Exception:
        return None
    for tag in ("totalAmountSold", "totalOfferingAmount"):
        m = re.search(rf"<{tag}>(\d+)</{tag}>", resp.text)
        if m:
            return int(m.group(1))
    return None


def ingest(status_filter: str = None, limit: int = None) -> None:
    with connect() as con:
        query = "SELECT company_id, name FROM companies"
        params = []
        if status_filter:
            query += " WHERE status = ?"
            params.append(status_filter)
        query += " ORDER BY company_id"
        if limit:
            query += f" LIMIT {int(limit)}"
        targets = con.execute(query, params).fetchall()
        print(f"searching EDGAR Form D for {len(targets)} companies")

        found = 0
        for i, (company_id, name) in enumerate(targets, 1):
            if name.lower() in AMBIGUOUS_NAMES or len(name) < 4:
                continue
            try:
                hits = search_form_d(name)
            except Exception as e:
                print(f"  [{i}/{len(targets)}] {company_id}: search FAILED {e}")
                time.sleep(REQUEST_DELAY_S)
                continue
            matched = []
            for h in hits:
                src = h.get("_source", {})
                filer_names = src.get("display_names") or []
                if not any(name_matches(name, fn) for fn in filer_names):
                    continue
                adsh = src.get("adsh")
                ciks = src.get("ciks") or []
                filed = src.get("file_date")
                if adsh and ciks and filed:
                    matched.append((adsh, ciks, filed))
            # A real startup is one legal entity (occasionally two). Several
            # distinct CIKs matching the same name means the name is ambiguous
            # — drop the company rather than store someone else's filings.
            if len({c[1][0] for c in matched}) > 2:
                time.sleep(REQUEST_DELAY_S)
                continue
            for adsh, ciks, filed in matched:
                amount = offering_amount(adsh, ciks[0])
                filing_url = (
                    f"https://www.sec.gov/Archives/edgar/data/{int(ciks[0])}/"
                    f"{adsh.replace('-', '')}/primary_doc.xml"
                )
                con.execute(
                    "DELETE FROM funding_rounds WHERE company_id = ? AND source_url = ?",
                    [company_id, filing_url],
                )
                con.execute(
                    """
                    INSERT INTO funding_rounds
                        (company_id, round_type, announced_date, amount_usd, investors, source, source_url)
                    VALUES (?, 'form_d', ?, ?, [], 'sec_edgar', ?)
                    """,
                    [company_id, filed, amount, filing_url],
                )
                con.execute(
                    "DELETE FROM timeline_events WHERE company_id = ? AND source_url = ?",
                    [company_id, filing_url],
                )
                con.execute(
                    """
                    INSERT INTO timeline_events (company_id, event_date, event_type, detail, source, source_url)
                    VALUES (?, ?, 'funding', ?, 'sec_edgar', ?)
                    """,
                    [
                        company_id,
                        filed,
                        f"Form D filed" + (f" (${amount:,} sold)" if amount else ""),
                        filing_url,
                    ],
                )
                found += 1
                time.sleep(REQUEST_DELAY_S)
            time.sleep(REQUEST_DELAY_S)
            if i % 25 == 0:
                print(f"  [{i}/{len(targets)}] ... {found} filings matched so far")
    print(f"EDGAR ingest done: {found} Form D filings matched")
