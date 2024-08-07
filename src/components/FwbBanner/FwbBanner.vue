<template>
  <div
    :class="bannerClasses"
    tabindex="-1"
    role="banner"
    aria-label="Banner"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMergeClasses } from '@/composables/useMergeClasses'

type BannerPosition = 'top' | 'bottom'

type BannerProps = {
    class?: string
    position?: BannerPosition
}

const props: BannerProps = withDefaults(defineProps<BannerProps>(), {
  class: '',
  position: 'top',
})

const defaultBannerClass = 'fixed start-0 z-50 flex justify-between w-full p-4 bg-gray-50 dark:bg-gray-700 dark:border-gray-600'
const positionDefaultClass = 'top-0 border-b border-gray-200 dark:border-gray-600'
const positionBottomClass = 'bottom-0 border-t border-gray-200 dark:border-gray-600'

const bannerClasses = computed(() => useMergeClasses([
  defaultBannerClass,
  props.position === 'top' ? positionDefaultClass : positionBottomClass,
  props.class ?? '',
]))

</script>
