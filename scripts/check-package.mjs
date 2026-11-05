// Smoke test for the built package (run after `npm run build:package`).
// Loads `flowbite-vue` through its own `exports` map, the way a consumer's
// Node process (SSR, tests, scripts) would, with no DOM available.
import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))

assert.equal(typeof globalThis.document, 'undefined', 'run this without a DOM')

const cjsExports = require('flowbite-vue')
assert.ok(cjsExports.FwbButton, 'require("flowbite-vue") exposes FwbButton')

const esmExports = await import('flowbite-vue')
assert.equal(esmExports.FwbButton, cjsExports.FwbButton, 'require and import load the same module')

for (const field of ['main', 'module']) {
  assert.ok(existsSync(new URL(`../${pkg[field]}`, import.meta.url)), `package.json "${field}" points at a built file`)
}

// Vite inlines CSS into document.head only for UMD/IIFE/CJS output (#473),
// so the build must stay ESM-only; CSS ships as dist/index.css.
const distFiles = readdirSync(new URL('../dist', import.meta.url), { recursive: true })
const nonEsmBuilds = distFiles
  .filter(file => /\.(cjs|umd\.js|iife\.js)$/.test(file))
assert.deepEqual(nonEsmBuilds, [], 'dist contains only ESM builds')

// The published manifest is part of the package's contract (#471).
const runtimeRanges = { ...pkg.dependencies, ...pkg.peerDependencies }

// Every package the built JS imports must be installed for the consumer,
// so it has to be a dependency or a peer, never only a devDependency.
const packageName = specifier => specifier.split('/').slice(0, specifier.startsWith('@') ? 2 : 1).join('/')
const builtJs = distFiles
  .filter(file => file.endsWith('.js'))
const importedPackages = new Set(builtJs.flatMap((file) => {
  const source = readFileSync(new URL(`../dist/${file}`, import.meta.url), 'utf8')
  return [...source.matchAll(/(?:\bfrom|\bimport\s*\(?)\s*["']((?:@[\w.-]+\/)?\w[\w.-]*(?:\/[\w.-]+)*)["']/g)]
    .map(([, specifier]) => packageName(specifier))
}))
const undeclared = [...importedPackages].filter(name => !(name in runtimeRanges)).sort()
assert.deepEqual(undeclared, [], 'every package imported by dist is a dependency or peerDependency')

// Exact pins can't dedupe with the app's own copy, so every app upgrade
// nests a second copy under flowbite-vue. Keep exact versions in the lockfile.
const exactPins = Object.entries(runtimeRanges)
  .filter(([, range]) => /^=?\d+\.\d+\.\d+(?:-[\w.]+)?$/.test(range))
  .map(([name, range]) => `${name}@${range}`)
assert.deepEqual(exactPins, [], 'dependencies and peerDependencies use ranges, not exact versions')

// Build- and docs-only tooling must not be installed into consumer apps, and
// @nuxt/kit stays an optional peer: only the Nuxt module needs it.
const buildOnly = /^(?:tailwindcss|@tailwindcss\/.+|postcss|postcss-.+|flowbite|@nuxt\/kit)$/
const buildToolDeps = Object.keys(pkg.dependencies ?? {}).filter(name => buildOnly.test(name))
assert.deepEqual(buildToolDeps, [], 'build-only tooling and @nuxt/kit are not in dependencies')

console.log(`flowbite-vue package check passed (${Object.keys(cjsExports).length} exports)`)
