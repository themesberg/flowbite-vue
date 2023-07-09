<template>
  <div>
    <Textarea rows="4" placeholder="Write you message..." v-model="message" label="Your message" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Textarea from '../../../../src/components/Textarea/Textarea.vue'

const message = ref('')
</script>
