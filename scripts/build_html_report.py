#!/usr/bin/env python3
"""Build a dependency-free HTML report from the reviewed startup archive."""

from __future__ import annotations

import html
import json
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
INPUT = ROOT / "data" / "raw" / "startups.jsonl"
OUTPUT = ROOT / "docs" / "report.html"


def load_records() -> list[dict]:
    records = []
    for line in INPUT.read_text(encoding="utf-8").splitlines():
        if line.strip():
            records.append(json.loads(line))
    return records


def esc(value: object) -> str:
    return html.escape("" if value is None else str(value), quote=True)


def build_report(records: list[dict]) -> str:
    outcomes = Counter(record.get("outcome_type", "unknown") for record in records)
    sectors = Counter(record.get("sector", "unknown") for record in records)
    factors = Counter(
        factor.get("category", "unknown")
        for record in records
        for factor in record.get("factors", [])
    )
    max_factor = max(factors.values(), default=1)

    factor_rows = "\n".join(
        f'<div class="bar-row"><span>{esc(name.replace("_", " "))}</span>'
        f'<div class="bar"><i style="width:{value / max_factor * 100:.1f}%"></i></div>'
        f'<strong>{value}</strong></div>'
        for name, value in factors.most_common()
    )
    sector_options = "".join(
        f'<option value="{esc(name)}">{esc(name.replace("_", " "))}</option>'
        for name in sorted(sectors)
    )
    rows = []
    for record in sorted(records, key=lambda item: (item.get("outcome_on") or "", item.get("name", ""))):
        rows.append(
            "<tr data-search=\"{search}\" data-sector=\"{sector}\" data-outcome=\"{outcome}\">"
            "<td><strong>{name}</strong><small>{domain}</small></td>"
            "<td>{outcome}</td><td>{date}</td><td>{sector}</td><td>{summary}</td></tr>".format(
                search=esc(" ".join(str(record.get(key, "")) for key in ("name", "canonical_domain", "summary", "sector"))).lower(),
                sector=esc(record.get("sector", "unknown")),
                outcome=esc(record.get("outcome_type", "unknown")),
                name=esc(record.get("name")),
                domain=esc(record.get("canonical_domain")),
                date=esc(record.get("outcome_on")),
                summary=esc(record.get("summary")),
            )
        )

    data_json = json.dumps(records, ensure_ascii=False).replace("</", "<\\/")
    return f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Startup Graveyard — Evidence Report</title>
