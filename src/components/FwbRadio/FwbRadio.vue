<template>
  <label class="flex w-full items-center">
    <input
      v-model="model"
      type="radio"
      :disabled="disabled"
      :name="name"
      :value="value"
      :class="radioClasses"
    >
    <span :class="labelClasses">{{ label }}</span>
    <slot />
  </label>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'

interface RadioProps {
  modelValue?: string
  name?: string
  value?: string
  label?: string
  disabled?: boolean
}
const radioDefaultClasses = 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
const radioLabelClasses = 'm-2 mr-0 text-sm font-medium text-gray-900 dark:text-gray-300'

const props = withDefaults(defineProps<RadioProps>(), {
  modelValue: '',
  name: '',
  value: '',
  label: '',
  disabled: false,
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
const radioClasses = computed(() => {
  return radioDefaultClasses
})

const labelClasses = computed(() => {
  return twMerge(radioLabelClasses, props.disabled && 'text-gray-400 dark:text-gray-500')
})
</script>
