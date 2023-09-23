<template>
  <figure
    v-if="caption"
    :class="size"
  >
    <img
      :src="src"
      :alt="alt"
      :class="[size, alignment, imgClass]"
    >
    <figcaption :class="captionClass">
      {{ caption }}
    </figcaption>
  </figure>
  <img
    v-else
    :src="src"
    :alt="alt"
    :class="[size, alignment, imgClass]"
  >
</template>

<script setup lang="ts">
interface ImageProps {
  caption?: string
  src?: string
  size?: string
  alt?: string
  imgClass?: string
  alignment?: string
  captionClass?: string
}

withDefaults(defineProps<ImageProps>(), {
  caption: '',
  src: '',
  size: 'max-w-full',
  alt: '',
  imgClass: 'h-auto',
  alignment: '',
  captionClass: 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400',
})
</script>
