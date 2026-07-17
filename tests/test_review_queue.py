import json
import unittest
from pathlib import Path

from scripts.build_yc_review_queue import build_queue


class ReviewQueueTests(unittest.TestCase):
    def test_queue_preserves_all_roster_rows_and_keeps_outcomes_unpublished(self):
        root = Path(__file__).parents[1] / "data" / "cohort" / "yc-2021"
        rows, summary = build_queue(
            root / "roster.jsonl",
            root / "roster-enriched.jsonl",
            root / "sec-sale-candidates.jsonl",
            root / "lifecycle-status-reviews.jsonl",
            root / "sec-date-conflicts.jsonl",
            root / "lifecycle-outcomes-reviewed.jsonl",
            root / "sec-sale-reviews.jsonl",
        )
        self.assertEqual(len(rows), 727)
        self.assertEqual(summary["eligibility_counts"], {
            "founded_2021_verified": 3,
            "not_yet_eligible": 655,
            "predecessor_sale_before_2021": 3,
            "reported_sale_2021_pending_review": 42,
            "reported_sale_before_2021": 13,
            "sec_identity_rejected": 11,
        })
        self.assertEqual(summary["lifecycle_status_candidates"], 3)
        self.assertEqual(summary["publishable_outcomes"], 3)
        self.assertEqual(summary["reviewed_right_censored"], 3)
        self.assertEqual(summary["review_priority_counts"], {
            "not_started": 657,
            "resolved": 70,
        })
        self.assertTrue(all(row["first_funded_on"] is None for row in rows))
        self.assertEqual(sum(row["reviewed_outcome_type"] == "active" for row in rows), 3)

    def test_generated_queue_summary_matches_rows(self):
        root = Path(__file__).parents[1] / "data" / "cohort" / "yc-2021"
        rows = [json.loads(line) for line in (root / "review-queue.jsonl").read_text().splitlines() if line.strip()]
        summary = json.loads((root / "review-queue.summary.json").read_text())
        self.assertEqual(len(rows), summary["records"])
        self.assertEqual(sum(row["eligibility_decision"] == "founded_2021_verified" for row in rows), 3)
        self.assertEqual(sum(row["publishable_outcome"] for row in rows), 3)


if __name__ == "__main__":
    unittest.main()
