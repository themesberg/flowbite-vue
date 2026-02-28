<template>
  <div class="gap-2 grid vp-raw">
    <fwb-input
      v-model="name"
      label="Small"
      placeholder="enter your first name"
      size="sm"
    />
    <fwb-input
      v-model="name"
      label="Medium (default)"
      placeholder="enter your first name"
      size="md"
    />
    <fwb-input
      v-model="name"
      label="Large"
      placeholder="enter your first name"
      size="lg"
    />
    <fwb-input
      v-model="name"
      label="Extra Large"
      placeholder="enter your first name"
      size="xl"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbInput } from '../../../../src/index'

const name = ref('')
</script>
