<script setup>
import PaginationExample from './pagination/examples/PaginationExample.vue';
import PaginationNavigationExample from './pagination/examples/PaginationNavigationExample.vue';
import PaginationTableExample from './pagination/examples/PaginationTableExample.vue';
import PaginationWithIconsExample from './pagination/examples/PaginationWithIconsExample.vue';
import PaginationWithCustomTextExample from './pagination/examples/PaginationWithCustomTextExample.vue';
</script>
# Vue Pagination Component - Flowbite

## Default pagination

```vue
<script setup>
import { Pagination } from 'flowbite-vue'
</script>
<template>
  <Pagination></Pagination>
</template>
```

<PaginationExample />

## Pagination with navigation layout

```vue
<script setup>
import { Pagination } from 'flowbite-vue'
</script>
<template>
  <Pagination layout="navigation"></Pagination>
</template>
```

<PaginationNavigationExample />

## Pagination with table layout

```vue
<script setup>
import { Pagination } from 'flowbite-vue'
</script>
<template>
  <Pagination layout="table"></Pagination>
</template>
```

<PaginationWithIconsExample />

## Pagination with icons

```vue
<script setup>
import { Pagination } from 'flowbite-vue'
</script>
<template>
  <Pagination></Pagination>
</template>
```

<PaginationWithCustomTextExample />

## Pagination with custom labels

```vue
<script setup>
import { Pagination } from 'flowbite-vue'
</script>
<template>
  <Pagination></Pagination>
</template>
```
