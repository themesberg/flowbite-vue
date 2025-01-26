<template>
  <component
    :is="componentName"
    class="flex items-center"
    :[linkAttr]="link"
  >
    <img
      :src="imageUrl"
      :alt="alt"
      class="mr-3 h-6 sm:h-10"
    >
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed, resolveComponent } from 'vue'

interface IFwbNavbarLogoProps {
  link?: string
  imageUrl?: string
  alt?: string
  component?: string
  linkAttr?: string
}
const props = withDefaults(defineProps<IFwbNavbarLogoProps>(), {
  link: '/',
  imageUrl: '/assets/logo.svg',
  alt: 'Logo',
  component: 'a',
  linkAttr: 'href',
})
const componentName = computed(() => {
  return props.component !== 'a' ? resolveComponent(props.component) : 'a'
})
</script>
