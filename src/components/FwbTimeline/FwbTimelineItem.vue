<template>
  <li :class="timelineItemClasses">
    <slot />
  </li>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import classNames from 'classnames'

const isHorizontal = inject('horizontal')

const defaultClasses = 'mb-10'
const horizontalClasses = 'mb-6 sm:mb-0 relative'
const verticalClasses = 'ml-6'
const timelineItemClasses = computed(() => {
  return classNames(defaultClasses, isHorizontal ? horizontalClasses : verticalClasses)
})
</script>
