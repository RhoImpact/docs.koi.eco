# Research -- Carbon Intensity and Life Cycle Analysis (LCA) Library

## Opportunity summary

- **Type:** FAQ promotion
- **Source FAQ:** "What is Koi's carbon intensity (CI) and life cycle analysis (LCA) library?"
- **Source FAQ answer (verbatim):** Our library represents one of the most comprehensive collections of climate impact data available, and it's growing rapidly. This isn't just about scale; it's about scrutinized, high-quality data that investment professionals can trust. See our [data sources documentation](/docs/data-and-methodology/koi-data) for current coverage and our public roadmap. Missing something critical? Let us know -- we're always expanding based on real-world needs.
- **Proposed slug + nav location:** `/docs/data-and-methodology/lca-library` under Data Sources & Inputs (subpage of `koi-data`).
- **Target keywords:** life cycle analysis carbon intensity, LCA carbon intensity, carbon intensity database, LCA emissions data, climate impact LCA library, life cycle assessment
- **Demand evidence (from /seo-opportunities report, passthrough):**
  - Trends: unavailable (rate-limited)
  - Wikipedia: "Life-cycle assessment" -- 6,764 monthly pageviews avg over 12 months (Jan-Nov 2025; Dec anomalous/partial), falling trend
  - Autocomplete: 6 suggestions, 4 LCA-specific; top: "life cycle analysis carbon footprint", "life cycle assessment carbon emissions", "life cycle analysis vs carbon footprint"
- **Competition:** moderate -- top SERP: openLCA.org, sustainableatlas.org, climatesort.com, netzerocompare.com, oneclicklca.com (commercial LCA vendors and comparison sites)
- **Effort:** medium -- FAQ seed is thin; page needs to explain what LCA and CI mean, coverage breadth, data quality, and library navigation.

## Topic summary

Koi's LCA and carbon intensity library is the curated body of GHG intensity values, life-cycle inventory data, and market data that powers Koi's 9,000+ impact models. It draws on a Data Lake of authoritative public datasets (IEA, US EPA, US Federal LCA Commons, IPCC, WRI/GHG Protocol, NREL, NETL, FAO, and others), supplemented by peer-reviewed journals, EPDs, industry reports, and -- where commercially licensed -- ecoinvent, Agri-Footprint, ELCD, Exiobase, and EVAH. Every value is transparently referenced on each model's Datasheet, ensuring auditability. The library exists to remove the manual data-gathering work that has historically slowed climate-impact modeling.

## Key claims

- LCA is a comprehensive methodology for evaluating environmental impacts across a product's entire life cycle (raw material extraction, manufacturing, use, disposal, end-of-life). -- source: n/a (generally-accepted)
- ISO 14040 establishes the principles and framework for LCA; ISO 14044 specifies detailed requirements and guidelines. ISO 14044 (2006) consolidated three earlier standards (14041, 14042, 14043). -- source: https://www.iso.org/standard/37456.html (standard) [differentiated? y]
- The ISO LCA framework defines four phases: goal and scope definition, inventory analysis, impact assessment, interpretation. -- source: https://www.iso.org/standard/37456.html (standard) [differentiated? y]
- "Carbon intensity" expresses emissions per unit of output or activity (e.g., kgCO2e/kWh, kgCO2e/kg product). -- source: n/a (generally-accepted)
- LCA databases provide life cycle inventory (LCI) data that practitioners use as templates for modeling baseline and solution GHG intensities. -- source: internal (`/docs/data-and-methodology/koi-data`)
- Koi distinguishes baseline GHG intensity (counterfactual / reference scenario) from solution GHG intensity (the modeled climate intervention). -- source: internal (`/docs/data-and-methodology/koi-data`, `/docs/data-and-methodology/terms-and-concepts`)
- Koi's Data Lake powers 9,000+ models with transparently referenced primary or derived data. -- source: internal (`/docs/data-and-methodology/koi-data`)
- The US Federal LCA Commons is a freely accessible repository (USEEIO, TRACI, ReCiPe 2016, USLCI). -- source: https://www.lcacommons.gov/ (standard / .gov) [differentiated? n] -- already linked from `koi-engine`
- Commercial LCA databases compatible with Koi but requiring separate authorization: ecoinvent, Agri-Footprint, ELCD, Exiobase, EVAH. -- source: internal (`/docs/data-and-methodology/koi-data`)
- Koi value-chain-segments LCA database outputs into non-overlapping areas to produce a stylized, intuitive value chain for customers while preserving quantitative information. -- source: internal (`/docs/data-and-methodology/terms-and-concepts`)
- Unit Impact / Avoided Emissions Factors (AEFs) are Koi's standardized expressions of avoided emissions per functional unit, aligned with Project Frame conventions. -- source: internal (`/docs/data-and-methodology/terms-and-concepts`, `/docs/data-and-methodology/methodology-alignment`)
- Each Koi model exposes its complete reference set on a per-model Datasheet tab. -- source: internal (`/docs/data-and-methodology/koi-data`)

