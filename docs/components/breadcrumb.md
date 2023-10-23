<script setup>
import FwbBreadcrumbExample from './breadcrumb/examples/FwbBreadcrumbExample.vue'
import FwbBreadcrumbExampleSolid from './breadcrumb/examples/FwbBreadcrumbExampleSolid.vue'
import FwbBreadcrumbExampleCustomIcons from './breadcrumb/examples/FwbBreadcrumbExampleCustomIcons.vue'
</script>
# Vue Breadcrumb - Flowbite
The breadcrumb component is an important part of any website or application that can be used to show the current location of a page in a hierarchical structure of pages.

Flowbite includes two styles of breadcrumb elements, one that has a transparent background and a few more that come with a background in different colors.

## Default breadcrumb

<fwb-breadcrumb-example />
```vue
<template>
  <fwb-breadcrumb>
    <fwb-breadcrumb-item home href="#">
      Home
    </fwb-breadcrumb-item>
    <fwb-breadcrumb-item href="#">
      Projects
    </fwb-breadcrumb-item>
    <fwb-breadcrumb-item>
      Flowbite
    </fwb-breadcrumb-item>
  </fwb-breadcrumb>
</template>

<script setup>
import { FwbBreadcrumb, FwbBreadcrumbItem } from 'flowbite-vue'
</script>
```

## Solid Breadcrumb

<fwb-breadcrumb-example-solid />
```vue
<template>
  <fwb-breadcrumb solid>
    <fwb-breadcrumb-item home href="#">
      Home
    </fwb-breadcrumb-item>
    <fwb-breadcrumb-item href="#">
      Projects
    </fwb-breadcrumb-item>
    <fwb-breadcrumb-item>
      Flowbite
    </fwb-breadcrumb-item>
  </fwb-breadcrumb>
</template>

<script setup>
import { FwbBreadcrumb, FwbBreadcrumbItem } from 'flowbite-vue'
</script>
```

## Custom Icons

<fwb-breadcrumb-example-custom-icons />
```vue
<template>
  <fwb-breadcrumb>
    <fwb-breadcrumb-item home href="#">
      <template #home-icon>
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
      </template>
      Home
    </fwb-breadcrumb-item>
    <fwb-breadcrumb-item href="#">
      <template #arrow-icon>
        <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
      </template>
      Projects
    </fwb-breadcrumb-item>
    <fwb-breadcrumb-item>
      <template #arrow-icon>
        <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
      </template>
      Flowbite
    </fwb-breadcrumb-item>
  </fwb-breadcrumb>
</template>

<script setup>
import { FwbBreadcrumb, FwbBreadcrumbItem } from 'flowbite-vue'
</script>
```
