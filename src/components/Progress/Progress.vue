<template>
  <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700" :class="outerClass">
    <div class="rounded-full" :class="wrapperClasses" style="width: 45%"></div>
  </div>
</template>
<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import type { PropType } from 'vue'
import { useProgressClasses } from './composables/useProgressClasses'

const props = defineProps({
  color: {
    type: String, // 'dark' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple'
    default: 'pink',
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
    default: 'lg',
  },
})

const { wrapperClasses, outerClass } = useProgressClasses(toRefs(props))

</script>
