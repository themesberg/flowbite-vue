<template>
  <component
    :is="tag"
    :[linkAttr]="linkValue"
    class="mb-5 flex items-center pl-2.5"
  >
    <img
      :src="logo"
      class="mr-3 h-6 sm:h-7"
      :alt="alt ?? name"
    >
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{{ name }}</span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    name?: string
    link?: string | Record<string, unknown>
    logo?: string
    alt?: string
    tag?: string
  }>(),
  {
    name: '',
    link: '/',
    logo: '',
    tag: 'a',
    alt: undefined,
  },
)

const linkAttr = computed(() => props.tag === 'a' ? 'href' : 'to')
const linkValue = computed(() => props.tag === 'a' && typeof props.link !== 'string' ? '/' : props.link)
</script>
