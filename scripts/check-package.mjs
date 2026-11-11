// Smoke test for the built package (run after `npm run build:package`).
// Loads `flowbite-vue` through its own `exports` map, the way a consumer's
// Node process (SSR, tests, scripts) would, with no DOM available.
import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { createRequire } from 'node:module'

import { parseIndexExports } from '../src/nuxt/codegen/parse-index-exports.mjs'

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
const nonEsmBuilds = distFiles.filter(file => /\.(cjs|umd\.js|iife\.js)$/.test(file))
assert.deepEqual(nonEsmBuilds, [], 'dist contains only ESM builds')

// The published manifest decides what consumers install (#471).
const runtimeRanges = { ...pkg.dependencies, ...pkg.peerDependencies }

// Every package the built JS imports must be installed for the consumer,
// so it has to be a dependency or a peer, never only a devDependency.
// A fast offline scan; check:pack is the authority (it really resolves them).
const packageName = specifier => specifier.split('/').slice(0, specifier.startsWith('@') ? 2 : 1).join('/')
const importedPackages = new Set(distFiles.filter(file => file.endsWith('.js')).flatMap((file) => {
  const source = readFileSync(new URL(`../dist/${file}`, import.meta.url), 'utf8')
  return [...source.matchAll(/(?:\bfrom|\bimport\s*\(?)\s*["']((?:@[\w.-]+\/)?\w[\w.-]*(?:\/[\w.-]+)*)["']/g)]
    .map(([, specifier]) => packageName(specifier))
}))
const undeclared = [...importedPackages].filter(name => !(name in runtimeRanges)).sort()
assert.deepEqual(undeclared, [], 'every package imported by dist is a dependency or peerDependency')

// Exact pins can't dedupe with the app's own copy, so every app upgrade
// nests a second copy under flowbite-vue. Keep exact versions in the lockfile.
const exactPins = Object.entries(runtimeRanges)
  .filter(([, range]) => /^[=v]?\d/.test(range))
  .map(([name, range]) => `${name}@${range}`)
assert.deepEqual(exactPins, [], 'dependencies and peerDependencies use ranges, not exact versions')

// The reverse: every dependency must be imported by dist, so build tools and
// leftovers can't ship to consumers.
const unused = Object.keys(pkg.dependencies).filter(name => !importedPackages.has(name))
assert.deepEqual(unused, [], 'every dependency is imported by dist')

// Every public component in src/index.ts has its own entry, and it is the
// same module the main entry exports, so mixing both import paths shares
// provide/inject keys and state.
const componentNames = distFiles
  .filter(file => /^components[/\\]\w+\.js$/.test(file))
  .map(file => file.slice('components/'.length, -'.js'.length))
  .sort()
const publicComponents = parseIndexExports(readFileSync(new URL('../src/index.ts', import.meta.url), 'utf8'))
  .map(({ name }) => name)
  .sort()
assert.deepEqual(componentNames, publicComponents, 'flowbite-vue/components/* covers every public component')
for (const name of componentNames) {
  const { default: component } = await import(`flowbite-vue/components/${name}`)
  assert.equal(component, esmExports[name], `flowbite-vue/components/${name} is the component flowbite-vue exports`)
}

// Only the Nuxt module needs @nuxt/kit, so apps without Nuxt don't install it.
assert.equal(pkg.peerDependenciesMeta?.['@nuxt/kit']?.optional, true, '@nuxt/kit is an optional peer')
assert.ok(!('@nuxt/kit' in pkg.dependencies), '@nuxt/kit is not a dependency')

console.log(`flowbite-vue package check passed (${Object.keys(cjsExports).length} exports)`)
