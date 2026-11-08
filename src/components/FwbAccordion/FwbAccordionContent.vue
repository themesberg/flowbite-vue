<template>
  <div>
    <div
      v-if="isLoaded"
      :class="contentClasses"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, onMounted, ref } from 'vue'

import { useAccordionContentClasses } from './composables/useAccordionContentClasses'
import { ACCORDION_PANEL_KEY, ACCORDION_STATE_KEY } from './injection/config'

import type { AccordionContentProps } from './types'

const props = withDefaults(
  defineProps<AccordionContentProps>(), {
    activeClass: '',
    class: '',
  },
)

const isLoaded = ref(false)
const accordionState = inject(ACCORDION_STATE_KEY, null)
const panelState = inject(ACCORDION_PANEL_KEY, null)

const contentClasses = computed(() => (accordionState && panelState)
  ? useAccordionContentClasses(accordionState, panelState, props)
  : null)

onMounted(() => {
  isLoaded.value = true
})
</script>
