<template>
    <div>
      <FileInput multiple v-model="files" label="Upload file" />
      <div class="mt-4 -mb-7 border-[1px] border-gray-300 dark:border-gray-600 p-2 rounded-md" v-if="files.length !== 0">
        <div v-for="file in files" :id="file">
            {{ file.name }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import FileInput from '../../../../src/components/FileInput/FileInput.vue'
  import { ref } from 'vue'
  
  const files = ref([])
  
  </script>
  