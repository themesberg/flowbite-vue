<template>
  <component
    :is="component"
    :[linkAttr]="link"
    class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
  >
    <slot name="icon" />
    <span
      class="flex-1 whitespace-nowrap"
      :class="$slots.icon && 'ml-3'"
    >
      <slot name="default" />
    </span>
    <slot name="suffix" />
  </component>
</template>

<script setup lang="ts">
import { resolveComponent } from 'vue'
const props = withDefaults(
  defineProps<{
    link?: string | { name: string }
    tag?: string
  }>(),
  {
    link: '/',
    tag: 'router-link',
  },
)

const component = props.tag === 'a' ? 'a' : resolveComponent(props.tag)
const linkAttr = props.tag === 'a' ? 'href' : 'to'
</script>
