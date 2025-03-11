<template>
  <div ref="contentRef">
    <div
      v-if="isLoaded"
      :class="contentClasses"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'

import { useAccordionContentClasses } from './composables/useAccordionContentClasses'
import { useAccordionState } from './composables/useAccordionState'

import type { AccordionContentProps, AccordionPanel } from './types'

const props = withDefaults(
  defineProps<AccordionContentProps>(), {
    activeClass: '',
    class: '',
  },
)

const { getAccordionState } = useAccordionState()

const isLoaded = ref(false)
const contentRef = ref<HTMLDivElement>()
const accordionState = ref()

const panelId = computed(() => (contentRef.value && contentRef.value.closest('[data-panel-id]') as HTMLElement)?.dataset.panelId)
const panelState = computed(() => accordionState.value?.panels.find((panel: AccordionPanel) => panel.id === panelId.value))

const contentClasses = computed(() => (accordionState.value && panelState.value)
  ? useAccordionContentClasses(accordionState, panelState, props)
  : null)

onMounted(() => {
  accordionState.value = getAccordionState({ element: contentRef })

  isLoaded.value = true
})
</script>
