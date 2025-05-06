<script setup>
import FwbPaginationExample from './pagination/examples/FwbPaginationExample.vue';
import FwbPaginationExampleIcons from './pagination/examples/FwbPaginationExampleIcons.vue';
import FwbPaginationExampleNavigation from './pagination/examples/FwbPaginationExampleNavigation.vue';
import FwbPaginationExampleNavigationIcons from './pagination/examples/FwbPaginationExampleNavigationIcons.vue';
import FwbPaginationExampleSlots from './pagination/examples/FwbPaginationExampleSlots.vue';
import FwbPaginationExampleSlotsAdvanced from './pagination/examples/FwbPaginationExampleSlotsAdvanced.vue';
import FwbPaginationExampleTable from './pagination/examples/FwbPaginationExampleTable.vue';
import FwbPaginationExampleCustomLength from './pagination/examples/FwbPaginationExampleCustomLength.vue';
import FwbPaginationExampleCustomLabels from './pagination/examples/FwbPaginationExampleCustomLabels.vue';
import FwbPaginationExampleFirstLast from './pagination/examples/FwbPaginationExampleFirstLast.vue';
</script>

# Vue Pagination - Flowbite
#### Use the Tailwind CSS pagination element to indicate a series of content across various pages based on multiple styles and sizes.
The pagination component can be used to navigate across a series of content and data sets for various pages such as blog posts, products, and more. You can use multiple variants of this component with or without icons and even for paginating table data entries.

## Default pagination
Use the following list of pagination items based on two sizes powered by Tailwind CSS utility classes to indicate a series of content for your website.

<fwb-pagination-example />

```vue
<template>
  <fwb-pagination
    v-model="currentPage"
    :total-items="100"
  />
  <fwb-pagination
    v-model="currentPage"
    :total-items="100"
    large
  />
</template>

<script setup>
import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
```

## Pagination with icons
The following pagination component example shows how you can use SVG icons instead of text to show the previous and next pages.

<fwb-pagination-example-icons />

```vue
<template>
  <fwb-pagination
    v-model="currentPage"
    :total-pages="100"
    hide-labels
    show-icons
  />
  <fwb-pagination
    v-model="currentPage"
    :total-pages="100"
    hide-labels
    show-icons
    large
  />
</template>

<script setup>
import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
```

## Custom length pagination
You can use your own pages count in the row by passing props: `slice-length`
This prop means left side and right side pages row slicing. In the example it has value `4`. So row length will be `4 + 1 + 4 = 9` pages.

<fwb-pagination-example-custom-length />
```vue
<template>
  <fwb-pagination
    v-model="currentPage"
    :slice-length="4"
    :total-pages="100"
  />
</template>

<script setup>
import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(5)
</script>
```

## Previous and next

<fwb-pagination-example-navigation />
```vue
<template>
  <fwb-pagination
    v-model="currentPage"
    :layout="'navigation'"
    :total-pages="100"
  />
  <fwb-pagination
    v-model="currentPage"
    :layout="'navigation'"
    :total-pages="100"
    large
  />
</template>

<script setup>
import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
```

## Previous and next with icons

<fwb-pagination-example-navigation-icons />
```vue
<template>
  <fwb-pagination
    v-model="currentPage"
    :layout="'navigation'"
    :total-pages="100"
    show-icons
  />
  <fwb-pagination
    v-model="currentPage"
    :layout="'navigation'"
    :total-pages="100"
    show-icons
    large
  />
</template>

<script setup>
import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
```

## First and last

<fwb-pagination-example-first-last />
```vue
<template>
  <fwb-pagination
    v-model="currentPage"
    :total-pages="100"
    enable-first-last
  />
  <fwb-pagination
    v-model="currentPage"
    :total-pages="100"
    large
    enable-first-last
  />
  <fwb-pagination
    v-model="currentPage"
    :total-pages="100"
    large
    enable-first-last
    show-icons
  />
</template>

<script setup>
import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
```


## Table data pagination
You can use the following markup to show the number of data shown inside a table element and also the previous and next action buttons.
To use that layout you have to pass required props:
- `per-page`: it's items count displayed on each page.
- `total-items`: it's the total items count.

_And here you don't need to use `total-pages` prop._

<fwb-pagination-example-table />
```vue
<template>
  <fwb-pagination
    v-model="currentPageA"
    :layout="'table'"
    :per-page="20"
    :total-items="100"
  />
  <fwb-pagination
    v-model="currentPageB"
    :layout="'table'"
    :per-page="100"
    :total-items="550"
    large
  />
</template>

<script setup>
import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPageA = ref(1)
const currentPageB = ref(1)
</script>
```


## Pagination with custom labels

