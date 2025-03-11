<template>
  <li>
    <component
      :is="componentName"
      :[linkAttr]="link"
      :class="linkClasses"
      @click="handleClick"
    >
      <slot />
    </component>
  </li>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { computed, resolveComponent } from 'vue'
interface IFwbNavbarLinkProps {
  link?: string
  isActive?: boolean
  component?: string
  linkAttr?: string
  disabled?: boolean
}
const props = withDefaults(defineProps<IFwbNavbarLinkProps>(), {
  link: '/',
  isActive: false,
  component: 'a',
  linkAttr: 'href',
  disabled: false,
})

const emit = defineEmits<{ click: [event: Event] }>()

const currentPageClasses = 'bg-blue-700 md:bg-transparent text-white md:text-blue-700 dark:text-white'
const defaultStateClasses = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
const defaultClasses = 'block py-2 pr-4 pl-3 rounded md:p-0'
const componentName = computed(() => {
  return props.component !== 'a' ? resolveComponent(props.component) : 'a'
})
const linkClasses = twMerge(
  defaultClasses,
  props.isActive ? currentPageClasses : defaultStateClasses,
)
const handleClick = (event: Event) => {
  if (props.disabled) {
    return
  }
  emit('click', event)
}
</script>
