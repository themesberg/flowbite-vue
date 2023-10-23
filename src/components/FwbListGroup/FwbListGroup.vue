<template>
  <ul :class="containerClasses">
    <slot />
  </ul>
</template>

<script lang="ts" setup>
import { useListGroupClasses } from './composables/useListGroupClasses'

const { containerClasses } = useListGroupClasses()
</script>
