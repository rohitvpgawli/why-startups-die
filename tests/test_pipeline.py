import json
import sqlite3
import tempfile
import unittest
from pathlib import Path

from src.startup_graveyard.build import build, load
from src.startup_graveyard.contract import ContractError, validate
from src.startup_graveyard.quality import report
from src.startup_graveyard.triage import CandidateError, triage_report, validate_candidate


class ContractTests(unittest.TestCase):
    def record(self):
        return {
            "id": "test-co", "name": "Test Co", "founded_on": "2020-01-01",
            "outcome_on": "2022-01-01", "outcome_type": "shutdown",
            "sector": "saas", "summary": "A test record.", "funding_usd": None,
            "review_status": "reviewed", "reviewed_on": "2026-07-16",
            "sources": [{"id": "s1", "url": "https://example.com/end",
                         "title": "End", "publisher": "Test Co",
                         "published_on": "2022-01-01", "source_type": "company"}],
            "factors": [{"category": "fundraising", "is_primary": True,
                         "confidence": .8, "source_id": "s1", "evidence": "Funding ended."}],
        }

    def test_valid_record(self):
        validate(self.record())

    def test_rejects_outcome_before_founding(self):
        record = self.record()
        record["founded_on"] = "2022-01-01"
        record["outcome_on"] = "2021-12-31"
        with self.assertRaisesRegex(ContractError, "must not precede"):
            validate(record)

    def test_accepts_partial_dates_without_inventing_precision(self):
        record = self.record()
        record["founded_on"] = "2020"
        record["outcome_on"] = "2022-08"
        validate(record)

    def test_outcome_date_is_not_a_cohort_gate(self):
        record = self.record()
        record["founded_on"] = "2018"
        record["outcome_on"] = "2020-12"
        validate(record)

    def test_accepts_explicit_first_funded_cohort_metadata(self):
        record = self.record()
        record.update({
            "first_funded_on": "2021-03",
            "cohort_basis": "first_funded_on",
            "cohort_year": 2021,
        })
        validate(record)

    def test_rejects_cohort_year_that_does_not_match_basis_date(self):
        record = self.record()
        record.update({
            "first_funded_on": "2021-03",
            "cohort_basis": "first_funded_on",
            "cohort_year": 2022,
        })
        with self.assertRaisesRegex(ContractError, "cohort_year must match"):
            validate(record)

    def test_requires_complete_cohort_basis_and_year_pair(self):
        record = self.record()
        record.update({"first_funded_on": "2021-03", "cohort_basis": "first_funded_on"})
        with self.assertRaisesRegex(ContractError, "cohort_year is required"):
            validate(record)
        record = self.record()
        record["cohort_year"] = 2021
        with self.assertRaisesRegex(ContractError, "cohort_basis is required"):
            validate(record)

    def test_allows_right_censored_active_record_without_outcome_date(self):
        record = self.record()
        record["outcome_type"] = "active"
        record["outcome_on"] = None
        record["observed_through"] = "2026-07"
        validate(record)

    def test_requires_date_for_terminal_outcome(self):
        record = self.record()
        record["outcome_on"] = None
        with self.assertRaisesRegex(ContractError, "required for terminal"):
            validate(record)

    def test_rejects_dangling_factor_source(self):
        record = self.record()
        record["factors"][0]["source_id"] = "missing"
        with self.assertRaisesRegex(ContractError, "unknown source"):
            validate(record)

    def test_build_preserves_relations(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            raw = root / "records.jsonl"
            raw.write_text(json.dumps(self.record()) + "\n")
            output = root / "output.db"
            build(load(raw), output)
            connection = sqlite3.connect(output)
            counts = [connection.execute(f"SELECT COUNT(*) FROM {table}").fetchone()[0]
                      for table in ("startups", "sources", "factors")]
            columns = {row[1] for row in connection.execute("PRAGMA table_info(startups)")}
            connection.close()
            self.assertEqual(counts, [1, 1, 1])
            self.assertTrue({"first_funded_on", "cohort_basis", "cohort_year", "observed_through"} <= columns)

    def test_quality_report_exposes_coverage_and_missingness(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            raw = root / "records.jsonl"
            raw.write_text(json.dumps(self.record()) + "\n")
            output = root / "output.db"
            build(load(raw), output)
            metrics = report(output)
            self.assertEqual(metrics["startups"], 1)
            self.assertEqual(metrics["reviewed_startups"], 1)
            self.assertEqual(metrics["primary_source_share"], 1.0)
            self.assertEqual(metrics["missingness"]["funding_usd"], 1.0)
            self.assertEqual(metrics["cohort_coverage"]["cohort_year"], 0.0)

    def test_quality_report_exposes_cohort_metadata_coverage(self):
        record = self.record()
        record.update({
            "first_funded_on": "2021",
            "cohort_basis": "first_funded_on",
            "cohort_year": 2021,
        })
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            raw = root / "records.jsonl"
            raw.write_text(json.dumps(record) + "\n")
            output = root / "output.db"
            build(load(raw), output)
            metrics = report(output)
            self.assertEqual(metrics["cohort_coverage"], {
                "first_funded_on": 1.0,
                "cohort_basis": 1.0,
                "cohort_year": 1.0,
            })

    def test_candidate_queue_is_separate_and_detects_reviewed_duplicates(self):
        candidate = {
            "id": "test-co", "name": "Test Co", "canonical_domain": None,
            "status": "ready_for_review", "priority": 1,
            "discovered_on": "2026-07-16",
            "sources": [{"url": "https://example.com/postmortem", "source_family": "first_party"}],
            "notes": "Candidate only.",
        }
        validate_candidate(candidate)
        metrics = triage_report([candidate], [self.record()])
        self.assertEqual(metrics["ready_for_review"], 1)
        self.assertEqual(metrics["duplicate_matches"][0]["candidate_id"], "test-co")

    def test_promoted_candidate_requires_a_reviewed_record(self):
        candidate = {
            "id": "promoted-co", "name": "Promoted Co", "canonical_domain": None,
            "status": "promoted", "priority": 1, "discovered_on": "2026-07-16",
            "sources": [{"url": "https://example.com/postmortem", "source_family": "first_party"}],
            "notes": "Promoted after review.",
        }
        metrics = triage_report([candidate], [])
        self.assertEqual(metrics["promoted_without_record"], ["promoted-co"])
        reviewed = self.record()
        reviewed["id"] = "promoted-co"
        reviewed["name"] = "Promoted Co"
        metrics = triage_report([candidate], [reviewed])
        self.assertEqual(metrics["promoted_matches"], ["promoted-co"])
        self.assertEqual(metrics["duplicate_matches"], [])

    def test_candidate_rejects_unknown_source_family(self):
        candidate = {
            "id": "candidate", "name": "Candidate", "canonical_domain": None,
            "status": "discovered", "priority": 3, "discovered_on": "2026-07-16",
            "sources": [{"url": "https://example.com", "source_family": "social"}],
            "notes": "Candidate only.",
        }
        with self.assertRaisesRegex(CandidateError, "source_family"):
            validate_candidate(candidate)


if __name__ == "__main__":
    unittest.main()
