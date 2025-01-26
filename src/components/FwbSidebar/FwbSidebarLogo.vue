<template>
  <component
    :is="component"
    :[linkAttr]="link"
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
