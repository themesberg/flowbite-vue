<template>
  <div>
    <fwb-textarea
      v-model="message"
      :rows="4"
      placeholder="Write you message..."
      label="Your message"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbTextarea } from '../../../../src/index'

const message = ref('')
</script>
