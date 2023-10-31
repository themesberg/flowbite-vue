<template>
  <div class="vp-raw">
    <fwb-textarea
      v-model="message"
      :rows="4"
      label="Your message"
      placeholder="Write your message..."
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTextarea } from '../../../../src/index'

const message = ref('')
</script>
