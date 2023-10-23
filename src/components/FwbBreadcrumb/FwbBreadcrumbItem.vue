<template>
  <li class="inline-flex items-center">
    <slot name="arrow-icon">
      <svg
        v-if="!home"
        class="w-6 h-6 text-gray-400 mr-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      ><path
        clip-rule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        fill-rule="evenodd"
      /></svg>
    </slot>
    <component
      :is="breadcrumbElementType"
      :class="breadcrumbItemClasses"
      :href="href"
    >
      <slot name="home-icon">
        <svg
          v-if="home"
          class="w-4 h-4 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        ><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
      </slot>
      <slot name="default" />
    </component>
  </li>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import { useBreadcrumbItemClasses } from './composables/useBreadcrumbItemClasses'

const props = defineProps({
  href: {
    type: String,
    default: null,
  },
  home: {
    type: Boolean,
    default: false,
  },
})

const breadcrumbElementType = computed(() => {
  return props.href ? 'a' : 'span'
})

const { breadcrumbItemClasses } = useBreadcrumbItemClasses(toRefs(props))
</script>
