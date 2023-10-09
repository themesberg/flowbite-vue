<template>
  <th
    scope="col"
    :class="tableHeadCellClasses"
  >
    <slot />
  </th>
</template>

<script lang="ts" setup>
import { useTableHeadCellClasses } from './composables/useTableHeadCellClasses'

const { tableHeadCellClasses } = useTableHeadCellClasses()
</script>
