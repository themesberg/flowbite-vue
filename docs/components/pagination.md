<script setup>
import PaginationExample from './pagination/examples/FwbPaginationExample.vue';
import PaginationNavigationExample from './pagination/examples/FwbPaginationExampleNavigation.vue';
import PaginationTableExample from './pagination/examples/FwbPaginationExampleTable.vue';
import PaginationWithIconsExample from './pagination/examples/FwbPaginationExampleWithIcons.vue';
import PaginationWithCustomTextExample from './pagination/examples/FwbPaginationExampleWithCustomText.vue';
import PaginationWithCustomSlice from './pagination/examples/FwbPaginationExampleWithCustomSlice.vue';
import PaginationSlotsExample from './pagination/examples/FwbPaginationExampleSlots.vue';
</script>
# Vue Pagination - Flowbite
#### Use the Tailwind CSS pagination element to indicate a series of content across various pages based on multiple styles and sizes
The pagination component can be used to navigate across a series of content and data sets for various pages such as blog posts, products, and more. You can use multiple variants of this component with or without icons and even for paginating table data entries.

## Default pagination
Use the following list of pagination items based on two sizes powered by Tailwind CSS utility classes to indicate a series of content for your website.

<PaginationExample />

```vue
<script setup>
import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
<template>
  <fwb-pagination v-model="currentPage" :total-items="100"></fwb-pagination>
  <fwb-pagination v-model="currentPage" :total-items="100" large></fwb-pagination>
</template>
```

## Pagination with icons
The following pagination component example shows how you can use SVG icons instead of text to show the previous and next pages.

<PaginationWithIconsExample />

```vue
<script setup>
import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
<template>
  <fwb-pagination v-model="currentPage" :total-pages="100" show-icons></fwb-pagination>
</template>
```






## Default with custom length
You can use your own pages count in the row by passing props: `slice-length`
This prop means left side and right side pages row slicing. In the example it has value `4`. So row length will be 4 + 1 + 4 pages - 9 pages.

```vue
<script setup>
import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
<template>
  <fwb-pagination v-model="currentPage" :total-pages="100" :slice-length="4"></fwb-pagination>
</template>
```

<PaginationWithCustomSlice />

## Previous and next

```vue
<script setup>
import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
<template>
  <div class="flex items-center justify-center text-center">
    <fwb-pagination v-model="currentPage" :total-pages="10" :layout="'navigation'"></fwb-pagination>
  </div>
</template>
```

<PaginationNavigationExample />

## Pagination with table layout
To use that layout you have to pass required props:
- `per-page`: it's items count displayed on each page.
- `total-items`: it's the total items count.

And there you don't need to use `total-pages` prop.

```vue
<script setup>
import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
<template>
  <div class="flex items-center justify-center text-center">
    <fwb-pagination v-model="currentPage" :layout="'table'" :per-page="20" :total-items="998" class="mb-2" />
    <fwb-pagination v-model="currentPage" :layout="'table'" :per-page="20" :total-items="998" large />
  </div>
</template>
```

<PaginationTableExample />

## Pagination with custom labels

```vue
<script setup>
import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
<template>
  <fwb-pagination v-model="currentPage" :total-pages="100" previous-label="<<<" next-label=">>>"></fwb-pagination>
</template>
```
<PaginationWithCustomTextExample />


## Slots example

<PaginationSlotsExample />

```vue
<script setup>
import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
<template>
  <fwb-pagination v-model="currentPage" :total-items="100" :show-labels="false">
    <template #prev-icon>⬅️</template>
    <template #next-icon>➡️</template>
    <template v-slot:page-button="{ page, setPage }">
      <button
          @click="setPage(page)"
          class="flex items-center justify-center first:rounded-l-lg last:rounded-r-lg px-3 h-8 ml-0 leading-tight text-gray-500 bg-purple-200 border border-purple-300 hover:bg-purple-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {{ page }}
      </button>
    </template>
  </fwb-pagination>
  Current page: {{ currentPage }}
</template>
```

## API

### Props
| Name                      | Values                              | Default      |
|---------------------------|-------------------------------------|--------------|
| modelValue                | `number`                            | `1`          | 
| totalPages                | `number`                            | `10`         |
| perPage                   | `number`                            | `10`         |
| totalItems                | `number`                            | `10`         |
| layout                    | `pagination`, `table`, `navigation` | `pagination` |
| showIcons                 | `boolean`                           | `false`      |
| sliceLength               | `number`                            | `2`          |
| previousLabel             | `string`                            | `Previous`   |
| nextLabel                 | `string`                            | `Next`       |
| enableFirstAndLastButtons | `boolean`                           | `false`      |
| showLabels                | `boolean`                           | `true`       |
| large                     | `boolean`                           | `false`      |

### Events
| Name                 | Description          |
|----------------------|----------------------|
| `update:model-value` | Current page changed |
| `page-changed`       | Current page changed |

### Slots
| Name         | Description             |
|--------------|-------------------------|
| start        | content before buttons  |
| end          | content after buttons   |
| first-button | first button content    |
| last-button  | last button content     |
| prev-button  | previous button content |
| next-button  | next button content     |
| prev-icon    | previous icon slot      |
| next-icon    | next icon slot          |
| page-button  | page button slot        |
