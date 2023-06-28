<script setup>
import BreadcrumbExample from './breadcrumb/examples/BreadcrumbExample.vue'
import BreadcrumbSolidExample from './breadcrumb/examples/BreadcrumbSolidExample.vue'
import BreadcrumbCustomIconsExample from './breadcrumb/examples/BreadcrumbCustomIconsExample.vue'
</script>
# Vue Breadcrumb - Flowbite
The breadcrumb component is an important part of any website or application that can be used to show the current location of a page in a hierarchical structure of pages.

Flowbite includes two styles of breadcrumb elements, one that has a transparent background and a few more that come with a background in different colors.

## Default breadcrumb

<BreadcrumbExample />

```vue
<script setup>
import { Breadcrumb } from 'flowbite-vue'
</script>
<template>
<Breadcrumb>
  <BreadcrumbItem href="#" home>
    Home
  </BreadcrumbItem>
  <BreadcrumbItem href="#">
    Projects
  </BreadcrumbItem>
  <BreadcrumbItem>
    Flowbite
  </BreadcrumbItem>
</Breadcrumb>
</template>
```

## Solid Breadcrumb

<BreadcrumbSolidExample />

```vue
<script setup>
import { Breadcrumb } from 'flowbite-vue'
</script>
<template>
<Breadcrumb solid>
  <BreadcrumbItem href="#" home>
    Home
  </BreadcrumbItem>
  <BreadcrumbItem href="#">
    Projects
  </BreadcrumbItem>
  <BreadcrumbItem>
    Flowbite
  </BreadcrumbItem>
</Breadcrumb>
</template>
```

## Custom Icons

<BreadcrumbCustomIconsExample />
