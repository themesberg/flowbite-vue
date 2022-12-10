export type tAccordionMode = 'flush' | 'alwaysOpen' | 'default'
export type tAccordionPanel = {
  order: number
  id: string
  isVisible: boolean
}
type tAccordionPanels = {
  [key: string]: tAccordionPanel
}
type tStateElement = {
  id: string,
  mode: tAccordionMode

  panels: tAccordionPanels
}
export type tState = {
  [key: string]: tStateElement
}
