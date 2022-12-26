<template>
  <li>
    <a :href="href" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      <span class="mr-3" v-if="hasIcon">
        <slot name="icon"/>
      </span>
      <slot />
      <component :is="defineLabelComponent">{{ label }}</component>
    </a>
  </li>
</template>
<script lang="ts" setup>
import { computed, defineAsyncComponent, useSlots } from 'vue'
import { isNull } from 'lodash-es'
const SidebarStringLabel = defineAsyncComponent(() => import('@/components/Sidebar/SidebarStringLabel.vue'))
const SidebarNumberLabel = defineAsyncComponent(() => import('@/components/Sidebar/SidebarNumberLabel.vue'))

const props = defineProps({
  label: {
    type: [ String, Number ],
    default: null,
  },
  href: {
    type: String,
    default: '#',
  },
})

const slots = useSlots()

const hasIcon = computed(() => !!slots.icon)

const defineLabelComponent = computed(() => {
  if (isNull(props.label)) return false
  if (typeof props.label === 'string') return SidebarStringLabel
  if (typeof props.label === 'number') return SidebarNumberLabel
  return false
})
</script>
