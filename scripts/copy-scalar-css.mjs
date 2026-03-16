/**
 * Copies @scalar/api-reference CSS to public/ for runtime loading.
 *
 * The Scalar CSS (~289KB) is loaded at runtime only on the API reference
 * page, rather than as a static import that leaks into the global CSS
 * bundle for all pages. This script runs before each build to keep the
 * public copy in sync with the installed package version.
 *
 * Koi theme overrides are appended inline (plain CSS, no Tailwind @apply).
 */
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const scalarCss = readFileSync(
  resolve(root, 'node_modules/@scalar/api-reference/dist/style.css'),
  'utf-8'
)

const koiOverrides = `
/* === Koi theme overrides (source: src/app/docs/api/reference/apiReference.css) === */

.scalar-container {
  margin-left: -1rem;
  margin-right: -1rem;
  min-height: 100vh;
}
@media (min-width: 640px) {
  .scalar-container {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }
}
@media (min-width: 1024px) {
  .scalar-container {
    margin-left: -2rem;
    margin-right: -2rem;
  }
}

.scalar-container .references-classic,
.scalar-container .references-layout {
  width: 100%;
}

aside[class*='sidebar'],
nav[class*='sidebar'],
div[class*='references-navigation'],
div[class*='sidebar-container'] {
  max-height: calc(100vh - 3.5rem) !important;
  height: calc(100vh - 3.5rem) !important;
}

.dark-mode,
:root .dark-mode,
div[class*='references'] .dark-mode,
div[class*='scalar'] .dark-mode {
  --scalar-color-1: #e5e6eb !important;
  --scalar-color-2: #9ba0a8 !important;
  --scalar-color-3: #57606b !important;
  --scalar-color-accent: #5aafcc !important;
  --scalar-background-1: #161c25 !important;
  --scalar-background-2: #1b212c !important;
  --scalar-background-3: #242a34 !important;
  --scalar-background-accent: rgba(90, 175, 204, 0.1) !important;
  --scalar-border-color: rgba(87, 96, 107, 0.3) !important;
  --scalar-color-blue: #5aafcc !important;
  --scalar-color-green: #85e360 !important;
  --scalar-color-orange: #f2755b !important;
  --scalar-color-red: #e85f5f !important;
  --scalar-color-yellow: #ffe650 !important;
  --scalar-color-purple: #b55ae0 !important;
}

:root {
  --scalar-color-1: #e5e6eb;
  --scalar-color-2: #9ba0a8;
  --scalar-color-3: #57606b;
  --scalar-color-accent: #5aafcc;
  --scalar-background-1: #161c25;
  --scalar-background-2: #1b212c;
  --scalar-background-3: #242a34;
  --scalar-background-accent: rgba(90, 175, 204, 0.1);
  --scalar-border-color: rgba(87, 96, 107, 0.3);
  --scalar-color-blue: #5aafcc;
  --scalar-color-green: #85e360;
  --scalar-color-orange: #f2755b;
  --scalar-color-red: #e85f5f;
  --scalar-color-yellow: #ffe650;
  --scalar-color-purple: #b55ae0;
}
`

writeFileSync(
  resolve(root, 'public/scalar-api-reference.css'),
  scalarCss + koiOverrides
)

console.log('Copied Scalar CSS + Koi overrides to public/scalar-api-reference.css')
