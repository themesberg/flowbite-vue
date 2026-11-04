// @vitest-environment node
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

import tailwindcss from '@tailwindcss/postcss'
import postcss from 'postcss'
import { beforeAll, describe, expect, it } from 'vitest'

// Compiles src/style.css with Tailwind (via its PostCSS plugin; the package
// build uses the Vite plugin, which runs the same compiler), so these
// assertions describe the utilities that ship in dist/index.css.
const srcDir = import.meta.dirname
const rootDir = path.resolve(srcDir, '..')
const stylePath = path.join(srcDir, 'style.css')

let compiledCss = ''

beforeAll(async () => {
  const source = await readFile(stylePath, 'utf8')
  const result = await postcss([tailwindcss({ base: rootDir })])
    .process(source, { from: stylePath })
  compiledCss = result.css
}, 60_000)

// Guards against a fixture disappearing, which would make a `not.toContain`
// assertion pass without proving anything.
async function expectFixture (file: string, candidate: string) {
  expect(await readFile(path.join(rootDir, file), 'utf8')).toContain(candidate)
}

describe('style.css', () => {
  it('compiles dark: utilities as a class-based variant, not a media query', () => {
    expect(compiledCss).not.toContain('prefers-color-scheme')
    expect(compiledCss).toMatch(/\.dark\\:bg-gray-700:where\(\.dark,\s*\.dark \*\)/)
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
