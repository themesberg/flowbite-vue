<template>
  <div>
    <label
      v-if="label"
      :class="labelClasses"
    >{{ label }}</label>
    <select
      v-model="model"
      :disabled="disabled"
      :class="[selectClasses, underline? underlineClasses: '']"
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
import type { InputSize } from '@/components/FwbInput/types'
import type { OptionsType } from '@/components/Select/types'
import { computed, toRefs } from 'vue'
import { useSelectClasses } from '@/components/Select/composables/useSelectClasses'

interface InputProps {
  modelValue?: string;
  label?: string;
  options?: OptionsType[];
  placeholder?: string;
  disabled?: boolean;
  underline?: boolean;
  size?: InputSize;
}
const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  label: '',
  options: () => [],
  placeholder: 'Please select one',
  disabled: false,
  underline: false,
  size: 'md',
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

const { selectClasses, underlineClasses, labelClasses } = useSelectClasses(toRefs(props))
</script>
