<template>
  <ul
    v-bind="$attrs"
    :class="wrapperClasses"
  >
    <slot />
  </ul>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue'
import { twMerge } from 'tailwind-merge'

defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs()
const wrapperClasses = twMerge('flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0', attrs.class as string)
</script>
