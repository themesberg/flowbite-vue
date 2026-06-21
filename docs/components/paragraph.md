<script setup>
import FwbPExample from './typography/p/FwbPExample.vue'
import FwbPExampleCustom from './typography/p/FwbPExampleCustom.vue'
</script>

# Paragraph - Flowbite Vue

#### Use the paragraph component to create multiple blocks of text separated by blank lines and write content based on multiple layouts and styles

---

:::tip Paragraph - Flowbite
Original reference: [https://flowbite.com/docs/typography/paragraphs/](https://flowbite.com/docs/typography/paragraphs/)
:::

The paragraph component can be used to create blocks of body text with Tailwind CSS utility classes, supporting custom font sizes, colors, line heights, and layout options.

## Default Paragraph

Use `FwbP` to render a `<p>` element with consistent base typography — bottom margin, gray text, and normal line-height — styled for body content.

<fwb-p-example />

```vue
<template>
  <fwb-p>
    Track work across the enterprise through an open, collaborative platform.
    Link issues across Jira and ingest data from other software development
    tools, so your IT support and operations teams have richer contextual
    information to rapidly respond to requests, incidents, and changes.
  </fwb-p>
  <fwb-p>
    Deliver great service experiences fast - without the complexity of
    traditional ITSM solutions. Accelerate critical development work,
    eliminate toil, and deploy changes with ease, with a complete
    audit trail for every change.
  </fwb-p>
</template>

<script setup>
import { FwbP } from 'flowbite-vue'
</script>
```

## Custom Classes

Use the `class` attribute to apply any Tailwind utility — font weight, alignment, color, style — directly to the paragraph element.

<fwb-p-example-custom />

```vue
<template>
  <fwb-p class="font-light">Light weight paragraph.</fwb-p>
  <fwb-p class="font-bold">Bold paragraph.</fwb-p>
  <fwb-p class="text-left">Left-aligned paragraph.</fwb-p>
  <fwb-p class="text-center">Center-aligned paragraph.</fwb-p>
  <fwb-p class="text-right">Right-aligned paragraph.</fwb-p>
  <fwb-p class="italic text-green-600 dark:text-green-400">Italic green paragraph.</fwb-p>
</template>

<script setup>
import { FwbP } from 'flowbite-vue'
</script>
```

## Paragraph component API

### FwbP Props

| Name  | Type     | Default | Description                                                        |
| ----- | -------- | ------- | ------------------------------------------------------------------ |
| class | `String` | `''`    | Additional Tailwind classes merged onto the `<p>` element.         |

### FwbP Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | The paragraph text content. |
