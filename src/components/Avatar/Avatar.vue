<template>
  <div class="relative">
    <div v-if="!img" :class="avatarPlaceholderWrapperClasses">
      <svg v-if="!initials" :class="avatarPlaceholderClasses" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
      </svg>
      <div v-else :class="avatarPlaceholderInitialsClasses">{{ initials }}</div>
    </div>
    <img v-else :class="avatarClasses" :src="img" :alt="alt">
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
  initials: {
    type: String,
    default: null,
  },
})

const { avatarClasses, avatarDotClasses, avatarPlaceholderClasses, avatarPlaceholderWrapperClasses, avatarPlaceholderInitialsClasses } = useAvatarClasses(toRefs(props))

</script>
