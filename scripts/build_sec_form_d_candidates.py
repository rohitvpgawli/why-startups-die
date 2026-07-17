"""Build a review queue of SEC Form D financing-date candidates.

This is deliberately a candidate layer, not a funding fact table.  The SEC
quarterly data sets contain notices filed in that quarter; a 2021 snapshot can
therefore show a financing signal without proving that it was a startup's
first-ever funding event.  Exact normalized name/alias matches are emitted
for human review and never promoted automatically to ``first_funded_on``.
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import io
import json
import re
import unicodedata
import zipfile
from collections import defaultdict
from datetime import date, datetime, timezone
from pathlib import Path
from urllib.parse import quote


LEGAL_SUFFIXES = {
    "inc",
    "incorporated",
    "llc",
    "ltd",
    "limited",
    "corp",
    "corporation",
    "co",
    "company",
    "plc",
    "pbc",
}


def normalize_name(value: str, *, strip_suffix: bool = True) -> str:
    """Return a conservative comparison key for company names."""

    ascii_value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode()
    words = re.findall(r"[a-z0-9]+", ascii_value.casefold())
    if strip_suffix:
        while words and words[-1] in LEGAL_SUFFIXES:
            words.pop()
    return " ".join(words)


def _read_tsv(zf: zipfile.ZipFile, suffix: str) -> list[dict[str, str]]:
    names = [name for name in zf.namelist() if name.upper().endswith(f"/{suffix.upper()}")]
    if len(names) != 1:
        raise ValueError(f"expected one {suffix} in {zf.filename}, found {names}")
    with zf.open(names[0]) as raw:
        text = io.TextIOWrapper(raw, encoding="utf-8-sig", newline="")
        return list(csv.DictReader(text, delimiter="\t"))


def _filing_url(cik: str, accession: str) -> str:
    cik_digits = str(cik).strip().lstrip("0") or "0"
    accession_path = accession.replace("-", "")
    return f"https://www.sec.gov/Archives/edgar/data/{cik_digits}/{accession_path}/{accession}.txt"


def _parse_sale_date(value: str | None) -> str | None:
    value = (value or "").strip()
    if not value:
        return None
    try:
        return date.fromisoformat(value).isoformat()
    except ValueError:
        return None


def _load_roster(path: Path) -> list[dict]:
    rows = [json.loads(line) for line in path.read_text().splitlines() if line.strip()]
    if not rows:
        raise ValueError(f"empty roster: {path}")
    return rows


def build_candidates(
    roster_path: Path,
    zip_dir: Path,
    retrieved_at: str | None = None,
    coverage_label: str = "supplied SEC Form D quarterly files",
) -> tuple[list[dict], dict]:
    roster = _load_roster(roster_path)
    retrieved_at = retrieved_at or datetime.now(timezone.utc).replace(microsecond=0).isoformat()

    # Keep both a suffix-stripped and a strict key.  We only use a key when it
    # maps to one roster record; ambiguous matches remain visible for review.
    name_index: dict[str, set[str]] = defaultdict(set)
    display_names: dict[str, set[str]] = defaultdict(set)
    for row in roster:
        terms = [row.get("name", ""), *(row.get("aliases") or [])]
        for term in terms:
            for strip_suffix in (False, True):
                key = normalize_name(term, strip_suffix=strip_suffix)
                if key:
                    name_index[key].add(row["id"])
                    display_names[key].add(term)

    filings: dict[str, dict] = {}
    for zip_path in sorted(zip_dir.glob("*.zip")):
        with zipfile.ZipFile(zip_path) as zf:
            issuers = {row["ACCESSIONNUMBER"]: row for row in _read_tsv(zf, "ISSUERS.tsv")}
            submissions = {row["ACCESSIONNUMBER"]: row for row in _read_tsv(zf, "FORMDSUBMISSION.tsv")}
            for offering in _read_tsv(zf, "OFFERING.tsv"):
                accession = offering.get("ACCESSIONNUMBER", "").strip()
                issuer = issuers.get(accession)
                if not accession or not issuer:
                    continue
                entity_name = issuer.get("ENTITYNAME", "").strip()
                previous_names = [
                    issuer.get(field, "").strip()
                    for field in (
                        "ISSUER_PREVIOUSNAME_1",
                        "ISSUER_PREVIOUSNAME_2",
                        "ISSUER_PREVIOUSNAME_3",
                        "EDGAR_PREVIOUSNAME_1",
                        "EDGAR_PREVIOUSNAME_2",
                        "EDGAR_PREVIOUSNAME_3",
                    )
                    if issuer.get(field, "").strip()
                ]
                match_ids: set[str] = set()
                match_terms: set[str] = set()
                for term in [entity_name, *previous_names]:
                    for strip_suffix in (False, True):
                        key = normalize_name(term, strip_suffix=strip_suffix)
                        ids = name_index.get(key, set())
                        if ids:
                            match_ids.update(ids)
                            match_terms.update(display_names.get(key, set()))
                sale_date = _parse_sale_date(offering.get("SALE_DATE"))
                if not match_ids or not sale_date:
                    continue
                submission = submissions.get(accession, {})
                filing = {
                    "accession": accession,
                    "cik": issuer.get("CIK", "").strip(),
                    "entity_name": entity_name,
                    "previous_names": previous_names,
                    "sale_date": sale_date,
                    "is_amendment": offering.get("ISAMENDMENT", "").strip().lower() == "true",
                    "submission_type": submission.get("SUBMISSIONTYPE", "").strip(),
                    "filing_date": submission.get("FILING_DATE", "").strip(),
                    "url": _filing_url(issuer.get("CIK", ""), accession),
                    "match_ids": sorted(match_ids),
                    "match_terms": sorted(match_terms),
                    "source_zip": zip_path.name,
                }
                filings[accession] = filing

    by_id: dict[str, list[dict]] = defaultdict(list)
    for filing in filings.values():
        for record_id in filing["match_ids"]:
            by_id[record_id].append(filing)

    output: list[dict] = []
    match_counts = defaultdict(int)
    for row in sorted(roster, key=lambda item: item["id"]):
        matched = sorted(by_id.get(row["id"], []), key=lambda item: (item["sale_date"], item["accession"]))
        dates = [item["sale_date"] for item in matched]
        non_amendment_dates = [item["sale_date"] for item in matched if not item["is_amendment"]]
        ambiguous = sorted({other_id for item in matched for other_id in item["match_ids"] if other_id != row["id"]})
        if matched:
            match_status = "ambiguous" if ambiguous else "matched"
            match_counts[match_status] += 1
        else:
            match_status = "no_match"
            match_counts[match_status] += 1
        output.append({
            "startup_id": row["id"],
            "startup_name": row["name"],
            "cohort_batch": row.get("batch"),
            "cohort_year": row.get("cohort_year"),
            "candidate_basis": "sec_form_d_sale_date_candidate",
            "sec_sale_candidate_on": min(non_amendment_dates or dates) if dates else None,
            "first_observed_sale_on": min(non_amendment_dates or dates) if dates else None,
            "earliest_reported_sale_on": min(dates) if dates else None,
            "all_matched_filings_are_amendments": bool(matched) and not non_amendment_dates,
            "coverage_label": coverage_label,
            "first_funded_on": None,
            "match_status": match_status,
            "matched_filing_count": len(matched),
            "ambiguous_startup_ids": ambiguous,
            "filings": matched[:20],
            "review_status": "needs_review" if matched else "not_started",
            "reviewed_on": None,
            "retrieved_at": retrieved_at,
            "source": "SEC Form D quarterly data sets",
            "source_url": "https://www.sec.gov/data-research/sec-markets-data/form-d-data-sets",
            "notes": "Candidate financing signal only; the supplied coverage window cannot prove first-ever funding.",
        })
    summary = {
        "roster_records": len(roster),
        "form_d_filings_with_exact_roster_match": len(filings),
        "startup_match_counts": dict(match_counts),
        "candidate_startups_before_2021": sum(
            bool(row.get("sec_sale_candidate_on")) and row["sec_sale_candidate_on"] < "2021-01-01"
            for row in output
        ),
        "zip_files": [
            {
                "path": path.name,
                "sha256": hashlib.sha256(path.read_bytes()).hexdigest(),
                "source_url": f"https://www.sec.gov/files/structureddata/data/form-d-data-sets/{path.name}",
            }
            for path in sorted(zip_dir.glob("*.zip"))
        ],
        "retrieved_at": retrieved_at,
    }
    return output, summary


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--roster", type=Path, default=Path("data/cohort/yc-2021/roster.jsonl"))
    parser.add_argument("--zip-dir", type=Path, required=True, help="Directory containing downloaded SEC quarterly ZIPs")
    parser.add_argument("--output", type=Path, default=Path("data/cohort/yc-2021/sec-sale-candidates.jsonl"))
    parser.add_argument("--summary", type=Path, default=Path("data/cohort/yc-2021/sec-sale-candidates.summary.json"))
    parser.add_argument("--coverage-label", default="supplied SEC Form D quarterly files")
    args = parser.parse_args()
    rows, summary = build_candidates(args.roster, args.zip_dir, coverage_label=args.coverage_label)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text("".join(json.dumps(row, ensure_ascii=False, sort_keys=True) + "\n" for row in rows))
    args.summary.write_text(json.dumps(summary, indent=2, sort_keys=True) + "\n")
    print(json.dumps(summary, indent=2, sort_keys=True))


if __name__ == "__main__":
    main()
