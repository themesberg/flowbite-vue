<template>
  <label class="flex w-full items-center">
    <input
      v-model="model"
      :class="radioClasses"
      :disabled="disabled"
      :name="name"
      :value="value"
      type="radio"
    >
    <span :class="labelClasses">{{ label }}</span>
    <slot />
  </label>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRadioClasses } from './composables/useRadioClasses'

interface RadioProps {
  disabled?: boolean;
  label?: string;
  modelValue?: string;
  name?: string;
  value?: string;
}

const props = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
  label: '',
  modelValue: '',
  name: '',
  value: '',
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
