<template>
  <div>
    <label v-if="label" :class="[labelClasses, props.labelClass]">{{ label }}</label>
    <select v-model="model" :disabled="disabled" :class="[selectClasses, underline? underlineClasses: '', props.classes]">
      <option disabled selected value="">{{ placeholder }}</option>
      <option :value="option.value" v-for="(option, index) in options" :key="index">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import type { InputSize } from '@/components/Input/types'
import type { OptionsType } from '@/components/Select/types'
import { toRefs, computed } from 'vue'
import { useSelectClasses } from '@/components/Select/composables/useSelectClasses'

interface InputProps {
  modelValue?: string;
  label?: string;
  options?: OptionsType[];
  placeholder?: string;
  disabled?: boolean;
  underline?: boolean;
  size?: InputSize;
  classes?: string;
  labelClass?: string;
}
const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  label: '',
  options: () => [],
  placeholder: 'Please select one',
  disabled: false,
  underline: false,
  size: 'md',
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

const { selectClasses, underlineClasses, labelClasses } = useSelectClasses(toRefs(props))
</script>
