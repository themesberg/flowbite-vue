<template>
  <label>
    <div :class="labelClasses">{{ label }}</div>
    <div :class="wrapperClasses">
      <textarea v-model="model" :rows="rows" :class="[textareaClasses, props.classes]" :placeholder="placeholder"></textarea>
      <div v-if="$slots.footer" :class="footerClasses">
        <slot name="footer"></slot>
      </div>
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTextareaClasses } from './composables/useTextareaClasses'

interface TextareaProps {
  modelValue?: string;
  label?: string;
  rows?: number;
  custom?: boolean;
  placeholder?: string;
  classes?: string;
}

const props = withDefaults(defineProps<TextareaProps>(), {
  value: '',
  label: 'Your message',
  rows: 4,
  custom: false,
  placeholder: 'Write your message here...',
  classes: '',
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

const {
  textareaClasses,
  labelClasses, 
  wrapperClasses,
  footerClasses,
} = useTextareaClasses(props.custom)
</script>
