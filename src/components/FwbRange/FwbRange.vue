<template>
  <label class="flex flex-col">
    <span
      :class="labelClasses"
    >{{ label }}</span>
    <input
      v-model="model"
      :step="steps"
      :min="min"
      :max="max"
      :disabled="disabled"
      type="range"
      :class="rangeClasses"
    >
  </label>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'

import { useRangeClasses } from './composables/useRangeClasses'

import type { InputSize } from '@/components/FwbInput/types'

interface RangeProps {
  disabled?: boolean
  label?: string
  max?: number
  min?: number
  modelValue?: number
  size?: InputSize
  steps?: number
}

const props = withDefaults(defineProps<RangeProps>(), {
  disabled: false,
  label: 'Range slider',
  max: 100,
  min: 0,
  modelValue: 50,
  size: 'md',
  steps: 1,
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get () {
    return props.modelValue
  },
  set (val) {
    emit('update:modelValue', val)
  },
})

const { rangeClasses, labelClasses } = useRangeClasses(toRefs(props))
</script>

<style scoped>
input[type="range"].range-lg::-moz-range-thumb {
  height: 1.5rem;
  width: 1.5rem;
}
input[type="range"].range-sm::-moz-range-thumb {
  height: 1rem;
  width: 1rem;
}
</style>
