<template>
  <div>
    <label
      v-if="label"
      :class="labelClasses"
    >{{ label }}</label>
    <div class="flex relative">
      <div
        v-if="$slots.prefix"
        class="w-10 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none overflow-hidden"
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
        :class="[inputClasses, $slots.prefix ? 'pl-10' : '']"
      >
      <div
        v-if="$slots.suffix"
        class="absolute right-2.5 bottom-2.5"
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
import { computed, toRefs } from 'vue'
import { useVModel } from '@vueuse/core'
import { twMerge } from 'tailwind-merge'
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
  modelValue: string
  required?: boolean
  size?: InputSize
  type?: InputType
  autocomplete?: CommonAutoFill
  validationStatus?: ValidationStatus
}

const props = withDefaults(defineProps<InputProps>(), {
  disabled: false,
  label: '',
  modelValue: '',
  required: false,
  size: 'md',
  type: 'text',
  autocomplete: 'off',
  validationStatus: undefined,
})

const model = useVModel(props, 'modelValue')

const { inputClasses, labelClasses } = useInputClasses(toRefs(props))

const validationWrapperClasses = computed(() => twMerge(
  'mt-2 text-sm',
  props.validationStatus === validationStatusMap.Success ? 'text-green-600 dark:text-green-500' : '',
  props.validationStatus === validationStatusMap.Error ? 'text-red-600 dark:text-red-500' : '',

))
</script>
