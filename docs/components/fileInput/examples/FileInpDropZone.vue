<template>
  <div>
  <FileInput v-model="file" dropzone="true">
    <p class="!mt-1 text-xs text-gray-500 dark:text-gray-400">
      SVG, PNG, JPG or GIF (MAX. 800x400px)
    </p>
  </FileInput>
  File: {{ file }}
</div>
</template>

<script setup>
import { ref } from 'vue'
import FileInput from '../../../../src/components/FileInput/FileInput.vue'

const file = ref('')
</script>
