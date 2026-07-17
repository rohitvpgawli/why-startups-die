import unittest
from pathlib import Path

from scripts.audit_release_gate import audit


class ReleaseGateTests(unittest.TestCase):
    def test_source_and_generated_site_counts_are_consistent(self):
        result = audit(Path("data/raw/startups.jsonl"), Path("web/app/startups.generated.ts"), minimum=100)
        self.assertEqual(result["reviewed_source_records"], 57)
        self.assertEqual(result["generated_site_records"], 57)
        self.assertTrue(result["generated_site_matches_source"])
        self.assertEqual(result["missing_reviewed_stories"], 43)

    def test_sampling_frame_is_over_100_but_reviewed_cohort_gate_is_not(self):
        result = audit(minimum=100)
        self.assertEqual(result["sampling_frame_source_records"], 727)
        self.assertTrue(result["sampling_frame_matches_source"])
        self.assertEqual(result["reviewed_cohort_eligible_records"], 0)
        self.assertFalse(result["gates"]["reviewed_cohort_gate"])
        self.assertTrue(result["gates"]["sampling_frame_has_minimum_startups"])


if __name__ == "__main__":
    unittest.main()
