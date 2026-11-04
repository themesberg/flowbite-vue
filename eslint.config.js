import pluginJs from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import { globalIgnores } from 'eslint/config'
import { flatConfigs as importFlatConfigs } from 'eslint-plugin-import-x'
import unusedImports from 'eslint-plugin-unused-imports'
import pluginVue from 'eslint-plugin-vue'
import pluginVueScopedCss from 'eslint-plugin-vue-scoped-css'
import globals from 'globals'
import neostandardConfig, { resolveIgnoresFromGitignore } from 'neostandard'
import tseslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

const gitignoreIgnores = resolveIgnoresFromGitignore()

const baseConfig = [
  // neostandard only applies `ignores` to its own config objects, so the
  // .gitignore patterns must also be registered globally to keep build output
  // (dist, docs/.vitepress/dist, ...) out of every other config block
  globalIgnores(gitignoreIgnores),
  {
    files: ['**/*.{js,ts,vue}'],
  },
  {
    languageOptions: {
      globals: {
        // Add browser environment globals (window, document, etc.) to prevent
        // ESLint from flagging them as undefined
        ...globals.browser,
        // Add Node.js environment globals (process, require, etc.) to prevent
        // ESLint from flagging them as undefined
        ...globals.node,
        // Add ES2021 environment globals (BigInt, WeakRef, etc.) to prevent
        // ESLint from flagging them as undefined
        ...globals.es2021,
      },
    },
  },
  pluginJs.configs.recommended,
]

const vueConfig = [
  ...defineConfigWithVueTs(
    pluginVue.configs['flat/recommended'],
    vueTsConfigs.recommended,
  ),
  {
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    rules: {
      'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
      'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    },
  },
]

const nuxtFixtureConfig = [
  {
    // The fixture app under test exercises flowbite-vue/nuxt's real
    // auto-imports (components and composables) with no local
    // import/declaration, by design — the whole point of the module under
    // test. ESLint has no visibility into Nuxt's generated auto-import
    // registry, so its globals are declared here instead.
    files: ['src/nuxt/test/fixture/**/*.vue'],
    languageOptions: {
      globals: {
        useFwbToast: 'readonly',
      },
    },
  },
]

const vueScopedCssConfig = [
  ...pluginVueScopedCss.configs['flat/recommended'],
  {
    rules: {
      'vue-scoped-css/enforce-style-type': ['error', { allows: ['scoped', 'plain'] }],
    },
  },
]

const standardConfig = [
  // Neostandard includes the @stylistic/eslint-plugin, but we need to import it
  // ourselves to add custom rules; this unfortunately seems to be an all or
  // nothing situation
  ...neostandardConfig({
    ignores: gitignoreIgnores,
    noJsx: true,
    ts: true,
    vue: true,
  }),
  importFlatConfigs.recommended,
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
    },
  },
  {
    rules: {
      // Disable ESLint's import resolution in favor of TypeScript's more accurate
      // module resolution which handles aliases, types, and dynamic imports correctly
      'import-x/no-unresolved': 0,

      // Enforce consistent import ordering by grouping imports into categories:
      // Node built-ins first, followed by external packages, internal modules,
      // relative imports, and finally type imports
      'import-x/order': [
        'error', {
          'alphabetize': {
            caseInsensitive: true,
            order: 'asc',
            orderImportKind: 'asc',
          },
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
        },
      ],

      // Sort named imports within each import declaration
      // e.g. import { aaa, bbb, ccc } from 'module'
      'sort-imports': [
        'error', {
          ignoreDeclarationSort: true,
          ignoreCase: true,
        },
      ],
    },
  },
]

const stylisticConfig = [
  // The recommended-flat config includes things like trailing commas that are
  // not included Neostandard's recommended config
  stylistic.configs.customize({
    flat: true,
    jsx: false,
  }),
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      // Keep `=` at the end of the line so multi-line union types can use the
      // leading-`|` style (`type A =\n  | 'a'\n  | 'b'`)
      '@stylistic/operator-linebreak': ['error', 'before', { overrides: { '=': 'after' } }],
      '@stylistic/quote-props': ['error', 'consistent-as-needed'],
      '@stylistic/space-before-function-paren': ['error', 'always'],
    },
  },
]

// Must be last in the configuration order to properly override conflicting rules
// TypeScript's type system handles many checks more accurately than ESLint,
// including import resolution, type checking, and variable usage
const typeScriptConfig = [
  ...tseslint.configs.strict,
  {

    languageOptions: {
      parser: vueParser,
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
]

export default [
  ...baseConfig,
  ...vueConfig,
  ...nuxtFixtureConfig,
  ...vueScopedCssConfig,
  ...standardConfig,
  ...stylisticConfig,
  ...typeScriptConfig,
]
