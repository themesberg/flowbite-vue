<script setup>
import PaginationExample from './pagination/examples/PaginationExample.vue';
import PaginationNavigationExample from './pagination/examples/PaginationNavigationExample.vue';
import PaginationTableExample from './pagination/examples/PaginationTableExample.vue';
import PaginationWithIconsExample from './pagination/examples/PaginationWithIconsExample.vue';
import PaginationWithCustomTextExample from './pagination/examples/PaginationWithCustomTextExample.vue';
import PaginationWithCustomSlice from './pagination/examples/PaginationWithCustomSlice.vue';
</script>
# Vue Pagination Component - Flowbite

## Default pagination

```vue
<script setup>
import { Pagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
<template>
  <Pagination v-model="currentPage" :total-pages="100"></Pagination>
</template>
```
<PaginationExample />

## Default with custom length
You can use your own pages count in the row by passing props: `slice-length`
This prop means left side and right side pages row slicing. In the example it has value `4`. So row length will be 4 + 1 + 4 pages - 9 pages.

```vue
<script setup>
import { Pagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
<template>
  <Pagination v-model="currentPage" :total-pages="100" :slice-length="4"></Pagination>
</template>
```

<PaginationWithCustomSlice />

## Pagination with navigation layout

```vue
<script setup>
import { Pagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
<template>
  <div class="flex items-center justify-center text-center">
    <Pagination v-model="currentPage" :total-pages="100" :layout="'navigation'"></Pagination>
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
import { Pagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
<template>
  <div class="flex items-center justify-center text-center">
    <Pagination
        v-model="currentPage"
        :layout="'table'"
        :per-page="10"
        :total-items="998"
    ></Pagination>
  </div>
</template>
```

<PaginationTableExample />

## Pagination with icons

```vue
<script setup>
import { Pagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
<template>
  <Pagination v-model="currentPage" :total-pages="100" show-icons></Pagination>
</template>
```

<PaginationWithIconsExample />

## Pagination with custom labels

```vue
<script setup>
import { Pagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
</script>
<template>
  <Pagination v-model="currentPage" :total-pages="100" previous-label="<<<" next-label=">>>"></Pagination>
</template>
```
<PaginationWithCustomTextExample />
