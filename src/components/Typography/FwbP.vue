<template>
  <p :class="componentClasses">
    <slot />
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMergeClasses } from '@/composables/useMergeClasses'

interface ParagraphProps {
  class?: string
}

const props = withDefaults(defineProps<ParagraphProps>(), {
  class: '',
})

const defaultClasses = 'mb-3 last:mb-0 text-gray-900 dark:text-white leading-normal'

const componentClasses = computed(() => useMergeClasses([
  defaultClasses,
  props.class,
]))
</script>
