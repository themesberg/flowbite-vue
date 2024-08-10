<template>
  <label>
    <span :class="labelClasses">{{ label }}</span>
    <span :class="wrapperClasses">
      <textarea
        v-model="model"
        v-bind="$attrs"
        :class="textareaClasses"
        :rows="rows"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
      />
      <span
        v-if="$slots.footer"
        :class="footerClasses"
      >
        <slot name="footer" />
      </span>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CommonAutoFill } from './../FwbInput/types'
import { useTextareaClasses } from './composables/useTextareaClasses'

interface TextareaProps {
  modelValue?: string
  label?: string
  rows?: number
  custom?: boolean
  placeholder?: string
  autocomplete?: CommonAutoFill
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<TextareaProps>(), {
  modelValue: '',
  label: 'Your message',
  rows: 4,
  custom: false,
  placeholder: 'Write your message here...',
  autocomplete: 'off',
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

const { textareaClasses, labelClasses, wrapperClasses, footerClasses } = useTextareaClasses(props.custom)
</script>
