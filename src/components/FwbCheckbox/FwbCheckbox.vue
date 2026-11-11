<template>
  <div :class="wrapperClass">
    <label class="flex items-center">
      <input
        v-bind="inputAttributes"
        v-model="model"
        :aria-describedby="ariaDescribedby"
        :disabled="disabled"
        class="shrink-0"
        :class="checkboxClass"
        type="checkbox"
      >
      <span
        v-if="label || $slots.default"
        :class="labelTextClass"
      >
        <slot>{{ label }}</slot>
      </span>
    </label>
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
import { computed, toRefs } from 'vue'

import { useCheckboxClasses } from './composables/useCheckboxClasses'

import type { CheckboxProps } from './types'

import { useElementAttributes } from '@/composables/useElementAttributes'
import { useFormFieldIds } from '@/composables/useFormFieldIds'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<CheckboxProps>(), {
  class: '',
  disabled: false,
  label: '',
  labelClass: '',
  validationMessage: undefined,
  validationStatus: undefined,
  wrapperClass: '',
})

const model = defineModel<boolean | (string | number | boolean | object)[]>({ default: false })

const { elementId: checkboxId, elementAttributes: checkboxAttributes } = useElementAttributes()
const { ariaDescribedby, helperId, validationMessageId } = useFormFieldIds(checkboxId, computed(() => props.validationMessage))

const inputAttributes = computed(() => ({
  ...checkboxAttributes.value,
  ...(props.validationStatus === 'error' ? { 'aria-invalid': true } : {}),
}))

const {
  checkboxClass,
  helperMessageClass,
  labelTextClass,
  validationMessageClass,
  wrapperClass,
} = useCheckboxClasses(toRefs(props))
</script>

<style>
/* The checkmark and dash as images: an SVG data-URI is too long for a utility. */
.fwb-checkbox:checked,
.fwb-checkbox:indeterminate {
  background-position: center;
  background-repeat: no-repeat;
  background-size: 0.75em 0.75em;
  print-color-adjust: exact;
}
.fwb-checkbox:checked {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M5 11.917 9.724 16.5 19 7.5'/%3e%3c/svg%3e");
}
.fwb-checkbox:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-width='3' d='M3 8h10'/%3e%3c/svg%3e");
}
</style>
