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
const contentClasses = ref('')

onMounted(() => {
  const accordionHeaderClasses = useAccordionContentClasses(content)
  contentClasses.value = accordionHeaderClasses.contentClasses.value
  isLoaded.value = true
})
</script>
