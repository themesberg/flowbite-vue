import { onBeforeMount, onBeforeUnmount, reactive } from 'vue'
import type { tAccordionMode, tState } from '@/components/Accordion/types'

const accordionsStates = reactive<tState>({})
export function useAccordionState(id?: string, options?: {flush: boolean, alwaysOpen: boolean}): {
  accordionsStates: tState
} {

  onBeforeMount(() => {
    if (!id) return
    accordionsStates[id] = {
      id: id,
      flush: options?.flush ?? false,
      alwaysOpen: options?.alwaysOpen ?? false,
      panels: {},
    }
  })
  onBeforeUnmount(() => {
    if (!id) return
    delete accordionsStates[id]
  })

  return {
    accordionsStates,
  }
}


