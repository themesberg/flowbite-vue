<template>
  <div class="vp-raw" :data-accordion-id="accordionId">
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { nanoid } from 'nanoid'
import { useAccordionState } from '@/components/Accordion/composables/useAccordionState'

const props = defineProps({
  alwaysOpen: {
    type: Boolean,
    default: false,
  },
  flush: {
    type: Boolean,
    default: false,
  },
})

const accordionId = nanoid()
useAccordionState(accordionId, { ...props })
</script>
