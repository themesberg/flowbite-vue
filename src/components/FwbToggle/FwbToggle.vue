<template>
  <div :class="wrapperClass">
    <label :class="toggleContainerClass">
      <input
        v-bind="toggleAttributes"
        v-model="model"
        :aria-describedby="ariaDescribedby"
        :aria-invalid="validationStatus === 'error' ? true : undefined"
        :disabled="disabled"
        class="sr-only peer"
        type="checkbox"
      >
      <span :class="toggleBackgroundClass" />
      <span
        v-if="label"
        :class="labelTextClass"
      >{{ label }}</span>
    </label>
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

import { useToggleClasses } from './composables/useToggleClasses'

import type { ToggleProps } from './types'

import { useElementAttributes } from '@/composables/useElementAttributes'
import { useFormFieldIds } from '@/composables/useFormFieldIds'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<ToggleProps>(), {
  class: '',
  color: '',
  disabled: false,
  label: '',
  labelClass: '',
  reverse: false,
  size: 'md',
  validationMessage: undefined,
  validationStatus: undefined,
  wrapperClass: '',
})

const model = defineModel<boolean>({ default: false })

const { elementId: toggleId, elementAttributes: toggleAttributes } = useElementAttributes()
const { ariaDescribedby, helperId, validationMessageId } = useFormFieldIds(toggleId, computed(() => props.validationMessage))

const {
  helperMessageClass,
  labelTextClass,
  toggleBackgroundClass,
  toggleContainerClass,
  validationMessageClass,
  wrapperClass,
} = useToggleClasses(toRefs(props))
</script>
