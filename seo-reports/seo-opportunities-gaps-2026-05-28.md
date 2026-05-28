# SEO opportunities -- gaps

## Top candidates

### 1. Financed Emissions and PCAF

- **Type:** Gap fill
- **Source:** not currently covered as a dedicated page; PCAF is mentioned briefly in the Methodology Alignment page but gets no standalone treatment
- **Proposed slug + nav location:** `/docs/data-and-methodology/financed-emissions-pcaf` under `Koi Methodology`, alongside `methodology-alignment`
- **Target keywords:** financed emissions PCAF, PCAF standard, financed emissions calculation, PCAF asset classes, PCAF financed avoided emissions
- **Demand evidence:**
  - Trends: unavailable (HTTP 429 rate limit)
  - Wikipedia: "Partnership for Carbon Accounting Financials" title found via opensearch; pageviews API returned 404 (title format mismatch -- article likely exists but count unresolvable in this run)
  - Autocomplete: 10 suggestions, 0 question-shaped; top: "financed emissions pcaf", "financed emissions pcaf standard", "financed emissions calculation pcaf"
- **Competition:** moderate -- top SERP: azeusconvene.com, atlasmetrics.io, pulsora.com; dominated by B2B ESG SaaS vendor blogs (Workiva, Persefoni, AtlasMetrics), not institutional bodies or Wikipedia
- **Rationale:** PCAF is already the only external standard explicitly named in Koi's methodology-alignment page, signalling Koi's authors consider it load-bearing for their audience. The full autocomplete panel (10 suggestions, methodology- and standard-seeking intent) confirms practitioners are actively searching for PCAF calculation guidance. Competition is entirely B2B climate SaaS blogs -- the same tier Koi competes in -- making this one of the more realistic SERPs to crack with a well-sourced page. Koi's unique angle is financed *avoided* emissions under PCAF (Part A optional metric and EER), which no current top-ranking page addresses.
- **Effort:** light -- the methodology-alignment page already has a PCAF section that can be extracted and expanded; the new page needs the asset-class calculation breakdown and a Koi-specific workflow

---

### 2. IFRS S2 Climate-related Disclosures

- **Type:** Gap fill
- **Source:** not currently covered; IFRS S2 is not mentioned anywhere in the docs
- **Proposed slug + nav location:** `/docs/data-and-methodology/ifrs-s2-alignment` under `Koi Methodology`, or `/docs/getting-started/use-cases/ifrs-s2` as a regulatory use-case page
- **Target keywords:** IFRS S2 climate disclosure, IFRS S2 requirements, ISSB climate-related disclosures, IFRS S2 metrics and targets, climate risk quantification IFRS
- **Demand evidence:**
  - Trends: unavailable (HTTP 429 rate limit)
  - Wikipedia: "IFRS S2" title found via opensearch; pageviews API returned 404 (article likely exists as stub or redirect -- pageview count unresolvable)
  - Autocomplete: 10 suggestions, 0 question-shaped; top: "ifrs s2 climate disclosures", "ifrs s2 climate disclosure standard", "ifrs s2 climate-related disclosures pdf"
- **Competition:** strong -- top SERP: ifrs.org, ey.com, kpmg.com; a "People Also Ask" style breakdown is present on the SERP; informational space is owned by the standard-setter and Big 4
- **Rationale:** IFRS S2 became effective January 2024 and is being adopted across jurisdictions, creating durable mandatory demand from Koi's enterprise and asset-manager audiences. The autocomplete panel is fully populated (10 suggestions) with document-seeking intent, confirming active practitioner research. The competitive moat of ifrs.org and Big 4 is real for pure-informational queries, but a page scoped to "how Koi satisfies IFRS S2 Metrics and Targets requirements" occupies a differentiated niche that institutional content does not cover -- similar to how Persefoni and Watershed have built IFRS S2 positioning pages without competing on the standard itself.
- **Effort:** medium -- requires new explanatory content mapping IFRS S2's four pillars (governance, strategy, risk management, metrics/targets) to specific Koi capabilities; no existing doc section covers this

---

## Considered and rejected

- **GHG Protocol corporate standard:** Strong Stage 1 autocomplete (10 suggestions, same pattern as PCAF and IFRS S2). Deprioritized for Stage 2 because GHG Protocol is already referenced in the methodology-alignment page as a foundational standard, reducing the gap value of a dedicated page. Budget was exhausted before Stage 2 validation -- worth revisiting in a future run with a focused keyword like "GHG Protocol avoided emissions" rather than the corporate standard.
- **Climate due diligence / portco diligence:** 0 Stage 1 autocomplete suggestions. No autocomplete signal detected; dropped per rules.
- **Avoided emissions for venture capital:** 0 Stage 1 autocomplete suggestions. No signal despite strong heuristic fit -- searchers likely use adjacent terms like "climate tech investment impact" instead. Not enough to carry forward.
- **SBTi portfolio targets:** 0 Stage 1 autocomplete suggestions. No signal on this phrase; SBTi demand is likely fragmented across more specific queries (e.g., "SBTiFi", "SBTi financial sector").
- **Climate VC portfolio impact analysis:** 0 Stage 1 autocomplete suggestions. Very low search volume as a phrase; VC audience likely finds this content through adjacent queries.
- **DAC / BECCS / enhanced weathering CDR pathway pages:** Dropped in prefilter -- CDR classification page already includes DAC and BECCS with worked examples; the gap is thin.
- **Sustainable aviation fuel (SAF) impact modeling:** Dropped in prefilter -- specific technology vertical with lower fit for Koi's core cross-sector audience (asset managers, enterprises, innovators broadly).
- **Scope 3 category deep dives:** Dropped in prefilter -- Koi's methodology explicitly cautions against conflating avoided emissions with Scope 1/2/3 accounting; a Scope 3 deep-dive page would pull against Koi's positioning, not with it.

---

## Sources

- [IFRS - IFRS S2 Climate-related Disclosures](https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/ifrs-s2-climate-related-disclosures/)
- [What are IFRS S1 and IFRS S2? | Mitiga Solutions](https://www.mitigasolutions.com/blog/ifrs-s1-and-ifrs-s2)
- [What you need to know about IFRS S2 | EY](https://www.ey.com/en_us/insights/ifrs/what-you-need-to-know-about-new-issb-standard-ifrs-s2)
- [IFRS S1 & S2 | KPMG](https://kpmg.com/ch/en/services/audit/esg-reporting-assurance/ifrs-s1-s2.html)
- [What are Financed Emissions and PCAF? | Convene ESG](https://www.azeusconvene.com/esg/articles/financed-emissions-pcaf)
- [PCAF and Financed Emissions: Complete Guide | Pulsora](https://www.pulsora.com/blog/ultimate-guide-financed-emissions-and-partnership-for-carbon-accounting-financials-pcaf)
- [Measuring Financed Emissions with the PCAF Standard | Workiva](https://www.workiva.com/blog/measuring-financed-emissions-pcaf-standard)
- [PCAF: Reporting Standard Beginner's Guide | Persefoni](https://www.persefoni.com/blog/pcaf)
