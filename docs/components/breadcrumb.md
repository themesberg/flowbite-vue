<script setup>
import FwbBreadcrumbExample from './breadcrumb/examples/FwbBreadcrumbExample.vue'
import FwbBreadcrumbExampleSolid from './breadcrumb/examples/FwbBreadcrumbExampleSolid.vue'
import FwbBreadcrumbExampleCustomIcons from './breadcrumb/examples/FwbBreadcrumbExampleCustomIcons.vue'
</script>

# Breadcrumb - Flowbite Vue

#### Show the location of the current page in a hierarchical structure using the Tailwind CSS breadcrumb components

---

:::tip Breadcrumb - Flowbite
Original reference: [https://flowbite.com/docs/components/breadcrumb/](https://flowbite.com/docs/components/breadcrumb/)
:::

The breadcrumb component is an important part of any website or application that can be used to show the current location of a page in a hierarchical structure of pages. Flowbite Vue includes two styles — one with a transparent background and one with a solid background color.

## Default Breadcrumb

Use `FwbBreadcrumb` as a wrapper and `FwbBreadcrumbItem` for each crumb. Add the `home` prop on the first item to show a home icon, and `href` to make any item a link.

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

Add the `solid` prop to `FwbBreadcrumb` to apply a filled background with a border and shadow, making the breadcrumb stand out from the page.

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

Use the `#home-icon` slot to replace the default home icon, and the `#arrow-icon` slot to replace the default chevron separator between items.

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

## Breadcrumb component API

### FwbBreadcrumb Props

| Name  | Type      | Default | Description                                                              |
| ----- | --------- | ------- | ------------------------------------------------------------------------ |
| solid | `Boolean` | `false` | Applies a filled background, border, and shadow to the breadcrumb trail. |

### FwbBreadcrumbItem Props

| Name | Type      | Default | Description                                                        |
| ---- | --------- | ------- | ------------------------------------------------------------------ |
| href | `String`  | `null`  | When set, renders the item as an `<a>` element instead of `<span>`. |
| home | `Boolean` | `false` | Marks this item as the home crumb and renders the home icon.        |

### FwbBreadcrumbItem Slots

| Name       | Description                                              |
| ---------- | -------------------------------------------------------- |
| default    | The crumb label text.                                    |
| home-icon  | Custom icon shown when `home` is `true`.                 |
| arrow-icon | Custom separator icon shown before non-home items.       |
