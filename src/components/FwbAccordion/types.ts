interface AccordionProps {
  class?: string | object
  collapsed?: boolean
  flushed?: boolean
  persistent?: boolean
}

interface AccordionState extends AccordionProps {
  panels: AccordionPanel[]
}

interface AccordionPanelProps {
  activeClass?: string | object
}

interface AccordionPanel {
  id: string
  isVisible: boolean
  order: number
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
}
