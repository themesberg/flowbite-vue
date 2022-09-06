<template>
  <div class="relative">
    <img :class="avatarClasses" :src="img" :alt="alt">
    <span v-if="status" :class="avatarDotClasses" :data-pos="statusPosition"></span>
  </div>
</template>
<script lang="ts" setup>
import { toRefs } from 'vue'
import type { PropType } from 'vue'
import type { AvatarSize, AvatarStatus, AvatarStatusPosition } from './types'
import { useAvatarClasses } from '@/components/Avatar/composables/useAvatarClasses'

const props = defineProps({
  alt: {
    type: String,
    default: 'Avatar',
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  img: {
    type: String,
    default: '',
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<AvatarSize>,
    default: 'md',
  },
  stacked: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String as PropType<AvatarStatus>,
    default: null,
  },
  statusPosition: {
    type: String as PropType<AvatarStatusPosition>,
    default: 'top-right',
  },
})

const { avatarClasses, avatarDotClasses } = useAvatarClasses(toRefs(props))

</script>
