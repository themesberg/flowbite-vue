<template>
  <td :class="tableCellClasses">
    <slot />
  </td>
</template>

<script lang="ts" setup>
import { useTableCellClasses } from './composables/useTableCellClasses'

const { tableCellClasses } = useTableCellClasses()
</script>
