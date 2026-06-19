<template>
  <div :class="wrapperClass">
    <label class="flex items-center">
      <input
        v-bind="checkboxAttributes"
        v-model="model"
        :aria-describedby="ariaDescribedby"
        :aria-invalid="validationStatus === 'error' ? true : undefined"
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

<script lang="ts" setup>
import { toRefs } from 'vue'

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
  validationStatus: undefined,
  wrapperClass: '',
})

const model = defineModel<boolean | (string | number | boolean | object)[]>({ default: false })

const { elementId: checkboxId, elementAttributes: checkboxAttributes } = useElementAttributes()
const { ariaDescribedby, helperId, validationMessageId } = useFormFieldIds(checkboxId)

const {
  checkboxClass,
  helperMessageClass,
  labelTextClass,
  validationMessageClass,
  wrapperClass,
} = useCheckboxClasses(toRefs(props))
</script>
