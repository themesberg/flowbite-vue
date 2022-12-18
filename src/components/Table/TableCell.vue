<template>
  <td :class="tableCellClasses">
    <slot></slot>
  </td>
</template>
<script lang="ts" setup>

import { useTableCellClasses } from '@/components/Table/composables/useTableCellClasses'

const { tableCellClasses } = useTableCellClasses()
</script>
