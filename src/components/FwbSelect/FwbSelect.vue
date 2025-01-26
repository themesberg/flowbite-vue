<template>
  <div>
    <label>
      <span
        v-if="label"
        :class="labelClasses"
      >
        {{ label }}
      </span>
      <select
        v-model="model"
        :disabled="disabled"
        :required="required"
        :class="selectClasses"
        :autocomplete="autocomplete"
      >
        <option
          disabled
          selected
          value=""
        >
          {{ placeholder }}
        </option>
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option.value"
        >
          {{ option.name }}
        </option>
      </select>
    </label>
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

import { useSelectClasses } from './composables/useSelectClasses'
import { type OptionsType, type ValidationStatus, validationStatusMap } from './types'

import type { CommonAutoFill, InputSize } from './../FwbInput/types'

interface InputProps {
  modelValue?: string
  label?: string
  options?: OptionsType[]
  placeholder?: string
  disabled?: boolean
  required?: boolean
  underline?: boolean
  size?: InputSize
  autocomplete?: CommonAutoFill
  validationStatus?: ValidationStatus
}
const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  label: '',
  options: () => [],
  placeholder: 'Please select one',
  disabled: false,
  required: false,
  underline: false,
  size: 'md',
  autocomplete: 'off',
  validationStatus: undefined,
})
const emit = defineEmits(['update:modelValue'])

const model = useVModel(props, 'modelValue', emit)

const { selectClasses, labelClasses } = useSelectClasses(toRefs(props))

const validationWrapperClasses = computed(() => twMerge(
  'mt-2 text-sm',
  props.validationStatus === validationStatusMap.Success ? 'text-green-600 dark:text-green-500' : '',
  props.validationStatus === validationStatusMap.Error ? 'text-red-600 dark:text-red-500' : '',
))
</script>
