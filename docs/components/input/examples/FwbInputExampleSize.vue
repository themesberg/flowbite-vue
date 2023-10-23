<template>
  <div class="vp-raw grid gap-2">
    <fwb-input
      v-model="name"
      label="Small"
      placeholder="enter your name"
      size="sm"
    />
    <fwb-input
      v-model="name"
      label="Medium"
      placeholder="enter your name"
      size="md"
    />
    <fwb-input
      v-model="name"
      label="Large"
      placeholder="enter your name"
      size="lg"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbInput } from '../../../../src/index'

const name = ref('')
</script>
