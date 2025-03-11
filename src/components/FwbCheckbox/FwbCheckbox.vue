<template>
  <label class="flex items-center justify-start gap-3">
    <input
      v-model="model"
      :class="checkboxClasses"
      :disabled="disabled"
      type="checkbox"
    >
    <span
      v-if="label"
      :class="labelClasses"
    >{{ label }}</span>
    <slot />
  </label>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { useCheckboxClasses } from './composables/useCheckboxClasses'

interface CheckboxProps {
  disabled?: boolean
  label?: string
  modelValue?: boolean
}
const props = withDefaults(defineProps<CheckboxProps>(), {
  disabled: false,
  label: '',
  modelValue: false,
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

const {
  checkboxClasses,
  labelClasses,
} = useCheckboxClasses()
</script>