<fwb-pagination-example-custom-labels />
```vue
<template>
  <fwb-pagination
    v-model="currentPage"
    :total-pages="100"
    previous-label="<<<"
    next-label=">>>"
  />
</template>

<script setup>
import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
```


## Slots example

<fwb-pagination-example-slots />

```vue
<template>
  <fwb-pagination
    v-model="currentPage"
    :total-items="100"
    hide-labels
  >
    <template #prev-icon>⬅️</template>
    <template #next-icon>➡️</template>
    <template #page-button="{ page, setPage }">
      <button @click="setPage(page)" class="ml-0 flex h-8 items-center justify-center border border-purple-300 bg-purple-200 px-3 leading-tight text-gray-500 first:rounded-l-lg last:rounded-r-lg hover:bg-purple-300 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        {{ page }}
      </button>
    </template>
  </fwb-pagination>
  Current page: {{ currentPage }}
</template>

<script setup>
import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
```

## Advanced slots example

<fwb-pagination-example-slots-advanced />

```vue
<template>
  <fwb-pagination
    v-model="currentPage"
    :total-items="100"
    enable-first-last
  >
    <template #first-button="{ disabled, setPage }">
      <button
        class="disabled:cursor-not-allowed ml-0 flex h-8 items-center justify-center border border-purple-300 bg-purple-200 px-3 leading-tight text-gray-500 first:rounded-l-lg last:rounded-r-lg hover:bg-purple-300 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        :disabled="disabled"
        @click="setPage()"
      >
        First page
      </button>
    </template>

    <template #last-button="{ disabled, setPage, page }">
      <button
        class="disabled:cursor-not-allowed ml-0 flex h-8 items-center justify-center border border-purple-300 bg-purple-200 px-3 leading-tight text-gray-500 first:rounded-l-lg last:rounded-r-lg hover:bg-purple-300 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        :disabled="disabled"
        @click="setPage()"
      >
        Last page ({{ page }})
      </button>
    </template>

    <template #prev-button="{ disabled, decreasePage }">
      <button
        class="disabled:cursor-not-allowed ml-0 flex h-8 items-center justify-center border border-purple-300 bg-purple-200 px-3 leading-tight text-gray-500 first:rounded-l-lg last:rounded-r-lg hover:bg-purple-300 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        :disabled="disabled"
        @click="decreasePage()"
      >
        Prev page
      </button>
    </template>

    <template #next-button="{ disabled, increasePage }">
      <button
        class="disabled:cursor-not-allowed ml-0 flex h-8 items-center justify-center border border-purple-300 bg-purple-200 px-3 leading-tight text-gray-500 first:rounded-l-lg last:rounded-r-lg hover:bg-purple-300 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        :disabled="disabled"
        @click="increasePage()"
      >
        Next page
      </button>
    </template>

    <template #page-button="{ disabled, page, setPage }">
      <button
        class="disabled:cursor-not-allowed ml-0 flex h-8 items-center justify-center border border-purple-300 px-3 leading-tight text-gray-500 first:rounded-l-lg last:rounded-r-lg  hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        :class="{
          'bg-purple-200 hover:bg-purple-300': !disabled,
          'bg-purple-300': disabled
        }"
        :disabled="disabled"
        @click="setPage(page)"
      >
        {{ page }}
      </button>
    </template>
  </fwb-pagination>
  Current page: {{ currentPage }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbPagination } from '../../../../src/index'

const currentPage = ref<number>(1)
</script>

```

## API

### Props
| Name            | Values                              | Default      |
| --------------- | ----------------------------------- | ------------ |
| modelValue      | `number`                            | `1`          |
| totalPages      | `number`                            | `10`         |
| perPage         | `number`                            | `10`         |
| totalItems      | `number`                            | `10`         |
| layout          | `pagination`, `table`, `navigation` | `pagination` |
| showIcons       | `boolean`                           | `false`      |
| sliceLength     | `number`                            | `2`          |
| previousLabel   | `string`                            | `Previous`   |
| nextLabel       | `string`                            | `Next`       |
| enableFirstLast | `boolean`                           | `false`      |
| hideLabels      | `boolean`                           | `false`      |
| large           | `boolean`                           | `false`      |

### Events
| Name                 | Description          |
| -------------------- | -------------------- |
| `update:model-value` | Current page changed |
| `page-changed`       | Current page changed |

### Slots
| Name           | Description             |
| -------------- | ----------------------- |
| `start`        | content before buttons  |
| `first-icon`   | first icon content      |
| `first-button` | first button content    |
| `prev-icon`    | previous icon content   |
| `prev-button`  | previous button content |
| `page-button`  | page button content     |
| `next-button`  | next button content     |
| `next-icon`    | next icon content       |
| `last-button`  | last button content     |
| `last-icon`    | last icon content       |
| `end`          | content after buttons   |
