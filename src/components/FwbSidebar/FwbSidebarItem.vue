<template>
  <component
    :is="component"
    :[linkAttr]="linkValue"
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
import { computed, resolveComponent } from 'vue'
const props = withDefaults(
  defineProps<{
    link?: string | Record<string, unknown>
    tag?: string
  }>(),
  {
    link: '/',
    tag: 'a',
  },
)

const resolved = computed(() => props.tag === 'a' ? 'a' : resolveComponent(props.tag))
const component = computed(() => typeof resolved.value === 'string' ? 'a' : resolved.value)
const linkAttr = computed(() => component.value === 'a' ? 'href' : 'to')
const linkValue = computed(() => component.value === 'a' && typeof props.link !== 'string' ? '/' : props.link)
</script>
