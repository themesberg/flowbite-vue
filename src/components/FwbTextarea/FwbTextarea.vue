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
        :maxlength="maxLength"
        :minlength="minLength"
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
import { useTextareaClasses } from './composables/useTextareaClasses'

interface TextareaProps {
  modelValue?: string
  label?: string
  rows?: number
  custom?: boolean
  placeholder?: string
  maxLength?: number,
  minLength?: number,
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
  maxLength: 10000,
  minLength: 0,
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
