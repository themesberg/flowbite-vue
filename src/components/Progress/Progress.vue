<template>
  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
    <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
  </div>
</template>
<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import type { PropType } from 'vue'
import { useProgressClasses } from './composables/useProgressClasses'

const props = defineProps({
  color: {
    type: String, // 'dark' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple'
    default: 'blue',
  },
  label: {
    type: String,
    default: 'progressbar',
  },
  labelPosition: {
    type: String, // 'inside' | 'outside' | 'none'
    default: 'none',
  },
  labelProgress: {
    type: Boolean,
    default: false,
  },
  progress: {
    type: Number,
    default: 0,
  },
  size: {
    type: String, // 'sm' | 'md' | 'lg' | 'xl'
    default: 'md',
  },
})

const { wrapperClasses } = useProgressClasses(toRefs(props))

</script>
