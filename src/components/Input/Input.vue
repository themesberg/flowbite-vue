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
          :required='required'

          :class="[inputClasses, $slots.prefix ? 'pl-10' : '']"
      />
      <div v-if="$slots.suffix" class="absolute right-2.5 bottom-2.5">
        <slot name="suffix" />
      </div>
    </div>
    <p v-if="$slots.validationMessage" class="mt-2 text-sm" :class="validationWrapperClasses">
      <slot name="validationMessage" />
    </p>
    <p v-if="$slots.helper" class="mt-2 text-sm text-gray-500 dark:text-gray-400">
      <slot name="helper" />
    </p>
  </div>
</template>
<script lang="ts" setup>
import { ValidationStatus, type InputSize } from '@/components/Input/types'
import { useInputClasses } from '@/components/Input/composables/useInputClasses'
import { computed, toRefs } from 'vue'
import { useVModel } from '@vueuse/core'

interface InputProps {
  label?: string;
  disabled?: boolean;
  type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
  size?: InputSize;
  required?: boolean;
  modelValue: string;
  validationStatus?: ValidationStatus;
}

const props = withDefaults(defineProps<InputProps>(), {
  label: '',
  disabled: false,
  type: 'text',
  size: 'md',
  required: false,
  modelValue: '',
  validationStatus: undefined,
})

const model = useVModel(props, 'modelValue')

const { inputClasses, labelClasses } = useInputClasses(toRefs(props))

const validationWrapperClasses = computed(() => props.validationStatus === ValidationStatus.Success ? 'text-green-600 dark:text-green-500' : (props.validationStatus === ValidationStatus.Error ? 'text-red-600 dark:text-red-500' : ''))
</script>
