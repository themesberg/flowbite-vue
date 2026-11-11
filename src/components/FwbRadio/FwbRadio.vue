<template>
  <label :class="wrapperClass">
    <input
      v-bind="inputAttributes"
      v-model="model"
      :disabled="disabled"
      :name="effectiveName || undefined"
      :value="value"
      class="shrink-0"
      :class="radioClass"
      type="radio"
    >
    <span
      v-if="label || $slots.default"
      :class="labelClass"
    >
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed, inject, ref, toRefs } from 'vue'

import { useRadioClasses } from './composables/useRadioClasses'
import { radioGroupNameKey, radioGroupValidationStatusKey, type RadioProps } from './types'

import { useElementAttributes } from '@/composables/useElementAttributes'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<RadioProps>(), {
  class: '',
  disabled: false,
  label: '',
  labelClass: '',
  name: '',
  value: '',
  wrapperClass: '',
})

const model = defineModel<string | number | boolean | null | undefined | (string | number | boolean | object)[]>()

const { elementAttributes: radioAttributes } = useElementAttributes()

const groupName = inject(radioGroupNameKey, undefined)
const groupValidationStatus = inject(radioGroupValidationStatusKey, ref(undefined))

const effectiveName = computed(() => props.name || groupName?.value || '')

const inputAttributes = computed(() => ({
  ...radioAttributes.value,
  ...(groupValidationStatus.value === 'error' ? { 'aria-invalid': true } : {}),
}))

const { labelClass, radioClass, wrapperClass } = useRadioClasses({
  ...toRefs(props),
  validationStatus: groupValidationStatus,
})
</script>

<style>
/* The dot as an image: an SVG data-URI is too long for a utility. */
.fwb-radio:checked {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 16 16'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  print-color-adjust: exact;
}
</style>
