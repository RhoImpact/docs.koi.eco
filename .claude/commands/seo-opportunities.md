Surface obvious wins for new docs pages in koi-docs by combining the repo's content with measured search-demand data.

## Modes

Parse the first argument:

- `faq` -- audit `src/app/docs/getting-started/faqs/page.mdx` for FAQ entries that should be promoted to dedicated pages.
- `gaps` -- discover topics adjacent to Koi's domain that are not in the docs at all but have real search demand.
- anything else (including no arg) -- print this usage and stop:

  ```
  Usage: /seo-opportunities faq
         /seo-opportunities gaps
  ```

There is no "both" mode. If the user wants both, they run the skill twice. This is deliberate to keep each run cheap.

## Budget per run

Hard ceiling: **~23 tool calls**. Anything more is a bug.

- Stage 1 (cheap triage): one Google Autocomplete `WebFetch` per prefiltered candidate (~6-8 candidates).
- Stage 2 (deep validation): top 2-3 Stage-1 survivors only. Each survivor gets up to 2 Google Trends fetches + up to 2 Wikipedia fetches + 1 `WebSearch`.

If Stage 2 demand fetches fail for a candidate, fall back to its Stage 1 Autocomplete reading. Do not re-fetch.

## Endpoints

- **Google Autocomplete:** `https://www.google.com/complete/search?client=firefox&q=<URL-encoded query>` -- returns `["query", ["suggestion1", "suggestion2", ...]]`. Note count, ordering, presence of question-shaped suggestions ("what is", "how to", "vs", "for").
- **Google Trends (two-step, fragile):**
  1. `https://trends.google.com/trends/api/explore?hl=en-US&tz=0&req=<URL-encoded JSON: {"comparisonItem":[{"keyword":"<term>","geo":"","time":"today 12-m"}],"category":0,"property":""}>`
  2. Strip the leading `)]}',` prefix from the response, parse JSON, locate the `TIMESERIES` widget, extract its `token`.
  3. `https://trends.google.com/trends/api/widgetdata/multiline?hl=en-US&tz=0&req=<URL-encoded widget request>&token=<token>` -- gives normalized interest data.
  4. If any step returns non-2xx, returns no token, or fails to parse, log "Trends: unavailable" and fall through. Do not retry.
- **Wikipedia article lookup:** `https://en.wikipedia.org/w/api.php?action=opensearch&search=<term>&limit=3&format=json` -- returns candidate article titles.
- **Wikipedia pageviews:** `https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia.org/all-access/user/<URL-encoded title>/monthly/<YYYYMMDD>/<YYYYMMDD>` -- last 12 months. Sum monthly counts; report monthly average and trend direction.

## Procedure

### Step 1 -- Read what's covered

Always read first:

- `src/shared/navigation-data.ts` -- canonical list of existing pages. Build a set of slugs / titles. **Every candidate must be checked against this set before emission.**

For `faq` mode, also read `src/app/docs/getting-started/faqs/page.mdx`.

For `gaps` mode, also read `CLAUDE.md`, `README.md`, and skim every `page.mdx`'s `metadata.title` and `metadata.description` (use a single ripgrep or fd pass -- do not read each file in full) to build a covered-topic vocabulary.

### Step 2 -- Prefilter

**`faq` mode:**

Parse every `<FaqItem question="...">` block from the FAQ page. Keep an FAQ as a candidate only if all three hold:

- Answer body is under 200 words.
- Question names a Koi concept, methodology, capability, or comparison (not pure logistics like demos, partnerships, contact, pricing).
- The topic is not already a dedicated page in `navigation-data.ts`.

Cap to **6-8 candidates** for Stage 1. Pick the ones with the strongest named-concept signal (proper nouns, specific methodologies, comparison/decision framings).

**`gaps` mode:**

Start from this seed list:

- Climate VC portfolio impact analysis
- Financed emissions (PCAF)
- Scope 3 category deep dives
- SBTi target setting for portfolios
- GHG Protocol corporate standard alignment
- Avoided emissions for venture capital
- Climate due diligence / portco diligence
- IFRS S2 climate disclosure
- DAC / BECCS / enhanced weathering CDR pathway pages
- Sustainable aviation fuel (SAF) impact modeling

Drop any seed already covered as a dedicated page in `navigation-data.ts`. Cap survivors to **6-8** for Stage 1.

