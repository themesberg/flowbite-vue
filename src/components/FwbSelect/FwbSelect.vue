<template>
  <label>
    <span
      v-if="label"
      :class="labelClasses"
    >
      {{ label }}
    </span>
    <select
      v-model="model"
      :disabled="disabled"
      :class="selectClasses"
    >
      <option
        disabled
        selected
        value=""
      >
        {{ placeholder }}
      </option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </label>
</template>

<script lang="ts" setup>
import type { InputSize } from './../FwbInput/types'
import type { OptionsType } from './types'
import { computed } from 'vue'
import { useVModel } from '@vueuse/core'
import { twMerge } from 'tailwind-merge'

interface InputProps {
  modelValue?: string;
  label?: string;
  options?: OptionsType[];
  placeholder?: string;
  disabled?: boolean;
  underline?: boolean;
  size?: InputSize;
}
const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  label: '',
  options: () => [],
  placeholder: 'Please select one',
  disabled: false,
  underline: false,
  size: 'md',
})
const emit = defineEmits(['update:modelValue'])

const model = useVModel(props, 'modelValue', emit)

// LABEL
const defaultLabelClasses = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'

// SELECT
const defaultSelectClasses = 'w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
const disabledSelectClasses = 'cursor-not-allowed bg-gray-100'
const underlineSelectClasses = 'bg-transparent dark:bg-transparent border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
const selectSizeClasses: Record<InputSize, string> = {
  lg: 'p-4',
  md: 'p-2.5 text-sm',
  sm: 'p-2 text-sm',
}

const selectClasses = computed(() => {
  return twMerge(
    defaultSelectClasses,
    selectSizeClasses[props.size],
    props.disabled && disabledSelectClasses,
    props.underline ? underlineSelectClasses : 'border border-gray-300 rounded-lg',
  )
})

const labelClasses = computed(() => {
  return defaultLabelClasses
})
</script>
