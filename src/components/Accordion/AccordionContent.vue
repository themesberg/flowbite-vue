<template>
  <div
    :class="contentClasses"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useAccordionContentClasses } from '@/components/Accordion/composables/useAccordionContentClasses'

const { contentClasses } = useAccordionContentClasses()
</script>
