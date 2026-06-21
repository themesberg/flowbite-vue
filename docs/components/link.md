<script setup>
import FwbAExample from './typography/link/FwbAExample.vue'
import FwbAExampleParagraph from './typography/link/FwbAExampleParagraph.vue'
import FwbAExampleCustom from './typography/link/FwbAExampleCustom.vue'
</script>

# Links - Flowbite Vue

#### The link component can be used to set hyperlinks from one page to another or to an external website when clicking on an inline text item, button, or card

---

:::tip Links - Flowbite
Original reference: [https://flowbite.com/docs/typography/links/](https://flowbite.com/docs/typography/links/)
:::

The link component can be used to create styled anchor elements with Tailwind CSS utility classes, supporting inline text links and links embedded inside paragraphs.

## Default Link

Use `FwbA` to render an inline anchor element with the default brand color and a hover underline.

<fwb-a-example />

```vue
<template>
  <fwb-a href="#"> Flowbite-vue </fwb-a>
</template>

<script setup>
import { FwbA } from 'flowbite-vue'
</script>
```

## Paragraph Link

Use `FwbA` inside a `FwbP` component to create an inline link within a paragraph of text.

<fwb-a-example-paragraph />

```vue
<template>
  <fwb-p>
    The free updates that will be provided is based on the <fwb-a href="#" class="underline hover:no-underline">roadmap</fwb-a> that we have laid out for this project.
  </fwb-p>
</template>

<script setup>
import { FwbA, FwbP } from 'flowbite-vue'
</script>
```

## Custom Classes

Use the `color` prop to override the link text color, or the `class` attribute to apply any additional Tailwind utilities.

<fwb-a-example-custom />

```vue
<template>
  <fwb-a class="text-orange-500 italic" href="#"> Flowbite-vue </fwb-a>
</template>

<script setup>
import { FwbA } from 'flowbite-vue'
</script>
```

## Link component API

### FwbA Props

| Name  | Type     | Default                                      | Description                                             |
| ----- | -------- | -------------------------------------------- | ------------------------------------------------------- |
| href  | `String` | `''`                                         | The URL the link navigates to.                          |
| color | `String` | `'text-primary-600 dark:text-primary-500'`   | Tailwind text color utility applied to the link.        |

### FwbA Slots

| Name    | Description          |
| ------- | -------------------- |
| default | The link label text. |
