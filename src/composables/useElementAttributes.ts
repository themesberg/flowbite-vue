import { computed, useAttrs, useId } from 'vue'

export const useElementAttributes = () => {
  const attrs = useAttrs()
  const generatedId = useId()
  const elementId = (attrs.id as string | undefined) ?? generatedId

  const elementAttributes = computed(() => ({
    ...attrs,
    id: elementId,
  }))

  return { elementId, elementAttributes }
}
