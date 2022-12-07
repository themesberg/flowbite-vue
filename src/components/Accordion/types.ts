export type AccordionItem = {
  header: string
  icon?: string
}
export interface AccordionTransformedItem extends AccordionItem {
  id: string
  isVisible: boolean
}
