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
