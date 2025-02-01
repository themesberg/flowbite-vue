export interface AccordionProps {
  alwaysOpen?: boolean
  fullyCollapsed?: boolean
  flush?: boolean
}

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
  id: string
  flush: boolean
  alwaysOpen: boolean
  fullyCollapsed: boolean
  panels: tAccordionPanels
}

export type tState = {
  [key: string]: tStateElement
}
