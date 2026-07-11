<template>
  <div :class="wrapperClass">
    <label
      v-if="label"
      :for="inputId"
      :class="labelClass"
    >{{ label }}</label>
    <div :class="inputWrapperClass">
      <div
        v-if="$slots.prefix"
        :class="prefixContainerClass"
      >
        <slot name="prefix" />
      </div>
      <input
        v-bind="inputAttributes"
        v-model="model"
        :aria-describedby="ariaDescribedby"
        :aria-invalid="validationStatus === 'error' ? true : undefined"
        :autocomplete="autocomplete"
        :class="inputClass"
        :disabled="disabled"
        :required="required"
        :type="type"
      >
      <div
        v-if="$slots.suffix"
        :class="suffixContainerClass"
      >
        <slot name="suffix" />
      </div>
    </div>
    <p
      v-if="$slots.validationMessage || validationMessage"
      :id="validationMessageId"
      :class="validationMessageClass"
    >
      <slot name="validationMessage">
        {{ validationMessage }}
      </slot>
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

<script lang="ts" setup>

import { Comment, computed, Text, toRefs, useSlots } from 'vue'

import { useInputAttributes } from './composables/useInputAttributes'
import { useInputClasses } from './composables/useInputClasses'

import type { InputProps } from './types'

import { useFormFieldIds } from '@/composables/useFormFieldIds'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<InputProps>(), {
  class: '',
  disabled: false,
  inputClass: '',
  label: '',
  labelClass: '',
  prefixClass: '',
  required: false,
  size: 'md',
  suffixClass: '',
  type: 'text',
  validationMessage: undefined,
  validationStatus: undefined,
  wrapperClass: '',
})

const model = defineModel<string | number>({ default: '' })

const { inputId, inputAttributes } = useInputAttributes()
const slots = useSlots()

const { ariaDescribedby, helperId, validationMessageId } = useFormFieldIds(inputId, computed(() => props.validationMessage))

const isTextSlot = (name: string) => {
  const vnodes = slots[name]?.()
  if (!vnodes?.length) return false
  const meaningful = vnodes.filter(v =>
    v.type !== Comment && !(v.type === Text && !String(v.children).trim()),
  )
  return meaningful.length > 0 && meaningful.every(v => v.type === Text)
}

const prefixIsText = computed(() => isTextSlot('prefix'))
const suffixIsText = computed(() => isTextSlot('suffix'))

const {
  wrapperClass,
  helperMessageClass,
  validationMessageClass,
  labelClass,
  inputWrapperClass,
  inputClass,
  prefixContainerClass,
  suffixContainerClass,
} = useInputClasses({ ...toRefs(props), prefixIsText, suffixIsText })
</script>
