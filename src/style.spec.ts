// @vitest-environment node
import { readFile } from 'node:fs/promises'
import path from 'node:path'

import tailwindcss from '@tailwindcss/postcss'
import postcss from 'postcss'
import { beforeAll, describe, expect, it } from 'vitest'

// Compiles src/style.css the same way the package build does, so these
// assertions describe what ships in dist/index.css.
const stylePath = path.resolve(import.meta.dirname, 'style.css')

let css = ''

beforeAll(async () => {
  const source = await readFile(stylePath, 'utf8')
  const result = await postcss([tailwindcss({ base: path.resolve(import.meta.dirname, '..') })])
    .process(source, { from: stylePath })
  css = result.css
}, 60_000)

describe('style.css', () => {
  it('compiles dark: utilities as a class-based variant, not a media query', () => {
    expect(css).not.toContain('prefers-color-scheme')
    expect(css).toContain('.dark\\:bg-gray-700:where(.dark, .dark *) {')
  })

  it('does not pick up utilities that only the docs use', () => {
    expect(css).not.toContain('conference.jpg')
  })

  it('does not pick up utilities that only component tests use', () => {
    // `bg-red-500` appears only in component specs, never in a component.
    expect(css).not.toMatch(/\.bg-red-500\b/)
  })
})
