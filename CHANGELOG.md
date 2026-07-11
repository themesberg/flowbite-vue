# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Entries below start from v0.2.3 (the last published release) forward — earlier
versions predate this file and are not backfilled.

## [Unreleased]

### ⚠ Breaking Changes

- **Native attribute passthrough target changed** on `FwbInput` (#433), `FwbTextarea` (#436), `FwbFileInput` (#437), `FwbSelect` (#438), `FwbAutocomplete` (#439), `FwbRange` (#440), `FwbToggle` (#441), `FwbCheckbox` (#442), and `FwbRadio` (#443). Each now sets `inheritAttrs: false` and forwards extra attributes to the underlying native element (`<input>`, `<select>`, `<textarea>`, etc.) instead of the root wrapper element. This is the correct behavior, but apps relying on attributes landing on the wrapper (e.g. for CSS targeting) are affected.
- `FwbTabs`: the `click:pane` event was renamed to `click:tab` (#451)
- `FwbTextarea`: the `placeholder` prop was removed (no longer declared — pass it as a native attribute instead, which forwards identically via attr passthrough) and the `custom` prop was removed (the new default layout replaces the old `custom: true` layout; use `class`/`wrapperClass`/`textareaClass` for further customization) (#436)
- `FwbFileInput`: the `size` default changed from `'sm'` to `'md'`, and `size="xs"` was removed — the type is now `'sm' | 'md' | 'lg' | 'xl'` (#437)
- `FwbSelect`: the native browser dropdown arrow is now hidden (`appearance-none`) in favor of the Flowbite chevron icon, rendered via the new `chevron` slot (#438)
- `FwbRange`: the `label` default changed from `'Range slider'` to `''` — pass `label="Range slider"` explicitly to restore the previous rendering (#440)
- `FwbCheckbox`: `name` and `value` are no longer declared props; they now flow through attribute passthrough instead (same usage, no template changes needed) (#442)

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

[Unreleased]: https://github.com/themesberg/flowbite-vue/compare/v0.2.3...main
