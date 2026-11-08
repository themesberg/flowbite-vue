<template>
  <div>
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
import { computed, inject, onMounted, ref } from 'vue'

import { useAccordionHeaderClasses } from './composables/useAccordionHeaderClasses'
import { ACCORDION_PANEL_KEY, ACCORDION_STATE_KEY } from './injection/config'

import type { AccordionHeaderProps } from './types'

const props = withDefaults(
  defineProps<AccordionHeaderProps>(), {
    activeClass: '',
    class: '',
  },
)

const isLoaded = ref(false)

const accordionState = inject(ACCORDION_STATE_KEY, null)
const panelState = inject(ACCORDION_PANEL_KEY, null)

const classes = computed(() => (accordionState && panelState)
  ? useAccordionHeaderClasses(accordionState, panelState, props)
  : null)

const arrowClasses = computed(() => classes.value?.arrowClasses)
const headerClasses = computed(() => classes.value?.headerClasses)

onMounted(() => {
  isLoaded.value = true
})

const togglePanel = () => {
  if (!accordionState || !panelState) return

  if (accordionState.persistent) {
    panelState.isVisible = !panelState.isVisible
    return
  }

  const wasVisible = panelState.isVisible
  accordionState.panels.forEach((panel) => {
    panel.isVisible = panel === panelState ? !wasVisible : false
  })
}
</script>
