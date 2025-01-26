<template>
  <component
    :is="wrapperType"
    :class="cardClasses"
    :href="href"
  >
    <img
      v-if="imgSrc"
      :alt="imgAlt"
      :class="horizontalImageClasses"
      :src="imgSrc"
      class="rounded-t-lg"
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
})

const { cardClasses, horizontalImageClasses } = useCardsClasses(toRefs(props))
const wrapperType = computed(() => props.href ? 'a' : 'div')
</script>
