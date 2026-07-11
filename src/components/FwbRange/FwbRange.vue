<template>
  <div :class="wrapperClass">
    <label
      v-if="label"
      :for="rangeId"
      :class="labelClass"
    >{{ label }}</label>
    <input
      v-bind="rangeAttributes"
      v-model="model"
      :aria-describedby="ariaDescribedby"
      :aria-invalid="validationStatus === 'error' ? true : undefined"
      :class="rangeClass"
      :disabled="disabled"
      :max="max"
      :min="min"
      :step="steps"
      type="range"
    >
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

import { useRangeClasses } from './composables/useRangeClasses'

import type { RangeProps } from './types'

import { useElementAttributes } from '@/composables/useElementAttributes'
import { useFormFieldIds } from '@/composables/useFormFieldIds'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<RangeProps>(), {
  class: '',
  disabled: false,
  label: '',
  labelClass: '',
  max: 100,
  min: 0,
  size: 'md',
  steps: 1,
  validationMessage: undefined,
  validationStatus: undefined,
  wrapperClass: '',
})

const model = defineModel<number>({ default: 50 })

const { elementId: rangeId, elementAttributes: rangeAttributes } = useElementAttributes()
const { ariaDescribedby, helperId, validationMessageId } = useFormFieldIds(rangeId, computed(() => props.validationMessage))

const {
  helperMessageClass,
  labelClass,
  rangeClass,
  validationMessageClass,
  wrapperClass,
} = useRangeClasses(toRefs(props))
</script>

<style lang="css">
.fwb-range-input::-moz-range-thumb {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: var(--fwb-range-thumb-color, var(--color-blue-500));
  border: none;
  border-radius: 9999px;
}
.fwb-range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: var(--fwb-range-thumb-color, var(--color-blue-500));
  border: none;
  border-radius: 9999px;
}
</style>
