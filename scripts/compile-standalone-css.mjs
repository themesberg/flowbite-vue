// Compiles src/standalone.css with Tailwind: the Tailwind half of
// dist/standalone.css. Shared by the build (`cssEntries` in vite.config.ts)
// and src/css.spec.ts, so the spec checks what ships.
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

import tailwindcss from '@tailwindcss/postcss'
import postcss from 'postcss'

const rootDir = fileURLToPath(new URL('..', import.meta.url))
const sourcePath = fileURLToPath(new URL('../src/standalone.css', import.meta.url))

// One processor, so Tailwind's cache carries over between watch rebuilds.
const processor = postcss([tailwindcss({ base: rootDir, optimize: { minify: true } })])

/**
 * Compiles src/standalone.css with Tailwind (minified).
 * @returns {Promise<string>} the CSS
 */
export async function compileStandaloneCss () {
  const { css } = await processor.process(await readFile(sourcePath, 'utf8'), { from: sourcePath })
  return css
}