## Internal coverage

- `src/app/docs/data-and-methodology/koi-data/page.mdx`: full inventory of data providers (government, academic journals, LCA datasets, industry reports, EPDs). Has a dedicated "LCA Datasets and Providers" subsection. -- This is the parent page; the new page deep-links from it and inherits its data-source canon.
- `src/app/docs/data-and-methodology/terms-and-concepts/page.mdx`: canonical Koi definitions for Life Cycle Assessment, Functional Unit, Unit Impact, AEFs. -- Defines the vocabulary the new page must reuse verbatim.
- `src/app/docs/data-and-methodology/methodology-alignment/page.mdx`: positions LCA scope against GHG inventory assessments and against WBCSD avoided-emissions guidance. -- Useful framing for the "LCA vs other accounting approaches" section.
- `src/app/docs/data-and-methodology/koi-engine/page.mdx`: uses Federal LCA Commons data as templates for constructing solution GHG intensities; links to `https://www.lcacommons.gov/`. -- Confirms how LCA library content flows into modeling.
- `src/app/docs/getting-started/faqs/page.mdx`: source FAQ at `### What is Koi's carbon intensity (CI) and life cycle analysis (LCA) library?` -- Will be replaced by stub + link out per integration plan.

## Established terminology

- **Life Cycle Assessment (LCA)** -- the formal term used in `terms-and-concepts`. NOTE: the FAQ and the proposed page title use "Life Cycle Analysis"; the methodology page consistently uses "Life Cycle Assessment" (matching ISO 14040). The SME should confirm which form to use on the new page. (Flagging as open question below.) -- used in `terms-and-concepts`, `koi-data`
- **GHG intensity** / **baseline GHG intensity** / **solution GHG intensity** -- Koi's preferred phrasing for emissions-per-unit values across the Data Lake. "Carbon intensity" is used informally in the FAQ but `koi-data` consistently uses GHG intensity. -- used in `koi-data`
- **Data Lake** -- Koi's name for the curated data repository. -- used in `koi-data`
- **Datasheet** -- the per-model interface that exposes references. -- used in `koi-data`
- **Functional Unit** -- standardized denominator for impact comparisons. -- used in `terms-and-concepts`
- **Unit Impact / AEFs (Avoided Emissions Factors)** -- avoided emissions per functional unit. -- used in `terms-and-concepts`
- **Value chain segmentation** -- Koi's approach to decomposing LCA data into non-overlapping value chain segments. -- used in `koi-data`, `terms-and-concepts`
- **Federal LCA Commons** -- specific shorthand for the US Federal LCA Commons. -- used in `koi-data`, `koi-engine`

## Frameworks and standards in scope

- **GHG Protocol (WRI)** -- general corporate / product accounting reference; already cited in `koi-data` and `methodology-alignment`.
- **IPCC** -- emissions factors, GWPs, scenarios; cited in `koi-data`.
- **ISO 14040 / 14044** -- not yet explicitly cited in koi-docs; this page is a natural place to acknowledge the standard the LCA discipline is built on.
- **US Federal LCA Commons** (USEEIO, TRACI, ReCiPe 2016, USLCI) -- already a Koi data source; cited in `koi-data` and `koi-engine`.
- **Project Frame** -- normative methodology for Unit Impact / AEFs; cited in `terms-and-concepts` and `methodology-alignment`.
- **WBCSD avoided emissions guidance** -- alignment framing in `methodology-alignment`.
- **SBTi** -- normative industry targets; cited in `koi-data`.
- **OECM (One Earth Climate Model)** -- normative industry pathways; cited in `koi-data`.

