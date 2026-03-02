import { computed, useAttrs, useId } from 'vue'

export const useInputAttributes = () => {
  const attrs = useAttrs()
  const inputId = useId()

  const inputAttributes = computed(() => ({
    ...attrs,
    id: inputId,
  }))

  return { inputId, inputAttributes }
}
