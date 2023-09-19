<script setup>
import P from './typography/p/P.vue'
import PWeight from './typography/p/PWeight.vue'
import PAlign from './typography/p/PAlign.vue'
import PCustom from './typography/p/PCustom.vue'
</script>

# Vue Paragraph - Flowbite

#### Use the paragraph component to create multiple blocks of text separated by blank lines and write content based on multiple layouts and styles

## Default paragraph

Use this example of a paragraph element to use inside article content or a landing page.

```vue
<template>
  <P class="mb-2">
    Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams
    have richer contextual information to rapidly respond to requests, incidents, and changes.
  </P>
  <P>
    Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete
    audit trail for every change.
  </P>
</template>

<script setup>
import P from 'flowbite-vue'
</script>
```

<P />

## Weight

Use `weight` prop to set the text-weight.

```vue
<template>
  <P class="mb-2" weight="light">
    Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams
    have richer contextual information to rapidly respond to requests, incidents, and changes.
  </P>
  <P weight="light">
    Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete
    audit trail for every change.
  </P>
</template>

<script setup>
import P from 'flowbite-vue'
</script>
```

<PWeight />

## Alignment

Use `align` prop to set the text alignment.

```vue
<template>
  <P align="center">
    Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete
    audit trail for every change.
  </P>
</template>

<script setup>
import P from 'flowbite-vue'
</script>
```

<PAlign />

## Custom classes

Use `class` attribute to apply the tailwind classes.

```vue
<template>
  <P class="!text-green-400 italic">
    Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete
    audit trail for every change.
  </P>
</template>

<script setup>
import P from 'flowbite-vue'
</script>
```

<PCustom />
