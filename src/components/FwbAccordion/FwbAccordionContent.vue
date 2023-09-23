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
import { type ComputedRef, onMounted, ref } from 'vue'
import { useAccordionContentClasses } from './composables/useAccordionContentClasses'

const isLoaded = ref(false)
const content = ref()
let contentClasses: ComputedRef

onMounted(() => {
  const accordionHeaderClasses = useAccordionContentClasses(content)
  contentClasses = accordionHeaderClasses.contentClasses
  isLoaded.value = true
})
</script>
