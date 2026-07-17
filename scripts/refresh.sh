#!/bin/zsh
# Weekly refresh: pull the latest YC directory (statuses change weekly —
# that's how new deaths arrive), re-sweep evidence for inactive companies,
# and rebuild the dashboard. Safe to re-run: every ingester is idempotent
# and the notice miner only visits unchecked companies.
set -e
cd "$(dirname "$0")/.."
export PYTHONPATH=src
PY=.venv/bin/python

echo "=== $(date '+%Y-%m-%d %H:%M') refresh start ==="
$PY -m lifecycle init-db
$PY -m lifecycle ingest-yc
$PY -m lifecycle ingest-wayback --status Inactive
$PY -m lifecycle ingest-hn --status Inactive
$PY -m lifecycle ingest-edgar --status Inactive
$PY -m lifecycle ingest-wayback-notices
if [ -n "$ANTHROPIC_API_KEY" ]; then
  $PY -m lifecycle enrich
else
  echo "(skipping enrich: ANTHROPIC_API_KEY not set)"
fi
$PY -m lifecycle export
$PY dashboard/build.py
$PY -m lifecycle stats
echo "=== refresh done: data/dashboard.html is current ==="