<style>
:root {{ color-scheme: dark; --bg:#0c1016; --panel:#131a24; --line:#263244; --text:#edf2f7; --muted:#9aa8ba; --accent:#70e1b4; --accent2:#8aa8ff; }}
* {{ box-sizing:border-box }} body {{ margin:0; background:radial-gradient(circle at 10% 0%,#192439 0,#0c1016 42%); color:var(--text); font:15px/1.5 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }}
main {{ max-width:1180px; margin:auto; padding:48px 22px 80px; }} h1 {{ font-size:clamp(2.2rem,6vw,5rem); line-height:.98; letter-spacing:-.06em; max-width:780px; margin:0 0 18px; }} h2 {{ letter-spacing:-.03em; margin-top:0 }} p {{ color:var(--muted); max-width:760px }}
.eyebrow {{ color:var(--accent); font-weight:700; text-transform:uppercase; letter-spacing:.16em; font-size:.75rem }} .panel {{ background:color-mix(in srgb,var(--panel) 92%,transparent); border:1px solid var(--line); border-radius:18px; padding:22px; margin-top:22px; box-shadow:0 12px 40px #0003; }}
.cards {{ display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:12px; margin-top:28px }} .card {{ border:1px solid var(--line); border-radius:14px; padding:16px; background:#101722 }} .card b {{ display:block; font-size:2rem; color:var(--accent) }} .card span {{ color:var(--muted); font-size:.82rem }}
.grid {{ display:grid; grid-template-columns:1fr 1fr; gap:22px; }} .bar-row {{ display:grid; grid-template-columns:150px 1fr 32px; gap:10px; align-items:center; margin:10px 0; color:var(--muted); text-transform:capitalize }} .bar {{ height:9px; background:#202c3d; border-radius:99px; overflow:hidden }} .bar i {{ display:block; height:100%; background:linear-gradient(90deg,var(--accent2),var(--accent)); border-radius:99px }}
.filters {{ display:flex; flex-wrap:wrap; gap:10px; margin:12px 0 18px }} input,select {{ background:#0c121b; border:1px solid var(--line); color:var(--text); border-radius:9px; padding:10px 12px; font:inherit }} input {{ flex:1; min-width:220px }}
.table-wrap {{ overflow:auto; border:1px solid var(--line); border-radius:12px }} table {{ width:100%; border-collapse:collapse; min-width:850px }} th,td {{ padding:13px 14px; text-align:left; vertical-align:top; border-bottom:1px solid #202a38 }} th {{ color:var(--muted); font-size:.76rem; text-transform:uppercase; letter-spacing:.08em; position:sticky; top:0; background:#141c28 }} td {{ color:#dce5ee }} td small {{ display:block; color:var(--muted); margin-top:2px }} tr:last-child td {{ border-bottom:0 }} .note {{ border-left:3px solid var(--accent); padding-left:14px }} footer {{ color:var(--muted); margin-top:28px; font-size:.85rem }}
@media(max-width:800px) {{ .cards,.grid {{ grid-template-columns:1fr 1fr }} .bar-row {{ grid-template-columns:120px 1fr 28px; font-size:.85rem }} }} @media(max-width:500px) {{ .cards,.grid {{ grid-template-columns:1fr }} main {{ padding:32px 14px 60px }} }}
</style></head><body><main>
<div class="eyebrow">Startup Graveyard · reproducible report</div>
<h1>Why do startups die?</h1>
<p>This report summarizes the reviewed public cases in the repository. It is an evidence-first research sample, not a failure rate estimate for all startups.</p>
<div class="cards"><div class="card"><b>{len(records)}</b><span>reviewed companies</span></div><div class="card"><b>{outcomes.get("shutdown", 0)}</b><span>shutdowns</span></div><div class="card"><b>{outcomes.get("wind_down", 0)}</b><span>wind-downs</span></div><div class="card"><b>{len(factors)}</b><span>factor categories</span></div></div>
<div class="grid"><section class="panel"><h2>Documented factors</h2>{factor_rows or '<p>No factor claims available.</p>'}</section><section class="panel"><h2>Scope & methodology</h2><p class="note">Each factor is a sourced claim with an explicit confidence score. Unknown outcomes are not counted as shutdowns, and a YC batch is not treated as proof of founding year.</p><p>The active project cohort focuses on startups founded in 2021 or first institutionally funded in 2021. The reviewed archive currently contains {len(records)} cases; the YC sampling frame is kept separate.</p></section></div>
<section class="panel"><h2>Reviewed cases</h2><div class="filters"><input id="q" placeholder="Search company, sector, or summary…"><select id="sector"><option value="">All sectors</option>{sector_options}</select><select id="outcome"><option value="">All outcomes</option>{''.join(f'<option value="{esc(name)}">{esc(name.replace("_", " "))}</option>' for name in sorted(outcomes))}</select><span id="count" style="padding:10px 0;color:var(--muted)"></span></div><div class="table-wrap"><table><thead><tr><th>Company</th><th>Outcome</th><th>Date</th><th>Sector</th><th>Evidence-backed summary</th></tr></thead><tbody id="rows">{"".join(rows)}</tbody></table></div></section>
<footer>Generated from <code>data/raw/startups.jsonl</code> with <code>scripts/build_html_report.py</code>. Sources and factor evidence are available in the raw records.</footer>
</main><script>
const q=document.querySelector('#q'), sector=document.querySelector('#sector'), outcome=document.querySelector('#outcome'), count=document.querySelector('#count');
function filter() {{ const term=q.value.toLowerCase().trim(), rows=[...document.querySelectorAll('#rows tr')]; let visible=0; rows.forEach(row=>{{const ok=(!term||row.dataset.search.includes(term))&&(!sector.value||row.dataset.sector===sector.value)&&(!outcome.value||row.dataset.outcome===outcome.value); row.hidden=!ok; if(ok)visible++;}}); count.textContent=`Showing ${{visible}} of ${{rows.length}}`; }} [q,sector,outcome].forEach(el=>el.addEventListener('input',filter)); filter();
</script></body></html>"""


def main() -> None:
    records = load_records()
    OUTPUT.write_text(build_report(records), encoding="utf-8")
    print(f"wrote {OUTPUT} ({len(records)} reviewed records)")


if __name__ == "__main__":
    main()
