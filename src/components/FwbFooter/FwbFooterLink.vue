<template>
  <li
    v-bind="$attrs"
    :class="liClasses"
  >
    <component
      :is="linkComponent"
      :[linkAttr]="href"
      :class="aClasses"
    >
      <slot />
    </component>
  </li>
</template>

<script setup lang="ts">
import { resolveComponent, useAttrs } from 'vue'
import { twMerge } from 'tailwind-merge'

interface IFooterLinkProps {
  href: string
  aClass?: string
  component?: string
}

defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs()
const props = withDefaults(defineProps<IFooterLinkProps>(), {
  href: '',
  aClass: '',
  component: 'a',
})
const linkComponent = props.component === 'a' ? 'a' : resolveComponent(props.component)
const linkAttr = props.component === 'router-link' ? 'to' : 'href'
const aClasses = twMerge('hover:underline', props.aClass)
const liClasses = twMerge('mr-4 md:mr-6 last:mr-0', attrs.class as string)
</script>
