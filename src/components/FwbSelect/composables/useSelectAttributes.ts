import { useElementAttributes } from '@/composables/useElementAttributes'

export const useSelectAttributes = () => {
  const {
    elementId: selectId,
    elementAttributes: selectAttributes,
  } = useElementAttributes()

  return { selectId, selectAttributes }
}
