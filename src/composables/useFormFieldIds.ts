import { computed, type ComputedRef, useAttrs, useSlots } from 'vue'

export const useFormFieldIds = (
  elementId: ComputedRef<string>,
  validationMessage?: ComputedRef<string | undefined>,
) => {
  const attrs = useAttrs()
  const slots = useSlots()

  const validationMessageId = computed(() => `${elementId.value}-validation`)
  const helperId = computed(() => `${elementId.value}-helper`)

  const ariaDescribedby = computed(() => {
    const ids: string[] = []
    if (attrs['aria-describedby']) ids.push(String(attrs['aria-describedby']))
    if (slots.validationMessage || validationMessage?.value) ids.push(validationMessageId.value)
    if (slots.helper) ids.push(helperId.value)
    return ids.length ? ids.join(' ') : undefined
  })

  return { ariaDescribedby, helperId, validationMessageId }
}
