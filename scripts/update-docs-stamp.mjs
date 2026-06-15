// Updates package.json `lastUpdated` (always) and `version` (interactively) when
// MDX content pages are part of a commit. The landing page (src/app/page.mdx)
// renders both fields, so bumping them here keeps it accurate automatically.
//
// Invoked by .githooks/pre-commit. Reads the user's bump choice from /dev/tty.
// In a non-interactive context (no TTY, e.g. a VSCode GUI commit) it updates the
// date and defaults to a patch bump, printing a notice.

import { readFileSync, writeFileSync, openSync, readSync, closeSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const pkgPath = resolve(root, 'package.json')

function today() {
  const d = new Date()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${mm}-${dd}`
}

function bump(version, kind) {
  const [major, minor, patch] = version.split('.').map((n) => parseInt(n, 10))
  if (kind === 'major') return `${major + 1}.0.0`
  if (kind === 'minor') return `${major}.${minor + 1}.0`
  return `${major}.${minor}.${patch + 1}`
}

// Read a single line from the controlling terminal, bypassing stdin (which git
// has detached). Returns null when no TTY is available.
function askTty(prompt) {
  let fd
  try {
    fd = openSync('/dev/tty', 'r+')
  } catch {
    return null
  }
  try {
    writeFileSync(fd, prompt)
    const buf = Buffer.alloc(256)
    const n = readSync(fd, buf, 0, buf.length, null)
    return buf.toString('utf8', 0, n).trim()
  } finally {
    closeSync(fd)
  }
}

const raw = readFileSync(pkgPath, 'utf8')
const pkg = JSON.parse(raw)

const newDate = today()
let newVersion = pkg.version

const answer = askTty(
  `\nDocs content changed. Bump docs version (current ${pkg.version})?\n` +
    `  [p] patch  ${bump(pkg.version, 'patch')}\n` +
    `  [m] minor  ${bump(pkg.version, 'minor')}\n` +
    `  [M] major  ${bump(pkg.version, 'major')}\n` +
    `  [s] skip   (leave version, update date only)\n` +
    `Choice [p/m/M/s]: `,
)

if (answer === null) {
  // Non-interactive (e.g. VSCode GUI commit): can't prompt, so default to patch.
  newVersion = bump(pkg.version, 'patch')
  console.log(
    `[docs-stamp] No TTY (GUI commit?); defaulting to patch bump -> ${newVersion}.`,
  )
} else if (answer === 'p' || answer === '' || answer === 'patch') {
  newVersion = bump(pkg.version, 'patch')
} else if (answer === 'm' || answer === 'minor') {
  newVersion = bump(pkg.version, 'minor')
} else if (answer === 'M' || answer === 'major') {
  newVersion = bump(pkg.version, 'major')
} else {
  console.log('[docs-stamp] Skipping version bump.')
}

// Preserve formatting: only rewrite the two fields, keep everything else byte-identical.
let updated = raw
  .replace(/("version":\s*)"[^"]*"/, `$1"${newVersion}"`)
  .replace(/("lastUpdated":\s*)"[^"]*"/, `$1"${newDate}"`)

if (updated === raw) {
  console.log('[docs-stamp] Nothing to update.')
  process.exit(0)
}

writeFileSync(pkgPath, updated)
execFileSync('git', ['add', pkgPath], { cwd: root, stdio: 'inherit' })

console.log(
  `[docs-stamp] lastUpdated -> ${newDate}` +
    (newVersion !== pkg.version ? `, version -> ${newVersion}` : ' (version unchanged)'),
)
