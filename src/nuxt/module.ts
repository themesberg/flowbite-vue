import { addComponent, addImports, createResolver, defineNuxtModule, type Resolver } from '@nuxt/kit'

import { nuxtComponents } from './generated-components'

import type { Nuxt } from '@nuxt/schema'

export interface ModuleOptions {
  /**
   * Which flowbite-vue stylesheet to auto-inject into the Nuxt app:
   * - `true`: `index.css`, the components' own CSS, for apps running
   *   Tailwind v4 (their Tailwind generates the utilities).
   * - `'standalone'`: `standalone.css`, a full Tailwind build plus the
   *   components' CSS, for apps without Tailwind.
   * - `false`: none, to import it yourself and control the load order.
   * @default true
   */
  css?: boolean | 'standalone'
}

/** Registers every public component for Nuxt auto-import, from its built entry. */
function registerComponents (resolver: Resolver) {
  for (const { name, filePath: sourcePath } of nuxtComponents) {
    addComponent({
      name,
      // Each component's own built entry (the `flowbite-vue/components/*`
      // files from `vite.config.ts`), not raw `src/*.vue`: raw source uses
      // flowbite-vue's own internal `@/...` path alias, which has no meaning
      // in a consumer's Vite config and would collide with Nuxt's own `@`
      // (srcDir) alias if injected globally. The built entry already has
      // that alias resolved, and gives Nuxt a separate lazy-loaded module
      // per component.
      filePath: resolver.resolve(`./components/${name}.js`),
      declarationPath: resolver.resolve(`../src/${sourcePath}`),
    })
  }
}

function registerToastImport (resolver: Resolver) {
  // Aliased to `useFwbToast`, not the library's own `useToast` name: a
  // global auto-import named `useToast` would collide with the same-named
  // composable other ecosystem libraries ship (e.g. Nuxt UI's). The
  // library's own export stays `useToast` so existing manual
  // `import { useToast } from 'flowbite-vue'` call sites are unaffected.
  addImports({
    name: 'useToast',
    as: 'useFwbToast',
    from: resolver.resolve('./composables.js'),
  })
}

function injectCss (resolver: Resolver, nuxt: Nuxt, css: true | 'standalone') {
  // `resolver.resolve` (rather than a bare `'flowbite-vue/index.css'`
  // specifier) finds the sibling file in `dist` whether loaded from a
  // published node_modules install or a local/linked dev checkout.
  nuxt.options.css.push(resolver.resolve(css === 'standalone' ? './standalone.css' : './index.css'))
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'flowbite-vue',
    configKey: 'flowbiteVue',
  },
  defaults: {
    css: true,
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    registerComponents(resolver)
    registerToastImport(resolver)

    if (options.css) {
      injectCss(resolver, nuxt, options.css)
    }
  },
})
