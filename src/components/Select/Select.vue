<template>
  <div>
    <label v-if="label" :class="labelClasses">{{ label }}</label>
    <select :disabled="disabled" :class="[selectClasses, underline? underlineClasses: '']" @change="handelChange">
      <option disabled selected value="">{{ placeholder }}</option>
      <option :value="option.value" v-for="(option, index) in options" :key="index">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { InputSize } from '@/components/Input/types'
import type { optionsType } from '@/components/Select/types'
import { toRefs } from 'vue'
import { useSelectClasses } from '@/components/Select/composables/useSelectClasses'

const props = defineProps({
  value: {
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  options: {
    type: Array as PropType<optionsType[]>,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: 'Please select one',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  underline: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<InputSize>,
    default: 'md',
  },
})

const emit = defineEmits(['update:value'])
const handelChange = (event: Event) => {
  emit('update:value', (event.target as HTMLInputElement).value)
}

const { selectClasses, underlineClasses, labelClasses } = useSelectClasses(toRefs(props))
</script>