# Outline -- Carbon Intensity and Life Cycle Assessment (LCA) Library

> Artifact slug: `lca-carbon-intensity-library` (used for file naming only).
> URL slug per SME edit: `/docs/data-and-methodology/lca-library`.
> Destination MDX path: `src/app/docs/data-and-methodology/lca-library/page.mdx`.

## Page outline

### H1: Carbon Intensity and Life Cycle Assessment (LCA) Library
- metadata.title: "Carbon Intensity and Life Cycle Assessment (LCA) Library"
- metadata.description: "Koi's curated GHG intensity, carbon intensity, and life cycle assessment (LCA) data, structured into value chains that power 9,000+ climate impact models." (155 chars)

### H2: What the library is
Intent: One short orientation paragraph. What it contains, why it exists, where its full inventory lives.
Content:
- Curated body of GHG intensity values, life cycle inventory data, and market data that powers 9,000+ Koi impact models (claim from research).
- Draws on a Data Lake of authoritative public datasets plus peer-reviewed and commercial sources; full inventory documented on the parent Data Sources page.
- Built to remove the manual data-gathering work that has historically slowed climate-impact modeling.
- One-line note on auditability: every value is transparently referenced on the per-model Datasheet.

### H2: LCA, GHG intensity, and avoided emissions
Intent: Educational primer. Resolve the LCA-vs-Koi question for newcomers and ground the page's terminology.
Content:
- Define **Life Cycle Assessment (LCA)** -- sometimes called Life Cycle Analysis -- as a methodology for evaluating environmental impacts across a product's entire life cycle (raw material extraction, manufacturing, use, disposal, end-of-life). Anchor link out to the canonical Koi definition in Key Concepts.
- Mention **ISO 14040 / 14044** as the standard that defines LCA principles, requirements, and the four-phase framework (goal and scope, inventory analysis, impact assessment, interpretation). This is the page's only external citation (see Citations to keep).
- Define **carbon intensity** and **GHG intensity** as emissions per unit of output or activity (e.g., kgCO2e/kWh). State Koi's convention: these terms are largely interchangeable in Koi because most data is reported in CO2-equivalents; the specific unit of measure is always exposed per model and matters when the GHGs of concern are not CO2 (SME philosophy #3). Prefer "GHG intensity" in prose; introduce "carbon intensity" once as the common synonym.
- Distinguish **LCA from Koi avoided-emissions modeling** (SME philosophy #1, #2): both rest on the same underlying carbon intensity data, but an LCA precisely measures operational emissions for one product or value chain, while a Koi model combines those data into comparable climate-solution forecasts across portfolios and markets. The two are complementary -- different granularity, different decision context.
- Anchor link to Functional Unit definition in Key Concepts (functional unit is the bridge that makes LCA values usable in a Koi model).

### H2: Sources behind the library
Intent: Quick recap of source categories with hard pointers to koi-data; do not duplicate the full inventory.
Content:
- Three source categories: (1) government and intergovernmental data (IEA, US EPA, IPCC, NREL, etc.); (2) peer-reviewed academic and industry journals; (3) LCA databases.
- LCA databases split into freely accessible (US Federal LCA Commons -- USEEIO, TRACI, ReCiPe 2016, USLCI) and commercial-licensed (ecoinvent, Agri-Footprint, ELCD, Exiobase, EVAH).
- One sentence linking out to koi-data for the canonical, model-level reference list.

### H2: How Koi's library is structured differently
Intent: The SEO-facing comparison section. Differentiate Koi's library from raw LCA databases and from LCA tooling vendors -- without naming competitors directly.
Content:
- Raw LCA databases (ecoinvent, Federal LCA Commons, etc.) and LCA tools built on top of them are designed for one task: producing precise LCAs for a specific product or value chain. Their data structures, verification processes, and user interfaces optimize for that goal. (Framing supplemented by research: openLCA is an open-source modeling tool for trained LCA practitioners; One Click LCA serves business users with 500,000+ datasets and a 10-point verification process, primarily in built-environment contexts.)
- Koi optimizes for a different goal: comparing climate solutions across portfolios and markets to forecast avoided emissions. That goal needs the same underlying carbon intensity data plus three things raw LCA databases do not provide:
  - **Value chain segmentation** (SME philosophy #4, #7): Koi distills complex LCA models with hundreds of nested phases into intuitive value chains with ten or fewer phases, tailored for climate solution modeling. The segments are modular -- interventions plug into them, and the structure surfaces where emissions are concentrated and where enabling effects realize. A trained SME would otherwise spend substantial time adapting raw LCA databases for solution modeling.
  - **Market context** (SME philosophy #5): raw LCA databases sit in isolation of market diffusion data. Koi pairs LCA values with market deployment data, enabling marketwide emissions calculations. Without that pairing, an LCA value is a snapshot of one value chain's emissions, not its societal contribution.
  - **Standardized modeling vocabulary**: Koi's library expresses values in the same Unit Impact / Avoided Emissions Factors (AEFs) and Functional Unit conventions used across every Koi model, so values are directly comparable across solutions.
- One sentence acknowledging that the underlying canon is shared with the broader LCA community; Koi adds structure, market context, and segmentation on top.

### H2: Transparency and the Datasheet
Intent: Concrete grounding for the "auditability" claim.
Content:
- Every value in the library is transparently referenced, whether primary or derived (SME philosophy #6).
- Each Koi model exposes its complete reference set on the Datasheet tab within the model -- visible to the user, not hidden in a back office.
- One sentence on why this matters for investment-grade decisions: traceable data is non-negotiable for due diligence, ESG reporting, and stakeholder communication.

### H2: Expanding coverage
Intent: Forward-looking + customer call-to-action.
Content:
- Koi is natively built to connect with LCA databases, so geography-specific or sector-specific datasets can be added on demand (SME philosophy #8).
- If a customer needs data Koi hasn't ingested yet, they should reach out -- Koi can usually expedite ingestion.
- Contact via the existing email pattern used on other docs pages: `hello@koi.eco`.

## Citations to keep on page

- **ISO 14040** (https://www.iso.org/standard/37456.html) -- the normative international standard for LCA principles and framework. SME confirmed keep (`differentiated? y` in research). One inline `<ExternalLink>` reference in the "LCA, GHG intensity, and avoided emissions" section. No other external citations on the page.

## Background references (not cited on page)

- **US Federal LCA Commons** (https://www.lcacommons.gov/, standard / .gov) -- dropped because `differentiated? n` and koi-engine already links it; the new page cross-links to koi-data which lists the Commons by name.
- **Wikipedia "Life-cycle assessment"** (encyclopedia) -- dropped because the LCA definition is generally accepted and the page uses Koi's own definition with an anchor link to Key Concepts.
- **openLCA, One Click LCA** (vendor) -- dropped because the comparison content is folded into Koi-voice prose without naming competitors. Findings from the web search are absorbed as background framing only.
- **Ecochain, sustainability-directory, Re-Flow, DQS, Below280, Root Sustainability** (blogs / vendors from the ISO 14040 search results) -- dropped; these are not differentiated relative to the ISO standard itself.

## Integration plan

### Outgoing cross-links (new page -> existing)

- `What the library is` -> `/docs/data-and-methodology/koi-data` -- anchor text: "Data Sources and Inputs"
- `LCA, GHG intensity, and avoided emissions` -> `/docs/data-and-methodology/terms-and-concepts#life-cycle-assessment-lca` -- anchor text: "Life Cycle Assessment definition"
- `LCA, GHG intensity, and avoided emissions` -> `/docs/data-and-methodology/terms-and-concepts#functional-unit` -- anchor text: "Functional Unit"
- `LCA, GHG intensity, and avoided emissions` -> `/docs/data-and-methodology/avoided-emissions` -- anchor text: "avoided emissions"
- `Sources behind the library` -> `/docs/data-and-methodology/koi-data#major-data-providers` -- anchor text: "full data source inventory"
- `Sources behind the library` -> `/docs/data-and-methodology/koi-data#lca-datasets-and-providers` -- anchor text: "LCA datasets and providers"
- `How Koi's library is structured differently` -> `/docs/data-and-methodology/koi-engine` -- anchor text: "Koi Engine"
- `How Koi's library is structured differently` -> `/docs/data-and-methodology/terms-and-concepts#unit-impact` -- anchor text: "Unit Impact and Avoided Emissions Factors"
- `Transparency and the Datasheet` -> `/docs/data-and-methodology/koi-data` -- anchor text: "Datasheet"
- `Expanding coverage` -> `mailto:hello@koi.eco` via `<ExternalLink>` -- anchor text: "hello@koi.eco"

### Incoming cross-links (existing -> new page)

- `src/app/docs/data-and-methodology/koi-data/page.mdx` -- in the "LCA Datasets and Providers" subsection, add a leading sentence: "For how Koi structures these LCA inputs into segmented, market-aware value chains, see the [Carbon Intensity and LCA Library](/docs/data-and-methodology/lca-library)."
- `src/app/docs/data-and-methodology/terms-and-concepts/page.mdx` -- at the end of the "Life Cycle Assessment (LCA)" paragraph (around line 112), append: "For Koi's curated carbon intensity and LCA library and how it differs from raw LCA databases, see the [Carbon Intensity and LCA Library](/docs/data-and-methodology/lca-library)."
- `src/app/docs/data-and-methodology/koi-engine/page.mdx` -- near the existing US Federal LCA Commons mention (around line 42-45), append: "These inputs feed Koi's [Carbon Intensity and LCA Library](/docs/data-and-methodology/lca-library), which segments them into climate-solution-ready value chains."

### FAQ update (FAQ-promotion only)

Original question (verbatim, line 69 of `src/app/docs/getting-started/faqs/page.mdx`):
> ### What is Koi's carbon intensity (CI) and life cycle analysis (LCA) library?

Replacement stub (replace the answer body; keep the H3 heading intact for existing anchor links):
> Our library curates GHG intensity, life cycle, and market data into a unified resource that powers Koi's 9,000+ impact models. For coverage, structure, and how it differs from raw LCA databases, see the [Carbon Intensity and LCA Library](/docs/data-and-methodology/lca-library).

### Nav placement

File: `src/shared/navigation-data.ts`
Group: `Koi Methodology`
Position: nest as a child of the existing `Data Sources & Inputs` entry. That entry currently has no `links: [...]`, so this addition introduces one.

Existing entry (around lines 152-155):
```ts
{
  title: 'Data Sources & Inputs',
  href: '/docs/data-and-methodology/koi-data',
},
```

Replacement:
```ts
{
  title: 'Data Sources & Inputs',
  href: '/docs/data-and-methodology/koi-data',
  links: [
    {
      title: 'Carbon Intensity & LCA Library',
      href: '/docs/data-and-methodology/lca-library',
    },
  ],
},
```

No icon -- matches the convention for entries inside the Koi Methodology group, which do not use per-item icons.
