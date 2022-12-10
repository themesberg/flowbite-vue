import { onBeforeMount, onBeforeUnmount, reactive } from 'vue'
import type { tAccordionMode, tState } from '@/components/Accordion/types'

const accordionsStates = reactive<tState>({})
export function useAccordionState(id?: string, mode?: tAccordionMode): {
  accordionsStates: tState
} {

  onBeforeMount(() => {
    if (!id) return
    accordionsStates[id] = {
      id: id,
      mode: mode ? mode : 'default',
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


