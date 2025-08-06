import { computed, useAttrs } from 'vue'

import type { InputProps } from '../types'

export const useInputAttributes = (props: InputProps) => {
  const attrs = useAttrs()
  const inputId = props?.label && props.label !== '' ? props.label.toLowerCase().trim().replace(/ /g, '-') : ''

  const inputAttributes = computed(() => {
    if (inputId !== '') {
      return {
        ...attrs,
        id: inputId,
      }
    } else {
      return attrs
    }
  })

  return { inputId, inputAttributes }
}
