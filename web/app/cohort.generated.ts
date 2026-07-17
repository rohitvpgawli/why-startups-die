export type SamplingFrameBreakdown = {
  label: string;
  count: number;
};

export type SamplingFrameCompany = {
  id: string;
  name: string;
  slug: string;
  batch: string;
  launched_on: string | null;
  description: string;
  industry: string;
  tags: string[];
  status: string;
  team_size: number | null;
  website: string | null;
  yc_profile_url: string;
};

export type SamplingFrame = {
  id: string;
  title: string;
  description: string;
  records: number;
  retrieved_at: string;
  source_repository: string;
  source_note: string;
  companies: SamplingFrameCompany[];
  batches: SamplingFrameBreakdown[];
  directory_status: SamplingFrameBreakdown[];
  review_progress: {
    verified_founded_2021: number;
    sale_candidates_2021: number;
    sale_candidates_before_2021: number;
    publishable_outcomes: number;
    reviewed_right_censored: number;
    high_priority_reviews: number;
  };
};

// Generated from a frozen cohort roster. Do not edit by hand.
export const yc2021SamplingFrame = {
  "id": "yc-2021",
  "title": "YC 2021 public-directory sampling frame",
  "description": "A frozen roster of publicly launched YC Winter 2021 and Summer 2021 directory records. It defines a research frame, not a complete YC-funded-company denominator or a reviewed outcome dataset.",
  "records": 727,
  "retrieved_at": "2026-07-17T10:25:47+00:00",
  "source_repository": "https://github.com/yc-oss/api",
  "source_note": "Publicly launched companies with YC directory pages; not the full funded-company denominator.",
  "companies": [
    {
      "id": "yc-summer-2021-abatable",
      "name": "Abatable",
      "slug": "abatable",
      "batch": "Summer 2021",
      "launched_on": "2021-07-06",
      "description": "Carbon markets platform and solutions",
      "industry": "Industrials",
      "tags": [
        "Carbon Capture and Removal",
        "B2B",
        "Climate"
      ],
      "status": "Active",
      "team_size": 35,
      "website": "https://www.abatable.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/abatable"
    },
    {
      "id": "yc-summer-2021-abbot",
      "name": "Abbot",
      "slug": "abbot",
      "batch": "Summer 2021",
      "launched_on": "2021-07-27",
      "description": "Your Customer Success Co-Pilot",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS",
        "Customer Success"
      ],
      "status": "Inactive",
      "team_size": 5,
      "website": "https://ab.bot",
      "yc_profile_url": "https://www.ycombinator.com/companies/abbot"
    },
    {
      "id": "yc-summer-2021-abhi",
      "name": "Abhi",
      "slug": "abhi",
      "batch": "Summer 2021",
      "launched_on": "2021-07-16",
      "description": "Abhi is Pakistan's 1st financial wellness platform focusing on…",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://abhi.com.pk/",
      "yc_profile_url": "https://www.ycombinator.com/companies/abhi"
    },
    {
      "id": "yc-summer-2021-abstra",
      "name": "Abstra",
      "slug": "abstra",
      "batch": "Summer 2021",
      "launched_on": "2021-07-07",
      "description": "Automate finance operations with Python and AI",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "Finance",
        "B2B",
        "Automation"
      ],
      "status": "Active",
      "team_size": 18,
      "website": "https://abstra.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/abstra"
    },
    {
      "id": "yc-summer-2021-adaptyv",
      "name": "Adaptyv",
      "slug": "adaptyv",
      "batch": "Summer 2021",
      "launched_on": "2021-08-05",
      "description": "We're building fully automated labs for protein engineering",
      "industry": "Healthcare",
      "tags": [
        "AI-powered Drug Discovery",
        "Synthetic Biology"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "https://www.adaptyvbio.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/adaptyv"
    },
    {
      "id": "yc-summer-2021-adni",
      "name": "Adni",
      "slug": "adni",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "AI career platform for healthcare workers",
      "industry": "Healthcare",
      "tags": [
        "Marketplace",
        "SaaS",
        "Recruiting",
        "Healthcare",
        "AI"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://www.adni.co/",
      "yc_profile_url": "https://www.ycombinator.com/companies/adni"
    },
    {
      "id": "yc-summer-2021-adravision",
      "name": "Adravision",
      "slug": "adravision",
      "batch": "Summer 2021",
      "launched_on": "2021-07-09",
      "description": "Automation for dental clinics and insurance companies.",
      "industry": "Healthcare",
      "tags": [
        "Artificial Intelligence",
        "Healthcare",
        "Health Insurance",
        "Diagnostics"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://www.adra.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/adravision"
    },
    {
      "id": "yc-summer-2021-advantage-club",
      "name": "Advantage Club",
      "slug": "advantage-club",
      "batch": "Summer 2021",
      "launched_on": "2021-06-25",
      "description": "Global platform for employee engagement with rewards&flexible benefits",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Human Resources",
        "B2B",
        "HR Tech"
      ],
      "status": "Active",
      "team_size": 220,
      "website": "https://www.advantageclub.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/advantage-club"
    },
    {
      "id": "yc-summer-2021-aer",
      "name": "Aer",
      "slug": "aer",
      "batch": "Summer 2021",
      "launched_on": "2021-08-03",
      "description": "Compound compliance: the central hub for meeting SEC obligations ",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "B2B",
        "Regtech"
      ],
      "status": "Acquired",
      "team_size": 18,
      "website": "https://www.aercompliance.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/aer"
    },
    {
      "id": "yc-summer-2021-affogato-ai",
      "name": "Affogato AI",
      "slug": "affogato-ai",
      "batch": "Summer 2021",
      "launched_on": "2021-07-13",
      "description": "Affogato AI — Your Agent for instant TikToks, Reels, and ads.",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Generative AI",
        "AI"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://affogato.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/affogato-ai"
    },
    {
      "id": "yc-summer-2021-agape",
      "name": "Agapé",
      "slug": "agape",
      "batch": "Summer 2021",
      "launched_on": "2022-07-11",
      "description": "Feel close, even when apart. One meaningful conversation at a time.",
      "industry": "Healthcare",
      "tags": [
        "Health & Wellness"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "https://www.getdailyagape.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/agape"
    },
    {
      "id": "yc-summer-2021-ahazou",
      "name": "Ahazou",
      "slug": "ahazou",
      "batch": "Summer 2021",
      "launched_on": "2021-07-16",
      "description": "Podium for local businesses in Latam",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 27,
      "website": "https://ahazou.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/ahazou"
    },
    {
      "id": "yc-summer-2021-ai-tech-packs",
      "name": "AI Tech Packs",
      "slug": "ai-tech-packs",
      "batch": "Summer 2021",
      "launched_on": "2021-06-30",
      "description": "Build factory ready tech packs in minutes.",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Manufacturing"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://aitechpacks.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/ai-tech-packs"
    },
    {
      "id": "yc-summer-2021-akudo",
      "name": "Akudo",
      "slug": "akudo",
      "batch": "Summer 2021",
      "launched_on": "2021-08-21",
      "description": "India's first learning-focused neobank for teenagers",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Inactive",
      "team_size": 20,
      "website": "https://www.akudo.in/",
      "yc_profile_url": "https://www.ycombinator.com/companies/akudo"
    },
    {
      "id": "yc-summer-2021-akute-health",
      "name": "Akute Health",
      "slug": "akute-health",
      "batch": "Summer 2021",
      "launched_on": "2021-08-02",
      "description": "The medical record & infrastructure stack for digital health companies",
      "industry": "Healthcare",
      "tags": [
        "SaaS",
        "B2B",
        "Telemedicine"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://www.akutehealth.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/akute-health"
    },
    {
      "id": "yc-summer-2021-aleph",
      "name": "Aleph",
      "slug": "aleph",
      "batch": "Summer 2021",
      "launched_on": "2021-07-29",
      "description": "One source of truth for financial data.",
      "industry": "B2B",
      "tags": [
        "Finance"
      ],
      "status": "Active",
      "team_size": 30,
      "website": "https://getaleph.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/aleph"
    },
    {
      "id": "yc-summer-2021-aleph-solutions-alephee",
      "name": "Aleph Solutions (Alephee)",
      "slug": "aleph-solutions-alephee",
      "batch": "Summer 2021",
      "launched_on": "2021-07-01",
      "description": "We help automotive aftermarket brands to supply and sell parts online",
      "industry": "B2B",
      "tags": [
        "Marketplace",
        "B2B",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 60,
      "website": "https://www.alephee.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/aleph-solutions-alephee"
    },
    {
      "id": "yc-summer-2021-algofi",
      "name": "Algofi",
      "slug": "algofi",
      "batch": "Summer 2021",
      "launched_on": "2021-07-28",
      "description": "Building the new financial system",
      "industry": "Fintech",
      "tags": [
        "Crypto / Web3"
      ],
      "status": "Inactive",
      "team_size": 7,
      "website": "https://algofi.org",
      "yc_profile_url": "https://www.ycombinator.com/companies/algofi"
    },
    {
      "id": "yc-summer-2021-algouniversity",
      "name": "AlgoUniversity",
      "slug": "algouniversity",
      "batch": "Summer 2021",
      "launched_on": "2021-07-01",
      "description": "Building Job driven Virtual Tech University for India 🇮🇳",
      "industry": "Education",
      "tags": [
        "Education",
        "Income Share Agreements",
        "eLearning"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "http://algouniversity.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/algouniversity"
    },
    {
      "id": "yc-summer-2021-algoviral",
      "name": "AlgoViral",
      "slug": "algoviral",
      "batch": "Summer 2021",
      "launched_on": "2021-06-23",
      "description": "We help high-growth startups go viral on autopilot",
      "industry": "B2B",
      "tags": [],
      "status": "Active",
      "team_size": 5,
      "website": "https://algoviral.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/algoviral"
    },
    {
      "id": "yc-summer-2021-amenli",
      "name": "Amenli",
      "slug": "amenli",
      "batch": "Summer 2021",
      "launched_on": "2021-07-06",
      "description": "Offers insurance to customers in a convenient & transparent way ",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Insurance"
      ],
      "status": "Active",
      "team_size": 65,
      "website": "https://www.amenli.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/amenli"
    },
    {
      "id": "yc-summer-2021-anakin",
      "name": "Anakin",
      "slug": "anakin",
      "batch": "Summer 2021",
      "launched_on": "2021-07-03",
      "description": "One API to get clean data from any website for your AI agents at scale",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Developer Tools",
        "API"
      ],
      "status": "Active",
      "team_size": 70,
      "website": "https://anakin.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/anakin"
    },
    {
      "id": "yc-summer-2021-ananya-health",
      "name": "Ananya Health",
      "slug": "ananya-health",
      "batch": "Summer 2021",
      "launched_on": "2021-07-05",
      "description": "Portable cryoablation to prevent cervical cancer",
      "industry": "Healthcare",
      "tags": [
        "Hardware",
        "Health Tech",
        "Medical Devices"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://www.ananya.health/",
      "yc_profile_url": "https://www.ycombinator.com/companies/ananya-health"
    },
    {
      "id": "yc-summer-2021-ancana",
      "name": "Ancana",
      "slug": "ancana",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "Marketplace to buy managed vacation homes through fractional ownership",
      "industry": "Consumer",
      "tags": [
        "Marketplace",
        "Travel",
        "Proptech"
      ],
      "status": "Active",
      "team_size": 7,
      "website": "https://www.ancana.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/ancana"
    },
    {
      "id": "yc-summer-2021-aoa-dx-inc",
      "name": "AOA Dx",
      "slug": "aoa-dx-inc",
      "batch": "Summer 2021",
      "launched_on": "2021-06-21",
      "description": "Blood Test for Early Detection of Ovarian Cancer ",
      "industry": "Healthcare",
      "tags": [
        "Healthcare",
        "Diagnostics",
        "Women's Health"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "https://www.aoadx.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/aoa-dx-inc"
    },
    {
      "id": "yc-summer-2021-apollo-2",
      "name": "Apollo",
      "slug": "apollo-2",
      "batch": "Summer 2021",
      "launched_on": "2021-08-06",
      "description": "The card that rewards you with stock ",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "https://www.withapollo.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/apollo-2"
    },
    {
      "id": "yc-summer-2021-appx",
      "name": "AppX",
      "slug": "appx",
      "batch": "Summer 2021",
      "launched_on": "2021-06-25",
      "description": "AppX helps social media creators launch their own mobile apps.",
      "industry": "Education",
      "tags": [
        "Education",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 30,
      "website": "https://appx.co.in",
      "yc_profile_url": "https://www.ycombinator.com/companies/appx"
    },
    {
      "id": "yc-summer-2021-aqua",
      "name": "Aqua",
      "slug": "aqua",
      "batch": "Summer 2021",
      "launched_on": "2021-08-23",
      "description": "The AI-Native Turnkey Alternative Investment Platform (TAIP)",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Finance",
        "Investing",
        "Investments"
      ],
      "status": "Active",
      "team_size": 34,
      "website": "https://www.investwithaqua.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/aqua"
    },
    {
      "id": "yc-summer-2021-archbee",
      "name": "Archbee",
      "slug": "archbee",
      "batch": "Summer 2021",
      "launched_on": "2021-07-26",
      "description": "TURN STATIC DOCS INTO INSTANT ANSWERS",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "B2B"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://www.archbee.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/archbee"
    },
    {
      "id": "yc-summer-2021-arengu",
      "name": "Arengu",
      "slug": "arengu",
      "batch": "Summer 2021",
      "launched_on": "2021-07-06",
      "description": "Build frictionless signup flows in minutes",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS",
        "B2B"
      ],
      "status": "Acquired",
      "team_size": 10,
      "website": "https://www.arengu.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/arengu"
    },
    {
      "id": "yc-summer-2021-arq",
      "name": "ARQ",
      "slug": "arq",
      "batch": "Summer 2021",
      "launched_on": "2022-09-14",
      "description": "The global financial platform for affluent consumers in the Americas.",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Crypto / Web3"
      ],
      "status": "Active",
      "team_size": 100,
      "website": "https://www.arqfinance.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/arq"
    },
    {
      "id": "yc-summer-2021-arrow",
      "name": "Arrow",
      "slug": "arrow",
      "batch": "Summer 2021",
      "launched_on": "2021-08-03",
      "description": "Modern Checkout Platform for D2C brands in Southeast Asia",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 18,
      "website": "https://www.arrowcheckout.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/arrow"
    },
    {
      "id": "yc-summer-2021-artillery",
      "name": "Artillery",
      "slug": "artillery",
      "batch": "Summer 2021",
      "launched_on": "2021-08-11",
      "description": "The complete production quality platform. AI-powered E2E testing,…",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS",
        "Open Source",
        "DevOps"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://www.artillery.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/artillery"
    },
    {
      "id": "yc-summer-2021-asim",
      "name": "aSim",
      "slug": "asim",
      "batch": "Summer 2021",
      "launched_on": "2021-06-21",
      "description": "Build and share apps with friends",
      "industry": "Consumer",
      "tags": [
        "Artificial Intelligence",
        "Consumer",
        "No-code",
        "Consumer Products",
        "AI"
      ],
      "status": "Active",
      "team_size": 9,
      "website": "https://asim.sh/",
      "yc_profile_url": "https://www.ycombinator.com/companies/asim"
    },
    {
      "id": "yc-summer-2021-astek-diagnostics-inc",
      "name": "Astek Diagnostics",
      "slug": "astek-diagnostics-inc",
      "batch": "Summer 2021",
      "launched_on": "2021-07-01",
      "description": "One-hour antibiotic sensitivity testing",
      "industry": "Healthcare",
      "tags": [
        "Microfluidics",
        "Medical Devices"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "http://astekdx.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/astek-diagnostics-inc"
    },
    {
      "id": "yc-summer-2021-atlas",
      "name": "Atlas",
      "slug": "atlas",
      "batch": "Summer 2021",
      "launched_on": "2021-08-08",
      "description": "Operating system for restaurants, focusing on Southeast Asia",
      "industry": "B2B",
      "tags": [
        "Restaurant Tech"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://atlas.kitchen",
      "yc_profile_url": "https://www.ycombinator.com/companies/atlas"
    },
    {
      "id": "yc-summer-2021-atmana",
      "name": "Atmana",
      "slug": "atmana",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "Apps to control technology addictions/ helping startups hire engineers",
      "industry": "Consumer",
      "tags": [
        "Mental Health Tech"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://blockerx.net/",
      "yc_profile_url": "https://www.ycombinator.com/companies/atmana"
    },
    {
      "id": "yc-summer-2021-aviator",
      "name": "Aviator",
      "slug": "aviator",
      "batch": "Summer 2021",
      "launched_on": "2021-08-23",
      "description": "Google-level engineering productivity suite",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "https://aviator.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/aviator"
    },
    {
      "id": "yc-summer-2021-awesomic",
      "name": "Awesomic",
      "slug": "awesomic",
      "batch": "Summer 2021",
      "launched_on": "2021-07-29",
      "description": "Get matched with top 1% of talents in 24h",
      "industry": "B2B",
      "tags": [
        "Marketplace",
        "B2B",
        "Recruiting",
        "Design",
        "Web Development"
      ],
      "status": "Active",
      "team_size": 150,
      "website": "https://www.awesomic.com/?ref=yc",
      "yc_profile_url": "https://www.ycombinator.com/companies/awesomic"
    },
    {
      "id": "yc-summer-2021-baraka",
      "name": "Baraka",
      "slug": "baraka",
      "batch": "Summer 2021",
      "launched_on": "2021-06-23",
      "description": "Grow Your Wealth With Baraka",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Active",
      "team_size": 34,
      "website": "https://www.getbaraka.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/baraka"
    },
    {
      "id": "yc-summer-2021-baubap",
      "name": "Baubap",
      "slug": "baubap",
      "batch": "Summer 2021",
      "launched_on": "2021-07-07",
      "description": "Smart micro financing for everyone",
      "industry": "Fintech",
      "tags": [
        "Machine Learning",
        "Lending"
      ],
      "status": "Active",
      "team_size": 150,
      "website": "https://www.baubap.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/baubap"
    },
    {
      "id": "yc-summer-2021-beau",
      "name": "Beau",
      "slug": "beau",
      "batch": "Summer 2021",
      "launched_on": "2021-07-19",
      "description": "Workflows for repetitive customer-facing tasks",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Productivity",
        "Customer Success",
        "Collaboration"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://beau.to",
      "yc_profile_url": "https://www.ycombinator.com/companies/beau"
    },
    {
      "id": "yc-summer-2021-beeper",
      "name": "Beeper",
      "slug": "beeper",
      "batch": "Summer 2021",
      "launched_on": "2021-06-24",
      "description": "One chat app to rule them all",
      "industry": "Consumer",
      "tags": [
        "SaaS",
        "Community"
      ],
      "status": "Acquired",
      "team_size": 16,
      "website": "https://beeper.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/beeper"
    },
    {
      "id": "yc-summer-2021-birdie",
      "name": "Birdie",
      "slug": "birdie",
      "batch": "Summer 2021",
      "launched_on": "2021-07-01",
      "description": "Connect LinkedIn to your CRM to automate and track LinkedIn outreach.",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Productivity",
        "Sales"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://www.getbirdie.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/birdie"
    },
    {
      "id": "yc-summer-2021-bite-ninja",
      "name": "Bite Ninja",
      "slug": "bite-ninja",
      "batch": "Summer 2021",
      "launched_on": "2021-07-23",
      "description": "Remote labor for restaurants",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Food Service Robots & Machines",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 20,
      "website": "http://www.biteninja.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/bite-ninja"
    },
    {
      "id": "yc-summer-2021-blackoaktv",
      "name": "BlackOakTV",
      "slug": "blackoaktv",
      "batch": "Summer 2021",
      "launched_on": "2021-07-01",
      "description": "A video subscription platform serving black viewers and creators.",
      "industry": "Consumer",
      "tags": [
        "Entertainment",
        "Community",
        "Subscriptions"
      ],
      "status": "Inactive",
      "team_size": 2,
      "website": "https://blackoak.tv",
      "yc_profile_url": "https://www.ycombinator.com/companies/blackoaktv"
    },
    {
      "id": "yc-summer-2021-blixo",
      "name": "Blixo",
      "slug": "blixo",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "Accounts receivable automation to help companies get paid faster ",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "SaaS",
        "Payments"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://blixo.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/blixo"
    },
    {
      "id": "yc-summer-2021-bluumbio",
      "name": "BLUUMBIO",
      "slug": "bluumbio",
      "batch": "Summer 2021",
      "launched_on": "2021-07-13",
      "description": "We make bacteria and plants that clean up pollution.",
      "industry": "Healthcare",
      "tags": [
        "Biotech",
        "Sustainability"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "http://www.bluumbio.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/bluumbio"
    },
    {
      "id": "yc-summer-2021-boldvoice",
      "name": "BoldVoice",
      "slug": "boldvoice",
      "batch": "Summer 2021",
      "launched_on": "2021-07-12",
      "description": "Speech and accent coaching app for non-native English speakers",
      "industry": "Consumer",
      "tags": [
        "Education",
        "Speech Recognition"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://boldvoice.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/boldvoice"
    },
    {
      "id": "yc-summer-2021-bolster",
      "name": "Bolster",
      "slug": "bolster",
      "batch": "Summer 2021",
      "launched_on": "2021-06-23",
      "description": "The platform for buying, selling and managing residential construction",
      "industry": "Real Estate and Construction",
      "tags": [
        "Fintech",
        "Marketplace",
        "Proptech"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "https://bolsterbuilt.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/bolster"
    },
    {
      "id": "yc-summer-2021-breadcrumbs-io",
      "name": "Breadcrumbs.io",
      "slug": "breadcrumbs-io",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "No-code scoring engine identifying your most engaged upsell opps",
      "industry": "B2B",
      "tags": [
        "Analytics",
        "No-code"
      ],
      "status": "Acquired",
      "team_size": 20,
      "website": "http://www.breadcrumbs.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/breadcrumbs-io"
    },
    {
      "id": "yc-summer-2021-bree",
      "name": "Bree",
      "slug": "bree",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "Chime for Canada, starting with cash advances",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://www.trybree.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/bree"
    },
    {
      "id": "yc-summer-2021-brite",
      "name": "Brite",
      "slug": "brite",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "Software that helps employees pick their employee benefits.",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "HR Tech"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://britebenefits.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/brite"
    },
    {
      "id": "yc-summer-2021-buoyant-aero",
      "name": "Buoyant Aero",
      "slug": "buoyant-aero",
      "batch": "Summer 2021",
      "launched_on": "2021-07-20",
      "description": "Bringing back blimps",
      "industry": "Industrials",
      "tags": [
        "Robotics",
        "Drones",
        "Advertising"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://www.buoyant.aero",
      "yc_profile_url": "https://www.ycombinator.com/companies/buoyant-aero"
    },
    {
      "id": "yc-summer-2021-buro-de-ingresos",
      "name": "Buró de Ingresos",
      "slug": "buro-de-ingresos",
      "batch": "Summer 2021",
      "launched_on": "2021-08-09",
      "description": "The Work Number for LatAm",
      "industry": "B2B",
      "tags": [
        "Payroll",
        "API"
      ],
      "status": "Active",
      "team_size": 17,
      "website": "https://www.burodeingresos.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/buro-de-ingresos"
    },
    {
      "id": "yc-summer-2021-buzzle",
      "name": "Buzzle",
      "slug": "buzzle",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "Automatic voice-of-customer trends & metrics from sales conversations.",
      "industry": "B2B",
      "tags": [
        "AI-Enhanced Learning",
        "SaaS",
        "B2B"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "https://buzzle.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/buzzle"
    },
    {
      "id": "yc-summer-2021-byte-kitchen",
      "name": "Byte Kitchen",
      "slug": "byte-kitchen",
      "batch": "Summer 2021",
      "launched_on": "2021-07-19",
      "description": "Increasing restaurant profitability through our AI Operating System",
      "industry": "Consumer",
      "tags": [
        "Ghost Kitchens",
        "B2B",
        "E-commerce"
      ],
      "status": "Acquired",
      "team_size": 5,
      "website": "https://www.bytekitchen.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/byte-kitchen"
    },
    {
      "id": "yc-summer-2021-bytebot",
      "name": "Bytebot",
      "slug": "bytebot",
      "batch": "Summer 2021",
      "launched_on": "2021-08-11",
      "description": "Bytebot is the open source container for AI desktop agents.",
      "industry": "B2B",
      "tags": [
        "Generative AI",
        "Robotic Process Automation",
        "SaaS",
        "AI",
        "AI Assistant"
      ],
      "status": "Acquired",
      "team_size": 3,
      "website": "https://www.bytebot.ai/",
      "yc_profile_url": "https://www.ycombinator.com/companies/bytebot"
    },
    {
      "id": "yc-summer-2021-cabal",
      "name": "Cabal",
      "slug": "cabal",
      "batch": "Summer 2021",
      "launched_on": "2021-07-12",
      "description": "Private workspace for founders, investors, and advisors to collaborate",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Community"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "http://getcabal.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/cabal"
    },
    {
      "id": "yc-summer-2021-cache",
      "name": "Cache",
      "slug": "cache",
      "batch": "Summer 2021",
      "launched_on": "2021-08-04",
      "description": "Online convenience stores fulfilled by tiny, automated dark stores.",
      "industry": "Consumer",
      "tags": [
        "Marketplace",
        "Delivery"
      ],
      "status": "Inactive",
      "team_size": 2,
      "website": "http://www.grabcache.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/cache"
    },
    {
      "id": "yc-summer-2021-cafe",
      "name": "Café",
      "slug": "cafe",
      "batch": "Summer 2021",
      "launched_on": "2021-06-30",
      "description": "Your Workplace Engagement Hub",
      "industry": "B2B",
      "tags": [
        "Community",
        "HR Tech",
        "Social Network"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://at.cafe",
      "yc_profile_url": "https://www.ycombinator.com/companies/cafe"
    },
    {
      "id": "yc-summer-2021-caire-health",
      "name": "Caire Health",
      "slug": "caire-health",
      "batch": "Summer 2021",
      "launched_on": "2021-08-07",
      "description": "Semi-Autonomous Diagnostics for Emergent Care",
      "industry": "Healthcare",
      "tags": [
        "Artificial Intelligence",
        "Medical Devices"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "http://cairehealth.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/caire-health"
    },
    {
      "id": "yc-summer-2021-canopi",
      "name": "Canopi",
      "slug": "canopi",
      "batch": "Summer 2021",
      "launched_on": "2021-07-21",
      "description": "API to measure and eliminate carbon emissions",
      "industry": "B2B",
      "tags": [
        "Carbon Capture and Removal",
        "Crypto / Web3",
        "Climate"
      ],
      "status": "Inactive",
      "team_size": null,
      "website": "https://canopi.cash",
      "yc_profile_url": "https://www.ycombinator.com/companies/canopi"
    },
    {
      "id": "yc-summer-2021-carbonfact",
      "name": "Carbonfact",
      "slug": "carbonfact",
      "batch": "Summer 2021",
      "launched_on": "2021-07-21",
      "description": "Decarbonizing the fashion industry",
      "industry": "Industrials",
      "tags": [
        "SaaS",
        "Sustainable Fashion",
        "Climate"
      ],
      "status": "Active",
      "team_size": 22,
      "website": "http://www.carbonfact.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/carbonfact"
    },
    {
      "id": "yc-summer-2021-careerist",
      "name": "Careerist",
      "slug": "careerist",
      "batch": "Summer 2021",
      "launched_on": "2021-07-27",
      "description": "Learning platform for job seekers with job applications automation",
      "industry": "Education",
      "tags": [
        "Education",
        "Fintech",
        "Recruiting"
      ],
      "status": "Active",
      "team_size": 100,
      "website": "http://careerist.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/careerist"
    },
    {
      "id": "yc-summer-2021-cartpanda",
      "name": "Cartpanda",
      "slug": "cartpanda",
      "batch": "Summer 2021",
      "launched_on": "2021-07-18",
      "description": "Global online sales platform",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 60,
      "website": "https://cartpanda.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/cartpanda"
    },
    {
      "id": "yc-summer-2021-catena-biosciences",
      "name": "Catena Biosciences",
      "slug": "catena-biosciences",
      "batch": "Summer 2021",
      "launched_on": "2021-06-24",
      "description": "Using protein coupling to build new therapies",
      "industry": "Healthcare",
      "tags": [
        "Biotech",
        "Therapeutics"
      ],
      "status": "Active",
      "team_size": 7,
      "website": "https://www.catenabiosciences.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/catena-biosciences"
    },
    {
      "id": "yc-summer-2021-cellchorus",
      "name": "CellChorus",
      "slug": "cellchorus",
      "batch": "Summer 2021",
      "launched_on": "2021-08-15",
      "description": "The dynamic single-cell analysis company",
      "industry": "Healthcare",
      "tags": [
        "AI-powered Drug Discovery",
        "Machine Learning"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://cellchorus.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/cellchorus"
    },
    {
      "id": "yc-summer-2021-cero",
      "name": "Cero",
      "slug": "cero",
      "batch": "Summer 2021",
      "launched_on": "2021-07-01",
      "description": "Automated communication between hospitals and patients in Latam",
      "industry": "B2B",
      "tags": [
        "Machine Learning",
        "Consumer Health Services",
        "B2B",
        "NLP"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://cero.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/cero"
    },
    {
      "id": "yc-summer-2021-charge-robotics",
      "name": "Charge Robotics",
      "slug": "charge-robotics",
      "batch": "Summer 2021",
      "launched_on": "2022-03-25",
      "description": "Robots that build solar farms",
      "industry": "Industrials",
      "tags": [
        "Robotics",
        "Solar Power",
        "Construction",
        "Climate"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "https://chargerobotics.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/charge-robotics"
    },
    {
      "id": "yc-summer-2021-chari",
      "name": "Chari",
      "slug": "chari",
      "batch": "Summer 2021",
      "launched_on": "2021-07-05",
      "description": "B2B e-commerce and fintech platform for traditional proximity stores ",
      "industry": "Consumer",
      "tags": [
        "Fintech",
        "Grocery",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 100,
      "website": "https://chari.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/chari"
    },
    {
      "id": "yc-summer-2021-chipax",
      "name": "Chipax",
      "slug": "chipax",
      "batch": "Summer 2021",
      "launched_on": "2021-07-07",
      "description": "Quickbooks for SMBs in Latam",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 37,
      "website": "https://www.chipax.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/chipax"
    },
    {
      "id": "yc-summer-2021-cloudanix",
      "name": "Cloudanix",
      "slug": "cloudanix",
      "batch": "Summer 2021",
      "launched_on": "2021-07-07",
      "description": "Cloud and Container Security Platform",
      "industry": "B2B",
      "tags": [
        "Cloud Workload Protection",
        "DevSecOps",
        "Identity",
        "Security"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://www.cloudanix.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/cloudanix"
    },
    {
      "id": "yc-summer-2021-cloudthread",
      "name": "Cloudthread",
      "slug": "cloudthread",
      "batch": "Summer 2021",
      "launched_on": "2021-08-06",
      "description": "Eliminate Cloud Waste. Attribute and Track Savings. Engage Engineers.",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "FinOps",
        "B2B",
        "Workflow Automation",
        "Cloud Computing"
      ],
      "status": "Acquired",
      "team_size": 8,
      "website": "https://cloudthread.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/cloudthread"
    },
    {
      "id": "yc-summer-2021-coast",
      "name": "Coast",
      "slug": "coast",
      "batch": "Summer 2021",
      "launched_on": "2022-03-17",
      "description": "Demo Platform for API-First Companies",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Sales",
        "Sales Enablement",
        "API"
      ],
      "status": "Active",
      "team_size": 35,
      "website": "https://trycoast.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/coast"
    },
    {
      "id": "yc-summer-2021-cococart",
      "name": "Cococart",
      "slug": "cococart",
      "batch": "Summer 2021",
      "launched_on": "2021-07-27",
      "description": "Empowering local businesses to sell online.",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 18,
      "website": "https://www.cococart.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/cococart"
    },
    {
      "id": "yc-summer-2021-coinrule",
      "name": "Coinrule",
      "slug": "coinrule",
      "batch": "Summer 2021",
      "launched_on": "2021-08-12",
      "description": "Coinrule Automates Your Crypto and Stock Investments",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Crypto / Web3",
        "Trading",
        "AI",
        "Stocks"
      ],
      "status": "Active",
      "team_size": 7,
      "website": "https://coinrule.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/coinrule"
    },
    {
      "id": "yc-summer-2021-coloop",
      "name": "CoLoop",
      "slug": "coloop",
      "batch": "Summer 2021",
      "launched_on": "2021-07-20",
      "description": "AI Copilot for insights & strategy",
      "industry": "B2B",
      "tags": [
        "Generative AI",
        "Market Research"
      ],
      "status": "Active",
      "team_size": 16,
      "website": "https://coloop.ai/",
      "yc_profile_url": "https://www.ycombinator.com/companies/coloop"
    },
    {
      "id": "yc-summer-2021-comet-health",
      "name": "Comet Health",
      "slug": "comet-health",
      "batch": "Summer 2021",
      "launched_on": "2021-07-26",
      "description": "Digital platform for pelvic floor physical therapy",
      "industry": "Healthcare",
      "tags": [
        "Consumer Health Services",
        "Telemedicine"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "https://trycomet.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/comet-health"
    },
    {
      "id": "yc-summer-2021-commery",
      "name": "Commery",
      "slug": "commery",
      "batch": "Summer 2021",
      "launched_on": "2021-08-19",
      "description": "Marketplace to lease commercial real estate",
      "industry": "Real Estate and Construction",
      "tags": [
        "Marketplace",
        "Proptech"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "http://trycommery.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/commery"
    },
    {
      "id": "yc-summer-2021-concord-materials",
      "name": "Concord Materials",
      "slug": "concord-materials",
      "batch": "Summer 2021",
      "launched_on": "2021-08-25",
      "description": "Automating procurement and finance for construction companies",
      "industry": "Real Estate and Construction",
      "tags": [
        "Fintech",
        "Machine Learning",
        "Marketplace",
        "Insurance",
        "Enterprise"
      ],
      "status": "Active",
      "team_size": 7,
      "website": "https://concordmaterials.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/concord-materials"
    },
    {
      "id": "yc-summer-2021-confido",
      "name": "Confido",
      "slug": "confido",
      "batch": "Summer 2021",
      "launched_on": "2021-07-30",
      "description": "AI-enabled financial automation and intelligence for CPG Brands",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Fintech",
        "SaaS",
        "B2B",
        "Analytics"
      ],
      "status": "Active",
      "team_size": 28,
      "website": "https://www.confidotech.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/confido"
    },
    {
      "id": "yc-summer-2021-contalink",
      "name": "Contalink",
      "slug": "contalink",
      "batch": "Summer 2021",
      "launched_on": "2021-07-07",
      "description": "We help Accountants automate work and serve their customers online",
      "industry": "B2B",
      "tags": [],
      "status": "Active",
      "team_size": 75,
      "website": "https://www.contalink.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/contalink"
    },
    {
      "id": "yc-summer-2021-contraforce",
      "name": "ContraForce",
      "slug": "contraforce",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "Security Delivery Platform to orchestrate AI agents for Service…",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Security",
        "AI"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://www.contraforce.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/contraforce"
    },
    {
      "id": "yc-summer-2021-coulomb-ai",
      "name": "Coulomb AI",
      "slug": "coulomb-ai",
      "batch": "Summer 2021",
      "launched_on": "2021-08-06",
      "description": "Battery Observability Platform for Electric Vehicles",
      "industry": "B2B",
      "tags": [
        "Climate",
        "Electric Vehicles",
        "AI"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://coulomb.ai/",
      "yc_profile_url": "https://www.ycombinator.com/companies/coulomb-ai"
    },
    {
      "id": "yc-summer-2021-covie",
      "name": "Covie",
      "slug": "covie",
      "batch": "Summer 2021",
      "launched_on": "2021-06-24",
      "description": "Programmatic building blocks for transacting with insurance",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Health Tech",
        "Insurance"
      ],
      "status": "Inactive",
      "team_size": 14,
      "website": "https://www.covie.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/covie"
    },
    {
      "id": "yc-summer-2021-crew",
      "name": "Crew",
      "slug": "crew",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "Next Gen ATS/CRM for Modern Recruitment Agencies",
      "industry": "B2B",
      "tags": [
        "Recruiting",
        "Sales Enablement",
        "Talent Acquisition",
        "CRM"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "https://crew.work/",
      "yc_profile_url": "https://www.ycombinator.com/companies/crew"
    },
    {
      "id": "yc-summer-2021-cumbuca",
      "name": "Cumbuca",
      "slug": "cumbuca",
      "batch": "Summer 2021",
      "launched_on": "2021-08-27",
      "description": "Bare-metal access to Brazil's Open Finance and Pix systems",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "B2B",
        "API",
        "Infrastructure"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://www.cumbuca.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/cumbuca"
    },
    {
      "id": "yc-summer-2021-customily",
      "name": "Customily",
      "slug": "customily",
      "batch": "Summer 2021",
      "launched_on": "2021-08-02",
      "description": "Making it easy to sell personalized products online.",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 30,
      "website": "http://www.customily.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/customily"
    },
    {
      "id": "yc-summer-2021-dailybot",
      "name": "Dailybot",
      "slug": "dailybot",
      "batch": "Summer 2021",
      "launched_on": "2021-06-30",
      "description": "Make all team work visible — people and AI agents",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Developer Tools",
        "SaaS",
        "Collaboration",
        "AI Assistant"
      ],
      "status": "Active",
      "team_size": 11,
      "website": "https://www.dailybot.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/dailybot"
    },
    {
      "id": "yc-summer-2021-datlo",
      "name": "Datlo",
      "slug": "datlo",
      "batch": "Summer 2021",
      "launched_on": "2021-08-18",
      "description": "Datlo helps companies increase sales and expand through data",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Geographic Information System",
        "B2B"
      ],
      "status": "Active",
      "team_size": 60,
      "website": "https://www.datlo.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/datlo"
    },
    {
      "id": "yc-summer-2021-deed",
      "name": "Deed",
      "slug": "deed",
      "batch": "Summer 2021",
      "launched_on": "2021-07-02",
      "description": "Making it easy for employees to donate and volunteer with good causes.",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Enterprise"
      ],
      "status": "Acquired",
      "team_size": 40,
      "website": "https://www.joindeed.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/deed"
    },
    {
      "id": "yc-summer-2021-deskimo",
      "name": "Deskimo",
      "slug": "deskimo",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "Workspaces on demand, paid by the minute.",
      "industry": "B2B",
      "tags": [
        "Marketplace",
        "SaaS",
        "Proptech"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "http://www.deskimo.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/deskimo"
    },
    {
      "id": "yc-summer-2021-digibuild",
      "name": "DigiBuild",
      "slug": "digibuild",
      "batch": "Summer 2021",
      "launched_on": "2021-07-13",
      "description": "We buy & track building materials for construction companies.",
      "industry": "Real Estate and Construction",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "Supply Chain",
        "AI",
        "ML"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://digibuild.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/digibuild"
    },
    {
      "id": "yc-summer-2021-digistain",
      "name": "Digistain",
      "slug": "digistain",
      "batch": "Summer 2021",
      "launched_on": "2021-06-25",
      "description": "Pioneering Breast Cancer Diagnostics for a Healthier Tomorrow",
      "industry": "Healthcare",
      "tags": [
        "Medical Devices"
      ],
      "status": "Active",
      "team_size": 40,
      "website": "https://digistain.co.uk/",
      "yc_profile_url": "https://www.ycombinator.com/companies/digistain"
    },
    {
      "id": "yc-summer-2021-dime",
      "name": "Dime",
      "slug": "dime",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "Instant E2E tests for your website",
      "industry": "B2B",
      "tags": [],
      "status": "Inactive",
      "team_size": 2,
      "website": "https://www.dime.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/dime"
    },
    {
      "id": "yc-summer-2021-dots-2",
      "name": "Dots 💸",
      "slug": "dots-2",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "Developer friendly drop in payouts infrastructure",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Payments",
        "API",
        "Creator Economy"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://usedots.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/dots-2"
    },
    {
      "id": "yc-summer-2021-doublehq",
      "name": "Double",
      "slug": "doublehq",
      "batch": "Summer 2021",
      "launched_on": "2021-07-23",
      "description": "We make software for bookkeepers.",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 80,
      "website": "https://www.doublehq.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/doublehq"
    },
    {
      "id": "yc-summer-2021-echoes-hq",
      "name": "Echoes HQ",
      "slug": "echoes-hq",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "Measure and communicate engineering activity",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "https://echoeshq.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/echoes-hq"
    },
    {
      "id": "yc-summer-2021-encuadrado",
      "name": "Encuadrado",
      "slug": "encuadrado",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "Payments and scheduling for services professionals in LATAM",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "Marketplace",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "https://www.encuadrado.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/encuadrado"
    },
    {
      "id": "yc-summer-2021-endla",
      "name": "Endla",
      "slug": "endla",
      "batch": "Summer 2021",
      "launched_on": "2021-06-30",
      "description": "Software that increases the value of oil & gas wells",
      "industry": "B2B",
      "tags": [
        "Analytics",
        "Energy",
        "Big Data"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://endla.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/endla"
    },
    {
      "id": "yc-summer-2021-enerjazz",
      "name": "Enerjazz",
      "slug": "enerjazz",
      "batch": "Summer 2021",
      "launched_on": "2021-08-04",
      "description": "Making electric vehicle batteries affordable ",
      "industry": "Industrials",
      "tags": [
        "Climate"
      ],
      "status": "Active",
      "team_size": 9,
      "website": "https://www.enerjazz.tech/",
      "yc_profile_url": "https://www.ycombinator.com/companies/enerjazz"
    },
    {
      "id": "yc-summer-2021-enso",
      "name": "Enso",
      "slug": "enso",
      "batch": "Summer 2021",
      "launched_on": "2021-06-25",
      "description": "Self-Service Data Prep and Blend Built for Data Teams.",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Open Source"
      ],
      "status": "Active",
      "team_size": 20,
      "website": "https://ensoanalytics.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/enso"
    },
    {
      "id": "yc-summer-2021-epinoma",
      "name": "Epinoma",
      "slug": "epinoma",
      "batch": "Summer 2021",
      "launched_on": "2021-08-24",
      "description": "We engineer proteins that control the operating system of biology. ",
      "industry": "Healthcare",
      "tags": [
        "Synthetic Biology",
        "Biotech"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://www.epinoma.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/epinoma"
    },
    {
      "id": "yc-summer-2021-epsilon3-inc",
      "name": "Epsilon3",
      "slug": "epsilon3-inc",
      "batch": "Summer 2021",
      "launched_on": "2021-06-30",
      "description": "AI-Powered ERP, MES, and Test Software for Complex Operations",
      "industry": "B2B",
      "tags": [
        "Commercial Space Launch",
        "SaaS",
        "Space Exploration",
        "B2B",
        "Enterprise Software"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://www.epsilon3.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/epsilon3-inc"
    },
    {
      "id": "yc-summer-2021-equipt-health",
      "name": "Equipt Health",
      "slug": "equipt-health",
      "batch": "Summer 2021",
      "launched_on": "2021-10-30",
      "description": "Home medical equipment, prescribed online and delivered.",
      "industry": "Healthcare",
      "tags": [
        "Sleep Tech",
        "Consumer Health Services",
        "Digital Health",
        "Telemedicine"
      ],
      "status": "Active",
      "team_size": null,
      "website": "http://www.equipthealth.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/equipt-health"
    },
    {
      "id": "yc-summer-2021-evidence",
      "name": "Evidence",
      "slug": "evidence",
      "batch": "Summer 2021",
      "launched_on": "2021-08-03",
      "description": "Business intelligence as code",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "B2B",
        "Analytics",
        "Data Engineering",
        "Data Visualization"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "https://www.evidence.dev",
      "yc_profile_url": "https://www.ycombinator.com/companies/evidence"
    },
    {
      "id": "yc-summer-2021-evidently-ai",
      "name": "Evidently AI",
      "slug": "evidently-ai",
      "batch": "Summer 2021",
      "launched_on": "2021-07-07",
      "description": "Open-source monitoring for machine learning models",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "Machine Learning",
        "B2B",
        "Open Source"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://evidentlyai.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/evidently-ai"
    },
    {
      "id": "yc-summer-2021-exa",
      "name": "Exa",
      "slug": "exa",
      "batch": "Summer 2021",
      "launched_on": "2021-08-06",
      "description": "Web search rebuilt for LLMs",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "Search",
        "AI",
        "APIs"
      ],
      "status": "Active",
      "team_size": 75,
      "website": "https://exa.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/exa"
    },
    {
      "id": "yc-summer-2021-examedi",
      "name": "Examedi",
      "slug": "examedi",
      "batch": "Summer 2021",
      "launched_on": "2021-07-06",
      "description": "Uber for Healthcare in Latinamerica",
      "industry": "Healthcare",
      "tags": [
        "Marketplace",
        "Consumer Health Services"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "https://www.examedi.cl",
      "yc_profile_url": "https://www.ycombinator.com/companies/examedi"
    },
    {
      "id": "yc-summer-2021-fastfarma",
      "name": "FastFarma",
      "slug": "fastfarma",
      "batch": "Summer 2021",
      "launched_on": "2021-07-07",
      "description": "Digital pharmacy for Latam, that saves you money and time.",
      "industry": "Healthcare",
      "tags": [
        "E-commerce"
      ],
      "status": "Inactive",
      "team_size": 8,
      "website": "http://www.fastfarma.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/fastfarma"
    },
    {
      "id": "yc-summer-2021-female-invest",
      "name": "Female Invest",
      "slug": "female-invest",
      "batch": "Summer 2021",
      "launched_on": "2021-06-19",
      "description": "Female Invest is a social e-learning app for finance and investing ",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "eLearning",
        "Investing"
      ],
      "status": "Active",
      "team_size": 20,
      "website": "https://www.femaleinvest.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/female-invest"
    },
    {
      "id": "yc-summer-2021-ferveret-inc",
      "name": "Ferveret",
      "slug": "ferveret-inc",
      "batch": "Summer 2021",
      "launched_on": "2021-08-11",
      "description": "Liquid cooling solutions inspired by nuclear reactor cooling",
      "industry": "Industrials",
      "tags": [
        "Hardware",
        "Climate",
        "Energy"
      ],
      "status": "Active",
      "team_size": 13,
      "website": "http://www.ferveret.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/ferveret-inc"
    },
    {
      "id": "yc-summer-2021-filadd",
      "name": "Filadd",
      "slug": "filadd",
      "batch": "Summer 2021",
      "launched_on": "2021-06-24",
      "description": "We help students in Latin America graduate from College.",
      "industry": "Education",
      "tags": [
        "Education",
        "eLearning",
        "Community"
      ],
      "status": "Active",
      "team_size": 100,
      "website": "https://filadd.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/filadd"
    },
    {
      "id": "yc-summer-2021-filta",
      "name": "Filta",
      "slug": "filta",
      "batch": "Summer 2021",
      "launched_on": "2021-07-27",
      "description": "The Face Filter NFT Marketplace",
      "industry": "Consumer",
      "tags": [
        "Augmented Reality",
        "Crypto / Web3",
        "Virtual Reality"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "http://www.getfilta.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/filta"
    },
    {
      "id": "yc-summer-2021-fingo-africa",
      "name": "Fingo Africa",
      "slug": "fingo-africa",
      "batch": "Summer 2021",
      "launched_on": "2021-08-28",
      "description": "A neobank for Africa's 500 million youth",
      "industry": "Fintech",
      "tags": [
        "Neobank"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://fingo.africa",
      "yc_profile_url": "https://www.ycombinator.com/companies/fingo-africa"
    },
    {
      "id": "yc-summer-2021-firstignite",
      "name": "FirstIgnite",
      "slug": "firstignite",
      "batch": "Summer 2021",
      "launched_on": "2021-06-25",
      "description": "AI-Powered Business Development for Scientific Organizations",
      "industry": "B2B",
      "tags": [],
      "status": "Acquired",
      "team_size": 9,
      "website": "https://firstignite.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/firstignite"
    },
    {
      "id": "yc-summer-2021-firstquadrant",
      "name": "FirstQuadrant",
      "slug": "firstquadrant",
      "batch": "Summer 2021",
      "launched_on": "2021-08-01",
      "description": "Sales AI that helps revenue teams move faster and close more deals.",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "Sales",
        "Sales Enablement",
        "AI"
      ],
      "status": "Inactive",
      "team_size": 2,
      "website": "https://firstquadrant.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/firstquadrant"
    },
    {
      "id": "yc-summer-2021-fitia",
      "name": "Fitia",
      "slug": "fitia",
      "batch": "Summer 2021",
      "launched_on": "2021-07-01",
      "description": "Automated Meal Planner & Nutrition Tracking",
      "industry": "Healthcare",
      "tags": [
        "Consumer",
        "Fitness",
        "Health & Wellness"
      ],
      "status": "Active",
      "team_size": 26,
      "website": "https://fitia.app/",
      "yc_profile_url": "https://www.ycombinator.com/companies/fitia"
    },
    {
      "id": "yc-summer-2021-float",
      "name": "Float",
      "slug": "float",
      "batch": "Summer 2021",
      "launched_on": "2021-08-28",
      "description": "Supply chain finance for consumer brands",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "B2B",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://float.xyz",
      "yc_profile_url": "https://www.ycombinator.com/companies/float"
    },
    {
      "id": "yc-summer-2021-floatpays-inc",
      "name": "Floatpays Inc",
      "slug": "floatpays-inc",
      "batch": "Summer 2021",
      "launched_on": "2021-06-23",
      "description": "On-demand wage access service built for the African market",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://www.floatpays.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/floatpays-inc"
    },
    {
      "id": "yc-summer-2021-flow-club",
      "name": "Flow Club",
      "slug": "flow-club",
      "batch": "Summer 2021",
      "launched_on": "2021-07-30",
      "description": "Virtual Co-working Community",
      "industry": "B2B",
      "tags": [
        "Consumer",
        "Community",
        "Productivity",
        "Health & Wellness",
        "Remote Work"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "https://www.flow.club/",
      "yc_profile_url": "https://www.ycombinator.com/companies/flow-club"
    },
    {
      "id": "yc-summer-2021-flowbo-inc",
      "name": "Flowbo",
      "slug": "flowbo-inc",
      "batch": "Summer 2021",
      "launched_on": "2021-06-21",
      "description": "Pipe for online businesses",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Marketplace",
        "Creator Economy"
      ],
      "status": "Inactive",
      "team_size": 2,
      "website": "https://www.flowbo.co/",
      "yc_profile_url": "https://www.ycombinator.com/companies/flowbo-inc"
    },
    {
      "id": "yc-summer-2021-flowly",
      "name": "Flowly",
      "slug": "flowly",
      "batch": "Summer 2021",
      "launched_on": "2021-06-28",
      "description": "Our mobile app reduces chronic pain for 100 million Americans. ",
      "industry": "Healthcare",
      "tags": [
        "Health Tech"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "https://www.flowly.world/",
      "yc_profile_url": "https://www.ycombinator.com/companies/flowly"
    },
    {
      "id": "yc-summer-2021-fluke",
      "name": "fluke",
      "slug": "fluke",
      "batch": "Summer 2021",
      "launched_on": "2021-08-03",
      "description": "fluke is a full-digital mobile operator in Brazil",
      "industry": "B2B",
      "tags": [
        "B2B",
        "Telecommunications"
      ],
      "status": "Active",
      "team_size": 26,
      "website": "https://flu.ke/",
      "yc_profile_url": "https://www.ycombinator.com/companies/fluke"
    },
    {
      "id": "yc-summer-2021-forage-2",
      "name": "Forage",
      "slug": "forage-2",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "Payments infrastructure for government benefits",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "GovTech",
        "Payments"
      ],
      "status": "Active",
      "team_size": 66,
      "website": "http://www.joinforage.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/forage-2"
    },
    {
      "id": "yc-summer-2021-forage-mail",
      "name": "Forage Mail",
      "slug": "forage-mail",
      "batch": "Summer 2021",
      "launched_on": "2021-08-27",
      "description": "AI that solves email overwhelm. Not another mail app.",
      "industry": "Consumer",
      "tags": [
        "Consumer",
        "Productivity",
        "Email",
        "AI",
        "AI Assistant"
      ],
      "status": "Inactive",
      "team_size": 4,
      "website": "https://foragemail.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/forage-mail"
    },
    {
      "id": "yc-summer-2021-formance",
      "name": "Formance",
      "slug": "formance",
      "batch": "Summer 2021",
      "launched_on": "2021-07-16",
      "description": "Open Source Infrastructure for the Financial Internet",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "Fintech",
        "Payments",
        "B2B",
        "Open Source"
      ],
      "status": "Active",
      "team_size": 30,
      "website": "https://formance.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/formance"
    },
    {
      "id": "yc-summer-2021-freterium",
      "name": "Freterium",
      "slug": "freterium",
      "batch": "Summer 2021",
      "launched_on": "2021-06-22",
      "description": "Real-Time Collaborative Transport Management Platform",
      "industry": "B2B",
      "tags": [
        "Logistics",
        "Supply Chain"
      ],
      "status": "Active",
      "team_size": 21,
      "website": "https://www.freterium.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/freterium"
    },
    {
      "id": "yc-summer-2021-frontpage",
      "name": "FrontPage",
      "slug": "frontpage",
      "batch": "Summer 2021",
      "launched_on": "2021-07-28",
      "description": "Community for 100M Indian Financial Market Traders & Investors",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Community"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://front.page",
      "yc_profile_url": "https://www.ycombinator.com/companies/frontpage"
    },
    {
      "id": "yc-summer-2021-gamerpay",
      "name": "GamerPay",
      "slug": "gamerpay",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "We are the marketplace for trading gaming skins & assets without scams",
      "industry": "Consumer",
      "tags": [
        "Fintech",
        "Marketplace",
        "Gaming"
      ],
      "status": "Acquired",
      "team_size": 6,
      "website": "https://gamerpay.gg",
      "yc_profile_url": "https://www.ycombinator.com/companies/gamerpay"
    },
    {
      "id": "yc-summer-2021-genomelink",
      "name": "Genomelink",
      "slug": "genomelink",
      "batch": "Summer 2021",
      "launched_on": "2021-06-23",
      "description": "DNA App Store",
      "industry": "Healthcare",
      "tags": [
        "Consumer Health Services",
        "Genomics"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://genomelink.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/genomelink"
    },
    {
      "id": "yc-summer-2021-genuity",
      "name": "Genuity",
      "slug": "genuity",
      "batch": "Summer 2021",
      "launched_on": "2021-07-29",
      "description": "SaaS Platform to manage IT and buy business software ",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Enterprise Software"
      ],
      "status": "Active",
      "team_size": 31,
      "website": "https://gogenuity.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/genuity"
    },
    {
      "id": "yc-summer-2021-geostar",
      "name": "Geostar",
      "slug": "geostar",
      "batch": "Summer 2021",
      "launched_on": "2021-07-06",
      "description": "Geostar drives inbound for companies through search.",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Sales",
        "Sales Enablement",
        "Market Research"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://www.geostar.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/geostar"
    },
    {
      "id": "yc-summer-2021-getdot",
      "name": "GetDot",
      "slug": "getdot",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "Your AI Data Analyst",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Analytics",
        "Enterprise",
        "AI"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "https://getdot.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/getdot"
    },
    {
      "id": "yc-summer-2021-glitzi",
      "name": "Glitzi",
      "slug": "glitzi",
      "batch": "Summer 2021",
      "launched_on": "2021-06-20",
      "description": "At-home spa, beauty & grooming services marketplace for LatAm",
      "industry": "Consumer",
      "tags": [
        "Marketplace",
        "Beauty",
        "Health & Wellness"
      ],
      "status": "Active",
      "team_size": 33,
      "website": "https://glitzi.com.mx/",
      "yc_profile_url": "https://www.ycombinator.com/companies/glitzi"
    },
    {
      "id": "yc-summer-2021-gobillion",
      "name": "Gobillion",
      "slug": "gobillion",
      "batch": "Summer 2021",
      "launched_on": "2021-08-05",
      "description": "Pinduoduo for India",
      "industry": "Consumer",
      "tags": [
        "E-commerce"
      ],
      "status": "Inactive",
      "team_size": 10,
      "website": "https://gobillion.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/gobillion"
    },
    {
      "id": "yc-summer-2021-goodkind",
      "name": "Goodkind",
      "slug": "goodkind",
      "batch": "Summer 2021",
      "launched_on": "2021-07-09",
      "description": "Student communications platform for higher education",
      "industry": "B2B",
      "tags": [
        "Education",
        "SaaS",
        "B2B",
        "Video"
      ],
      "status": "Acquired",
      "team_size": 30,
      "website": "https://www.goodkind.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/goodkind"
    },
    {
      "id": "yc-summer-2021-govly",
      "name": "Govly",
      "slug": "govly",
      "batch": "Summer 2021",
      "launched_on": "2021-07-08",
      "description": "The #1 Market Network for Government Contractors.",
      "industry": "Government",
      "tags": [
        "SaaS",
        "GovTech"
      ],
      "status": "Active",
      "team_size": 30,
      "website": "https://www.govly.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/govly"
    },
    {
      "id": "yc-summer-2021-harmonic-discovery",
      "name": "Harmonic Discovery",
      "slug": "harmonic-discovery",
      "batch": "Summer 2021",
      "launched_on": "2022-03-26",
      "description": "Multi-targeted therapeutics to treat complex diseases",
      "industry": "Healthcare",
      "tags": [
        "AI-powered Drug Discovery",
        "Biotech",
        "Healthcare",
        "Drug discovery"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "http://harmonicdiscovery.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/harmonic-discovery"
    },
    {
      "id": "yc-summer-2021-hedgehog",
      "name": "Hedgehog",
      "slug": "hedgehog",
      "batch": "Summer 2021",
      "launched_on": "2021-07-06",
      "description": "Cryptocurrency Robo-adviser. Buy. Balance. Relax.",
      "industry": "Fintech",
      "tags": [
        "DeFi",
        "Fintech",
        "Crypto / Web3"
      ],
      "status": "Inactive",
      "team_size": 5,
      "website": "https://hedgehog.app",
      "yc_profile_url": "https://www.ycombinator.com/companies/hedgehog"
    },
    {
      "id": "yc-summer-2021-heimdal",
      "name": "Heimdal",
      "slug": "heimdal",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "Affordable and verified direct air carbon capture and storage",
      "industry": "Industrials",
      "tags": [
        "Carbon Capture and Removal",
        "Climate"
      ],
      "status": "Inactive",
      "team_size": 12,
      "website": "https://www.heimdalccu.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/heimdal"
    },
    {
      "id": "yc-summer-2021-heo-robotics",
      "name": "HEO Robotics",
      "slug": "heo-robotics",
      "batch": "Summer 2021",
      "launched_on": "2021-07-28",
      "description": "We visually monitor space objects for governments and defense",
      "industry": "Industrials",
      "tags": [
        "Space Exploration",
        "Aerospace",
        "Defense"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "https://www.heo-robotics.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/heo-robotics"
    },
    {
      "id": "yc-summer-2021-hera",
      "name": "Hera",
      "slug": "hera",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "Calendar app to prepare, join and follow-up on virtual meetings",
      "industry": "B2B",
      "tags": [
        "Productivity",
        "Calendar"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "https://hera.so",
      "yc_profile_url": "https://www.ycombinator.com/companies/hera"
    },
    {
      "id": "yc-summer-2021-heycharge",
      "name": "HeyCharge",
      "slug": "heycharge",
      "batch": "Summer 2021",
      "launched_on": "2021-07-25",
      "description": "Low-cost, high-scale EV charging platform for apartments (and more).",
      "industry": "Industrials",
      "tags": [
        "Climate"
      ],
      "status": "Active",
      "team_size": 17,
      "website": "https://heycharge.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/heycharge"
    },
    {
      "id": "yc-summer-2021-hirebolt",
      "name": "Hirebolt",
      "slug": "hirebolt",
      "batch": "Summer 2021",
      "launched_on": "2021-08-05",
      "description": "AI engineering capacity. Made simple. ⚡️",
      "industry": "B2B",
      "tags": [
        "Recruiting",
        "HR Tech"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "https://hirebolt.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/hirebolt"
    },
    {
      "id": "yc-summer-2021-hitpay",
      "name": "HitPay",
      "slug": "hitpay",
      "batch": "Summer 2021",
      "launched_on": "2021-07-27",
      "description": "Payments infrastructure for businesses scaling in APAC",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Payments"
      ],
      "status": "Active",
      "team_size": 35,
      "website": "https://www.hitpayapp.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/hitpay"
    },
    {
      "id": "yc-summer-2021-hive-health",
      "name": "Hive Health",
      "slug": "hive-health",
      "batch": "Summer 2021",
      "launched_on": "2021-08-02",
      "description": "Simplified digital health insurance for Filipino SMBs",
      "industry": "Healthcare",
      "tags": [
        "Fintech",
        "Payments",
        "Telehealth",
        "Digital Health",
        "Health Insurance"
      ],
      "status": "Active",
      "team_size": null,
      "website": "https://www.ourhivehealth.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/hive-health"
    },
    {
      "id": "yc-summer-2021-hotglue",
      "name": "hotglue",
      "slug": "hotglue",
      "batch": "Summer 2021",
      "launched_on": "2021-07-05",
      "description": "Native user-facing SaaS integrations for your customers",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 13,
      "website": "https://hotglue.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/hotglue"
    },
    {
      "id": "yc-summer-2021-hudson-labs",
      "name": "Hudson Labs (formerly Bedrock AI)",
      "slug": "hudson-labs",
      "batch": "Summer 2021",
      "launched_on": "2021-07-02",
      "description": "AI-powered equity research software",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Fintech",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://www.hudson-labs.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/hudson-labs"
    },
    {
      "id": "yc-summer-2021-humane-genomics",
      "name": "Humane Genomics",
      "slug": "humane-genomics",
      "batch": "Summer 2021",
      "launched_on": "2021-07-21",
      "description": "A platform to make artificial viruses as cancer therapeutics.",
      "industry": "Healthcare",
      "tags": [
        "Hard Tech",
        "Synthetic Biology"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://humanegenomics.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/humane-genomics"
    },
    {
      "id": "yc-summer-2021-hyper",
      "name": "Hyper",
      "slug": "hyper",
      "batch": "Summer 2021",
      "launched_on": "2021-08-18",
      "description": "Sell memberships to your Discord server",
      "industry": "Fintech",
      "tags": [
        "SaaS",
        "Payments",
        "Community"
      ],
      "status": "Acquired",
      "team_size": 6,
      "website": "https://hyper.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/hyper"
    },
    {
      "id": "yc-summer-2021-hyperbrowser",
      "name": "Hyperbrowser",
      "slug": "hyperbrowser",
      "batch": "Summer 2021",
      "launched_on": "2021-08-05",
      "description": "Web infra for AI agents",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "B2B",
        "AI"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://hyperbrowser.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/hyperbrowser"
    },
    {
      "id": "yc-summer-2021-hypercontext",
      "name": "Hypercontext",
      "slug": "hypercontext",
      "batch": "Summer 2021",
      "launched_on": "2021-06-30",
      "description": "Meeting agendas, notes, & goals that tie back to your OKRs",
      "industry": "B2B",
      "tags": [
        "Productivity"
      ],
      "status": "Inactive",
      "team_size": 15,
      "website": "https://hypercontext.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/hypercontext"
    },
    {
      "id": "yc-summer-2021-hypercore",
      "name": "Hypercore",
      "slug": "hypercore",
      "batch": "Summer 2021",
      "launched_on": "2021-08-06",
      "description": "Loan management software for private lenders",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 7,
      "website": "https://www.hypercore.ai/",
      "yc_profile_url": "https://www.ycombinator.com/companies/hypercore"
    },
    {
      "id": "yc-summer-2021-hyperseed",
      "name": "Hyperseed",
      "slug": "hyperseed",
      "batch": "Summer 2021",
      "launched_on": "2021-07-08",
      "description": "Zapier for billing",
      "industry": "B2B",
      "tags": [
        "FinOps",
        "Fintech",
        "SaaS",
        "Finance",
        "B2B"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "https://hyperseed.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/hyperseed"
    },
    {
      "id": "yc-summer-2021-hypertrader",
      "name": "HyperTrader",
      "slug": "hypertrader",
      "batch": "Summer 2021",
      "launched_on": "2021-07-12",
      "description": "The Trading Terminal For Crypto Traders",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "SaaS",
        "Crypto / Web3",
        "Investing"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://gethypertrader.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/hypertrader"
    },
    {
      "id": "yc-summer-2021-idemeum",
      "name": "idemeum",
      "slug": "idemeum",
      "batch": "Summer 2021",
      "launched_on": "2021-07-21",
      "description": "AI-powered Application Control",
      "industry": "B2B",
      "tags": [
        "B2B",
        "Security"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://www.idemeum.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/idemeum"
    },
    {
      "id": "yc-summer-2021-inai",
      "name": "inai",
      "slug": "inai",
      "batch": "Summer 2021",
      "launched_on": "2021-07-18",
      "description": "Segment for global payments",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "SaaS"
      ],
      "status": "Acquired",
      "team_size": 14,
      "website": "https://www.inai.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/inai"
    },
    {
      "id": "yc-summer-2021-infer",
      "name": "Infer",
      "slug": "infer",
      "batch": "Summer 2021",
      "launched_on": "2021-07-30",
      "description": "Operating system for insurance agencies",
      "industry": "B2B",
      "tags": [],
      "status": "Active",
      "team_size": 9,
      "website": "https://www.infer.so/",
      "yc_profile_url": "https://www.ycombinator.com/companies/infer"
    },
    {
      "id": "yc-summer-2021-infina",
      "name": "Infina",
      "slug": "infina",
      "batch": "Summer 2021",
      "launched_on": "2021-08-21",
      "description": "Leading wealth management and investing platform in Vietnam",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Investing"
      ],
      "status": "Active",
      "team_size": 50,
      "website": "http://infina.vn",
      "yc_profile_url": "https://www.ycombinator.com/companies/infina"
    },
    {
      "id": "yc-summer-2021-infiuss-health",
      "name": "Infiuss Health",
      "slug": "infiuss-health",
      "batch": "Summer 2021",
      "launched_on": "2021-07-08",
      "description": "2 sided Marketplace for accelerating medical research",
      "industry": "B2B",
      "tags": [
        "Marketplace",
        "B2B"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://infiuss.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/infiuss-health"
    },
    {
      "id": "yc-summer-2021-inflow",
      "name": "Inflow",
      "slug": "inflow",
      "batch": "Summer 2021",
      "launched_on": "2021-08-27",
      "description": "A self-help app for people to manage their ADHD.",
      "industry": "Healthcare",
      "tags": [
        "Mental Health Tech",
        "Consumer Health Services"
      ],
      "status": "Acquired",
      "team_size": 20,
      "website": "https://getinflow.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/inflow"
    },
    {
      "id": "yc-summer-2021-instacrops",
      "name": "Instacrops",
      "slug": "instacrops",
      "batch": "Summer 2021",
      "launched_on": "2021-06-23",
      "description": "Helping farmers maximize crop yield",
      "industry": "Industrials",
      "tags": [
        "Sustainability",
        "Agriculture"
      ],
      "status": "Active",
      "team_size": 34,
      "website": "https://www.instacrops.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/instacrops"
    },
    {
      "id": "yc-summer-2021-instakin",
      "name": "InstaKin",
      "slug": "instakin",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "Financial Platform for Migrant Families in America",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Consumer",
        "Neobank"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://instakin.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/instakin"
    },
    {
      "id": "yc-summer-2021-intellect",
      "name": "Intellect",
      "slug": "intellect",
      "batch": "Summer 2021",
      "launched_on": "2021-08-23",
      "description": "A modern-day mental healthcare company for global workforces.",
      "industry": "Healthcare",
      "tags": [
        "Digital Health",
        "Healthcare",
        "Health Insurance",
        "Health & Wellness",
        "Mental Health"
      ],
      "status": "Active",
      "team_size": 200,
      "website": "https://intellect.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/intellect"
    },
    {
      "id": "yc-summer-2021-inversion-space",
      "name": "Inversion Space",
      "slug": "inversion-space",
      "batch": "Summer 2021",
      "launched_on": "2021-08-19",
      "description": "Turning space into a transportation layer for Earth",
      "industry": "Industrials",
      "tags": [
        "Hard Tech",
        "Hardware",
        "Transportation",
        "Aerospace"
      ],
      "status": "Active",
      "team_size": 28,
      "website": "https://www.inversionspace.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/inversion-space"
    },
    {
      "id": "yc-summer-2021-ivella",
      "name": "Ivella",
      "slug": "ivella",
      "batch": "Summer 2021",
      "launched_on": "2021-06-18",
      "description": "Banking and savings products designed for couples",
      "industry": "Fintech",
      "tags": [
        "Banking as a Service",
        "Fintech",
        "Consumer Finance"
      ],
      "status": "Inactive",
      "team_size": 8,
      "website": "https://www.ivella.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/ivella"
    },
    {
      "id": "yc-summer-2021-ivy-homes",
      "name": "Ivy Homes",
      "slug": "ivy-homes",
      "batch": "Summer 2021",
      "launched_on": "2021-08-03",
      "description": "We make instant offers to buy homes in India",
      "industry": "Real Estate and Construction",
      "tags": [
        "Proptech"
      ],
      "status": "Active",
      "team_size": 80,
      "website": "https://ivy.homes",
      "yc_profile_url": "https://www.ycombinator.com/companies/ivy-homes"
    },
    {
      "id": "yc-summer-2021-jabu",
      "name": "JABU",
      "slug": "jabu",
      "batch": "Summer 2021",
      "launched_on": "2022-01-06",
      "description": "B2B payments, transforming Africa's cash economy",
      "industry": "Fintech",
      "tags": [],
      "status": "Active",
      "team_size": 40,
      "website": "http://www.gojabu.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/jabu"
    },
    {
      "id": "yc-summer-2021-jestor",
      "name": "Jestor",
      "slug": "jestor",
      "batch": "Summer 2021",
      "launched_on": "2021-07-17",
      "description": "Jestor is a no-code platform for creating custom business tools.",
      "industry": "B2B",
      "tags": [
        "B2B",
        "Productivity",
        "No-code",
        "AI"
      ],
      "status": "Active",
      "team_size": 9,
      "website": "https://jestor.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/jestor"
    },
    {
      "id": "yc-summer-2021-jovian",
      "name": "Jovian",
      "slug": "jovian",
      "batch": "Summer 2021",
      "launched_on": "2021-07-01",
      "description": "Online University for Tech Professionals",
      "industry": "Education",
      "tags": [
        "AI-Enhanced Learning",
        "Developer Tools",
        "Education",
        "Machine Learning"
      ],
      "status": "Active",
      "team_size": null,
      "website": "https://www.jovian.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/jovian"
    },
    {
      "id": "yc-summer-2021-jupe",
      "name": "Jupe",
      "slug": "jupe",
      "batch": "Summer 2021",
      "launched_on": "2021-08-22",
      "description": "Just add land",
      "industry": "Real Estate and Construction",
      "tags": [
        "Hardware",
        "Housing",
        "Manufacturing",
        "Proptech",
        "Climate"
      ],
      "status": "Inactive",
      "team_size": 7,
      "website": "http://www.jupe.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/jupe"
    },
    {
      "id": "yc-summer-2021-kaipod-learning",
      "name": "KaiPod Learning",
      "slug": "kaipod-learning",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "A national network of microschools bringing school choice to every…",
      "industry": "Education",
      "tags": [
        "Education",
        "eLearning",
        "Consumer"
      ],
      "status": "Active",
      "team_size": 27,
      "website": "http://www.kaipodlearning.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/kaipod-learning"
    },
    {
      "id": "yc-summer-2021-kalam-labs",
      "name": "Kalam Labs",
      "slug": "kalam-labs",
      "batch": "Summer 2021",
      "launched_on": "2021-07-10",
      "description": "Near Space Flying Machines",
      "industry": "Industrials",
      "tags": [
        "Drones",
        "Aerospace",
        "AI"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "http://www.kalamlabs.in",
      "yc_profile_url": "https://www.ycombinator.com/companies/kalam-labs"
    },
    {
      "id": "yc-summer-2021-kapacity-io",
      "name": "Kapacity.io",
      "slug": "kapacity-io",
      "batch": "Summer 2021",
      "launched_on": "2021-07-06",
      "description": "Reducing energy costs & emissions in buildings.",
      "industry": "Industrials",
      "tags": [
        "Real Estate",
        "Climate",
        "Renewable Energy"
      ],
      "status": "Acquired",
      "team_size": 7,
      "website": "https://kapacity.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/kapacity-io"
    },
    {
      "id": "yc-summer-2021-karbon-card",
      "name": "Karbon Card",
      "slug": "karbon-card",
      "batch": "Summer 2021",
      "launched_on": "2021-07-20",
      "description": "Corporate Card solution for Indian businesses",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "B2B"
      ],
      "status": "Active",
      "team_size": 144,
      "website": "https://www.karboncard.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/karbon-card"
    },
    {
      "id": "yc-summer-2021-kaya",
      "name": "Kaya",
      "slug": "kaya",
      "batch": "Summer 2021",
      "launched_on": "2022-05-17",
      "description": "Marketing agency for startups: 10x cheaper, better and faster",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Analytics",
        "Marketing",
        "AI"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://www.usekaya.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/kaya"
    },
    {
      "id": "yc-summer-2021-keyri",
      "name": "Keyri",
      "slug": "keyri",
      "batch": "Summer 2021",
      "launched_on": "2021-07-29",
      "description": "Secure fraud prevention and authentication platform for developers",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Security"
      ],
      "status": "Acquired",
      "team_size": 5,
      "website": "https://keyri.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/keyri"
    },
    {
      "id": "yc-summer-2021-kindamagical",
      "name": "Kindamagical",
      "slug": "kindamagical",
      "batch": "Summer 2021",
      "launched_on": "2022-02-24",
      "description": "Create + share amazing product GIFs in minutes ⚡️",
      "industry": "B2B",
      "tags": [
        "Design Tools"
      ],
      "status": "Inactive",
      "team_size": 1,
      "website": "https://www.kindamagical.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/kindamagical"
    },
    {
      "id": "yc-summer-2021-kiwi-biosciences",
      "name": "Kiwi Biosciences",
      "slug": "kiwi-biosciences",
      "batch": "Summer 2021",
      "launched_on": "2021-08-13",
      "description": "Patent-pending enzymes to break down common dietary triggers",
      "industry": "Healthcare",
      "tags": [
        "Biotech",
        "Food Tech"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://www.fodzyme.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/kiwi-biosciences"
    },
    {
      "id": "yc-summer-2021-kodda",
      "name": "Kodda",
      "slug": "kodda",
      "batch": "Summer 2021",
      "launched_on": "2021-07-21",
      "description": "",
      "industry": "Healthcare",
      "tags": [
        "Consumer Health Services",
        "Digital Health",
        "Health & Wellness"
      ],
      "status": "Inactive",
      "team_size": 7,
      "website": "https://www.kodda.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/kodda"
    },
    {
      "id": "yc-summer-2021-kodex",
      "name": "Kodex",
      "slug": "kodex",
      "batch": "Summer 2021",
      "launched_on": "2021-06-28",
      "description": "Easiest way for companies to process data requests from governments",
      "industry": "B2B",
      "tags": [
        "GovTech",
        "Compliance",
        "LegalTech",
        "Regtech"
      ],
      "status": "Active",
      "team_size": 30,
      "website": "https://www.kodexglobal.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/kodex"
    },
    {
      "id": "yc-summer-2021-konta-com",
      "name": "Konta.com",
      "slug": "konta-com",
      "batch": "Summer 2021",
      "launched_on": "2021-07-29",
      "description": "Turbotax for México and LATAM",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Fintech",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 35,
      "website": "http://konta.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/konta-com"
    },
    {
      "id": "yc-summer-2021-koshex",
      "name": "Koshex",
      "slug": "koshex",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "Automating wealth creation for 400M Indian millennials",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Active",
      "team_size": 21,
      "website": "https://www.koshex.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/koshex"
    },
    {
      "id": "yc-summer-2021-kurios",
      "name": "Kurios",
      "slug": "kurios",
      "batch": "Summer 2021",
      "launched_on": "2021-07-06",
      "description": "Cohort-based online courses for professionals in Latin America",
      "industry": "Education",
      "tags": [
        "eLearning",
        "Latin America"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://www.kurios.la/",
      "yc_profile_url": "https://www.ycombinator.com/companies/kurios"
    },
    {
      "id": "yc-summer-2021-lago",
      "name": "Lago",
      "slug": "lago",
      "batch": "Summer 2021",
      "launched_on": "2021-08-16",
      "description": "The AI Native Billing Platform",
      "industry": "B2B",
      "tags": [
        "FinOps",
        "Fintech",
        "SaaS",
        "Open Source",
        "Billing"
      ],
      "status": "Active",
      "team_size": 45,
      "website": "https://www.getlago.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/lago"
    },
    {
      "id": "yc-summer-2021-lapzo",
      "name": "lapzo",
      "slug": "lapzo",
      "batch": "Summer 2021",
      "launched_on": "2021-06-18",
      "description": "Lattice for Latam with personalized learning and development",
      "industry": "B2B",
      "tags": [
        "Education",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 135,
      "website": "https://www.lapzo.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/lapzo"
    },
    {
      "id": "yc-summer-2021-lariat-data",
      "name": "Lariat Data",
      "slug": "lariat-data",
      "batch": "Summer 2021",
      "launched_on": "2021-07-17",
      "description": "Observability for Data Engineering Teams",
      "industry": "B2B",
      "tags": [
        "Machine Learning",
        "Big Data",
        "Data Engineering"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "https://www.lariatdata.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/lariat-data"
    },
    {
      "id": "yc-summer-2021-laudable",
      "name": "Laudable",
      "slug": "laudable",
      "batch": "Summer 2021",
      "launched_on": "2021-07-29",
      "description": "App for B2B companies to find customer stories and advocates",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Video"
      ],
      "status": "Acquired",
      "team_size": 5,
      "website": "https://www.laudable.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/laudable"
    },
    {
      "id": "yc-summer-2021-legion-health",
      "name": "Legion Health",
      "slug": "legion-health",
      "batch": "Summer 2021",
      "launched_on": "2021-06-25",
      "description": "Autonomous medical care",
      "industry": "Healthcare",
      "tags": [
        "Consumer Health Services",
        "Telehealth",
        "Healthcare",
        "Mental Health",
        "AI"
      ],
      "status": "Active",
      "team_size": 11,
      "website": "https://legionhealth.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/legion-health"
    },
    {
      "id": "yc-summer-2021-lemfi",
      "name": "LemFi",
      "slug": "lemfi",
      "batch": "Summer 2021",
      "launched_on": "2021-07-05",
      "description": "Fair, simple and accessible financial services",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Active",
      "team_size": 500,
      "website": "https://lemfi.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/lemfi"
    },
    {
      "id": "yc-summer-2021-level",
      "name": "Level",
      "slug": "level",
      "batch": "Summer 2021",
      "launched_on": "2021-07-11",
      "description": "Fast and simple fintech financing",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Lending"
      ],
      "status": "Acquired",
      "team_size": 0,
      "website": "https://trylevel.app",
      "yc_profile_url": "https://www.ycombinator.com/companies/level"
    },
    {
      "id": "yc-summer-2021-levo",
      "name": "Levo",
      "slug": "levo",
      "batch": "Summer 2021",
      "launched_on": "2021-07-05",
      "description": "Treasury management platform for SMBs to optimize idle cash in Latam",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "B2B",
        "Investing"
      ],
      "status": "Inactive",
      "team_size": 6,
      "website": "https://www.levo.mx",
      "yc_profile_url": "https://www.ycombinator.com/companies/levo"
    },
    {
      "id": "yc-summer-2021-levro",
      "name": "Levro",
      "slug": "levro",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "Multicurrency account & international payments for businesses",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Payments",
        "Finance",
        "B2B",
        "International"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://www.levro.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/levro"
    },
    {
      "id": "yc-summer-2021-lightly",
      "name": "Lightly",
      "slug": "lightly",
      "batch": "Summer 2021",
      "launched_on": "2021-08-19",
      "description": "Help ML teams label the right data",
      "industry": "B2B",
      "tags": [
        "Machine Learning",
        "Data Labeling"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://lightly.ai/",
      "yc_profile_url": "https://www.ycombinator.com/companies/lightly"
    },
    {
      "id": "yc-summer-2021-litnerd",
      "name": "Litnerd",
      "slug": "litnerd",
      "batch": "Summer 2021",
      "launched_on": "2021-06-21",
      "description": "Reading + Writing Club App for Kids",
      "industry": "Education",
      "tags": [
        "Education",
        "SaaS",
        "Media",
        "Kids"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "https://litnerd.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/litnerd"
    },
    {
      "id": "yc-summer-2021-liv-labs-inc",
      "name": "Liv Labs",
      "slug": "liv-labs-inc",
      "batch": "Summer 2021",
      "launched_on": "2021-08-15",
      "description": "Pelvic floor fitness made easy",
      "industry": "Healthcare",
      "tags": [
        "Hardware",
        "Consumer Health Services",
        "Women's Health",
        "Consumer Products"
      ],
      "status": "Active",
      "team_size": 1,
      "website": "http://www.livlabsfitness.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/liv-labs-inc"
    },
    {
      "id": "yc-summer-2021-lobby",
      "name": "Lobby",
      "slug": "lobby",
      "batch": "Summer 2021",
      "launched_on": "2021-07-14",
      "description": "Local onboarding for the $200B health tourism industry",
      "industry": "Healthcare",
      "tags": [
        "Marketplace",
        "Telehealth",
        "Healthcare"
      ],
      "status": "Inactive",
      "team_size": 1,
      "website": "https://www.uselobby.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/lobby"
    },
    {
      "id": "yc-summer-2021-locale",
      "name": "Locale",
      "slug": "locale",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "Organic and gourmet high-protein meals, designed for longevity.",
      "industry": "Consumer",
      "tags": [
        "Grocery",
        "Marketplace",
        "Delivery",
        "Food"
      ],
      "status": "Active",
      "team_size": 11,
      "website": "https://www.shoplocale.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/locale"
    },
    {
      "id": "yc-summer-2021-lootrush",
      "name": "LootRush",
      "slug": "lootrush",
      "batch": "Summer 2021",
      "launched_on": "2021-09-28",
      "description": "The global operating account you truly deserve.",
      "industry": "Fintech",
      "tags": [
        "Crypto / Web3"
      ],
      "status": "Active",
      "team_size": null,
      "website": "https://www.lootrush.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/lootrush"
    },
    {
      "id": "yc-summer-2021-luable",
      "name": "Luable",
      "slug": "luable",
      "batch": "Summer 2021",
      "launched_on": "2021-08-27",
      "description": "Latin America's Deposits Marketplace for Banks",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Active",
      "team_size": 40,
      "website": "https://mejorcdt.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/luable"
    },
    {
      "id": "yc-summer-2021-luminate-medical",
      "name": "Luminate",
      "slug": "luminate-medical",
      "batch": "Summer 2021",
      "launched_on": "2021-07-01",
      "description": "We make cancer care at home possible.",
      "industry": "Healthcare",
      "tags": [
        "Hard Tech",
        "Consumer Health Services",
        "Medical Devices"
      ],
      "status": "Active",
      "team_size": 55,
      "website": "http://www.luminatemed.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/luminate-medical"
    },
    {
      "id": "yc-summer-2021-mable",
      "name": "Mable",
      "slug": "mable",
      "batch": "Summer 2021",
      "launched_on": "2021-08-23",
      "description": "First personalized migraine clinic using genetics and telehealth.",
      "industry": "Healthcare",
      "tags": [
        "Health Tech",
        "Telehealth",
        "Genomics"
      ],
      "status": "Acquired",
      "team_size": 7,
      "website": "https://www.trymable.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/mable"
    },
    {
      "id": "yc-summer-2021-mach9",
      "name": "Mach9",
      "slug": "mach9",
      "batch": "Summer 2021",
      "launched_on": "2021-08-09",
      "description": "AI-native CAD software for civil engineering",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Machine Learning",
        "Computer Vision",
        "Design Tools",
        "Infrastructure"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "https://www.mach9.ai/",
      "yc_profile_url": "https://www.ycombinator.com/companies/mach9"
    },
    {
      "id": "yc-summer-2021-madeats",
      "name": "MadEats",
      "slug": "madeats",
      "batch": "Summer 2021",
      "launched_on": "2021-07-29",
      "description": "Online delivery-only restaurant group in the Philippines",
      "industry": "Consumer",
      "tags": [
        "Ghost Kitchens",
        "E-commerce"
      ],
      "status": "Acquired",
      "team_size": null,
      "website": "",
      "yc_profile_url": "https://www.ycombinator.com/companies/madeats"
    },
    {
      "id": "yc-summer-2021-mailmodo",
      "name": "Mailmodo",
      "slug": "mailmodo",
      "batch": "Summer 2021",
      "launched_on": "2021-06-25",
      "description": "No-code email marketing platform to send forms & widgets within emails",
      "industry": "B2B",
      "tags": [
        "SaaS"
      ],
      "status": "Acquired",
      "team_size": 70,
      "website": "https://www.mailmodo.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/mailmodo"
    },
    {
      "id": "yc-summer-2021-makani-science",
      "name": "Makani Science",
      "slug": "makani-science",
      "batch": "Summer 2021",
      "launched_on": "2021-08-19",
      "description": "Reinventing respiration monitoring",
      "industry": "Healthcare",
      "tags": [
        "Health Tech",
        "Medical Devices"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "http://makaniscience.net/",
      "yc_profile_url": "https://www.ycombinator.com/companies/makani-science"
    },
    {
      "id": "yc-summer-2021-malga",
      "name": "Malga",
      "slug": "malga",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "Malga is an API to accept payments with multiple payment providers",
      "industry": "Fintech",
      "tags": [
        "SaaS",
        "Payments",
        "B2B"
      ],
      "status": "Active",
      "team_size": 46,
      "website": "https://malga.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/malga"
    },
    {
      "id": "yc-summer-2021-malloc-inc",
      "name": "Malloc Inc",
      "slug": "malloc-inc",
      "batch": "Summer 2021",
      "launched_on": "2021-07-22",
      "description": "AI-driven mobile cybersecurity ",
      "industry": "B2B",
      "tags": [
        "Privacy",
        "Cybersecurity",
        "Defense",
        "AI"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://mallocprivacy.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/malloc-inc"
    },
    {
      "id": "yc-summer-2021-marketfeed",
      "name": "marketfeed",
      "slug": "marketfeed",
      "batch": "Summer 2021",
      "launched_on": "2021-08-02",
      "description": "Helps affluent Indians invest in automated options trading strategies ",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Trading",
        "Stocks"
      ],
      "status": "Active",
      "team_size": 55,
      "website": "https://marketfeed.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/marketfeed"
    },
    {
      "id": "yc-summer-2021-maroo",
      "name": "Maroo",
      "slug": "maroo",
      "batch": "Summer 2021",
      "launched_on": "2021-06-23",
      "description": "CRM for creatives (acquired by Helium Ventures)",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "SaaS",
        "B2B"
      ],
      "status": "Acquired",
      "team_size": 5,
      "website": "https://maroo.us/",
      "yc_profile_url": "https://www.ycombinator.com/companies/maroo"
    },
    {
      "id": "yc-summer-2021-marqvision",
      "name": "MarqVision",
      "slug": "marqvision",
      "batch": "Summer 2021",
      "launched_on": "2021-06-25",
      "description": "IP operating software for brands and content companies",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "Computer Vision",
        "B2B",
        "LegalTech"
      ],
      "status": "Active",
      "team_size": 200,
      "website": "https://www.marqvision.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/marqvision"
    },
    {
      "id": "yc-summer-2021-matidor-com",
      "name": "Matidor.com",
      "slug": "matidor-com",
      "batch": "Summer 2021",
      "launched_on": "2021-07-20",
      "description": "Project management on a live map",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Geographic Information System",
        "B2B"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "https://matidor.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/matidor-com"
    },
    {
      "id": "yc-summer-2021-matrubials-inc",
      "name": "Matrubials",
      "slug": "matrubials-inc",
      "batch": "Summer 2021",
      "launched_on": "2021-07-06",
      "description": "Developing milk-inspired therapeutics for infectious diseases",
      "industry": "Healthcare",
      "tags": [
        "AI-powered Drug Discovery",
        "Women's Health",
        "Therapeutics"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://matrubials.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/matrubials-inc"
    },
    {
      "id": "yc-summer-2021-mecho-autotech",
      "name": "Mecho Autotech",
      "slug": "mecho-autotech",
      "batch": "Summer 2021",
      "launched_on": "2021-06-24",
      "description": "On-demand  auto maintenance & repairs",
      "industry": "Industrials",
      "tags": [
        "Auto Commerce",
        "Marketplace",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 35,
      "website": "https://mechoautotech.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/mecho-autotech"
    },
    {
      "id": "yc-summer-2021-medium-biosciences",
      "name": "Medium Biosciences",
      "slug": "medium-biosciences",
      "batch": "Summer 2021",
      "launched_on": "2021-08-26",
      "description": "AI-designed Affinity Reagents",
      "industry": "Healthcare",
      "tags": [
        "Artificial Intelligence",
        "Machine Learning",
        "Biotech"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "http://medium.bio",
      "yc_profile_url": "https://www.ycombinator.com/companies/medium-biosciences"
    },
    {
      "id": "yc-summer-2021-membo",
      "name": "Membo",
      "slug": "membo",
      "batch": "Summer 2021",
      "launched_on": "2021-07-20",
      "description": "Groceries fresher than a farmer’s market, delivered to you (EU)",
      "industry": "Consumer",
      "tags": [
        "Grocery",
        "Marketplace",
        "Delivery"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "https://membo.ee?lang=en",
      "yc_profile_url": "https://www.ycombinator.com/companies/membo"
    },
    {
      "id": "yc-summer-2021-mentorcam",
      "name": "Mentorcam",
      "slug": "mentorcam",
      "batch": "Summer 2021",
      "launched_on": "2021-06-30",
      "description": "Mentorship from leaders of the world's best companies",
      "industry": "Education",
      "tags": [
        "Education",
        "Marketplace"
      ],
      "status": "Inactive",
      "team_size": 9,
      "website": "https://mentor.cam/",
      "yc_profile_url": "https://www.ycombinator.com/companies/mentorcam"
    },
    {
      "id": "yc-summer-2021-mentum",
      "name": "Mentum",
      "slug": "mentum",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "AI-Powered Assistant for Procurement and Strategic Sourcing",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "B2B",
        "Supply Chain",
        "Procurement"
      ],
      "status": "Acquired",
      "team_size": 2,
      "website": "http://getmentum.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/mentum"
    },
    {
      "id": "yc-summer-2021-mergent",
      "name": "Mergent",
      "slug": "mergent",
      "batch": "Summer 2021",
      "launched_on": "2021-07-19",
      "description": "Incredibly reliable background task queues and cron jobs",
      "industry": "B2B",
      "tags": [
        "Developer Tools"
      ],
      "status": "Active",
      "team_size": 1,
      "website": "https://mergent.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/mergent"
    },
    {
      "id": "yc-summer-2021-meticulous",
      "name": "Meticulous",
      "slug": "meticulous",
      "batch": "Summer 2021",
      "launched_on": "2021-07-13",
      "description": "Automated e2e screenshot testing without writing or maintaining tests",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "Hard Tech",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://www.meticulous.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/meticulous"
    },
    {
      "id": "yc-summer-2021-micro-meat",
      "name": "Micro Meat",
      "slug": "micro-meat",
      "batch": "Summer 2021",
      "launched_on": "2021-07-07",
      "description": "Technologies for scaling up cultured/clean meat production",
      "industry": "Industrials",
      "tags": [
        "Hard Tech",
        "Cultured Meat",
        "Biotech",
        "Climate",
        "Food Tech"
      ],
      "status": "Inactive",
      "team_size": 0,
      "website": "http://www.micromeat.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/micro-meat"
    },
    {
      "id": "yc-summer-2021-milky-way-ai",
      "name": "Milky Way AI",
      "slug": "milky-way-ai",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "Mobile app for CPG brands to connect to millions of stores globally",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "Computer Vision"
      ],
      "status": "Inactive",
      "team_size": 5,
      "website": "https://milkyway.ai/",
      "yc_profile_url": "https://www.ycombinator.com/companies/milky-way-ai"
    },
    {
      "id": "yc-summer-2021-mindfi",
      "name": "MindFi",
      "slug": "mindfi",
      "batch": "Summer 2021",
      "launched_on": "2021-08-08",
      "description": "Transforming Mental Health for Corporate Asia",
      "industry": "B2B",
      "tags": [
        "Machine Learning",
        "Mental Health Tech",
        "B2B",
        "HR Tech",
        "Health & Wellness"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "https://www.mindfi.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/mindfi"
    },
    {
      "id": "yc-summer-2021-mindmesh",
      "name": "Mindmesh",
      "slug": "mindmesh",
      "batch": "Summer 2021",
      "launched_on": "2021-07-13",
      "description": "Mindmesh is the virtual desk that puts you in control. ",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Productivity",
        "Remote Work"
      ],
      "status": "Inactive",
      "team_size": 7,
      "website": "https://mindmesh.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/mindmesh"
    },
    {
      "id": "yc-summer-2021-mindstate-design-labs",
      "name": "Mindstate Design Labs",
      "slug": "mindstate-design-labs",
      "batch": "Summer 2021",
      "launched_on": "2021-08-24",
      "description": "Clinical-stage AI neuroengineering platform",
      "industry": "Healthcare",
      "tags": [
        "Machine Learning",
        "Mental Health Tech",
        "Biotech",
        "Therapeutics",
        "AI"
      ],
      "status": "Active",
      "team_size": 7,
      "website": "http://mindstate.design",
      "yc_profile_url": "https://www.ycombinator.com/companies/mindstate-design-labs"
    },
    {
      "id": "yc-summer-2021-mine",
      "name": "Mine",
      "slug": "mine",
      "batch": "Summer 2021",
      "launched_on": "2021-08-05",
      "description": "The AI personal finance company. ",
      "industry": "Fintech",
      "tags": [
        "Artificial Intelligence",
        "Fintech",
        "Consumer",
        "Consumer Finance"
      ],
      "status": "Inactive",
      "team_size": 18,
      "website": "https://usemine.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/mine"
    },
    {
      "id": "yc-summer-2021-miniloop",
      "name": "Miniloop",
      "slug": "miniloop",
      "batch": "Summer 2021",
      "launched_on": "2021-07-02",
      "description": "AI workflow engine for reliable systems",
      "industry": "B2B",
      "tags": [
        "AI",
        "AI Assistant"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://miniloop.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/miniloop"
    },
    {
      "id": "yc-summer-2021-mixr",
      "name": "Mixr",
      "slug": "mixr",
      "batch": "Summer 2021",
      "launched_on": "2021-11-18",
      "description": "Team building through online game tournaments. ",
      "industry": "B2B",
      "tags": [],
      "status": "Inactive",
      "team_size": 4,
      "website": "https://mixronline.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/mixr"
    },
    {
      "id": "yc-summer-2021-mobileboost",
      "name": "MobileBoost",
      "slug": "mobileboost",
      "batch": "Summer 2021",
      "launched_on": "2021-08-13",
      "description": "AI native mobile testing.",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Developer Tools",
        "Generative AI",
        "B2B",
        "No-code"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://www.mobileboost.io/yc",
      "yc_profile_url": "https://www.ycombinator.com/companies/mobileboost"
    },
    {
      "id": "yc-summer-2021-momo-medical",
      "name": "Momo Medical",
      "slug": "momo-medical",
      "batch": "Summer 2021",
      "launched_on": "2021-08-17",
      "description": "We help nurses in nursing homes to be 30% more effective",
      "industry": "Healthcare",
      "tags": [
        "SaaS",
        "IoT",
        "B2B"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://www.momomedical.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/momo-medical"
    },
    {
      "id": "yc-summer-2021-monet",
      "name": "Monet",
      "slug": "monet",
      "batch": "Summer 2021",
      "launched_on": "2021-06-25",
      "description": "Payroll-backed loans and cash advances in Latam",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Active",
      "team_size": 42,
      "website": "https://monet.com.co/",
      "yc_profile_url": "https://www.ycombinator.com/companies/monet"
    },
    {
      "id": "yc-summer-2021-monto",
      "name": "Monto",
      "slug": "monto",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "Salary on-demand platform for Latin America",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "B2B"
      ],
      "status": "Active",
      "team_size": 13,
      "website": "https://www.monto.mx/",
      "yc_profile_url": "https://www.ycombinator.com/companies/monto"
    },
    {
      "id": "yc-summer-2021-moving-parts",
      "name": "Moving Parts",
      "slug": "moving-parts",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "Delightful components for iOS.",
      "industry": "B2B",
      "tags": [
        "Developer Tools"
      ],
      "status": "Inactive",
      "team_size": 2,
      "website": "https://movingparts.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/moving-parts"
    },
    {
      "id": "yc-summer-2021-nasdisc",
      "name": "Nasdisc",
      "slug": "nasdisc",
      "batch": "Summer 2021",
      "launched_on": "2021-08-04",
      "description": "A marketplace for vinyl, cassettes and cds",
      "industry": "Consumer",
      "tags": [
        "Art Trading Platforms",
        "Marketplace",
        "E-commerce"
      ],
      "status": "Acquired",
      "team_size": 4,
      "website": "https://www.nasdisc.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/nasdisc"
    },
    {
      "id": "yc-summer-2021-nash",
      "name": "Nash",
      "slug": "nash",
      "batch": "Summer 2021",
      "launched_on": "2021-06-30",
      "description": "Nash is the digital logistics infrastructure for commerce",
      "industry": "B2B",
      "tags": [
        "Marketplace",
        "SaaS",
        "B2B",
        "Delivery",
        "Logistics"
      ],
      "status": "Active",
      "team_size": 40,
      "website": "https://www.usenash.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/nash"
    },
    {
      "id": "yc-summer-2021-neodocs",
      "name": "Neodocs",
      "slug": "neodocs",
      "batch": "Summer 2021",
      "launched_on": "2021-08-11",
      "description": "Instant lab tests on your smartphone",
      "industry": "Healthcare",
      "tags": [
        "Artificial Intelligence",
        "Consumer Health Services",
        "Medical Devices"
      ],
      "status": "Active",
      "team_size": 20,
      "website": "https://www.neodocs.in",
      "yc_profile_url": "https://www.ycombinator.com/companies/neodocs"
    },
    {
      "id": "yc-summer-2021-nexus",
      "name": "Nexus",
      "slug": "nexus",
      "batch": "Summer 2021",
      "launched_on": "2021-07-14",
      "description": "Nexus  offers a unified checking and investment account.",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Neobank"
      ],
      "status": "Inactive",
      "team_size": 2,
      "website": "https://nexushq.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/nexus"
    },
    {
      "id": "yc-summer-2021-nino-foods",
      "name": "Nino Foods",
      "slug": "nino-foods",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "Building India's fast food empire",
      "industry": "Consumer",
      "tags": [
        "Ghost Kitchens",
        "Delivery",
        "E-commerce",
        "Food & Beverage"
      ],
      "status": "Inactive",
      "team_size": 250,
      "website": "https://eatnino.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/nino-foods"
    },
    {
      "id": "yc-summer-2021-noloco",
      "name": "Noloco",
      "slug": "noloco",
      "batch": "Summer 2021",
      "launched_on": "2021-07-23",
      "description": "Flexible Business Apps for Modern Teams",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS",
        "No-code"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://noloco.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/noloco"
    },
    {
      "id": "yc-summer-2021-nomod",
      "name": "Nomod",
      "slug": "nomod",
      "batch": "Summer 2021",
      "launched_on": "2021-07-06",
      "description": "The UAE’s leading small business payments platform",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Payments"
      ],
      "status": "Active",
      "team_size": 68,
      "website": "https://nomod.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/nomod"
    },
    {
      "id": "yc-summer-2021-novatr",
      "name": "Novatr",
      "slug": "novatr",
      "batch": "Summer 2021",
      "launched_on": "2021-08-03",
      "description": "Online cohort based courses for architects, engineers and designers…",
      "industry": "Education",
      "tags": [
        "Education",
        "eLearning"
      ],
      "status": "Active",
      "team_size": 180,
      "website": "https://www.novatr.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/novatr"
    },
    {
      "id": "yc-summer-2021-odwen",
      "name": "ODWEN",
      "slug": "odwen",
      "batch": "Summer 2021",
      "launched_on": "2021-08-20",
      "description": "AirBnB for Small Warehouses",
      "industry": "B2B",
      "tags": [
        "Marketplace",
        "Warehouse Management Tech",
        "B2B"
      ],
      "status": "Active",
      "team_size": 21,
      "website": "https://www.odwen.co.in",
      "yc_profile_url": "https://www.ycombinator.com/companies/odwen"
    },
    {
      "id": "yc-summer-2021-odys-aviation",
      "name": "Odys Aviation",
      "slug": "odys-aviation",
      "batch": "Summer 2021",
      "launched_on": "2021-08-21",
      "description": "Vertical takeoff and landing aircraft for major airlines",
      "industry": "Industrials",
      "tags": [
        "Hard Tech",
        "Airplanes",
        "Climate"
      ],
      "status": "Active",
      "team_size": 11,
      "website": "https://www.odysaviation.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/odys-aviation"
    },
    {
      "id": "yc-summer-2021-okani",
      "name": "Okani",
      "slug": "okani",
      "batch": "Summer 2021",
      "launched_on": "2021-08-18",
      "description": "Preventive healthcare app for Latam.",
      "industry": "Healthcare",
      "tags": [
        "Consumer Health Services",
        "Primary Care"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "https://www.okani.care",
      "yc_profile_url": "https://www.ycombinator.com/companies/okani"
    },
    {
      "id": "yc-summer-2021-onebrief",
      "name": "Onebrief",
      "slug": "onebrief",
      "batch": "Summer 2021",
      "launched_on": "2021-07-08",
      "description": "Onebrief makes military headquarters run seamlessly",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "GovTech",
        "Defense"
      ],
      "status": "Active",
      "team_size": 200,
      "website": "https://onebrief.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/onebrief"
    },
    {
      "id": "yc-summer-2021-oneschema",
      "name": "OneSchema",
      "slug": "oneschema",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "The AI Agent for Autonomous Data Operations",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "B2B",
        "Workflow Automation",
        "No-code"
      ],
      "status": "Active",
      "team_size": 20,
      "website": "https://www.oneschema.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/oneschema"
    },
    {
      "id": "yc-summer-2021-oneshop",
      "name": "OneShop",
      "slug": "oneshop",
      "batch": "Summer 2021",
      "launched_on": "2021-06-28",
      "description": "List on multiple resale marketplaces",
      "industry": "Consumer",
      "tags": [
        "SaaS",
        "E-commerce"
      ],
      "status": "Inactive",
      "team_size": 10,
      "website": "https://oneshop.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/oneshop"
    },
    {
      "id": "yc-summer-2021-onestopkitchen",
      "name": "OneStopKitchen",
      "slug": "onestopkitchen",
      "batch": "Summer 2021",
      "launched_on": "2021-07-13",
      "description": "AI-Driven Tech & Space Optimization to Scale Restaurants",
      "industry": "Consumer",
      "tags": [
        "Ghost Kitchens",
        "E-commerce",
        "AI"
      ],
      "status": "Inactive",
      "team_size": 10,
      "website": "https://onestopkitchen.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/onestopkitchen"
    },
    {
      "id": "yc-summer-2021-onfolk",
      "name": "Onfolk",
      "slug": "onfolk",
      "batch": "Summer 2021",
      "launched_on": "2021-07-06",
      "description": "Gusto for the UK",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Payroll"
      ],
      "status": "Acquired",
      "team_size": 4,
      "website": "http://onfolk.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/onfolk"
    },
    {
      "id": "yc-summer-2021-onsite-pro",
      "name": "Onsite Pro",
      "slug": "onsite-pro",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "Revolutionizing digital selling within HVAC",
      "industry": "B2B",
      "tags": [
        "Construction",
        "B2B",
        "Climate"
      ],
      "status": "Inactive",
      "team_size": 4,
      "website": "https://onsitepro.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/onsite-pro"
    },
    {
      "id": "yc-summer-2021-openlayer",
      "name": "Openlayer",
      "slug": "openlayer",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "The fastest way to ship airtight AI",
      "industry": "B2B",
      "tags": [
        "AIOps",
        "Developer Tools",
        "Generative AI",
        "Machine Learning",
        "AI"
      ],
      "status": "Active",
      "team_size": 19,
      "website": "https://openlayer.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/openlayer"
    },
    {
      "id": "yc-summer-2021-opkit",
      "name": "Opkit",
      "slug": "opkit",
      "batch": "Summer 2021",
      "launched_on": "2021-08-10",
      "description": "AI phone calls for the US healthcare industry",
      "industry": "Healthcare",
      "tags": [
        "SaaS",
        "Health Tech",
        "Digital Health",
        "Healthcare",
        "Conversational AI"
      ],
      "status": "Inactive",
      "team_size": null,
      "website": "https://opkit.co/",
      "yc_profile_url": "https://www.ycombinator.com/companies/opkit"
    },
    {
      "id": "yc-summer-2021-orderli",
      "name": "Orderli",
      "slug": "orderli",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "Square for Europe",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "https://orderli.com/en",
      "yc_profile_url": "https://www.ycombinator.com/companies/orderli"
    },
    {
      "id": "yc-summer-2021-outloud-ai",
      "name": "outloud.ai",
      "slug": "outloud-ai",
      "batch": "Summer 2021",
      "launched_on": "2021-08-18",
      "description": "Building Gong.io for offline retail.",
      "industry": "B2B",
      "tags": [
        "Machine Learning",
        "SaaS",
        "B2B"
      ],
      "status": "Inactive",
      "team_size": 5,
      "website": "https://www.outloud.ai/",
      "yc_profile_url": "https://www.ycombinator.com/companies/outloud-ai"
    },
    {
      "id": "yc-summer-2021-output",
      "name": "Output Biosciences",
      "slug": "output",
      "batch": "Summer 2021",
      "launched_on": "2021-08-03",
      "description": "Teaching Generative AI the Language of Biology",
      "industry": "Healthcare",
      "tags": [
        "AI-powered Drug Discovery",
        "Generative AI",
        "Biotech",
        "AI"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "https://www.outputbio.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/output"
    },
    {
      "id": "yc-summer-2021-pactima",
      "name": "Pactima",
      "slug": "pactima",
      "batch": "Summer 2021",
      "launched_on": "2021-07-08",
      "description": "Live video signing for real-time agreements",
      "industry": "B2B",
      "tags": [
        "Documents",
        "SaaS",
        "B2B"
      ],
      "status": "Acquired",
      "team_size": 3,
      "website": "https://pactima.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/pactima"
    },
    {
      "id": "yc-summer-2021-palettehq",
      "name": "PaletteHQ",
      "slug": "palettehq",
      "batch": "Summer 2021",
      "launched_on": "2021-07-07",
      "description": "Manage sales commissions and sales performance",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Sales"
      ],
      "status": "Active",
      "team_size": 14,
      "website": "https://palettehq.com/en",
      "yc_profile_url": "https://www.ycombinator.com/companies/palettehq"
    },
    {
      "id": "yc-summer-2021-palla",
      "name": "Palla",
      "slug": "palla",
      "batch": "Summer 2021",
      "launched_on": "2021-07-21",
      "description": "P2P Cross border payments",
      "industry": "Fintech",
      "tags": [],
      "status": "Active",
      "team_size": 22,
      "website": "https://www.palla.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/palla"
    },
    {
      "id": "yc-summer-2021-pandai",
      "name": "Pandai",
      "slug": "pandai",
      "batch": "Summer 2021",
      "launched_on": "2021-07-21",
      "description": "Learning app for school students in Southeast Asia",
      "industry": "Education",
      "tags": [
        "Education",
        "SaaS",
        "Subscriptions"
      ],
      "status": "Active",
      "team_size": 32,
      "website": "https://www.pandai.org",
      "yc_profile_url": "https://www.ycombinator.com/companies/pandai"
    },
    {
      "id": "yc-summer-2021-parallel-bio",
      "name": "Parallel Bio",
      "slug": "parallel-bio",
      "batch": "Summer 2021",
      "launched_on": "2021-07-20",
      "description": "Using the immune system to cure disease",
      "industry": "Healthcare",
      "tags": [
        "AI-powered Drug Discovery",
        "Biotech"
      ],
      "status": "Active",
      "team_size": 20,
      "website": "http://parallel.bio",
      "yc_profile_url": "https://www.ycombinator.com/companies/parallel-bio"
    },
    {
      "id": "yc-summer-2021-patterns",
      "name": "Patterns",
      "slug": "patterns",
      "batch": "Summer 2021",
      "launched_on": "2021-07-27",
      "description": "Next-Gen Financial Analysis and Reporting with AI Agents",
      "industry": "B2B",
      "tags": [
        "Analytics",
        "Data Science",
        "Data Engineering",
        "Data Visualization"
      ],
      "status": "Inactive",
      "team_size": 2,
      "website": "https://patterns.app/",
      "yc_profile_url": "https://www.ycombinator.com/companies/patterns"
    },
    {
      "id": "yc-summer-2021-payflow",
      "name": "Payflow",
      "slug": "payflow",
      "batch": "Summer 2021",
      "launched_on": "2021-06-23",
      "description": "A mobile app. It allows employees to get paid their salary on-demand.",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "SaaS",
        "HR Tech",
        "Lending"
      ],
      "status": "Active",
      "team_size": 50,
      "website": "https://www.payflow.es/",
      "yc_profile_url": "https://www.ycombinator.com/companies/payflow"
    },
    {
      "id": "yc-summer-2021-payhippo",
      "name": "Payhippo",
      "slug": "payhippo",
      "batch": "Summer 2021",
      "launched_on": "2021-08-02",
      "description": "Loans to Nigeria's SMEs in under 3 hours",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Active",
      "team_size": 11,
      "website": "https://payhippo.africa/",
      "yc_profile_url": "https://www.ycombinator.com/companies/payhippo"
    },
    {
      "id": "yc-summer-2021-payze",
      "name": "PAYZE",
      "slug": "payze",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "Stripe for former Soviet Union countries",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "B2B"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://payze.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/payze"
    },
    {
      "id": "yc-summer-2021-perfekto",
      "name": "Perfekto",
      "slug": "perfekto",
      "batch": "Summer 2021",
      "launched_on": "2021-07-05",
      "description": "Grocery subscription service against food waste in Latam",
      "industry": "Consumer",
      "tags": [
        "Grocery",
        "Sustainability",
        "Climate",
        "E-commerce",
        "Subscriptions"
      ],
      "status": "Inactive",
      "team_size": 33,
      "website": "https://www.perfekto.mx/",
      "yc_profile_url": "https://www.ycombinator.com/companies/perfekto"
    },
    {
      "id": "yc-summer-2021-phykos",
      "name": "Phykos",
      "slug": "phykos",
      "batch": "Summer 2021",
      "launched_on": "2021-09-27",
      "description": "Growing seaweed to stabilize the climate.",
      "industry": "Industrials",
      "tags": [
        "Carbon Capture and Removal",
        "Climate"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://phykos.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/phykos"
    },
    {
      "id": "yc-summer-2021-pide-directo",
      "name": "Pide Directo",
      "slug": "pide-directo",
      "batch": "Summer 2021",
      "launched_on": "2021-07-20",
      "description": "One-stop-shop for restaurants to operate and grow their business. ",
      "industry": "B2B",
      "tags": [
        "Autonomous Delivery",
        "SaaS",
        "E-commerce",
        "Enterprise Software"
      ],
      "status": "Active",
      "team_size": 150,
      "website": "http://pidedirecto.mx",
      "yc_profile_url": "https://www.ycombinator.com/companies/pide-directo"
    },
    {
      "id": "yc-summer-2021-pideaky",
      "name": "Pideaky",
      "slug": "pideaky",
      "batch": "Summer 2021",
      "launched_on": "2021-06-25",
      "description": "We help offline LatAm SMBs manage and accelerate their cash-flow ",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "https://pideaky.com/en/",
      "yc_profile_url": "https://www.ycombinator.com/companies/pideaky"
    },
    {
      "id": "yc-summer-2021-pillar",
      "name": "Pillar",
      "slug": "pillar",
      "batch": "Summer 2021",
      "launched_on": "2021-08-04",
      "description": "A white-label care enablement platform",
      "industry": "Healthcare",
      "tags": [
        "Consumer Health Services",
        "Digital Health",
        "Healthcare"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://withpillar.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/pillar"
    },
    {
      "id": "yc-summer-2021-pipekit",
      "name": "Pipekit",
      "slug": "pipekit",
      "batch": "Summer 2021",
      "launched_on": "2021-08-27",
      "description": "Pipekit scales data & CI pipelines for enterprises",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "Open Source",
        "Data Engineering",
        "DevOps"
      ],
      "status": "Active",
      "team_size": 9,
      "website": "https://pipekit.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/pipekit"
    },
    {
      "id": "yc-summer-2021-pirouette-pharma",
      "name": "Pirouette Pharma",
      "slug": "pirouette-pharma",
      "batch": "Summer 2021",
      "launched_on": "2021-06-22",
      "description": "We make injections as easy as pushing a button!",
      "industry": "Healthcare",
      "tags": [
        "Health Tech",
        "Medical Devices",
        "Biotech",
        "Healthcare"
      ],
      "status": "Active",
      "team_size": 9,
      "website": "https://www.pirouettepharma.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/pirouette-pharma"
    },
    {
      "id": "yc-summer-2021-plai",
      "name": "Plai",
      "slug": "plai",
      "batch": "Summer 2021",
      "launched_on": "2021-07-01",
      "description": "Create, launch, and optimize Facebook ads and ads on 10+ platforms",
      "industry": "B2B",
      "tags": [
        "Marketing",
        "Advertising"
      ],
      "status": "Active",
      "team_size": 20,
      "website": "https://www.plai.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/plai"
    },
    {
      "id": "yc-summer-2021-planet-a-foods",
      "name": "Planet A Foods",
      "slug": "planet-a-foods",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "Building the next generation food ingredient champion.",
      "industry": "Consumer",
      "tags": [
        "Climate",
        "ClimateTech"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "https://planet-a-foods.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/planet-a-foods"
    },
    {
      "id": "yc-summer-2021-pluggy",
      "name": "Pluggy",
      "slug": "pluggy",
      "batch": "Summer 2021",
      "launched_on": "2021-08-02",
      "description": "Plaid for Brazil: we allow developers to access users' financial data ",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "API"
      ],
      "status": "Active",
      "team_size": 31,
      "website": "https://pluggy.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/pluggy"
    },
    {
      "id": "yc-summer-2021-portao-3",
      "name": "Portão 3",
      "slug": "portao-3",
      "batch": "Summer 2021",
      "launched_on": "2021-08-19",
      "description": "We are the frictionless way for companies to make payments.",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "B2B",
        "Travel"
      ],
      "status": "Active",
      "team_size": 40,
      "website": "https://portao3.com.br",
      "yc_profile_url": "https://www.ycombinator.com/companies/portao-3"
    },
    {
      "id": "yc-summer-2021-positional",
      "name": "Positional",
      "slug": "positional",
      "batch": "Summer 2021",
      "launched_on": "2021-07-07",
      "description": "A modern platform for content marketing & SEO.",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Marketing",
        "SEO"
      ],
      "status": "Acquired",
      "team_size": 5,
      "website": "https://www.positional.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/positional"
    },
    {
      "id": "yc-summer-2021-posturehealth-inc",
      "name": "Zen",
      "slug": "posturehealth-inc",
      "batch": "Summer 2021",
      "launched_on": "2021-08-02",
      "description": "Posture correction software",
      "industry": "Healthcare",
      "tags": [
        "Consumer Health Services",
        "Digital Health"
      ],
      "status": "Active",
      "team_size": 0,
      "website": "https://lnkd.in/dgH2xxBJ",
      "yc_profile_url": "https://www.ycombinator.com/companies/posturehealth-inc"
    },
    {
      "id": "yc-summer-2021-potion",
      "name": "Potion",
      "slug": "potion",
      "batch": "Summer 2021",
      "launched_on": "2021-08-09",
      "description": "AI for product formulation",
      "industry": "B2B",
      "tags": [
        "Generative AI",
        "Hard Tech",
        "B2B",
        "AI"
      ],
      "status": "Active",
      "team_size": 7,
      "website": "https://www.potion.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/potion"
    },
    {
      "id": "yc-summer-2021-promakhos-therapeutics",
      "name": "Promakhos Therapeutics",
      "slug": "promakhos-therapeutics",
      "batch": "Summer 2021",
      "launched_on": "2021-07-22",
      "description": "A therapeutics platform for curing inflammatory disorders",
      "industry": "Healthcare",
      "tags": [
        "Therapeutics"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://www.promakhos.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/promakhos-therapeutics"
    },
    {
      "id": "yc-summer-2021-propreturns",
      "name": "PropReturns",
      "slug": "propreturns",
      "batch": "Summer 2021",
      "launched_on": "2021-07-23",
      "description": "End-to-end commercial real estate transaction platform ",
      "industry": "Real Estate and Construction",
      "tags": [
        "Fintech",
        "Marketplace",
        "Proptech"
      ],
      "status": "Inactive",
      "team_size": 40,
      "website": "https://www.propreturns.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/propreturns"
    },
    {
      "id": "yc-summer-2021-protego",
      "name": "Protego",
      "slug": "protego",
      "batch": "Summer 2021",
      "launched_on": "2021-08-04",
      "description": "We help companies recover lost revenue from chargebacks",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B"
      ],
      "status": "Inactive",
      "team_size": 5,
      "website": "https://www.protegosolutions.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/protego"
    },
    {
      "id": "yc-summer-2021-protex-ai",
      "name": "Protex AI",
      "slug": "protex-ai",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "Computer vision that makes the industrial workplace, safer",
      "industry": "B2B",
      "tags": [
        "Industrial Workplace Safety",
        "Machine Learning",
        "B2B"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://www.protex.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/protex-ai"
    },
    {
      "id": "yc-summer-2021-pylon",
      "name": "Pylon",
      "slug": "pylon",
      "batch": "Summer 2021",
      "launched_on": "2021-07-30",
      "description": "Infrastructure management software for water & electricity companies",
      "industry": "B2B",
      "tags": [
        "Enterprise Software"
      ],
      "status": "Active",
      "team_size": 72,
      "website": "https://www.pylonump.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/pylon"
    },
    {
      "id": "yc-summer-2021-quest",
      "name": "Quest",
      "slug": "quest",
      "batch": "Summer 2021",
      "launched_on": "2021-07-30",
      "description": "Audio career advice",
      "industry": "Consumer",
      "tags": [
        "Community",
        "Podcasts"
      ],
      "status": "Inactive",
      "team_size": 5,
      "website": "http://quest.app",
      "yc_profile_url": "https://www.ycombinator.com/companies/quest"
    },
    {
      "id": "yc-summer-2021-quid",
      "name": "Hilos",
      "slug": "quid",
      "batch": "Summer 2021",
      "launched_on": "2021-08-12",
      "description": "Close and activate your customers on WhatsApp",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Productivity",
        "Messaging"
      ],
      "status": "Acquired",
      "team_size": 5,
      "website": "https://hilos.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/quid"
    },
    {
      "id": "yc-summer-2021-redbean",
      "name": "Redbean",
      "slug": "redbean",
      "batch": "Summer 2021",
      "launched_on": "2021-08-02",
      "description": "Make games and stories with AI",
      "industry": "Consumer",
      "tags": [
        "Entertainment",
        "AI"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "https://redbean.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/redbean"
    },
    {
      "id": "yc-summer-2021-reframe",
      "name": "Reframe",
      "slug": "reframe",
      "batch": "Summer 2021",
      "launched_on": "2021-06-21",
      "description": "App to help people quit or cut back on alcohol use",
      "industry": "Healthcare",
      "tags": [
        "Mental Health Tech",
        "Consumer Health Services",
        "Consumer"
      ],
      "status": "Active",
      "team_size": 35,
      "website": "https://www.joinreframeapp.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/reframe"
    },
    {
      "id": "yc-summer-2021-rendalomaq",
      "name": "RendaloMaq",
      "slug": "rendalomaq",
      "batch": "Summer 2021",
      "launched_on": "2021-06-22",
      "description": "Tech-powered equipment rentals in Latam.",
      "industry": "Real Estate and Construction",
      "tags": [
        "Construction",
        "B2B"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "https://www.rendalomaq.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/rendalomaq"
    },
    {
      "id": "yc-summer-2021-replo",
      "name": "Replo",
      "slug": "replo",
      "batch": "Summer 2021",
      "launched_on": "2021-07-29",
      "description": "Sell anything",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Developer Tools",
        "Marketing",
        "AI"
      ],
      "status": "Active",
      "team_size": 20,
      "website": "https://replo.app/",
      "yc_profile_url": "https://www.ycombinator.com/companies/replo"
    },
    {
      "id": "yc-summer-2021-repool",
      "name": "Repool",
      "slug": "repool",
      "batch": "Summer 2021",
      "launched_on": "2021-07-19",
      "description": "Modernizing hedge fund back office software and services.",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 11,
      "website": "http://repool.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/repool"
    },
    {
      "id": "yc-summer-2021-reprosent",
      "name": "REPROSENT",
      "slug": "reprosent",
      "batch": "Summer 2021",
      "launched_on": "2021-07-30",
      "description": "Activating an overlooked force in medicine - the patient.",
      "industry": "Healthcare",
      "tags": [
        "Biometrics",
        "Consumer Health Services",
        "Digital Health",
        "Healthcare",
        "Oncology"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "http://www.reprosent.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/reprosent"
    },
    {
      "id": "yc-summer-2021-resident-boost",
      "name": "Zuma",
      "slug": "resident-boost",
      "batch": "Summer 2021",
      "launched_on": "2021-12-22",
      "description": "We help businesses convert leads into sales in minutes using text",
      "industry": "B2B",
      "tags": [
        "B2B",
        "Proptech",
        "AI"
      ],
      "status": "Active",
      "team_size": 50,
      "website": "https://www.getzuma.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/resident-boost"
    },
    {
      "id": "yc-summer-2021-revery-ai",
      "name": "Revery AI",
      "slug": "revery-ai",
      "batch": "Summer 2021",
      "launched_on": "2021-07-16",
      "description": "Tiktok for fashion - where designers show their work + build traction",
      "industry": "Consumer",
      "tags": [
        "Artificial Intelligence",
        "Generative AI",
        "Social",
        "E-commerce",
        "Creator Economy"
      ],
      "status": "Inactive",
      "team_size": 5,
      "website": "https://revery.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/revery-ai"
    },
    {
      "id": "yc-summer-2021-revolve-surgical",
      "name": "Revolve Surgical",
      "slug": "revolve-surgical",
      "batch": "Summer 2021",
      "launched_on": "2021-08-10",
      "description": "Surgical robotics for every operating room",
      "industry": "Healthcare",
      "tags": [
        "Hardware",
        "Medical Robotics",
        "Medical Devices"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://revolvesurgical.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/revolve-surgical"
    },
    {
      "id": "yc-summer-2021-rinse",
      "name": "Rinse",
      "slug": "rinse",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "We're building the One Medical for dental",
      "industry": "Healthcare",
      "tags": [
        "Consumer Health Services",
        "Digital Health",
        "Telemedicine",
        "Primary Care"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "http://www.rinse.dental",
      "yc_profile_url": "https://www.ycombinator.com/companies/rinse"
    },
    {
      "id": "yc-summer-2021-rivia-ai",
      "name": "Rivia.AI",
      "slug": "rivia-ai",
      "batch": "Summer 2021",
      "launched_on": "2021-07-08",
      "description": "Interactive Product Demos",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Sales"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://rivia.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/rivia-ai"
    },
    {
      "id": "yc-summer-2021-rmfg",
      "name": "RMFG",
      "slug": "rmfg",
      "batch": "Summer 2021",
      "launched_on": "2021-07-06",
      "description": "Advanced Contract MFG for fast moving hardware companies",
      "industry": "Industrials",
      "tags": [
        "Robotics",
        "Manufacturing",
        "Industrial"
      ],
      "status": "Active",
      "team_size": 9,
      "website": "https://www.rmfg.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/rmfg"
    },
    {
      "id": "yc-summer-2021-rootly",
      "name": "Rootly",
      "slug": "rootly",
      "batch": "Summer 2021",
      "launched_on": "2021-07-08",
      "description": "AI-native on-call and incident response carefully crafted to help…",
      "industry": "B2B",
      "tags": [
        "AIOps",
        "Developer Tools",
        "SaaS",
        "B2B",
        "Security"
      ],
      "status": "Active",
      "team_size": 75,
      "website": "https://rootly.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/rootly"
    },
    {
      "id": "yc-summer-2021-ruta-health",
      "name": "Ruta Health",
      "slug": "ruta-health",
      "batch": "Summer 2021",
      "launched_on": "2021-06-25",
      "description": "Async personalized and actionable health education by real doctors",
      "industry": "B2B",
      "tags": [
        "Consumer Health Services",
        "Health Tech",
        "Digital Health",
        "Healthcare",
        "Health & Wellness"
      ],
      "status": "Inactive",
      "team_size": 1,
      "website": "https://www.rutahealth.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/ruta-health"
    },
    {
      "id": "yc-summer-2021-ruth-health",
      "name": "Ruth Health",
      "slug": "ruth-health",
      "batch": "Summer 2021",
      "launched_on": "2021-08-05",
      "description": "Telehealth hub for pregnant people 🧡",
      "industry": "Healthcare",
      "tags": [
        "Telehealth",
        "Women's Health"
      ],
      "status": "Inactive",
      "team_size": 8,
      "website": "https://www.ruthhealth.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/ruth-health"
    },
    {
      "id": "yc-summer-2021-safebeat",
      "name": "SafeBeat",
      "slug": "safebeat",
      "batch": "Summer 2021",
      "launched_on": "2021-07-27",
      "description": "Guiding cardiac therapeutics - all from your phone",
      "industry": "Healthcare",
      "tags": [
        "AI-Enhanced Learning",
        "Medical Devices",
        "Therapeutics"
      ],
      "status": "Active",
      "team_size": 9,
      "website": "https://safebeat.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/safebeat"
    },
    {
      "id": "yc-summer-2021-safer-management",
      "name": "Safer Management",
      "slug": "safer-management",
      "batch": "Summer 2021",
      "launched_on": "2021-06-30",
      "description": "Student Attendance tracking for Public Schools",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Education",
        "Machine Learning"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://www.safermgmt.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/safer-management"
    },
    {
      "id": "yc-summer-2021-salarybook",
      "name": "SalaryBook",
      "slug": "salarybook",
      "batch": "Summer 2021",
      "launched_on": "2021-08-21",
      "description": "Mobile first solution for Payroll, employee & expense management",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 7,
      "website": "https://salarybook.co.in/",
      "yc_profile_url": "https://www.ycombinator.com/companies/salarybook"
    },
    {
      "id": "yc-summer-2021-salarybox",
      "name": "SalaryBox",
      "slug": "salarybox",
      "batch": "Summer 2021",
      "launched_on": "2021-06-23",
      "description": "Gusto for India",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 40,
      "website": "https://salarybox.in/",
      "yc_profile_url": "https://www.ycombinator.com/companies/salarybox"
    },
    {
      "id": "yc-summer-2021-satsuma",
      "name": "Satsuma",
      "slug": "satsuma",
      "batch": "Summer 2021",
      "launched_on": "2022-05-16",
      "description": "Reliable blockchain indexing & querying for web3 engineering teams.",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS",
        "Crypto / Web3",
        "Data Engineering"
      ],
      "status": "Acquired",
      "team_size": 5,
      "website": "https://www.satsuma.xyz/",
      "yc_profile_url": "https://www.ycombinator.com/companies/satsuma"
    },
    {
      "id": "yc-summer-2021-scispot-io",
      "name": "Scispot",
      "slug": "scispot-io",
      "batch": "Summer 2021",
      "launched_on": "2021-07-24",
      "description": "The Best Data Infrastructure for Biotechs",
      "industry": "B2B",
      "tags": [
        "Generative AI",
        "SaaS",
        "B2B",
        "AI"
      ],
      "status": "Active",
      "team_size": 16,
      "website": "https://scispot.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/scispot-io"
    },
    {
      "id": "yc-summer-2021-scratch-data",
      "name": "Scratch Data",
      "slug": "scratch-data",
      "batch": "Summer 2021",
      "launched_on": "2021-08-02",
      "description": "Analytics for builders. Record and query billions of datapoints with…",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS",
        "B2B",
        "Analytics",
        "Databases"
      ],
      "status": "Inactive",
      "team_size": 1,
      "website": "https://www.scratchdata.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/scratch-data"
    },
    {
      "id": "yc-summer-2021-secoda",
      "name": "Secoda",
      "slug": "secoda",
      "batch": "Summer 2021",
      "launched_on": "2021-07-20",
      "description": "Secoda is the AI layer for your Analytics",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "B2B",
        "Analytics",
        "Data Engineering"
      ],
      "status": "Active",
      "team_size": 27,
      "website": "https://secoda.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/secoda"
    },
    {
      "id": "yc-summer-2021-senpai-gg",
      "name": "SenpAI.GG",
      "slug": "senpai-gg",
      "batch": "Summer 2021",
      "launched_on": "2021-07-12",
      "description": "Personal gaming coach for PC gamers globally ",
      "industry": "Consumer",
      "tags": [
        "Artificial Intelligence",
        "Assistive Tech",
        "Gaming"
      ],
      "status": "Inactive",
      "team_size": 12,
      "website": "https://senpai.gg/",
      "yc_profile_url": "https://www.ycombinator.com/companies/senpai-gg"
    },
    {
      "id": "yc-summer-2021-sensible-biotechnologies",
      "name": "Sensible Biotechnologies",
      "slug": "sensible-biotechnologies",
      "batch": "Summer 2021",
      "launched_on": "2023-04-03",
      "description": "Unlocking the next generation of mRNA medicines",
      "industry": "Healthcare",
      "tags": [
        "Synthetic Biology",
        "Biotech",
        "Manufacturing",
        "Therapeutics",
        "Biotechnology"
      ],
      "status": "Active",
      "team_size": 24,
      "website": "https://sensible.bio",
      "yc_profile_url": "https://www.ycombinator.com/companies/sensible-biotechnologies"
    },
    {
      "id": "yc-summer-2021-sentiyen",
      "name": "Sentiyen",
      "slug": "sentiyen",
      "batch": "Summer 2021",
      "launched_on": "2021-08-03",
      "description": "Conversational AI assistants using your knowledge",
      "industry": "B2B",
      "tags": [
        "AI-Enhanced Learning",
        "Artificial Intelligence",
        "AI Assistant"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://www.sentiyen.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/sentiyen"
    },
    {
      "id": "yc-summer-2021-sequin",
      "name": "Sequin",
      "slug": "sequin",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "Sequin is building AI Voice Agents to automate collections calls for…",
      "industry": "B2B",
      "tags": [
        "Generative AI",
        "B2B",
        "Operations"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://sequinai.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/sequin"
    },
    {
      "id": "yc-summer-2021-sfa-therapeutics-inc",
      "name": "SFA Therapeutics",
      "slug": "sfa-therapeutics-inc",
      "batch": "Summer 2021",
      "launched_on": "2021-06-18",
      "description": "Regulating the immune system to block cancer & autoimmune diseases",
      "industry": "Healthcare",
      "tags": [
        "AI-powered Drug Discovery",
        "Anti-Aging",
        "Biotech",
        "Health & Wellness",
        "Biotechnology"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://sfatherapeutics.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/sfa-therapeutics-inc"
    },
    {
      "id": "yc-summer-2021-shape",
      "name": "Shape",
      "slug": "shape",
      "batch": "Summer 2021",
      "launched_on": "2021-08-04",
      "description": "Get data insights without writing SQL",
      "industry": "B2B",
      "tags": [
        "Analytics",
        "Enterprise",
        "AI"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://shape.xyz",
      "yc_profile_url": "https://www.ycombinator.com/companies/shape"
    },
    {
      "id": "yc-summer-2021-shimmer",
      "name": "Shimmer",
      "slug": "shimmer",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "1:1 ADHD coaching, 5-10X More affordable than alternatives",
      "industry": "Healthcare",
      "tags": [
        "Mental Health Tech",
        "Community"
      ],
      "status": "Active",
      "team_size": 9,
      "website": "https://shimmer.care",
      "yc_profile_url": "https://www.ycombinator.com/companies/shimmer"
    },
    {
      "id": "yc-summer-2021-shipblu",
      "name": "ShipBlu",
      "slug": "shipblu",
      "batch": "Summer 2021",
      "launched_on": "2021-06-27",
      "description": "Amazon Level Logistics for eCommerce Companies in MENA.",
      "industry": "B2B",
      "tags": [
        "Delivery",
        "AI"
      ],
      "status": "Active",
      "team_size": 300,
      "website": "http://www.shipblu.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/shipblu"
    },
    {
      "id": "yc-summer-2021-siglo",
      "name": "Siglo",
      "slug": "siglo",
      "batch": "Summer 2021",
      "launched_on": "2021-07-07",
      "description": "Home Internet for urban Latin America",
      "industry": "Consumer",
      "tags": [
        "Fintech",
        "Community",
        "Telecommunications"
      ],
      "status": "Active",
      "team_size": 20,
      "website": "https://siglo.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/siglo"
    },
    {
      "id": "yc-summer-2021-sigmaos",
      "name": "SigmaOS",
      "slug": "sigmaos",
      "batch": "Summer 2021",
      "launched_on": "2021-08-04",
      "description": "The new home for your internet 🏡",
      "industry": "Consumer",
      "tags": [
        "SaaS",
        "Productivity",
        "Collaboration"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://www.sigmaos.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/sigmaos"
    },
    {
      "id": "yc-summer-2021-sirka",
      "name": "Sirka",
      "slug": "sirka",
      "batch": "Summer 2021",
      "launched_on": "2021-06-26",
      "description": "Noom for Southeast Asia",
      "industry": "Healthcare",
      "tags": [
        "Consumer Health Services"
      ],
      "status": "Active",
      "team_size": 9,
      "website": "https://www.sirka.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/sirka"
    },
    {
      "id": "yc-summer-2021-sitenna",
      "name": "Sitenna",
      "slug": "sitenna",
      "batch": "Summer 2021",
      "launched_on": "2021-07-05",
      "description": "Compound B2B SaaS for modern infrastructure to deploy and manage sites",
      "industry": "B2B",
      "tags": [
        "Marketplace"
      ],
      "status": "Active",
      "team_size": 7,
      "website": "http://www.sitenna.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/sitenna"
    },
    {
      "id": "yc-summer-2021-slash",
      "name": "Slash",
      "slug": "slash",
      "batch": "Summer 2021",
      "launched_on": "2021-08-27",
      "description": "Banking, corporate cards, stablecoin payments – available globally.",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Active",
      "team_size": 70,
      "website": "https://www.slash.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/slash"
    },
    {
      "id": "yc-summer-2021-sleek",
      "name": "Sleek",
      "slug": "sleek",
      "batch": "Summer 2021",
      "launched_on": "2021-08-17",
      "description": "Browser automation for businesses.",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Machine Learning",
        "E-commerce"
      ],
      "status": "Acquired",
      "team_size": 5,
      "website": "https://www.onsleek.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/sleek"
    },
    {
      "id": "yc-summer-2021-slope",
      "name": "Slope",
      "slug": "slope",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "The B2B Payments Platform ",
      "industry": "Fintech",
      "tags": [
        "Artificial Intelligence",
        "Fintech",
        "Machine Learning",
        "Payments",
        "Fraud Detection"
      ],
      "status": "Active",
      "team_size": 16,
      "website": "http://www.slopepay.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/slope"
    },
    {
      "id": "yc-summer-2021-snapcalorie",
      "name": "SnapCalorie",
      "slug": "snapcalorie",
      "batch": "Summer 2021",
      "launched_on": "2021-07-26",
      "description": "Single photo nutrition tracking.",
      "industry": "Consumer",
      "tags": [
        "Computer Vision",
        "Fitness",
        "AI"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://www.snapcalorie.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/snapcalorie"
    },
    {
      "id": "yc-summer-2021-soco",
      "name": "Soco",
      "slug": "soco",
      "batch": "Summer 2021",
      "launched_on": "2021-08-27",
      "description": "Visual AI shopping",
      "industry": "Consumer",
      "tags": [
        "Artificial Intelligence",
        "Consumer",
        "Chatbot",
        "Retail",
        "AI Assistant"
      ],
      "status": "Active",
      "team_size": null,
      "website": "https://socosearch.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/soco"
    },
    {
      "id": "yc-summer-2021-solarmente",
      "name": "SolarMente",
      "slug": "solarmente",
      "batch": "Summer 2021",
      "launched_on": "2021-07-16",
      "description": "Home electrification at $0 upfront cost",
      "industry": "Consumer",
      "tags": [
        "Solar Power",
        "Climate",
        "Consumer Finance",
        "ClimateTech"
      ],
      "status": "Inactive",
      "team_size": 65,
      "website": "https://solarmente.es",
      "yc_profile_url": "https://www.ycombinator.com/companies/solarmente"
    },
    {
      "id": "yc-summer-2021-spark-studio",
      "name": "Spark Studio",
      "slug": "spark-studio",
      "batch": "Summer 2021",
      "launched_on": "2021-07-01",
      "description": "The most magical personal Voice-Led AI English Learning Buddy for Kids",
      "industry": "Education",
      "tags": [
        "AI-Enhanced Learning",
        "Education",
        "Generative AI",
        "eLearning",
        "AI"
      ],
      "status": "Active",
      "team_size": 27,
      "website": "https://sparkstudio.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/spark-studio"
    },
    {
      "id": "yc-summer-2021-spoken",
      "name": "Spoken",
      "slug": "spoken",
      "batch": "Summer 2021",
      "launched_on": "2022-03-17",
      "description": "Never overpay online",
      "industry": "Consumer",
      "tags": [
        "Artificial Intelligence",
        "Machine Learning",
        "Marketplace",
        "Consumer",
        "E-commerce"
      ],
      "status": "Inactive",
      "team_size": 7,
      "website": "http://www.spoken.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/spoken"
    },
    {
      "id": "yc-summer-2021-sproutfi",
      "name": "Sproutfi",
      "slug": "sproutfi",
      "batch": "Summer 2021",
      "launched_on": "2021-07-06",
      "description": "Latin Americas' first investing social network.  Learn. Share. Invest.",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Acquired",
      "team_size": 17,
      "website": "",
      "yc_profile_url": "https://www.ycombinator.com/companies/sproutfi"
    },
    {
      "id": "yc-summer-2021-squire-ai",
      "name": "Squire.ai",
      "slug": "squire-ai",
      "batch": "Summer 2021",
      "launched_on": "2021-07-28",
      "description": "Never code alone.",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Developer Tools",
        "SaaS",
        "Compliance",
        "Security"
      ],
      "status": "Inactive",
      "team_size": 8,
      "website": "https://squire.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/squire-ai"
    },
    {
      "id": "yc-summer-2021-staffbar",
      "name": "Superwall",
      "slug": "staffbar",
      "batch": "Summer 2021",
      "launched_on": "2021-08-09",
      "description": "Subscription infrastructure & paywall experimentation for mobile apps",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "Payments",
        "AI"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "https://superwall.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/staffbar"
    },
    {
      "id": "yc-summer-2021-stardex",
      "name": "Stardex",
      "slug": "stardex",
      "batch": "Summer 2021",
      "launched_on": "2021-08-02",
      "description": "AI native ATS + CRM for executive search firms",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Productivity"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://www.stardex.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/stardex"
    },
    {
      "id": "yc-summer-2021-stepful",
      "name": "Stepful",
      "slug": "stepful",
      "batch": "Summer 2021",
      "launched_on": "2021-07-20",
      "description": "Online Training for Healthcare Jobs",
      "industry": "Education",
      "tags": [
        "eLearning",
        "Healthcare"
      ],
      "status": "Active",
      "team_size": 100,
      "website": "https://www.stepful.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/stepful"
    },
    {
      "id": "yc-summer-2021-stipop",
      "name": "Stipop",
      "slug": "stipop",
      "batch": "Summer 2021",
      "launched_on": "2021-06-22",
      "description": "Monetization platform for character creators",
      "industry": "Consumer",
      "tags": [
        "Marketplace",
        "Consumer",
        "Community"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://studio.stipop.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/stipop"
    },
    {
      "id": "yc-summer-2021-storylane",
      "name": "Storylane",
      "slug": "storylane",
      "batch": "Summer 2021",
      "launched_on": "2021-07-16",
      "description": "Build Interactive Product Demo in 10 mins for SaaS companies",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 55,
      "website": "https://www.storylane.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/storylane"
    },
    {
      "id": "yc-summer-2021-stownest",
      "name": "Stownest",
      "slug": "stownest",
      "batch": "Summer 2021",
      "launched_on": "2021-06-25",
      "description": "Flexible On-Demand Storage Space for Household, SMEs & Travellers.",
      "industry": "Consumer",
      "tags": [
        "Warehouse Management Tech",
        "B2B"
      ],
      "status": "Active",
      "team_size": 80,
      "website": "https://stownest.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/stownest"
    },
    {
      "id": "yc-summer-2021-strideq",
      "name": "StrideQ",
      "slug": "strideq",
      "batch": "Summer 2021",
      "launched_on": "2021-08-06",
      "description": "Automated phone ordering system for restaurants",
      "industry": "B2B",
      "tags": [
        "Food Service Robots & Machines",
        "SaaS",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://strideq.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/strideq"
    },
    {
      "id": "yc-summer-2021-strive-math",
      "name": "Strive Math",
      "slug": "strive-math",
      "batch": "Summer 2021",
      "launched_on": "2021-08-09",
      "description": "Online Coding School for Kids 8-16",
      "industry": "Education",
      "tags": [
        "Education"
      ],
      "status": "Active",
      "team_size": 13,
      "website": "https://www.strivemath.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/strive-math"
    },
    {
      "id": "yc-summer-2021-studystream",
      "name": "StudyStream",
      "slug": "studystream",
      "batch": "Summer 2021",
      "launched_on": "2021-07-29",
      "description": "24/7 video platform & online community for students to study together",
      "industry": "Education",
      "tags": [
        "Education"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://studystream.live",
      "yc_profile_url": "https://www.ycombinator.com/companies/studystream"
    },
    {
      "id": "yc-summer-2021-sully-ai",
      "name": "Sully.ai",
      "slug": "sully-ai",
      "batch": "Summer 2021",
      "launched_on": "2021-06-29",
      "description": "Autonomous team of AI agents that runs the entire hospital operations",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "Health Tech",
        "B2B",
        "Healthcare"
      ],
      "status": "Active",
      "team_size": 49,
      "website": "https://www.sully.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/sully-ai"
    },
    {
      "id": "yc-summer-2021-suplias",
      "name": "Suplias",
      "slug": "suplias",
      "batch": "Summer 2021",
      "launched_on": "2021-06-30",
      "description": "We enable FMCG distributors in Africa buy inventory on credit",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Marketplace",
        "B2B"
      ],
      "status": "Active",
      "team_size": 9,
      "website": "https://suplias.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/suplias"
    },
    {
      "id": "yc-summer-2021-swipe-2",
      "name": "Swipe",
      "slug": "swipe-2",
      "batch": "Summer 2021",
      "launched_on": "2021-08-12",
      "description": "Super AI Accountant for SMBs",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Fintech",
        "SaaS",
        "B2B",
        "AI Assistant"
      ],
      "status": "Active",
      "team_size": 60,
      "website": "https://getswipe.in",
      "yc_profile_url": "https://www.ycombinator.com/companies/swipe-2"
    },
    {
      "id": "yc-summer-2021-synder",
      "name": "Synder",
      "slug": "synder",
      "batch": "Summer 2021",
      "launched_on": "2021-07-07",
      "description": "Easy accounting for e-commerce",
      "industry": "B2B",
      "tags": [
        "E-Commerce"
      ],
      "status": "Active",
      "team_size": null,
      "website": "https://synder.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/synder"
    },
    {
      "id": "yc-summer-2021-tablevibe-co",
      "name": "Tablevibe",
      "slug": "tablevibe-co",
      "batch": "Summer 2021",
      "launched_on": "2021-06-25",
      "description": "All-in-one digital ordering system for restaurants",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "E-commerce",
        "Food Tech",
        "Retail"
      ],
      "status": "Acquired",
      "team_size": 10,
      "website": "https://www.tablevibe.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/tablevibe-co"
    },
    {
      "id": "yc-summer-2021-tag",
      "name": "TAG",
      "slug": "tag",
      "batch": "Summer 2021",
      "launched_on": "2021-07-21",
      "description": "TAG is the First Digital Bank (Chime/Revolut/N26) for Pakistan",
      "industry": "Fintech",
      "tags": [
        "FinOps",
        "Fintech"
      ],
      "status": "Active",
      "team_size": 36,
      "website": "https://tagme.pk/",
      "yc_profile_url": "https://www.ycombinator.com/companies/tag"
    },
    {
      "id": "yc-summer-2021-talentdrop",
      "name": "Talentdrop",
      "slug": "talentdrop",
      "batch": "Summer 2021",
      "launched_on": "2021-06-25",
      "description": "Your personal hiring page.",
      "industry": "B2B",
      "tags": [
        "Marketplace",
        "SaaS",
        "Recruiting"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "https://www.talentdrop.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/talentdrop"
    },
    {
      "id": "yc-summer-2021-talus-bio",
      "name": "Talus Bio",
      "slug": "talus-bio",
      "batch": "Summer 2021",
      "launched_on": "2021-08-24",
      "description": "Discovering drugs that target the DNA regulome",
      "industry": "Healthcare",
      "tags": [
        "Biotech",
        "Genomics",
        "Drug discovery"
      ],
      "status": "Active",
      "team_size": 16,
      "website": "https://www.talus.bio",
      "yc_profile_url": "https://www.ycombinator.com/companies/talus-bio"
    },
    {
      "id": "yc-summer-2021-tarsal",
      "name": "Tarsal",
      "slug": "tarsal",
      "batch": "Summer 2021",
      "launched_on": "2023-04-03",
      "description": "Data pipeline for your security data lake.",
      "industry": "B2B",
      "tags": [
        "B2B",
        "Cybersecurity",
        "Big Data",
        "Data Engineering"
      ],
      "status": "Acquired",
      "team_size": 10,
      "website": "https://www.tarsal.co/",
      "yc_profile_url": "https://www.ycombinator.com/companies/tarsal"
    },
    {
      "id": "yc-summer-2021-tavus",
      "name": "Tavus",
      "slug": "tavus",
      "batch": "Summer 2021",
      "launched_on": "2021-07-07",
      "description": "Building the human layer of AI",
      "industry": "B2B",
      "tags": [
        "Generative AI",
        "B2B",
        "Video",
        "Infrastructure",
        "AI"
      ],
      "status": "Active",
      "team_size": 40,
      "website": "https://www.tavus.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/tavus"
    },
    {
      "id": "yc-summer-2021-telivy",
      "name": "Telivy",
      "slug": "telivy",
      "batch": "Summer 2021",
      "launched_on": "2021-08-19",
      "description": "Automate your cyber security risk assessments",
      "industry": "B2B",
      "tags": [
        "Security",
        "Cybersecurity"
      ],
      "status": "Acquired",
      "team_size": 6,
      "website": "https://www.telivy.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/telivy"
    },
    {
      "id": "yc-summer-2021-telmai",
      "name": "Telmai",
      "slug": "telmai",
      "batch": "Summer 2021",
      "launched_on": "2021-08-24",
      "description": "Automated data observability and quality for Data Lake",
      "industry": "B2B",
      "tags": [
        "Analytics",
        "AI",
        "ML"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://www.telm.ai/",
      "yc_profile_url": "https://www.ycombinator.com/companies/telmai"
    },
    {
      "id": "yc-summer-2021-tenyks",
      "name": "Tenyks",
      "slug": "tenyks",
      "batch": "Summer 2021",
      "launched_on": "2021-08-27",
      "description": "The World's Most Versatile Video Answering Engine ",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Computer Vision",
        "Video",
        "AI",
        "AI Assistant"
      ],
      "status": "Active",
      "team_size": 11,
      "website": "http://tenyks.ai/",
      "yc_profile_url": "https://www.ycombinator.com/companies/tenyks"
    },
    {
      "id": "yc-summer-2021-testrigor",
      "name": "testRigor",
      "slug": "testrigor",
      "batch": "Summer 2021",
      "launched_on": "2021-08-24",
      "description": "Executable specifications in English for test automation",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "https://testrigor.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/testrigor"
    },
    {
      "id": "yc-summer-2021-the-breakaway",
      "name": "The Breakaway",
      "slug": "the-breakaway",
      "batch": "Summer 2021",
      "launched_on": "2021-07-11",
      "description": "The personal coach and companion for cyclists.",
      "industry": "Consumer",
      "tags": [
        "Fitness",
        "Health & Wellness"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "https://www.breakaway.app/",
      "yc_profile_url": "https://www.ycombinator.com/companies/the-breakaway"
    },
    {
      "id": "yc-summer-2021-therify",
      "name": "Therify",
      "slug": "therify",
      "batch": "Summer 2021",
      "launched_on": "2021-06-20",
      "description": "Inclusive mental healthcare for companies",
      "industry": "B2B",
      "tags": [],
      "status": "Active",
      "team_size": 3,
      "website": "https://www.therify.co/",
      "yc_profile_url": "https://www.ycombinator.com/companies/therify"
    },
    {
      "id": "yc-summer-2021-titipku",
      "name": "Titipku",
      "slug": "titipku",
      "batch": "Summer 2021",
      "launched_on": "2021-07-09",
      "description": "Super Hyperlocal Marketplace for SMEs in Indonesia",
      "industry": "Consumer",
      "tags": [
        "Grocery",
        "Marketplace",
        "Delivery"
      ],
      "status": "Active",
      "team_size": 19,
      "website": "https://titipku.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/titipku"
    },
    {
      "id": "yc-summer-2021-toku",
      "name": "Toku",
      "slug": "toku",
      "batch": "Summer 2021",
      "launched_on": "2021-07-12",
      "description": "Account Receivables Platform for Latin American Enterprises",
      "industry": "B2B",
      "tags": [
        "FinOps",
        "Fintech",
        "SaaS",
        "Payments",
        "Subscriptions"
      ],
      "status": "Active",
      "team_size": 150,
      "website": "https://trytoku.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/toku"
    },
    {
      "id": "yc-summer-2021-trackchain",
      "name": "TrackChain",
      "slug": "trackchain",
      "batch": "Summer 2021",
      "launched_on": "2021-07-29",
      "description": "AI-native logistics OS for autonomous freight execution",
      "industry": "B2B",
      "tags": [
        "Logistics",
        "Supply Chain",
        "AI"
      ],
      "status": "Active",
      "team_size": 20,
      "website": "https://trackchain.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/trackchain"
    },
    {
      "id": "yc-summer-2021-transastra-corporation",
      "name": "TransAstra Corporation",
      "slug": "transastra-corporation",
      "batch": "Summer 2021",
      "launched_on": "2021-06-24",
      "description": "Orbital logistics: Unleashing space industry, from Earth to asteroids",
      "industry": "Industrials",
      "tags": [
        "Space Exploration"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://www.transastra.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/transastra-corporation"
    },
    {
      "id": "yc-summer-2021-trii",
      "name": "trii",
      "slug": "trii",
      "batch": "Summer 2021",
      "launched_on": "2021-06-30",
      "description": "One stop investment solution for retail investors in Latam",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Active",
      "team_size": 41,
      "website": "https://trii.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/trii"
    },
    {
      "id": "yc-summer-2021-truss",
      "name": "Truss",
      "slug": "truss",
      "batch": "Summer 2021",
      "launched_on": "2021-07-23",
      "description": "Banking for construction",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Payments",
        "Construction"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://trusspayments.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/truss"
    },
    {
      "id": "yc-summer-2021-tuli-health",
      "name": "Tuli Health",
      "slug": "tuli-health",
      "batch": "Summer 2021",
      "launched_on": "2021-08-16",
      "description": "Transforming pharmacies in the UK into diagnostic centers",
      "industry": "Healthcare",
      "tags": [
        "SaaS",
        "Telemedicine",
        "Primary Care"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://tuli.health",
      "yc_profile_url": "https://www.ycombinator.com/companies/tuli-health"
    },
    {
      "id": "yc-summer-2021-turion-space",
      "name": "Turion Space",
      "slug": "turion-space",
      "batch": "Summer 2021",
      "launched_on": "2021-07-06",
      "description": "Moving Things Around in Space, Imaging Space Objects When We're Not",
      "industry": "Industrials",
      "tags": [
        "Space Exploration",
        "Satellites"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://turionspace.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/turion-space"
    },
    {
      "id": "yc-summer-2021-union54",
      "name": "Union54",
      "slug": "union54",
      "batch": "Summer 2021",
      "launched_on": "2021-08-06",
      "description": "Developers of ChitChat, an integrated messaging and payments wallet…",
      "industry": "Fintech",
      "tags": [
        "FinOps",
        "Fintech",
        "Consumer",
        "B2B",
        "Messaging"
      ],
      "status": "Active",
      "team_size": 17,
      "website": "https://union54.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/union54"
    },
    {
      "id": "yc-summer-2021-v-flow-medical-inc",
      "name": "V-Flow Medical",
      "slug": "v-flow-medical-inc",
      "batch": "Summer 2021",
      "launched_on": "2021-06-30",
      "description": "Transforming the lives of millions of women suffering from chronic…",
      "industry": "Healthcare",
      "tags": [
        "Medical Devices"
      ],
      "status": "Inactive",
      "team_size": 4,
      "website": "https://www.vflowmedicalinc.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/v-flow-medical-inc"
    },
    {
      "id": "yc-summer-2021-varos",
      "name": "Varos",
      "slug": "varos",
      "batch": "Summer 2021",
      "launched_on": "2021-07-04",
      "description": "AI Business Analysts to gather requirements and optimize processes",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Analytics"
      ],
      "status": "Active",
      "team_size": 9,
      "website": "http://varos.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/varos"
    },
    {
      "id": "yc-summer-2021-vedabio",
      "name": "VedaBio",
      "slug": "vedabio",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "CRISPR powered Diagnostics with results in minutes.",
      "industry": "Healthcare",
      "tags": [
        "Hard Tech"
      ],
      "status": "Active",
      "team_size": 30,
      "website": "https://www.vedabio.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/vedabio"
    },
    {
      "id": "yc-summer-2021-verano-health",
      "name": "Verano Health",
      "slug": "verano-health",
      "batch": "Summer 2021",
      "launched_on": "2021-08-03",
      "description": "Nonprofit telehealth coaches for underserved Americans on Medicaid",
      "industry": "Healthcare",
      "tags": [
        "Mental Health Tech",
        "Consumer Health Services",
        "Healthcare IT"
      ],
      "status": "Acquired",
      "team_size": 3,
      "website": "https://www.veranohealth.org/",
      "yc_profile_url": "https://www.ycombinator.com/companies/verano-health"
    },
    {
      "id": "yc-summer-2021-verde",
      "name": "Verde",
      "slug": "verde",
      "batch": "Summer 2021",
      "launched_on": "2021-07-19",
      "description": "Digital lending platform for Brazilian farmers",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "SaaS",
        "B2B"
      ],
      "status": "Inactive",
      "team_size": 4,
      "website": "https://www.verde.agr.br",
      "yc_profile_url": "https://www.ycombinator.com/companies/verde"
    },
    {
      "id": "yc-summer-2021-verihubs",
      "name": "Verihubs",
      "slug": "verihubs",
      "batch": "Summer 2021",
      "launched_on": "2021-07-27",
      "description": "AI-powered Deepfake Detection",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 63,
      "website": "https://verihubs.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/verihubs"
    },
    {
      "id": "yc-summer-2021-vibe-kanban",
      "name": "Vibe Kanban",
      "slug": "vibe-kanban",
      "batch": "Summer 2021",
      "launched_on": "2021-08-20",
      "description": "Plan and review AI generated code",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Machine Learning",
        "Open Source"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://vibekanban.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/vibe-kanban"
    },
    {
      "id": "yc-summer-2021-vinco",
      "name": "Vinco",
      "slug": "vinco",
      "batch": "Summer 2021",
      "launched_on": "2021-07-01",
      "description": "Retaining employees in LatAm via education",
      "industry": "B2B",
      "tags": [
        "Education",
        "Marketplace",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 35,
      "website": "https://www.vincoed.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/vinco"
    },
    {
      "id": "yc-summer-2021-vitalstrata",
      "name": "VitalStrata",
      "slug": "vitalstrata",
      "batch": "Summer 2021",
      "launched_on": "2021-08-12",
      "description": "AI for risk adjustment integrity ",
      "industry": "Healthcare",
      "tags": [
        "Health Tech",
        "Healthcare",
        "Health Insurance",
        "Healthcare IT"
      ],
      "status": "Active",
      "team_size": 1,
      "website": "https://www.vitalstrata.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/vitalstrata"
    },
    {
      "id": "yc-summer-2021-vogent",
      "name": "Vogent",
      "slug": "vogent",
      "batch": "Summer 2021",
      "launched_on": "2021-08-06",
      "description": "Build Voice AI Agents",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "B2B",
        "Sales",
        "Operations"
      ],
      "status": "Acquired",
      "team_size": 3,
      "website": "https://vogent.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/vogent"
    },
    {
      "id": "yc-summer-2021-wabi",
      "name": "Wabi",
      "slug": "wabi",
      "batch": "Summer 2021",
      "launched_on": "2021-08-01",
      "description": "We are Shopify for the $15B creator economy in LATAM",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Creator Economy"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "http://www.wabi.build",
      "yc_profile_url": "https://www.ycombinator.com/companies/wabi"
    },
    {
      "id": "yc-summer-2021-warpbuild",
      "name": "WarpBuild",
      "slug": "warpbuild",
      "batch": "Summer 2021",
      "launched_on": "2021-07-15",
      "description": "Accelerate software development with WarpBuild's 10x faster CI infra.",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "Generative AI",
        "SaaS",
        "Productivity",
        "DevOps"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://www.warpbuild.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/warpbuild"
    },
    {
      "id": "yc-summer-2021-warpfy",
      "name": "Warpfy",
      "slug": "warpfy",
      "batch": "Summer 2021",
      "launched_on": "2021-08-08",
      "description": "Building Shein of Home: tech-driven, design-mfr Home Lifestyle Brand",
      "industry": "Consumer",
      "tags": [
        "Artificial Intelligence",
        "Marketplace",
        "E-commerce",
        "Retail"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "https://warpfy.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/warpfy"
    },
    {
      "id": "yc-summer-2021-warrant",
      "name": "Warrant",
      "slug": "warrant",
      "batch": "Summer 2021",
      "launched_on": "2021-07-01",
      "description": "Authorization and access control as a service.",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "B2B",
        "Open Source",
        "API"
      ],
      "status": "Acquired",
      "team_size": 3,
      "website": "https://warrant.dev/",
      "yc_profile_url": "https://www.ycombinator.com/companies/warrant"
    },
    {
      "id": "yc-summer-2021-waterplan",
      "name": "Waterplan",
      "slug": "waterplan",
      "batch": "Summer 2021",
      "launched_on": "2021-08-03",
      "description": "Water risk mitigation for industrial sites",
      "industry": "B2B",
      "tags": [
        "Machine Learning",
        "SaaS",
        "B2B",
        "Climate",
        "ClimateTech"
      ],
      "status": "Active",
      "team_size": 20,
      "website": "http://waterplan.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/waterplan"
    },
    {
      "id": "yc-summer-2021-whalesync",
      "name": "Whalesync",
      "slug": "whalesync",
      "batch": "Summer 2021",
      "launched_on": "2021-07-13",
      "description": "Manage your website from your favorite tools like Airtable and Notion",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Remote Work",
        "No-code",
        "Data Engineering",
        "Web Development"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://www.whalesync.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/whalesync"
    },
    {
      "id": "yc-summer-2021-whaly",
      "name": "Whaly",
      "slug": "whaly",
      "batch": "Summer 2021",
      "launched_on": "2021-07-26",
      "description": "Whaly is building a self-service analytics platform",
      "industry": "B2B",
      "tags": [
        "Data Engineering"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "https://whaly.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/whaly"
    },
    {
      "id": "yc-summer-2021-writesonic",
      "name": "Writesonic",
      "slug": "writesonic",
      "batch": "Summer 2021",
      "launched_on": "2021-08-11",
      "description": "Track & Boost Your Brand’s Visibility in AI Search",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Generative AI",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 35,
      "website": "https://writesonic.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/writesonic"
    },
    {
      "id": "yc-summer-2021-yemaachi-biotechnology",
      "name": "Yemaachi Biotechnology",
      "slug": "yemaachi-biotechnology",
      "batch": "Summer 2021",
      "launched_on": "2021-08-01",
      "description": "Diversifying precision cancer diagnostics and treatments",
      "industry": "Healthcare",
      "tags": [
        "Biotech",
        "Diagnostics",
        "Therapeutics"
      ],
      "status": "Active",
      "team_size": 16,
      "website": "https://yemaachi.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/yemaachi-biotechnology"
    },
    {
      "id": "yc-summer-2021-yummy-inc",
      "name": "Yummy",
      "slug": "yummy-inc",
      "batch": "Summer 2021",
      "launched_on": "2021-06-25",
      "description": "The everything app for LATAM",
      "industry": "Consumer",
      "tags": [
        "Marketplace",
        "SaaS",
        "Delivery",
        "Ridesharing"
      ],
      "status": "Active",
      "team_size": 260,
      "website": "https://www.yummysuperapp.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/yummy-inc"
    },
    {
      "id": "yc-summer-2021-zage",
      "name": "Zage",
      "slug": "zage",
      "batch": "Summer 2021",
      "launched_on": "2021-07-20",
      "description": "Pay by bank and earn rewards",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Inactive",
      "team_size": 10,
      "website": "https://tryzage.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/zage"
    },
    {
      "id": "yc-summer-2021-zaz-os",
      "name": "Zaz OS",
      "slug": "zaz-os",
      "batch": "Summer 2021",
      "launched_on": "2021-07-23",
      "description": "Lovable for internal products",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Developer Tools",
        "SaaS",
        "HR Tech",
        "AI Assistant"
      ],
      "status": "Active",
      "team_size": 9,
      "website": "https://www.zazos.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/zaz-os"
    },
    {
      "id": "yc-summer-2021-zeit-medical",
      "name": "Zeit Medical",
      "slug": "zeit-medical",
      "batch": "Summer 2021",
      "launched_on": "2021-08-02",
      "description": "Immediate stroke detection at home",
      "industry": "Healthcare",
      "tags": [
        "Sleep Tech",
        "Consumer Health Services",
        "Medical Devices"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://www.zeitmedical.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/zeit-medical"
    },
    {
      "id": "yc-summer-2021-zensors-inc",
      "name": "Zensors",
      "slug": "zensors-inc",
      "batch": "Summer 2021",
      "launched_on": "2021-08-27",
      "description": "AI to understand and automates the physical world",
      "industry": "B2B",
      "tags": [
        "AIOps",
        "Artificial Intelligence"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://www.zensors.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/zensors-inc"
    },
    {
      "id": "yc-summer-2021-zoios",
      "name": "Zoios.",
      "slug": "zoios",
      "batch": "Summer 2021",
      "launched_on": "2021-07-22",
      "description": "Help start- and scale-ups excel at People, Culture and Performance.",
      "industry": "B2B",
      "tags": [
        "Mental Health Tech",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://zoios.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/zoios"
    },
    {
      "id": "yc-winter-2021-abacum",
      "name": "Abacum",
      "slug": "abacum",
      "batch": "Winter 2021",
      "launched_on": "2021-02-17",
      "description": "The AI-native FP&A platform that helps Finance teams drive business…",
      "industry": "B2B",
      "tags": [
        "FinOps",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 125,
      "website": "https://www.abacum.ai/",
      "yc_profile_url": "https://www.ycombinator.com/companies/abacum"
    },
    {
      "id": "yc-winter-2021-aerotime",
      "name": "Aerotime",
      "slug": "aerotime",
      "batch": "Winter 2021",
      "launched_on": "2021-03-04",
      "description": "Calendar that kills time fragmentation",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Productivity"
      ],
      "status": "Inactive",
      "team_size": 6,
      "website": "https://www.aerotime.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/aerotime"
    },
    {
      "id": "yc-winter-2021-agendapro",
      "name": "AgendaPro",
      "slug": "agendapro",
      "batch": "Winter 2021",
      "launched_on": "2021-03-07",
      "description": "Shopify for Beauty and Wellness businesses in Latam",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 50,
      "website": "https://www.agendapro.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/agendapro"
    },
    {
      "id": "yc-winter-2021-alba-orbital",
      "name": "Alba Orbital",
      "slug": "alba-orbital",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "We make satellites to image everywhere on Earth, every 15 minutes",
      "industry": "Industrials",
      "tags": [
        "Hard Tech",
        "Satellites"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://www.albaorbital.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/alba-orbital"
    },
    {
      "id": "yc-winter-2021-albedo",
      "name": "Albedo",
      "slug": "albedo",
      "batch": "Winter 2021",
      "launched_on": "2021-01-25",
      "description": "Full-stack VLEO satellite missions",
      "industry": "Industrials",
      "tags": [
        "Hard Tech",
        "Satellites",
        "Climate",
        "Aerospace"
      ],
      "status": "Active",
      "team_size": 55,
      "website": "https://albedo.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/albedo"
    },
    {
      "id": "yc-winter-2021-alinea",
      "name": "Alinea",
      "slug": "alinea",
      "batch": "Winter 2021",
      "launched_on": "2021-02-12",
      "description": "Automated investing for the next generation 💸",
      "industry": "Fintech",
      "tags": [
        "Artificial Intelligence",
        "Education",
        "Fintech",
        "Social"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://alinea-invest.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/alinea"
    },
    {
      "id": "yc-winter-2021-alltruists",
      "name": "Alltruists",
      "slug": "alltruists",
      "batch": "Winter 2021",
      "launched_on": "2021-03-17",
      "description": "Kid-friendly, at-home volunteer projects in a box, delivered bimonthly",
      "industry": "Consumer",
      "tags": [
        "Subscriptions",
        "Kids"
      ],
      "status": "Inactive",
      "team_size": 1,
      "website": "http://www.alltruists.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/alltruists"
    },
    {
      "id": "yc-winter-2021-alokai",
      "name": "Alokai",
      "slug": "alokai",
      "batch": "Winter 2021",
      "launched_on": "2021-03-26",
      "description": "Frontend Platform for eCommerce",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "Open Source",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 100,
      "website": "https://www.alokai.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/alokai"
    },
    {
      "id": "yc-winter-2021-alpas",
      "name": "Alpas",
      "slug": "alpas",
      "batch": "Winter 2021",
      "launched_on": "2021-05-26",
      "description": "Software for procurement departments to find suppliers 10x faster",
      "industry": "B2B",
      "tags": [
        "Supply Chain",
        "Procurement"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://alpas.ai/",
      "yc_profile_url": "https://www.ycombinator.com/companies/alpas"
    },
    {
      "id": "yc-winter-2021-anima",
      "name": "Anima",
      "slug": "anima",
      "batch": "Winter 2021",
      "launched_on": "2021-02-23",
      "description": "The next generation care enablement platform",
      "industry": "Healthcare",
      "tags": [
        "Deep Learning",
        "SaaS",
        "Consumer Health Services"
      ],
      "status": "Active",
      "team_size": 20,
      "website": "http://www.animahealth.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/anima"
    },
    {
      "id": "yc-winter-2021-arnata",
      "name": "arnata",
      "slug": "arnata",
      "batch": "Winter 2021",
      "launched_on": "2021-03-03",
      "description": "AI workers for the logistics industry. ",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Generative AI",
        "B2B",
        "Logistics",
        "Supply Chain"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://arnata.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/arnata"
    },
    {
      "id": "yc-winter-2021-arpio",
      "name": "Arpio",
      "slug": "arpio",
      "batch": "Winter 2021",
      "launched_on": "2021-02-25",
      "description": "Recover from any outage in 10 minutes or less.",
      "industry": "B2B",
      "tags": [
        "Cloud Workload Protection",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 7,
      "website": "https://arpio.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/arpio"
    },
    {
      "id": "yc-winter-2021-atomic-industries",
      "name": "Atomic Industries",
      "slug": "atomic-industries",
      "batch": "Winter 2021",
      "launched_on": "2022-04-10",
      "description": "Software orchestrated mass production of plastics",
      "industry": "Industrials",
      "tags": [
        "Artificial Intelligence",
        "Hard Tech",
        "Manufacturing"
      ],
      "status": "Active",
      "team_size": 60,
      "website": "http://atomic.industries",
      "yc_profile_url": "https://www.ycombinator.com/companies/atomic-industries"
    },
    {
      "id": "yc-winter-2021-atrato",
      "name": "Atrato",
      "slug": "atrato",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Enabling consumers split the cost of purchases without a credit card",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Payments",
        "Consumer Finance"
      ],
      "status": "Active",
      "team_size": 80,
      "website": "https://www.atratopago.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/atrato"
    },
    {
      "id": "yc-winter-2021-aurabeat",
      "name": "Aurabeat",
      "slug": "aurabeat",
      "batch": "Winter 2021",
      "launched_on": "2023-09-08",
      "description": "Providing clean, safe, virus free air for homes, buildings and cars",
      "industry": "Industrials",
      "tags": [
        "Hardware",
        "Energy"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://www.aurabeattech.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/aurabeat"
    },
    {
      "id": "yc-winter-2021-auricle",
      "name": "Auricle",
      "slug": "auricle",
      "batch": "Winter 2021",
      "launched_on": "2023-03-31",
      "description": "Neurostimulation implant to restore hearing & speech understanding",
      "industry": "Healthcare",
      "tags": [
        "Hard Tech",
        "Neurotechnology",
        "Health Tech",
        "Medical Devices",
        "Healthcare"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://auricle.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/auricle"
    },
    {
      "id": "yc-winter-2021-authologic",
      "name": "Authologic",
      "slug": "authologic",
      "batch": "Winter 2021",
      "launched_on": "2021-03-27",
      "description": "Stripe for online identity verification",
      "industry": "B2B",
      "tags": [],
      "status": "Active",
      "team_size": 33,
      "website": "https://authologic.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/authologic"
    },
    {
      "id": "yc-winter-2021-authzed",
      "name": "authzed",
      "slug": "authzed",
      "batch": "Winter 2021",
      "launched_on": "2021-06-29",
      "description": "Authorization Infrastructure securing AI at OpenAI, Zoom, & more",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Developer Tools",
        "Security",
        "Open Source",
        "Data Engineering"
      ],
      "status": "Active",
      "team_size": 31,
      "website": "https://authzed.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/authzed"
    },
    {
      "id": "yc-winter-2021-avenue",
      "name": "Avenue",
      "slug": "avenue",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Observability platform for operations teams",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS",
        "Data Engineering"
      ],
      "status": "Acquired",
      "team_size": 8,
      "website": "https://avenue.app/",
      "yc_profile_url": "https://www.ycombinator.com/companies/avenue"
    },
    {
      "id": "yc-winter-2021-avion-school",
      "name": "Avion School",
      "slug": "avion-school",
      "batch": "Winter 2021",
      "launched_on": "2021-02-20",
      "description": "We teach Filipinos to become remote software engineers globally.",
      "industry": "Education",
      "tags": [
        "Education",
        "eLearning",
        "Recruiting"
      ],
      "status": "Inactive",
      "team_size": 4,
      "website": "https://avionschool.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/avion-school"
    },
    {
      "id": "yc-winter-2021-aviron-interactive",
      "name": "Aviron Interactive",
      "slug": "aviron-interactive",
      "batch": "Winter 2021",
      "launched_on": "2021-01-13",
      "description": "Aviron transforms workouts with game-based exercise machines, making…",
      "industry": "Consumer",
      "tags": [
        "Sports Tech",
        "Consumer Health Services",
        "Gaming"
      ],
      "status": "Active",
      "team_size": 90,
      "website": "https://www.avironactive.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/aviron-interactive"
    },
    {
      "id": "yc-winter-2021-avocado",
      "name": "Avocado",
      "slug": "avocado",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "AI-Native Restaurant POS",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "Generative AI",
        "Restaurant Tech",
        "AI",
        "AI Assistant"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://avocadopos.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/avocado"
    },
    {
      "id": "yc-winter-2021-awari",
      "name": "Awari",
      "slug": "awari",
      "batch": "Winter 2021",
      "launched_on": "2021-03-10",
      "description": "Reinventing lifelong learning for the future of work.",
      "industry": "Education",
      "tags": [
        "Education",
        "eLearning"
      ],
      "status": "Acquired",
      "team_size": 35,
      "website": "https://awari.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/awari"
    },
    {
      "id": "yc-winter-2021-axiom-ai",
      "name": "Axiom.ai",
      "slug": "axiom-ai",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "No-code Browser RPA",
      "industry": "B2B",
      "tags": [
        "Robotic Process Automation",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://axiom.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/axiom-ai"
    },
    {
      "id": "yc-winter-2021-axle-health",
      "name": "Axle Health",
      "slug": "axle-health",
      "batch": "Winter 2021",
      "launched_on": "2021-01-23",
      "description": "Scheduling and workforce management SaaS for home healthcare providers",
      "industry": "Healthcare",
      "tags": [
        "Scheduling",
        "Logistics",
        "Healthcare"
      ],
      "status": "Active",
      "team_size": 14,
      "website": "https://www.axlehealth.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/axle-health"
    },
    {
      "id": "yc-winter-2021-axolo",
      "name": "Axolo",
      "slug": "axolo",
      "batch": "Winter 2021",
      "launched_on": "2021-08-05",
      "description": "Improving Developer Experience with Streamlined Code Reviews",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://axolo.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/axolo"
    },
    {
      "id": "yc-winter-2021-betterhalf",
      "name": "Betterhalf",
      "slug": "betterhalf",
      "batch": "Winter 2021",
      "launched_on": "2021-01-13",
      "description": "India’s first and only marriage super app",
      "industry": "Consumer",
      "tags": [
        "Dating",
        "India"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "https://betterhalf.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/betterhalf"
    },
    {
      "id": "yc-winter-2021-bewell-digital",
      "name": "BeWell Digital",
      "slug": "bewell-digital",
      "batch": "Winter 2021",
      "launched_on": "2021-03-16",
      "description": "Building the operating system for diagnosis.",
      "industry": "Healthcare",
      "tags": [
        "SaaS"
      ],
      "status": "Inactive",
      "team_size": 2,
      "website": "http://www.bewelldigital.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/bewell-digital"
    },
    {
      "id": "yc-winter-2021-bimaplan",
      "name": "Bimaplan",
      "slug": "bimaplan",
      "batch": "Winter 2021",
      "launched_on": "2021-03-08",
      "description": "Affordable insurance for the next billion Indians",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Microinsurance"
      ],
      "status": "Active",
      "team_size": 30,
      "website": "https://www.bimaplan.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/bimaplan"
    },
    {
      "id": "yc-winter-2021-biodock",
      "name": "Biodock",
      "slug": "biodock",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Cloud AI microscopy automation",
      "industry": "Healthcare",
      "tags": [
        "Artificial Intelligence",
        "Deep Learning",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://www.biodock.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/biodock"
    },
    {
      "id": "yc-winter-2021-blink",
      "name": "Blink",
      "slug": "blink",
      "batch": "Winter 2021",
      "launched_on": "2021-03-14",
      "description": "Same-day delivery for e-commerce companies in Europe.",
      "industry": "Industrials",
      "tags": [
        "E-Commerce",
        "Logistics"
      ],
      "status": "Inactive",
      "team_size": 5,
      "website": "https://www.blinklastmile.com/en/",
      "yc_profile_url": "https://www.ycombinator.com/companies/blink"
    },
    {
      "id": "yc-winter-2021-bloom-3",
      "name": "Bloom",
      "slug": "bloom-3",
      "batch": "Winter 2021",
      "launched_on": "2021-08-06",
      "description": "Investing app that teaches you how to invest",
      "industry": "Fintech",
      "tags": [
        "Education",
        "Fintech",
        "Edtech"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://bloomapp.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/bloom-3"
    },
    {
      "id": "yc-winter-2021-bluelight",
      "name": "Bluelight",
      "slug": "bluelight",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Analytics, built for the trades.",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Analytics"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "https://usebluelight.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/bluelight"
    },
    {
      "id": "yc-winter-2021-boitas-com",
      "name": "boitas.com",
      "slug": "boitas-com",
      "batch": "Winter 2021",
      "launched_on": "2021-03-20",
      "description": "Largest B2B eCommerce platform for SMBs in Latin America. ",
      "industry": "B2B",
      "tags": [
        "Marketplace"
      ],
      "status": "Inactive",
      "team_size": 35,
      "website": "http://www.boitas.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/boitas-com"
    },
    {
      "id": "yc-winter-2021-botbuilt",
      "name": "BotBuilt",
      "slug": "botbuilt",
      "batch": "Winter 2021",
      "launched_on": "2022-08-16",
      "description": "We use robots to build houses.",
      "industry": "Industrials",
      "tags": [
        "Robotic Process Automation",
        "Robotics",
        "Construction",
        "Housing"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://www.botbuilt.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/botbuilt"
    },
    {
      "id": "yc-winter-2021-briohr",
      "name": "BrioHR",
      "slug": "briohr",
      "batch": "Winter 2021",
      "launched_on": "2021-03-05",
      "description": "All-in-one HR management platform for SMEs",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Human Resources",
        "B2B"
      ],
      "status": "Active",
      "team_size": 35,
      "website": "https://briohr.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/briohr"
    },
    {
      "id": "yc-winter-2021-bristle",
      "name": "Bristle",
      "slug": "bristle",
      "batch": "Winter 2021",
      "launched_on": "2021-02-26",
      "description": "At-home oral health testing, coaching & care",
      "industry": "Healthcare",
      "tags": [
        "Consumer Health Services",
        "Telemedicine"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "https://bristlehealth.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/bristle"
    },
    {
      "id": "yc-winter-2021-broad",
      "name": "Broad",
      "slug": "broad",
      "batch": "Winter 2021",
      "launched_on": "2021-02-24",
      "description": "The multicurrency account and card for Brazilians",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "http://www.broad.app",
      "yc_profile_url": "https://www.ycombinator.com/companies/broad"
    },
    {
      "id": "yc-winter-2021-bueno-finance",
      "name": "Bueno Finance",
      "slug": "bueno-finance",
      "batch": "Winter 2021",
      "launched_on": "2021-03-04",
      "description": "Building Chime for India",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "India",
        "Neobank"
      ],
      "status": "Acquired",
      "team_size": 18,
      "website": "https://buenofinanceinc.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/bueno-finance"
    },
    {
      "id": "yc-winter-2021-businessonbot",
      "name": "BusinessOnBot",
      "slug": "businessonbot",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Automated user acquisition & selling on WhatsApp for businesses",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "https://www.businessonbot.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/businessonbot"
    },
    {
      "id": "yc-winter-2021-camber-2",
      "name": "Camber",
      "slug": "camber-2",
      "batch": "Winter 2021",
      "launched_on": "2021-01-17",
      "description": "Admin automation for healthcare",
      "industry": "Healthcare",
      "tags": [
        "Mental Health Tech",
        "Health Tech"
      ],
      "status": "Active",
      "team_size": 85,
      "website": "https://www.camber.health/",
      "yc_profile_url": "https://www.ycombinator.com/companies/camber-2"
    },
    {
      "id": "yc-winter-2021-camelan",
      "name": "Camlist",
      "slug": "camelan",
      "batch": "Winter 2021",
      "launched_on": "2021-01-26",
      "description": "The super app for pets",
      "industry": "Consumer",
      "tags": [
        "Marketplace",
        "Video"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://www.camlist.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/camelan"
    },
    {
      "id": "yc-winter-2021-camp",
      "name": "Camp",
      "slug": "camp",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "A Nouns DAO governance client",
      "industry": "Consumer",
      "tags": [
        "GovTech",
        "Crypto / Web3",
        "Infrastructure"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "https://nouns.camp",
      "yc_profile_url": "https://www.ycombinator.com/companies/camp"
    },
    {
      "id": "yc-winter-2021-care-weather",
      "name": "Care Weather",
      "slug": "care-weather",
      "batch": "Winter 2021",
      "launched_on": "2023-08-22",
      "description": "The highest-accuracy global weather data from low-cost flat satellites",
      "industry": "Industrials",
      "tags": [
        "Hard Tech",
        "Space Exploration",
        "Satellites",
        "Weather",
        "Agriculture"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://www.careweather.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/care-weather"
    },
    {
      "id": "yc-winter-2021-cashbook",
      "name": "CashBook",
      "slug": "cashbook",
      "batch": "Winter 2021",
      "launched_on": "2021-03-14",
      "description": "Ramp for Indian Businesses - UPI Wallets for Employee Expenses",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://cashbook.in",
      "yc_profile_url": "https://www.ycombinator.com/companies/cashbook"
    },
    {
      "id": "yc-winter-2021-charge-running",
      "name": "Charge Running",
      "slug": "charge-running",
      "batch": "Winter 2021",
      "launched_on": "2021-03-20",
      "description": "Provides live, virtual running classes to runners all around the world",
      "industry": "Consumer",
      "tags": [
        "SaaS",
        "Consumer Health Services",
        "Subscriptions"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "http://www.chargerunning.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/charge-running"
    },
    {
      "id": "yc-winter-2021-chatwoot",
      "name": "Chatwoot",
      "slug": "chatwoot",
      "batch": "Winter 2021",
      "launched_on": "2021-02-22",
      "description": "The modern, open source, self-hosted AI customer support platform",
      "industry": "B2B",
      "tags": [
        "B2B",
        "Customer Success",
        "Open Source",
        "Customer Service",
        "Customer Support"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://www.chatwoot.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/chatwoot"
    },
    {
      "id": "yc-winter-2021-cheqout",
      "name": "Cheqout",
      "slug": "cheqout",
      "batch": "Winter 2021",
      "launched_on": "2021-03-03",
      "description": "Mobile ordering & payments for Brick & Mortars",
      "industry": "Fintech",
      "tags": [
        "Payments"
      ],
      "status": "Inactive",
      "team_size": 6,
      "website": "https://cheqout.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/cheqout"
    },
    {
      "id": "yc-winter-2021-chorus-sleep",
      "name": "Chorus Sleep",
      "slug": "chorus-sleep",
      "batch": "Winter 2021",
      "launched_on": "2021-02-15",
      "description": "Mobile app and coaching program that helps employees sleep better",
      "industry": "B2B",
      "tags": [
        "Mental Health Tech",
        "Sleep Tech",
        "Health Tech"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://www.chorussleep.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/chorus-sleep"
    },
    {
      "id": "yc-winter-2021-clay",
      "name": "Clay",
      "slug": "clay",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Figma for 3D design",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Productivity",
        "Collaboration",
        "Design Tools"
      ],
      "status": "Inactive",
      "team_size": 5,
      "website": "https://clay3d.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/clay"
    },
    {
      "id": "yc-winter-2021-clear",
      "name": "Clear",
      "slug": "clear",
      "batch": "Winter 2021",
      "launched_on": "2021-06-20",
      "description": "The unbiased AI and data layer for skin health.",
      "industry": "Consumer",
      "tags": [
        "Marketplace",
        "Consumer",
        "Digital Health",
        "Data Engineering"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://getclearapp.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/clear"
    },
    {
      "id": "yc-winter-2021-clicoh",
      "name": "clicOH",
      "slug": "clicoh",
      "batch": "Winter 2021",
      "launched_on": "2021-03-04",
      "description": "Amazon-like logistics for e-commerce companies in Latam",
      "industry": "B2B",
      "tags": [
        "Warehouse Management Tech",
        "B2B",
        "Logistics"
      ],
      "status": "Active",
      "team_size": 155,
      "website": "http://clicoh.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/clicoh"
    },
    {
      "id": "yc-winter-2021-clipdrop",
      "name": "ClipDrop",
      "slug": "clipdrop",
      "batch": "Winter 2021",
      "launched_on": "2021-03-04",
      "description": "Turn regular mobile photos into professional product visuals",
      "industry": "Consumer",
      "tags": [
        "SaaS",
        "Computer Vision",
        "Design Tools"
      ],
      "status": "Acquired",
      "team_size": 5,
      "website": "https://clipdrop.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/clipdrop"
    },
    {
      "id": "yc-winter-2021-cloud-humans",
      "name": "cloud humans",
      "slug": "cloud-humans",
      "batch": "Winter 2021",
      "launched_on": "2021-03-23",
      "description": "AI-powered customer service for startups",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "Chatbot",
        "Customer Service"
      ],
      "status": "Active",
      "team_size": 30,
      "website": "https://www.cloudhumans.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/cloud-humans"
    },
    {
      "id": "yc-winter-2021-codeball",
      "name": "Codeball",
      "slug": "codeball",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "AI-Powered Code Review",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Developer Tools",
        "SaaS"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "https://codeball.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/codeball"
    },
    {
      "id": "yc-winter-2021-coderhouse",
      "name": "Coderhouse",
      "slug": "coderhouse",
      "batch": "Winter 2021",
      "launched_on": "2021-03-04",
      "description": "Effective and accessible online live education.",
      "industry": "Education",
      "tags": [
        "Education",
        "eLearning",
        "Community"
      ],
      "status": "Active",
      "team_size": 225,
      "website": "https://www.coderhouse.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/coderhouse"
    },
    {
      "id": "yc-winter-2021-codingal",
      "name": "Codingal",
      "slug": "codingal",
      "batch": "Winter 2021",
      "launched_on": "2021-03-23",
      "description": "Leading online after-school for kids & teens to learn AI & coding",
      "industry": "Education",
      "tags": [
        "Education",
        "eLearning",
        "Edtech"
      ],
      "status": "Active",
      "team_size": 60,
      "website": "https://www.codingal.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/codingal"
    },
    {
      "id": "yc-winter-2021-compose-ai",
      "name": "Compose.ai",
      "slug": "compose-ai",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Cut your writing time by 40% with AI-powered autocomplete",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "NLP",
        "Email"
      ],
      "status": "Active",
      "team_size": 7,
      "website": "https://compose.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/compose-ai"
    },
    {
      "id": "yc-winter-2021-compound-writing",
      "name": "Foster",
      "slug": "compound-writing",
      "batch": "Winter 2021",
      "launched_on": "2021-03-17",
      "description": "A better way to write.",
      "industry": "Consumer",
      "tags": [
        "Productivity"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://foster.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/compound-writing"
    },
    {
      "id": "yc-winter-2021-controlhub",
      "name": "ControlHub",
      "slug": "controlhub",
      "batch": "Winter 2021",
      "launched_on": "2023-01-20",
      "description": "Purchasing Software | Procure-to-Pay SaaS ",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "SaaS",
        "B2B"
      ],
      "status": "Inactive",
      "team_size": 22,
      "website": "https://controlhub.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/controlhub"
    },
    {
      "id": "yc-winter-2021-coverified",
      "name": "CoVerified",
      "slug": "coverified",
      "batch": "Winter 2021",
      "launched_on": "2021-01-13",
      "description": "Using infection data to keep organizations safe",
      "industry": "Healthcare",
      "tags": [],
      "status": "Inactive",
      "team_size": 9,
      "website": "https://www.coverified.us/",
      "yc_profile_url": "https://www.ycombinator.com/companies/coverified"
    },
    {
      "id": "yc-winter-2021-curvenote",
      "name": "Curvenote",
      "slug": "curvenote",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Communication and publishing tools for scientists",
      "industry": "Healthcare",
      "tags": [
        "Documents",
        "Developer Tools",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "https://curvenote.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/curvenote"
    },
    {
      "id": "yc-winter-2021-cyble",
      "name": "Cyble",
      "slug": "cyble",
      "batch": "Winter 2021",
      "launched_on": "2021-02-17",
      "description": "Cyble - World’s First Intelligence-Driven, AI-Native Security…",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Security",
        "AI"
      ],
      "status": "Active",
      "team_size": 197,
      "website": "https://cyble.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/cyble"
    },
    {
      "id": "yc-winter-2021-darrow",
      "name": "Darrow",
      "slug": "darrow",
      "batch": "Winter 2021",
      "launched_on": "2021-08-07",
      "description": "Bring Justice to Light",
      "industry": "B2B",
      "tags": [
        "LegalTech"
      ],
      "status": "Active",
      "team_size": 95,
      "website": "https://darrow.ai/",
      "yc_profile_url": "https://www.ycombinator.com/companies/darrow"
    },
    {
      "id": "yc-winter-2021-dashlabs-ai",
      "name": "Dashlabs.ai",
      "slug": "dashlabs-ai",
      "batch": "Winter 2021",
      "launched_on": "2021-01-25",
      "description": "Software for medical laboratories and clinics",
      "industry": "Healthcare",
      "tags": [
        "Health Tech",
        "B2B",
        "Digital Health",
        "Healthcare IT"
      ],
      "status": "Active",
      "team_size": 30,
      "website": "https://dashlabs.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/dashlabs-ai"
    },
    {
      "id": "yc-winter-2021-dataherald",
      "name": "Dataherald",
      "slug": "dataherald",
      "batch": "Winter 2021",
      "launched_on": "2021-01-27",
      "description": "Embed NL-to-SQL into your Product 📈",
      "industry": "B2B",
      "tags": [
        "AI-Enhanced Learning",
        "Artificial Intelligence",
        "SaaS",
        "B2B"
      ],
      "status": "Inactive",
      "team_size": 18,
      "website": "http://dataherald.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/dataherald"
    },
    {
      "id": "yc-winter-2021-datrics",
      "name": "Datrics",
      "slug": "datrics",
      "batch": "Winter 2021",
      "launched_on": "2021-01-24",
      "description": "Generative AI Healthcare Coding Automation",
      "industry": "Healthcare",
      "tags": [
        "B2B",
        "Analytics",
        "Healthcare",
        "Health Insurance",
        "AI"
      ],
      "status": "Active",
      "team_size": 22,
      "website": "https://datrics.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/datrics"
    },
    {
      "id": "yc-winter-2021-dayra",
      "name": "Dayra",
      "slug": "dayra",
      "batch": "Winter 2021",
      "launched_on": "2021-03-22",
      "description": "Data-driven embedded Financial Services for Gig Workers",
      "industry": "Fintech",
      "tags": [
        "Banking as a Service",
        "Fintech"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://Dayra.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/dayra"
    },
    {
      "id": "yc-winter-2021-degrees-of-freedom",
      "name": "Degrees of Freedom",
      "slug": "degrees-of-freedom",
      "batch": "Winter 2021",
      "launched_on": "2021-03-22",
      "description": "DoF provides a high quality, affordable higher education alternative.",
      "industry": "Education",
      "tags": [
        "Virtual Reality",
        "Nonprofit",
        "HR Tech",
        "Edtech",
        "AI"
      ],
      "status": "Inactive",
      "team_size": 7,
      "website": "https://www.DegreesOfFreedom.org",
      "yc_profile_url": "https://www.ycombinator.com/companies/degrees-of-freedom"
    },
    {
      "id": "yc-winter-2021-djamo",
      "name": "Djamo",
      "slug": "djamo",
      "batch": "Winter 2021",
      "launched_on": "2021-02-08",
      "description": "Challenger Bank for consumers in French speaking Africa.",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Active",
      "team_size": 250,
      "website": "https://www.djamo.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/djamo"
    },
    {
      "id": "yc-winter-2021-dreamworld",
      "name": "DreamWorld",
      "slug": "dreamworld",
      "batch": "Winter 2021",
      "launched_on": "2021-03-04",
      "description": "DreamWorld is a next-gen Minecraft with generative AI building",
      "industry": "Consumer",
      "tags": [
        "Gaming"
      ],
      "status": "Active",
      "team_size": 30,
      "website": "https://www.playdreamworld.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/dreamworld"
    },
    {
      "id": "yc-winter-2021-dressd",
      "name": "Dressd",
      "slug": "dressd",
      "batch": "Winter 2021",
      "launched_on": "2021-02-13",
      "description": "Make infinite $$$ off of clothes in your closet without selling them",
      "industry": "Consumer",
      "tags": [
        "Marketplace",
        "Consumer",
        "E-commerce"
      ],
      "status": "Inactive",
      "team_size": 1,
      "website": "https://dressd.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/dressd"
    },
    {
      "id": "yc-winter-2021-dyte",
      "name": "Dyte",
      "slug": "dyte",
      "batch": "Winter 2021",
      "launched_on": "2021-01-13",
      "description": "Real-time audio & video SDKs, ready to launch 🚀",
      "industry": "B2B",
      "tags": [
        "Video",
        "API",
        "Telecommunications"
      ],
      "status": "Acquired",
      "team_size": 45,
      "website": "https://dyte.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/dyte"
    },
    {
      "id": "yc-winter-2021-eat-blueprint",
      "name": "Eat Blueprint",
      "slug": "eat-blueprint",
      "batch": "Winter 2021",
      "launched_on": "2021-02-26",
      "description": "Longevity Nutrition Service",
      "industry": "Consumer",
      "tags": [
        "Anti-Aging",
        "Fitness",
        "Food",
        "Health & Wellness",
        "Food & Beverage"
      ],
      "status": "Inactive",
      "team_size": 2,
      "website": "https://eatblueprint.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/eat-blueprint"
    },
    {
      "id": "yc-winter-2021-emerge-tools",
      "name": "Emerge Tools",
      "slug": "emerge-tools",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Supercharge your mobile apps",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Developer Tools",
        "B2B",
        "Enterprise"
      ],
      "status": "Acquired",
      "team_size": 9,
      "website": "https://www.emergetools.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/emerge-tools"
    },
    {
      "id": "yc-winter-2021-enable-us",
      "name": "Enable Us",
      "slug": "enable-us",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Digital Sales Rooms (Acquired by MindTickle)",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "B2B"
      ],
      "status": "Acquired",
      "team_size": 14,
      "website": "https://www.enableus.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/enable-us"
    },
    {
      "id": "yc-winter-2021-encord",
      "name": "Encord",
      "slug": "encord",
      "batch": "Winter 2021",
      "launched_on": "2021-02-19",
      "description": "The data layer for physical AI",
      "industry": "B2B",
      "tags": [
        "Machine Learning",
        "Robotics",
        "Enterprise Software",
        "Infrastructure",
        "AI"
      ],
      "status": "Active",
      "team_size": 150,
      "website": "https://encord.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/encord"
    },
    {
      "id": "yc-winter-2021-enode",
      "name": "Enode",
      "slug": "enode",
      "batch": "Winter 2021",
      "launched_on": "2021-03-23",
      "description": "Energy Orchestration Platform",
      "industry": "Industrials",
      "tags": [
        "Climate",
        "API",
        "Energy",
        "Infrastructure"
      ],
      "status": "Active",
      "team_size": 70,
      "website": "http://www.enode.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/enode"
    },
    {
      "id": "yc-winter-2021-entelexo-biotherapeutics",
      "name": "Entelexo Biotherapeutics",
      "slug": "entelexo-biotherapeutics",
      "batch": "Winter 2021",
      "launched_on": "2021-03-05",
      "description": "Creating a New Class of Drugs to Address Incurable Autoimmune Diseases",
      "industry": "Healthcare",
      "tags": [
        "Biotech"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "https://www.entelexo.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/entelexo-biotherapeutics"
    },
    {
      "id": "yc-winter-2021-eqtble",
      "name": "eqtble",
      "slug": "eqtble",
      "batch": "Winter 2021",
      "launched_on": "2021-03-03",
      "description": "Turning HR data into actionable insights",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Human Resources",
        "B2B"
      ],
      "status": "Acquired",
      "team_size": 5,
      "website": "https://eqtble.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/eqtble"
    },
    {
      "id": "yc-winter-2021-estoca",
      "name": "Estoca",
      "slug": "estoca",
      "batch": "Winter 2021",
      "launched_on": "2021-03-10",
      "description": "The Logistics Operating System for E-commerce in LatAm",
      "industry": "B2B",
      "tags": [
        "B2B",
        "Logistics",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 150,
      "website": "https://www.estoca.com.br/",
      "yc_profile_url": "https://www.ycombinator.com/companies/estoca"
    },
    {
      "id": "yc-winter-2021-expent-inc",
      "name": "Expent Inc",
      "slug": "expent-inc",
      "batch": "Winter 2021",
      "launched_on": "2021-03-08",
      "description": "Procure the right software 5x faster",
      "industry": "B2B",
      "tags": [
        "Machine Learning",
        "SaaS",
        "B2B",
        "AI"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://www.expent.ai/",
      "yc_profile_url": "https://www.ycombinator.com/companies/expent-inc"
    },
    {
      "id": "yc-winter-2021-fable",
      "name": "Fable",
      "slug": "fable",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "The command center for product teams",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Productivity",
        "Enterprise Software"
      ],
      "status": "Inactive",
      "team_size": 2,
      "website": "https://www.tryfable.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/fable"
    },
    {
      "id": "yc-winter-2021-faction",
      "name": "Faction",
      "slug": "faction",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Driverless electric vehicles at a fraction of the cost of a car.",
      "industry": "Industrials",
      "tags": [
        "Autonomous Delivery",
        "Robotics",
        "Logistics",
        "Electric Vehicles",
        "Self-Driving Vehicles"
      ],
      "status": "Inactive",
      "team_size": 25,
      "website": "http://www.faction.us",
      "yc_profile_url": "https://www.ycombinator.com/companies/faction"
    },
    {
      "id": "yc-winter-2021-fathom",
      "name": "Fathom",
      "slug": "fathom",
      "batch": "Winter 2021",
      "launched_on": "2022-01-07",
      "description": "The most flexible AI meeting notetaker ever built.",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Productivity",
        "AI",
        "Note-taking"
      ],
      "status": "Active",
      "team_size": 95,
      "website": "https://www.fathom.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/fathom"
    },
    {
      "id": "yc-winter-2021-feroot-security",
      "name": "Feroot Security",
      "slug": "feroot-security",
      "batch": "Winter 2021",
      "launched_on": "2021-08-29",
      "description": "AI-powered Compliance Platform for PCI 4, CCPA, HIPAA, CIPA, 50+ laws",
      "industry": "B2B",
      "tags": [
        "Compliance",
        "Security",
        "Privacy"
      ],
      "status": "Active",
      "team_size": 24,
      "website": "https://www.feroot.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/feroot-security"
    },
    {
      "id": "yc-winter-2021-fifthtry",
      "name": "FifthTry",
      "slug": "fifthtry",
      "batch": "Winter 2021",
      "launched_on": "2021-03-20",
      "description": "Continuous Documentation To End Documentation Rot",
      "industry": "B2B",
      "tags": [
        "Documents",
        "Developer Tools"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://www.FifthTry.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/fifthtry"
    },
    {
      "id": "yc-winter-2021-finantier",
      "name": "Finantier",
      "slug": "finantier",
      "batch": "Winter 2021",
      "launched_on": "2020-12-23",
      "description": "Plaid for Southeast Asia",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "SaaS",
        "B2B"
      ],
      "status": "Inactive",
      "team_size": 40,
      "website": "https://finantier.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/finantier"
    },
    {
      "id": "yc-winter-2021-finary",
      "name": "Finary",
      "slug": "finary",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Discord for investing.",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Community"
      ],
      "status": "Inactive",
      "team_size": 6,
      "website": "https://about.finary.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/finary"
    },
    {
      "id": "yc-winter-2021-finary-com",
      "name": "Finary.com",
      "slug": "finary-com",
      "batch": "Winter 2021",
      "launched_on": "2021-03-20",
      "description": "The new wealth manager for Europe",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Investing",
        "Neobank"
      ],
      "status": "Active",
      "team_size": 80,
      "website": "https://finary.com/en",
      "yc_profile_url": "https://www.ycombinator.com/companies/finary-com"
    },
    {
      "id": "yc-winter-2021-finley",
      "name": "Finley",
      "slug": "finley",
      "batch": "Winter 2021",
      "launched_on": "2021-02-18",
      "description": "Streamline your debt capital raise and management",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "SaaS",
        "Enterprise"
      ],
      "status": "Acquired",
      "team_size": 32,
      "website": "https://www.finleycms.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/finley"
    },
    {
      "id": "yc-winter-2021-fintoc",
      "name": "Fintoc",
      "slug": "fintoc",
      "batch": "Winter 2021",
      "launched_on": "2021-03-03",
      "description": "Account-to-Account payments in Mexico and Chile.",
      "industry": "Fintech",
      "tags": [
        "Developer Tools",
        "Fintech",
        "SaaS",
        "Payments"
      ],
      "status": "Active",
      "team_size": 60,
      "website": "https://fintoc.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/fintoc"
    },
    {
      "id": "yc-winter-2021-firstbase-io",
      "name": "Firstbase.io",
      "slug": "firstbase-io",
      "batch": "Winter 2021",
      "launched_on": "2021-03-08",
      "description": "The all-in-one startup operating system",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "LegalTech"
      ],
      "status": "Active",
      "team_size": 50,
      "website": "https://firstbase.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/firstbase-io"
    },
    {
      "id": "yc-winter-2021-firstsupport-ai",
      "name": "FirstSupport.ai",
      "slug": "firstsupport-ai",
      "batch": "Winter 2021",
      "launched_on": "2021-03-17",
      "description": "AI Assistant for Customer Support",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "B2B",
        "Customer Support",
        "AI Assistant"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://firstsupport.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/firstsupport-ai"
    },
    {
      "id": "yc-winter-2021-fithub-2",
      "name": "FitHub",
      "slug": "fithub-2",
      "batch": "Winter 2021",
      "launched_on": "2021-03-04",
      "description": "The one-stop shop for healthy products",
      "industry": "Consumer",
      "tags": [
        "Grocery",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 60,
      "website": "https://www.fithub.com.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/fithub-2"
    },
    {
      "id": "yc-winter-2021-flextock",
      "name": "Flextock",
      "slug": "flextock",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Tech-enabled fulfillment provider in the Middle East & Africa",
      "industry": "B2B",
      "tags": [
        "Logistics",
        "Supply Chain"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "http://www.flextock.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/flextock"
    },
    {
      "id": "yc-winter-2021-flok",
      "name": "Flok",
      "slug": "flok",
      "batch": "Winter 2021",
      "launched_on": "2021-03-09",
      "description": "End to end company retreat planning",
      "industry": "B2B",
      "tags": [
        "Marketplace",
        "Travel",
        "Remote"
      ],
      "status": "Acquired",
      "team_size": 5,
      "website": "https://goflok.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/flok"
    },
    {
      "id": "yc-winter-2021-floweq",
      "name": "FlowEQ",
      "slug": "floweq",
      "batch": "Winter 2021",
      "launched_on": "2021-08-09",
      "description": "No-code workflow tool",
      "industry": "B2B",
      "tags": [
        "B2B",
        "Customer Success",
        "Compliance",
        "API",
        "Enterprise"
      ],
      "status": "Active",
      "team_size": 7,
      "website": "https://www.floweq.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/floweq"
    },
    {
      "id": "yc-winter-2021-flutterflow",
      "name": "FlutterFlow",
      "slug": "flutterflow",
      "batch": "Winter 2021",
      "launched_on": "2021-02-22",
      "description": "Application Development Platform (Native Mobile + Web Apps)",
      "industry": "B2B",
      "tags": [],
      "status": "Active",
      "team_size": 55,
      "website": "https://flutterflow.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/flutterflow"
    },
    {
      "id": "yc-winter-2021-flux-2",
      "name": "Flux",
      "slug": "flux-2",
      "batch": "Winter 2021",
      "launched_on": "2021-09-30",
      "description": "Cross border Payments infrastructure for internet businesses and…",
      "industry": "Fintech",
      "tags": [
        "DeFi",
        "Crypto / Web3"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://iflux.app",
      "yc_profile_url": "https://www.ycombinator.com/companies/flux-2"
    },
    {
      "id": "yc-winter-2021-flux-auto",
      "name": "Flux Auto",
      "slug": "flux-auto",
      "batch": "Winter 2021",
      "launched_on": "2022-03-21",
      "description": "Physical AI for Warehouses and Factories",
      "industry": "Industrials",
      "tags": [
        "Artificial Intelligence",
        "Autonomous Trucking",
        "Hard Tech",
        "Robotics",
        "AI"
      ],
      "status": "Active",
      "team_size": 56,
      "website": "https://fluxauto.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/flux-auto"
    },
    {
      "id": "yc-winter-2021-forcyte-biotechnologies",
      "name": "Forcyte Biotechnologies",
      "slug": "forcyte-biotechnologies",
      "batch": "Winter 2021",
      "launched_on": "2021-03-03",
      "description": "Discover drugs that control how much cells \"squeeze\" to treat disease",
      "industry": "Healthcare",
      "tags": [
        "Drug discovery"
      ],
      "status": "Inactive",
      "team_size": 5,
      "website": "https://forcytebio.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/forcyte-biotechnologies"
    },
    {
      "id": "yc-winter-2021-fountain9",
      "name": "Fountain9",
      "slug": "fountain9",
      "batch": "Winter 2021",
      "launched_on": "2021-03-13",
      "description": "Helping food brands and retailers reduce food wastage",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Warehouse Management Tech",
        "E-commerce",
        "Supply Chain",
        "Retail"
      ],
      "status": "Acquired",
      "team_size": 8,
      "website": "https://www.fountain9.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/fountain9"
    },
    {
      "id": "yc-winter-2021-fractional",
      "name": "Fractional",
      "slug": "fractional",
      "batch": "Winter 2021",
      "launched_on": "2021-03-04",
      "description": "The place where motivated investors and entrepreneurs co-own together.",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Real Estate",
        "Community"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://fractional.app",
      "yc_profile_url": "https://www.ycombinator.com/companies/fractional"
    },
    {
      "id": "yc-winter-2021-friz",
      "name": "Friz",
      "slug": "friz",
      "batch": "Winter 2021",
      "launched_on": "2021-02-27",
      "description": "AI Social Media Manager",
      "industry": "Consumer",
      "tags": [
        "Developer Tools",
        "SaaS",
        "Design Tools",
        "Social Media",
        "AI"
      ],
      "status": "Acquired",
      "team_size": 4,
      "website": "https://www.usefriz.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/friz"
    },
    {
      "id": "yc-winter-2021-functionup-fanplay",
      "name": "FunctionUp (FanPlay)",
      "slug": "functionup-fanplay",
      "batch": "Winter 2021",
      "launched_on": "2021-01-13",
      "description": "A skill-tech platform that runs placement bootcamps",
      "industry": "Education",
      "tags": [
        "Education",
        "Income Share Agreements",
        "eLearning"
      ],
      "status": "Acquired",
      "team_size": 20,
      "website": "https://www.functionup.org/",
      "yc_profile_url": "https://www.ycombinator.com/companies/functionup-fanplay"
    },
    {
      "id": "yc-winter-2021-furmacy",
      "name": "Furmacy",
      "slug": "furmacy",
      "batch": "Winter 2021",
      "launched_on": "2021-03-19",
      "description": "Digital e-prescribing software for veterinarians.",
      "industry": "Healthcare",
      "tags": [],
      "status": "Acquired",
      "team_size": 5,
      "website": "http://www.furmacy.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/furmacy"
    },
    {
      "id": "yc-winter-2021-gaiia",
      "name": "gaiia",
      "slug": "gaiia",
      "batch": "Winter 2021",
      "launched_on": "2021-01-30",
      "description": "all-in-one operating system (OS) for telcos",
      "industry": "B2B",
      "tags": [
        "IoT",
        "Mobility",
        "Telecommunications"
      ],
      "status": "Active",
      "team_size": 100,
      "website": "http://gaiia.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/gaiia"
    },
    {
      "id": "yc-winter-2021-galaxy",
      "name": "Galaxy",
      "slug": "galaxy",
      "batch": "Winter 2021",
      "launched_on": "2021-04-06",
      "description": "",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "Gaming"
      ],
      "status": "Inactive",
      "team_size": 2,
      "website": "https://launchpointhq.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/galaxy"
    },
    {
      "id": "yc-winter-2021-gerald-technologies-inc",
      "name": "Gerald Technologies, Inc",
      "slug": "gerald-technologies-inc",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Buy Now Pay Later + Cash Advance for Household Essentials",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Payments",
        "Consumer"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://www.joingerald.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/gerald-technologies-inc"
    },
    {
      "id": "yc-winter-2021-gigs",
      "name": "Gigs",
      "slug": "gigs",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "The OS for Embedded Telecom",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "HR Tech",
        "API",
        "AI"
      ],
      "status": "Active",
      "team_size": 150,
      "website": "https://gigs.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/gigs"
    },
    {
      "id": "yc-winter-2021-gigs-live",
      "name": "Gigs Live",
      "slug": "gigs-live",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Video publishing and monetization platform for creators and artists",
      "industry": "Consumer",
      "tags": [
        "SaaS",
        "Entertainment",
        "Media"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "https://gigs.live",
      "yc_profile_url": "https://www.ycombinator.com/companies/gigs-live"
    },
    {
      "id": "yc-winter-2021-gimbooks",
      "name": "GimBooks",
      "slug": "gimbooks",
      "batch": "Winter 2021",
      "launched_on": "2021-03-18",
      "description": "GimBooks makes Bookkeeping Easy for small business owners",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 16,
      "website": "https://gimbooks.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/gimbooks"
    },
    {
      "id": "yc-winter-2021-glopdev",
      "name": "Glop.dev",
      "slug": "glopdev",
      "batch": "Winter 2021",
      "launched_on": "2021-03-23",
      "description": "How great teams ship with AI",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "B2B",
        "AI"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://www.glop.dev/",
      "yc_profile_url": "https://www.ycombinator.com/companies/glopdev"
    },
    {
      "id": "yc-winter-2021-gobuild-fka-brick",
      "name": "GoBuild (fka Brick)",
      "slug": "gobuild-fka-brick",
      "batch": "Winter 2021",
      "launched_on": "2021-03-20",
      "description": "The payments solution for small scale construction. ",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Housing",
        "Proptech"
      ],
      "status": "Inactive",
      "team_size": 18,
      "website": "https://go.build",
      "yc_profile_url": "https://www.ycombinator.com/companies/gobuild-fka-brick"
    },
    {
      "id": "yc-winter-2021-gonddo",
      "name": "Gonddo",
      "slug": "gonddo",
      "batch": "Winter 2021",
      "launched_on": "2020-09-01",
      "description": "Wholesale marketplace for independent retailers buy & manage inventory",
      "industry": "B2B",
      "tags": [
        "Marketplace"
      ],
      "status": "Inactive",
      "team_size": 6,
      "website": "https://gonddo.com.br/",
      "yc_profile_url": "https://www.ycombinator.com/companies/gonddo"
    },
    {
      "id": "yc-winter-2021-gradia-health",
      "name": "Gradia Health",
      "slug": "gradia-health",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Integrated, high touch healthcare — at scale",
      "industry": "Healthcare",
      "tags": [
        "Consumer Health Services",
        "Health Tech",
        "Telehealth",
        "Digital Health",
        "Healthcare"
      ],
      "status": "Active",
      "team_size": 7,
      "website": "https://www.gradia.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/gradia-health"
    },
    {
      "id": "yc-winter-2021-greaseboss",
      "name": "GreaseBoss",
      "slug": "greaseboss",
      "batch": "Winter 2021",
      "launched_on": "2021-02-22",
      "description": "GreaseBoss verifes industrial machinery is greased correctly",
      "industry": "Industrials",
      "tags": [
        "Hardware",
        "IoT"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://www.greaseboss.com.au",
      "yc_profile_url": "https://www.ycombinator.com/companies/greaseboss"
    },
    {
      "id": "yc-winter-2021-great-question",
      "name": "Great Question",
      "slug": "great-question",
      "batch": "Winter 2021",
      "launched_on": "2021-02-26",
      "description": "User research on autopilot. ",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Design Tools"
      ],
      "status": "Active",
      "team_size": 41,
      "website": "https://greatquestion.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/great-question"
    },
    {
      "id": "yc-winter-2021-greywing",
      "name": "Greywing",
      "slug": "greywing",
      "batch": "Winter 2021",
      "launched_on": "2021-02-28",
      "description": "The Operating System for Maritime",
      "industry": "B2B",
      "tags": [
        "Hard Tech",
        "SaaS",
        "Maritime"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://grey-wing.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/greywing"
    },
    {
      "id": "yc-winter-2021-gridware",
      "name": "Gridware",
      "slug": "gridware",
      "batch": "Winter 2021",
      "launched_on": "2021-02-19",
      "description": "Protecting the grid today, preparing the grid for tomorrow",
      "industry": "Industrials",
      "tags": [
        "Hardware",
        "Climate",
        "Energy",
        "Enterprise Software"
      ],
      "status": "Active",
      "team_size": 125,
      "website": "https://www.gridware.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/gridware"
    },
    {
      "id": "yc-winter-2021-gromo",
      "name": "GroMo",
      "slug": "gromo",
      "batch": "Winter 2021",
      "launched_on": "2021-03-10",
      "description": "App for independent agents to sell financial products in India",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Insurance"
      ],
      "status": "Active",
      "team_size": 100,
      "website": "https://www.gromo.in",
      "yc_profile_url": "https://www.ycombinator.com/companies/gromo"
    },
    {
      "id": "yc-winter-2021-h3x-technologies",
      "name": "H3X Technologies",
      "slug": "h3x-technologies",
      "batch": "Winter 2021",
      "launched_on": "2021-02-22",
      "description": "The lightest electric aircraft motors in the world.",
      "industry": "Industrials",
      "tags": [
        "Airplanes",
        "Climate",
        "Electric Vehicles"
      ],
      "status": "Active",
      "team_size": 58,
      "website": "http://h3x.tech/",
      "yc_profile_url": "https://www.ycombinator.com/companies/h3x-technologies"
    },
    {
      "id": "yc-winter-2021-hapi",
      "name": "Hapi",
      "slug": "hapi",
      "batch": "Winter 2021",
      "launched_on": "2021-01-31",
      "description": "Stocks and cryptos trading app with zero commissions and no minimums…",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Finance",
        "Consumer Finance",
        "Trading",
        "Cryptocurrency"
      ],
      "status": "Active",
      "team_size": 45,
      "website": "https://hapi.trade/",
      "yc_profile_url": "https://www.ycombinator.com/companies/hapi"
    },
    {
      "id": "yc-winter-2021-haystack",
      "name": "Haystack",
      "slug": "haystack",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Delivery Analytics for Software Teams",
      "industry": "B2B",
      "tags": [
        "Analytics"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "https://usehaystack.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/haystack"
    },
    {
      "id": "yc-winter-2021-hermes-robotics",
      "name": "Hermes Robotics",
      "slug": "hermes-robotics",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Autonomous street sweeping as a service by retro-fitting vehicles",
      "industry": "Industrials",
      "tags": [
        "Autonomous Trucking",
        "Hard Tech",
        "Robotics",
        "Defense"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "http://hermes-robotics.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/hermes-robotics"
    },
    {
      "id": "yc-winter-2021-homebase",
      "name": "Homebase",
      "slug": "homebase",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Personalized rent-to-own real estate financing using technology in SEA",
      "industry": "Real Estate and Construction",
      "tags": [
        "Fintech",
        "Proptech"
      ],
      "status": "Active",
      "team_size": 20,
      "website": "http://www.gethomebase.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/homebase"
    },
    {
      "id": "yc-winter-2021-homebreeze",
      "name": "HomeBreeze",
      "slug": "homebreeze",
      "batch": "Winter 2021",
      "launched_on": "2021-07-30",
      "description": "The fastest and easiest way to make home upgrades",
      "industry": "Consumer",
      "tags": [
        "Marketplace",
        "Real Estate",
        "Proptech",
        "Climate",
        "Home Services"
      ],
      "status": "Inactive",
      "team_size": 45,
      "website": "https://www.homebreeze.ai/",
      "yc_profile_url": "https://www.ycombinator.com/companies/homebreeze"
    },
    {
      "id": "yc-winter-2021-hoop-dev",
      "name": "hoop.dev",
      "slug": "hoop-dev",
      "batch": "Winter 2021",
      "launched_on": "2021-02-26",
      "description": "Code review for DevOps tasks",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "DevSecOps"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "https://hoop.dev",
      "yc_profile_url": "https://www.ycombinator.com/companies/hoop-dev"
    },
    {
      "id": "yc-winter-2021-houm",
      "name": "Houm",
      "slug": "houm",
      "batch": "Winter 2021",
      "launched_on": "2021-02-17",
      "description": "All-in-one real estate marketplace for Latin America",
      "industry": "Real Estate and Construction",
      "tags": [
        "Marketplace",
        "Proptech"
      ],
      "status": "Active",
      "team_size": 400,
      "website": "https://houm.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/houm"
    },
    {
      "id": "yc-winter-2021-howdy-com",
      "name": "Howdy.com",
      "slug": "howdy-com",
      "batch": "Winter 2021",
      "launched_on": "2021-03-24",
      "description": "We help US tech companies hire and manage software engineers in LATAM",
      "industry": "B2B",
      "tags": [
        "B2B",
        "Recruiting"
      ],
      "status": "Active",
      "team_size": 140,
      "website": "https://www.howdy.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/howdy-com"
    },
    {
      "id": "yc-winter-2021-hubuc",
      "name": "HUBUC",
      "slug": "hubuc",
      "batch": "Winter 2021",
      "launched_on": "2021-03-14",
      "description": "Global Card Issuing and Payment Processing Engine",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Payments",
        "B2B",
        "API",
        "Infrastructure"
      ],
      "status": "Active",
      "team_size": 11,
      "website": "https://www.hubuc.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/hubuc"
    },
    {
      "id": "yc-winter-2021-huddlefire",
      "name": "Huddlefire",
      "slug": "huddlefire",
      "batch": "Winter 2021",
      "launched_on": "2021-03-17",
      "description": "Turbocharge customer acquisition through exclusive SaaS partnerships",
      "industry": "B2B",
      "tags": [
        "SaaS"
      ],
      "status": "Inactive",
      "team_size": 2,
      "website": "https://www.huddlefire.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/huddlefire"
    },
    {
      "id": "yc-winter-2021-hudu",
      "name": "Hudu",
      "slug": "hudu",
      "batch": "Winter 2021",
      "launched_on": "2021-03-19",
      "description": "The Most-Loved IT Documentation Platform",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Workflow Automation"
      ],
      "status": "Active",
      "team_size": 26,
      "website": "https://hudu.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/hudu"
    },
    {
      "id": "yc-winter-2021-humaans",
      "name": "Humaans",
      "slug": "humaans",
      "batch": "Winter 2021",
      "launched_on": "2021-03-17",
      "description": "AI-Powered HRIS for high performing teams",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Human Resources",
        "B2B",
        "Enterprise",
        "AI"
      ],
      "status": "Active",
      "team_size": 48,
      "website": "https://humaans.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/humaans"
    },
    {
      "id": "yc-winter-2021-humance",
      "name": "Humance",
      "slug": "humance",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "AI that keeps complex construction projects on schedule.",
      "industry": "Real Estate and Construction",
      "tags": [
        "Construction",
        "B2B",
        "Scheduling",
        "AI"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "https://www.humance.tech/",
      "yc_profile_url": "https://www.ycombinator.com/companies/humance"
    },
    {
      "id": "yc-winter-2021-hyperglue",
      "name": "HyperGlue",
      "slug": "hyperglue",
      "batch": "Winter 2021",
      "launched_on": "2022-05-03",
      "description": "Business intelligence on text",
      "industry": "B2B",
      "tags": [
        "Machine Learning",
        "B2B",
        "NLP"
      ],
      "status": "Acquired",
      "team_size": 5,
      "website": "https://www.hyperglue.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/hyperglue"
    },
    {
      "id": "yc-winter-2021-inbalance",
      "name": "inBalance",
      "slug": "inbalance",
      "batch": "Winter 2021",
      "launched_on": "2021-03-15",
      "description": "Electricity price forecasts for energy storage, ev charging, etc.",
      "industry": "Industrials",
      "tags": [
        "Energy Storage",
        "SaaS",
        "Climate"
      ],
      "status": "Acquired",
      "team_size": 10,
      "website": "https://inbalanceresearch.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/inbalance"
    },
    {
      "id": "yc-winter-2021-infracost",
      "name": "Infracost",
      "slug": "infracost",
      "batch": "Winter 2021",
      "launched_on": "2021-02-19",
      "description": "Shift FinOps Left: Proactively Find & Fix Cloud Cost Issues",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "DevSecOps",
        "FinOps",
        "B2B",
        "Open Source"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "https://infracost.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/infracost"
    },
    {
      "id": "yc-winter-2021-inpharmd",
      "name": "InpharmD",
      "slug": "inpharmd",
      "batch": "Winter 2021",
      "launched_on": "2021-01-21",
      "description": "We provide a curated, evidence- based answer to any clinical question.",
      "industry": "Healthcare",
      "tags": [
        "Artificial Intelligence",
        "B2B",
        "Telemedicine"
      ],
      "status": "Active",
      "team_size": 16,
      "website": "https://www.inpharmd.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/inpharmd"
    },
    {
      "id": "yc-winter-2021-invoid",
      "name": "Invoid",
      "slug": "invoid",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Create identity verification workflows the way you want",
      "industry": "B2B",
      "tags": [
        "Machine Learning",
        "SaaS",
        "B2B"
      ],
      "status": "Inactive",
      "team_size": 15,
      "website": "https://www.invoid.co/",
      "yc_profile_url": "https://www.ycombinator.com/companies/invoid"
    },
    {
      "id": "yc-winter-2021-jetdocs",
      "name": "Jetdocs",
      "slug": "jetdocs",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Collaborative ticketing that integrates into Teams and Slack",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://jetdocs.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/jetdocs"
    },
    {
      "id": "yc-winter-2021-jiga",
      "name": "Jiga",
      "slug": "jiga",
      "batch": "Winter 2021",
      "launched_on": "2021-03-03",
      "description": "Source better parts by partnering directly with vetted manufacturers",
      "industry": "B2B",
      "tags": [
        "B2B",
        "Manufacturing",
        "Supply Chain"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "https://jiga.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/jiga"
    },
    {
      "id": "yc-winter-2021-joinsub",
      "name": "JoinSub",
      "slug": "joinsub",
      "batch": "Winter 2021",
      "launched_on": "2021-03-05",
      "description": "India's first aggregator and provider of local business subscriptions",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "B2B",
        "Subscriptions"
      ],
      "status": "Inactive",
      "team_size": 8,
      "website": "https://joinsub.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/joinsub"
    },
    {
      "id": "yc-winter-2021-journey",
      "name": "Journey",
      "slug": "journey",
      "batch": "Winter 2021",
      "launched_on": "2021-06-02",
      "description": "No code platform for sales to tell better stories and win more deals.",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "AI"
      ],
      "status": "Acquired",
      "team_size": 10,
      "website": "http://journey.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/journey"
    },
    {
      "id": "yc-winter-2021-juicy-marbles",
      "name": "Juicy Marbles",
      "slug": "juicy-marbles",
      "batch": "Winter 2021",
      "launched_on": "2021-03-12",
      "description": "Juicy marbles makes thick juicy and marbled plant based steaks.",
      "industry": "Consumer",
      "tags": [
        "Climate",
        "ClimateTech"
      ],
      "status": "Active",
      "team_size": 45,
      "website": "https://juicymarbles.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/juicy-marbles"
    },
    {
      "id": "yc-winter-2021-june",
      "name": "June",
      "slug": "june",
      "batch": "Winter 2021",
      "launched_on": "2021-02-26",
      "description": "June is the new way to do product analytics",
      "industry": "B2B",
      "tags": [
        "Analytics",
        "Data Visualization"
      ],
      "status": "Inactive",
      "team_size": 6,
      "website": "http://june.so",
      "yc_profile_url": "https://www.ycombinator.com/companies/june"
    },
    {
      "id": "yc-winter-2021-kanda",
      "name": "Kanda",
      "slug": "kanda",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Affirm for general contractors",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "SaaS",
        "Proptech"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://www.getkanda.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/kanda"
    },
    {
      "id": "yc-winter-2021-kidato",
      "name": "Kidato",
      "slug": "kidato",
      "batch": "Winter 2021",
      "launched_on": "2021-03-05",
      "description": "Online school for K12 education in Africa",
      "industry": "Education",
      "tags": [
        "Education",
        "eLearning"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://www.kidato.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/kidato"
    },
    {
      "id": "yc-winter-2021-kilobaser",
      "name": "Kilobaser",
      "slug": "kilobaser",
      "batch": "Winter 2021",
      "launched_on": "2021-03-20",
      "description": "Desktop DNA Printer. The Nespresso Machine for DNA.",
      "industry": "Healthcare",
      "tags": [
        "Hard Tech",
        "Hardware",
        "Medical Devices"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://www.kilobaser.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/kilobaser"
    },
    {
      "id": "yc-winter-2021-kitemaker",
      "name": "Kitemaker",
      "slug": "kitemaker",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "A faster and more collaborative alternative to Jira for remote teams",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "Productivity",
        "Team Collaboration",
        "Remote Work"
      ],
      "status": "Acquired",
      "team_size": 5,
      "website": "https://kitemaker.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/kitemaker"
    },
    {
      "id": "yc-winter-2021-kiwify",
      "name": "Kiwify",
      "slug": "kiwify",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Create & sell online courses",
      "industry": "Education",
      "tags": [
        "eLearning"
      ],
      "status": "Active",
      "team_size": 200,
      "website": "https://kiwify.com.br",
      "yc_profile_url": "https://www.ycombinator.com/companies/kiwify"
    },
    {
      "id": "yc-winter-2021-kodo",
      "name": "Kodo",
      "slug": "kodo",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Corporate card & spend management platform for Indian startups",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Active",
      "team_size": 45,
      "website": "https://www.kodo.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/kodo"
    },
    {
      "id": "yc-winter-2021-krab",
      "name": "Krab",
      "slug": "krab",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Instant loans for trucking companies in India",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "SaaS"
      ],
      "status": "Inactive",
      "team_size": 9,
      "website": "https://www.krab.in",
      "yc_profile_url": "https://www.ycombinator.com/companies/krab"
    },
    {
      "id": "yc-winter-2021-kredi",
      "name": "Kredi",
      "slug": "kredi",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Rocket Mortgage for LatAm. ",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Latin America",
        "Lending"
      ],
      "status": "Active",
      "team_size": 66,
      "website": "https://www.kredi.mx/",
      "yc_profile_url": "https://www.ycombinator.com/companies/kredi"
    },
    {
      "id": "yc-winter-2021-lalabox",
      "name": "Lalabox",
      "slug": "lalabox",
      "batch": "Winter 2021",
      "launched_on": "2021-03-15",
      "description": "Live stream shopping for beauty products",
      "industry": "Consumer",
      "tags": [
        "Consumer",
        "E-commerce"
      ],
      "status": "Inactive",
      "team_size": 4,
      "website": "https://lalabox.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/lalabox"
    },
    {
      "id": "yc-winter-2021-lamar-health",
      "name": "Lamar Health",
      "slug": "lamar-health",
      "batch": "Winter 2021",
      "launched_on": "2022-03-26",
      "description": "Take Care of Shitty Paperwork for Expensive Drugs",
      "industry": "Healthcare",
      "tags": [
        "Health Tech",
        "AI"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "http://www.lamarhealth.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/lamar-health"
    },
    {
      "id": "yc-winter-2021-laudspeaker",
      "name": "Laudspeaker",
      "slug": "laudspeaker",
      "batch": "Winter 2021",
      "launched_on": "2021-01-27",
      "description": "Open source mobile marketing platform. Alternative to appcues /…",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Open Source",
        "Automation"
      ],
      "status": "Acquired",
      "team_size": 3,
      "website": "https://laudspeaker.com/?ref=bf",
      "yc_profile_url": "https://www.ycombinator.com/companies/laudspeaker"
    },
    {
      "id": "yc-winter-2021-launcher-labs",
      "name": "Launcher Labs",
      "slug": "launcher-labs",
      "batch": "Winter 2021",
      "launched_on": "2021-03-06",
      "description": "Maker of consumer crypto apps: Launchcaster, Frameboard, Maindrop",
      "industry": "Consumer",
      "tags": [
        "Crypto / Web3",
        "Consumer"
      ],
      "status": "Inactive",
      "team_size": 4,
      "website": "http://launchcaster.xyz",
      "yc_profile_url": "https://www.ycombinator.com/companies/launcher-labs"
    },
    {
      "id": "yc-winter-2021-lendflow",
      "name": "Lendflow",
      "slug": "lendflow",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Embedded lending infrastructure for software companies",
      "industry": "Fintech",
      "tags": [
        "Lending"
      ],
      "status": "Active",
      "team_size": 55,
      "website": "https://lendflow.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/lendflow"
    },
    {
      "id": "yc-winter-2021-lighttwist",
      "name": "LightTwist",
      "slug": "lighttwist",
      "batch": "Winter 2021",
      "launched_on": "2021-03-20",
      "description": "Realistic virtual video studio to record and stream from your browser",
      "industry": "B2B",
      "tags": [
        "Augmented Reality",
        "Computer Vision",
        "Design Tools"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://lighttwist.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/lighttwist"
    },
    {
      "id": "yc-winter-2021-lion-pose",
      "name": "Lion Pose",
      "slug": "lion-pose",
      "batch": "Winter 2021",
      "launched_on": "2021-03-08",
      "description": "Clinical skincare tested on diverse skin, now available in Sephora.",
      "industry": "Consumer",
      "tags": [
        "Consumer",
        "Healthcare",
        "Beauty",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "http://www.lionpose.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/lion-pose"
    },
    {
      "id": "yc-winter-2021-liveflow",
      "name": "LiveFlow",
      "slug": "liveflow",
      "batch": "Winter 2021",
      "launched_on": "2021-02-17",
      "description": "The Unified AI-ERP & FP&A Platform",
      "industry": "B2B",
      "tags": [
        "Finance",
        "AI"
      ],
      "status": "Active",
      "team_size": 51,
      "website": "https://www.liveflow.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/liveflow"
    },
    {
      "id": "yc-winter-2021-logica",
      "name": "Logica",
      "slug": "logica",
      "batch": "Winter 2021",
      "launched_on": "2021-02-02",
      "description": "Visual, collaborative financial modeling software",
      "industry": "B2B",
      "tags": [
        "FinOps",
        "Fintech",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://logica.cloud",
      "yc_profile_url": "https://www.ycombinator.com/companies/logica"
    },
    {
      "id": "yc-winter-2021-logisticsos",
      "name": "LogisticsOS",
      "slug": "logisticsos",
      "batch": "Winter 2021",
      "launched_on": "2021-01-17",
      "description": "World's fastest and most optimal route optimization engine",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Delivery",
        "Logistics",
        "API",
        "Cloud Computing"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "https://logisticsos.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/logisticsos"
    },
    {
      "id": "yc-winter-2021-lovd",
      "name": "Lovd",
      "slug": "lovd",
      "batch": "Winter 2021",
      "launched_on": "2021-03-10",
      "description": "It's not used, it's Lovd.",
      "industry": "Consumer",
      "tags": [],
      "status": "Inactive",
      "team_size": 4,
      "website": "http://www.lovd.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/lovd"
    },
    {
      "id": "yc-winter-2021-lunatic",
      "name": "Lunatic",
      "slug": "lunatic",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Operating System for server-side apps",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS",
        "Open Source"
      ],
      "status": "Inactive",
      "team_size": 2,
      "website": "https://lunatic.solutions/",
      "yc_profile_url": "https://www.ycombinator.com/companies/lunatic"
    },
    {
      "id": "yc-winter-2021-lygg",
      "name": "Lygg",
      "slug": "lygg",
      "batch": "Winter 2021",
      "launched_on": "2022-03-25",
      "description": "Building New Anti-Aging Ingredients for Skincare",
      "industry": "Consumer",
      "tags": [
        "Anti-Aging",
        "Beauty"
      ],
      "status": "Active",
      "team_size": 1,
      "website": "http://www.lyggcorp.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/lygg"
    },
    {
      "id": "yc-winter-2021-machine26",
      "name": "Machine26",
      "slug": "machine26",
      "batch": "Winter 2021",
      "launched_on": "2021-03-18",
      "description": "Marketplace for construction machines",
      "industry": "Real Estate and Construction",
      "tags": [
        "Marketplace",
        "Construction"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://www.machine26.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/machine26"
    },
    {
      "id": "yc-winter-2021-magicbell",
      "name": "MagicBell",
      "slug": "magicbell",
      "batch": "Winter 2021",
      "launched_on": "2021-02-03",
      "description": "The notification inbox for web/mobile applications.",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://www.magicbell.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/magicbell"
    },
    {
      "id": "yc-winter-2021-manara",
      "name": "Manara",
      "slug": "manara",
      "batch": "Winter 2021",
      "launched_on": "2021-02-24",
      "description": "Connecting top Middle East talent to global tech jobs",
      "industry": "B2B",
      "tags": [
        "Education",
        "Edtech"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "http://www.manara.tech",
      "yc_profile_url": "https://www.ycombinator.com/companies/manara"
    },
    {
      "id": "yc-winter-2021-marcopolo",
      "name": "MarcoPolo",
      "slug": "marcopolo",
      "batch": "Winter 2021",
      "launched_on": "2022-11-15",
      "description": "Alibaba for Latin America",
      "industry": "B2B",
      "tags": [
        "Marketplace",
        "B2B"
      ],
      "status": "Inactive",
      "team_size": 0,
      "website": "",
      "yc_profile_url": "https://www.ycombinator.com/companies/marcopolo"
    },
    {
      "id": "yc-winter-2021-mayan",
      "name": "Mayan",
      "slug": "mayan",
      "batch": "Winter 2021",
      "launched_on": "2021-03-03",
      "description": "A growth automation platform for Amazon sellers",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Analytics",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 14,
      "website": "https://www.mayan.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/mayan"
    },
    {
      "id": "yc-winter-2021-measured",
      "name": "Measured",
      "slug": "measured",
      "batch": "Winter 2021",
      "launched_on": "2021-03-10",
      "description": "Telemedicine platform for chronic conditions like obesity",
      "industry": "Healthcare",
      "tags": [
        "Consumer Health Services",
        "E-commerce",
        "Subscriptions"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://trymeasured.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/measured"
    },
    {
      "id": "yc-winter-2021-medme-health",
      "name": "MedMe Health",
      "slug": "medme-health",
      "batch": "Winter 2021",
      "launched_on": "2021-03-15",
      "description": "Software for pharmacies to move beyond dispensing",
      "industry": "Healthcare",
      "tags": [
        "SaaS",
        "B2B",
        "Digital Health",
        "Healthcare",
        "Healthcare IT"
      ],
      "status": "Active",
      "team_size": 60,
      "website": "https://www.medmehealth.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/medme-health"
    },
    {
      "id": "yc-winter-2021-meetanyway",
      "name": "MeetAnyway",
      "slug": "meetanyway",
      "batch": "Winter 2021",
      "launched_on": "2021-03-23",
      "description": "We help run engaging online conferences.",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Social"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "https://meetanyway.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/meetanyway"
    },
    {
      "id": "yc-winter-2021-mendel",
      "name": "Mendel",
      "slug": "mendel",
      "batch": "Winter 2021",
      "launched_on": "2021-03-12",
      "description": "Workflows to empower employees to spend while finance stay in control",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "B2B"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://mendel.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/mendel"
    },
    {
      "id": "yc-winter-2021-meru-com",
      "name": "Meru.com",
      "slug": "meru-com",
      "batch": "Winter 2021",
      "launched_on": "2021-02-24",
      "description": "The one-stop-shop for auto-parts in Mexico.",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "Marketplace"
      ],
      "status": "Active",
      "team_size": 70,
      "website": "https://meru.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/meru-com"
    },
    {
      "id": "yc-winter-2021-mezli",
      "name": "Mezli",
      "slug": "mezli",
      "batch": "Winter 2021",
      "launched_on": "2021-02-12",
      "description": "Autonomous restaurants that make great, affordable meals.",
      "industry": "Consumer",
      "tags": [
        "Food Service Robots & Machines",
        "Ghost Kitchens",
        "Robotics"
      ],
      "status": "Inactive",
      "team_size": 8,
      "website": "https://www.mezli.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/mezli"
    },
    {
      "id": "yc-winter-2021-milk-video",
      "name": "Milk Video",
      "slug": "milk-video",
      "batch": "Winter 2021",
      "launched_on": "2021-02-25",
      "description": "Create video testimonials with a link",
      "industry": "B2B",
      "tags": [
        "Machine Learning",
        "Design Tools",
        "Video"
      ],
      "status": "Inactive",
      "team_size": 2,
      "website": "https://milkvideo.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/milk-video"
    },
    {
      "id": "yc-winter-2021-mindee",
      "name": "Mindee",
      "slug": "mindee",
      "batch": "Winter 2021",
      "launched_on": "2021-06-07",
      "description": "AI Document Understanding API",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Deep Learning",
        "Developer Tools",
        "Automation",
        "APIs"
      ],
      "status": "Active",
      "team_size": 60,
      "website": "https://mindee.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/mindee"
    },
    {
      "id": "yc-winter-2021-mindportal",
      "name": "MindPortal",
      "slug": "mindportal",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Thought-to-Language AI Models",
      "industry": "Consumer",
      "tags": [
        "Artificial Intelligence",
        "Neurotechnology",
        "AI"
      ],
      "status": "Inactive",
      "team_size": 10,
      "website": "https://www.mindportal.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/mindportal"
    },
    {
      "id": "yc-winter-2021-modernloop",
      "name": "ModernLoop",
      "slug": "modernloop",
      "batch": "Winter 2021",
      "launched_on": "2021-03-19",
      "description": "ModernLoop helps teams automate and streamline recruiting operations",
      "industry": "B2B",
      "tags": [
        "B2B",
        "Recruiting",
        "Productivity",
        "HR Tech",
        "Remote Work"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "http://modernloop.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/modernloop"
    },
    {
      "id": "yc-winter-2021-moichor",
      "name": "Moichor",
      "slug": "moichor",
      "batch": "Winter 2021",
      "launched_on": "2021-01-15",
      "description": "AI Powered Animal Diagnostics",
      "industry": "Healthcare",
      "tags": [
        "Diagnostics"
      ],
      "status": "Active",
      "team_size": 29,
      "website": "https://moichor.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/moichor"
    },
    {
      "id": "yc-winter-2021-mono",
      "name": "Mono",
      "slug": "mono",
      "batch": "Winter 2021",
      "launched_on": "2021-02-01",
      "description": "Plaid for Africa, but better. ",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Acquired",
      "team_size": 10,
      "website": "https://mono.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/mono"
    },
    {
      "id": "yc-winter-2021-moonshot-brands",
      "name": "Moonshot Brands",
      "slug": "moonshot-brands",
      "batch": "Winter 2021",
      "launched_on": "2021-01-24",
      "description": "Buy and grow profitable e-commerce companies selling on Amazon and DTC",
      "industry": "Fintech",
      "tags": [
        "E-commerce"
      ],
      "status": "Inactive",
      "team_size": 35,
      "website": "http://moonshotbrands.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/moonshot-brands"
    },
    {
      "id": "yc-winter-2021-moonvalley",
      "name": "Moonvalley",
      "slug": "moonvalley",
      "batch": "Winter 2021",
      "launched_on": "2021-03-03",
      "description": "Building the next generation AI creative studio",
      "industry": "Consumer",
      "tags": [],
      "status": "Active",
      "team_size": 95,
      "website": "https://www.moonvalley.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/moonvalley"
    },
    {
      "id": "yc-winter-2021-morada-uno",
      "name": "Morada Uno",
      "slug": "morada-uno",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "We underwrite and insure house rentals in Latam ",
      "industry": "Real Estate and Construction",
      "tags": [
        "Real Estate",
        "Insurance",
        "Latin America"
      ],
      "status": "Active",
      "team_size": 150,
      "website": "http://www.moradauno.com.mx",
      "yc_profile_url": "https://www.ycombinator.com/companies/morada-uno"
    },
    {
      "id": "yc-winter-2021-moxion-power-co",
      "name": "Moxion Power Co.",
      "slug": "moxion-power-co",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Mobile Energy Storage Technology",
      "industry": "Industrials",
      "tags": [
        "Energy Storage",
        "Climate",
        "Energy",
        "Renewable Energy",
        "Electric Vehicles"
      ],
      "status": "Inactive",
      "team_size": 380,
      "website": "https://www.moxionpower.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/moxion-power-co"
    },
    {
      "id": "yc-winter-2021-my-nextderma",
      "name": "My NextDerma",
      "slug": "my-nextderma",
      "batch": "Winter 2021",
      "launched_on": "2021-03-03",
      "description": "Dermatology telehealth app for LatAm",
      "industry": "Healthcare",
      "tags": [
        "Consumer Health Services",
        "Telemedicine"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://mynextderma.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/my-nextderma"
    },
    {
      "id": "yc-winter-2021-mystic",
      "name": "Mystic",
      "slug": "mystic",
      "batch": "Winter 2021",
      "launched_on": "2021-02-25",
      "description": "Low latency API to run and deploy ML models",
      "industry": "B2B",
      "tags": [
        "AIOps",
        "Artificial Intelligence",
        "Developer Tools",
        "Machine Learning"
      ],
      "status": "Active",
      "team_size": 11,
      "website": "https://www.mystic.ai/",
      "yc_profile_url": "https://www.ycombinator.com/companies/mystic"
    },
    {
      "id": "yc-winter-2021-mythia",
      "name": "Mythia",
      "slug": "mythia",
      "batch": "Winter 2021",
      "launched_on": "2021-03-24",
      "description": "Rewards card for gamers",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Gaming"
      ],
      "status": "Inactive",
      "team_size": 0,
      "website": "",
      "yc_profile_url": "https://www.ycombinator.com/companies/mythia"
    },
    {
      "id": "yc-winter-2021-nano-technologies",
      "name": "Nano Technologies",
      "slug": "nano-technologies",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Payroll app to pay workers daily for retailers & manufacturers in SEA",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 17,
      "website": "http://www.vuiapp.vn",
      "yc_profile_url": "https://www.ycombinator.com/companies/nano-technologies"
    },
    {
      "id": "yc-winter-2021-navattic",
      "name": "Navattic",
      "slug": "navattic",
      "batch": "Winter 2021",
      "launched_on": "2021-02-25",
      "description": "Interactive product demos",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Sales",
        "Marketing",
        "Conversational AI"
      ],
      "status": "Active",
      "team_size": 35,
      "website": "https://www.navattic.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/navattic"
    },
    {
      "id": "yc-winter-2021-neverland",
      "name": "Neverland",
      "slug": "neverland",
      "batch": "Winter 2021",
      "launched_on": "2021-02-26",
      "description": "The first online home garden and lawn marketplace ",
      "industry": "Consumer",
      "tags": [
        "Marketplace",
        "Gardening"
      ],
      "status": "Inactive",
      "team_size": 2,
      "website": "http://www.enterneverland.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/neverland"
    },
    {
      "id": "yc-winter-2021-nextpay",
      "name": "NextPay",
      "slug": "nextpay",
      "batch": "Winter 2021",
      "launched_on": "2021-03-22",
      "description": "The digital bank for small businesses in the Philippines.",
      "industry": "Fintech",
      "tags": [
        "Banking as a Service",
        "Fintech",
        "B2B"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "https://nextpay.world",
      "yc_profile_url": "https://www.ycombinator.com/companies/nextpay"
    },
    {
      "id": "yc-winter-2021-nimbus-3",
      "name": "Nimbus",
      "slug": "nimbus-3",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Nimbus reduces Datadog costs by more than 60% without Manual Effort",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Infrastructure",
        "Operations"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "https://nimbus.dev",
      "yc_profile_url": "https://www.ycombinator.com/companies/nimbus-3"
    },
    {
      "id": "yc-winter-2021-nirva",
      "name": "Nirva",
      "slug": "nirva",
      "batch": "Winter 2021",
      "launched_on": "2021-03-16",
      "description": "The lifestyle medicine layer for clinicians.",
      "industry": "Healthcare",
      "tags": [
        "Digital Health",
        "Healthcare",
        "Health & Wellness"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://nirvahealth.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/nirva"
    },
    {
      "id": "yc-winter-2021-noble",
      "name": "Noble",
      "slug": "noble",
      "batch": "Winter 2021",
      "launched_on": "2021-03-20",
      "description": "Risk decisioning platform ",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "SaaS"
      ],
      "status": "Inactive",
      "team_size": 12,
      "website": "https://benoble.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/noble"
    },
    {
      "id": "yc-winter-2021-nohq",
      "name": "noHQ",
      "slug": "nohq",
      "batch": "Winter 2021",
      "launched_on": "2021-06-25",
      "description": "International contractor and multi country payroll ",
      "industry": "B2B",
      "tags": [
        "Fintech"
      ],
      "status": "Inactive",
      "team_size": 2,
      "website": "https://nohq.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/nohq"
    },
    {
      "id": "yc-winter-2021-nourish",
      "name": "Nourish",
      "slug": "nourish",
      "batch": "Winter 2021",
      "launched_on": "2022-04-12",
      "description": "Telehealth dietitians covered by insurance",
      "industry": "Healthcare",
      "tags": [
        "Consumer Health Services",
        "Healthcare"
      ],
      "status": "Active",
      "team_size": 250,
      "website": "https://nourish.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/nourish"
    },
    {
      "id": "yc-winter-2021-noya",
      "name": "Noya",
      "slug": "noya",
      "batch": "Winter 2021",
      "launched_on": "2021-01-29",
      "description": "Radically reducing capital costs and build time for direct air capture",
      "industry": "Industrials",
      "tags": [
        "Carbon Capture and Removal",
        "Climate"
      ],
      "status": "Inactive",
      "team_size": 7,
      "website": "https://noya.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/noya"
    },
    {
      "id": "yc-winter-2021-nuntius-therapeutics",
      "name": "Nuntius Therapeutics",
      "slug": "nuntius-therapeutics",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Cell-specific genetic medicines",
      "industry": "Healthcare",
      "tags": [
        "Gene Therapy",
        "Nanomedicine"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "http://www.nuntiustx.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/nuntius-therapeutics"
    },
    {
      "id": "yc-winter-2021-observa",
      "name": "Observa",
      "slug": "observa",
      "batch": "Winter 2021",
      "launched_on": "2021-05-17",
      "description": "Catch accidental database exposures before the bad guys",
      "industry": "B2B",
      "tags": [
        "Security"
      ],
      "status": "Inactive",
      "team_size": 1,
      "website": "https://www.observa.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/observa"
    },
    {
      "id": "yc-winter-2021-octifi",
      "name": "OctiFi",
      "slug": "octifi",
      "batch": "Winter 2021",
      "launched_on": "2021-01-13",
      "description": "Buy Now Pay Later for Southeast Asia",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Acquired",
      "team_size": 11,
      "website": "https://www.octifi.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/octifi"
    },
    {
      "id": "yc-winter-2021-olaclick",
      "name": "OlaClick",
      "slug": "olaclick",
      "batch": "Winter 2021",
      "launched_on": "2021-02-10",
      "description": "Restaurant Solution (E-commerce via WhatsApp + POS + CRM/Marketing)",
      "industry": "Consumer",
      "tags": [
        "SaaS",
        "B2B",
        "Food Tech"
      ],
      "status": "Active",
      "team_size": 30,
      "website": "https://www.olaclick.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/olaclick"
    },
    {
      "id": "yc-winter-2021-ollama",
      "name": "Ollama",
      "slug": "ollama",
      "batch": "Winter 2021",
      "launched_on": "2022-05-17",
      "description": "Get up and running with large language models.",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Developer Tools",
        "Open Source"
      ],
      "status": "Active",
      "team_size": null,
      "website": "https://ollama.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/ollama"
    },
    {
      "id": "yc-winter-2021-ontop",
      "name": "Ontop",
      "slug": "ontop",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Simplifying hiring and payments for the global workforce",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "SaaS",
        "B2B",
        "HR Tech"
      ],
      "status": "Active",
      "team_size": 192,
      "website": "https://www.getontop.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/ontop"
    },
    {
      "id": "yc-winter-2021-opencode",
      "name": "OpenCode",
      "slug": "opencode",
      "batch": "Winter 2021",
      "launched_on": "2021-01-16",
      "description": "The open source AI coding agent",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "Open Source"
      ],
      "status": "Active",
      "team_size": 24,
      "website": "https://opencode.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/opencode"
    },
    {
      "id": "yc-winter-2021-orbillion-bio",
      "name": "Orbillion Bio",
      "slug": "orbillion-bio",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Tasty and scalable cultivated meat at price parity",
      "industry": "Industrials",
      "tags": [
        "Cultured Meat",
        "Climate",
        "Food Tech"
      ],
      "status": "Acquired",
      "team_size": 7,
      "website": "https://www.orbillion.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/orbillion-bio"
    },
    {
      "id": "yc-winter-2021-outfit",
      "name": "Outfit",
      "slug": "outfit",
      "batch": "Winter 2021",
      "launched_on": "2021-01-26",
      "description": "DIY renovations in a box. Materials, tools, and instructions delivered",
      "industry": "Consumer",
      "tags": [
        "Consumer",
        "Construction"
      ],
      "status": "Inactive",
      "team_size": 1,
      "website": "https://buildoutfit.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/outfit"
    },
    {
      "id": "yc-winter-2021-outpaintcom",
      "name": "Outpaint.com",
      "slug": "outpaintcom",
      "batch": "Winter 2021",
      "launched_on": "2021-03-03",
      "description": "AI that expands any video to fit any screen.",
      "industry": "B2B",
      "tags": [
        "Video",
        "Media",
        "Infrastructure",
        "AI"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://outpaint.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/outpaintcom"
    },
    {
      "id": "yc-winter-2021-pagaloop",
      "name": "Pagaloop",
      "slug": "pagaloop",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Pay, Get Paid and Extend Cash Flow using your Credit Card as…",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Payments"
      ],
      "status": "Active",
      "team_size": 23,
      "website": "https://www.pagaloop.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/pagaloop"
    },
    {
      "id": "yc-winter-2021-pangea-app",
      "name": "Pangea.app",
      "slug": "pangea-app",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Hire Fractional Marketing + Design Talent ",
      "industry": "B2B",
      "tags": [
        "Marketplace",
        "Recruiting",
        "AI Assistant"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "https://www.pangea.app",
      "yc_profile_url": "https://www.ycombinator.com/companies/pangea-app"
    },
    {
      "id": "yc-winter-2021-parsagon",
      "name": "Parsagon",
      "slug": "parsagon",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "AI to track and analyze public policy",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Monitoring",
        "AI"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://parsagon.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/parsagon"
    },
    {
      "id": "yc-winter-2021-partnered-2",
      "name": "Partnered",
      "slug": "partnered-2",
      "batch": "Winter 2021",
      "launched_on": "2021-03-07",
      "description": "The network where sales teams connect to share customer introductions.",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B"
      ],
      "status": "Acquired",
      "team_size": 2,
      "website": "https://partnered.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/partnered-2"
    },
    {
      "id": "yc-winter-2021-pensil",
      "name": "Pensil",
      "slug": "pensil",
      "batch": "Winter 2021",
      "launched_on": "2021-08-19",
      "description": "New-Age White Label Community Platform SDKs and APIs for Games,…",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Community",
        "Gaming",
        "Chat",
        "Live"
      ],
      "status": "Inactive",
      "team_size": 4,
      "website": "https://pensil.in",
      "yc_profile_url": "https://www.ycombinator.com/companies/pensil"
    },
    {
      "id": "yc-winter-2021-peoplecq",
      "name": "peopleCQ",
      "slug": "peoplecq",
      "batch": "Winter 2021",
      "launched_on": "2021-03-06",
      "description": "Employer backed payroll advances for employees in Egypt",
      "industry": "Fintech",
      "tags": [
        "Recruiting",
        "HR Tech"
      ],
      "status": "Active",
      "team_size": 85,
      "website": "https://www.peopleCQ.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/peoplecq"
    },
    {
      "id": "yc-winter-2021-per-diem",
      "name": "Per Diem",
      "slug": "per-diem",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "The AI operating system for restaurants",
      "industry": "B2B",
      "tags": [
        "Payments",
        "Consumer",
        "B2B"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "https://tryperdiem.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/per-diem"
    },
    {
      "id": "yc-winter-2021-pesto",
      "name": "Pesto",
      "slug": "pesto",
      "batch": "Winter 2021",
      "launched_on": "2021-04-08",
      "description": "",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://www.getpesto.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/pesto"
    },
    {
      "id": "yc-winter-2021-phoenix",
      "name": "Phoenix",
      "slug": "phoenix",
      "batch": "Winter 2021",
      "launched_on": "2021-07-28",
      "description": "Canada's digital health clinic for men",
      "industry": "Healthcare",
      "tags": [
        "Consumer Health Services",
        "Telehealth",
        "Consumer",
        "Digital Health"
      ],
      "status": "Active",
      "team_size": 70,
      "website": "https://phoenix.ca",
      "yc_profile_url": "https://www.ycombinator.com/companies/phoenix"
    },
    {
      "id": "yc-winter-2021-pibit-ai",
      "name": "Pibit.ai",
      "slug": "pibit-ai",
      "batch": "Winter 2021",
      "launched_on": "2021-02-26",
      "description": "The fastest path from submission to better decisions.",
      "industry": "Fintech",
      "tags": [
        "Artificial Intelligence",
        "Generative AI",
        "B2B",
        "Insurance"
      ],
      "status": "Active",
      "team_size": 116,
      "website": "https://pibit.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/pibit-ai"
    },
    {
      "id": "yc-winter-2021-pingpong",
      "name": "PingPong",
      "slug": "pingpong",
      "batch": "Winter 2021",
      "launched_on": "2021-03-05",
      "description": "Video messaging app for remote teams.",
      "industry": "B2B",
      "tags": [
        "SaaS"
      ],
      "status": "Acquired",
      "team_size": 8,
      "website": "https://www.getpingpong.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/pingpong"
    },
    {
      "id": "yc-winter-2021-pipebio",
      "name": "PipeBio",
      "slug": "pipebio",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "PipeBio is a SaaS bioinformatics platform to develop antibody drugs.",
      "industry": "Healthcare",
      "tags": [
        "AI-powered Drug Discovery",
        "Machine Learning",
        "SaaS"
      ],
      "status": "Acquired",
      "team_size": 10,
      "website": "https://pipebio.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/pipebio"
    },
    {
      "id": "yc-winter-2021-platypus",
      "name": "Platypus",
      "slug": "platypus",
      "batch": "Winter 2021",
      "launched_on": "2021-03-09",
      "description": "The Distributed Data Operating System",
      "industry": "B2B",
      "tags": [
        "B2B",
        "Workflow Automation",
        "Data Engineering",
        "AI Assistant"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "https://www.getplatypus.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/platypus"
    },
    {
      "id": "yc-winter-2021-playmaker",
      "name": "Playmaker",
      "slug": "playmaker",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Community for fantasy sports players",
      "industry": "Consumer",
      "tags": [
        "Sports Tech",
        "Community"
      ],
      "status": "Inactive",
      "team_size": 5,
      "website": "http://getplaymaker.app",
      "yc_profile_url": "https://www.ycombinator.com/companies/playmaker"
    },
    {
      "id": "yc-winter-2021-poliglota",
      "name": "Poliglota",
      "slug": "poliglota",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "The online language school for Latam, with groups led by an instructor",
      "industry": "Education",
      "tags": [
        "Education",
        "eLearning"
      ],
      "status": "Active",
      "team_size": 170,
      "website": "https://www.poliglota.org/",
      "yc_profile_url": "https://www.ycombinator.com/companies/poliglota"
    },
    {
      "id": "yc-winter-2021-popl",
      "name": "Popl",
      "slug": "popl",
      "batch": "Winter 2021",
      "launched_on": "2021-01-13",
      "description": "Your AI GTM platform for event lead capture",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "B2B",
        "Emerging Markets",
        "AI"
      ],
      "status": "Active",
      "team_size": 60,
      "website": "https://popl.co/",
      "yc_profile_url": "https://www.ycombinator.com/companies/popl"
    },
    {
      "id": "yc-winter-2021-powerrouter",
      "name": "PowerRouter",
      "slug": "powerrouter",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "PowerRouter helps sales teams with lead routing in Salesforce",
      "industry": "B2B",
      "tags": [],
      "status": "Active",
      "team_size": 3,
      "website": "https://www.powerrouter.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/powerrouter"
    },
    {
      "id": "yc-winter-2021-pragmatic-leaders-ankai-inc",
      "name": "Pragmatic Leaders (Ankai Inc)",
      "slug": "pragmatic-leaders-ankai-inc",
      "batch": "Winter 2021",
      "launched_on": "2021-03-04",
      "description": "AI-powered Corporate Training: Faster, Smarter, and More Effective",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "eLearning",
        "Sales Enablement",
        "AI"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://pragmaticleaders.io, https://ostronaut.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/pragmatic-leaders-ankai-inc"
    },
    {
      "id": "yc-winter-2021-preki",
      "name": "Preki",
      "slug": "preki",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Shopify for LatAm",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "E-commerce"
      ],
      "status": "Acquired",
      "team_size": 15,
      "website": "http://www.preki.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/preki"
    },
    {
      "id": "yc-winter-2021-prendea",
      "name": "Prendea",
      "slug": "prendea",
      "batch": "Winter 2021",
      "launched_on": "2021-03-04",
      "description": "Live afterschool classes for Spanish-speaking kids ages 4 to 15.",
      "industry": "Education",
      "tags": [
        "Education",
        "eLearning",
        "Subscriptions"
      ],
      "status": "Inactive",
      "team_size": 5,
      "website": "https://prendea.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/prendea"
    },
    {
      "id": "yc-winter-2021-prequel",
      "name": "Prequel",
      "slug": "prequel",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Helping B2B co's sync data to their customers",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Analytics",
        "Data Engineering"
      ],
      "status": "Active",
      "team_size": 9,
      "website": "https://prequel.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/prequel"
    },
    {
      "id": "yc-winter-2021-procoto",
      "name": "Procoto",
      "slug": "procoto",
      "batch": "Winter 2021",
      "launched_on": "2021-03-17",
      "description": "Self-service RFP management",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "SaaS",
        "Procurement"
      ],
      "status": "Acquired",
      "team_size": 4,
      "website": "https://procoto.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/procoto"
    },
    {
      "id": "yc-winter-2021-promoted",
      "name": "Promoted.ai",
      "slug": "promoted",
      "batch": "Winter 2021",
      "launched_on": "2021-01-22",
      "description": "Dramatically better search and ads for marketplaces",
      "industry": "B2B",
      "tags": [
        "Machine Learning",
        "Marketplace",
        "B2B",
        "E-commerce"
      ],
      "status": "Acquired",
      "team_size": 12,
      "website": "http://www.promoted.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/promoted"
    },
    {
      "id": "yc-winter-2021-prospa",
      "name": "Prospa",
      "slug": "prospa",
      "batch": "Winter 2021",
      "launched_on": "2022-02-18",
      "description": "Banking for businesses ",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "B2B"
      ],
      "status": "Active",
      "team_size": 70,
      "website": "https://getprospa.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/prospa"
    },
    {
      "id": "yc-winter-2021-pry-financials",
      "name": "Pry Financials",
      "slug": "pry-financials",
      "batch": "Winter 2021",
      "launched_on": "2021-02-27",
      "description": "Finance for Founders",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "Finance"
      ],
      "status": "Acquired",
      "team_size": 7,
      "website": "https://www.pry.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/pry-financials"
    },
    {
      "id": "yc-winter-2021-purpose-finance",
      "name": "Purpose Finance",
      "slug": "purpose-finance",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Accelerating the shift to a more transparent economy ",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "https://www.purposefinance.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/purpose-finance"
    },
    {
      "id": "yc-winter-2021-pyroscope",
      "name": "Pyroscope",
      "slug": "pyroscope",
      "batch": "Winter 2021",
      "launched_on": "2021-01-29",
      "description": "Open source continuous profiling software to debug performance issues",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS",
        "Open Source",
        "Kubernetes"
      ],
      "status": "Acquired",
      "team_size": 5,
      "website": "https://pyroscope.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/pyroscope"
    },
    {
      "id": "yc-winter-2021-quadrant-eye",
      "name": "Quadrant Eye",
      "slug": "quadrant-eye",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Breaking new ground in online eyecare. ",
      "industry": "Healthcare",
      "tags": [
        "Artificial Intelligence",
        "Deep Learning",
        "Digital Health",
        "Telemedicine"
      ],
      "status": "Inactive",
      "team_size": 4,
      "website": "https://quadranteye.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/quadrant-eye"
    },
    {
      "id": "yc-winter-2021-quadrant-health",
      "name": "Quadrant Health",
      "slug": "quadrant-health",
      "batch": "Winter 2021",
      "launched_on": "2022-05-11",
      "description": "Analyzing EHR and messaging data to predict disease before it occurs.",
      "industry": "Healthcare",
      "tags": [
        "SaaS",
        "Healthcare IT",
        "AI"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://quadrant.health",
      "yc_profile_url": "https://www.ycombinator.com/companies/quadrant-health"
    },
    {
      "id": "yc-winter-2021-queenly",
      "name": "Queenly",
      "slug": "queenly",
      "batch": "Winter 2021",
      "launched_on": "2021-01-13",
      "description": "Leading marketplace for formalwear",
      "industry": "Consumer",
      "tags": [
        "Marketplace",
        "Sustainable Fashion",
        "E-commerce"
      ],
      "status": "Inactive",
      "team_size": 13,
      "website": "https://queenly.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/queenly"
    },
    {
      "id": "yc-winter-2021-quicknode",
      "name": "Quicknode",
      "slug": "quicknode",
      "batch": "Winter 2021",
      "launched_on": "2021-03-13",
      "description": "Tools & infra to build and scale high-quality blockchain applications.",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS",
        "Crypto / Web3",
        "API"
      ],
      "status": "Active",
      "team_size": 115,
      "website": "https://www.quicknode.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/quicknode"
    },
    {
      "id": "yc-winter-2021-quotabook",
      "name": "QuotaBook",
      "slug": "quotabook",
      "batch": "Winter 2021",
      "launched_on": "2021-03-23",
      "description": "Equity management platform for startups and investors.",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 50,
      "website": "https://www.quotabook.com/en",
      "yc_profile_url": "https://www.ycombinator.com/companies/quotabook"
    },
    {
      "id": "yc-winter-2021-r2",
      "name": "R2",
      "slug": "r2",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Embedded lending infrastructure",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "B2B"
      ],
      "status": "Acquired",
      "team_size": 100,
      "website": "https://r2.co/",
      "yc_profile_url": "https://www.ycombinator.com/companies/r2"
    },
    {
      "id": "yc-winter-2021-reclaim-protocol",
      "name": "Reclaim Protocol",
      "slug": "reclaim-protocol",
      "batch": "Winter 2021",
      "launched_on": "2021-03-25",
      "description": "Education, Employment, Loyalty verification. Global & Compliant.",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Identity"
      ],
      "status": "Active",
      "team_size": 17,
      "website": "https://reclaimprotocol.org",
      "yc_profile_url": "https://www.ycombinator.com/companies/reclaim-protocol"
    },
    {
      "id": "yc-winter-2021-recover",
      "name": "Recover",
      "slug": "recover",
      "batch": "Winter 2021",
      "launched_on": "2021-03-21",
      "description": "Government-funded online addiction treatment",
      "industry": "Healthcare",
      "tags": [],
      "status": "Active",
      "team_size": 10,
      "website": "https://www.letsrecover.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/recover"
    },
    {
      "id": "yc-winter-2021-redcliffe-lifetech",
      "name": "Redcliffe Lifetech",
      "slug": "redcliffe-lifetech",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Redcliffe Labs is India's Largest Omni-channel Diagnostics platform ",
      "industry": "Healthcare",
      "tags": [
        "Consumer Health Services",
        "Health Tech",
        "Digital Health",
        "Healthcare",
        "Diagnostics"
      ],
      "status": "Active",
      "team_size": 3500,
      "website": "http://redcliffelabs.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/redcliffe-lifetech"
    },
    {
      "id": "yc-winter-2021-regent",
      "name": "REGENT",
      "slug": "regent",
      "batch": "Winter 2021",
      "launched_on": "2021-03-18",
      "description": "All-electric seagliders for fast, affordable regional transportation",
      "industry": "Industrials",
      "tags": [
        "Climate",
        "Electric Vehicles",
        "Aerospace",
        "Maritime"
      ],
      "status": "Active",
      "team_size": 40,
      "website": "http://regentcraft.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/regent"
    },
    {
      "id": "yc-winter-2021-rejoy-health",
      "name": "Rejoy Health",
      "slug": "rejoy-health",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "AI-powered healthcare information",
      "industry": "Healthcare",
      "tags": [
        "Artificial Intelligence",
        "AI"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "https://www.rejoyhealth.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/rejoy-health"
    },
    {
      "id": "yc-winter-2021-remora",
      "name": "Remora",
      "slug": "remora",
      "batch": "Winter 2021",
      "launched_on": "2021-02-26",
      "description": "Carbon capture for vehicles",
      "industry": "Industrials",
      "tags": [
        "Hard Tech",
        "Climate",
        "ClimateTech"
      ],
      "status": "Active",
      "team_size": 45,
      "website": "https://www.remoracarbon.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/remora"
    },
    {
      "id": "yc-winter-2021-reshape-biotech",
      "name": "Reshape Biotech",
      "slug": "reshape-biotech",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Robots that automate the everyday tasks of microbiologists.",
      "industry": "Healthcare",
      "tags": [
        "Robotics",
        "Biotech"
      ],
      "status": "Active",
      "team_size": 40,
      "website": "http://reshapebiotech.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/reshape-biotech"
    },
    {
      "id": "yc-winter-2021-resquared",
      "name": "Resquared",
      "slug": "resquared",
      "batch": "Winter 2021",
      "launched_on": "2021-02-10",
      "description": "Marketing automation platform for selling to local businesses.",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Sales",
        "Proptech",
        "Marketing"
      ],
      "status": "Active",
      "team_size": 40,
      "website": "http://re2.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/resquared"
    },
    {
      "id": "yc-winter-2021-rethoric",
      "name": "Rethoric",
      "slug": "rethoric",
      "batch": "Winter 2021",
      "launched_on": "2021-02-18",
      "description": "LinkedIn content consultancy and scheduling platform for busy founders",
      "industry": "B2B",
      "tags": [
        "B2B",
        "Social Media",
        "Marketing"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "http://rethoric.com/ycombinator",
      "yc_profile_url": "https://www.ycombinator.com/companies/rethoric"
    },
    {
      "id": "yc-winter-2021-rinsed",
      "name": "Rinsed",
      "slug": "rinsed",
      "batch": "Winter 2021",
      "launched_on": "2021-02-26",
      "description": "Software to run car washes moving to a monthly subscription model",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "B2B",
        "E-commerce",
        "Subscriptions"
      ],
      "status": "Active",
      "team_size": 80,
      "website": "https://www.rinsed.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/rinsed"
    },
    {
      "id": "yc-winter-2021-rocketsdr",
      "name": "RocketSDR",
      "slug": "rocketsdr",
      "batch": "Winter 2021",
      "launched_on": "2021-03-19",
      "description": "AI Native Sales Outreach Platform",
      "industry": "B2B",
      "tags": [
        "Sales",
        "AI"
      ],
      "status": "Active",
      "team_size": 30,
      "website": "https://rocketsdr.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/rocketsdr"
    },
    {
      "id": "yc-winter-2021-roger",
      "name": "ROGER",
      "slug": "roger",
      "batch": "Winter 2021",
      "launched_on": "2022-04-14",
      "description": "The Best Way to Sign Contracts Since Handshakes. Roger that.",
      "industry": "B2B",
      "tags": [
        "Documents",
        "SaaS",
        "B2B",
        "Sales",
        "Legal"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://www.thanksroger.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/roger"
    },
    {
      "id": "yc-winter-2021-roin-technologies",
      "name": "Roin Technologies",
      "slug": "roin-technologies",
      "batch": "Winter 2021",
      "launched_on": "2021-03-15",
      "description": "Building robots to automate commercial concrete construction.",
      "industry": "Industrials",
      "tags": [
        "Hard Tech",
        "Hardware",
        "Robotics"
      ],
      "status": "Acquired",
      "team_size": 3,
      "website": "https://rointech.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/roin-technologies"
    },
    {
      "id": "yc-winter-2021-routine",
      "name": "Routine",
      "slug": "routine",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "AI-native all-in-one workspace for startups",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Productivity",
        "Collaboration",
        "Automation"
      ],
      "status": "Active",
      "team_size": 8,
      "website": "http://routine.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/routine"
    },
    {
      "id": "yc-winter-2021-rulebricks",
      "name": "Rulebricks",
      "slug": "rulebricks",
      "batch": "Winter 2021",
      "launched_on": "2021-03-19",
      "description": "Add powerful decision-making capabilities to any automated workflow.",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS",
        "B2B",
        "Workflow Automation",
        "Enterprise Software"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://rulebricks.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/rulebricks"
    },
    {
      "id": "yc-winter-2021-runway",
      "name": "Runway",
      "slug": "runway",
      "batch": "Winter 2021",
      "launched_on": "2021-03-13",
      "description": "Easier and more reliable mobile app releases for teams.",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 20,
      "website": "https://runway.team",
      "yc_profile_url": "https://www.ycombinator.com/companies/runway"
    },
    {
      "id": "yc-winter-2021-sbx-robotics",
      "name": "SBX Robotics",
      "slug": "sbx-robotics",
      "batch": "Winter 2021",
      "launched_on": "2021-03-24",
      "description": "Synthetic data for better vision.",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Machine Learning",
        "Robotics",
        "Computer Vision",
        "Data Engineering"
      ],
      "status": "Inactive",
      "team_size": 5,
      "website": "https://www.sbxrobotics.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/sbx-robotics"
    },
    {
      "id": "yc-winter-2021-seer",
      "name": "Seer",
      "slug": "seer",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Sell beyond the store.",
      "industry": "B2B",
      "tags": [
        "SaaS"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://www.helloseer.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/seer"
    },
    {
      "id": "yc-winter-2021-segments-ai",
      "name": "Segments.ai",
      "slug": "segments-ai",
      "batch": "Winter 2021",
      "launched_on": "2021-03-09",
      "description": "Build better computer vision models by building better datasets",
      "industry": "B2B",
      "tags": [
        "Deep Learning",
        "Developer Tools",
        "Computer Vision"
      ],
      "status": "Acquired",
      "team_size": 8,
      "website": "https://segments.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/segments-ai"
    },
    {
      "id": "yc-winter-2021-sendbox",
      "name": "Sendbox",
      "slug": "sendbox",
      "batch": "Winter 2021",
      "launched_on": "2021-03-11",
      "description": "Fulfillment by Amazon for African merchants",
      "industry": "B2B",
      "tags": [
        "Logistics",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "https://sendbox.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/sendbox"
    },
    {
      "id": "yc-winter-2021-serna-bio",
      "name": "Serna Bio",
      "slug": "serna-bio",
      "batch": "Winter 2021",
      "launched_on": "2022-08-03",
      "description": "Genetic Medicine with Small Molecules ",
      "industry": "Healthcare",
      "tags": [
        "Biotech",
        "Drug discovery"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "http://serna.bio",
      "yc_profile_url": "https://www.ycombinator.com/companies/serna-bio"
    },
    {
      "id": "yc-winter-2021-shepherd",
      "name": "Shepherd",
      "slug": "shepherd",
      "batch": "Winter 2021",
      "launched_on": "2021-09-02",
      "description": "Modernizing commercial insurance",
      "industry": "Fintech",
      "tags": [
        "Construction",
        "Insurance",
        "Energy"
      ],
      "status": "Active",
      "team_size": 60,
      "website": "https://shepherdinsurance.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/shepherd"
    },
    {
      "id": "yc-winter-2021-signoz",
      "name": "SigNoz",
      "slug": "signoz",
      "batch": "Winter 2021",
      "launched_on": "2021-02-16",
      "description": "Open source alternative to DataDog ",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS",
        "B2B",
        "Open Source"
      ],
      "status": "Active",
      "team_size": 38,
      "website": "https://signoz.io",
      "yc_profile_url": "https://www.ycombinator.com/companies/signoz"
    },
    {
      "id": "yc-winter-2021-simplify",
      "name": "Simplify",
      "slug": "simplify",
      "batch": "Winter 2021",
      "launched_on": "2021-03-24",
      "description": "Helping a billion people build their dream career",
      "industry": "Consumer",
      "tags": [
        "Generative AI",
        "Machine Learning",
        "Marketplace",
        "Recruiting"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://simplify.jobs/",
      "yc_profile_url": "https://www.ycombinator.com/companies/simplify"
    },
    {
      "id": "yc-winter-2021-sivo",
      "name": "Sivo",
      "slug": "sivo",
      "batch": "Winter 2021",
      "launched_on": "2021-03-08",
      "description": "Debt as a service for companies to lend money to their users at scale.",
      "industry": "Fintech",
      "tags": [
        "Artificial Intelligence",
        "Fintech"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://sivo.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/sivo"
    },
    {
      "id": "yc-winter-2021-slashauth",
      "name": "SlashAuth",
      "slug": "slashauth",
      "batch": "Winter 2021",
      "launched_on": "2021-03-12",
      "description": "The solution for fine-grained access control in web3",
      "industry": "B2B",
      "tags": [
        "Crypto / Web3",
        "B2B",
        "Security"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "https://www.slashauth.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/slashauth"
    },
    {
      "id": "yc-winter-2021-smartcuts",
      "name": "Smartcuts",
      "slug": "smartcuts",
      "batch": "Winter 2021",
      "launched_on": "2021-03-06",
      "description": "Chrome extension to turn clicks & keystrokes into no-code automations",
      "industry": "B2B",
      "tags": [
        "No-code",
        "Automation"
      ],
      "status": "Active",
      "team_size": 3,
      "website": "https://trysmartcuts.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/smartcuts"
    },
    {
      "id": "yc-winter-2021-solo",
      "name": "Solo",
      "slug": "solo",
      "batch": "Winter 2021",
      "launched_on": "2021-03-05",
      "description": "We help people resolve debt.",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Consumer",
        "LegalTech"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "https://www.solosuit.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/solo"
    },
    {
      "id": "yc-winter-2021-somos",
      "name": "Somos",
      "slug": "somos",
      "batch": "Winter 2021",
      "launched_on": "2021-05-10",
      "description": "Internet for the urban developing world.",
      "industry": "Real Estate and Construction",
      "tags": [
        "Latin America",
        "Telecommunications"
      ],
      "status": "Active",
      "team_size": 250,
      "website": "http://somosinternet.co/",
      "yc_profile_url": "https://www.ycombinator.com/companies/somos"
    },
    {
      "id": "yc-winter-2021-soraban",
      "name": "Soraban",
      "slug": "soraban",
      "batch": "Winter 2021",
      "launched_on": "2021-07-30",
      "description": "AI tax workflow platform for accounting firms ",
      "industry": "B2B",
      "tags": [
        "AI-Enhanced Learning",
        "Robotic Process Automation",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 50,
      "website": "https://www.soraban.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/soraban"
    },
    {
      "id": "yc-winter-2021-spline",
      "name": "Spline",
      "slug": "spline",
      "batch": "Winter 2021",
      "launched_on": "2021-03-19",
      "description": "Design and collaborate in multiple dimensions.",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Design Tools",
        "AR"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "http://spline.design/",
      "yc_profile_url": "https://www.ycombinator.com/companies/spline"
    },
    {
      "id": "yc-winter-2021-spokn",
      "name": "Spokn",
      "slug": "spokn",
      "batch": "Winter 2021",
      "launched_on": "2021-02-02",
      "description": "AI-powered video platform for Internal Comms and HR teams ",
      "industry": "B2B",
      "tags": [
        "eLearning",
        "B2B",
        "Culture"
      ],
      "status": "Active",
      "team_size": 20,
      "website": "https://getspokn.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/spokn"
    },
    {
      "id": "yc-winter-2021-spruceid",
      "name": "SpruceID",
      "slug": "spruceid",
      "batch": "Winter 2021",
      "launched_on": "2021-05-27",
      "description": "SpruceID lets users control their data across the web.",
      "industry": "Government",
      "tags": [
        "GovTech",
        "Crypto / Web3",
        "Identity",
        "Privacy",
        "Infrastructure"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "https://www.spruceid.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/spruceid"
    },
    {
      "id": "yc-winter-2021-stacksi",
      "name": "Stacksi",
      "slug": "stacksi",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Automated Answers to Security Questionnaires",
      "industry": "B2B",
      "tags": [
        "Compliance",
        "Cybersecurity"
      ],
      "status": "Acquired",
      "team_size": 4,
      "website": "https://www.stacksi.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/stacksi"
    },
    {
      "id": "yc-winter-2021-stayflexi",
      "name": "Stayflexi",
      "slug": "stayflexi",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Operating System for Hotels and Vacation Rentals",
      "industry": "B2B",
      "tags": [
        "Travel"
      ],
      "status": "Active",
      "team_size": 58,
      "website": "https://business.stayflexi.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/stayflexi"
    },
    {
      "id": "yc-winter-2021-stoke-space",
      "name": "Stoke Space",
      "slug": "stoke-space",
      "batch": "Winter 2021",
      "launched_on": "2021-07-26",
      "description": "Seamless mobility to, through, and from space. It starts with 100%…",
      "industry": "Industrials",
      "tags": [
        "Space Exploration",
        "Satellites"
      ],
      "status": "Active",
      "team_size": 305,
      "website": "https://www.stokespace.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/stoke-space"
    },
    {
      "id": "yc-winter-2021-striga",
      "name": "Striga",
      "slug": "striga",
      "batch": "Winter 2021",
      "launched_on": "2021-02-25",
      "description": "Compliant Crypto and Banking Infrastructure",
      "industry": "Fintech",
      "tags": [
        "Crypto / Web3",
        "Compliance"
      ],
      "status": "Acquired",
      "team_size": 14,
      "website": "https://striga.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/striga"
    },
    {
      "id": "yc-winter-2021-supadock",
      "name": "Supadock",
      "slug": "supadock",
      "batch": "Winter 2021",
      "launched_on": "2023-01-08",
      "description": "AI workers for logistics operations",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Logistics",
        "Conversational AI"
      ],
      "status": "Active",
      "team_size": 1,
      "website": "https://getsupadock.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/supadock"
    },
    {
      "id": "yc-winter-2021-svix",
      "name": "Svix",
      "slug": "svix",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Enterprise ready webhooks service, open-source and in the cloud",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "Open Source",
        "API"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://www.svix.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/svix"
    },
    {
      "id": "yc-winter-2021-swadesi-way",
      "name": "Swadesi Way",
      "slug": "swadesi-way",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Healthy organic food that creates a positive impact",
      "industry": "Consumer",
      "tags": [
        "Grocery",
        "Consumer",
        "Climate",
        "E-commerce",
        "Food"
      ],
      "status": "Active",
      "team_size": 9,
      "website": "https://swadesiway.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/swadesi-way"
    },
    {
      "id": "yc-winter-2021-swiftsku",
      "name": "SwiftSku",
      "slug": "swiftsku",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Management and analytics software for convenience stores",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "SaaS",
        "B2B",
        "Analytics",
        "Retail Tech"
      ],
      "status": "Active",
      "team_size": 35,
      "website": "https://swiftsku.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/swiftsku"
    },
    {
      "id": "yc-winter-2021-taloflow",
      "name": "Taloflow",
      "slug": "taloflow",
      "batch": "Winter 2021",
      "launched_on": "2021-02-09",
      "description": "Better, faster tech vendor research",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://www.taloflow.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/taloflow"
    },
    {
      "id": "yc-winter-2021-taofi",
      "name": "TaoFi",
      "slug": "taofi",
      "batch": "Winter 2021",
      "launched_on": "2021-03-20",
      "description": "The financial layer for decentralized AI",
      "industry": "Fintech",
      "tags": [
        "Artificial Intelligence",
        "DeFi"
      ],
      "status": "Acquired",
      "team_size": 11,
      "website": "https://taofi.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/taofi"
    },
    {
      "id": "yc-winter-2021-taste",
      "name": "Taste",
      "slug": "taste",
      "batch": "Winter 2021",
      "launched_on": "2021-02-18",
      "description": "Online marketplace for dinners shipped from great restaurants",
      "industry": "Consumer",
      "tags": [
        "Ghost Kitchens",
        "Marketplace",
        "Delivery"
      ],
      "status": "Inactive",
      "team_size": 2,
      "website": "https://gettaste.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/taste"
    },
    {
      "id": "yc-winter-2021-techbiz",
      "name": "TechBiz",
      "slug": "techbiz",
      "batch": "Winter 2021",
      "launched_on": "2021-03-05",
      "description": "MIS on mobile for SMB's in India",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "SMB"
      ],
      "status": "Acquired",
      "team_size": 3,
      "website": "https://www.techbiz.app",
      "yc_profile_url": "https://www.ycombinator.com/companies/techbiz"
    },
    {
      "id": "yc-winter-2021-terapify",
      "name": "Terapify",
      "slug": "terapify",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Online therapy platform for the Spanish-speaking market",
      "industry": "Healthcare",
      "tags": [
        "Mental Health Tech",
        "Consumer Health Services",
        "Telemedicine"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://www.terapify.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/terapify"
    },
    {
      "id": "yc-winter-2021-terra-api",
      "name": "Terra API",
      "slug": "terra-api",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "API for developers and AIs to access health data ",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Digital Health"
      ],
      "status": "Active",
      "team_size": 25,
      "website": "http://tryterra.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/terra-api"
    },
    {
      "id": "yc-winter-2021-text-blaze",
      "name": "Text Blaze",
      "slug": "text-blaze",
      "batch": "Winter 2021",
      "launched_on": "2021-03-11",
      "description": "Slash commands anywhere",
      "industry": "B2B",
      "tags": [
        "Robotic Process Automation",
        "SaaS",
        "B2B"
      ],
      "status": "Active",
      "team_size": 9,
      "website": "https://blaze.today",
      "yc_profile_url": "https://www.ycombinator.com/companies/text-blaze"
    },
    {
      "id": "yc-winter-2021-the-third-place",
      "name": "The Third Place",
      "slug": "the-third-place",
      "batch": "Winter 2021",
      "launched_on": "2021-03-10",
      "description": "Subscriptions for neighborhood businesses ",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "Community",
        "Subscriptions"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://www.thethirdplace.is/",
      "yc_profile_url": "https://www.ycombinator.com/companies/the-third-place"
    },
    {
      "id": "yc-winter-2021-tilt-2",
      "name": "Tilt",
      "slug": "tilt-2",
      "batch": "Winter 2021",
      "launched_on": "2021-03-08",
      "description": "Bringing the joy of cycling to millions of Indians",
      "industry": "Consumer",
      "tags": [
        "Hardware",
        "Consumer",
        "Fitness",
        "India",
        "Mobility"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://tilt.bike/",
      "yc_profile_url": "https://www.ycombinator.com/companies/tilt-2"
    },
    {
      "id": "yc-winter-2021-tint",
      "name": "Tint",
      "slug": "tint",
      "batch": "Winter 2021",
      "launched_on": "2021-01-13",
      "description": "Makes it easy for tech platforms to embed insurance into products",
      "industry": "Fintech",
      "tags": [
        "Artificial Intelligence",
        "Developer Tools",
        "Fintech"
      ],
      "status": "Active",
      "team_size": 40,
      "website": "http://www.tint.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/tint"
    },
    {
      "id": "yc-winter-2021-topkey",
      "name": "Topkey",
      "slug": "topkey",
      "batch": "Winter 2021",
      "launched_on": "2021-03-22",
      "description": "",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "Real Estate",
        "Proptech"
      ],
      "status": "Active",
      "team_size": 17,
      "website": "https://www.topkey.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/topkey"
    },
    {
      "id": "yc-winter-2021-topline-pro",
      "name": "Topline Pro",
      "slug": "topline-pro",
      "batch": "Winter 2021",
      "launched_on": "2021-03-09",
      "description": "Generative AI powered Shopify for home service professionals",
      "industry": "B2B",
      "tags": [
        "SaaS"
      ],
      "status": "Active",
      "team_size": 28,
      "website": "https://www.toplinepro.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/topline-pro"
    },
    {
      "id": "yc-winter-2021-tractian",
      "name": "Tractian",
      "slug": "tractian",
      "batch": "Winter 2021",
      "launched_on": "2021-02-12",
      "description": "Physical AI for asset-heavy industries",
      "industry": "Industrials",
      "tags": [
        "SaaS",
        "IoT",
        "B2B",
        "Operations",
        "AI"
      ],
      "status": "Active",
      "team_size": 530,
      "website": "https://tractian.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/tractian"
    },
    {
      "id": "yc-winter-2021-treinta",
      "name": "Treinta",
      "slug": "treinta",
      "batch": "Winter 2021",
      "launched_on": "2021-01-22",
      "description": "Software and AI tools for SMBs in the US and Latin America",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "Subscriptions"
      ],
      "status": "Active",
      "team_size": 60,
      "website": "https://www.treinta.co",
      "yc_profile_url": "https://www.ycombinator.com/companies/treinta"
    },
    {
      "id": "yc-winter-2021-trela",
      "name": "Trela",
      "slug": "trela",
      "batch": "Winter 2021",
      "launched_on": "2021-05-24",
      "description": "Your one-stop shop to eat well in Brazil",
      "industry": "Consumer",
      "tags": [
        "Grocery",
        "Marketplace"
      ],
      "status": "Active",
      "team_size": 120,
      "website": "https://www.trela.com.br",
      "yc_profile_url": "https://www.ycombinator.com/companies/trela"
    },
    {
      "id": "yc-winter-2021-trendpop",
      "name": "Trendpop",
      "slug": "trendpop",
      "batch": "Winter 2021",
      "launched_on": "2021-07-13",
      "description": "Discover trends as they happen",
      "industry": "B2B",
      "tags": [
        "Analytics",
        "Social Media",
        "Music",
        "Creator Economy"
      ],
      "status": "Acquired",
      "team_size": 10,
      "website": "http://trendpop.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/trendpop"
    },
    {
      "id": "yc-winter-2021-trestle-biotherapeutics",
      "name": "Trestle Biotherapeutics",
      "slug": "trestle-biotherapeutics",
      "batch": "Winter 2021",
      "launched_on": "2021-03-16",
      "description": "Bioengineered kidneys for patients with kidney failure",
      "industry": "Healthcare",
      "tags": [
        "Biotech"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "http://www.trestlebio.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/trestle-biotherapeutics"
    },
    {
      "id": "yc-winter-2021-triomics",
      "name": "Triomics",
      "slug": "triomics",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "AI Agents for Oncology EHRs",
      "industry": "Healthcare",
      "tags": [
        "Healthcare",
        "Healthcare IT"
      ],
      "status": "Active",
      "team_size": 50,
      "website": "https://triomics.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/triomics"
    },
    {
      "id": "yc-winter-2021-triplit",
      "name": "Triplit",
      "slug": "triplit",
      "batch": "Winter 2021",
      "launched_on": "2021-02-24",
      "description": "The best database for app developers",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS",
        "Web Development",
        "Cloud Computing",
        "Databases"
      ],
      "status": "Inactive",
      "team_size": 3,
      "website": "https://www.triplit.dev",
      "yc_profile_url": "https://www.ycombinator.com/companies/triplit"
    },
    {
      "id": "yc-winter-2021-tupelo",
      "name": "Tupelo",
      "slug": "tupelo",
      "batch": "Winter 2021",
      "launched_on": "2021-03-03",
      "description": "Marketplace for small business M&A",
      "industry": "B2B",
      "tags": [
        "Fintech",
        "Marketplace"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://tupelosmb.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/tupelo"
    },
    {
      "id": "yc-winter-2021-turing-college",
      "name": "Turing College",
      "slug": "turing-college",
      "batch": "Winter 2021",
      "launched_on": "2021-03-03",
      "description": "AI-driven online tech school for busy professionals",
      "industry": "Education",
      "tags": [
        "Education"
      ],
      "status": "Active",
      "team_size": 50,
      "website": "https://www.turingcollege.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/turing-college"
    },
    {
      "id": "yc-winter-2021-udhaar-app",
      "name": "Udhaar App",
      "slug": "udhaar-app",
      "batch": "Winter 2021",
      "launched_on": "2021-03-08",
      "description": "We're Khatabook / OkCredit for Pakistan",
      "industry": "Fintech",
      "tags": [
        "Fintech"
      ],
      "status": "Active",
      "team_size": 32,
      "website": "https://udhaar.pk/",
      "yc_profile_url": "https://www.ycombinator.com/companies/udhaar-app"
    },
    {
      "id": "yc-winter-2021-uiflow",
      "name": "Uiflow",
      "slug": "uiflow",
      "batch": "Winter 2021",
      "launched_on": "2021-03-03",
      "description": "No-code platform for enterprise software companies",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "SaaS",
        "B2B"
      ],
      "status": "Acquired",
      "team_size": 21,
      "website": "https://www.ycombinator.com/companies/uiflow",
      "yc_profile_url": "https://www.ycombinator.com/companies/uiflow"
    },
    {
      "id": "yc-winter-2021-unfurl",
      "name": "Unfurl",
      "slug": "unfurl",
      "batch": "Winter 2021",
      "launched_on": "2021-01-14",
      "description": "A virtual food hall that delivers",
      "industry": "Consumer",
      "tags": [
        "Delivery",
        "Food Tech"
      ],
      "status": "Inactive",
      "team_size": 20,
      "website": "http://unfurlcuisine.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/unfurl"
    },
    {
      "id": "yc-winter-2021-unschool",
      "name": "Unschool",
      "slug": "unschool",
      "batch": "Winter 2021",
      "launched_on": "2021-03-09",
      "description": "Learn, Intern and become Industry-Ready",
      "industry": "Education",
      "tags": [
        "Education",
        "eLearning"
      ],
      "status": "Active",
      "team_size": 35,
      "website": "https://www.unschool.in/",
      "yc_profile_url": "https://www.ycombinator.com/companies/unschool"
    },
    {
      "id": "yc-winter-2021-unsurvey",
      "name": "unSurvey",
      "slug": "unsurvey",
      "batch": "Winter 2021",
      "launched_on": "2021-02-19",
      "description": "AI-led market research interviews, no scheduling, instant insights.",
      "industry": "B2B",
      "tags": [
        "B2B",
        "Feedback",
        "Market Research",
        "AI"
      ],
      "status": "Acquired",
      "team_size": 8,
      "website": "http://www.unsurvey.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/unsurvey"
    },
    {
      "id": "yc-winter-2021-upchieve",
      "name": "UPchieve",
      "slug": "upchieve",
      "batch": "Winter 2021",
      "launched_on": "2021-02-12",
      "description": "Connecting low-income HS students with free, 24/7 online tutoring",
      "industry": "Education",
      "tags": [
        "Education",
        "Nonprofit"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://www.upchieve.org",
      "yc_profile_url": "https://www.ycombinator.com/companies/upchieve"
    },
    {
      "id": "yc-winter-2021-valink-therapeutics",
      "name": "Valink Therapeutics",
      "slug": "valink-therapeutics",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Discovering bispecific antibody drug-conjugates (BsADC) against cancer",
      "industry": "Healthcare",
      "tags": [
        "Biotech",
        "Therapeutics",
        "Drug discovery"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://www.valinktx.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/valink-therapeutics"
    },
    {
      "id": "yc-winter-2021-vapi",
      "name": "Vapi",
      "slug": "vapi",
      "batch": "Winter 2021",
      "launched_on": "2021-03-04",
      "description": "Voice AI for developers.",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence"
      ],
      "status": "Active",
      "team_size": 50,
      "website": "https://vapi.ai",
      "yc_profile_url": "https://www.ycombinator.com/companies/vapi"
    },
    {
      "id": "yc-winter-2021-veera-health",
      "name": "Veera Health",
      "slug": "veera-health",
      "batch": "Winter 2021",
      "launched_on": "2021-03-05",
      "description": "We treat women with Polycystic Ovary Syndrome in India",
      "industry": "Healthcare",
      "tags": [
        "Consumer Health Services",
        "Femtech"
      ],
      "status": "Active",
      "team_size": 4,
      "website": "https://www.veerahealth.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/veera-health"
    },
    {
      "id": "yc-winter-2021-vendease",
      "name": "Vendease",
      "slug": "vendease",
      "batch": "Winter 2021",
      "launched_on": "2021-03-04",
      "description": "Where restaurants in Africa buy food supplies",
      "industry": "B2B",
      "tags": [
        "Supply Chain",
        "Food & Beverage"
      ],
      "status": "Active",
      "team_size": 250,
      "website": "https://vendease.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/vendease"
    },
    {
      "id": "yc-winter-2021-venu-ai",
      "name": "Venu AI",
      "slug": "venu-ai",
      "batch": "Winter 2021",
      "launched_on": "2021-01-28",
      "description": "Meet qualified leads in person by automating conference production",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "B2B",
        "Community",
        "Sales",
        "Marketing"
      ],
      "status": "Active",
      "team_size": 5,
      "website": "https://www.venu3d.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/venu-ai"
    },
    {
      "id": "yc-winter-2021-verak",
      "name": "Verak",
      "slug": "verak",
      "batch": "Winter 2021",
      "launched_on": "2021-03-27",
      "description": "Better Business Insurance for MSMEs in India",
      "industry": "Fintech",
      "tags": [
        "Insurance"
      ],
      "status": "Acquired",
      "team_size": 45,
      "website": "http://verak.in",
      "yc_profile_url": "https://www.ycombinator.com/companies/verak"
    },
    {
      "id": "yc-winter-2021-version-story",
      "name": "Version Story",
      "slug": "version-story",
      "batch": "Winter 2021",
      "launched_on": "2021-03-23",
      "description": "GitHub for lawyers",
      "industry": "B2B",
      "tags": [
        "Artificial Intelligence",
        "SaaS",
        "B2B",
        "Legal",
        "LegalTech"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "https://versionstory.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/version-story"
    },
    {
      "id": "yc-winter-2021-voosh",
      "name": "Voosh",
      "slug": "voosh",
      "batch": "Winter 2021",
      "launched_on": "2021-03-02",
      "description": "Making Restaurants more data-driven!",
      "industry": "B2B",
      "tags": [
        "Food Tech"
      ],
      "status": "Active",
      "team_size": 15,
      "website": "https://voosh.ai/",
      "yc_profile_url": "https://www.ycombinator.com/companies/voosh"
    },
    {
      "id": "yc-winter-2021-wasp",
      "name": "Wasp",
      "slug": "wasp",
      "batch": "Winter 2021",
      "launched_on": "2021-02-11",
      "description": "Configuration language for building enterprise web apps 10x faster",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "Open Source"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://wasp-lang.dev/",
      "yc_profile_url": "https://www.ycombinator.com/companies/wasp"
    },
    {
      "id": "yc-winter-2021-waydev-ai",
      "name": "Waydev AI",
      "slug": "waydev-ai",
      "batch": "Winter 2021",
      "launched_on": "2021-03-22",
      "description": "Track AI-generated code from commit to production",
      "industry": "B2B",
      "tags": [
        "AIOps",
        "Artificial Intelligence",
        "Analytics",
        "AI",
        "AI Assistant"
      ],
      "status": "Active",
      "team_size": 13,
      "website": "https://waydev.co/",
      "yc_profile_url": "https://www.ycombinator.com/companies/waydev-ai"
    },
    {
      "id": "yc-winter-2021-waypoint",
      "name": "Waypoint",
      "slug": "waypoint",
      "batch": "Winter 2021",
      "launched_on": "2021-05-05",
      "description": "The email API built for product teams",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B",
        "Design",
        "Email",
        "APIs"
      ],
      "status": "Active",
      "team_size": null,
      "website": "https://www.usewaypoint.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/waypoint"
    },
    {
      "id": "yc-winter-2021-webiny",
      "name": "Webiny",
      "slug": "webiny",
      "batch": "Winter 2021",
      "launched_on": "2021-03-11",
      "description": "Open-source framework for building serverless applications",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "B2B",
        "Open Source"
      ],
      "status": "Active",
      "team_size": 6,
      "website": "https://www.webiny.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/webiny"
    },
    {
      "id": "yc-winter-2021-weekday",
      "name": "Weekday",
      "slug": "weekday",
      "batch": "Winter 2021",
      "launched_on": "2021-03-04",
      "description": "AI recruiter that runs outbound sourcing campaigns to find top talent",
      "industry": "B2B",
      "tags": [
        "B2B",
        "Recruiting"
      ],
      "status": "Active",
      "team_size": 38,
      "website": "https://weekday.works",
      "yc_profile_url": "https://www.ycombinator.com/companies/weekday"
    },
    {
      "id": "yc-winter-2021-weweb-io",
      "name": "weweb.io",
      "slug": "weweb-io",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "WeWeb is a no-code front-end builder that connects with any back-end.",
      "industry": "B2B",
      "tags": [
        "Developer Tools",
        "Web Development"
      ],
      "status": "Active",
      "team_size": 12,
      "website": "https://www.weweb.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/weweb-io"
    },
    {
      "id": "yc-winter-2021-worksphere",
      "name": "Worksphere",
      "slug": "worksphere",
      "batch": "Winter 2021",
      "launched_on": "2021-01-28",
      "description": "Manage your hybrid workplace",
      "industry": "B2B",
      "tags": [
        "SaaS",
        "B2B"
      ],
      "status": "Acquired",
      "team_size": 6,
      "website": "https://www.worksphere.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/worksphere"
    },
    {
      "id": "yc-winter-2021-wyndly",
      "name": "Wyndly",
      "slug": "wyndly",
      "batch": "Winter 2021",
      "launched_on": "2021-02-06",
      "description": "Life's better without allergies",
      "industry": "Healthcare",
      "tags": [
        "Consumer Health Services",
        "Consumer",
        "Digital Health",
        "Healthcare"
      ],
      "status": "Active",
      "team_size": 10,
      "website": "https://www.wyndly.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/wyndly"
    },
    {
      "id": "yc-winter-2021-yourquote",
      "name": "YourQuote",
      "slug": "yourquote",
      "batch": "Winter 2021",
      "launched_on": "2021-03-20",
      "description": "YourQuote is India's largest writing platform",
      "industry": "Consumer",
      "tags": [
        "Subscriptions",
        "Social Network"
      ],
      "status": "Inactive",
      "team_size": 9,
      "website": "https://www.yourquote.in",
      "yc_profile_url": "https://www.ycombinator.com/companies/yourquote"
    },
    {
      "id": "yc-winter-2021-z1",
      "name": "Z1",
      "slug": "z1",
      "batch": "Winter 2021",
      "launched_on": "2021-03-03",
      "description": "Digital bank for teenagers in LatAm connected to prepaid card ",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Payments",
        "Consumer",
        "Lending",
        "Neobank"
      ],
      "status": "Active",
      "team_size": 80,
      "website": "https://z1.app/",
      "yc_profile_url": "https://www.ycombinator.com/companies/z1"
    },
    {
      "id": "yc-winter-2021-zealth",
      "name": "Zealth",
      "slug": "zealth",
      "batch": "Winter 2021",
      "launched_on": "2021-03-15",
      "description": "Software for remote monitoring of cancer patients",
      "industry": "Healthcare",
      "tags": [
        "Health Tech",
        "Remote",
        "Oncology"
      ],
      "status": "Active",
      "team_size": 2,
      "website": "https://zealth-ai.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/zealth"
    },
    {
      "id": "yc-winter-2021-zepto",
      "name": "Zepto",
      "slug": "zepto",
      "batch": "Winter 2021",
      "launched_on": "2021-11-11",
      "description": "10-Minute Grocery Delivery in India",
      "industry": "Consumer",
      "tags": [
        "Grocery",
        "Delivery"
      ],
      "status": "Active",
      "team_size": 1300,
      "website": "https://www.zeptonow.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/zepto"
    },
    {
      "id": "yc-winter-2021-ziina",
      "name": "Ziina",
      "slug": "ziina",
      "batch": "Winter 2021",
      "launched_on": "2021-03-14",
      "description": "A digital wallet for the Middle East & North Africa",
      "industry": "Fintech",
      "tags": [
        "Fintech",
        "Payments",
        "Neobank"
      ],
      "status": "Active",
      "team_size": 57,
      "website": "https://www.ziina.com",
      "yc_profile_url": "https://www.ycombinator.com/companies/ziina"
    },
    {
      "id": "yc-winter-2021-zingbus",
      "name": "zingbus",
      "slug": "zingbus",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Platform for bus travel across Indian cities",
      "industry": "Consumer",
      "tags": [
        "Marketplace",
        "Travel"
      ],
      "status": "Active",
      "team_size": 40,
      "website": "https://www.zingbus.com/",
      "yc_profile_url": "https://www.ycombinator.com/companies/zingbus"
    },
    {
      "id": "yc-winter-2021-zoko",
      "name": "ZOKO",
      "slug": "zoko",
      "batch": "Winter 2021",
      "launched_on": "2021-03-01",
      "description": "Better Business on WhatsApp",
      "industry": "B2B",
      "tags": [
        "Generative AI",
        "SaaS",
        "E-commerce"
      ],
      "status": "Active",
      "team_size": 18,
      "website": "https://www.zoko.io/",
      "yc_profile_url": "https://www.ycombinator.com/companies/zoko"
    }
  ],
  "batches": [
    {
      "label": "Summer 2021",
      "count": 391
    },
    {
      "label": "Winter 2021",
      "count": 336
    }
  ],
  "directory_status": [
    {
      "label": "Acquired",
      "count": 79
    },
    {
      "label": "Active",
      "count": 523
    },
    {
      "label": "Inactive",
      "count": 125
    }
  ],
  "review_progress": {
    "verified_founded_2021": 3,
    "sale_candidates_2021": 42,
    "sale_candidates_before_2021": 13,
    "publishable_outcomes": 3,
    "reviewed_right_censored": 3,
    "high_priority_reviews": 0
  }
} satisfies SamplingFrame;
