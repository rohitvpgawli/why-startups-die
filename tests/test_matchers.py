"""Regression tests for the entity-resolution rules.

Every rule here exists because its absence demonstrably polluted the data;
these tests pin the failure cases so they can't regress silently.
Run: PYTHONPATH=src .venv/bin/python -m unittest discover tests
"""
import unittest

from lifecycle.ingest.hn import is_relevant
from lifecycle.ingest.sec_edgar import name_matches
from lifecycle.ingest.yc import apex_domain, batch_year


class TestEdgarNameMatcher(unittest.TestCase):
    def test_exact_match_with_corporate_suffix(self):
        self.assertTrue(name_matches("Airbyte", "AIRBYTE, INC.  (CIK 0001864376)"))
        self.assertTrue(name_matches("Jasper AI", "Jasper AI, Inc.  (CIK 0001951169)"))
        self.assertTrue(name_matches("Acme", "Acme LLC"))
        self.assertTrue(name_matches("Acme", "acme"))

    def test_common_word_fund_pollution(self):
        # The bug that produced 789 false filings: leading-prefix matching.
        self.assertFalse(name_matches("Galaxy", "Galaxy Digital LP"))
        self.assertFalse(name_matches("Stellar", "Stellar Development Foundation"))
        self.assertFalse(name_matches("Lynx", "Lynx Capital Partners Fund III"))
        self.assertFalse(name_matches("Clay", "Claymore Securities Inc"))

    def test_name_must_lead(self):
        self.assertFalse(name_matches("Airbyte", "Not Airbyte Inc"))
        self.assertFalse(name_matches("", "Anything Inc"))


class TestHNRelevanceFilter(unittest.TestCase):
    def test_domain_match_is_decisive(self):
        self.assertTrue(is_relevant("Abel", "tryabel.com", "Anything at all", "https://tryabel.com/blog"))

    def test_short_name_homonym_rejected(self):
        # 'Abel' matched 20 unrelated stories before the context requirement.
        self.assertFalse(is_relevant("Abel", "tryabel.com", "Abel Wang Is Dead", "https://example.com"))
        self.assertFalse(is_relevant("June", "june.so", "Simply Hired is shutting down June 26", "https://example.com"))

    def test_short_name_with_startup_context_kept(self):
        self.assertTrue(is_relevant("Abel", "tryabel.com", "Launch HN: Abel (YC W24)", None))

    def test_distinctive_name_kept_without_context(self):
        self.assertTrue(is_relevant("Dataherald", "dataherald.com", "Dataherald raises questions", None))

    def test_name_must_be_word_bounded(self):
        self.assertFalse(is_relevant("Abel", "tryabel.com", "Abelian groups explained", None))


class TestYCParsing(unittest.TestCase):
    def test_batch_year(self):
        self.assertEqual(batch_year("Winter 2021"), 2021)
        self.assertEqual(batch_year("W21"), 2021)
        self.assertEqual(batch_year("Fall 2024"), 2024)
        self.assertIsNone(batch_year(""))

    def test_apex_domain(self):
        self.assertEqual(apex_domain("https://www.airbyte.com/product"), "airbyte.com")
        self.assertEqual(apex_domain("tryabel.com"), "tryabel.com")
        self.assertIsNone(apex_domain(""))


if __name__ == "__main__":
    unittest.main()
