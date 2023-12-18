<script setup>
import FwbPExample from './typography/p/FwbPExample.vue'
import FwbPExampleCustom from './typography/p/FwbPExampleCustom.vue'
</script>

# Vue Paragraph - Flowbite

#### Use the paragraph component to create multiple blocks of text separated by blank lines and write content based on multiple layouts and styles

## Default paragraph

Use this example of a paragraph element to use inside article content or a landing page.

```vue
<template>
  <fwb-p>
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

## Custom classes

Use `class` attribute to apply the tailwind classes.

```vue
<template>
  <fwb-p class="font-light">
    Track work across the enterprise through an open, collaborative platform.
    Link issues across Jira and ingest data from other software development
    tools, so your IT support and operations teams have richer contextual
    information to rapidly respond to requests, incidents, and changes.
  </fwb-p>
  <fwb-p class="font-bold">
    Deliver great service experiences fast - without the complexityof
    traditional ITSM solutions. Accelerate critical development work,
    eliminate toil, and deploy changes with ease, with a complete
    audit trail for every change.
  </fwb-p>
  <fwb-p  class="test-left">
    Deliver great service experiences fast - without the complexityof
    traditional ITSM solutions. Accelerate critical development work,
    eliminate toil, and deploy changes with ease, with a complete
    audit trail for every change.
  </fwb-p>
  <fwb-p class="test-center">
    Deliver great service experiences fast - without the complexityof
    traditional ITSM solutions. Accelerate critical development work,
    eliminate toil, and deploy changes with ease, with a complete
    audit trail for every change.
  </fwb-p>
  <fwb-p class="text-right">
    Deliver great service experiences fast - without the complexityof
    traditional ITSM solutions. Accelerate critical development work,
    eliminate toil, and deploy changes with ease, with a complete
    audit trail for every change.
  </fwb-p>
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
