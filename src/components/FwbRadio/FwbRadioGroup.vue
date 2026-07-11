<template>
  <fieldset
    v-bind="fieldsetAttributes"
    :aria-describedby="ariaDescribedby"
    :class="wrapperClass"
  >
    <legend
      v-if="label || $slots.legend"
      :class="legendClass"
    >
      <slot name="legend">
        {{ label }}
      </slot>
    </legend>
    <slot />
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
  </fieldset>
</template>

<script lang="ts" setup>
import { computed, provide, toRef, toRefs } from 'vue'

import { useRadioGroupClasses } from './composables/useRadioGroupClasses'
import { radioGroupNameKey, type RadioGroupProps, radioGroupValidationStatusKey } from './types'

import { useElementAttributes } from '@/composables/useElementAttributes'
import { useFormFieldIds } from '@/composables/useFormFieldIds'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<RadioGroupProps>(), {
  label: '',
  legendClass: '',
  validationMessage: undefined,
  validationStatus: undefined,
  wrapperClass: '',
})

const { elementId: fieldsetId, elementAttributes: fieldsetAttributes } = useElementAttributes()
const { ariaDescribedby, helperId, validationMessageId } = useFormFieldIds(fieldsetId, computed(() => props.validationMessage))

provide(radioGroupNameKey, toRef(props, 'name'))
provide(radioGroupValidationStatusKey, toRef(props, 'validationStatus'))

const { helperMessageClass, legendClass, validationMessageClass, wrapperClass } = useRadioGroupClasses(toRefs(props))
</script>
