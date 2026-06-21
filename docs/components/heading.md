<script setup>
import FwbHExampleLevel1 from './typography/heading/FwbHExampleLevel1.vue'
import FwbHExampleLevel2 from './typography/heading/FwbHExampleLevel2.vue'
import FwbHExampleLevel3 from './typography/heading/FwbHExampleLevel3.vue'
import FwbHExampleLevel4 from './typography/heading/FwbHExampleLevel4.vue'
import FwbHExampleLevel5 from './typography/heading/FwbHExampleLevel5.vue'
import FwbHExampleLevel6 from './typography/heading/FwbHExampleLevel6.vue'
import FwbHExampleColor from './typography/heading/FwbHExampleColor.vue'
import FwbHExampleCustom from './typography/heading/FwbHExampleCustom.vue'
</script>

# Heading - Flowbite Vue

#### The heading component defines six levels of title elements from H1 to H6 that are used as titles and subtitles on a web page based on multiple styles and layouts

---

:::tip Heading - Flowbite
Original reference: [https://flowbite.com/docs/typography/headings/](https://flowbite.com/docs/typography/headings/)
:::

The heading component can be used to render H1–H6 title elements with Tailwind CSS utility classes, available in multiple colors and with support for custom class overrides.

## Heading 1

Use `tag="h1"` for the most important text element on a page, typically the page title. Each page should have only one H1.

<fwb-h-example-level1 />

```vue
<template>
  <fwb-heading tag="h1">Heading 1</fwb-heading>
</template>

<script setup>
import { FwbHeading } from 'flowbite-vue'
</script>
```

## Heading 2

Use `tag="h2"` as the main subtitle for major page sections.

<fwb-h-example-level2 />

```vue
<template>
  <fwb-heading tag="h2">Heading 2</fwb-heading>
</template>

<script setup>
import { FwbHeading } from 'flowbite-vue'
</script>
```

## Heading 3

Use `tag="h3"` inside sections that already have an H2 to create a third level of hierarchy.

<fwb-h-example-level3 />

```vue
<template>
  <fwb-heading tag="h3">Heading 3</fwb-heading>
</template>

<script setup>
import { FwbHeading } from 'flowbite-vue'
</script>
```

## Heading 4

Use `tag="h4"` after H2 and H3 tags are already present and you need deeper nesting.

<fwb-h-example-level4 />

```vue
<template>
  <fwb-heading tag="h4">Heading 4</fwb-heading>
</template>

<script setup>
import { FwbHeading } from 'flowbite-vue'
</script>
```

## Heading 5

Use `tag="h5"` in longer articles with multiple heading levels already in use, or in sidebars.

<fwb-h-example-level5 />

```vue
<template>
  <fwb-heading tag="h5">Heading 5</fwb-heading>
</template>

<script setup>
import { FwbHeading } from 'flowbite-vue'
</script>
```

## Heading 6

Use `tag="h6"` for the deepest heading level in a complex content hierarchy.

<fwb-h-example-level6 />

```vue
<template>
  <fwb-heading tag="h6">Heading 6</fwb-heading>
</template>

<script setup>
import { FwbHeading } from 'flowbite-vue'
</script>
```

## Color

Use the `color` prop to override the default text color with any Tailwind text color utility.

<fwb-h-example-color />

```vue
<template>
  <fwb-heading color="text-green-400">Green heading</fwb-heading>
</template>

<script setup>
import { FwbHeading } from 'flowbite-vue'
</script>
```

## Custom Classes

Pass additional Tailwind utilities via the `class` attribute to further customize the heading appearance.

<fwb-h-example-custom />

```vue
<template>
  <fwb-heading class="text-xl! italic underline">Custom heading</fwb-heading>
</template>

<script setup>
import { FwbHeading } from 'flowbite-vue'
</script>
```

## Heading component API

### FwbHeading Props

| Name       | Type                                       | Default                          | Description                                                                              |
| ---------- | ------------------------------------------ | -------------------------------- | ---------------------------------------------------------------------------------------- |
| tag        | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h1'`                    | The HTML heading element to render.                                                      |
| color      | `String`                                   | `'text-gray-900 dark:text-white'` | Tailwind text color utility applied to the heading.                                     |
| customSize | `String`                                   | `''`                             | Overrides the default size and weight classes (e.g. `text-5xl font-extrabold` for H1).  |

### FwbHeading Slots

| Name    | Description              |
| ------- | ------------------------ |
| default | The heading text content. |
