<template>
  <div>
<!--    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">-->
  </div>
</template>
<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  alt: {
    type: String,
    default: '',
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  children: {
    type: Array,
    default() {
      return []
    },
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
    type: String, // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    default: 'md',
  },
  stacked: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String, // 'away' | 'busy' | 'offline' | 'online';
    default: '',
  },
  statusPosition: {
    type: String, // 'bottom-left' | 'bottom-right' | 'bottom-center' | 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right'
    default: 'top-left',
  },
})

</script>
