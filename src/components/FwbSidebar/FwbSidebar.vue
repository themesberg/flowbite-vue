<template>
  <aside
    v-bind="$attrs"
    :class="wrapperClasses"
    aria-label="Sidebar"
  >
    <div class="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
      <div class="space-y-2 font-medium">
        <slot />
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'
import { useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false,
})
const attrs = useAttrs()
const wrapperClasses = twMerge('absolute top-0 left-0 z-40 w-64 h-screen transition-transform', attrs.class as string)
</script>
