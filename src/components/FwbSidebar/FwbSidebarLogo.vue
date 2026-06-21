<template>
  <component
    :is="component"
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
import { computed, resolveComponent } from 'vue'

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

const resolved = computed(() => props.tag === 'a' ? 'a' : resolveComponent(props.tag))
const component = computed(() => typeof resolved.value === 'string' ? 'a' : resolved.value)
const linkAttr = computed(() => component.value === 'a' ? 'href' : 'to')
const linkValue = computed(() => component.value === 'a' && typeof props.link !== 'string' ? '/' : props.link)
</script>
