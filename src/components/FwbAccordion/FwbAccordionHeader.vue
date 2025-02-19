<template>
  <div ref="headerRef">
    <button
      v-if="isLoaded"
      :class="headerClasses"
      type="button"
      @click="togglePanel"
    >
      <slot />
      <svg
        :class="arrowClasses"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'

import type { AccordionHeaderProps, AccordionPanel } from './types'

import { useAccordionHeaderClasses } from '@/components/FwbAccordion/composables/useAccordionHeaderClasses'
import { useAccordionState } from '@/components/FwbAccordion/composables/useAccordionState'

const props = withDefaults(
  defineProps<AccordionHeaderProps>(), {
    activeClass: '',
    class: '',
  },
)

const { getAccordionState } = useAccordionState()

const isLoaded = ref(false)

const headerRef = ref<HTMLDivElement>()

const accordionState = ref()

const panelId = computed(() => (headerRef.value && headerRef.value.closest('[data-panel-id]') as HTMLElement)?.dataset.panelId)
const panelState = computed(() => accordionState.value?.panels.find((panel: AccordionPanel) => panel.id === panelId.value))

const classes = computed(() => (accordionState.value && panelState.value)
  ? useAccordionHeaderClasses(accordionState, panelState, props)
  : null)

const arrowClasses = computed(() => classes.value?.arrowClasses)
const headerClasses = computed(() => classes.value?.headerClasses)

onMounted(() => {
  accordionState.value = getAccordionState({ element: headerRef })

  isLoaded.value = true
})

const togglePanel = () => {
  if (accordionState.value.persistent) {
    panelState.value.isVisible = !panelState.value?.isVisible
    return
  }

  const currentPanelVisibility = panelState.value.isVisible

  accordionState.value.panels.forEach((panel: AccordionPanel) => {
    if (panel.id !== panelId.value) panel.isVisible = false
    else panel.isVisible = !currentPanelVisibility
  })
}
</script>
