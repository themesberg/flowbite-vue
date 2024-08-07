<template>
  <blockquote
    :class="blockquoteClasses"
    :cite="cite"
  >
    <slot />
  </blockquote>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useMergeClasses } from '@/composables/useMergeClasses'

type BlockquoteType = 'default' | 'solid'

interface BlockquoteProps {
  type?: BlockquoteType;
  cite?: string;
  class?: string;
}

const props = withDefaults(defineProps<BlockquoteProps>(), {
  type: 'default',
  cite: '',
  class: '',
})

const defaultBlockquoteClasses = 'font-semibold text-lg italic text-gray-900 dark:text-white'
const solidBlockquoteClasses = 'bg-gray-100 dark:bg-gray-800 border-l-4 border-gray-300 p-4 dark:border-gray-500'

const blockquoteClasses = computed(() => useMergeClasses([
  defaultBlockquoteClasses,
  props.type === 'solid' ? solidBlockquoteClasses : '',
  props.class,
]))

</script>
