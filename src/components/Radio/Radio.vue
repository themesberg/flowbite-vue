<template>
  <label :class="props.labelClass" class="flex w-[100%] items-center">
    <input type="radio" v-model="model" :disabled="disabled" :name="name" :value="value"
      :class="[radioClasses, props.classes]">
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
  classes?: string;
  labelClass?: string;
}

const props = withDefaults(defineProps<RadioProps>(), {
  value: '',
  name: '',
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

const { radioClasses, labelClasses } = useRadioClasses()
</script>
