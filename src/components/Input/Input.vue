<template>
  <div>
    <label v-if="label" :class="labelClasses">{{ label }}</label>
    <div class="flex relative">
      <div v-if="$slots.prefix" class="w-10 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none overflow-hidden">
        <slot name="prefix" />
      </div>
      <input
          v-bind="$attrs"
          v-model="model"
          :disabled="disabled"
          :type="type"

          :class="[inputClasses, $slots.prefix ? 'pl-10' : '']"
      />
      <div v-if="$slots.suffix" class="absolute right-2.5 bottom-2.5">
        <slot name="suffix" />
      </div>
    </div>
    <p v-if="$slots.helper" class="mt-2 text-sm text-gray-500 dark:text-gray-400">
      <slot name="helper" />
    </p>
  </div>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import type { InputSize } from '@/components/Input/types'
import { useInputClasses } from '@/components/Input/composables/useInputClasses'
import { toRefs } from 'vue'
import { useVModel } from '@vueuse/core'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<'text' | 'password'>,
    default: 'text',
  },
  size: {
    type: String as PropType<InputSize>,
    default: 'md',
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const model = useVModel(props, 'modelValue')

const {inputClasses, labelClasses} = useInputClasses(toRefs(props))
</script>
