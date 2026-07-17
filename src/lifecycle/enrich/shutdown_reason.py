"""LLM enrichment: extract structured shutdown reasons from public evidence.

For each inactive company we assemble the public evidence (YC profile, HN
stories and comments, Wayback death timeline) and ask Claude for a structured
extraction. Every row is evidence-linked by construction: the model must
return a verbatim quote and the URL it came from, and confidence is
discounted by source quality — a founder's shutdown letter is PR, an HN
thread is community testimony, a dead website alone is only an inference.

Requires ANTHROPIC_API_KEY (or an `ant auth login` profile).
"""
from __future__ import annotations

import json
import time
from typing import Any, Dict, List, Optional

import httpx

from lifecycle.db import connect

HN_ITEM_URL = "https://hn.algolia.com/api/v1/items/{story_id}"

CATEGORIES = [
    "no_product_market_fit",
    "ran_out_of_funding",
    "founder_issues",
    "competition",
    "market_timing",
    "failed_pivot",
    "acquihire_wind_down",
    "regulatory",
    "technical_or_product",
    "pivoted_new_entity",
    "unknown",
]

ENRICHMENT_SCHEMA = {
    "type": "object",
    "properties": {
        "primary_reason": {"type": "string"},
        "secondary_reason": {"type": ["string", "null"]},
        "category": {"type": "string", "enum": CATEGORIES},
        "confidence": {"type": "number"},
        "evidence_quote": {"type": "string"},
        "evidence_source_url": {"type": "string"},
        "source_quality": {
            "type": "string",
            "enum": ["founder_letter", "news", "community", "inferred"],
        },
    },
    "required": [
        "primary_reason", "secondary_reason", "category", "confidence",
        "evidence_quote", "evidence_source_url", "source_quality",
    ],
    "additionalProperties": False,
}

SYSTEM_PROMPT = """You are a startup-failure researcher building a research-grade dataset.
Given public evidence about a defunct YC startup, extract why it shut down.

Rules:
- evidence_quote must be a VERBATIM sentence from the provided evidence, and
  evidence_source_url must be the URL that quote came from. Never paraphrase.
- Shutdown letters are PR documents: founders say "market timing", not
  "my co-founder and I stopped speaking". Weigh community discussion (HN
  comments) against official statements when they conflict.
- confidence reflects BOTH extraction certainty and source quality:
  founder_letter or news with a clear stated reason: up to 0.9;
  community testimony: up to 0.7; inference from description + website
  death alone: at most 0.4 with source_quality="inferred".
- If the evidence doesn't support any reason, use category="unknown" with
  confidence <= 0.2 and quote the most informative available sentence."""


def fetch_hn_story(story_id: str, max_comments: int = 15) -> Optional[Dict[str, Any]]:
    """Fetch a story with its top-level comments from Algolia."""
    try:
        resp = httpx.get(HN_ITEM_URL.format(story_id=story_id), timeout=30)
        resp.raise_for_status()
    except Exception:
        return None
    item = resp.json()
    comments = []
    for child in (item.get("children") or [])[:max_comments]:
        if child.get("text"):
            comments.append({"author": child.get("author"), "text": child["text"]})
    return {
        "title": item.get("title"),
        "url": item.get("url"),
        "hn_url": f"https://news.ycombinator.com/item?id={story_id}",
        "text": item.get("text"),
        "comments": comments,
    }


def gather_evidence(con, company_id: str) -> Dict[str, Any]:
    row = con.execute(
        """
        SELECT name, one_liner, long_description, batch, status, industry
        FROM companies WHERE company_id = ?
        """,
        [company_id],
    ).fetchone()
    mentions = con.execute(
        """
        SELECT story_id, title, url, points, num_comments, created_at
        FROM hn_mentions WHERE company_id = ?
        ORDER BY points DESC LIMIT 5
        """,
        [company_id],
    ).fetchall()
    last_alive = con.execute(
        """
        SELECT max(snapshot_month) FROM wayback_snapshots
        WHERE company_id = ? AND status_code = '200'
        """,
        [company_id],
    ).fetchone()[0]

    stories = []
    for story_id, title, url, points, num_comments, created_at in mentions:
        story = fetch_hn_story(story_id)
        if story:
            story.update({"points": points, "posted": str(created_at)})
            stories.append(story)
        time.sleep(0.2)

    return {
        "name": row[0],
        "one_liner": row[1],
        "description": row[2],
        "batch": row[3],
        "industry": row[5],
        "yc_url": f"https://www.ycombinator.com/companies/{company_id}",
        "website_last_alive_month": str(last_alive) if last_alive else None,
        "hn_stories": stories,
    }


def enrich_company(client, con, company_id: str, model: str = "claude-opus-4-8") -> Optional[dict]:
    evidence = gather_evidence(con, company_id)
    response = client.messages.create(
        model=model,
        max_tokens=2048,
        thinking={"type": "adaptive"},
        system=SYSTEM_PROMPT,
        output_config={"format": {"type": "json_schema", "schema": ENRICHMENT_SCHEMA}},
        messages=[
            {
                "role": "user",
                "content": "Evidence for a defunct YC startup:\n\n"
                + json.dumps(evidence, indent=2, default=str),
            }
        ],
    )
    if response.stop_reason == "refusal":
        return None
    result = json.loads(next(b.text for b in response.content if b.type == "text"))
    con.execute(
        """
        INSERT OR REPLACE INTO shutdown_enrichment
            (company_id, primary_reason, secondary_reason, category, confidence,
             evidence_quote, evidence_source_url, source_quality, model)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
        [
            company_id,
            result["primary_reason"],
            result["secondary_reason"],
            result["category"],
            result["confidence"],
            result["evidence_quote"],
            result["evidence_source_url"],
            result["source_quality"],
            model,
        ],
    )
    return result


def run(limit: int = None) -> None:
    import anthropic

    client = anthropic.Anthropic()
    with connect() as con:
        targets = con.execute(
            """
            SELECT c.company_id FROM companies c
            LEFT JOIN shutdown_enrichment e ON e.company_id = c.company_id
            WHERE c.status = 'Inactive' AND e.company_id IS NULL
            ORDER BY c.company_id
            """
            + (f" LIMIT {int(limit)}" if limit else "")
        ).fetchall()
        print(f"enriching {len(targets)} companies")
        for i, (company_id,) in enumerate(targets, 1):
            try:
                result = enrich_company(client, con, company_id)
            except Exception as e:
                print(f"  [{i}/{len(targets)}] {company_id}: FAILED {e}")
                continue
            if result:
                print(
                    f"  [{i}/{len(targets)}] {company_id}: {result['category']}"
                    f" ({result['confidence']:.0%}, {result['source_quality']})"
                )
    print("enrichment done")
