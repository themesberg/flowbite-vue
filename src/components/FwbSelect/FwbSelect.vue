<template>
  <div :class="wrapperClass">
    <label
      v-if="label"
      :class="labelClass"
      :for="selectId"
    >{{ label }}</label>
    <div class="relative">
      <select
        v-bind="selectAttributes"
        v-model="model"
        :aria-describedby="ariaDescribedby"
        :aria-invalid="validationStatus === 'error' ? true : undefined"
        :autocomplete="autocomplete"
        :class="selectClass"
        :disabled="disabled"
        :required="required"
      >
        <option
          :disabled="!clearable"
          :hidden="!clearable"
          class="text-gray-500 dark:text-gray-400"
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
      <div
        class="right-3 absolute inset-y-0 flex items-center pointer-events-none"
        :class="chevronClass"
      >
        <slot name="chevron">
          <svg
            aria-hidden="true"
            class="size-2.5"
            fill="none"
            viewBox="0 0 10 6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 1 4 4 4-4"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </slot>
      </div>
    </div>
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

import { useSelectAttributes } from './composables/useSelectAttributes'
import { useSelectClasses } from './composables/useSelectClasses'

import type { SelectProps } from './types'

import { useFormFieldIds } from '@/composables/useFormFieldIds'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SelectProps>(), {
  chevronClass: '',
  class: '',
  clearable: false,
  disabled: false,
  label: '',
  labelClass: '',
  options: () => [],
  placeholder: 'Please select one',
  required: false,
  size: 'md',
  underline: false,
  validationMessage: undefined,
  validationStatus: undefined,
  wrapperClass: '',
})

const model = defineModel<string>({ default: '' })
const { selectId, selectAttributes } = useSelectAttributes()
const { ariaDescribedby, helperId, validationMessageId } = useFormFieldIds(selectId, computed(() => props.validationMessage))

const {
  chevronClass,
  wrapperClass,
  labelClass,
  selectClass,
  validationMessageClass,
  helperMessageClass,
} = useSelectClasses(toRefs(props))
</script>
