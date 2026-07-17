import csv
import json
import tempfile
import unittest
import zipfile
from pathlib import Path

from scripts.build_sec_form_d_candidates import build_candidates, normalize_name


class SECCandidateTests(unittest.TestCase):
    def test_normalize_name_handles_legal_suffix_without_merging_words(self):
        self.assertEqual(normalize_name("Example Labs, Inc."), "example labs")
        self.assertEqual(normalize_name("A/B Tools"), "a b tools")

    def test_build_candidates_keeps_unmatched_rows_and_does_not_promote_date(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            roster = root / "roster.jsonl"
            roster.write_text("\n".join(json.dumps(row) for row in [
                {"id": "yc-winter-2021-example", "name": "Example", "aliases": [], "batch": "Winter 2021", "cohort_year": 2021},
                {"id": "yc-winter-2021-unmatched", "name": "Unmatched", "aliases": [], "batch": "Winter 2021", "cohort_year": 2021},
            ]) + "\n")
            zip_dir = root / "zips"
            zip_dir.mkdir()
            zip_path = zip_dir / "2021q1_d.zip"
            issuer_fields = ["ACCESSIONNUMBER", "CIK", "ENTITYNAME"]
            offering_fields = ["ACCESSIONNUMBER", "ISAMENDMENT", "PREVIOUSACCESSIONNUMBER", "SALE_DATE"]
            submission_fields = ["ACCESSIONNUMBER", "FILING_DATE", "SUBMISSIONTYPE"]
            def tsv(fields, rows):
                import io
                stream = io.StringIO()
                writer = csv.DictWriter(stream, fieldnames=fields, delimiter="\t", lineterminator="\n")
                writer.writeheader()
                writer.writerows(rows)
                return stream.getvalue().encode()
            with zipfile.ZipFile(zip_path, "w") as archive:
                archive.writestr("2021Q1_d/ISSUERS.tsv", tsv(issuer_fields, [{"ACCESSIONNUMBER": "0000000001-21-000001", "CIK": "0000000001", "ENTITYNAME": "Example, Inc."}]))
                archive.writestr("2021Q1_d/OFFERING.tsv", tsv(offering_fields, [{"ACCESSIONNUMBER": "0000000001-21-000001", "ISAMENDMENT": "false", "PREVIOUSACCESSIONNUMBER": "", "SALE_DATE": "2021-03-01"}]))
                archive.writestr("2021Q1_d/FORMDSUBMISSION.tsv", tsv(submission_fields, [{"ACCESSIONNUMBER": "0000000001-21-000001", "FILING_DATE": "01-MAR-2021", "SUBMISSIONTYPE": "D"}]))
            rows, summary = build_candidates(roster, zip_dir, retrieved_at="2026-07-17T00:00:00+00:00")
            self.assertEqual(summary["roster_records"], 2)
            self.assertEqual(summary["startup_match_counts"], {"matched": 1, "no_match": 1})
            matched, unmatched = rows
            self.assertEqual(matched["sec_sale_candidate_on"], "2021-03-01")
            self.assertIsNone(matched["first_funded_on"])
            self.assertEqual(unmatched["match_status"], "no_match")
            self.assertIsNone(unmatched["sec_sale_candidate_on"])


if __name__ == "__main__":
    unittest.main()
