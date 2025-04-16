<template>
  <div :class="wrapperClass">
    <label
      v-if="label"
      :class="labelClass"
    >{{ label }}</label>
    <div :class="inputWrapperClass">
      <div
        v-if="$slots.prefix"
        class="ms-2 flex shrink-0 items-center"
      >
        <slot name="prefix" />
      </div>
      <input
        v-bind="$attrs"
        v-model="model"
        :autocomplete="autocomplete"
        :class="inputClass"
        :disabled="disabled"
        :required="required"
        :type="type"
      >
      <div
        v-if="$slots.suffix"
        class="me-2 flex shrink-0 items-center"
      >
        <slot name="suffix" />
      </div>
    </div>
    <p
      v-if="$slots.validationMessage"
      :class="validationMessageClass"
    >
      <slot name="validationMessage" />
    </p>
    <p
      v-if="$slots.helper"
      :class="helperMessageClass"
    >
      <slot name="helper" />
    </p>
  </div>
</template>

<script lang="ts" setup>

import { toRefs } from 'vue'

import { useInputClasses } from './composables/useInputClasses'

import type { CommonAutoFill, InputSize, InputType, ValidationStatus } from './types'

interface InputProps {
  autocomplete?: CommonAutoFill
  class?: string | Record<string, boolean>
  disabled?: boolean
  inputClass?: string | Record<string, boolean>
  label?: string
  labelClass?: string | Record<string, boolean>
  modelValue?: string | number
  required?: boolean
  size?: InputSize
  type?: InputType
  validationStatus?: ValidationStatus
  wrapperClass?: string | Record<string, boolean>
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<InputProps>(), {
  autocomplete: 'off',
  class: '',
  disabled: false,
  inputClass: '',
  label: '',
  labelClass: '',
  modelValue: '',
  required: false,
  size: 'md',
  type: 'text',
  validationStatus: undefined,
  wrapperClass: '',
})

const model = defineModel({ type: String })

const {
  wrapperClass,
  helperMessageClass,
  validationMessageClass,
  labelClass,
  inputWrapperClass,
  inputClass,
} = useInputClasses(toRefs(props))
</script>
