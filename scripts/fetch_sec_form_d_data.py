"""Download and hash official SEC Form D quarterly bulk files.

The downloaded ZIPs are kept outside the repository by default. The manifest
is suitable for committing alongside a candidate sidecar without checking
large raw archives into Git.
"""

from __future__ import annotations

import argparse
import hashlib
import json
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen


BASE_URL = "https://www.sec.gov/files/structureddata/data/form-d-data-sets"


def fetch(start_year: int, end_year: int, output_dir: Path, user_agent: str) -> dict:
    if start_year > end_year:
        raise ValueError("start year must be <= end year")
    output_dir.mkdir(parents=True, exist_ok=True)
    files = []
    for year in range(start_year, end_year + 1):
        for quarter in range(1, 5):
            filename = f"{year}q{quarter}_d.zip"
            url = f"{BASE_URL}/{filename}"
            destination = output_dir / filename
            request = Request(url, headers={"User-Agent": user_agent, "Accept": "application/zip"})
            with urlopen(request, timeout=120) as response:
                payload = response.read()
            destination.write_bytes(payload)
            files.append({
                "path": filename,
                "source_url": url,
                "bytes": len(payload),
                "sha256": hashlib.sha256(payload).hexdigest(),
            })
    manifest = {
        "source": "SEC Form D quarterly data sets",
        "retrieved_at": datetime.now(timezone.utc).replace(microsecond=0).isoformat(),
        "coverage": {"start_year": start_year, "end_year": end_year},
        "files": files,
    }
    manifest_path = output_dir / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2, sort_keys=True) + "\n")
    return manifest


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--start-year", type=int, default=2018)
    parser.add_argument("--end-year", type=int, default=2021)
    parser.add_argument("--output-dir", type=Path, default=Path("/tmp/formd-history"))
    parser.add_argument("--user-agent", default="StartupGraveyardResearch/0.1 research@example.com")
    args = parser.parse_args()
    print(json.dumps(fetch(args.start_year, args.end_year, args.output_dir, args.user_agent), indent=2, sort_keys=True))


if __name__ == "__main__":
    main()
