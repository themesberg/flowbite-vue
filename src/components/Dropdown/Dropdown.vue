<template>
  <div class="inline-flex relative" ref="wrapper">
    <div class="inline-flex items-center">
      <slot name="trigger" :show="onShow" :hide="onHide" :toggle="onToggle">
        <Button @click="onToggle">
          {{ text }}
          <template #suffix>
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </template>
        </Button>
      </slot>
    </div>
    <transition :name="transition">
      <div ref="content" v-if="visible" :style="contentStyles" :class="[contentClasses]">
        <slot />
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, toRef } from 'vue'
import type { PropType } from 'vue'
import type { DropdownPlacement } from './types'
import { useDropdownClasses } from './composables/useDropdownClasses'
import Button from '../Button/Button.vue'
import { onClickOutside } from '@vueuse/core'

const visible = ref(false)

const onShow = () => visible.value = true
const onHide = () => visible.value = false
const onToggle = () => visible.value = !visible.value

const props = defineProps({
  placement: {
    type: String as PropType<DropdownPlacement>,
    default: 'bottom',
  },
  text: {
    type: String ,
    default: '',
  },
  transition: {
    type: String ,
    default: '',
  },
})

const placementTransitionMap: Record<DropdownPlacement, string> = {
  bottom: 'to-bottom',
  left: 'to-left',
  right: 'to-right',
  top: 'to-top',
}

const transitionName = computed(() => {
  if(!props.transition) return placementTransitionMap[props.placement]
  return props.transition
})

const content = ref<HTMLDivElement>()
const wrapper = ref<HTMLDivElement>()

const { contentClasses, contentStyles } = useDropdownClasses({
  placement: toRef(props, 'placement'),
  visible,
  contentRef: content,
})

onClickOutside(wrapper, () => {
  if(!visible.value) return
  visible.value = false
})
</script>

<style scoped src="./Dropdown.css"></style>
