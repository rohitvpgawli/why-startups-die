import json
import tempfile
import unittest
from pathlib import Path

from scripts.extract_yc_date_candidates import extract, extract_row
from scripts.apply_yc_date_reviews import apply_reviews
from scripts.report_yc_2021_roster import report


class YCDateCandidateTests(unittest.TestCase):
    def test_review_sidecar_has_explicit_acceptance_and_conflict_decisions(self):
        path = Path(__file__).parents[1] / "data" / "cohort" / "yc-2021" / "founding-date-reviews.jsonl"
        rows = [json.loads(line) for line in path.read_text().splitlines() if line.strip()]
        self.assertEqual(len(rows), 4)
        self.assertEqual(sum(row["decision"] == "accepted" for row in rows), 3)
        self.assertEqual(sum(row["decision"] == "rejected" for row in rows), 1)
        self.assertTrue(all(row["review_status"] == "reviewed" for row in rows))
        self.assertEqual([row["name"] for row in rows if row["decision"] == "rejected"], ["Alokai"])

    def test_apply_reviews_creates_three_verified_2021_rows_without_outcomes(self):
        root = Path(__file__).parents[1] / "data" / "cohort" / "yc-2021"
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / "roster-enriched.jsonl"
            self.assertEqual(apply_reviews(root / "roster.jsonl", root / "founding-date-reviews.jsonl", output), 727)
            rows = [json.loads(line) for line in output.read_text().splitlines() if line.strip()]
            self.assertEqual(sum(row["cohort_eligibility"] == "founded_2021" for row in rows), 3)
            self.assertEqual(sum(row["outcome_type"] is None for row in rows), 727)

    def test_lifecycle_status_sidecar_keeps_active_labels_provisional(self):
        path = Path(__file__).parents[1] / "data" / "cohort" / "yc-2021" / "lifecycle-status-reviews.jsonl"
        rows = [json.loads(line) for line in path.read_text().splitlines() if line.strip()]
        self.assertEqual(len(rows), 3)
        self.assertTrue(all(row["status_candidate"] == "active" for row in rows))
        self.assertTrue(all(row["decision"] == "provisional" for row in rows))
        self.assertTrue(all(row["review_status"] == "needs_review" for row in rows))

    def test_reviewed_lifecycle_outcomes_are_right_censored_and_non_terminal(self):
        path = Path(__file__).parents[1] / "data" / "cohort" / "yc-2021" / "lifecycle-outcomes-reviewed.jsonl"
        rows = [json.loads(line) for line in path.read_text().splitlines() if line.strip()]
        self.assertEqual(len(rows), 3)
        self.assertTrue(all(row["outcome_type"] == "active" for row in rows))
        self.assertTrue(all(row["right_censored"] for row in rows))
        self.assertTrue(all(row["outcome_on"] is None for row in rows))
        self.assertTrue(all(row["observed_through"] == "2026-07-17" for row in rows))
        self.assertTrue(all(row["review_status"] == "reviewed" for row in rows))

    def test_report_exposes_provisional_status_sidecar(self):
        root = Path(__file__).parents[1] / "data" / "cohort" / "yc-2021"
        metrics = report(root / "roster.jsonl", root / "manifest.json", root / "founding-date-candidates.jsonl", root / "lifecycle-status-reviews.jsonl")
        self.assertEqual(metrics["lifecycle_status_candidates"], {
            "records": 3,
            "status_candidates": {"active": 3},
            "decision_counts": {"provisional": 3},
        })

    def test_extracts_only_an_explicit_founding_claim(self):
        row = {
            "batch": "Summer 2021",
            "slug": "example",
            "name": "Example",
            "url": "https://www.ycombinator.com/companies/example",
            "long_description": "Example was founded in 2021 by two founders.",
        }
        candidate = extract_row(row, Path("summer-2021.json"))
        self.assertIsNotNone(candidate)
        self.assertEqual(candidate["candidate_value"], "2021")
        self.assertEqual(candidate["review_status"], "needs_review")

    def test_ignores_batch_without_explicit_founding_claim(self):
        row = {
            "batch": "Winter 2021",
            "slug": "example",
            "name": "Example",
            "url": "https://www.ycombinator.com/companies/example",
            "long_description": "Example joined the Winter 2021 batch.",
        }
        self.assertIsNone(extract_row(row, Path("winter-2021.json")))

    def test_writes_deterministic_sidecar(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            raw = root / "raw"
            raw.mkdir()
            raw.joinpath("winter-2021.json").write_text(json.dumps([{
                "batch": "Winter 2021", "slug": "example", "name": "Example",
                "url": "https://www.ycombinator.com/companies/example",
                "long_description": "Founded in 2021, Example builds tools.",
            }]))
            output = root / "candidates.jsonl"
            self.assertEqual(extract(raw, output), 1)
            record = json.loads(output.read_text())
            self.assertEqual(record["candidate_field"], "founded_on")
            self.assertEqual(record["candidate_value"], "2021")


if __name__ == "__main__":
    unittest.main()
