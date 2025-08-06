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
        class="ms-2 flex shrink-0 items-center"
      >
        <slot name="prefix" />
      </div>
      <input
        v-bind="inputAttributes"
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

import { useInputAttributes } from './composables/useInputAttributes'
import { useInputClasses } from './composables/useInputClasses'

import type { InputProps } from './types'

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
  required: false,
  size: 'md',
  type: 'text',
  validationStatus: undefined,
  wrapperClass: '',
})

const model = defineModel<string | number>({ default: '' })

const {
  wrapperClass,
  helperMessageClass,
  validationMessageClass,
  labelClass,
  inputWrapperClass,
  inputClass,
} = useInputClasses(toRefs(props))

const { inputId, inputAttributes } = useInputAttributes(props)
</script>
