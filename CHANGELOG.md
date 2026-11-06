# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Entries below start from v0.2.3 (the last published release) forward — earlier
versions predate this file and are not backfilled.

## [Unreleased]

### ⚠ Breaking Changes

- **The UMD/CommonJS build (`dist/flowbite-vue.umd.cjs`) was removed.** It injected the whole stylesheet into `document.head` when loaded, so `require('flowbite-vue')` crashed in Node (SSR) with `document is not defined`. Apps that also imported `flowbite-vue/index.css` got the CSS twice, and the injected copy was unlayered, so it could override the app's own styles. `require('flowbite-vue')` now loads the ESM build, which works on the Node versions this package supports (22.12+). Tools with their own CommonJS loader, such as Jest without an ESM transform, need to transform `flowbite-vue` (for example via `transformIgnorePatterns`). Loading `flowbite-vue.umd.cjs` from a CDN with a `<script>` tag is no longer possible; use a bundler, or import the ES module from a CDN with an import map that provides `vue`.
- **Dark mode in the prebuilt `flowbite-vue/index.css` is now class-based.** Component `dark:` styles, including the `FwbTooltip` dark theme, now apply under a `.dark` ancestor (the Flowbite convention) instead of `@media (prefers-color-scheme: dark)`. Before, components went dark whenever the OS was dark, even in an app forced to light mode. If your app relied on the OS setting and never adds `.dark`, add the `.dark` class to `<html>` yourself (for example from `matchMedia('(prefers-color-scheme: dark)')`).

### Changed

- Build tools are no longer installed into your app. `tailwindcss`, `@tailwindcss/vite`, `@tailwindcss/postcss`, `postcss-prefix-selector` and `flowbite` moved to `devDependencies`. Together with the `@nuxt/kit` change below, this removes about 60 packages from consumer installs, including a second copy of Tailwind CSS. If your CSS uses `@import "tailwindcss"` or `@plugin "flowbite/plugin"` and you never installed those packages yourself, install them as the getting-started guide describes: `npm install -D tailwindcss @tailwindcss/vite` and `npm i flowbite`.
- Runtime dependencies (`@vueuse/core`, `@vueuse/integrations`, `floating-vue`, `lodash-es`, `nanoid`, `tailwind-merge`) use caret ranges instead of exact versions, so they dedupe with your app's own copies instead of nesting a second one.
- `@nuxt/kit` is now an optional peer dependency (`^4.0.0`), needed only by the Nuxt module (`flowbite-vue/nuxt`). Nuxt apps already have it; other apps no longer install it.

### Fixed

- The Nuxt module's `FwbModal` failed to load with `Cannot find package 'focus-trap'` unless the app happened to install `focus-trap`. It is now a dependency of `flowbite-vue`.
- `flowbite-vue/index.css` no longer ships about 150 utilities that only the docs site and component tests used (for example `mt-8`, `my-6`, `gap-4`, `grid-cols-2`, `size-full`, and a docs-only background image). These generic classes could collide with your own Tailwind utilities. If your own markup used any of them without your own Tailwind build, they now have to come from your build.
- `FwbFileInput`: your own `hover:file:*` classes now replace the default hover color of the file selector button, and `dark:hover:file:*` classes replace it in dark mode. Before, the default gray hover always won, so custom hover colors were ignored.

## [0.4.0] - 2026-07-26

### Fixed

- Published `flowbite-vue/index.css` was missing nearly all component utility classes — `src/style.css` was never pulled into the library's build graph, so Tailwind's build-time scanner never reached `src/components`. Consumers following the quickstart guide were unknowingly relying on their own project's `@source` directive to backfill the missing classes. `src/index.ts` now imports `src/style.css` directly and `@source './components'` was added so the shipped stylesheet is fully self-contained; the quickstart docs no longer need a `@source "../node_modules/flowbite-vue"` workaround (#460)

### Added

