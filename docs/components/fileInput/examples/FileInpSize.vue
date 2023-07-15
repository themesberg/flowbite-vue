<template>
  <div class="flex flex-col gap-5">
    <FileInput size="xs" v-model="file" label="Small size" />
    <FileInput size="sm" v-model="file" label="Default size" />
    <FileInput size="lg" v-model="file" label="Large size" />
  </div>
</template>

<script setup>
import FileInput from '../../../../src/components/FileInput/FileInput.vue'
import { ref } from 'vue'
const file = ref(null)
</script>
