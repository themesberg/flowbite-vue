<template>
  <div>
    <label
      :class="labelClasses"
      for="default-range"
    >{{ label }}</label>
    <input
      v-model.number="model"
      :class="rangeClasses"
      :disabled="disabled"
      :max="max"
      :min="min"
      :step="steps"
      type="range"
    >
  </div>
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
