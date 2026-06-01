# Koi Docs (docs.koi.eco)

Product documentation site for Koi -- Rho Impact's climate intelligence platform. Built with Next.js 14, MDX, and Tailwind CSS 3. Statically exported and deployed to Cloudflare Pages.

## Stack

- **Framework:** Next.js 14 (static export via `output: 'export'`)
- **Content:** MDX pages with custom remark/rehype/recma plugins (`src/mdx/`)
- **Styling:** Tailwind CSS 3, `@headlessui/tailwindcss`, `@tailwindcss/typography`
- **Search:** FlexSearch (client-side full-text, built at compile time via `src/mdx/search.mjs`)
- **API docs:** Scalar (`@scalar/api-reference`) with copied CSS (`scripts/copy-scalar-css.mjs`)
- **Diagrams:** Mermaid (client-side rendered)
- **Analytics:** PostHog (deferred)
- **Package manager:** pnpm 10 (lockfile enforced in CI)
- **Node:** 24 (via mise.toml)
- **Secrets:** SOPS + AWS KMS (encrypted files in `secrets/`)

## Directory Layout

```
src/
  app/              # Next.js app router -- pages are page.mdx files
    docs/           # All documentation content (MDX)
      getting-started/   # Quickstart, features, use cases, FAQs
      data-and-methodology/  # Terms, avoided emissions, classifications, engine
      api/               # API overview + Scalar reference
  components/       # React components (Layout, Navigation, Header, Footer, mdx.tsx, etc.)
  lib/              # Utilities (docs.ts, koiColors.js, remToPx.ts)
  mdx/              # MDX pipeline plugins (search, remark, rehype, recma)
  shared/           # Navigation data, URL constants
  styles/           # Global CSS
  images/           # Logos, assets
```

## Key Conventions

- **Content pages** are `src/app/docs/**/page.mdx`. Each MDX file exports metadata and uses components from `src/components/mdx.tsx`.
- **Navigation** is defined in `src/shared/navigation-data.ts` -- update this when adding/removing pages.
- **Routes** are defined in `navigation-data.ts` as a `routes` const for internal cross-references.
- **Dark mode** uses Tailwind `selector` strategy (class-based toggle).
- **Custom Koi colors** are in `src/lib/koiColors.js` and imported into `tailwind.config.ts`.
- **No em dashes in file output** -- use double hyphens (`--`) or rewrite to avoid them.

## Dev Commands

```bash
pnpm dev          # Next.js dev server (localhost:3000)
pnpm dev:all      # Dev on 0.0.0.0 (network accessible)
pnpm build        # Build static export (runs copy-scalar-css first)
pnpm lint         # ESLint (next/core-web-vitals config)
```

## Validation

- **Always run `pnpm build` before pushing.** This catches TypeScript errors, MDX compilation failures, and missing imports. There is no pre-commit hook.
- ESLint extends `next/core-web-vitals`.
- Prettier config: single quotes, no semicolons, trailing commas (es5), LF line endings, Tailwind plugin.

## CI/CD

- **Workflow:** `.github/workflows/deploy.yml`
- **Triggers:** Push to `main` (production), `staging`/`feat/**` (preview), PRs to `main`
- **Deploy:** Cloudflare Pages (`koi-docs` project)
  - `main` -> `https://docs.koi.eco`
  - Other branches -> `https://{branch}.koi-docs.pages.dev`
- **Lighthouse CI:** Runs post-deploy on PRs. Audits `/`, `/docs/getting-started`, `/docs/getting-started/quickstart` (desktop + mobile). Posts scores to PR comments and Slack.
- **Slack notifications** on deploy success/failure and Lighthouse results.

## Environment Variables

Defined in `next.config.mjs` with defaults:
- `NEXT_PUBLIC_KOI_LANDING_BASE_URL` (default: `https://koi.eco`)
- `NEXT_PUBLIC_KOI_DOCS_BASE_URL` (default: `https://docs.koi.eco`)
- `NEXT_PUBLIC_KOI_STUDIO_BASE_URL` (default: `https://app.koi.eco`)
- `NEXT_PUBLIC_KOI_FEEDBACK_BASE_URL` (default: `https://product.koi.eco`)
- `NEXT_PUBLIC_POSTHOG_HOST`, `NEXT_PUBLIC_POSTHOG_KEY` (analytics, injected via SOPS)
