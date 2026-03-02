import { computed, useAttrs, useId } from 'vue'

export const useElementAttributes = () => {
  const attrs = useAttrs()
  const elementId = useId()

  const elementAttributes = computed(() => ({
    ...attrs,
    id: elementId,
  }))

  return { elementId, elementAttributes }
}
