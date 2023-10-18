<template>
  <div class="vp-raw">
    <fwb-input
      v-model="name"
      label="First name"
      placeholder="enter your first name"
      required
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbInput } from '../../../../src/index'

const name = ref('')
</script>
