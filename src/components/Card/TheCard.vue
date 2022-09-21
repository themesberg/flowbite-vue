<template>
  <component :is="wrapperType" :href="href" :class="cardClasses">
    <img v-if="imgSrc" class="rounded-t-lg" :class="horizontalImageClasses" :src="imgSrc" :alt="imgAlt"/>
    <div class="p-6">
      <slot />
    </div>
  </component>
</template>
<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import type { PropType } from 'vue'
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
