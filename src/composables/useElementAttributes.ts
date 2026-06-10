import { computed, useAttrs, useId } from 'vue'

export const useElementAttributes = () => {
  const attrs = useAttrs()
  const generatedId = useId()
  const elementId = computed(() => (attrs.id as string | undefined) ?? generatedId)

  const elementAttributes = computed(() => ({
    ...attrs,
    id: elementId.value,
  }))

  return { elementId, elementAttributes }
}
