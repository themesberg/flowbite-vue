<template>
  <label :class="labelClasses">
    <input :disabled="disabled" v-model="model" type="checkbox" class="sr-only peer" />
    <span :class="[toggleClasses, toggleSize, toggleColor]"></span>
    <span :class="toggleBallClasses">{{ label }}</span>
  </label>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue'
import { useToggleClasses } from './composables/useToggleClasses'
import type { InputSize } from '@/components/Input/types'

interface ToggleProps {
  modelValue?: boolean;
  label?: '';
  color?: '';
  size?: InputSize;
  disabled?: boolean;
}

const props = withDefaults(defineProps<ToggleProps>(), {
  modelValue: false,
  label: '',
  color: '',
  size: 'md',
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

const { labelClasses, toggleSize, toggleClasses, toggleColor, toggleBallClasses } = useToggleClasses(toRefs(props))
</script>
