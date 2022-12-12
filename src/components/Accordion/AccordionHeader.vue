<template>
  <button
      type="button"
      @click="toggleItem"
      :class="headerClasses"
  >
    <span class="w-full"><slot /></span>
    <svg
        data-accordion-icon
        :class="arrowClasses"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
    </svg>
  </button>
</template>

<script lang="ts" setup>
import { useAccordionState } from '@/components/Accordion/composables/useAccordionState'
import { computed, inject } from 'vue'
import { useAccordionHeaderClasses } from '@/components/Accordion/composables/useAccordionHeaderClasses'

const accordionId: string = inject('accordionId') ?? ''
const panelId: string = inject('panelId') ?? ''

const { accordionsStates } = useAccordionState()
const accordionState = computed(() => accordionsStates[accordionId])
const panelState = computed(() => accordionState.value.panels[panelId])

const { headerClasses, arrowClasses } = useAccordionHeaderClasses()
function commonToggleItem() {
  const isSelectedVisible = panelState.value.isVisible
  for (const panelIndex in accordionState.value.panels) {
    const panel = accordionState.value.panels[panelIndex]
    if (panel.id !== panelId) panel.isVisible = false
    else panel.isVisible = !isSelectedVisible
  }
}
function alwaysOpenToggleItem() {
  panelState.value.isVisible = !panelState.value.isVisible
}
function toggleItem() {
  if (accordionState.value.alwaysOpen ) return alwaysOpenToggleItem()
  commonToggleItem()
}

</script>
