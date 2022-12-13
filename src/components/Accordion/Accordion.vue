<template>
  <div class="vp-raw">
    <slot :accordionId="accordionId"/>
  </div>
</template>
<script lang="ts" setup>
import { provide } from 'vue'
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
provide('accordionId', accordionId)
useAccordionState(accordionId, { ...props })
</script>
