"use client";

import { useMemo, useState } from "react";
import type { Factor, Startup } from "./startups.generated";
import type { SamplingFrame } from "./cohort.generated";

type CohortFilter = "all" | "missing" | `${number}:${NonNullable<Startup["cohort_basis"]>}`;
type FrameCompany = SamplingFrame["companies"][number];

const outcomeLabels: Record<Startup["outcome_type"], string> = {
  shutdown: "Shutdown", wind_down: "Wind-down", acquired: "Acquired",
  acquihire: "Acquihire", pivoted: "Pivoted", active: "Active",
  active_after_pivot: "Active after pivot", dormant: "Dormant", ipo: "IPO", unknown: "Unknown",
};

const factorLabels: Record<string, string> = {
  product_market_fit: "Product–market fit", unit_economics: "Unit economics",
  fundraising: "Fundraising", competition: "Competition", market_timing: "Market timing",
  regulation: "Regulation", operations: "Operations", founder_or_team: "Founder / team",
  technology: "Technology", external_shock: "External shock",
  strategic_change: "Strategic change", unknown: "Unknown",
};

function money(value: number | null) {
  if (value === null) return "Not disclosed";
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(value % 1_000_000_000 ? 2 : 0)}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(value % 1_000_000 ? 1 : 0)}M`;
  return `$${Math.round(value / 1_000)}K`;
}

function prettyDate(value: string | null) {
  if (!value) return "Unknown";
  const [year, month, day] = value.split("-");
  if (!month) return year;
  const name = new Intl.DateTimeFormat("en", { month: "short" }).format(new Date(2020, Number(month) - 1));
  return day ? `${name} ${Number(day)}, ${year}` : `${name} ${year}`;
}

function factorSource(startup: Startup, factor: Factor) {
  return startup.sources.find((source) => source.id === factor.source_id);
}

function cohortBasisLabel(basis: Startup["cohort_basis"]) {
  if (basis === "founded_on") return "Founded";
  if (basis === "first_funded_on") return "First funded";
  return "Not recorded";
}

function cohortLabel(startup: Startup) {
  if (startup.cohort_year && startup.cohort_basis) {
    return `${startup.cohort_year} · ${cohortBasisLabel(startup.cohort_basis)}`;
  }
  return "Outcome-only · cohort missing";
}

export function Explorer({ startups, samplingFrame }: { startups: Startup[]; samplingFrame: SamplingFrame }) {
  const [query, setQuery] = useState("");
  const [outcome, setOutcome] = useState("all");
  const [factor, setFactor] = useState("all");
  const [cohort, setCohort] = useState<CohortFilter>("all");
  const [frameQuery, setFrameQuery] = useState("");
  const [frameBatch, setFrameBatch] = useState("all");
  const [frameIndustry, setFrameIndustry] = useState("all");
  const [frameStatus, setFrameStatus] = useState("all");
  const reviewedCohortRecords = startups.filter((startup) => startup.cohort_year && startup.cohort_basis).length;

  const factors = useMemo(() => {
    const counts = new Map<string, number>();
    startups.flatMap((startup) => startup.factors).forEach((item) => counts.set(item.category, (counts.get(item.category) ?? 0) + 1));
    return [...counts].sort((a, b) => b[1] - a[1]);
  }, [startups]);

  const cohorts = useMemo(() => {
    const values = new Map<string, { year: number; basis: NonNullable<Startup["cohort_basis"]> }>();
    startups.forEach((startup) => {
      if (startup.cohort_year && startup.cohort_basis) {
        const key = `${startup.cohort_year}:${startup.cohort_basis}`;
        values.set(key, { year: startup.cohort_year, basis: startup.cohort_basis });
      }
    });
    return [...values.entries()].sort(([, left], [, right]) => left.year - right.year || left.basis.localeCompare(right.basis));
  }, [startups]);

  const frameIndustries = useMemo(() => [...new Set(samplingFrame.companies.map((company) => company.industry))].sort(), [samplingFrame.companies]);

  const filteredFrame = useMemo(() => {
    const needle = frameQuery.trim().toLowerCase();
    return samplingFrame.companies.filter((company) => {
      const haystack = `${company.name} ${company.description} ${company.industry} ${company.tags.join(" ")}`.toLowerCase();
      return (!needle || haystack.includes(needle))
        && (frameBatch === "all" || company.batch === frameBatch)
        && (frameIndustry === "all" || company.industry === frameIndustry)
        && (frameStatus === "all" || company.status === frameStatus);
    }).sort((left, right) => (right.launched_on ?? "").localeCompare(left.launched_on ?? "") || left.name.localeCompare(right.name));
  }, [samplingFrame.companies, frameBatch, frameIndustry, frameQuery, frameStatus]);

  const filtered = useMemo(() => startups.filter((startup) => {
    const haystack = `${startup.name} ${startup.summary} ${startup.sector}`.toLowerCase();
    return haystack.includes(query.toLowerCase())
      && (outcome === "all" || startup.outcome_type === outcome)
      && (factor === "all" || startup.factors.some((item) => item.category === factor))
      && (cohort === "all"
        || (cohort === "missing" && (!startup.cohort_year || !startup.cohort_basis))
        || (startup.cohort_year && startup.cohort_basis && `${startup.cohort_year}:${startup.cohort_basis}` === cohort));
  }).sort((left, right) => (right.outcome_on ?? "").localeCompare(left.outcome_on ?? "")), [startups, query, outcome, factor, cohort]);

  const allSources = startups.flatMap((startup) => startup.sources);
  const primarySourceShare = allSources.length
    ? Math.round(allSources.filter((source) => source.source_type === "company" || source.source_type === "founder").length / allSources.length * 100)
    : 0;

  return (
    <main>
      <header className="masthead">
        <a className="brand" href="#top" aria-label="Startup Graveyard home">
          <span className="brand-mark" aria-hidden="true">SG</span>
          <span>Startup Graveyard</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#explorer">Explore</a>
          <a href="#methodology">Methodology</a>
          <span className="edition">Research preview · 01</span>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow">The ZIRP unwind, sourced</div>
        <h1>What happened<br />after easy money?</h1>
        <p className="hero-copy">An evidence-first record of startup outcomes, with explicit metadata for the 2021 founding and first-funding cohorts—tracking the zero-rate boom, the capital reset, and the operating decisions that followed.</p>
        <div className="hero-rule" />
        <div className="hero-stats" aria-label="Dataset summary">
          <div><strong>{startups.length}</strong><span>reviewed stories</span></div>
          <div><strong>{startups.reduce((sum, item) => sum + item.sources.length, 0)}</strong><span>cited sources</span></div>
          <div><strong>{startups.reduce((sum, item) => sum + item.factors.length, 0)}</strong><span>factor claims</span></div>
          <div><strong>{primarySourceShare}%</strong><span>primary sources</span></div>
        </div>
        <div className="hero-note">Cohort membership is never inferred from an outcome date. This preview still contains outcome-only records; active and dormant chapters require an observation cutoff before they can be treated as right-censored.</div>
      </section>

      <section className="signal" aria-labelledby="signal-title">
        <div>
          <p className="section-number">01 / Signal map</p>
          <h2 id="signal-title">The pressures named<br />in the evidence</h2>
        </div>
        <div className="factor-bars">
          {factors.map(([name, count], index) => (
            <button key={name} className="factor-row" onClick={() => setFactor(name)} aria-label={`Filter by ${factorLabels[name]}`}>
              <span className="factor-rank">{String(index + 1).padStart(2, "0")}</span>
              <span className="factor-name">{factorLabels[name] ?? name}</span>
              <span className="factor-track"><span style={{ width: `${Math.max(18, count / factors[0][1] * 100)}%` }} /></span>
              <strong>{count}</strong>
            </button>
          ))}
        </div>
      </section>

      <section className="sampling-frame" id="sampling-frame" aria-labelledby="sampling-frame-title">
        <div className="section-heading">
          <div><p className="section-number">02 / Sampling frame</p><h2 id="sampling-frame-title">{samplingFrame.records} companies<br />set the frame</h2></div>
          <p>{samplingFrame.description} Directory status is shown as a clue about the public roster—not as a reviewed lifecycle outcome.</p>
        </div>
        <div className="frame-summary" aria-label="YC 2021 sampling frame summary">
          <div><strong>{samplingFrame.records}</strong><span>public directory records</span></div>
          <div><strong>{samplingFrame.batches.length}</strong><span>2021 batches</span></div>
          <div><strong>{startups.length}</strong><span>reviewed outcome stories below</span></div>
          <div><strong>{samplingFrame.review_progress.sale_candidates_2021}</strong><span>2021 sale candidates pending review</span></div>
        </div>
        <div className="frame-breakdowns">
          <div><h3>Batch coverage</h3>{samplingFrame.batches.map((item) => <p key={item.label}><span>{item.label}</span><strong>{item.count}</strong></p>)}</div>
          <div><h3>YC directory status · not outcomes</h3>{samplingFrame.directory_status.map((item) => <p key={item.label}><span>{item.label}</span><strong>{item.count}</strong></p>)}</div>
        </div>
        <p className="frame-note">Evidence progress: {samplingFrame.review_progress.verified_founded_2021} founded-2021 records verified · {samplingFrame.review_progress.sale_candidates_before_2021} earlier sale candidates flagged · {samplingFrame.review_progress.reviewed_right_censored} reviewed right-censored operating records · {samplingFrame.review_progress.high_priority_reviews} high-priority financing review remaining · {samplingFrame.review_progress.publishable_outcomes} publishable lifecycle outcomes.</p>
        <p className="frame-note">Launch gate: {reviewedCohortRecords}/100 reviewed cohort-eligible companies. {Math.max(0, 100 - reviewedCohortRecords)} more require independently verified 2021 founding or first-funding evidence before a denominator is published.</p>
        <p className="frame-source">Frozen {prettyDate(samplingFrame.retrieved_at.slice(0, 10))} · <a href={samplingFrame.source_repository} target="_blank" rel="noreferrer">YC open-data repository ↗</a></p>
        <div className="directory-panel" aria-labelledby="directory-title">
          <div className="directory-heading"><div><p className="section-number">Directory explorer</p><h3 id="directory-title">Browse the full frame</h3></div><p>These are public YC directory records, not reviewed lifecycle outcomes. Use the filters to find a batch, industry, or company worth enriching next.</p></div>
          <div className="directory-filters">
            <label><span>Search companies or tags</span><input value={frameQuery} onChange={(event) => setFrameQuery(event.target.value)} placeholder="Company, description, tag…" /></label>
            <label><span>Batch</span><select value={frameBatch} onChange={(event) => setFrameBatch(event.target.value)}><option value="all">All batches</option>{samplingFrame.batches.map((item) => <option value={item.label} key={item.label}>{item.label}</option>)}</select></label>
            <label><span>Industry</span><select value={frameIndustry} onChange={(event) => setFrameIndustry(event.target.value)}><option value="all">All industries</option>{frameIndustries.map((item) => <option value={item} key={item}>{item}</option>)}</select></label>
            <label><span>Directory status</span><select value={frameStatus} onChange={(event) => setFrameStatus(event.target.value)}><option value="all">All statuses</option>{samplingFrame.directory_status.map((item) => <option value={item.label} key={item.label}>{item.label}</option>)}</select></label>
            <button className="directory-reset" onClick={() => { setFrameQuery(""); setFrameBatch("all"); setFrameIndustry("all"); setFrameStatus("all"); }}>Reset</button>
          </div>
          <div className="directory-results">Showing {filteredFrame.length} of {samplingFrame.records} companies</div>
          <div className="directory-table-wrap">
            <table className="directory-table"><thead><tr><th>Batch</th><th>Company</th><th>Launched</th><th>Description</th><th>Industry</th><th>Tags</th></tr></thead><tbody>
              {filteredFrame.map((company: FrameCompany) => <tr key={company.id}><td><span className="batch-pill">{company.batch.replace(" 2021", "21").replace("Summer", "S").replace("Winter", "W")}</span></td><td><a href={company.yc_profile_url} target="_blank" rel="noreferrer" className="directory-company">{company.name}</a></td><td>{company.launched_on ? prettyDate(company.launched_on) : "—"}</td><td>{company.description || "—"}</td><td>{company.industry}</td><td><div className="directory-tags">{company.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div></td></tr>)}
              {filteredFrame.length === 0 && <tr><td colSpan={6} className="directory-empty">No companies match these filters.</td></tr>}
            </tbody></table>
          </div>
        </div>
      </section>

      <section className="explorer" id="explorer" aria-labelledby="explorer-title">
        <div className="section-heading">
          <div><p className="section-number">03 / The outcome archive</p><h2 id="explorer-title">Read outcomes by date and cohort</h2></div>
          <p>Every factor below is framed as a cited claim—not objective truth. Open a record to inspect its evidence and cohort metadata.</p>
        </div>

        <div className="filter-bar">
          <label className="search-field">
            <span>Search</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Company, sector, or story…" />
          </label>
          <label><span>Outcome</span><select value={outcome} onChange={(event) => setOutcome(event.target.value)}>
            <option value="all">All outcomes</option>
            {[...new Set(startups.map((item) => item.outcome_type))].map((item) => <option value={item} key={item}>{outcomeLabels[item]}</option>)}
          </select></label>
          <label><span>Factor</span><select value={factor} onChange={(event) => setFactor(event.target.value)}>
            <option value="all">All cited factors</option>
            {factors.map(([item]) => <option value={item} key={item}>{factorLabels[item] ?? item}</option>)}
          </select></label>
          <label><span>Cohort</span><select value={cohort} onChange={(event) => setCohort(event.target.value as CohortFilter)}>
            <option value="all">All cohort metadata</option>
            {cohorts.map(([key, item]) => <option value={key} key={key}>{item.year} · {cohortBasisLabel(item.basis)}</option>)}
            <option value="missing">Outcome-only · cohort missing</option>
          </select></label>
          <button className="clear" onClick={() => { setQuery(""); setOutcome("all"); setFactor("all"); setCohort("all"); }}>Reset</button>
        </div>

        <div className="results-line"><span>{filtered.length} of {startups.length} records</span><span>Sorted by known outcome date</span></div>
        <div className="records">
          {filtered.map((startup, index) => {
            const primary = startup.factors.find((item) => item.is_primary) ?? startup.factors[0];
            return (
              <article className="record" key={startup.id}>
                <div className="record-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="record-main">
                  <div className="record-topline"><span className={`outcome outcome-${startup.outcome_type}`}>{outcomeLabels[startup.outcome_type]}</span><span>{startup.outcome_on ? `Outcome · ${prettyDate(startup.outcome_on)}` : `Observed through · ${prettyDate(startup.observed_through ?? null)}`}</span></div>
                  <h3>{startup.name}</h3>
                  <p>{startup.summary}</p>
                  <div className="record-metrics">
                    <div><span>Sector</span><strong>{startup.sector.replaceAll("_", " ")}</strong></div>
                    <div><span>Cohort</span><strong>{cohortLabel(startup)}</strong></div>
                    <div><span>Reported funding</span><strong>{money(startup.funding_usd)}</strong></div>
                    <div><span>Primary cited factor</span><strong>{factorLabels[primary?.category] ?? "Not classified"}</strong></div>
                  </div>
                  <div className="factor-chips">{startup.factors.map((item) => <span key={item.category} className={item.is_primary ? "primary" : ""}>{factorLabels[item.category] ?? item.category}</span>)}</div>
                  <details>
                    <summary><span>Inspect evidence</span><span aria-hidden="true">＋</span></summary>
                    <div className="evidence-list">
                      {startup.factors.map((item) => {
                        const source = factorSource(startup, item);
                        return <div className="evidence" key={item.category}>
                          <div className="evidence-label"><span>{item.is_primary ? "Primary" : "Contributing"}</span><strong>{factorLabels[item.category]}</strong></div>
                          <div><p>{item.evidence}</p>{source && <a href={source.url} target="_blank" rel="noreferrer">{source.publisher} · {source.source_type} ↗</a>}</div>
                          <span className="confidence">{Math.round(item.confidence * 100)}% editorial confidence</span>
                        </div>;
                      })}
                    </div>
                  </details>
                </div>
              </article>
            );
          })}
          {filtered.length === 0 && <div className="empty"><strong>No matching records.</strong><span>Try widening the outcome or factor filters.</span></div>}
        </div>
      </section>

      <section className="methodology" id="methodology">
        <p className="section-number">04 / Methodology</p>
        <div className="method-grid">
          <h2>Evidence first.<br />Certainty earned.</h2>
          <div><h3>Claims, not verdicts</h3><p>Shutdown explanations are contested and incomplete. We preserve who made each claim, where it appeared, and our editorial confidence in the classification.</p></div>
          <div><h3>Unknown stays unknown</h3><p>Partial dates and undisclosed funding remain incomplete. The archive never converts missing information into zeros or fabricated precision.</p></div>
          <div><h3>Selection bias is visible</h3><p>This preview covers outcomes dated 2021 onward and favors companies with accessible postmortems. Cohort metadata is incomplete, so records without an explicit founding or first-funding basis remain outcome-only. It cannot yet describe all startups, and aggregate patterns should not be treated as population estimates.</p></div>
          <div><h3>Outcomes, not people</h3><p>We describe company chapters as shutdowns, wind-downs, and pivots. The goal is learning from systems and decisions—not ranking founders.</p></div>
        </div>
      </section>

      <footer><div><span className="brand-mark">SG</span><strong>Startup Graveyard</strong></div><p>A living, evidence-first record of the post-ZIRP startup reset.</p><p>Outcomes dated 2021+ · Reviewed July 2026</p></footer>
    </main>
  );
}
