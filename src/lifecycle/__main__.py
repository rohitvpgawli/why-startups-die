from __future__ import annotations

import argparse

from lifecycle.db import connect, init_db


def stats() -> None:
    with connect() as con:
        print("== cohort by status ==")
        for row in con.execute(
            "SELECT status, count(*) FROM companies GROUP BY status ORDER BY 2 DESC"
        ).fetchall():
            print(f"  {row[0] or 'Unknown':<10} {row[1]}")
        print("\n== cohort by batch year x status ==")
        for row in con.execute(
            """
            SELECT cohort_year,
                   count(*) AS total,
                   count(*) FILTER (status = 'Inactive') AS inactive,
                   count(*) FILTER (status = 'Acquired') AS acquired
            FROM companies GROUP BY cohort_year ORDER BY cohort_year
            """
        ).fetchall():
            print(f"  {row[0]}: {row[1]} total, {row[2]} inactive, {row[3]} acquired")
        wb = con.execute("SELECT count(DISTINCT company_id) FROM wayback_snapshots").fetchone()[0]
        hn = con.execute("SELECT count(DISTINCT company_id) FROM hn_mentions").fetchone()[0]
        print(f"\nwayback coverage: {wb} companies | hn coverage: {hn} companies")


def main() -> None:
    parser = argparse.ArgumentParser(prog="lifecycle")
    sub = parser.add_subparsers(dest="cmd", required=True)
    sub.add_parser("init-db")
    sub.add_parser("ingest-yc")
    for name in ("ingest-wayback", "ingest-hn", "ingest-edgar"):
        p = sub.add_parser(name)
        p.add_argument("--status", default=None, help="only companies with this status, e.g. Inactive")
        p.add_argument("--limit", type=int, default=None)
    p = sub.add_parser("ingest-wayback-notices")
    p.add_argument("--limit", type=int, default=None)
    p = sub.add_parser("enrich")
    p.add_argument("--limit", type=int, default=None)
    sub.add_parser("export")
    sub.add_parser("stats")
    args = parser.parse_args()

    if args.cmd == "init-db":
        init_db()
    elif args.cmd == "ingest-yc":
        from lifecycle.ingest import yc

        yc.ingest()
    elif args.cmd == "ingest-wayback":
        from lifecycle.ingest import wayback

        wayback.ingest(status_filter=args.status, limit=args.limit)
    elif args.cmd == "ingest-hn":
        from lifecycle.ingest import hn

        hn.ingest(status_filter=args.status, limit=args.limit)
    elif args.cmd == "ingest-edgar":
        from lifecycle.ingest import sec_edgar

        sec_edgar.ingest(status_filter=args.status, limit=args.limit)
    elif args.cmd == "ingest-wayback-notices":
        from lifecycle.ingest import wayback_notices

        wayback_notices.ingest(limit=args.limit)
    elif args.cmd == "enrich":
        from lifecycle.enrich import shutdown_reason

        shutdown_reason.run(limit=args.limit)
    elif args.cmd == "export":
        from lifecycle import export

        export.run()
    elif args.cmd == "stats":
        stats()


if __name__ == "__main__":
    main()
