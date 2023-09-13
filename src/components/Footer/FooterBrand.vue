<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { useAttrs } from 'vue'
defineOptions({
  inheritAttrs: false,
})
const attrs = useAttrs()
interface IFooterProps {
  href: string
  src: string
  alt?: string
  name: string
  imageClass?: string
  nameClass?: string
  aClass?: string
}
const props = withDefaults(defineProps<IFooterProps>(), {
  href: '',
  src: '',
  alt: '',
  name: '',
  imageClass: '',
  nameClass: '',
  aClass: '',
})

const wrapperClasses = twMerge('mb-6 md:mb-0', attrs.class as string)
const aClasses = twMerge('flex items-center', props.aClass)
const imageClasses = twMerge('h-8 mr-3', props.imageClass)
const mameClasses = twMerge('self-center text-2xl font-semibold whitespace-nowrap dark:text-white', props.nameClass)
</script>

<template>
  <div v-bind="$attrs" :class="wrapperClasses">
    <a :href="href" :class="aClasses">
      <img :src="src" :class="imageClasses" :alt="alt" />
      <span :class="mameClasses">{{ name }}</span>
    </a>
  </div>
</template>
