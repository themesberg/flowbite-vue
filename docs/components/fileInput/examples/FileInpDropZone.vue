<template>
  <FileInput v-model="file" :dropzone="true">
    <p class="!mt-1 text-xs text-gray-500 dark:text-gray-400">
      SVG, PNG, JPG or GIF (MAX. 800x400px)
    </p>
  </FileInput>
</template>

<script setup>
import FileInput from '../../../../src/components/FileInput/FileInput.vue'
import { ref } from 'vue'

const file = ref('')
</script>
