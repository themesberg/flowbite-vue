<template>
  <div class="flex gap-3 items-center">
    <input @input="handelChange" type="checkbox" :disabled="disabled" :checked="value" :class="checkboxClasses" />
    <label v-if="label" :class="labelClasses">{{ label }}</label>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'
import { useCheckboxClasses } from './composables/useCheckboxClasses'
const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:value'])
const handelChange = (event: Event) => {
  emit('update:value', (event.target as HTMLInputElement).checked)
}

const { checkboxClasses, labelClasses } = useCheckboxClasses()
</script>