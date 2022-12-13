<template>
  <th scope="col" :class="tableHeadCellClasses">
    <slot></slot>
  </th>
</template>
<script lang="ts" setup>
import { useTableHeadCellClasses } from '@/components/Table/composables/useTableHeadCellClasses'

const { tableHeadCellClasses } = useTableHeadCellClasses()
</script>
