<script setup>
import FwbBadgeExample from './badge/examples/FwbBadgeExample.vue'
import FwbBadgeExampleSize from './badge/examples/FwbBadgeExampleSize.vue'
import FwbBadgeExampleLink from './badge/examples/FwbBadgeExampleLink.vue'
import FwbBadgeExampleIcon from './badge/examples/FwbBadgeExampleIcon.vue'
import FwbBadgeExampleIconOnly from './badge/examples/FwbBadgeExampleIconOnly.vue'
</script>
# Vue Badge - Flowbite

#### Use Tailwind CSS badges as elements to show counts or labels separately or inside other components
---

:::tip
Original reference: [https://flowbite.com/docs/components/badge/](https://flowbite.com/docs/components/badge/)
:::

The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made.
Alternatively, badges can also be used as standalone elements that link to a certain page by using the anchor tag instead of a span element.

## Default badge
Prop – type

<fwb-badge-example />
```vue
<template>
  <fwb-badge>Default</fwb-badge>
  <fwb-badge type="dark">Dark</fwb-badge>
  <fwb-badge type="red">Red</fwb-badge>
  <fwb-badge type="green">Green</fwb-badge>
  <fwb-badge type="yellow">Yellow</fwb-badge>
  <fwb-badge type="indigo">Indigo</fwb-badge>
  <fwb-badge type="purple">Purple</fwb-badge>
  <fwb-badge type="pink">Pink</fwb-badge>
</template>

<script setup>
import { FwbBadge } from 'flowbite-vue'
</script>
```

## Large badges
Prop – size

<fwb-badge-example-size />
```vue
<template>
  <fwb-badge size="xs">Default</fwb-badge>
  <fwb-badge size="xs" type="dark">Dark</fwb-badge>
  <fwb-badge size="xs" type="red">Red</fwb-badge>
  <fwb-badge size="xs" type="green">Green</fwb-badge>
  <fwb-badge size="sm" type="yellow">Yellow</fwb-badge>
  <fwb-badge size="sm" type="indigo">Indigo</fwb-badge>
  <fwb-badge size="sm" type="purple">Purple</fwb-badge>
  <fwb-badge size="sm" type="pink">Pink</fwb-badge>
</template>

<script setup>
import { FwbBadge } from 'flowbite-vue'
</script>
```

## Badges as links
You can also use badges as anchor elements to link to another page.
Prop – href

<fwb-badge-example-link />
```vue
<template>
  <fwb-badge href="#">
    Link
  </fwb-badge>
  <fwb-badge href="#" size="sm">
    Link small
  </fwb-badge>
</template>

<script setup>
import { FwbBadge } from 'flowbite-vue'
</script>
```

## Badges with icon
You can also use SVG icons inside the badge elements.
slot icon

<fwb-badge-example-icon />
```vue
<template>
  <fwb-badge>
    <template #icon>
      <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
      </svg>
    </template>
    Default
  </fwb-badge>
  <fwb-badge size="sm" type="dark">
    <template #icon>
      <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
      </svg>
    </template>
    Dark
  </fwb-badge>
</template>

<script setup>
import { FwbBadge } from 'flowbite-vue'
</script>
```

## Badge with icon only

<fwb-badge-example-icon-only />
```vue
<template>
  <fwb-badge>
    <template #icon>
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
      </svg>
    </template>
  </fwb-badge>
  <fwb-badge type="dark">
    <template #icon>
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
      </svg>
    </template>
  </fwb-badge>
  <fwb-badge size="sm" type="green">
    <template #icon>
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
      </svg>
    </template>
  </fwb-badge>
</template>

<script setup>
import { FwbBadge } from 'flowbite-vue'
</script>
```
