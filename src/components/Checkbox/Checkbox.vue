<template>
  <label :class="props.labelClass" class="flex gap-3 items-center justify-start">
    <input v-model="model" type="checkbox" :disabled="disabled" :class="[checkboxClasses, props.classes]" />
    <span v-if="label" :class="labelClasses">{{ label }}</span>
    <slot />
  </label>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useCheckboxClasses } from './composables/useCheckboxClasses'

interface CheckboxProps {
  modelValue?: boolean,
  label?: string,
  disabled?: boolean,
  classes?: string,
  labelClass?: string,
}
const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  label: '',
  disabled: false,
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

const { checkboxClasses, labelClasses } = useCheckboxClasses()
</script>