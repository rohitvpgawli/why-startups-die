"""Inject data/export.json into dashboard/template.html -> data/dashboard.html."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

data = json.loads((ROOT / "data" / "export.json").read_text())
template = (ROOT / "dashboard" / "template.html").read_text()
out = template.replace("/*__DATA__*/null", json.dumps(data, separators=(",", ":")))
out_path = ROOT / "data" / "dashboard.html"
out_path.write_text(out)
print(f"built {out_path} ({out_path.stat().st_size // 1024} KB)")
