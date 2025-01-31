<template>
  <div :class="blockClasses">
    <label
      v-if="label"
      :class="labelClasses"
    >{{ label }}</label>
    <div
      class="relative flex items-center"
      :class="[inputBlockClasses]"
    >
      <div
        v-if="$slots.prefix"
        class="ms-2 flex shrink-0 items-center"
      >
        <slot name="prefix" />
      </div>
      <input
        v-bind="$attrs"
        v-model="model"
        :disabled="disabled"
        :type="type"
        :required="required"
        :autocomplete="autocomplete"
        :class="[inputClasses]"
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
      :class="validationWrapperClasses"
    >
      <slot name="validationMessage" />
    </p>
    <p
      v-if="$slots.helper"
      class="mt-2 text-sm text-gray-500 dark:text-gray-400"
    >
      <slot name="helper" />
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useVModel } from '@vueuse/core'
import { twMerge } from 'tailwind-merge'
import { computed, toRefs } from 'vue'

import { useInputClasses } from './composables/useInputClasses'
import {
  type CommonAutoFill,
  type InputSize,
  type InputType,
  type ValidationStatus,
  validationStatusMap,
} from './types'

interface InputProps {
  disabled?: boolean
  label?: string
  modelValue: string | number
  required?: boolean
  size?: InputSize
  type?: InputType
  autocomplete?: CommonAutoFill
  validationStatus?: ValidationStatus
  blockClasses?: string | string[] | Record<string, unknown>
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<InputProps>(), {
  disabled: false,
  label: '',
  modelValue: '',
  required: false,
  size: 'md',
  type: 'text',
  autocomplete: 'off',
  validationStatus: undefined,
  blockClasses: undefined,
})

const model = useVModel(props, 'modelValue')

const { inputClasses, inputBlockClasses, labelClasses } = useInputClasses(toRefs(props))

const validationWrapperClasses = computed(() => twMerge(
  'mt-2 text-sm',
  props.validationStatus === validationStatusMap.Success ? 'text-green-600 dark:text-green-500' : '',
  props.validationStatus === validationStatusMap.Error ? 'text-red-600 dark:text-red-500' : '',

))
</script>
