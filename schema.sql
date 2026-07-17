-- The Startup Lifecycle Project — core schema (DuckDB)
-- Every fact carries its source. Company identity is a canonical slug;
-- source-specific ids live in company_sources for entity resolution.

CREATE TABLE IF NOT EXISTS companies (
    company_id      VARCHAR PRIMARY KEY,   -- canonical slug, e.g. 'airbyte'
    name            VARCHAR NOT NULL,
    website         VARCHAR,
    domain          VARCHAR,               -- normalized apex domain, resolution key
    one_liner       VARCHAR,
    long_description VARCHAR,
    batch           VARCHAR,               -- e.g. 'Winter 2021' (YC cohort)
    cohort_year     INTEGER,               -- year the company entered the dataset window
    status          VARCHAR,               -- Active | Acquired | Inactive | Public
    industry        VARCHAR,
    subindustry     VARCHAR,
    tags            VARCHAR[],
    region          VARCHAR,
    team_size       INTEGER,
    ingested_at     TIMESTAMP DEFAULT current_timestamp
);

-- Source-specific identities for one canonical company (entity resolution).
CREATE TABLE IF NOT EXISTS company_sources (
    company_id      VARCHAR NOT NULL,
    source          VARCHAR NOT NULL,      -- 'yc', 'sec_edgar', 'wikidata', ...
    source_id       VARCHAR NOT NULL,      -- id within that source
    source_url      VARCHAR,
    raw             JSON,                  -- untouched source record
    ingested_at     TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY (company_id, source)
);

CREATE TABLE IF NOT EXISTS founders (
    company_id      VARCHAR NOT NULL,
    name            VARCHAR NOT NULL,
    role            VARCHAR,
    linkedin_url    VARCHAR,
    prior_founder   BOOLEAN,
    source          VARCHAR
);

CREATE TABLE IF NOT EXISTS funding_rounds (
    company_id      VARCHAR NOT NULL,
    round_type      VARCHAR,               -- seed, series_a, form_d, ...
    announced_date  DATE,
    amount_usd      BIGINT,
    investors       VARCHAR[],
    source          VARCHAR,
    source_url      VARCHAR
);

-- Unified event stream: every dated fact from any source lands here too,
-- so a company page is just SELECT * FROM timeline_events ORDER BY event_date.
CREATE TABLE IF NOT EXISTS timeline_events (
    company_id      VARCHAR NOT NULL,
    event_date      DATE,
    event_type      VARCHAR NOT NULL,      -- founded, funding, launch, layoff, pivot, acquisition, shutdown, ...
    detail          VARCHAR,
    source          VARCHAR NOT NULL,
    source_url      VARCHAR
);

-- Wayback Machine snapshot timeline (website liveness = heartbeat).
CREATE TABLE IF NOT EXISTS wayback_snapshots (
    company_id      VARCHAR NOT NULL,
    snapshot_month  DATE NOT NULL,         -- collapsed to month
    status_code     VARCHAR,
    snapshot_url    VARCHAR,
    PRIMARY KEY (company_id, snapshot_month)
);

CREATE TABLE IF NOT EXISTS hn_mentions (
    company_id      VARCHAR NOT NULL,
    story_id        VARCHAR NOT NULL,
    title           VARCHAR,
    url             VARCHAR,
    points          INTEGER,
    num_comments    INTEGER,
    created_at      TIMESTAMP,
    matched_query   VARCHAR,
    PRIMARY KEY (company_id, story_id)
);

-- Shutdown notices mined from the final Wayback homepage snapshot.
-- A row with phrase NULL means "checked, no notice found" (resumability).
CREATE TABLE IF NOT EXISTS wayback_notices (
    company_id      VARCHAR PRIMARY KEY,
    snapshot_url    VARCHAR,
    phrase          VARCHAR,               -- matched phrase, NULL = none found
    snippet         VARCHAR,               -- surrounding text
    checked_at      TIMESTAMP DEFAULT current_timestamp
);

-- LLM enrichment output. Evidence-linked by construction: no row without
-- a quote and a source URL.
CREATE TABLE IF NOT EXISTS shutdown_enrichment (
    company_id          VARCHAR PRIMARY KEY,
    primary_reason      VARCHAR,
    secondary_reason    VARCHAR,
    category            VARCHAR,           -- controlled vocabulary, defined in enrich/
    confidence          DOUBLE,            -- 0..1, discounted by source quality
    evidence_quote      VARCHAR NOT NULL,
    evidence_source_url VARCHAR NOT NULL,
    source_quality      VARCHAR,           -- founder_letter | news | community | inferred
    model               VARCHAR,
    enriched_at         TIMESTAMP DEFAULT current_timestamp
);