## Company philosophy (SME to fill in)
-  An LCA and an avoided emissions model have similar underlying data but varying scopes and use cases. 
- While both an LCA and avoided emissions model (Koi model) are built on carbon intensity data, Koi is focused on combining the same underlying data building blocks to compare climate solutions across portfolios and markets. An LCA is focused on very precise measurement of operational emissions for a specific value chain. They are complementary but differ in granularity and use case. 
- The carbon intensity and GHG intensity are generally interchangable in Koi because most data are reported in carbon dioxide equivalents. The specific unit of measure is always included within each model and should be noted by the user, especially in cases where the GHGs of concern are not carbon dioxide.
- A major value of Koi is that we have done the difficult work of distilling complex LCA models with hundreds of nested phases into intuitive value chains relevant to climate solution modeling, with <= 10 phases in Koi. This allows for their facile use in avoided emissions models, whereas it would take a trained SME a substantial amount of time to adapt LCA databases for their solutions of interest.
- Raw LCA databases also exist in isolation of market diffusion data, but Koi combines the LCA data with market data enabling the calculation of marketwide emissions. Without the market data, the LCA data is just a snapshot of what the emissions of a particular value chain looks like, not how that fits into societal emissions profiles or is reduced by a climate intervention.
- Emphasize the Datasheet auditability for data sources
- Koi's value chain segmentation is a significant benefit for the usability of the data, it makes modular blocks wherein different interventions can exist. It also informs stakeholders on where emissions are concentrated within a value chain and where enabling effects are realized. All things the LCA databases are not equipped for.
- Because Koi is natively built to connect with the LCA databases, we can always add more geography-specific LCA data that is not there. Reach out to us if we don't have what you are looking for ingested yet, we can likely expedite ingesting it into the platform.

<!-- SME: add first-party statements here. No citations needed. These will be
     woven into the draft as fact and expanded upon. Some suggested prompts
     specific to this page:

     - How Koi thinks about "carbon intensity" vs "GHG intensity" -- is one
       preferred, are they interchangeable, or does each have a specific use?
     - Why Koi maintains its own Data Lake rather than just pointing customers
       at upstream LCA databases.
     - What "scrutinized, high-quality data" means in practice -- what does
       Koi do that a raw LCA database does not?
     - How Koi decides when to extend or override an upstream LCA value
       (e.g., for emerging technologies with limited published LCA data).
     - Koi's stance on value-chain segmentation: why segment LCA outputs into
       non-overlapping areas rather than presenting raw database results?
     - Koi's stance on transparency / auditability: every data point exposed
       on the Datasheet; what does the SME want to underline about this?
     - Anything to say about library coverage breadth (sectors, geographies)
       that goes beyond the data sources list on `koi-data`?
-->

## Open questions for SME

- **"Assessment" vs "Analysis":** Page title and FAQ say "Life Cycle Analysis". `terms-and-concepts` and ISO 14040 use "Life Cycle Assessment". Which form should the new page use in its H1, metadata, and prose? (Recommend "Assessment" for self-consistency with the methodology canon, with one parenthetical noting "sometimes called Life Cycle Analysis".) Yes, go with the recommendation for assessment with a parenthetical for analysis.
- **"Carbon intensity" vs "GHG intensity":** The FAQ and the slug use "carbon intensity". `koi-data` uses "GHG intensity". Should the new page treat them as synonyms, prefer one, or distinguish them explicitly? I prefer GHG intensity so defer to that but define both, they are similar.
- **Scope of the page:** Is the goal to (a) document Koi's library specifically -- coverage, governance, navigation -- or (b) also explain LCA and CI from first principles for newcomers? The recommended approach is "library-focused with a short conceptual primer that links out to `terms-and-concepts` for depth". Both. I want to have this as an educational page as well and many newcomers don't know the difference between LCA and Koi/avoided emissions.
- **Coverage numbers:** Is "9,000+ models" still current as of the publish date, or is there an updated figure to use? You can use that for now.
- **Roadmap visibility:** The current FAQ mentions "our public roadmap" but `koi-data` does not link to one. Is there a public roadmap URL to include on this new page, or should we remove that promise? No need to link to that right now. Don't change anything there.
- **ISO 14040 citation:** Acceptable to include a single ISO 14040 link as a "differentiated" external citation (it is the normative standard the field is built on)? Sure.
- **Customer-facing comparison language:** Top SERP competitors include openLCA, oneclicklca, etc. The new page should not directly bash them but may benefit from a section explaining how Koi's library is structured differently (e.g., curated + segmented + integrated with impact modeling, vs raw database). SME to confirm appetite. Agreed, do this. Refer to the SME section and also supplement with additional research on their differences and similarities.
