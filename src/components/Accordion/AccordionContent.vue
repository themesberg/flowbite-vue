<template>
  <div
      :class="{ hidden: !panelState.isVisible }"
      class="p-5 border [&:not(:last-item)]:border-b-0 last:border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useAccordionState } from '@/components/Accordion/composables/useAccordionState'
import { computed, inject } from 'vue'

const accordionId: any = inject('accordionId')
const panelId: any = inject('panelId')

const { accordionsStates } = useAccordionState()

const panelState = computed(() => accordionsStates[accordionId].panels[panelId])
</script>
