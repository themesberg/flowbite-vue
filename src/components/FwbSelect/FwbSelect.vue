<template>
  <div>
    <label
      v-if="label"
      :class="labelClasses"
    >{{ label }}</label>
    <select
      v-model="model"
      :class="[selectClasses, underline? underlineClasses: '']"
      :disabled="disabled"
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
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import type { InputSize } from '@/components/FwbInput/types'
import type { OptionsType } from './types'
import { useSelectClasses } from './composables/useSelectClasses'

interface InputProps {
  disabled?: boolean;
  label?: string
  modelValue?: string
  options?: OptionsType[]
  placeholder?: string
  size?: InputSize
  underline?: boolean
}

const props = withDefaults(defineProps<InputProps>(), {
  disabled: false,
  label: '',
  modelValue: '',
  options: () => [],
  placeholder: 'Please select one',
  size: 'md',
  underline: false,
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get () {
    return props.modelValue
  },
  set (val) {
    emit('update:modelValue', val)
  },
})

const {
  selectClasses,
  underlineClasses,
  labelClasses,
} = useSelectClasses(toRefs(props))
</script>
