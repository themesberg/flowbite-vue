import { onBeforeMount, onBeforeUnmount, reactive } from 'vue'

import type { tState } from '../types'

interface AccordionProps {
  alwaysOpen?: boolean
  openFirstItem?: boolean
  flush?: boolean
}

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
      openFirstItem: options?.openFirstItem ?? true,
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
