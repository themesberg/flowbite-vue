<template>
  <div>
    <FileInput v-model="file" label="Upload file" />
  </div>
</template>

<script setup>
import FileInput from '../../../../src/components/FileInput/FileInput.vue'
import { ref } from 'vue'

const file = ref('')
</script>