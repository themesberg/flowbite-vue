<template>
  <div class="flex flex-col gap-4 vp-raw">
    <fwb-textarea
      v-model="message"
      size="sm"
      label="Small"
      placeholder="Small textarea..."
    />
    <fwb-textarea
      v-model="message"
      size="md"
      label="Medium (default)"
      placeholder="Medium textarea..."
    />
    <fwb-textarea
      v-model="message"
      size="lg"
      label="Large"
      placeholder="Large textarea..."
    />
    <fwb-textarea
      v-model="message"
      size="xl"
      label="Extra large"
      placeholder="Extra large textarea..."
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbTextarea } from '../../../../src/index'

const message = ref('')
</script>
