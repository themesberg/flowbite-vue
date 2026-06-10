import { useElementAttributes } from '@/composables/useElementAttributes'

export const useInputAttributes = () => {
  const {
    elementId: inputId,
    elementAttributes: inputAttributes,
  } = useElementAttributes()

  return { inputId, inputAttributes }
}
