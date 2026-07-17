import unittest
from pathlib import Path

from scripts.fetch_yc_2021_roster import normalize
from scripts.report_yc_2021_roster import RosterError, report, validate_record


class YCRosterTests(unittest.TestCase):
    def test_normalize_preserves_batch_metadata_without_inventing_outcome(self):
        row = {
            "slug": "example",
            "name": "Example",
            "former_names": ["Old Example"],
            "website": "https://example.com",
            "url": "https://www.ycombinator.com/companies/example",
            "api": "https://yc-oss.github.io/api/batches/winter-2021/example.json",
            "all_locations": "New York, NY, USA",
            "industry": "B2B",
            "subindustry": "B2B -> SaaS",
            "industries": ["B2B"],
            "regions": ["United States of America"],
            "tags": ["SaaS"],
            "one_liner": "Example company",
            "team_size": 3,
            "stage": "Early",
            "status": "Active",
            "isHiring": True,
            "nonprofit": False,
        }
        record = normalize(row, "winter-2021", "2026-07-17T00:00:00+00:00", "https://source")
        self.assertEqual(record["cohort_basis"], "yc_batch")
        self.assertEqual(record["cohort_year"], 2021)
        self.assertEqual(record["yc_status"], "Active")
        self.assertIsNone(record["outcome_type"])
        self.assertIsNone(record["outcome_on"])
        self.assertEqual(record["canonical_domain"], "example.com")

    def test_report_matches_frozen_manifest_and_keeps_batch_status_separate(self):
        root = Path(__file__).parents[1] / "data" / "cohort" / "yc-2021"
        metrics = report(root / "roster.jsonl", root / "manifest.json")
        self.assertEqual(metrics["records"], 727)
        self.assertEqual(metrics["batch_counts"], {"Summer 2021": 391, "Winter 2021": 336})
        self.assertEqual(metrics["yc_status_counts"], {"Acquired": 79, "Active": 523, "Inactive": 125})
        self.assertEqual(metrics["outcome_fields_populated"]["outcome_type"], 0)
        self.assertEqual(metrics["missingness"]["founded_on"], 727)
        self.assertIn("batch year is not the company's founding year", metrics["caveats"][0])

    def test_report_counts_unreviewed_founding_candidates_separately(self):
        root = Path(__file__).parents[1] / "data" / "cohort" / "yc-2021"
        metrics = report(root / "roster.jsonl", root / "manifest.json", root / "founding-date-candidates.jsonl")
        self.assertEqual(metrics["date_candidates"]["records"], 9)
        self.assertEqual(metrics["date_candidates"]["by_candidate_value"]["2021"], 4)
        self.assertEqual(metrics["date_candidates"]["review_status_counts"], {"needs_review": 9})

    def test_report_counts_sec_candidates_without_promoting_funding_dates(self):
        root = Path(__file__).parents[1] / "data" / "cohort" / "yc-2021"
        metrics = report(root / "roster.jsonl", root / "manifest.json", sec_candidates_path=root / "sec-sale-candidates.jsonl", sec_reviews_path=root / "sec-sale-reviews.jsonl", sec_conflicts_path=root / "sec-date-conflicts.jsonl")
        self.assertEqual(metrics["sec_sale_candidates"]["records"], 727)
        self.assertEqual(metrics["sec_sale_candidates"]["candidate_dates"], 70)
        self.assertEqual(metrics["sec_sale_candidates"]["match_status_counts"]["no_match"], 657)
        self.assertEqual(metrics["sec_sale_candidates"]["review_status_counts"], {"needs_review": 70, "not_started": 657})
        self.assertEqual(metrics["sec_identity_reviews"], {
            "records": 70,
            "decision_counts": {"accepted_identity_match": 55, "rejected_identity_match": 12, "related_predecessor": 3},
        })
        self.assertEqual(metrics["sec_date_conflicts"], {
            "records": 1,
            "decision_counts": {"resolved_identity_mismatch": 1},
        })

    def test_roster_rejects_invented_lifecycle_outcome(self):
        record = {
            "id": "yc-winter-2021-example",
            "name": "Example",
            "batch": "Winter 2021",
            "batch_year": 2021,
            "cohort_basis": "yc_batch",
            "cohort_year": 2021,
            "yc_status": "Active",
            "roster_source": "https://example.com/roster.json",
            "retrieved_at": "2026-07-17T00:00:00+00:00",
            "review_status": "unreviewed",
            "outcome_type": "shutdown",
            "outcome_on": None,
            "observed_through": None,
        }
        with self.assertRaisesRegex(RosterError, "outcome_type must be null"):
            validate_record(record)


if __name__ == "__main__":
    unittest.main()
