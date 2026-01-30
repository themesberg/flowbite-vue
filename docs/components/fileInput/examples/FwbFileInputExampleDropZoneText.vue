<template>
  <div class="vp-raw">
    <fwb-file-input
      v-model="file"
      dropzone
    >
      <template #dropzone-text>
        <span class="font-semibold">Klicken Sie zum Hochladen</span>
        oder ziehen Sie die Datei hierher
      </template>
    </fwb-file-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbFileInput } from '../../../../src/index'

const file = ref(null)
</script>