### Step 3 -- Stage 1 (cheap triage)

For each prefiltered candidate, in parallel where possible:

1. Compute a heuristic score (no fetches):
   - **`faq`:** + named-concept-ness, + current answer brevity, + internal links to existing methodology pages (signals importance).
   - **`gaps`:** + presence of the topic phrase or close cognates in `CLAUDE.md`/`README.md`/page descriptions (signals Koi already talks about it externally), + seed-list strategic priority.
2. Derive one core keyword phrase per candidate.
3. Fire **one** Google Autocomplete `WebFetch` per candidate on that phrase. Capture: total suggestion count, number of question-shaped suggestions, top 3 suggestions verbatim.

Rank by `heuristic_score * autocomplete_signal`. Take the top **2-3 candidates** into Stage 2. The rest go into the "considered and rejected" section with their autocomplete reading as the recorded reason.

### Step 4 -- Stage 2 (deep validation)

For each of the 2-3 survivors:

1. **Google Trends.** Run the two-step fetch. On any failure, log "Trends: unavailable" and continue. On success, record interest score (peak and recent average over the 12-month window) and any `related queries` list.
2. **Wikipedia.** Run the opensearch lookup. If a clearly-matching article exists, fetch the last-12-month pageviews. Record monthly average and direction (rising / flat / falling based on first vs last quarter average). If no matching article, log "Wikipedia: no article" and continue.
3. **Competition.** One `WebSearch` on the keyword phrase. Capture top 3 ranking domains, whether a "People Also Ask" block is visible, and a one-line read on whether the SERP is dominated by hard competitors (Wikipedia, established climate platforms like Persefoni / Watershed / Sweep / MSCI, government / academic) vs rankable content (blogs, smaller publishers).

If all three Stage-2 demand signals fail (no Trends, no Wikipedia article, and Stage-1 Autocomplete was weak), drop the candidate from the final output and note it in "considered and rejected". Do not weaken the standard.

Score each survivor:

- **Demand:** synthesized from the measured signals that succeeded. Always cite actual numbers.
- **Competition:** weak / moderate / strong from SERP shape.
- **Promotion/Effort fit:** how much new content the page needs beyond existing material (FAQ answer text, or zero baseline for a gap topic).
- **Strategic fit (`gaps` only):** does this map to a real Koi audience (climate VCs, enterprises, methodologists)?

Rank by demand-divided-by-competition, then by strategic fit / effort.

### Step 5 -- Output

Print a single Markdown response. Structure:

```
# SEO opportunities -- <mode>

## Top candidates

### 1. <Suggested page title>

- **Type:** FAQ promotion | Gap fill
- **Source:** <FAQ question text, or "not currently covered">
- **Proposed slug + nav location:** `<slug>` under `<parent section>`
- **Target keywords:** <3-5, comma-separated>
- **Demand evidence:**
  - Trends: <interest score / "unavailable">
  - Wikipedia: <"<Article>": <N> monthly pageviews avg, <direction> / "no article">
  - Autocomplete: <N suggestions, <M> question-shaped; top: "<suggestion>">
- **Competition:** <weak | moderate | strong> -- top: <domain1, domain2, domain3>
- **Rationale:** <2-3 sentences referencing the cited evidence>
- **Effort:** <light | medium | heavy>

### 2. ...

### 3. ...

## Considered and rejected

- <Candidate>: <one-line reason from Stage 1 / Stage 2>
- <Candidate>: <reason>
- ...
```

## Guardrails

- Every candidate is cross-checked against `src/shared/navigation-data.ts` before emission. No duplicates of existing pages.
- Skip pure-logistics FAQs (demos, partnerships, contact, pricing).
- Every demand claim cites a measured number or count from at least one signal. No demand reasoning from prior knowledge. If all signals fail for a candidate, drop it.
- Stage 1 fires only Autocomplete. Never call Wikipedia or Trends at Stage 1.
- No em dashes anywhere in the output -- use double hyphens (`--`) or rewrite.
- Do not import or invoke `src/mdx/search.mjs`. Read MDX directly.
- Tool-call budget is ~23 max per run. If you find yourself approaching the ceiling, drop the lowest-ranked Stage 2 candidate rather than skipping demand checks on a higher-ranked one.
