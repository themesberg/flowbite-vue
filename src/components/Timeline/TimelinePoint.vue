<template>
  <div
    :class="timelineClasses"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import classNames from 'classnames'

const slots = useSlots()

const hasSlot = computed(() => {
  return !!slots.default
})

const defaultClasses = 'absolute rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'
const noIconClasses = 'mt-1.5 w-3 h-3 bg-gray-200'
const iconContainerClasses = 'w-6 h-6 -left-3 flex justify-center items-center bg-blue-200 ring-8 ring-white dark:ring-gray-900'

const timelineClasses = classNames(defaultClasses, hasSlot.value ? iconContainerClasses : noIconClasses)
</script>
