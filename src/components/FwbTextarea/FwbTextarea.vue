<template>
  <div :class="wrapperClass">
    <label
      v-if="label"
      :for="textareaId"
      :class="labelClass"
    >{{ label }}</label>
    <div :class="textareaWrapperClass">
      <textarea
        v-bind="textareaAttributes"
        v-model="model"
        :aria-describedby="ariaDescribedby"
        :aria-invalid="validationStatus === 'error' ? true : undefined"
        :autocomplete="autocomplete"
        :class="textareaClass"
        :disabled="disabled"
        :required="required"
        :rows="rows"
      />
      <div
        v-if="$slots.footer"
        :class="footerClass"
      >
        <slot name="footer" />
      </div>
    </div>
    <p
      v-if="$slots.validationMessage"
      :id="validationMessageId"
      :class="validationMessageClass"
    >
      <slot name="validationMessage" />
    </p>
    <p
      v-if="$slots.helper"
      :id="helperId"
      :class="helperMessageClass"
    >
      <slot name="helper" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

import { useTextareaClasses } from './composables/useTextareaClasses'

import type { Autocomplete, FormElementSize, ValidationStatus } from '@/types/form'

import { useElementAttributes } from '@/composables/useElementAttributes'
import { useFormFieldIds } from '@/composables/useFormFieldIds'

interface TextareaProps {
  autocomplete?: Autocomplete
  class?: string | Record<string, boolean>
  disabled?: boolean
  footerClass?: string | Record<string, boolean>
  label?: string
  labelClass?: string | Record<string, boolean>
  required?: boolean
  rows?: number
  size?: FormElementSize
  textareaClass?: string | Record<string, boolean>
  validationStatus?: ValidationStatus
  wrapperClass?: string | Record<string, boolean>
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<TextareaProps>(), {
  autocomplete: 'off',
  class: '',
  disabled: false,
  footerClass: '',
  label: '',
  labelClass: '',
  required: false,
  rows: 4,
  size: 'md',
  textareaClass: '',
  validationStatus: undefined,
  wrapperClass: '',
})

const model = defineModel<string>({ default: '' })

const { elementId: textareaId, elementAttributes: textareaAttributes } = useElementAttributes()

const { ariaDescribedby, helperId, validationMessageId } = useFormFieldIds(textareaId)

const {
  footerClass,
  helperMessageClass,
  labelClass,
  textareaClass,
  textareaWrapperClass,
  validationMessageClass,
  wrapperClass,
} = useTextareaClasses(toRefs(props))
</script>
