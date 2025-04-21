<template>
  <div :class="wrapperClass">
    <label class="flex justify-start items-center">
      <input
        v-model="model"
        :class="checkboxClass"
        :disabled="disabled"
        :name="name"
        :value="value"
        type="checkbox"
      >
      <span
        v-if="label"
        :class="labelClass"
      >
        {{ label }}
      </span>
      <span :class="labelClass">
        <slot />
      </span>
    </label>
    <p
      v-if="$slots.helper"
      :class="helperMessageClass"
    >
      <slot name="helper" />
    </p>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

import { useCheckboxClasses } from './composables/useCheckboxClasses'

interface CheckboxProps {
  class?: string | Record<string, boolean>
  disabled?: boolean
  label?: string
  labelClass?: string | Record<string, boolean>
  name?: string
  value?: string | number | boolean | object
  wrapperClass?: string | Record<string, boolean>
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  class: '',
  disabled: false,
  label: '',
  labelClass: '',
  name: undefined,
  value: undefined,
  wrapperClass: '',
})

const model = defineModel<boolean | (string | number | boolean | object)[]>({
  default: false,
})

const {
  checkboxClass,
  helperMessageClass,
  labelClass,
  wrapperClass,
} = useCheckboxClasses(toRefs(props))
</script>
