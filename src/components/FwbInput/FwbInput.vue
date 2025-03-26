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
    <!-- Error message section -->
    <p
      v-if="showErrorMessage"
      :class="validationWrapperClasses"
    >
      <slot name="validationMessage">
        {{ errorMessage }}
      </slot>
    </p>
    <!-- Success message section -->
    <p
      v-else-if="showSuccessMessage"
      :class="validationWrapperClasses"
    >
      <slot name="validationMessage">
        {{ successMessage }}
      </slot>
    </p>
    <!-- Fallback for when using slot without status -->
    <p
      v-else-if="$slots.validationMessage"
      :class="validationWrapperClasses"
    >
      <slot name="validationMessage" />
    </p>
    <!-- Helper text -->
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
  modelValue?: string | number
  required?: boolean
  size?: InputSize
  type?: InputType
  autocomplete?: CommonAutoFill
  validationStatus?: ValidationStatus
  blockClasses?: string | string[] | Record<string, unknown>
  errorMessage?: string // New prop for direct error messaging
  successMessage?: string // New prop for success messaging
  hideDetails?: boolean // To control visibility of error/helper messages
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
  errorMessage: '',
  successMessage: '',
  hideDetails: false,
})

const model = useVModel(props, 'modelValue')

const { inputClasses, inputBlockClasses, labelClasses } = useInputClasses(toRefs(props))

// Computed properties to determine visibility of messages
const showErrorMessage = computed(() => 
  !props.hideDetails && 
  (props.validationStatus === validationStatusMap.Error || props.errorMessage)
)

const showSuccessMessage = computed(() => 
  !props.hideDetails && 
  props.validationStatus === validationStatusMap.Success && 
  props.successMessage
)

const validationWrapperClasses = computed(() => twMerge(
  'mt-2 text-sm',
  props.validationStatus === validationStatusMap.Success ? 'text-green-600 dark:text-green-500' : '',
  props.validationStatus === validationStatusMap.Error ? 'text-red-600 dark:text-red-500' : '',
))
</script>