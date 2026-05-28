Build a single SEO-opportunity into a new docs page, in four checkpointed phases, with the SME (the user) reviewing and editing between each.

This skill consumes one opportunity from a report produced by `/seo-opportunities`. It does research, proposes an outline + integration plan, drafts the MDX, and wires in nav + cross-links + FAQ updates. Each phase produces a file the SME can edit directly before the next phase runs.

## Modes

Parse the first argument:

- `<report-path>#<N>` -- full run starting from Phase 1 (research). Example: `seo-reports/seo-opportunities-faq-2026-05-28.md#1`.
- `phase=research <report-path>#<N>` -- same as the full-run form, explicit. Stops after Phase 1.
- `phase=outline <slug>` -- skip research, read existing `seo-drafts/<slug>-research.md`, produce the outline. Stops after Phase 2.
- `phase=draft <slug>` -- skip research + outline, read both artifacts, write the MDX. Stops after Phase 3.
- `phase=integrate <slug>` -- skip everything else, read the outline for the integration plan, apply the nav + FAQ + cross-link edits.
- anything else (including no arg) -- print this usage and stop:

  ```
  Usage: /seo-content-generator <report-path>#<N>
         /seo-content-generator phase=research <report-path>#<N>
         /seo-content-generator phase=outline   <slug>
         /seo-content-generator phase=draft     <slug>
         /seo-content-generator phase=integrate <slug>
  ```

`<slug>` is the leaf segment of the opportunity's proposed nav path (e.g. `lca-carbon-intensity-library` from `/docs/data-and-methodology/lca-carbon-intensity-library`). It is the key used to name artifacts in `seo-drafts/`.

There is no "do everything end-to-end without stopping" mode. Stopping between phases is the point -- the SME edits artifacts in place and re-runs the next phase.

## Budget per phase

Hard ceilings. Anything more is a bug.

- **Phase 1 (research):** ~12 tool calls. Cap external fetches at 3 (`WebFetch` or Wikipedia).
- **Phase 2 (outline):** ~5 tool calls. Mostly internal reads for tone calibration.
- **Phase 3 (draft):** ~6 tool calls.
- **Phase 4 (integrate):** ~5 tool calls.

Full run ceiling: **~28 tool calls**.

If a phase is approaching its ceiling, stop and hand back to the SME rather than skipping a checkpoint or a required step.

## Procedure

### Phase 1 -- Research

**Input:** `<report-path>#<N>`.

