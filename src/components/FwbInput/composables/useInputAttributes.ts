import { computed, useAttrs } from 'vue'

import type { InputProps } from '../types'

export const useInputAttributes = (props: InputProps) => {
  const attrs = useAttrs()
  const inputId = computed(() => {
    if (!props?.label || props.label.trim() === '') {
      return `input-${Math.random().toString(36).slice(2, 9)}`
    }
    return props.label
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .replace(/-+/g, '-')      // Collapse multiple hyphens
  })

  const inputAttributes = computed(() => {
    if (inputId.value !== '') {
      return {
        ...attrs,
        id: inputId.value,
      }
    } else {
      return attrs
    }
  })

  return { inputId, inputAttributes }
}
