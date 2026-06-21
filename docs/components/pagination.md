<script setup>
import FwbPaginationExample from './pagination/examples/FwbPaginationExample.vue'
import FwbPaginationExampleIcons from './pagination/examples/FwbPaginationExampleIcons.vue'
import FwbPaginationExampleNavigation from './pagination/examples/FwbPaginationExampleNavigation.vue'
import FwbPaginationExampleNavigationIcons from './pagination/examples/FwbPaginationExampleNavigationIcons.vue'
import FwbPaginationExampleSlots from './pagination/examples/FwbPaginationExampleSlots.vue'
import FwbPaginationExampleSlotsAdvanced from './pagination/examples/FwbPaginationExampleSlotsAdvanced.vue'
import FwbPaginationExampleTable from './pagination/examples/FwbPaginationExampleTable.vue'
import FwbPaginationExampleCustomLength from './pagination/examples/FwbPaginationExampleCustomLength.vue'
import FwbPaginationExampleCustomLabels from './pagination/examples/FwbPaginationExampleCustomLabels.vue'
import FwbPaginationExampleFirstLast from './pagination/examples/FwbPaginationExampleFirstLast.vue'
</script>

# Pagination - Flowbite Vue

#### Use the Tailwind CSS pagination element to indicate a series of content across various pages based on multiple styles and sizes

---

:::tip Pagination - Flowbite
Original reference: [https://flowbite.com/docs/components/pagination/](https://flowbite.com/docs/components/pagination/)
:::

The pagination component can be used to navigate across a series of content and data sets for various pages such as blog posts, products, and more. Use `v-model` to bind the current page and supply either `total-pages` or `total-items` to drive the page count.

## Default Pagination

Use `FwbPagination` with `v-model` and `:total-items` (or `:total-pages`) to render a numbered page list. Add the `large` prop to increase the button height.

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

## Pagination with Icons

Add `show-icons` and `hide-labels` to render chevron SVGs in the previous/next buttons instead of text labels.

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

## Custom Page Window

Use `slice-length` to control how many page numbers are shown on each side of the current page. The total visible page count is `sliceLength + 1 + sliceLength`. The default value is `2`.

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

## Previous and Next

Set `layout="navigation"` to render only the previous and next navigation buttons without individual page numbers.

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

## Previous and Next with Icons

Combine `layout="navigation"` with `show-icons` to display chevron icons in the navigation buttons.

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

## First and Last Buttons

Add `enable-first-last` to render jump-to-first and jump-to-last buttons at the ends of the pagination strip. Combine with `show-icons` to display double-chevron SVGs.

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

## Table Data Pagination

Set `layout="table"` to display a "Showing X to Y of Z" summary above the navigation buttons. Provide both `per-page` (items per page) and `total-items` (total record count) — `total-pages` is not needed with this layout.

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

## Custom Labels

Use `previous-label` and `next-label` (and `first-label` / `last-label` when `enable-first-last` is set) to replace the default button text.

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

## Custom Slots

Use the `prev-icon`, `next-icon`, and `page-button` slots to fully replace the default button rendering. The `page-button` slot exposes `{ page, setPage }` for wiring up click handlers.

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

## Advanced Slot Customization

Replace every navigation button using the full set of scoped slots: `first-button`, `last-button`, `prev-button`, `next-button`, and `page-button`. Each slot exposes state and action helpers so you can render any custom element.

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
        class="disabled:cursor-not-allowed ml-0 flex h-8 items-center justify-center border border-purple-300 px-3 leading-tight text-gray-500 first:rounded-l-lg last:rounded-r-lg hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
import { FwbPagination } from 'flowbite-vue'

const currentPage = ref<number>(1)
</script>
```

## Pagination component API

### FwbPagination Props

| Name            | Type                                        | Default        | Description                                                                                 |
| --------------- | ------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------- |
| modelValue      | `Number`                                    | `1`            | The current page number (use with `v-model`).                                               |
| totalPages      | `Number`                                    | `undefined`    | Total number of pages. Takes precedence over `totalItems` / `perPage` when set.             |
| perPage         | `Number`                                    | `10`           | Number of items shown per page. Used with `totalItems` to compute total pages.              |
| totalItems      | `Number`                                    | `10`           | Total number of items. Used with `perPage` to compute total pages.                          |
| layout          | `'pagination' \| 'table' \| 'navigation'`  | `'pagination'` | Controls the pagination style shown.                                                        |
| showIcons       | `Boolean`                                   | `false`        | Renders chevron SVG icons inside the previous/next (and first/last) buttons.                |
| sliceLength     | `Number`                                    | `2`            | Number of page buttons shown on each side of the active page.                               |
| previousLabel   | `String`                                    | `'Prev'`       | Label text for the previous button.                                                         |
| nextLabel       | `String`                                    | `'Next'`       | Label text for the next button.                                                             |
| firstLabel      | `String`                                    | `'First'`      | Label text for the first-page button (requires `enable-first-last`).                        |
| lastLabel       | `String`                                    | `'Last'`       | Label text for the last-page button (requires `enable-first-last`).                         |
| enableFirstLast | `Boolean`                                   | `false`        | Renders jump-to-first and jump-to-last buttons at the ends of the strip.                    |
| hideLabels      | `Boolean`                                   | `false`        | Hides the text labels inside the previous/next buttons (useful when using icons only).      |
| large           | `Boolean`                                   | `false`        | Increases the button height from `h-8` to `h-10`.                                          |

### FwbPagination Events

| Name               | Description                                          |
| ------------------ | ---------------------------------------------------- |
| update:model-value | Emitted with the new page number when it changes.    |
| page-changed       | Emitted with the new page number when it changes.    |

### FwbPagination Slots

| Name          | Scoped props                             | Description                                                          |
| ------------- | ---------------------------------------- | -------------------------------------------------------------------- |
| start         | —                                        | Content inserted before all buttons.                                 |
| first-button  | `{ disabled, setPage }`                  | Replaces the jump-to-first button. Call `setPage()` to navigate.     |
| first-icon    | —                                        | Replaces the default double-chevron inside the first button.         |
| prev-button   | `{ disabled, decreasePage }`             | Replaces the previous button. Call `decreasePage()` to navigate.     |
| prev-icon     | —                                        | Replaces the default chevron inside the previous button.             |
| page-button   | `{ page, disabled, setPage }`            | Replaces each individual page button. Call `setPage(page)` to navigate. |
| next-button   | `{ disabled, increasePage }`             | Replaces the next button. Call `increasePage()` to navigate.         |
| next-icon     | —                                        | Replaces the default chevron inside the next button.                 |
| last-button   | `{ page, disabled, setPage }`            | Replaces the jump-to-last button. `page` is the last page number.   |
| last-icon     | —                                        | Replaces the default double-chevron inside the last button.          |
| end           | —                                        | Content inserted after all buttons.                                  |
