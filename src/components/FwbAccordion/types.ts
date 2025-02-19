import type { Ref } from 'vue'

interface AccordionProps {
  class?: string | object
  collapsed?: boolean
  flushed?: boolean
  persistent?: boolean
}

interface AccordionState extends AccordionProps {
  id: string
  panels: AccordionPanel[]
}

interface AccordionStates {
  [key: string]: AccordionState
}

interface AccordionPanelProps {
  activeClass?: string | object
}

interface AccordionPanel {
  id: string
  isVisible: boolean
  order: number
}

interface GetAccordionStateAttributes {
  element: Ref<HTMLElement | undefined>
}

interface GetAccordionState {
  (attributes: GetAccordionStateAttributes): AccordionState | null
}

interface GetAccordionPanelStateAttributes {
  accordionState: Ref<AccordionState>
  panelId: string
}

interface GetAccordionPanelState {
  ({ accordionState, panelId }: GetAccordionPanelStateAttributes): AccordionPanel | null
}

interface UseAccordionState {
  (accordionId?: string, options?: AccordionProps): {
    accordionStates: AccordionStates
    getAccordionState: GetAccordionState
    getAccordionPanelState: GetAccordionPanelState
  }
}

interface AccordionHeaderProps {
  activeClass?: string | object
  class?: string | object
}

interface AccordionContentProps {
  activeClass?: string | object
  class?: string | object
}

export type {
  AccordionContentProps,
  AccordionHeaderProps,
  AccordionPanel,
  AccordionPanelProps,
  AccordionProps,
  AccordionState,
  AccordionStates,
  GetAccordionPanelState,
  GetAccordionState,
  UseAccordionState,
}
