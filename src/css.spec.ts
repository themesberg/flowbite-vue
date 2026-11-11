// @vitest-environment node
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

import { beforeAll, describe, expect, it } from 'vitest'

import { compileStandaloneCss } from '../scripts/compile-standalone-css.mjs'

// The same compile the build uses for dist/standalone.css, so these
// assertions describe the utilities that ship.
const srcDir = import.meta.dirname
const rootDir = path.resolve(srcDir, '..')

let compiledCss = ''

beforeAll(async () => {
  compiledCss = await compileStandaloneCss()
}, 60_000)

// Guards against a fixture disappearing, which would make a `not.toContain`
// assertion pass without proving anything.
async function expectFixture (file: string, candidate: string) {
  expect(await readFile(path.join(rootDir, file), 'utf8')).toContain(candidate)
}

describe('standalone.css', () => {
  it('compiles dark: utilities as a class-based variant, not a media query', () => {
    expect(compiledCss).not.toContain('prefers-color-scheme')
    expect(compiledCss).toMatch(/\.dark\\:bg-gray-700:where\(\.dark,\s*\.dark \*\)/)
  })

  // Why these are utilities: see FwbButtonGroup.vue.
  it('generates FwbButtonGroup\'s child radius utilities', () => {
    expect(compiledCss).toContain('.\\[\\&\\>button\\]\\:rounded-none>button{')
    expect(compiledCss).toContain('.\\[\\&\\>button\\:first-child\\]\\:rounded-l-lg>button:first-child{')
    expect(compiledCss).toContain('.\\[\\&\\>\\.fwb-dropdown\\:last-child_button\\]\\:rounded-r-lg>.fwb-dropdown:last-child button{')
  })

  // #472: form controls style themselves; the plugin's base styles read
  // Flowbite theme tokens that nothing defines.
  it('ships no flowbite/plugin base styles', () => {
    expect(compiledCss).not.toContain('[type=radio]:checked')
    expect(compiledCss).not.toContain('var(--color-brand)')
    expect(compiledCss).not.toContain('.toggle-bg')
  })

  it('does not pick up utilities that only the docs use', async () => {
    await expectFixture(
      'docs/components/jumbotron/examples/FwbJumbotronBackgroundImageExample.vue',
      'conference.jpg',
    )
    expect(compiledCss).not.toContain('conference.jpg')
  })

  it('does not pick up utilities that only component tests use', async () => {
    await expectFixture('src/components/FwbButton/tests/Button.spec.ts', 'bg-red-500')
    expect(compiledCss).not.toMatch(/\.bg-red-500\b/)
  })
})

describe('component <style> blocks', () => {
  it('do not use OS-driven dark mode', async () => {
    const files = (await readdir(path.join(srcDir, 'components'), { recursive: true }))
      .filter(file => file.endsWith('.vue'))
    const offenders: string[] = []
    for (const file of files) {
      const source = await readFile(path.join(srcDir, 'components', file), 'utf8')
      if (source.includes('prefers-color-scheme')) offenders.push(file)
    }
    expect(offenders).toEqual([])
  })
})
