<template>
  <div class="flex items-center mt-2 mb-2">
    <input :id="label + name" type="radio" v-model="model" :disabled="disabled" :name="name" :value="value"
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label :for="label + name" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

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
  label: 'Default radio',
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
</script>