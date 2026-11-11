import { fileURLToPath } from 'url'

import { $fetch, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

// Its own fixture for the same reason as module-css-disabled.test.ts.
describe('flowbite-vue/nuxt with css: \'standalone\'', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixture-css-standalone', import.meta.url)),
    dev: true,
  })

  it('injects standalone.css instead of index.css', async () => {
    const html = await $fetch('/')

    expect(html).toMatch(/<link rel="stylesheet"[^>]*dist\/standalone\.css/)
    expect(html).not.toMatch(/dist\/index\.css/)
  })
})
