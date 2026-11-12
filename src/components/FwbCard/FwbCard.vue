<template>
  <component
    :is="wrapperType"
    :class="cardClasses"
    :href="href"
  >
    <img
      v-if="imgSrc"
      :alt="imgAlt"
      :class="imageClasses"
      :src="imgSrc"
    >
    <div>
      <slot />
    </div>
  </component>
</template>

<script lang="ts" setup>
import { computed, type PropType, toRefs } from 'vue'

import { useCardsClasses } from './composables/useCardClasses'

import type { CardsVariant } from './types'
import type { ClassInput } from '@/types/global'

const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  imgAlt: {
    type: String,
    default: '',
  },
  imgSrc: {
    type: String,
    default: '',
  },
  variant: {
    type: String as PropType<CardsVariant>,
    default: 'default',
  },
  class: {
    type: [String, Object, Array] as PropType<ClassInput>,
    default: '',
  },
  imgClass: {
    type: [String, Object, Array] as PropType<ClassInput>,
    default: '',
  },
})

const { cardClasses, imageClasses } = useCardsClasses(toRefs(props))
const wrapperType = computed(() => props.href ? 'a' : 'div')
</script>
