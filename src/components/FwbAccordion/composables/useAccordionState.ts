import { onBeforeMount, onBeforeUnmount, reactive } from 'vue'

import type {
  AccordionPanel,
  AccordionStates,
  GetAccordionPanelState,
  GetAccordionState,
  UseAccordionState,
} from '@/components/FwbAccordion/types'

const accordionStates = reactive<AccordionStates>({})

const useAccordionState: UseAccordionState = (accordionId, options): {
  accordionStates: AccordionStates
  getAccordionState: GetAccordionState
  getAccordionPanelState: GetAccordionPanelState
} => {
  onBeforeMount(() => {
    if (!accordionId) return
    accordionStates[accordionId] = {
      id: accordionId,
      collapsed: options?.collapsed ?? false,
      flushed: options?.flushed ?? false,
      persistent: options?.persistent ?? false,
      panels: [],
    }
  })

  onBeforeUnmount(() => {
    if (!accordionId) return
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete accordionStates[accordionId]
  })

  const getAccordionState: GetAccordionState = ({ element }) => {
    const accordionId = element.value && (element.value.closest('[data-accordion-id]') as HTMLElement)?.dataset.accordionId

    return accordionId ? accordionStates[accordionId] : null
  }

  const getAccordionPanelState: GetAccordionPanelState = ({ accordionState, panelId }) =>
    accordionState?.value.panels.find((panel: AccordionPanel) => panel.id === panelId) ?? null

  return {
    accordionStates,
    getAccordionState,
    getAccordionPanelState,
  }
}

export {
  useAccordionState,
}
