<script setup>
import FwbPExample from './typography/p/FwbPExample.vue'
import FwbPExampleAlign from './typography/p/FwbPExampleAlign.vue'
import FwbPExampleCustom from './typography/p/FwbPExampleCustom.vue'
import FwbPExampleWeight from './typography/p/FwbPExampleWeight.vue'
</script>

# Vue Paragraph - Flowbite

#### Use the paragraph component to create multiple blocks of text separated by blank lines and write content based on multiple layouts and styles

## Default paragraph

Use this example of a paragraph element to use inside article content or a landing page.

```vue
<template>
  <fwb-p class="mb-2">
    Track work across the enterprise through an open, collaborative platform.
    Link issues across Jira and ingest data from other software development
    tools, so your IT support and operations teams have richer contextual
    information to rapidly respond to requests, incidents, and changes.
  </fwb-p>
  <fwb-p>
    Deliver great service experiences fast - without the complexityof
    traditional ITSM solutions. Accelerate critical development work,
    eliminate toil, and deploy changes with ease, with a complete
    audit trail for every change.
  </fwb-p>
</template>

<script setup>
import { FwbP } from 'flowbite-vue'
</script>
```

<fwb-p-example />

## Weight

Use `weight` prop to set the text-weight.

```vue
<template>
  <fwb-p class="mb-2" weight="light">
    Track work across the enterprise through an open, collaborative platform.
    Link issues across Jira and ingest data from other software development
    tools, so your IT support and operations teams have richer contextual
    information to rapidly respond to requests, incidents, and changes.
  </fwb-p>
  <fwb-p weight="bold">
    Deliver great service experiences fast - without the complexityof
    traditional ITSM solutions. Accelerate critical development work,
    eliminate toil, and deploy changes with ease, with a complete
    audit trail for every change.
  </fwb-p>
</template>

<script setup>
import { FwbP } from 'flowbite-vue'
</script>
```

<fwb-p-example-weight />

## Alignment

Use `align` prop to set the text alignment.

```vue
<template>
  <fwb-p  align="left" class="mb-2">
    Deliver great service experiences fast - without the complexityof
    traditional ITSM solutions. Accelerate critical development work,
    eliminate toil, and deploy changes with ease, with a complete
    audit trail for every change.
  </fwb-p>
  <fwb-p align="center" class="mb-2">
    Deliver great service experiences fast - without the complexityof
    traditional ITSM solutions. Accelerate critical development work,
    eliminate toil, and deploy changes with ease, with a complete
    audit trail for every change.
  </fwb-p>
  <fwb-p align="right" class="mb-2">
    Deliver great service experiences fast - without the complexityof
    traditional ITSM solutions. Accelerate critical development work,
    eliminate toil, and deploy changes with ease, with a complete
    audit trail for every change.
  </fwb-p>
</template>

<script setup>
import { FwbP } from 'flowbite-vue'
</script>
```

<fwb-p-example-align />

## Custom classes

Use `class` attribute to apply the tailwind classes.

```vue
<template>
  <fwb-p class="text-green-600 dark:text-green-400 italic">
    Deliver great service experiences fast - without the complexityof
    traditional ITSM solutions. Accelerate critical development work,
    eliminate toil, and deploy changes with ease, with a complete
    audit trail for every change.
  </fwb-p>
</template>

<script setup>
import { FwbP } from 'flowbite-vue'
</script>
```

<fwb-p-example-custom />
