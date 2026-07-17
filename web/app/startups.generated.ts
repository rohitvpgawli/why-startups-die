export type Source = {
  id: string;
  url: string;
  title: string;
  publisher: string;
  published_on: string;
  source_type: "company" | "founder" | "journalism" | "regulatory" | "archive";
};

export type Factor = {
  category: string;
  is_primary: boolean;
  confidence: number;
  source_id: string;
  evidence: string;
};

export type CohortBasis = "founded_on" | "first_funded_on";

export type Startup = {
  id: string;
  name: string;
  canonical_domain: string | null;
  founded_on: string | null;
  first_funded_on?: string | null;
  cohort_basis?: CohortBasis | null;
  cohort_year?: number | null;
  observed_through?: string | null;
  outcome_on: string | null;
  outcome_type: "shutdown" | "wind_down" | "acquired" | "acquihire" | "pivoted" | "active" | "active_after_pivot" | "dormant" | "ipo" | "unknown";
  sector: string;
  hq_country: string | null;
  funding_usd: number | null;
  funding_stage: string | null;
  summary: string;
  review_status: "reviewed" | "needs_review";
  reviewed_on: string;
  sources: Source[];
  factors: Factor[];
};

// Generated from data/raw/startups.jsonl. Do not edit by hand.
// Cohort fields are explicit metadata and are intentionally independent of outcome_on.
export const startups = [
  {
    "id": "cydoc",
    "name": "Cydoc",
    "canonical_domain": null,
    "founded_on": "2018-04",
    "outcome_on": "2025-08-22",
    "outcome_type": "shutdown",
    "sector": "health_technology",
    "hq_country": "US",
    "funding_usd": 265000,
    "funding_stage": null,
    "summary": "A bootstrapped health-AI company that built automated clinical intake tools and closed after seven years when low revenue, integration costs, and a difficult sales model made the business unsustainable.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "founder-postmortem",
        "url": "https://glassboxmedicine.com/2026/02/21/why-i-shut-down-my-bootstrapped-health-ai-startup-after-7-years-a-founders-postmortem/",
        "title": "Why I Shut Down My Bootstrapped Health AI Startup After 7 Years: A Founder’s Postmortem",
        "publisher": "Glass Box Medicine",
        "published_on": "2026-02-21",
        "source_type": "founder"
      }
    ],
    "factors": [
      {
        "category": "unit_economics",
        "is_primary": true,
        "confidence": 0.98,
        "source_id": "founder-postmortem",
        "evidence": "The founder calculated roughly $30 of revenue above hosting cost per doctor while each required EHR integration cost thousands of dollars, creating an untenable payback period."
      },
      {
        "category": "product_market_fit",
        "is_primary": false,
        "confidence": 0.95,
        "source_id": "founder-postmortem",
        "evidence": "The founder identified inadequate sales and marketing as her single biggest mistake, leading to too few customers and insufficient revenue."
      },
      {
        "category": "technology",
        "is_primary": false,
        "confidence": 0.9,
        "source_id": "founder-postmortem",
        "evidence": "Not integrating with incumbent EHR systems made adoption too difficult and contributed directly to customer loss."
      },
      {
        "category": "founder_or_team",
        "is_primary": false,
        "confidence": 0.85,
        "source_id": "founder-postmortem",
        "evidence": "The solo founder lacked complementary ownership of sales and marketing and described leadership capacity as insufficiently distributed."
      }
    ]
  },
  {
    "id": "simpledirect-financing",
    "name": "SimpleDirect Financing",
    "canonical_domain": "getsimpledirect.com",
    "founded_on": "2019",
    "outcome_on": "2025-10",
    "outcome_type": "pivoted",
    "sector": "fintech",
    "hq_country": "CA",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "A contractor-financing product that was sunset after its high-touch service costs converged with or exceeded per-customer revenue; the company subsequently pivoted to open-weight AI models.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "company-retrospective",
        "url": "https://www.getsimpledirect.com/blog/re-introducing-simpledirect",
        "title": "Re-introducing SimpleDirect",
        "publisher": "SimpleDirect",
        "published_on": "2026-06-26",
        "source_type": "company"
      }
    ],
    "factors": [
      {
        "category": "unit_economics",
        "is_primary": true,
        "confidence": 0.98,
        "source_id": "company-retrospective",
        "evidence": "The company reported annual revenue of about $1,500 per contractor against service costs of roughly $1,300 to $1,900, calling the mismatch structural."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.95,
        "source_id": "company-retrospective",
        "evidence": "Rather than close the legal entity, the team sunset the financing product and redirected the company toward open-weight AI models."
      },
      {
        "category": "product_market_fit",
        "is_primary": false,
        "confidence": 0.85,
        "source_id": "company-retrospective",
        "evidence": "Customers wanted high-touch, phone-based support while the product was priced and designed for self-service."
      }
    ]
  },
  {
    "id": "torrenegra-organization",
    "name": "Torrenegra Organization",
    "canonical_domain": null,
    "founded_on": "2024-01",
    "outcome_on": "2025-05",
    "outcome_type": "shutdown",
    "sector": "startup_accelerator",
    "hq_country": null,
    "funding_usd": null,
    "funding_stage": null,
    "summary": "A bootstrapped Latin American founder program that reached profitability and $20,000 to $35,000 in monthly sales, but voluntarily ended all programs after the founders concluded the regional market could not support the scale or impact they sought.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "founder-postmortem",
        "url": "https://www.alanarguello.me/blog/torrenegraorg-shutdown",
        "title": "Post-mortem: closing Torrenegra Organization",
        "publisher": "Alan Arguello",
        "published_on": "2025-05-17",
        "source_type": "founder"
      }
    ],
    "factors": [
      {
        "category": "product_market_fit",
        "is_primary": true,
        "confidence": 0.98,
        "source_id": "founder-postmortem",
        "evidence": "The founders did not believe the company could scale tenfold in Latin America and concluded that the market's natural ceiling was below their ambition."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.92,
        "source_id": "founder-postmortem",
        "evidence": "Even with millions of annual organic content impressions, attracting enough additional companies remained difficult across repeated experiments."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.97,
        "source_id": "founder-postmortem",
        "evidence": "The profitable programs were closed because their expected impact and financial return did not justify diverting the founders from larger opportunities."
      }
    ]
  },
  {
    "id": "flynn",
    "name": "Flynn",
    "canonical_domain": "flynn.io",
    "founded_on": null,
    "outcome_on": "2021-02",
    "outcome_type": "shutdown",
    "sector": "developer_infrastructure",
    "hq_country": null,
    "funding_usd": null,
    "funding_stage": "seed",
    "summary": "An open-source, self-hosted platform-as-a-service that operated for years with a skeleton team and service revenue, then shut down after failing to raise a Series A or fund continued product development alongside round-the-clock customer support.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "cofounder-explanation",
        "url": "https://news.ycombinator.com/item?id=26298010",
        "title": "Cofounder explanation on RIP Flynn.io",
        "publisher": "Hacker News",
        "published_on": "2021-02-28",
        "source_type": "founder"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "cofounder-explanation",
        "evidence": "The cofounder said Flynn could not attract long-term project funding or raise additional venture capital after its seed round, including a Series A."
      },
      {
        "category": "unit_economics",
        "is_primary": false,
        "confidence": 0.98,
        "source_id": "cofounder-explanation",
        "evidence": "Operations-as-a-service revenue could not cover both ongoing product and feature development and the 24/7 on-call team required for paying customers."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.94,
        "source_id": "cofounder-explanation",
        "evidence": "The round-the-clock support burden became too much for the skeleton team, particularly during the COVID-19 pandemic."
      }
    ]
  },
  {
    "id": "artifact",
    "name": "Artifact",
    "canonical_domain": "artifact.news",
    "founded_on": "2023",
    "outcome_on": "2024-02",
    "outcome_type": "wind_down",
    "sector": "media",
    "hq_country": "US",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "An AI-assisted news and discovery app from Instagram's co-founders that wound down after one year when its core audience proved too small to justify continued investment.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "company-announcement",
        "url": "https://medium.com/artifact-news/shutting-down-artifact-1e70de46d419",
        "title": "Shutting down Artifact",
        "publisher": "Artifact",
        "published_on": "2024-01-12",
        "source_type": "company"
      }
    ],
    "factors": [
      {
        "category": "product_market_fit",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "company-announcement",
        "evidence": "The company said a core group loved the product but the total market opportunity was not large enough to warrant continued investment."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.96,
        "source_id": "company-announcement",
        "evidence": "The CEO framed time spent on Artifact as an opportunity cost relative to pursuing newer ideas capable of reaching many millions of people."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.9,
        "source_id": "company-announcement",
        "evidence": "Commenting and posting were removed first because those features required moderation and oversight the remaining team could not support."
      }
    ]
  },
  {
    "id": "basis-robotics",
    "name": "Basis Robotics",
    "canonical_domain": "basisrobotics.tech",
    "founded_on": null,
    "outcome_on": "2025-01-08",
    "outcome_type": "shutdown",
    "sector": "robotics_software",
    "hq_country": null,
    "funding_usd": null,
    "funding_stage": null,
    "summary": "A robotics middleware company that closed after releasing technically capable software but attracting no users, validating demand too late, and finding no credible short-term business model.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "founder-postmortem",
        "url": "https://basisrobotics.tech/2025/01/08/postmortem/",
        "title": "Basis is shutting down",
        "publisher": "Kyle Franz / Basis Robotics",
        "published_on": "2025-01-08",
        "source_type": "founder"
      }
    ],
    "factors": [
      {
        "category": "product_market_fit",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "founder-postmortem",
        "evidence": "No one tried the software after release; the founder said the team built the framework first and sought validation afterward."
      },
      {
        "category": "unit_economics",
        "is_primary": false,
        "confidence": 0.98,
        "source_id": "founder-postmortem",
        "evidence": "The team found no evidence customers would pay for middleware, could not design workable pricing, and judged the profit math too weak for bootstrapping."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.94,
        "source_id": "founder-postmortem",
        "evidence": "The initial customer segments were difficult to identify and reluctant to bet specialized robots on an immature framework with a limited module catalog."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.95,
        "source_id": "founder-postmortem",
        "evidence": "The company ended while the framework continued as an Apache-licensed hobby and open-source project."
      }
    ]
  },
  {
    "id": "quesma-database-gateway",
    "name": "Quesma Database Gateway",
    "canonical_domain": "quesma.com",
    "founded_on": null,
    "outcome_on": "2025",
    "outcome_type": "pivoted",
    "sector": "developer_infrastructure",
    "hq_country": null,
    "funding_usd": 2500000,
    "funding_stage": "seed",
    "summary": "A database gateway product that raised $2.5 million and won prominent pilots but was sold in an asset transaction after verbal interest failed to become urgent, paid adoption; the remaining company used the proceeds to pivot.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "founder-postmortem",
        "url": "https://quesma.com/blog/database-gateway-postmortem/",
        "title": "A postmortem on our $2.5 million database gateway: lessons from pilot purgatory",
        "publisher": "Jacek Migdal / Quesma",
        "published_on": "2025-11-04",
        "source_type": "founder"
      }
    ],
    "factors": [
      {
        "category": "product_market_fit",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "founder-postmortem",
        "evidence": "High-profile prospects expressed interest but rarely took concrete action; lost deals showed the migration problem was typically far below customers' funded priorities."
      },
      {
        "category": "founder_or_team",
        "is_primary": false,
        "confidence": 0.97,
        "source_id": "founder-postmortem",
        "evidence": "The co-founders disagreed on fundamental go-to-market and execution choices, avoided resolving the conflict, and separated after a year."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.92,
        "source_id": "founder-postmortem",
        "evidence": "The core MVP took nine months instead of five, while conference-led acquisition and complex enterprise pilots produced slow learning and low conversion."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "founder-postmortem",
        "evidence": "Quesma sold the gateway IP to Hydrolix and used the asset-sale proceeds to fund a pivot without bridge financing."
      }
    ]
  },
  {
    "id": "convoy",
    "name": "Convoy",
    "canonical_domain": "convoy.com",
    "founded_on": null,
    "outcome_on": "2023-10-19",
    "outcome_type": "wind_down",
    "sector": "logistics_marketplace",
    "hq_country": "US",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "A digital freight brokerage that closed its core operations after a freight recession and monetary tightening weakened the business, outside funding, and potential acquirers at the same time.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "ceo-memo",
        "url": "https://d12v9rtnomnebu.cloudfront.net/diveimages/All_Company_Email_-_October_19_2023.pdf",
        "title": "All Company Email - October 19, 2023",
        "publisher": "Dan Lewis / Convoy",
        "published_on": "2023-10-19",
        "source_type": "company"
      },
      {
        "id": "trucking-dive-report",
        "url": "https://www.truckingdive.com/news/digital-brokerage-convoy-shuttering-operations/697246/",
        "title": "Convoy closes, unable to find buyer",
        "publisher": "Trucking Dive",
        "published_on": "2023-10-19",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "external_shock",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "ceo-memo",
        "evidence": "The CEO described a massive freight recession that simultaneously weakened Convoy and the strategic acquirers most likely to buy it."
      },
      {
        "category": "fundraising",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "ceo-memo",
        "evidence": "The memo said 18 months of monetary tightening sharply reduced investment appetite for unprofitable late-stage private companies."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.97,
        "source_id": "ceo-memo",
        "evidence": "More than four months of financing and M&A alternatives failed to produce an option sufficient to keep the core business operating."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.88,
        "source_id": "trucking-dive-report",
        "evidence": "Sweeping cost cuts and revenue efforts did not reach the financial position needed to withstand the market without additional funding."
      }
    ]
  },
  {
    "id": "airlift-technologies",
    "name": "Airlift Technologies",
    "canonical_domain": "airlift.co",
    "founded_on": null,
    "outcome_on": "2022-07-13",
    "outcome_type": "shutdown",
    "sector": "quick_commerce",
    "hq_country": "PK",
    "funding_usd": null,
    "funding_stage": "series_b",
    "summary": "A Pakistani quick-commerce company that permanently ceased operations after a nearly completed financing round failed during a sudden global capital contraction, leaving too little runway to reach company-level profitability.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "founder-confirmed-report",
        "url": "https://techcrunch.com/2022/07/12/airlift-shutdown/",
        "title": "Airlift, Pakistan's top startup, shutting down following funding crunch",
        "publisher": "TechCrunch",
        "published_on": "2022-07-12",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "founder-confirmed-report",
        "evidence": "A planned Series C1 reached document-signing but investors became uncertain about wire timing, leaving the company's capital requirements unmet."
      },
      {
        "category": "market_timing",
        "is_primary": false,
        "confidence": 0.98,
        "source_id": "founder-confirmed-report",
        "evidence": "The founder said the round failed as global economic conditions deteriorated rapidly and technology markets reversed a long bull run."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.86,
        "source_id": "founder-confirmed-report",
        "evidence": "Expansion into South Africa materially increased expenses shortly before the capital market shifted."
      },
      {
        "category": "unit_economics",
        "is_primary": false,
        "confidence": 0.9,
        "source_id": "founder-confirmed-report",
        "evidence": "Airlift had achieved order-level profitability but remained approximately six to nine months from company-level free cash flow."
      }
    ]
  },
  {
    "id": "fast-checkout",
    "name": "Fast",
    "canonical_domain": "fast.co",
    "founded_on": "2019",
    "outcome_on": "2022-04-15",
    "outcome_type": "shutdown",
    "sector": "fintech",
    "hq_country": "US",
    "funding_usd": 124000000,
    "funding_stage": "series_b",
    "summary": "A one-click checkout startup that raised $124 million and expanded rapidly, then abruptly closed after attempts to secure new financing or a sale were unsuccessful.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "payments-dive-report",
        "url": "https://www.paymentsdive.com/news/startup-fast-abruptly-shuts-down/621633/",
        "title": "Startup Fast abruptly shuts down",
        "publisher": "Payments Dive",
        "published_on": "2022-04-06",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.97,
        "source_id": "payments-dive-report",
        "evidence": "Reporting said Fast explored a sale after attempts to raise more capital failed, shortly before announcing that it would close."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.86,
        "source_id": "payments-dive-report",
        "evidence": "Fast grew to nearly 400 employees within three years on investor capital, then stopped operations less than three months after forecasting continued rapid growth."
      }
    ]
  },
  {
    "id": "argo-ai",
    "name": "Argo AI",
    "canonical_domain": "argo.ai",
    "founded_on": "2016",
    "outcome_on": "2022-10-26",
    "outcome_type": "wind_down",
    "sector": "autonomous_vehicles",
    "hq_country": "US",
    "funding_usd": 2600000000,
    "funding_stage": null,
    "summary": "An autonomous-driving company backed by Ford and Volkswagen that wound down after Level 4 commercialization proved to require substantially more capital and time, new investors did not emerge, and its owners redirected spending toward nearer-term driver-assistance systems.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "ford-10q",
        "url": "https://www.sec.gov/Archives/edgar/data/37996/000003799622000073/f-20220930.htm",
        "title": "Ford Motor Company Quarterly Report for the period ended September 30, 2022",
        "publisher": "Ford Motor Company / SEC",
        "published_on": "2022-10-27",
        "source_type": "regulatory"
      },
      {
        "id": "techcrunch-report",
        "url": "https://techcrunch.com/2022/10/26/ford-vw-backed-argo-ai-is-shutting-down/",
        "title": "Ford, VW-backed Argo AI is shutting down",
        "publisher": "TechCrunch",
        "published_on": "2022-10-26",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "market_timing",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "ford-10q",
        "evidence": "Ford said commercially viable Level 4 autonomy still required significant additional capital and time while nearer-term Level 2 and Level 3 systems offered more immediate potential."
      },
      {
        "category": "fundraising",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "ford-10q",
        "evidence": "Argo was unable to attract new investors given the additional capital, commercialization timeline, and macroeconomic conditions."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "ford-10q",
        "evidence": "Ford redirected capital from Argo's Level 4 program to advanced Level 2 and Level 3 systems and, with Volkswagen, began exiting the joint development effort."
      },
      {
        "category": "technology",
        "is_primary": false,
        "confidence": 0.97,
        "source_id": "ford-10q",
        "evidence": "Ford concluded that integrating Argo's technology components into anticipated technology ecosystems would be prohibitively expensive."
      }
    ]
  },
  {
    "id": "kittyhawk",
    "name": "Kittyhawk",
    "canonical_domain": "kittyhawk.aero",
    "founded_on": null,
    "outcome_on": "2022-09-21",
    "outcome_type": "wind_down",
    "sector": "electric_aviation",
    "hq_country": "US",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "A Larry Page-backed electric aviation company that announced an orderly wind-down after years of aircraft development; the company disclosed no definitive cause, so this record preserves the outcome without assigning a primary failure factor.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "techcrunch-report",
        "url": "https://techcrunch.com/2022/09/21/kitty-hawk-the-electric-aircraft-moonshot-backed-by-larry-page-is-shutting-down/",
        "title": "Kittyhawk, the electric aircraft moonshot backed by Larry Page, is shutting down",
        "publisher": "TechCrunch",
        "published_on": "2022-09-21",
        "source_type": "journalism"
      }
    ],
    "factors": []
  },
  {
    "id": "olive-ai",
    "name": "Olive AI",
    "canonical_domain": "oliveai.com",
    "founded_on": "2013",
    "outcome_on": "2023-10-31",
    "outcome_type": "wind_down",
    "sector": "health_technology",
    "hq_country": "US",
    "funding_usd": 848000000,
    "funding_stage": null,
    "summary": "A healthcare-automation company once valued at $4 billion that sold its remaining business units to Waystar and Humata Health and wound down after repeated layoffs, divestitures, and difficulty converting scale into durable traction.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "information-briefing",
        "url": "https://www.theinformation.com/briefings/healthcare-startup-olive-ai-sells-off-business-units-winds-down",
        "title": "Healthcare Startup Olive AI Sells Off Business Units, Winds Down",
        "publisher": "The Information",
        "published_on": "2023-10-31",
        "source_type": "journalism"
      },
      {
        "id": "beckers-report",
        "url": "https://www.beckershospitalreview.com/capital/healthcare-rcm-unicorn-to-shut-down/",
        "title": "Olive AI to shut down",
        "publisher": "Becker's Hospital Review",
        "published_on": "2023-10-31",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "product_market_fit",
        "is_primary": true,
        "confidence": 0.88,
        "source_id": "information-briefing",
        "evidence": "Reporting said Olive struggled to gain traction despite raising nearly $900 million and growing to approximately 1,400 employees at its peak."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "beckers-report",
        "evidence": "The company sold its final clearinghouse, patient-access, and prior-authorization units to two buyers before ceasing standalone operations."
      }
    ]
  },
  {
    "id": "veev-homebuilding",
    "name": "Veev",
    "canonical_domain": "veev.com",
    "founded_on": "2008",
    "outcome_on": "2023-12-21",
    "outcome_type": "acquired",
    "sector": "construction_technology",
    "hq_country": "US",
    "funding_usd": 600000000,
    "funding_stage": null,
    "summary": "A technology-enabled prefab homebuilder that moved toward closure when a planned capital raise was canceled, then had its assets acquired by existing investor Lennar and continued as Veev by Lennar.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "techcrunch-report",
        "url": "https://techcrunch.com/2023/11/27/prefab-home-builder-veev-reportedly-shutting-down-after-reaching-unicorn-status-last-year/",
        "title": "Prefab home builder Veev reportedly shutting down after reaching unicorn status last year",
        "publisher": "TechCrunch",
        "published_on": "2023-11-27",
        "source_type": "journalism"
      },
      {
        "id": "business-times-report",
        "url": "https://www.bizjournals.com/sanfrancisco/inno/stories/news/2023/12/28/veev-lennar-acquisition.html",
        "title": "Hayward-based proptech Veev acquired by homebuilding giant Lennar Corp.",
        "publisher": "San Francisco Business Times",
        "published_on": "2023-12-28",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.96,
        "source_id": "techcrunch-report",
        "evidence": "Veev moved toward closure after an effort to raise additional capital was abruptly canceled."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "business-times-report",
        "evidence": "Lennar, an existing investor, acquired Veev and took control of the business on December 21, 2023."
      }
    ]
  },
  {
    "id": "zume",
    "name": "Zume",
    "canonical_domain": "zume.com",
    "founded_on": null,
    "outcome_on": "2023-06-12",
    "outcome_type": "shutdown",
    "sector": "food_technology",
    "hq_country": "US",
    "funding_usd": 445000000,
    "funding_stage": null,
    "summary": "A robotic pizza-making and delivery startup that raised $445 million, laid off more than half its workforce, pivoted into sustainable packaging, and ultimately shut down and entered asset liquidation.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "axios-report",
        "url": "https://www.axios.com/2023/06/12/softbank-pizza-robot-shuts-down-zume-445-million",
        "title": "SoftBank-backed pizza startup shuts down after raising $445 million",
        "publisher": "Axios",
        "published_on": "2023-06-12",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.93,
        "source_id": "axios-report",
        "evidence": "Before liquidation, Zume abandoned robotic pizza delivery, laid off more than half its staff, and attempted a substantial pivot to sustainable packaging."
      }
    ]
  },
  {
    "id": "irl",
    "name": "IRL",
    "canonical_domain": "irl.com",
    "founded_on": null,
    "outcome_on": "2023-06-26",
    "outcome_type": "shutdown",
    "sector": "social_media",
    "hq_country": "US",
    "funding_usd": 200000000,
    "funding_stage": "series_c",
    "summary": "A social event-organizing app that shut down after its board found that 95% of its reported 20 million users were automated or bots, undermining the operating metrics behind the venture-backed business.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "techcrunch-report",
        "url": "https://techcrunch.com/2023/06/26/irl-shut-down-fake-users/",
        "title": "Unicorn social app IRL to shut down after admitting 95% of its users were fake",
        "publisher": "TechCrunch",
        "published_on": "2023-06-26",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "operations",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "techcrunch-report",
        "evidence": "A board investigation found that 95% of IRL's reported 20 million users were automated or bots; the company then shut down and planned to return remaining capital."
      },
      {
        "category": "founder_or_team",
        "is_primary": false,
        "confidence": 0.9,
        "source_id": "techcrunch-report",
        "evidence": "The board suspended the founder and CEO while questions about reported active-user figures and a securities-law investigation were ongoing."
      }
    ]
  },
  {
    "id": "builder-ai",
    "name": "Builder.ai",
    "canonical_domain": "builder.ai",
    "founded_on": null,
    "outcome_on": "2025-06-02",
    "outcome_type": "wind_down",
    "sector": "software_development",
    "hq_country": "GB",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "An AI-assisted app-development company that entered insolvency proceedings and Chapter 7 liquidation after historic decisions strained its finances and a lender seized most of its available cash.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "company-insolvency-post",
        "url": "https://www.linkedin.com/posts/builderai_today-engineerai-corporation-known-as-activity-7330581919031521280-w7hu",
        "title": "Builder.ai insolvency announcement",
        "publisher": "Builder.ai",
        "published_on": "2025-05-20",
        "source_type": "company"
      },
      {
        "id": "bloomberg-law-report",
        "url": "https://news.bloomberglaw.com/artificial-intelligence/microsoft-backed-builder-ai-to-enter-insolvency-proceedings",
        "title": "Microsoft-Backed Builder.ai Set for Bankruptcy After Cash Seized",
        "publisher": "Bloomberg Law",
        "published_on": "2025-05-20",
        "source_type": "journalism"
      },
      {
        "id": "bankruptcy-docket",
        "url": "https://www.bkalerts.com/recent-bankruptcy-cases/delaware-bankruptcy-court/1%3A25-bk-10984/bankruptcy-case-engineerai-corp",
        "title": "Engineer.ai Corp. Chapter 7 case 25-10984",
        "publisher": "U.S. Bankruptcy Court docket via BKAlerts",
        "published_on": "2025-06-02",
        "source_type": "regulatory"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "bloomberg-law-report",
        "evidence": "A lender seized $37 million from company accounts tied to a $50 million debt facility, leaving Builder.ai with approximately $5 million before insolvency."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.9,
        "source_id": "company-insolvency-post",
        "evidence": "The company said historic challenges and past decisions had placed significant strain on its financial position and that attempts to recover had failed."
      }
    ]
  },
  {
    "id": "meta-blocks",
    "name": "Meta Blocks",
    "canonical_domain": "metablocks.world",
    "founded_on": "2021-10",
    "outcome_on": "2025-12",
    "outcome_type": "shutdown",
    "sector": "web3_infrastructure",
    "hq_country": null,
    "funding_usd": null,
    "funding_stage": null,
    "summary": "A venture-backed Solana protocol company that generated revenue but shut down after four years when its founders concluded the idea was not working, its revenue remained tied to the crypto cycle, and continued investment was unjustified; roughly 70% of investor capital was returned.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "founder-postmortem",
        "url": "https://shivekkhurana.com/blog/reflections-after-shutting-down-first-vc-backed-startup/",
        "title": "Reflections from shutting down my VC backed startup after 4 years",
        "publisher": "Shivek Khurana",
        "published_on": "2025-12-06",
        "source_type": "founder"
      }
    ],
    "factors": [
      {
        "category": "product_market_fit",
        "is_primary": true,
        "confidence": 0.97,
        "source_id": "founder-postmortem",
        "evidence": "The founder concluded after four years that the idea was not working and that optimism or effort could not change the market's response."
      },
      {
        "category": "external_shock",
        "is_primary": false,
        "confidence": 0.96,
        "source_id": "founder-postmortem",
        "evidence": "Revenue moved with Bitcoin's price more than with the product roadmap, leaving the business exposed to the crypto market cycle."
      },
      {
        "category": "market_timing",
        "is_primary": false,
        "confidence": 0.94,
        "source_id": "founder-postmortem",
        "evidence": "The founder said the company entered during Solana's 2021 wave and later learned that a small startup could ride but not create such market cycles."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.84,
        "source_id": "founder-postmortem",
        "evidence": "Attackers took over the company's 8,000-member Discord community, filled it with phishing links, and forced the team to abandon and rebuild the server."
      }
    ]
  },
  {
    "id": "frobocode",
    "name": "Frobocode",
    "canonical_domain": null,
    "founded_on": "2022",
    "outcome_on": "2023-02",
    "outcome_type": "shutdown",
    "sector": "online_education",
    "hq_country": null,
    "funding_usd": null,
    "funding_stage": null,
    "summary": "A bootstrapped, interactive programming-education product that shut down after its pre-launch failed to gain traction and the founders concluded that their publishing-like product, B2C economics, and technical-heavy skill mix did not support a scalable business.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "founder-postmortem",
        "url": "https://www.fabiandietrich.com/blog/lessons-learned-second-failed-startup.html",
        "title": "Lessons learned from my second failed startup",
        "publisher": "Fabian Dietrich",
        "published_on": "2023-02-01",
        "source_type": "founder"
      }
    ],
    "factors": [
      {
        "category": "product_market_fit",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "founder-postmortem",
        "evidence": "The founders pre-launched the service, did not gain traction, and chose to shut it down."
      },
      {
        "category": "unit_economics",
        "is_primary": false,
        "confidence": 0.96,
        "source_id": "founder-postmortem",
        "evidence": "High-quality course content required substantial upfront work without customer feedback, and the founder concluded the product resembled a difficult-to-scale publishing business."
      },
      {
        "category": "founder_or_team",
        "is_primary": false,
        "confidence": 0.96,
        "source_id": "founder-postmortem",
        "evidence": "Both co-founders were technical builders with little enthusiasm for marketing or user research, leaving the team without complementary commercial ownership."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.92,
        "source_id": "founder-postmortem",
        "evidence": "The team kept coding without a clear direction because customer discovery and business-model validation lagged product development."
      }
    ]
  },
  {
    "id": "ghost-autonomy",
    "name": "Ghost Autonomy",
    "canonical_domain": "ghostautonomy.com",
    "founded_on": "2017",
    "outcome_on": "2024-04-03",
    "outcome_type": "shutdown",
    "sector": "autonomous_vehicles",
    "hq_country": "US",
    "funding_usd": 220000000,
    "funding_stage": null,
    "summary": "An autonomous-driving software company that ended worldwide operations after concluding that the years still required to commercialize its technology could not be financed and that the path to long-term profitability remained uncertain.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "techcrunch-report",
        "url": "https://techcrunch.com/2024/04/03/openai-backed-ghost-autonomy-shuts-down/",
        "title": "OpenAI-backed Ghost Autonomy shuts down",
        "publisher": "TechCrunch",
        "published_on": "2024-04-03",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "techcrunch-report",
        "evidence": "The CEO said the remaining years required to bring the product to market could not be financed."
      },
      {
        "category": "unit_economics",
        "is_primary": false,
        "confidence": 0.98,
        "source_id": "techcrunch-report",
        "evidence": "The company described long-term profitability as uncertain given the investment still required for autonomy development and commercialization."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.93,
        "source_id": "techcrunch-report",
        "evidence": "Ghost repeatedly changed its commercialization path, moving from a consumer highway kit to collision avoidance and later urban last-mile delivery."
      },
      {
        "category": "technology",
        "is_primary": false,
        "confidence": 0.88,
        "source_id": "techcrunch-report",
        "evidence": "The product remained years from market despite completed highway-driving work and progress into urban environments."
      }
    ]
  },
  {
    "id": "bench-accounting",
    "name": "Bench",
    "canonical_domain": "bench.co",
    "founded_on": "2012",
    "outcome_on": "2024-12-30",
    "outcome_type": "acquired",
    "sector": "accounting_software",
    "hq_country": "CA",
    "funding_usd": 113000000,
    "funding_stage": "series_c",
    "summary": "An online bookkeeping company that abruptly paused service and became insolvent on December 27, 2024, then was acquired within days and relaunched under new ownership; the evidence confirms the rescue outcome but does not establish a definitive primary cause.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "shutdown-report",
        "url": "https://techcrunch.com/2024/12/27/bench-shuts-down-leaving-thousands-of-businesses-without-access-to-accounting-and-tax-docs/",
        "title": "Bench shuts down, leaving thousands of businesses without access to accounting and tax docs",
        "publisher": "TechCrunch",
        "published_on": "2024-12-27",
        "source_type": "journalism"
      },
      {
        "id": "acquisition-report",
        "url": "https://techcrunch.com/2024/12/30/bench-to-be-acquired-after-abruptly-shutting-down/",
        "title": "Bench to be acquired after abruptly shutting down",
        "publisher": "TechCrunch",
        "published_on": "2024-12-30",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "acquisition-report",
        "evidence": "Employer.com acquired Bench in a last-minute transaction, revived the platform, and began recalling employees so customers could continue service or retrieve their data."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.94,
        "source_id": "shutdown-report",
        "evidence": "The platform became inaccessible without advance notice while customer bookkeeping and tax records were still stored in the service, creating immediate operational disruption."
      }
    ]
  },
  {
    "id": "koo",
    "name": "Koo",
    "canonical_domain": "kooapp.com",
    "founded_on": null,
    "outcome_on": "2024-07",
    "outcome_type": "shutdown",
    "sector": "social_media",
    "hq_country": "IN",
    "funding_usd": 60000000,
    "funding_stage": null,
    "summary": "An Indian multilingual social network that ceased operations after a prolonged funding winter, weak user and revenue growth, and unsuccessful last-resort acquisition discussions with Dailyhunt and other potential partners.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "techcrunch-report",
        "url": "https://techcrunch.com/2024/07/02/indian-social-network-koo-to-shut-down/",
        "title": "Indian social network Koo is shutting down as buyout talks collapse",
        "publisher": "TechCrunch",
        "published_on": "2024-07-02",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "techcrunch-report",
        "evidence": "The founders said the prolonged funding winter ultimately overwhelmed the company after it had raised more than $60 million."
      },
      {
        "category": "product_market_fit",
        "is_primary": false,
        "confidence": 0.95,
        "source_id": "techcrunch-report",
        "evidence": "Koo struggled for two years to expand its user base and generate revenue despite launching in India and Brazil."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "techcrunch-report",
        "evidence": "Last-resort sale discussions with Dailyhunt failed, as did partnership talks with other internet companies, conglomerates, and media groups."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.9,
        "source_id": "techcrunch-report",
        "evidence": "Potential partners were reluctant to assume the operational burden and unpredictability of user-generated social content."
      }
    ]
  },
  {
    "id": "tally-fintech",
    "name": "Tally",
    "canonical_domain": "meettally.com",
    "founded_on": "2015",
    "outcome_on": "2024-08-12",
    "outcome_type": "shutdown",
    "sector": "consumer_finance",
    "hq_country": "US",
    "funding_usd": 172000000,
    "funding_stage": "series_d",
    "summary": "A consumer credit-card debt management company that shut down after it could not secure additional funding, several months after sunsetting its consumer app and attempting to pivot toward a business-to-business distribution model.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "techcrunch-report",
        "url": "https://techcrunch.com/2024/08/12/a16z-backed-fintech-tally-which-raised-172m-in-funding-is-shutting-down-after-running-out-of-cash/",
        "title": "a16z-backed fintech Tally, which raised $172M in funding, is shutting down after running out of cash",
        "publisher": "TechCrunch",
        "published_on": "2024-08-12",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "techcrunch-report",
        "evidence": "The founder said Tally explored its options but could not secure the funding required to continue operations."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.96,
        "source_id": "techcrunch-report",
        "evidence": "Four months before closing, Tally sunset its consumer app and announced a B2B model with an unnamed launch partner that was never subsequently announced."
      }
    ]
  },
  {
    "id": "post-news",
    "name": "Post News",
    "canonical_domain": "post.news",
    "founded_on": "2022",
    "outcome_on": "2024-04-19",
    "outcome_type": "wind_down",
    "sector": "social_media",
    "hq_country": "US",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "A microblogging and news-micropayment platform launched after Twitter's ownership change that wound down when consumer adoption did not grow fast enough to support a durable business or significant social platform.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "techcrunch-report",
        "url": "https://techcrunch.com/2024/04/19/post-news-the-a16z-funded-twitter-alternative-is-shutting-down/",
        "title": "Post News, the a16z-funded Twitter alternative, is shutting down",
        "publisher": "TechCrunch",
        "published_on": "2024-04-19",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "product_market_fit",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "techcrunch-report",
        "evidence": "The founder said the service was not growing fast enough to become a real business or significant platform and had not found the right product combination for rapid consumer adoption."
      },
      {
        "category": "market_timing",
        "is_primary": false,
        "confidence": 0.83,
        "source_id": "techcrunch-report",
        "evidence": "Post entered a crowded wave of Twitter alternatives and attempted to combine social discussion with a still-emerging market for publisher micropayments."
      }
    ]
  },
  {
    "id": "pebble-t2",
    "name": "Pebble (T2)",
    "canonical_domain": "pebble.is",
    "founded_on": null,
    "outcome_on": "2023-11-01",
    "outcome_type": "shutdown",
    "sector": "social_media",
    "hq_country": "US",
    "funding_usd": 1100000,
    "funding_stage": "angel",
    "summary": "A Twitter alternative that shut down after peaking at 3,000 daily users, facing faster-than-expected competition and Twitter's durable network effects, while product choices including a web-only launch and rebrand weakened discovery and positioning.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "founder-interview",
        "url": "https://techcrunch.com/2023/10/24/pebble-the-twitter-alternative-previously-known-as-t2-is-closing-down/",
        "title": "Pebble, the Twitter alternative previously known as T2, is shutting down",
        "publisher": "TechCrunch",
        "published_on": "2023-10-24",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "product_market_fit",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "founder-interview",
        "evidence": "The service peaked at 3,000 daily active users from 20,000 registrations and fell to roughly 1,000 daily users after rebranding, leaving insufficient scale."
      },
      {
        "category": "competition",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "founder-interview",
        "evidence": "The founders said the competitive landscape of established and new Twitter alternatives evolved faster than expected and that Twitter's network effect was more durable than anticipated."
      },
      {
        "category": "technology",
        "is_primary": false,
        "confidence": 0.95,
        "source_id": "founder-interview",
        "evidence": "The web-first product lacked a native mobile app and therefore missed discovery opportunities through mobile app stores."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.92,
        "source_id": "founder-interview",
        "evidence": "The founders believed the change from T2 to Pebble softened an already difficult value proposition."
      }
    ]
  },
  {
    "id": "the-messenger",
    "name": "The Messenger",
    "canonical_domain": "themessenger.com",
    "founded_on": "2023",
    "outcome_on": "2024-01-31",
    "outcome_type": "shutdown",
    "sector": "digital_media",
    "hq_country": "US",
    "funding_usd": 50000000,
    "funding_stage": null,
    "summary": "A general-interest digital news startup that spent its $50 million launch financing in under a year and shut down after a final capital raise and sale effort failed, while revenue remained far below projections and a delayed launch increased burn.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "shutdown-report",
        "url": "https://www.axios.com/2024/01/31/messenger-shut-down-closes-jimmy-finkelstein-fundraising",
        "title": "The Messenger is shutting down",
        "publisher": "Axios",
        "published_on": "2024-01-31",
        "source_type": "journalism"
      },
      {
        "id": "ceo-interview",
        "url": "https://www.axios.com/2024/02/13/messenger-jimmy-finkelstein-revenue-collapse",
        "title": "Exclusive interview: Finkelstein tells how Messenger spent its way to oblivion",
        "publisher": "Axios",
        "published_on": "2024-02-13",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "shutdown-report",
        "evidence": "The company came close to raising enough money for several additional months but failed to close the financing; a last-minute sale process also collapsed."
      },
      {
        "category": "unit_economics",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "shutdown-report",
        "evidence": "The company lost tens of millions of dollars while generating roughly $3 million of revenue in 2023 against an original $100 million 2024 projection."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.97,
        "source_id": "ceo-interview",
        "evidence": "A six-month launch delay burned approximately $20 million before the site could ramp, while salaries accounted for 82% of expenditures."
      },
      {
        "category": "product_market_fit",
        "is_primary": false,
        "confidence": 0.91,
        "source_id": "shutdown-report",
        "evidence": "The advertising-led model depended on a large general-interest audience even as social distribution weakened and advertisers increasingly favored smaller, loyal audiences with first-party data."
      },
      {
        "category": "market_timing",
        "is_primary": false,
        "confidence": 0.96,
        "source_id": "shutdown-report",
        "evidence": "The founder cited severe media-industry economic headwinds and a broader advertising slowdown during the company's launch year."
      }
    ]
  },
  {
    "id": "lilium",
    "name": "Lilium",
    "canonical_domain": "lilium.com",
    "founded_on": "2015",
    "outcome_on": "2024-12-30",
    "outcome_type": "wind_down",
    "sector": "electric_aviation",
    "hq_country": "DE",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "An electric vertical-takeoff aircraft developer that entered regular insolvency and terminated its parent-company employment contracts after emergency financing failed; an attempted operating-asset rescue also collapsed, and the patent portfolio was later sold through insolvency proceedings.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "techcrunch-report",
        "url": "https://techcrunch.com/2024/12/23/electric-aircraft-startup-lilium-ceases-operations-1000-workers-laid-off/",
        "title": "Electric aircraft startup Lilium ceases operations, 1,000 workers laid off",
        "publisher": "TechCrunch",
        "published_on": "2024-12-23",
        "source_type": "journalism"
      },
      {
        "id": "sec-insolvency-filing",
        "url": "https://www.sec.gov/Archives/edgar/data/1855756/000110465925001866/tm252234d1_6k.htm",
        "title": "Lilium N.V. Form 6-K for January 2025",
        "publisher": "Lilium N.V. / SEC",
        "published_on": "2025-01-08",
        "source_type": "regulatory"
      },
      {
        "id": "administrator-release",
        "url": "https://www.pluta.net/en/press/press-release/pluta-attorney-willrodt-sells-lilium-patent-portfolio-to-u-s-listed-company-archer-aviation.pdf",
        "title": "PLUTA Attorney Willrodt Sells Lilium Patent Portfolio to U.S. Listed Company Archer Aviation",
        "publisher": "PLUTA Rechtsanwalts GmbH",
        "published_on": "2025-10-15",
        "source_type": "regulatory"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "techcrunch-report",
        "evidence": "Lilium ceased operations after attempts to secure financing and exit insolvency failed, following an unsuccessful effort to obtain emergency government-backed funding."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "sec-insolvency-filing",
        "evidence": "Regular insolvency proceedings opened on December 30, 2024, all parent-company employment contracts were terminated, and no shareholder distribution was expected."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "administrator-release",
        "evidence": "After the attempted operating-asset rescue failed, the insolvency administrator sold more than 300 patents to Archer Aviation and continued marketing the remaining assets."
      },
      {
        "category": "technology",
        "is_primary": false,
        "confidence": 0.9,
        "source_id": "techcrunch-report",
        "evidence": "The capital-intensive aircraft program still required financing to complete development and commercialization after a decade of work."
      }
    ]
  },
  {
    "id": "bowery-farming",
    "name": "Bowery Farming",
    "canonical_domain": "bowery.co",
    "founded_on": "2015",
    "outcome_on": "2024-11",
    "outcome_type": "shutdown",
    "sector": "vertical_farming",
    "hq_country": "US",
    "funding_usd": 700000000,
    "funding_stage": "series_c",
    "summary": "A vertical-farming company that ceased operations after raising more than $700 million, as premium-priced produce struggled to support the economics of capital-intensive indoor farms, the company carried substantial debt, and attempts to secure more funding or a buyer failed.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "techcrunch-report",
        "url": "https://techcrunch.com/2024/11/04/bowery-farming-is-ceasing-operations/",
        "title": "Bowery Farming is ceasing operations",
        "publisher": "TechCrunch",
        "published_on": "2024-11-04",
        "source_type": "journalism"
      },
      {
        "id": "axios-report",
        "url": "https://www.axios.com/2024/11/05/bowery-vertical-farming-close",
        "title": "Vertical farming unicorn Bowery to shut down",
        "publisher": "Axios",
        "published_on": "2024-11-05",
        "source_type": "journalism"
      },
      {
        "id": "industry-report",
        "url": "https://www.agnavigator.com/Article/2024/11/05/What-does-Bowery-s-closure-tell-us-about-the-future-of-vertical-farming/",
        "title": "What does Bowery's closure tell us about the future of vertical farming?",
        "publisher": "AgTech Navigator",
        "published_on": "2024-11-05",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "unit_economics",
        "is_primary": true,
        "confidence": 0.95,
        "source_id": "axios-report",
        "evidence": "Axios reported that consumers were unwilling to pay the high premiums needed for cleaner indoor-grown produce, undermining the category's economics."
      },
      {
        "category": "fundraising",
        "is_primary": false,
        "confidence": 0.93,
        "source_id": "industry-report",
        "evidence": "Bowery failed to secure additional financing or find a buyer before deciding to cease operations."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.92,
        "source_id": "axios-report",
        "evidence": "The company had taken on $150 million of debt in early 2022, adding a substantial fixed financial burden to its capital-intensive farm network."
      }
    ]
  },
  {
    "id": "catch-insurtech",
    "name": "Catch",
    "canonical_domain": "catch.co",
    "founded_on": null,
    "outcome_on": "2023-04-06",
    "outcome_type": "shutdown",
    "sector": "insurtech",
    "hq_country": "US",
    "funding_usd": 18100000,
    "funding_stage": "series_a",
    "summary": "A benefits platform for independent workers that closed all customer accounts after its founders concluded it could not continue operating in the prevailing market; the reporting confirms the market constraint but does not establish a more specific company-attributed cause.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "founder-announcement-report",
        "url": "https://techcrunch.com/2023/03/06/catch-insurtech-shutting-down/",
        "title": "Catch co-founder says health benefits startup is shutting down",
        "publisher": "TechCrunch",
        "published_on": "2023-03-06",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "market_timing",
        "is_primary": true,
        "confidence": 0.94,
        "source_id": "founder-announcement-report",
        "evidence": "The founders told customers that Catch could not continue operating in the current market and would close all accounts on April 6."
      },
      {
        "category": "fundraising",
        "is_primary": false,
        "confidence": 0.72,
        "source_id": "founder-announcement-report",
        "evidence": "TechCrunch placed the closure in a sharply tighter insurtech funding environment after the company had previously expected to pursue a Series B, but the founders did not explicitly name fundraising as the cause."
      }
    ]
  },
  {
    "id": "zestmoney",
    "name": "ZestMoney",
    "canonical_domain": "zestmoney.in",
    "founded_on": "2015",
    "outcome_on": "2023-12-31",
    "outcome_type": "wind_down",
    "sector": "buy_now_pay_later",
    "hq_country": "IN",
    "funding_usd": 130000000,
    "funding_stage": null,
    "summary": "An Indian buy-now-pay-later company that wound down after a proposed PhonePe acquisition collapsed, its founders departed, and new leadership could not secure a buyer or a durable path despite bridge support from existing investors.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "techcrunch-report",
        "url": "https://techcrunch.com/2023/12/05/goldman-sachs-backed-zestmoney-once-valued-at-450m-to-shut-down/",
        "title": "Goldman Sachs-backed ZestMoney, once valued at $450M, to shut down",
        "publisher": "TechCrunch",
        "published_on": "2023-12-05",
        "source_type": "journalism"
      },
      {
        "id": "moneycontrol-report",
        "url": "https://www.moneycontrol.com/news/technology/bnpl-startup-zestmoney-to-shut-down-to-let-go-of-remaining-150-employees-11859781.html",
        "title": "BNPL startup ZestMoney to shut down, to let go of remaining 150 employees",
        "publisher": "Moneycontrol",
        "published_on": "2023-12-05",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "strategic_change",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "techcrunch-report",
        "evidence": "The proposed PhonePe acquisition did not materialize, the founding team left, and successor leadership's broader buyer search also failed."
      },
      {
        "category": "fundraising",
        "is_primary": false,
        "confidence": 0.96,
        "source_id": "techcrunch-report",
        "evidence": "New leadership raised only a few million dollars from existing investors while unsuccessfully searching for a sustainable path or transaction."
      },
      {
        "category": "unit_economics",
        "is_primary": false,
        "confidence": 0.9,
        "source_id": "moneycontrol-report",
        "evidence": "Reporting documented steeply rising losses and described the company as near bankruptcy before PhonePe provided an $18 million loan lifeline."
      }
    ]
  },
  {
    "id": "poparazzi",
    "name": "Poparazzi",
    "canonical_domain": "poparazzi.com",
    "founded_on": "2021",
    "outcome_on": "2023-06-30",
    "outcome_type": "shutdown",
    "sector": "social_media",
    "hq_country": "US",
    "funding_usd": 17000000,
    "funding_stage": "series_a",
    "summary": "A photo-sharing app that surged to the top of the App Store but shut down two years later after estimated monthly active users fell from roughly four million at peak to only 2,000–3,000; the company returned capital while its team moved to other projects.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "techcrunch-report",
        "url": "https://techcrunch.com/2023/05/01/once-hot-photo-sharing-social-app-poparazzi-is-shutting-down/",
        "title": "Once-hot photo-sharing app Poparazzi is shutting down",
        "publisher": "TechCrunch",
        "published_on": "2023-05-01",
        "source_type": "journalism"
      },
      {
        "id": "shutdown-notice-archive",
        "url": "https://appshunter.io/ios/app/poparazzi/id1513680970",
        "title": "Poparazzi App Store history and shutdown notice",
        "publisher": "AppsHunter",
        "published_on": "2023-04-28",
        "source_type": "archive"
      }
    ],
    "factors": [
      {
        "category": "product_market_fit",
        "is_primary": true,
        "confidence": 0.98,
        "source_id": "techcrunch-report",
        "evidence": "Third-party app intelligence estimated monthly active users had fallen from a peak of four million to roughly 2,000–3,000 by the shutdown announcement."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.9,
        "source_id": "techcrunch-report",
        "evidence": "Before closing Poparazzi, the team experimented with a broader friend-authored profile app that was later removed from the App Store, indicating an unsuccessful search for a new product direction."
      }
    ]
  },
  {
    "id": "hyperloop-one",
    "name": "Hyperloop One",
    "canonical_domain": "hyperloop-one.com",
    "founded_on": "2014",
    "outcome_on": "2023-12-31",
    "outcome_type": "wind_down",
    "sector": "transportation_infrastructure",
    "hq_country": "US",
    "funding_usd": 450000000,
    "funding_stage": null,
    "summary": "A high-speed vacuum-tube transportation company that wound down after raising more than $450 million without winning a contract to build a commercial system, progressing beyond demonstrations and test tracks, or finding a durable market through its later pivot from passengers to cargo.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "techcrunch-report",
        "url": "https://techcrunch.com/2023/12/21/hyperloop-one-shutting-down/",
        "title": "Hyperloop One is reportedly shutting down",
        "publisher": "TechCrunch",
        "published_on": "2023-12-21",
        "source_type": "journalism"
      },
      {
        "id": "bloomberg-report",
        "url": "https://news.bloomberglaw.com/capital-markets/hyperloop-one-to-shut-down-after-failing-to-reinvent-transit",
        "title": "Hyperloop One to Shut Down After Failing to Reinvent Transit",
        "publisher": "Bloomberg News",
        "published_on": "2023-12-21",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "technology",
        "is_primary": true,
        "confidence": 0.96,
        "source_id": "techcrunch-report",
        "evidence": "After years of work and hundreds of millions in spending, the system had not progressed beyond demonstrations and test tracks into a commercial build."
      },
      {
        "category": "product_market_fit",
        "is_primary": false,
        "confidence": 0.93,
        "source_id": "bloomberg-report",
        "evidence": "The company did not secure a contract to construct an operating hyperloop system before winding down."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "techcrunch-report",
        "evidence": "Hyperloop One abandoned passenger service for a cargo focus in 2022, cut half its staff, and ultimately transferred its intellectual property to majority owner DP World while selling hard assets."
      },
      {
        "category": "external_shock",
        "is_primary": false,
        "confidence": 0.86,
        "source_id": "techcrunch-report",
        "evidence": "A planned Saudi project was withdrawn after Richard Branson criticized the country following Jamal Khashoggi's killing, removing a major prospective deployment."
      }
    ]
  },
  {
    "id": "smashing-reading",
    "name": "Smashing",
    "canonical_domain": "smashing.app",
    "founded_on": "2024-06",
    "outcome_on": "2025-04-16",
    "outcome_type": "shutdown",
    "sector": "content_discovery",
    "hq_country": "US",
    "funding_usd": 3400000,
    "funding_stage": null,
    "summary": "An AI-assisted reading and content-curation app that shut down less than a year after launch because the seven-person team could not grow it quickly enough to become a sustainable product.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "company-email-report",
        "url": "https://techcrunch.com/2025/04/16/smashing-the-reading-curation-app-by-goodreads-founder-shuts-down/",
        "title": "Smashing, the reading curation app by Goodreads' founder, shuts down",
        "publisher": "TechCrunch",
        "published_on": "2025-04-16",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "product_market_fit",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "company-email-report",
        "evidence": "The company told customers it did not grow fast enough and could not scale the app into a sustainable product."
      },
      {
        "category": "competition",
        "is_primary": false,
        "confidence": 0.82,
        "source_id": "company-email-report",
        "evidence": "The app competed in a crowded field of AI news readers and feed aggregators, although the company did not explicitly identify competition as the cause."
      }
    ]
  },
  {
    "id": "phantom-auto",
    "name": "Phantom Auto",
    "canonical_domain": "phantomauto.com",
    "founded_on": "2017",
    "outcome_on": "2024-03-12",
    "outcome_type": "shutdown",
    "sector": "remote_vehicle_operations",
    "hq_country": "US",
    "funding_usd": 95000000,
    "funding_stage": null,
    "summary": "A remote-driving platform that ceased operations after a new financing round fell through, leaving a business with customer deployments but continued dependence on external capital to operate and scale.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "founder-announcement-report",
        "url": "https://techcrunch.com/2024/03/12/remote-driving-startup-phantom-auto-is-shutting-down/",
        "title": "Remote driving startup Phantom Auto is shutting down",
        "publisher": "TechCrunch",
        "published_on": "2024-03-12",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "founder-announcement-report",
        "evidence": "The company failed to secure a new funding round, and the founder named insufficient funding among the factors behind the closure."
      },
      {
        "category": "market_timing",
        "is_primary": false,
        "confidence": 0.98,
        "source_id": "founder-announcement-report",
        "evidence": "The founder also cited market conditions, while reporting described an 18-month difficult fundraising environment across autonomous-vehicle startups."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.96,
        "source_id": "founder-announcement-report",
        "evidence": "After recognizing that public-road autonomy remained decades away, Phantom pivoted from robotaxis and self-driving trucks to remotely operated logistics vehicles."
      },
      {
        "category": "unit_economics",
        "is_primary": false,
        "confidence": 0.89,
        "source_id": "founder-announcement-report",
        "evidence": "Despite customer deployments, the company remained dependent on outside funding to maintain operations and reach scale."
      }
    ]
  },
  {
    "id": "made-renovation",
    "name": "Made Renovation",
    "canonical_domain": "made.co",
    "founded_on": "2019",
    "outcome_on": "2023-10-10",
    "outcome_type": "wind_down",
    "sector": "home_renovation_marketplace",
    "hq_country": "US",
    "funding_usd": 31000000,
    "funding_stage": null,
    "summary": "A managed bathroom-renovation startup that entered a formal asset-sale and business-closure process after widespread reports of project delays, cost overruns, broken customer commitments, and a dismantled project-management function; the evidence documents these operating failures but not a definitive board-attributed primary cause.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "shareholder-letter-report",
        "url": "https://techcrunch.com/2023/10/18/made-renovation-which-intrigued-then-infuriated-its-customers-is-shutting-down/",
        "title": "Made Renovation, which intrigued, then infuriated, its customers, is shutting down",
        "publisher": "TechCrunch",
        "published_on": "2023-10-18",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.94,
        "source_id": "shareholder-letter-report",
        "evidence": "Customers documented long delays, cost overruns, incomplete work, and the removal of the project-management team before the closure process began."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "shareholder-letter-report",
        "evidence": "The board replaced management with a turnaround executive, pursued an asset sale, planned to release all employees, and authorized business cessation if the transaction failed."
      }
    ]
  },
  {
    "id": "braid-shared-wallet",
    "name": "Braid",
    "canonical_domain": "braid.co",
    "founded_on": "2019-01",
    "outcome_on": "2023-09",
    "outcome_type": "shutdown",
    "sector": "consumer_payments",
    "hq_country": "US",
    "funding_usd": 10000000,
    "funding_stage": null,
    "summary": "A shared-wallet payments startup that shut down after losing its sponsor bank left it unable to process payments for six months, while third-party software dependencies repeatedly broke critical infrastructure and consumed the margins needed for viable unit economics.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "founder-postmortem-report",
        "url": "https://techcrunch.com/2023/10/09/consumer-payments-startup-braid-shuts-down-cites-struggles-with-leveraging-third-party-software/",
        "title": "Consumer payments startup Braid, backed by Index and Accel, shuts down",
        "publisher": "TechCrunch",
        "published_on": "2023-10-09",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "operations",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "founder-postmortem-report",
        "evidence": "The loss of a sponsor bank left the payments company processing no volume and effectively dormant from July 2022 through January 2023."
      },
      {
        "category": "technology",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "founder-postmortem-report",
        "evidence": "Multiple third-party partners could break critical parts of the product stack, forcing painful migrations and deeper in-house rebuilding."
      },
      {
        "category": "unit_economics",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "founder-postmortem-report",
        "evidence": "The founder said third-party fintech software could consume the company's entire margin, so the economics only worked when more infrastructure was built internally."
      }
    ]
  },
  {
    "id": "daylight-neobank",
    "name": "Daylight",
    "canonical_domain": "joindaylight.com",
    "founded_on": "2020",
    "outcome_on": "2023-06-30",
    "outcome_type": "wind_down",
    "sector": "digital_banking",
    "hq_country": "US",
    "funding_usd": 20000000,
    "funding_stage": "series_a",
    "summary": "An LGBTQ+-focused neobank that ended customer operations after failing to scale its specialized services profitably; a later founder statement said Daylight had been acquired, but no buyer, transaction date, or terms were disclosed, so the documented operational wind-down remains the classified outcome.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "founder-announcement-report",
        "url": "https://techcrunch.com/2023/05/22/daylight-the-lgbtq-neobank-calls-it-quits/",
        "title": "Daylight, the LGBTQ+ neobank, calls it quits",
        "publisher": "TechCrunch",
        "published_on": "2023-05-22",
        "source_type": "journalism"
      },
      {
        "id": "founder-interview",
        "url": "https://www.americanbanker.com/news/sunset-for-daylight-lgbtq-focused-neobank-winds-down",
        "title": "Sunset for Daylight: LGBTQ+-focused neobank winds down",
        "publisher": "American Banker",
        "published_on": "2023-05-24",
        "source_type": "journalism"
      },
      {
        "id": "later-outcome-report",
        "url": "https://techcrunch.com/2023/10/15/braid-closes-down-stash-marches-towards-an-ipo-and-what-happens-when-a-fintech-relationship-fizzles-out/",
        "title": "Braid shuts down, Stash marches toward an IPO and what happens when a fintech relationship fizzles out",
        "publisher": "TechCrunch",
        "published_on": "2023-10-15",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "unit_economics",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "founder-announcement-report",
        "evidence": "The founder said Daylight could not provide its specialized services in a way that covered costs and that profitable delivery likely required a large bank's scale."
      },
      {
        "category": "product_market_fit",
        "is_primary": false,
        "confidence": 0.97,
        "source_id": "founder-interview",
        "evidence": "A family-planning product for the queer community underperformed expectations, prompting the company to consider further investment, another financial-services direction, or a wind-down."
      },
      {
        "category": "external_shock",
        "is_primary": false,
        "confidence": 0.94,
        "source_id": "founder-interview",
        "evidence": "Daylight held all of its reserves at Silicon Valley Bank, and the bank's failure accelerated preparation of the wind-down plan amid rising interest rates."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "later-outcome-report",
        "evidence": "The founder later said Daylight had been acquired but declined to identify the buyer or provide transaction details, leaving the post-wind-down disposition unresolved."
      }
    ]
  },
  {
    "id": "superpedestrian",
    "name": "Superpedestrian",
    "canonical_domain": "superpedestrian.com",
    "founded_on": "2013",
    "outcome_on": "2024-03-11",
    "outcome_type": "acquired",
    "sector": "shared_micromobility",
    "hq_country": "US",
    "funding_usd": null,
    "funding_stage": "series_c",
    "summary": "A shared e-scooter operator that closed its U.S. service for financial reasons and prepared to sell its European business, then was acquired by Surf Beyond in a transaction that retained about 100 employees and continued operations across European markets.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "us-shutdown-report",
        "url": "https://techcrunch.com/2023/12/15/scooter-startup-superpedestrian-shutting-down-us-operations-explores-sale-of-europe-business/",
        "title": "Scooter startup Superpedestrian shutting down US operations, exploring sale of Europe business",
        "publisher": "TechCrunch",
        "published_on": "2023-12-15",
        "source_type": "journalism"
      },
      {
        "id": "acquisition-report",
        "url": "https://zagdaily.com/micromobility/superpedestrian-lives-on-with-surf-beyond-acquisition/",
        "title": "Superpedestrian lives on with Surf Beyond acquisition",
        "publisher": "Zag Daily",
        "published_on": "2024-03-11",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "us-shutdown-report",
        "evidence": "The U.S. operations director described the shutdown as financial and said investors had continued injecting money to keep the company afloat."
      },
      {
        "category": "competition",
        "is_primary": false,
        "confidence": 0.93,
        "source_id": "us-shutdown-report",
        "evidence": "The company had withdrawn from Chicago citing competitive difficulties amid broader distress in the shared-scooter sector."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "acquisition-report",
        "evidence": "Surf Beyond acquired Superpedestrian after its U.S. closure, retaining about 100 employees and continuing the European operation across nine markets."
      }
    ]
  },
  {
    "id": "weaveworks",
    "name": "Weaveworks",
    "canonical_domain": "weave.works",
    "founded_on": "2014",
    "outcome_on": "2024-02-05",
    "outcome_type": "shutdown",
    "sector": "cloud_native_developer_tools",
    "hq_country": "GB",
    "funding_usd": 61000000,
    "funding_stage": null,
    "summary": "A cloud-native developer-tooling company that ended commercial operations after uneven sales left it short of capital, better-funded competitors intensified pressure, and a prospective acquisition failed; its open-source projects continued independently.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "founder-closure-report",
        "url": "https://techcrunch.com/2024/02/05/cloud-native-container-management-platform-weaveworks-shuts-its-doors/",
        "title": "Cloud native container management platform Weaveworks shuts its doors",
        "publisher": "TechCrunch",
        "published_on": "2024-02-05",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "founder-closure-report",
        "evidence": "The founder said Weaveworks was running short on capital after its last disclosed round in 2020 and had few remaining financing prospects."
      },
      {
        "category": "unit_economics",
        "is_primary": false,
        "confidence": 0.98,
        "source_id": "founder-closure-report",
        "evidence": "Despite double-digit growth in 2023, the founder characterized sales as lumpy, leaving commercial performance too uneven to sustain the company."
      },
      {
        "category": "competition",
        "is_primary": false,
        "confidence": 0.96,
        "source_id": "founder-closure-report",
        "evidence": "Weaveworks faced increasingly strong competition from substantially better-capitalized developer-tooling companies."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "founder-closure-report",
        "evidence": "A potential acquisition fell through before the company closed, while its widely used open-source software was left to continue outside the commercial entity."
      }
    ]
  },
  {
    "id": "ironnet",
    "name": "IronNet",
    "canonical_domain": "ironnet.com",
    "founded_on": "2014",
    "outcome_on": "2024-02-22",
    "outcome_type": "pivoted",
    "sector": "cybersecurity",
    "hq_country": "US",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "A cybersecurity company that ran out of money and temporarily ceased operations, then emerged from Chapter 11 as a dramatically smaller private business after eliminating debt and securing a new credit facility; the restructuring followed missed large contracts and sharply reduced revenue expectations.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "investigative-lifecycle-report",
        "url": "https://apnews.com/article/keith-alexander-ironnet-cybersecurity-nsa-bankruptcy-eddd67f3a1b312face21c29c59400e05",
        "title": "Collapse of national security elites' cyber firm leaves bitter wake",
        "publisher": "Associated Press",
        "published_on": "2024-10-04",
        "source_type": "journalism"
      },
      {
        "id": "restructuring-announcement",
        "url": "https://www.ironnet.com/news/ironnet-successfully-completes-financial-restructuring",
        "title": "IronNet Successfully Completes Financial Restructuring",
        "publisher": "IronNet",
        "published_on": "2024-02-22",
        "source_type": "company"
      }
    ],
    "factors": [
      {
        "category": "product_market_fit",
        "is_primary": true,
        "confidence": 0.94,
        "source_id": "investigative-lifecycle-report",
        "evidence": "AP reported that IronNet failed to land the large contracts required by its growth plan and that former employees, experts, and analysts said its products did not live up to the company's claims."
      },
      {
        "category": "unit_economics",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "investigative-lifecycle-report",
        "evidence": "After large deals failed to materialize, IronNet cut its annual recurring revenue projection by 60% and remained unprofitable until it ran out of cash."
      },
      {
        "category": "fundraising",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "investigative-lifecycle-report",
        "evidence": "The company announced it had run out of money in September 2023 and required $10 million in insider-controlled loans to fund a bankruptcy restructuring."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "restructuring-announcement",
        "evidence": "IronNet emerged from Chapter 11 as a private company after eliminating about $37.7 million of debt and obtaining a $15 million exit credit facility under new leadership."
      }
    ]
  },
  {
    "id": "shelflife-marketplace",
    "name": "ShelfLife",
    "canonical_domain": "shelflife.co",
    "founded_on": "2020-02",
    "outcome_on": "2023-02",
    "outcome_type": "wind_down",
    "sector": "b2b_ingredient_marketplace",
    "hq_country": "US",
    "funding_usd": 3000000,
    "funding_stage": null,
    "summary": "A B2B marketplace for food and beverage ingredients that wound down after users discovered suppliers on the platform but kept payments in existing manual workflows, leaving revenue behind targets as burn stayed high and 90 investor conversations produced no new financing.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "founder-postmortem",
        "url": "https://techcrunch.com/2023/04/09/when-your-startup-fails/",
        "title": "When your startup fails",
        "publisher": "TechCrunch",
        "published_on": "2023-04-09",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "product_market_fit",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "founder-postmortem",
        "evidence": "Customers used ShelfLife to search and connect with suppliers but resisted moving invoicing and payments onto the platform, undermining the transaction-based business model."
      },
      {
        "category": "unit_economics",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "founder-postmortem",
        "evidence": "The company was missing revenue targets while carrying a ten-person employee and contractor base, and the founder said burn was too high for the remaining runway."
      },
      {
        "category": "fundraising",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "founder-postmortem",
        "evidence": "After an existing investor made support conditional on another participant, the founder spoke with 90 venture firms without securing the additional capital."
      },
      {
        "category": "market_timing",
        "is_primary": false,
        "confidence": 0.97,
        "source_id": "founder-postmortem",
        "evidence": "ShelfLife tried to digitize entrenched supplier sales and accounting workflows faster than customers were prepared to change them."
      }
    ]
  },
  {
    "id": "haus-aperitif",
    "name": "Haus",
    "canonical_domain": "drink.haus",
    "founded_on": "2019",
    "outcome_on": "2022-08-08",
    "outcome_type": "wind_down",
    "sector": "direct_to_consumer_beverages",
    "hq_country": "US",
    "funding_usd": 17000000,
    "funding_stage": null,
    "summary": "A direct-to-consumer aperitif brand that entered an assignment for the benefit of creditors after its committed Series A lead withdrew near closing, leaving too little cash to continue following pandemic-era customer-retention, distribution, and alcohol-industry fundraising constraints.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "founder-winddown-report",
        "url": "https://techcrunch.com/2022/08/08/haus-a-vc-backed-apertif-startup-is-up-for-sale-after-series-a-falls-through/",
        "title": "Haus, a VC-backed aperitif startup, is up for sale after Series A falls through",
        "publisher": "TechCrunch",
        "published_on": "2022-08-08",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "founder-winddown-report",
        "evidence": "The committed lead for a $10 million Series A withdrew near closing, and Haus said it no longer had the cash to support continued operations."
      },
      {
        "category": "external_shock",
        "is_primary": false,
        "confidence": 0.96,
        "source_id": "founder-winddown-report",
        "evidence": "Pandemic restrictions limited gatherings and organic word-of-mouth for a social beverage, while supply-chain disruptions and mobile-advertising changes complicated growth."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.97,
        "source_id": "founder-winddown-report",
        "evidence": "Alcohol-related investor restrictions and long diligence cycles pushed Haus toward debt and strategic financing before it entered an asset-sale process for creditors."
      }
    ]
  },
  {
    "id": "reali",
    "name": "Reali",
    "canonical_domain": "reali.com",
    "founded_on": "2016",
    "outcome_on": "2022-09-09",
    "outcome_type": "wind_down",
    "sector": "residential_real_estate_technology",
    "hq_country": "US",
    "funding_usd": 290000000,
    "funding_stage": null,
    "summary": "A homebuying and mortgage technology company that wound down as rising interest rates, inflation, housing inventory constraints, and a deteriorating capital market made its cash-intensive real-estate model and further financing untenable.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "company-shutdown-report",
        "url": "https://techcrunch.com/2022/08/25/real-estate-tech-startup-reali-to-shut-down-after-raising-100m-one-year-ago/",
        "title": "Real estate tech startup Reali to shut down after raising $100M one year ago",
        "publisher": "TechCrunch",
        "published_on": "2022-08-25",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "external_shock",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "company-shutdown-report",
        "evidence": "The company attributed the wind-down to challenging real-estate and financial-market conditions as rates and inflation climbed and housing inventory remained constrained."
      },
      {
        "category": "fundraising",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "company-shutdown-report",
        "evidence": "Reali explicitly cited an unfavorable capital-raising environment despite having raised more than $290 million in debt and equity."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.96,
        "source_id": "company-shutdown-report",
        "evidence": "The company laid off most employees and explored selling mortgage-origination, title, escrow, and power-buying assets during the shutdown."
      }
    ]
  },
  {
    "id": "nopearide",
    "name": "NopeaRide",
    "canonical_domain": "nopearide.com",
    "founded_on": "2018",
    "outcome_on": "2022-11-29",
    "outcome_type": "wind_down",
    "sector": "electric_taxi_service",
    "hq_country": "KE",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "Kenya's first all-electric taxi service wound down after its Finnish parent entered insolvency and could not raise the additional capital required to expand a fleet and charging network that had only recently recovered to pre-pandemic traffic levels.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "company-insolvency-report",
        "url": "https://techcrunch.com/2022/11/29/nopearide-kenyas-first-ev-taxi-service-shuts-down/",
        "title": "NopeaRide, Kenya's first EV taxi service, shuts down",
        "publisher": "TechCrunch",
        "published_on": "2022-11-29",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "company-insolvency-report",
        "evidence": "Parent company EkoRent Oy entered insolvency in Finland after failing to secure the additional financing needed to take the Nairobi service to its next stage."
      },
      {
        "category": "external_shock",
        "is_primary": false,
        "confidence": 0.98,
        "source_id": "company-insolvency-report",
        "evidence": "Pandemic work-from-home behavior sharply reduced rides, and traffic only returned to roughly pre-COVID levels in the first half of 2022."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.94,
        "source_id": "company-insolvency-report",
        "evidence": "The capital-intensive model required NopeaRide to source electric vehicles and build a Nairobi charging network while drivers arranged their own vehicle financing."
      }
    ]
  },
  {
    "id": "onwardmobility",
    "name": "OnwardMobility",
    "canonical_domain": "onwardmobility.com",
    "founded_on": "2020",
    "outcome_on": "2022-02-18",
    "outcome_type": "shutdown",
    "sector": "smartphone_hardware",
    "hq_country": "US",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "A hardware startup formed to revive the BlackBerry smartphone shut down without releasing its promised 2021 5G keyboard device; the company gave no official cause, while independent reporting said its BlackBerry brand license had been canceled.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "closure-report",
        "url": "https://www.engadget.com/blackberry-5g-is-dead-125052260.html",
        "title": "OnwardMobility is dead, and so are its plans to release a 5G BlackBerry phone",
        "publisher": "Engadget",
        "published_on": "2022-02-22",
        "source_type": "journalism"
      },
      {
        "id": "license-report",
        "url": "https://arstechnica.com/gadgets/2022/02/blackberrys-5g-smartphone-resurrection-is-reportedly-dead/",
        "title": "BlackBerry won't be back—OnwardMobility reportedly loses brand license",
        "publisher": "Ars Technica",
        "published_on": "2022-02-11",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "technology",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "closure-report",
        "evidence": "The company ended development after missing its promised 2021 release and never publicly showing the smartphone it had set out to build."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.84,
        "source_id": "license-report",
        "evidence": "Two independent reporters said OnwardMobility had lost the BlackBerry brand license; the company did not confirm that report or state an official shutdown cause."
      }
    ]
  },
  {
    "id": "canoo",
    "name": "Canoo",
    "canonical_domain": "canoo.com",
    "founded_on": "2017",
    "outcome_on": "2025-01-17",
    "outcome_type": "wind_down",
    "sector": "electric_vehicles",
    "hq_country": "US",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "An electric-vehicle startup that entered Chapter 7 and ceased operations immediately after unsuccessful financing efforts, minimal commercial deliveries, factory idling, leadership turnover, and repeated manufacturing and market pivots; a trustee later sold its assets to an affiliate of its former CEO.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "chapter-seven-report",
        "url": "https://techcrunch.com/2025/01/17/ev-startup-canoo-files-for-bankruptcy-and-ceases-operations/",
        "title": "EV startup Canoo files for bankruptcy and ceases operations",
        "publisher": "TechCrunch",
        "published_on": "2025-01-17",
        "source_type": "journalism"
      },
      {
        "id": "asset-sale-opinion",
        "url": "https://law.justia.com/cases/federal/district-courts/delaware/dedce/1%3A2025cv00461/88847/16/",
        "title": "In Re: Canoo, Inc., No. 1:2025cv00461 - Document 16",
        "publisher": "U.S. District Court for the District of Delaware via Justia",
        "published_on": "2026-03-17",
        "source_type": "regulatory"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "chapter-seven-report",
        "evidence": "Canoo said discussions with foreign capital sources failed and it could not secure financing from the U.S. Department of Energy loan program."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "chapter-seven-report",
        "evidence": "The company delivered only a few vans, idled its Oklahoma factory, furloughed its remaining staff, and had about $700,000 in cash by mid-November 2024."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.98,
        "source_id": "chapter-seven-report",
        "evidence": "After going public, Canoo shifted from consumers to commercial fleets and repeatedly changed whether it would manufacture vehicles itself or outsource production; the Chapter 7 trustee later sold the assets to a former-CEO affiliate."
      }
    ]
  },
  {
    "id": "northvolt",
    "name": "Northvolt",
    "canonical_domain": "northvolt.com",
    "founded_on": "2016",
    "outcome_on": "2025-03-12",
    "outcome_type": "wind_down",
    "sector": "battery_manufacturing",
    "hq_country": "SE",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "A European battery manufacturer that filed for Swedish bankruptcy after production-ramp problems, rising capital costs, supply-chain disruption, demand shifts, and unsuccessful financing and restructuring efforts; bankruptcy estates later transferred the principal Swedish and German assets to Lyten for a restart under new ownership.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "bankruptcy-announcement",
        "url": "https://northvolt.com/articles/northvolt-files-for-bankruptcy-in-sweden/",
        "title": "Northvolt files for bankruptcy in Sweden",
        "publisher": "Northvolt",
        "published_on": "2025-03-12",
        "source_type": "company"
      },
      {
        "id": "lyten-agreement",
        "url": "https://northvolt.com/articles/lyten-to-acquire-all-remaining-northvolt-assets-in-sweden-and-germany/",
        "title": "Lyten to Acquire All Remaining Northvolt Assets in Sweden and Germany",
        "publisher": "Northvolt",
        "published_on": "2025-08-07",
        "source_type": "company"
      },
      {
        "id": "transfer-completion",
        "url": "https://mb.cision.com/Main/23860/4314009/3955851.pdf",
        "title": "Lyten completes the transactions regarding Northvolt",
        "publisher": "Ackordscentralen and DLA Piper",
        "published_on": "2026-02-27",
        "source_type": "regulatory"
      }
    ],
    "factors": [
      {
        "category": "operations",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "bankruptcy-announcement",
        "evidence": "Northvolt reported significant expected and unforeseen internal challenges while ramping production in a highly complex manufacturing process."
      },
      {
        "category": "fundraising",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "bankruptcy-announcement",
        "evidence": "After Chapter 11 restructuring, lender support, and investor discussions, the company could not secure the financial conditions required to continue in its existing form."
      },
      {
        "category": "external_shock",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "bankruptcy-announcement",
        "evidence": "The board cited rising capital costs, geopolitical instability, supply-chain disruptions, and shifts in battery-market demand as compounding pressures."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "transfer-completion",
        "evidence": "The bankruptcy estates completed transfer of their principal assets and business to Lyten, which took over employees and stated its intent to restart and develop operations."
      }
    ]
  },
  {
    "id": "fisker-2024",
    "name": "Fisker",
    "canonical_domain": "fiskerinc.com",
    "founded_on": "2016",
    "outcome_on": "2024-10-16",
    "outcome_type": "wind_down",
    "sector": "electric_vehicles",
    "hq_country": "US",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "An electric-vehicle manufacturer whose Chapter 11 case culminated in a confirmed liquidation plan after production stopped, rescue talks failed, customer-service and financial-control problems mounted, and its remaining Ocean inventory was sold to a fleet operator.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "bankruptcy-report",
        "url": "https://techcrunch.com/2024/06/18/ev-startup-fisker-files-for-bankruptcy/",
        "title": "EV startup Fisker files for bankruptcy",
        "publisher": "TechCrunch",
        "published_on": "2024-06-18",
        "source_type": "journalism"
      },
      {
        "id": "collapse-investigation",
        "url": "https://techcrunch.com/2024/05/31/fisker-collapse-investigation-ev-ocean-suv-henrik-geeta/",
        "title": "Inside EV startup Fisker's collapse: How the company crumbled under its founders' whims",
        "publisher": "TechCrunch",
        "published_on": "2024-05-31",
        "source_type": "journalism"
      },
      {
        "id": "fleet-sale",
        "url": "https://techcrunch.com/2024/07/16/fisker-bankruptcy-fleet-sale-order-approved/",
        "title": "Fisker cleared to sell North American EVs for $46.25 million",
        "publisher": "TechCrunch",
        "published_on": "2024-07-16",
        "source_type": "journalism"
      },
      {
        "id": "liquidation-case",
        "url": "https://www.veritaglobal.net/Fisker",
        "title": "Fisker Inc. Chapter 11 Cases",
        "publisher": "Verita Global",
        "published_on": "2024-10-16",
        "source_type": "regulatory"
      }
    ],
    "factors": [
      {
        "category": "operations",
        "is_primary": true,
        "confidence": 0.98,
        "source_id": "collapse-investigation",
        "evidence": "The production launch overwhelmed service and parts operations, while internal systems and staffing were insufficient to handle customer inquiries and vehicle repairs."
      },
      {
        "category": "fundraising",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "bankruptcy-report",
        "evidence": "Fisker entered Chapter 11 after warning it needed additional financing, pausing production, cutting staff, and failing to secure a rescue transaction."
      },
      {
        "category": "technology",
        "is_primary": false,
        "confidence": 0.93,
        "source_id": "collapse-investigation",
        "evidence": "Ocean owners encountered software and hardware problems while the company struggled to supply replacement parts and support repairs."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "liquidation-case",
        "evidence": "The bankruptcy court confirmed a liquidation plan after the remaining vehicle inventory was approved for sale to American Lease."
      }
    ]
  },
  {
    "id": "arrival-ev",
    "name": "Arrival",
    "canonical_domain": "arrival.com",
    "founded_on": "2015",
    "outcome_on": "2024-02-05",
    "outcome_type": "wind_down",
    "sector": "electric_vehicles",
    "hq_country": "GB",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "An electric-commercial-vehicle startup whose principal U.K. entities entered administration after repeated restructurings, cash-preservation pivots, and failure to reach commercial-scale production; selected manufacturing assets were later sold to Canoo.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "administration-notice",
        "url": "https://www.ey.com/en_uk/administrations/arrival-uk-ltd-and-arrival-automotive-uk-limited",
        "title": "Arrival UK Ltd and Arrival Automotive UK Limited (both in Administration)",
        "publisher": "EY",
        "published_on": "2024-02-05",
        "source_type": "regulatory"
      },
      {
        "id": "asset-sale-report",
        "url": "https://techcrunch.com/2024/03/25/bankrupt-ev-startup-arrival-sold-its-assets-to-canoo/",
        "title": "Bankrupt EV startup Arrival sold its assets to Canoo",
        "publisher": "TechCrunch",
        "published_on": "2024-03-25",
        "source_type": "journalism"
      },
      {
        "id": "life-support-report",
        "url": "https://techcrunch.com/2023/11/03/this-ev-startup-was-going-to-revolutionize-how-cars-were-made-now-its-on-life-support/",
        "title": "This EV startup was going to revolutionize how cars were made. Now, it's on life support",
        "publisher": "TechCrunch",
        "published_on": "2023-11-03",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "operations",
        "is_primary": true,
        "confidence": 0.98,
        "source_id": "asset-sale-report",
        "evidence": "Arrival spent heavily on its microfactory model but never produced commercial vehicles at scale before its U.K. operating entities entered administration."
      },
      {
        "category": "fundraising",
        "is_primary": false,
        "confidence": 0.97,
        "source_id": "administration-notice",
        "evidence": "The administrators were appointed after the companies exhausted options for continued independent operation and required an insolvency process to realize assets."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.98,
        "source_id": "life-support-report",
        "evidence": "Arrival repeatedly restructured, reduced staff, and shifted its market focus from the United Kingdom to the United States in an attempt to preserve cash."
      }
    ]
  },
  {
    "id": "babylon-health",
    "name": "Babylon Health",
    "canonical_domain": "babylonhealth.com",
    "founded_on": "2013",
    "outcome_on": "2023-08-31",
    "outcome_type": "wind_down",
    "sector": "digital_health",
    "hq_country": "GB",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "A digital-health company that sold substantially all remaining U.K. assets to eMed while its U.S. subsidiaries moved into Chapter 7, following contract losses, withdrawal from its core U.S. business, and collapse of a proposed take-private rescue.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "asset-sale-filing",
        "url": "https://www.sec.gov/Archives/edgar/data/1866390/000110465923097308/tm2325256d1_8k.htm",
        "title": "Babylon Holdings Limited Current Report on Form 8-K",
        "publisher": "U.S. Securities and Exchange Commission",
        "published_on": "2023-08-31",
        "source_type": "regulatory"
      },
      {
        "id": "bankruptcy-report",
        "url": "https://techcrunch.com/2023/08/31/the-fall-of-babylon-failed-tele-health-startup-once-valued-at-nearly-2b-goes-bankrupt-and-sold-for-parts/",
        "title": "The fall of Babylon: Failed tele-health startup once valued at nearly $2B goes bankrupt and sold for parts",
        "publisher": "TechCrunch",
        "published_on": "2023-08-31",
        "source_type": "journalism"
      },
      {
        "id": "chapter-seven-report",
        "url": "https://www.healthcaredive.com/news/Babylon-Chapter-7-bankruptcy/691218/",
        "title": "Babylon Health's US operations file for Chapter 7 bankruptcy",
        "publisher": "Healthcare Dive",
        "published_on": "2023-08-10",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.98,
        "source_id": "asset-sale-filing",
        "evidence": "A previously announced take-private and financing transaction with MindMaze did not proceed, leaving Babylon to pursue asset sales and insolvency proceedings."
      },
      {
        "category": "product_market_fit",
        "is_primary": false,
        "confidence": 0.9,
        "source_id": "bankruptcy-report",
        "evidence": "Babylon had lost major U.K. customer contracts and was exiting its core U.S. value-based-care business before the final asset sale."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "asset-sale-filing",
        "evidence": "Substantially all remaining U.K. assets were sold to eMed while other group entities pursued administration, bankruptcy, liquidation, or dissolution."
      }
    ]
  },
  {
    "id": "fast-radius",
    "name": "Fast Radius",
    "canonical_domain": "fastradius.com",
    "founded_on": "2014",
    "outcome_on": "2022-12-12",
    "outcome_type": "acquired",
    "sector": "digital_manufacturing",
    "hq_country": "US",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "A cloud-manufacturing platform acquired by SyBridge through a court-approved bankruptcy asset sale after a strategic-financing process failed and limited liquidity forced Fast Radius into Chapter 11.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "chapter-eleven-release",
        "url": "https://www.sec.gov/Archives/edgar/data/0001832351/000095017022022842/fsrd-ex99_1.htm",
        "title": "Fast Radius Initiates Chapter 11 and Announces Sale Process",
        "publisher": "Fast Radius via U.S. Securities and Exchange Commission",
        "published_on": "2022-11-07",
        "source_type": "company"
      },
      {
        "id": "asset-sale-filing",
        "url": "https://www.sec.gov/Archives/edgar/data/0001832351/000095017022026549/fsrd-20221208.htm",
        "title": "Fast Radius Current Report on Form 8-K",
        "publisher": "U.S. Securities and Exchange Commission",
        "published_on": "2022-12-12",
        "source_type": "regulatory"
      },
      {
        "id": "sale-approval-report",
        "url": "https://news.bloomberglaw.com/bankruptcy-law/fast-radius-17-million-bankruptcy-sale-to-sybridge-approved",
        "title": "Fast Radius' $17 Million Bankruptcy Sale to SyBridge Approved",
        "publisher": "Bloomberg Law",
        "published_on": "2022-12-12",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "chapter-eleven-release",
        "evidence": "After exploring strategic alternatives, Fast Radius lacked the capital required to continue independently and used Chapter 11 to preserve operations while seeking a buyer."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "asset-sale-filing",
        "evidence": "The bankruptcy court approved the sale of substantially all company assets to SyBridge, which expected to retain most of the workforce."
      }
    ]
  },
  {
    "id": "insteon",
    "name": "Insteon",
    "canonical_domain": "insteon.com",
    "founded_on": "2005",
    "outcome_on": "2022-06-09",
    "outcome_type": "acquired",
    "sector": "smart_home",
    "hq_country": "US",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "A cloud-dependent smart-home platform acquired and restarted by a group of customers after its prior owner abruptly disabled services amid pandemic supply-chain pressure and an unsuccessful search for a parent or buyer.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "shutdown-report",
        "url": "https://arstechnica.com/gadgets/2022/04/insteon-finally-comes-clean-about-its-sudden-smart-home-shutdown/",
        "title": "Insteon finally comes clean about its sudden smart home shutdown",
        "publisher": "Ars Technica",
        "published_on": "2022-04-22",
        "source_type": "journalism"
      },
      {
        "id": "acquisition-announcement",
        "url": "https://www.insteon.com/blogs/news/a-new-day-for-insteon",
        "title": "A New Day for Insteon",
        "publisher": "Insteon",
        "published_on": "2022-06-09",
        "source_type": "company"
      },
      {
        "id": "restart-report",
        "url": "https://arstechnica.com/gadgets/2022/06/insteon-smart-homes-resurrected-as-abruptly-as-they-were-bricked/",
        "title": "Insteon smart homes resurrected as abruptly as they were bricked",
        "publisher": "Ars Technica",
        "published_on": "2022-06-10",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "external_shock",
        "is_primary": true,
        "confidence": 0.9,
        "source_id": "shutdown-report",
        "evidence": "The former owner attributed financial strain to pandemic-era disruption and global supply-chain problems affecting the smart-home business."
      },
      {
        "category": "fundraising",
        "is_primary": false,
        "confidence": 0.92,
        "source_id": "shutdown-report",
        "evidence": "The prior company pursued a new parent or buyer but shut the cloud service before it secured a transaction that could sustain operations."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "acquisition-announcement",
        "evidence": "A group of Insteon users acquired the business, restored hub connectivity, and began rebuilding the service under new ownership."
      }
    ]
  },
  {
    "id": "vroom-ecommerce",
    "name": "Vroom",
    "canonical_domain": "vroom.com",
    "founded_on": "2012",
    "outcome_on": "2024-01-22",
    "outcome_type": "pivoted",
    "sector": "automotive_marketplace",
    "hq_country": "US",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "An online used-car retailer that discontinued ecommerce, sold inventory, and eliminated about 90% of roles after failing to raise required capital or achieve profitability, while retaining its UACC vehicle-finance and CarStory analytics businesses.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "wind-down-announcement",
        "url": "https://ir.vroom.com/news-releases/news-release-details/vroom-announces-wind-down-ecommerce-used-vehicle-operations/",
        "title": "Vroom Announces Wind-Down of Ecommerce Used Vehicle Operations",
        "publisher": "Vroom",
        "published_on": "2024-01-22",
        "source_type": "company"
      },
      {
        "id": "pivot-report",
        "url": "https://techcrunch.com/2024/01/23/vroom-hits-the-brakes-on-its-online-used-car-business-to-go-full-throttle-on-auto-financing-and-ai/",
        "title": "Vroom hits the brakes on its online used car business to go full throttle on auto financing and AI",
        "publisher": "TechCrunch",
        "published_on": "2024-01-23",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "wind-down-announcement",
        "evidence": "Vroom said it could not raise the additional capital necessary to fund the ecommerce operation through profitability."
      },
      {
        "category": "unit_economics",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "wind-down-announcement",
        "evidence": "Management concluded the online vehicle business could not reach profitability with available capital and chose to preserve liquidity."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "pivot-report",
        "evidence": "The company stopped buying and selling cars online, cut roughly 800 roles, and refocused on vehicle financing and automotive analytics."
      }
    ]
  },
  {
    "id": "lordstown-motors",
    "name": "Lordstown Motors",
    "canonical_domain": "lordstownmotors.com",
    "founded_on": "2018",
    "outcome_on": "2024-03-14",
    "outcome_type": "pivoted",
    "sector": "electric_vehicles",
    "hq_country": "US",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "An electric-truck manufacturer that emerged from Chapter 11 as Nu Ride after selling its factory and Endurance assets, terminating its operating workforce, and retaining cash, litigation claims, and a mandate to pursue new business combinations.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "emergence-announcement",
        "url": "https://investor.lordstownmotors.com/news-releases/news-release-details/nu-ride-inc-formerly-known-lordstown-motors-corp-emerges-chapter",
        "title": "Nu Ride Inc., Formerly Known as Lordstown Motors Corp., Emerges from Chapter 11",
        "publisher": "Nu Ride",
        "published_on": "2024-03-15",
        "source_type": "company"
      },
      {
        "id": "emergence-filing",
        "url": "https://www.sec.gov/Archives/edgar/data/1759546/000110465924034627/tm248893d1_8k.htm",
        "title": "Lordstown Motors Current Report on Form 8-K",
        "publisher": "U.S. Securities and Exchange Commission",
        "published_on": "2024-03-15",
        "source_type": "regulatory"
      },
      {
        "id": "pivot-report",
        "url": "https://techcrunch.com/2024/03/15/lordstown-motors-nu-ride-chapter-11-foxconn/",
        "title": "Lordstown Motors emerges from bankruptcy with a new name to fight Foxconn",
        "publisher": "TechCrunch",
        "published_on": "2024-03-15",
        "source_type": "journalism"
      }
    ],
    "factors": [
      {
        "category": "operations",
        "is_primary": true,
        "confidence": 0.96,
        "source_id": "pivot-report",
        "evidence": "Lordstown built only a few dozen Endurance trucks, paused production, and recalled the vehicles before selling the program's assets."
      },
      {
        "category": "fundraising",
        "is_primary": false,
        "confidence": 0.94,
        "source_id": "pivot-report",
        "evidence": "The company entered bankruptcy after its investment relationship with Foxconn collapsed and it lacked resources to continue vehicle manufacturing."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "emergence-announcement",
        "evidence": "The reorganized Nu Ride retained cash and claims rather than the former manufacturing operation and began evaluating acquisitions or business combinations."
      }
    ]
  },
  {
    "id": "bird-global",
    "name": "Bird",
    "canonical_domain": "bird.co",
    "founded_on": "2017",
    "outcome_on": "2024-04-04",
    "outcome_type": "acquired",
    "sector": "micromobility",
    "hq_country": "US",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "A shared-micromobility operator acquired through a lender-backed bankruptcy sale by newly formed Third Lane Mobility, which kept Bird and Spin operating after debt, recurring losses, and a collapsed public valuation made the prior capital structure unsustainable.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "bankruptcy-announcement",
        "url": "https://www.prnewswire.com/news-releases/bird-enters-into-comprehensive-restructuring-support-agreement-with-first--and-second-lien-lenders-to-strengthen-financial-position-302019823.html",
        "title": "Bird Enters into Comprehensive Restructuring Support Agreement",
        "publisher": "Bird",
        "published_on": "2023-12-20",
        "source_type": "company"
      },
      {
        "id": "bankruptcy-report",
        "url": "https://www.axios.com/2023/12/20/bird-files-for-bankruptcy",
        "title": "Bird files for bankruptcy",
        "publisher": "Axios",
        "published_on": "2023-12-20",
        "source_type": "journalism"
      },
      {
        "id": "emergence-announcement",
        "url": "https://www.businesswire.com/news/home/20240404133792/en/Bird-Successfully-Emerges-from-Bankruptcy-as-a-Stronger-Company-and-Will-Operate-as-the-Global-Anchor-Brand-of-Newly-Established-Third-Lane-Mobility-Inc./",
        "title": "Bird Successfully Emerges from Bankruptcy as a Stronger Company",
        "publisher": "Bird via Business Wire",
        "published_on": "2024-04-04",
        "source_type": "company"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.98,
        "source_id": "bankruptcy-report",
        "evidence": "Bird's market value had collapsed after its public listing, and the company required $25 million of debtor financing plus a lender-supported sale to continue operating."
      },
      {
        "category": "unit_economics",
        "is_primary": false,
        "confidence": 0.93,
        "source_id": "bankruptcy-report",
        "evidence": "The operator accumulated hundreds of millions of dollars in losses while repeatedly restructuring its shared-scooter business."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "emergence-announcement",
        "evidence": "Bird's assets were sold to Third Lane Mobility, a newly organized private parent that continued both the Bird and Spin brands with reduced expenses and debt."
      }
    ]
  },
  {
    "id": "nikola",
    "name": "Nikola",
    "canonical_domain": "nikolamotor.com",
    "founded_on": "2015",
    "outcome_on": "2025-12-12",
    "outcome_type": "wind_down",
    "sector": "electric_vehicles",
    "hq_country": "US",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "A zero-emission truck maker whose bankruptcy became a liquidation trust after failed financing and buyer searches, low production and heavy losses, an EV-market slowdown, and piecemeal asset sales including its Arizona factory to Lucid.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "bankruptcy-report",
        "url": "https://techcrunch.com/2025/02/19/troubled-electric-truck-maker-nikola-files-for-bankruptcy/",
        "title": "Troubled electric truck maker Nikola files for bankruptcy",
        "publisher": "TechCrunch",
        "published_on": "2025-02-19",
        "source_type": "journalism"
      },
      {
        "id": "bankruptcy-ap",
        "url": "https://apnews.com/article/83cf7afa084dd26ad3ff7175b4a7b0b5",
        "title": "Troubled electric vehicle maker Nikola files for bankruptcy protection",
        "publisher": "Associated Press",
        "published_on": "2025-02-19",
        "source_type": "journalism"
      },
      {
        "id": "effective-date-notice",
        "url": "https://document.epiq11.com/document/getdocumentbycode?docId=4537543&projectCode=NKL&source=DM",
        "title": "Notice of Occurrence of Effective Date of the Plan",
        "publisher": "U.S. Bankruptcy Court for the District of Delaware via Epiq",
        "published_on": "2025-12-12",
        "source_type": "regulatory"
      }
    ],
    "factors": [
      {
        "category": "fundraising",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "bankruptcy-report",
        "evidence": "Nikola failed to find a buyer or raise enough new capital after warning its available cash would support operations only into early 2025."
      },
      {
        "category": "operations",
        "is_primary": false,
        "confidence": 0.98,
        "source_id": "bankruptcy-ap",
        "evidence": "The company struggled to scale truck production, building only 83 vehicles in the third quarter while recording a net loss approaching $200 million."
      },
      {
        "category": "external_shock",
        "is_primary": false,
        "confidence": 0.91,
        "source_id": "bankruptcy-ap",
        "evidence": "Management cited market and macroeconomic pressure affecting electric-vehicle makers as additional constraints on continued operation."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "effective-date-notice",
        "evidence": "The confirmed liquidation plan became effective and transferred remaining estate property and claims to the Nikola Liquidating Trust."
      }
    ]
  },
  {
    "id": "proterra",
    "name": "Proterra",
    "canonical_domain": "proterra.com",
    "founded_on": "2004",
    "outcome_on": "2024-03-13",
    "outcome_type": "wind_down",
    "sector": "electric_vehicles",
    "hq_country": "US",
    "funding_usd": null,
    "funding_stage": null,
    "summary": "An electric-bus and battery company whose original corporate structure wound down after Chapter 11 split its transit, battery, and charging operations among separate buyers; customized production, underpriced contracts, inflation, and capital intensity had exhausted liquidity.",
    "review_status": "reviewed",
    "reviewed_on": "2026-07-16",
    "sources": [
      {
        "id": "bankruptcy-analysis",
        "url": "https://techcrunch.com/2023/08/09/what-led-to-ev-darling-proterras-bankruptcy/",
        "title": "What led to EV darling Proterra's bankruptcy",
        "publisher": "TechCrunch",
        "published_on": "2023-08-09",
        "source_type": "journalism"
      },
      {
        "id": "powered-sale-filing",
        "url": "https://www.sec.gov/Archives/edgar/data/1820630/000095014224000266/eh240444587_8k.htm",
        "title": "Proterra Current Report on Form 8-K",
        "publisher": "U.S. Securities and Exchange Commission",
        "published_on": "2024-02-01",
        "source_type": "regulatory"
      },
      {
        "id": "effective-date-notice",
        "url": "https://www.sec.gov/Archives/edgar/data/1820630/000095014224000680/eh240457480_ex9901.htm",
        "title": "Notice of Entry of Confirmation Order and Occurrence of Effective Date",
        "publisher": "U.S. Bankruptcy Court for the District of Delaware via SEC",
        "published_on": "2024-03-13",
        "source_type": "regulatory"
      }
    ],
    "factors": [
      {
        "category": "operations",
        "is_primary": true,
        "confidence": 0.99,
        "source_id": "bankruptcy-analysis",
        "evidence": "Highly customized transit buses, long procurement cycles, and the simultaneous scaling of three business lines made production and working-capital management unusually complex."
      },
      {
        "category": "unit_economics",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "bankruptcy-analysis",
        "evidence": "Multi-year contracts priced before later inflation left delivered buses costing more to manufacture than anticipated and compressed margins."
      },
      {
        "category": "external_shock",
        "is_primary": false,
        "confidence": 0.97,
        "source_id": "bankruptcy-analysis",
        "evidence": "Pandemic supply-chain disruption, inflation, and tighter capital markets compounded the company's manufacturing and liquidity pressures."
      },
      {
        "category": "strategic_change",
        "is_primary": false,
        "confidence": 0.99,
        "source_id": "effective-date-notice",
        "evidence": "The plan became effective after major operating businesses and assets were sold to separate buyers and the prior equity interests were canceled."
      }
    ]
  }
] satisfies Startup[];
