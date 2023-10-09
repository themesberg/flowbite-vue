<template>
  <component
    :is="component"
    :[linkAttr]="link"
    class="flex items-center mb-5 pl-2.5"
  >
    <img
      :src="logo"
      class="h-6 mr-3 sm:h-7"
      :alt="alt ?? name"
    >
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{{ name }}</span>
  </component>
</template>

<script setup lang="ts">
import { resolveComponent } from 'vue'

const props = withDefaults(
  defineProps<{
    name?: string
    link?: string
    logo?: string
    alt?: string
    tag?: string
  }>(),
  {
    name: '',
    link: '/',
    logo: '',
    tag: 'router-link',
    alt: '',
  },
)

const component = props.tag === 'a' ? 'a' : resolveComponent(props.tag)
const linkAttr = props.tag === 'a' ? 'href' : 'to'
</script>
