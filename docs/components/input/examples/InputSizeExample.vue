<template>
  <div class="vp-raw flex flex-col align-center gap-2 flex-wrap">
    <fwb-input
      v-model="name"
      size="sm"
      placeholder="enter your first name"
      label="Small"
    />
    <fwb-input
      v-model="name"
      size="md"
      placeholder="enter your last name"
      label="Medium"
    />
    <fwb-input
      v-model="name"
      size="lg"
      placeholder="enter your second name"
      label="Large"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { FwbInput } from '../../../../src/index'
const name = ref('')
</script>
