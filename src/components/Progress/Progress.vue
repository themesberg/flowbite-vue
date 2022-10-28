<template>
  <template v-if="label || (labelProgress && labelPosition === 'outside')">
    <div class="flex justify-between mb-1">
      <span v-show="label || (labelProgress && labelPosition === 'outside')" class="text-base font-medium" :class="outsideLabelClasses">{{ label }}</span>
      <span v-if="labelProgress && labelPosition === 'outside'" class="text-sm font-medium" :class="outsideLabelClasses">45%</span>
    </div>
  </template>
  <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700" :class="outerClasses">
    <div class="rounded-full font-medium text-blue-100 text-center p-0.5" :class="innerClasses" style="width: 45%">
      <template v-if="labelProgress && labelPosition === 'inside'">
        {{ progress }}%
      </template>
    </div>
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
    default: 'rate',
  },
  labelPosition: {
    type: String, // 'inside' | 'outside' | 'none'
    default: 'inside',
  },
  labelProgress: {
    type: Boolean,
    default: true,
  },
  progress: {
    type: Number,
    default: 55,
  },
  size: {
    type: String, // 'sm' | 'md' | 'lg' | 'xl'
    default: 'md',
  },
})

const { innerClasses, outerClasses, outsideLabelClasses } = useProgressClasses(toRefs(props))

</script>
