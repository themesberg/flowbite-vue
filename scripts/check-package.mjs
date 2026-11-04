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
const nonEsmBuilds = readdirSync(new URL('../dist', import.meta.url), { recursive: true })
  .filter(file => /\.(cjs|umd\.js|iife\.js)$/.test(file))
assert.deepEqual(nonEsmBuilds, [], 'dist contains only ESM builds')

console.log(`flowbite-vue package check passed (${Object.keys(cjsExports).length} exports)`)
