<template>
  <div class="flex gap-3 items-center">
    <input v-model="model" type="checkbox" :disabled="disabled" :class="checkboxClasses" />
    <label v-if="label" :class="labelClasses">{{ label }}</label>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useCheckboxClasses } from './composables/useCheckboxClasses'

interface CheckboxProps {
  modelValue?: boolean,
  label?: string,
  disabled?: boolean,
}
const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  label: '',
  disabled: false,
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