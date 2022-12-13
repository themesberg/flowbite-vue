<template>
  <div ref="content">
    <div
        v-if="isLoaded"
        :class="contentClasses"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAccordionContentClasses } from '@/components/Accordion/composables/useAccordionContentClasses'
import { onMounted, ref } from 'vue'

const isLoaded = ref(false)
const content = ref()

let contentClasses

onMounted(() => {
  const accordionHeaderClasses = useAccordionContentClasses(content)
  contentClasses = accordionHeaderClasses.contentClasses
  isLoaded.value = true
})
</script>
