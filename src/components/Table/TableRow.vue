<template>
  <tr :class="tableRowClasses">
    <slot></slot>
  </tr>
</template>
<script lang="ts" setup>
import { useTableRowClasses } from '@/components/Table/composables/useTableRowClasses'

const { tableRowClasses } = useTableRowClasses()
</script>
