<template>
  <li :class="timelineItemClasses">
    <slot />
  </li>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'

const isHorizontal = inject('horizontal', false)

const defaultClasses = 'mb-10'
const horizontalClasses = 'mb-6 sm:mb-0 relative'
const verticalClasses = 'ml-6'
const timelineItemClasses = computed(() => {
  return useMergeClasses([defaultClasses, isHorizontal ? horizontalClasses : verticalClasses])
})
</script>
