<template>
  <div :class="wrapperClasses">
    <div :class="pointClasses">
      <slot />
    </div>
    <div :class="borderClasses" />
  </div>
</template>

<script lang="ts" setup>
import classNames from 'classnames'
import { computed, inject, useSlots } from 'vue'

const slots = useSlots()
const hasSlot = computed(() => !!slots.default)
const isHorizontal = inject('horizontal')
const wrapperClasses = computed(() => classNames(isHorizontal ? 'flex items-center' : ''))
const defaultBorderClasses = 'h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex'
const borderClasses = computed(() => classNames(defaultBorderClasses, { 'sm:hidden hidden': !isHorizontal }))

const pointClasses = computed(() => {
  const defaultClasses = 'absolute rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'

  const verticalWithNoIconClasses = 'mt-1.5 w-3 h-3 bg-gray-200'
  const verticalWithIconClasses = 'mt-1.5 w-6 h-6 -left-3 flex justify-center items-center bg-blue-200 ring-8 ring-white dark:ring-gray-900'
  const horizontalWithNoIconClasses = 'w-3 h-3 bg-gray-200'
  const horizontalWithIconClasses = 'w-6 h-6 -left-3 flex justify-center items-center bg-blue-200 ring-8 ring-white dark:ring-gray-900'

  const isVerticalWithNoIcon = !isHorizontal && !hasSlot.value
  const isVerticalWithIcon = !isHorizontal && hasSlot.value
  const isHorizontalWithNoIcon = isHorizontal && !hasSlot.value
  const isHorizontalWithIcon = isHorizontal && hasSlot.value

  return classNames(
    defaultClasses,
    {
      [verticalWithNoIconClasses]: isVerticalWithNoIcon,
      [verticalWithIconClasses]: isVerticalWithIcon,
      [horizontalWithNoIconClasses]: isHorizontalWithNoIcon,
      [horizontalWithIconClasses]: isHorizontalWithIcon,
    },
  )
})
</script>
