<script setup>
import FwbPaginationExample from './pagination/examples/FwbPaginationExample.vue'
import FwbPaginationExampleNavigation from './pagination/examples/FwbPaginationExampleNavigation.vue'
import FwbPaginationExampleTable from './pagination/examples/FwbPaginationExampleTable.vue'
import FwbPaginationExampleWithCustomSlice from './pagination/examples/FwbPaginationExampleWithCustomSlice.vue'
import FwbPaginationExampleWithCustomText from './pagination/examples/FwbPaginationExampleWithCustomText.vue'
import FwbPaginationExampleWithIcons from './pagination/examples/FwbPaginationExampleWithIcons.vue'
</script>
# Vue Pagination - Flowbite

## Default pagination

<fwb-pagination-example />
```vue
<template>
  <fwb-pagination v-model="currentPage" :total-pages="100" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbPagination } from 'flowbite-vue'

const currentPage = ref<number>(1)
</script>
```

## Default with custom length
You can use your own pages count in the row by passing props: `slice-length`
This prop means left side and right side pages row slicing. In the example it has value `4`. So row length will be 4 + 1 + 4 pages - 9 pages.

<fwb-pagination-example-with-custom-slice />
```vue
<template>
  <fwb-pagination
    v-model="currentPage"
    :slice-length="4"
    :total-pages="100"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbPagination } from 'flowbite-vue'

const currentPage = ref<number>(1)
</script>
```

## Pagination with navigation layout

<fwb-pagination-example-navigation />
```vue
<template>
  <fwb-pagination
    v-model="currentPage"
    :layout="'navigation'"
    :total-pages="100"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbPagination } from 'flowbite-vue'

const currentPage = ref<number>(1)
</script>
```

## Pagination with table layout
To use that layout you have to pass required props:
- `per-page`: it's items count displayed on each page.
- `total-items`: it's the total items count.

And there you don't need to use `total-pages` prop.

<fwb-pagination-example-table />
```vue
<template>
  <fwb-pagination
    v-model="currentPage"
    :layout="'table'"
    :per-page="10"
    :total-items="998"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbPagination } from 'flowbite-vue'

const currentPage = ref<number>(1)
</script>
```

## Pagination with icons

<fwb-pagination-example-with-icons />
```vue
<template>
  <fwb-pagination
    v-model="currentPage"
    :total-pages="100"
    show-icons
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbPagination } from 'flowbite-vue'

const currentPage = ref<number>(1)
</script>
```

## Pagination with custom labels

<fwb-pagination-example-with-custom-text />
```vue
<template>
  <fwb-pagination
    v-model="currentPage"
    :total-pages="100"
    label-next=">>>"
    label-previous="<<<"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbPagination } from 'flowbite-vue'

const currentPage = ref<number>(1)
</script>
```
