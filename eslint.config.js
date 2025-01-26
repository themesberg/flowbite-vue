import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
import pluginJs from '@eslint/js'
import globals from 'globals'
import tailwind from 'eslint-plugin-tailwindcss'
import stylistic from '@stylistic/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'

import * as pluginVueScopedCss from 'eslint-plugin-vue-scoped-css'

const baseConfig = [
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

const tailwindConfig = [
  ...tailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        whitelist: [
          'vp-raw',
          '^fwb\\-.*$', // Whitelist all classnames that start with "fwb-"
        ],
      },
    },
  },
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
  ...neostandard({
    ignores: resolveIgnoresFromGitignore(),
    noJsx: true,
    ts: true,
    vue: true,
  }),
  importPlugin.flatConfigs.recommended,
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
    },
  },
  {
    rules: {
      // Disable ESLint's import resolution in favor of TypeScript's more accurate
      // module resolution which handles aliases, types, and dynamic imports correctly
      'import/no-unresolved': 0,

      // Enforce consistent import ordering by grouping imports into categories:
      // Node built-ins first, followed by external packages, internal modules,
      // relative imports, and finally type imports
      // 'import/order': [
      //   'error', {
      //     'newlines-between': 'never',
      //     alphabetize: {
      //       order: 'asc',
      //       caseInsensitive: true,
      //       orderImportKind: 'asc',
      //     },
      //     groups: [
      //       'builtin',
      //       'external',
      //       'internal',
      //       'parent',
      //       'sibling',
      //       'index',
      //       'object',
      //       'type',
      //     ],
      //   }
      // ],

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
  ...tailwindConfig,
  ...vueConfig,
  ...vueScopedCssConfig,
  ...standardConfig,
  ...stylisticConfig,
  ...typeScriptConfig,
]