1. Read the report. Find the `### N. <Title>` block. Parse:
   - Title
   - Type (FAQ promotion | Gap fill)
   - Source (FAQ question text, or "not currently covered")
   - Proposed slug + nav location (extract `<slug>` from the path's leaf segment)
   - Target keywords
   - Demand evidence (Trends, Wikipedia, Autocomplete -- passthrough verbatim)
   - Competition
   - Rationale
   - Effort

2. **Internal coverage scan.** For each target keyword, run a single ripgrep pass across `src/app/docs/**/*.mdx`. Collect the file paths and a one-line excerpt of each match. Read the 2-3 most relevant pages in full so the new page does not contradict existing material.

3. **Established terminology.** While reading those pages, capture the exact terms they use for the concept (e.g. "carbon intensity factor" vs "emissions intensity coefficient"). The new page must reuse these, not coin alternatives.

4. **Framework / standard alignment.** Note which frameworks the existing docs already cite (e.g. GHG Protocol, Project Frame, ISO 14040, PCAF, SBTi). The new page references the same canon.

5. **External research.** Up to 3 external fetches total:
   - 1 `WebSearch` on the strongest target keyword to surface authoritative sources.
   - Up to 2 `WebFetch` on the most authoritative results (peer-reviewed, standards bodies, .gov / .edu / .org institutions). Skip vendor blogs.
   - 1 Wikipedia `WebFetch` is allowed if the topic has a canonical article and the search did not already surface it.

6. **Tag every captured claim** with source type:
   - `peer-reviewed` -- journal article, working paper
   - `standard` -- ISO, GHG Protocol, PCAF, SBTi, IFRS, Project Frame, etc.
   - `encyclopedia` -- Wikipedia, Britannica
   - `blog` -- vendor / individual posts
   - `internal` -- existing koi-docs page
   - `generally-accepted` -- common knowledge in the field; no specific source needed

   For each claim with an external source, add a `[differentiated? y/n]` flag estimating whether the source provides information Koi could not credibly state first-party. Default `n`. Per [[feedback-docs-citation-style]], only `y`-flagged citations survive to the final page.

7. **Write `seo-drafts/<slug>-research.md`** with this structure:

   ```
   # Research -- <Title>

   ## Opportunity summary
   <verbatim passthrough of the opportunity block from the report>

   ## Topic summary
   <3-4 sentence working definition using established terminology>

   ## Key claims
   - <claim text> -- source: <url or "n/a"> (<source-type>) [differentiated? y/n]
   - ...

   ## Internal coverage
   - `<path>`: <one-line excerpt> -- relevant because <reason>
   - ...

   ## Established terminology
   - <term>: <definition / usage> (used in `<path>`)
   - ...

   ## Frameworks and standards in scope
   - <framework>: <how the existing docs use it>
   - ...

   ## Company philosophy (SME to fill in)
   <!-- SME: add first-party statements here. No citations needed. These will be
        woven into the draft as fact and expanded upon. Example formats:
        - "We treat <X> as <Y> because <reason>."
        - "Koi's stance on <X> is <Z>."
   -->

   ## Open questions for SME
   - <question>
   - ...
   ```

8. **Checkpoint.** Use `AskUserQuestion` to ask the SME whether the research file is ready to advance to outline. Options: `Continue to outline`, `Pause -- I'll re-run with phase=outline after editing`, `Redo research with new direction (describe in Other)`.

### Phase 2 -- Outline + integration plan

**Input:** `<slug>` (resolved from the research file or passed explicitly).

1. Read `seo-drafts/<slug>-research.md` (may have been edited by the SME).

2. Read 2-3 representative methodology pages for tone calibration:
   - `src/app/docs/data-and-methodology/overview/page.mdx`
   - `src/app/docs/data-and-methodology/mathematical-foundations/page.mdx`
   - `src/app/docs/data-and-methodology/terms-and-concepts/page.mdx`

3. Read `src/shared/navigation-data.ts` to confirm the exact insertion point for the new page.

4. **Page outline.** Propose H1 + H2 sections (typically 3-6 sections). For each H2: one-line intent + which research claims and SME philosophy statements land there. Weave SME philosophy directly into the relevant sections as first-party prose -- no citation marker.

5. **Citation triage** ([[feedback-docs-citation-style]]).
   - Walk the research `Key claims` list. Default: drop the citation from the final page.
   - Keep only citations the SME marked `differentiated? y`.
   - List everything dropped in a "Background references (not cited on page)" appendix at the bottom of the outline so the SME can pull any back.

6. **Integration plan.** Spell out, with file paths and exact anchor text:
   - **Outgoing cross-links:** `<new section>` -> `/docs/<existing-path>#<anchor>` with the anchor text to use.
   - **Incoming cross-links:** existing pages that should gain a link to the new page, with suggested insertion point and anchor text.
   - **FAQ update (FAQ-promotion type only):** the exact replacement text for the original Q&A on `src/app/docs/getting-started/faqs/page.mdx`. Format is a 1-2 sentence stub answer + a link to the new page. Decision is locked: **stub + link out**.
   - **Nav placement:** the exact spot in `src/shared/navigation-data.ts` -- which group, which existing link it sits after, suggested icon (matching the existing icon style in that group).

7. **Write `seo-drafts/<slug>-outline.md`** with this structure:

   ```
   # Outline -- <Title>

   ## Page outline
   ### H1: <title>
   - metadata.title: "<...>"
   - metadata.description: "<one-sentence summary, 140-160 chars>"

   ### H2: <section name>
   Intent: <one line>
   Content:
   - <claim or SME philosophy line>
   - ...

   ### H2: <section name>
   ...

   ## Citations to keep on page
   - <claim>: <url> -- <why differentiated>
   - ...
   (If none: state "None -- the page stands on first-party authority.")

   ## Background references (not cited on page)
   - <claim>: <url> (<source-type>) -- dropped because <generally-accepted | encyclopedia-only | redundant with internal coverage>
   - ...

   ## Integration plan

   ### Outgoing cross-links (new page -> existing)
   - `<H2 section name>` -> `/docs/<path>#<anchor>` -- anchor text: "<text>"
   - ...

   ### Incoming cross-links (existing -> new page)
   - `<existing-path>` -- insert near `<existing anchor>`, anchor text: "<text>"
   - ...

   ### FAQ update (FAQ-promotion only)
   Original question: "<verbatim>"
   Replacement stub:
   > <1-2 sentence stub>. [Learn more](/docs/<new-path>).

   ### Nav placement
   File: `src/shared/navigation-data.ts`
   Group: "<group title>"
   Position: after `<existing link title>`, before `<existing link title>`
   Suggested entry:
   ```ts
   {
     title: '<page title>',
     href: '/docs/<new-path>',
     icon: '<icon class matching the group>',
   }
   ```
   ```

8. **Checkpoint.** `AskUserQuestion`: `Continue to draft`, `Pause -- I'll re-run with phase=draft after editing`, `Redo outline with new direction`.

### Phase 3 -- Draft

**Input:** `<slug>`.

1. Read `seo-drafts/<slug>-research.md` and `seo-drafts/<slug>-outline.md`.

2. Compute the destination path from the outline's H1 nav location: `src/app/docs/<section>/<slug>/page.mdx`. If the directory does not exist, the Write tool will create it.

3. Write the MDX. **Required shape**, matching existing pages in this repo:

   ```mdx
   export const metadata = {
     title: '<outline title>',
     description: '<outline description>',
   }

   # <title>

   <PageInformationalData lastModified={lastModified} />

   <H2 sections per outline...>
   ```

4. **Content rules:**
   - Reuse established terminology captured in research. Do not coin synonyms.
   - Weave SME philosophy statements as first-party prose. No citation marker on those statements.
   - Render only the citations from the outline's "Citations to keep on page" list. Drop everything else, even if it appeared in the research file. Use `<ExternalLink url="..." linkText="..." />` for inline external citations (matching the pattern in `src/app/docs/getting-started/faqs/page.mdx`).
   - Tone: conversational + confident, evidence-forward, active voice, technical but accessible. Match `src/app/docs/data-and-methodology/overview/page.mdx`.
   - No formulas in prose. If a formula is needed, follow the `<ImageZoom>` pattern from `src/app/docs/data-and-methodology/mathematical-foundations/page.mdx`.
   - Internal cross-links use Markdown link syntax: `[text](/docs/<path>)`. Anchor links use `[text](#section-id)`.
   - Reusable components available in `src/components/`: `<Tip>`, `<Info>`, `<Warning>`, `<Danger>`, `<Row>` / `<Col>`, `<ExternalLink>`, `<LinksGrid>`, `<ImageZoom>`, `<PageInformationalData>`. Use them per the outline's calls -- do not invent new components.
   - No em dashes (`—`) anywhere in the output. Do not substitute `--` either -- per [[feedback-no-dash-substitutes]] the cadence must be rewritten. Use parentheses, commas + restructuring, a colon, or split into two sentences. The single-hyphen bullet separator (`* **Foo** - description`) used elsewhere in koi-docs lists is fine; the rule applies to em-dash-shaped breaks in prose.

5. **Checkpoint.** `AskUserQuestion`: `Continue to integrate`, `Pause -- I'll re-run with phase=integrate after editing`, `Redo draft with new direction`.

### Phase 4 -- Integrate

**Input:** `<slug>`.

1. Read `seo-drafts/<slug>-outline.md` for the integration plan.

2. **Nav.** Edit `src/shared/navigation-data.ts` to insert the new entry at the exact position specified.

3. **FAQ stub** (FAQ-promotion type only). Edit `src/app/docs/getting-started/faqs/page.mdx`:
   - Locate the original `### <question>` block from the outline.
   - Replace its body with the stub answer + link from the outline. Keep the `###` question heading intact so anchor links from elsewhere still resolve.

4. **Incoming cross-links.** For each entry under "Incoming cross-links" in the outline, edit the existing page to add the link near the specified anchor.

5. **Verification checklist.** Print this exactly:

   ```
   ## Verification (manual)

   1. `pnpm dev` and visit http://localhost:3000/docs/<new-path> -- page renders.
   2. Confirm the new sidebar entry appears in <group title> at the right position.
   3. Click each outgoing cross-link on the new page -- all resolve, anchors land.
   4. Visit each page that gained an incoming link -- new link is present and resolves.
   5. (FAQ-promotion only) Visit /docs/getting-started/faqs -- original question now shows the stub + link out.
   6. (Optional) `pnpm build` to catch MDX / typecheck regressions before commit.
   ```

## Guardrails

- Each phase has a tool-call budget. Do not skip a checkpoint to stay inside it -- stop early instead.
- **Citation policy on the final page is sparse** ([[feedback-docs-citation-style]]). Default is to drop external citations. Keep only differentiated sources confirmed by the SME. Company philosophy is uncited.
- **Demand evidence in the research file is passthrough** from the report -- do not re-validate it. The `/seo-opportunities` skill already paid for those signals.
- **Internal terminology takes precedence.** Never coin a new term for a concept the existing docs already name.
- Every new nav entry is hand-added to `src/shared/navigation-data.ts`. Pages are not auto-discovered.
- Do not import or invoke `src/mdx/search.mjs`. Read MDX directly.
- No em dashes (`—`) in skill output or in any written MDX, and no `--` as a substitute. Rewrite the sentence per [[feedback-no-dash-substitutes]].
- If the SME asks to "redo" a phase, regenerate the phase artifact only. Do not touch artifacts from later phases.
