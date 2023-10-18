<template>
  <div class="vp-raw">
    <fwb-file-input
      v-model="files"
      label="Upload file"
      multiple
    />
    <div
      v-if="files.length !== 0"
      class="mt-4 border-[1px] border-gray-300 dark:border-gray-600 p-2 rounded-md"
    >
      <div
        v-for="file in files"
        :key="file"
      >
        {{ file.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from '../../../../src/index'

const files = ref([])
</script>
