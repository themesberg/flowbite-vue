<template>
  <label :class="[labelClasses, props.labelClass]">
    <input :disabled="disabled" v-model="model" type="checkbox" class="sr-only peer" />
    <span :class="[toggleClasses, toggleSize, toggleColor, props.classes]"></span>
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
  classes?: string;
  labelClass?: string;
}

const props = withDefaults(defineProps<ToggleProps>(), {
  modelValue: false,
  label: '',
  color: '',
  size: 'md',
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

const { labelClasses, toggleSize, toggleClasses, toggleColor, toggleBallClasses } = useToggleClasses(toRefs(props))
</script>
