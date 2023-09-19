<template>
  <div :class="customSize ? customSize : [textSizes[tag], color, 'w-full']">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface HeadingProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  color?: string
  customSize?: string
}

withDefaults(defineProps<HeadingProps>(), {
  tag: 'h1',
  color: 'text-gray-900 dark:text-white',
  customSize: '',
})

const textSizes: Record<string, string> = {
  h1: 'text-5xl font-extrabold',
  h2: 'text-4xl font-bold',
  h3: 'text-3xl font-bold',
  h4: 'text-2xl font-bold',
  h5: 'text-xl font-bold',
  h6: 'text-lg font-bold',
}
</script>
