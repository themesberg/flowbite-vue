<template>
  <div class="vp-raw">
    <fwb-file-input
      v-model="files"
      label="Upload file"
      multiple
    />
    <div
      v-if="files.length !== 0"
      class="mt-4 rounded-md border border-gray-300 p-2 dark:border-gray-600"
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

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbFileInput } from '../../../../src/index'

const files = ref([])
</script>
