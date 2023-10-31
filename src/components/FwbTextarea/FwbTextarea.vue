<template>
  <label>
    <span :class="labelClasses">{{ label }}</span>
    <span :class="wrapperClasses">
      <textarea
        v-model="model"
        :rows="rows"
        :class="textareaClasses"
        :placeholder="placeholder"
        :form="form"
        :disabled="disabled"
        :maxlength="maxlength"
        :minlength="minlength"
        :required="required"
        :readonly="readonly"
        :wrap="wrap"
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
  modelValue?: string;
  label?: string;
  rows?: number;
  custom?: boolean;
  placeholder?: string;
  disabled?: boolean;
  form?: string;
  maxlength?: string | number;
  minlength?: string | number;
  required?: boolean;
  readonly?: boolean;
  /** Docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#wrap */
  wrap?: 'hard' | 'soft' | 'off';
}

const props = withDefaults(defineProps<TextareaProps>(), {
  modelValue: '',
  label: 'Your message',
  rows: 4,
  custom: false,
  placeholder: 'Write your message here...',
  form: undefined,
  maxlength: '',
  minlength: '',
  wrap: 'soft',
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

const {
  textareaClasses,
  labelClasses,
  wrapperClasses,
  footerClasses,
} = useTextareaClasses(props.custom)
</script>
