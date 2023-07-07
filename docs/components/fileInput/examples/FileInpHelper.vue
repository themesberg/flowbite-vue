<template>
  <div>
    <FileInput v-model="file" label="Upload file">
      <p class='!mt-1 text-sm text-gray-500 dark:text-gray-300'>SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
    </FileInput>
  </div>
</template>

<script setup>
import FileInput from '../../../../src/components/FileInput/FileInput.vue'
import { ref } from 'vue'

const file = ref('')
</script>
