<template>
  <div>
    <label for="default-range" :class="[labelClasses, props.labelClass]">{{ label }}</label>
    <input :step="steps" v-model="model" :min="min" :max="max" :disabled="disabled" type="range" :class="[rangeClasses, props.classes]">
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import { useRangeClasses } from './composables/useRangeClasses'
import type { InputSize } from '@/components/Input/types'

interface RangeProps {
  modelValue?: string;
  label?: string;
  disabled?: boolean;
  min?: string;
  max?: string;
  size?: InputSize;
  steps?: string;
  classes?: string;
  labelClass?: string;
}

const props = withDefaults(defineProps<RangeProps>(), {
  modelValue: '50',
  label: 'Range slider',
  disabled: false,
  min: '0',
  max: '100',
  size: 'md',
  steps: '1',
  classes: '',
  labelClass: '',
})

const emit = defineEmits(['update:modelValue'])
const model = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})

const { rangeClasses, labelClasses } = useRangeClasses(toRefs(props))
</script>
