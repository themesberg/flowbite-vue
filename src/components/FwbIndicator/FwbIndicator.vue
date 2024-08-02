<template>
    <span :class="indicatorClasses">
        <slot></slot>
    </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMergeClasses } from '@/composables/useMergeClasses'

type IndıcatorType = 'default' | 'dark' | 'blue' | 'green' | 'red' | 'indigo' | 'purple' | 'yellow' | 'teal'

interface IIndicatorProps {
  type?: IndıcatorType
  class?: string
}

const props = withDefaults(defineProps<IIndicatorProps>(), {
  type: 'default',
  class: '',
})

const defaultIndicatorClasses = 'w-3 h-3 rounded-full'
const indicatorTypeClasses = {
  default: 'bg-gray-200',
  dark: 'bg-gray-900 dark:bg-gray-700',
  blue: 'bg-blue-600',
  green: 'bg-green-500',
  red: 'bg-red-500',
  indigo: 'bg-indigo-500',
  purple: 'bg-purple-500',
  yellow: 'bg-yellow-300',
  teal: 'bg-teal-500',
}

const indicatorClasses = computed(() => useMergeClasses([
  defaultIndicatorClasses,
  indicatorTypeClasses[props.type],
  props.class,
]))

</script>
