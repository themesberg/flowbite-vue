// Smoke test for the built package (run after `npm run build:package`).
// Loads `flowbite-vue` through its own `exports` map, the way a consumer's
// Node process (SSR, tests, scripts) would, with no DOM available.
import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))

assert.equal(typeof globalThis.document, 'undefined', 'run this without a DOM')

const required = require('flowbite-vue')
assert.ok(required.FwbButton, 'require("flowbite-vue") exposes FwbButton')

const imported = await import('flowbite-vue')
assert.equal(imported.FwbButton, required.FwbButton, 'require and import load the same module')

for (const field of ['main', 'module']) {
  assert.ok(existsSync(new URL(`../${pkg[field]}`, import.meta.url)), `package.json "${field}" points at a built file`)
}

const builtJs = readdirSync(new URL('../dist', import.meta.url)).filter(file => /\.c?js$/.test(file))
for (const file of builtJs) {
  const source = readFileSync(new URL(`../dist/${file}`, import.meta.url), 'utf8')
  assert.ok(!source.includes('document.head.appendChild'), `dist/${file} does not inject CSS`)
}

console.log(`flowbite-vue package check passed (${Object.keys(required).length} exports)`)
