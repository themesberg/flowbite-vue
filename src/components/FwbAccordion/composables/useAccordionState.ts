import { onBeforeMount, onBeforeUnmount, reactive } from 'vue'

import type { AccordionProps, tState } from '@/components/FwbAccordion/types'

const accordionsStates = reactive<tState>({})

export function useAccordionState (
  id?: string,
  options?: AccordionProps,
): {
    accordionsStates: tState
  } {
  onBeforeMount(() => {
    if (!id) return
    accordionsStates[id] = {
      id,
      flush: options?.flush ?? false,
      alwaysOpen: options?.alwaysOpen ?? false,
      fullyCollapsed: options?.fullyCollapsed ?? false,
      panels: {},
    }
  })
  onBeforeUnmount(() => {
    if (!id) return
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete accordionsStates[id]
  })

  return {
    accordionsStates,
  }
}
