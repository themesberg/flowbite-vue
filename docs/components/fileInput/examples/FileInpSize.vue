<template>
  <div class="flex flex-col gap-5">
    <file-input
      v-model="file"
      size="xs"
      label="Small size"
    />
    <file-input
      v-model="file"
      size="sm"
      label="Default size"
    />
    <file-input
      v-model="file"
      size="lg"
      label="Large size"
    />
  </div>
</template>

<script setup>
import FileInput from '../../../../src/components/FileInput/FileInput.vue'
import { ref } from 'vue'
const file = ref(null)
</script>
