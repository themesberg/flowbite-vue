<template>
  <label class="flex w-[100%] items-center">
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
import { computed } from 'vue'
import { useRadioClasses } from './composables/useRadioClasses'

interface RadioProps {
  modelValue?: string;
  name?: string;
  value?: string;
  label?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<RadioProps>(), {
  value: '',
  name: '',
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

const { radioClasses, labelClasses } = useRadioClasses()
</script>
