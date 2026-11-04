import { readFileSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

import { $fetch, setup, useTestContext } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

describe('flowbite-vue/nuxt', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixture', import.meta.url)),
    dev: true,
  })

  it('boots the fixture app with the module loaded', async () => {
    const html = await $fetch('/')

    expect(html).toContain('flowbite-vue nuxt fixture')
  })

  it('auto-imports a component with no manual import statement', async () => {
    const html = await $fetch('/')

    expect(html).toContain('<button')
    expect(html).toContain('Click me')
  })

  it('auto-imports a second, independent component with no manual import statement', async () => {
    const html = await $fetch('/')

    expect(html).toContain('data-accordion-id')
    expect(html).toContain('accordion body')
  })

  it('gives each component its own build chunk, not one shared bundle', () => {
    // Regression guard for the ticket 11 requirement that addComponent relies
    // on Nuxt's own per-component lazy loading, not a single shared chunk.
    const buttonChunk = fileURLToPath(new URL('../../../dist/components/FwbButton.js', import.meta.url))
    const accordionChunk = fileURLToPath(new URL('../../../dist/components/FwbAccordion.js', import.meta.url))

    expect(readFileSync(buttonChunk, 'utf-8')).not.toEqual(readFileSync(accordionChunk, 'utf-8'))
  })

  it('auto-imports useFwbToast with no manual import statement, and it works', async () => {
    const html = await $fetch('/')

    expect(html).toContain('toast from useFwbToast')
  })

  it('does not introduce a global useToast binding', async () => {
    // Nuxt records every auto-import it registers as a global declaration
    // (`const <name>: ...` / `readonly <name>: ...`) in this generated types
    // file. Asserting on it (rather than e.g. trying to use a bare
    // `useToast()` from a fixture component, which would be a build-time
    // error rather than something assertable at runtime) directly verifies
    // the ticket 12 requirement: the module must alias the export to
    // `useFwbToast` and never register the library's own `useToast` name
    // globally, since that would collide with same-named composables from
    // other ecosystem libraries (e.g. Nuxt UI's). `useToast` still appears
    // as the *source* of the `useFwbToast` alias's type (`typeof
    // import(...).useToast`), so a plain substring/word-boundary check would
    // false-positive on that — this only matches an actual global declaration.
    // @nuxt/test-utils builds each run into its own buildDir
    // (`.nuxt/test/<randomId>`), so resolve it from the test context.
    const buildDir = useTestContext().nuxt?.options.buildDir
    expect(buildDir).toBeDefined()
    const imports = readFileSync(
      join(buildDir as string, 'types/imports.d.ts'),
      'utf-8',
    )

    expect(imports).toContain('useFwbToast')
    expect(imports).not.toMatch(/\b(?:const|readonly) useToast\b/)
  })

  it('auto-injects flowbite-vue\'s stylesheet by default, with no manual CSS import', async () => {
    const html = await $fetch('/')

    expect(html).toMatch(/<link rel="stylesheet"[^>]*dist\/index\.css/)
  })
})
