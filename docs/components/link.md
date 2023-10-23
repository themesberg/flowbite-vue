<script setup>
import FwbAExample from './typography/link/FwbAExample.vue'
import FwbAExampleParagraph from './typography/link/FwbAExampleParagraph.vue'
import FwbAExampleCustom from './typography/link/FwbAExampleCustom.vue'
</script>

# Vue Links - Flowbite

#### The link component can be used to set hyperlinks from one page to another or to an external website when clicking on an inline text item, button, or card

## Default link

Use this example to set default styles to an inline link element.

```vue
<template>
  <fwb-a href="#"> Flowbite-vue </fwb-a>
</template>

<script setup>
import { FwbA } from 'flowbite-vue'
</script>
```
<fwb-a-example />

## Paragraph link

Use this example to set a link inside a paragraph with an underline style.

```vue
<template>
  <fwb-p>
    The free updates that will be provided is based on the <fwb-a href="#"
    class="underline hover:no-underline">roadmap</fwb-a> that we have laid
    out for this project. It is also possible that we will provide
    extra updates outside of the roadmap as well.
  </fwb-p>
</template>

<script setup>
import { FwbA, FwbP } from 'flowbite-vue'
</script>
```
<fwb-a-example-paragraph />

## Custom classes

Use `class` attribute prop to apply the tailwind classes.

```vue
<template>
  <fwb-a class="text-orange-500 italic" href="#"> Flowbite-vue </fwb-a>
</template>

<script setup>
import { FwbA } from 'flowbite-vue'
</script>
```
<fwb-a-example-custom />