- `FwbKbd` component for rendering keyboard key labels, standalone, composed inline with `+`, inside a table cell, or with an `icon` slot for directional keys (#459)
- Nuxt module (`flowbite-vue/nuxt`) for auto-imported components and composables — see the Nuxt guide (#460)

## [0.3.0] - 2026-07-12

### ⚠ Breaking Changes

- **Native attribute passthrough target changed** on `FwbInput` (#433), `FwbTextarea` (#436), `FwbFileInput` (#437), `FwbSelect` (#438), `FwbAutocomplete` (#439), `FwbRange` (#440), `FwbToggle` (#441), `FwbCheckbox` (#442), and `FwbRadio` (#443). Each now sets `inheritAttrs: false` and forwards extra attributes to the underlying native element (`<input>`, `<select>`, `<textarea>`, etc.) instead of the root wrapper element. This is the correct behavior, but apps relying on attributes landing on the wrapper (e.g. for CSS targeting) are affected.
- `FwbTabs`: the `click:pane` event was renamed to `click:tab` (#451)
- `FwbTextarea`: the `placeholder` prop was removed (no longer declared — pass it as a native attribute instead, which forwards identically via attr passthrough) and the `custom` prop was removed (the new default layout replaces the old `custom: true` layout; use `class`/`wrapperClass`/`textareaClass` for further customization) (#436)
- `FwbFileInput`: the `size` default changed from `'sm'` to `'md'`, and `size="xs"` was removed — the type is now `'sm' | 'md' | 'lg' | 'xl'` (#437)
- `FwbSelect`: the native browser dropdown arrow is now hidden (`appearance-none`) in favor of the Flowbite chevron icon, rendered via the new `chevron` slot (#438)
- `FwbRange`: the `label` default changed from `'Range slider'` to `''` — pass `label="Range slider"` explicitly to restore the previous rendering (#440)
- `FwbCheckbox`: `name` and `value` are no longer declared props; they now flow through attribute passthrough instead (same usage, no template changes needed) (#442)
- `FwbProgress`: `labelPosition`/`labelProgress` renamed to `valuePosition`/`showValue` — the old names collided conceptually with the unrelated `label` prop (the bar's title text, not its value). The `color` prop now uses the shared `ColorVariant` type instead of the old `ProgressVariant`, and no longer accepts `alternative`, `light`, or `indigo` (#457)

### Added

- `validationMessage` string prop on `FwbInput`, `FwbSelect`, `FwbTextarea`, `FwbFileInput`, `FwbAutocomplete`, `FwbToggle`, `FwbRange`, `FwbCheckbox`, and `FwbRadioGroup` as a plain-string fallback for the `validationMessage` slot, which keeps priority for rich content (#453)
- `FwbTabs`/`FwbTab`: `vertical` layout, `fullWidth`, an `icon` slot with configurable `iconPosition`, `tabClass`/`itemClass`/`itemActiveClass` custom classes, keyboard navigation (arrow keys, Home, End), and ARIA roles (`tablist`/`tab`/`tabpanel`) (#451, supersedes #435 — thanks @darrenthebozz for the original custom-classes idea)
- `FwbBadge`: `pill`, `border`, and `dismissible` variants, the last emitting a `dismiss` event (#450)
- `FwbRadioGroup` component for grouped radio validation, shared `name`, and accessibility wiring (#443)
- `xl` size tier, validation states (`validationStatus`, `validationMessage`/`helper` slots), and per-element class props (`wrapperClass`, `labelClass`, etc.) added to `FwbInput` (#433), `FwbTextarea` (#436), `FwbFileInput` (#437), `FwbSelect` (#438), `FwbRange` (#440), `FwbToggle` (#441), and `FwbCheckbox` (#442)
- `FwbAutocomplete`: `inputClass` prop for direct `<input>` styling (#439)
- `FwbSelect`: `clearable` prop and `chevron` slot (#438)
- `FwbRange`: thumb color customizable via the `--fwb-range-thumb-color` CSS custom property (#440)
- `FwbFileInput`: dropzone mode now supports `validationStatus` styling (rose/emerald dashed border), `aria-invalid`/`aria-describedby` on the hidden input, and renders the `validationMessage` (slot or prop) and `helper` slot below the dropzone (#455)
- `FwbProgress`: `indeterminate` prop for an animated, indefinite-length bar when completion isn't known yet; a scoped `value` slot (`{ progress }`) to render custom value text (file sizes, time remaining, step labels, ...) instead of the default `N%`; `role="progressbar"` and `aria-valuenow`/`aria-valuemin`/`aria-valuemax`, previously missing entirely (#457)
- `src/types/colors.ts`: shared `ColorVariant` type, extracted from `FwbButton`'s color set and now also used by `FwbDropdown` and `FwbProgress` (#457)

### Changed

- `FwbButton` rewritten for type safety, `useMergeClasses`, and accessibility (#444)
- Replaced the `classnames` dependency with the internal `useMergeClasses` composable across all components (#447)
- Unified import convention: relative imports (`./`, `../`) within a component's own directory, `@/` alias across component boundaries or for shared/top-level code (#452)
- Systematic documentation review and rewrite for all 39 component pages (#448)
- Updated all dependencies to latest versions (#445)
- Replaced remaining `any` types with proper types: typed `defineSlots` payloads on `FwbAlert`, `FwbJumbotron`, and `FwbPagination`, `Record<string, unknown>` in place of `Record<string, any>` on `FwbAutocomplete`, and a `(...args: unknown[]) => void` function-type cast in place of an `any` cast on `FwbSlotListener` (#456)

### Fixed

- Restored the Flowbite Tailwind plugin for Tailwind v4 and fixed a double chevron rendering on `FwbSelect` (#449)
- `FwbSidebar` tag/link handling bugs found during the docs review (#448)
- `FwbFileInput`: error/success background colors corrected (were `bg-red-50`/`bg-green-50`, now `bg-rose-50`/`bg-emerald-50` to match the rest of the library) (#437)
- Linter warnings reduced from 51 to 21 (#446)
- `FwbFileInput`: the file selector button had `file:rounded-none` while the input wrapper has `rounded-lg` — the button's square corner was clipped by the input's rounded border box, cutting into the button text. Now rounds the button's left corners to match, and widens left padding accordingly (#455)
- `FwbProgress`: the inner bar's left corner squared off (lost its `rounded-full`) at small `progress` values, and the inside value label was nearly invisible at small values, especially in light theme. The outer track now clips the inner bar with `overflow-hidden` so corners always stay rounded, and the inner bar clips its own value text instead of letting it spill onto the track; the value is also skipped entirely at `progress={0}` (#457)

[Unreleased]: https://github.com/themesberg/flowbite-vue/compare/v0.4.0...main
[0.4.0]: https://github.com/themesberg/flowbite-vue/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/themesberg/flowbite-vue/compare/v0.2.3...v0.3.0
