<template>
  <div>
    <label for="default-range" :class="labelClasses">Default range</label>
    <input :step="steps" v-model="model" id="default-range" type="range" :class="rangeClasses">
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRangeClasses } from './composables/useRangeClasses'

interface RangeProps {
  modelValue?: number;
  label?: '';
  disabled?: boolean;
  size?: string;
  steps?: number;
}

const props = withDefaults(defineProps<RangeProps>(), {
  modelValue: 50,
  label: '',
  disabled: false,
  size: 'md',
  steps: 1,
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

const { rangeClasses, labelClasses } = useRangeClasses()
</script>
