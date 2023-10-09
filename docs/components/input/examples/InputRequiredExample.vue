<template>
  <div class="vp-raw">
    <fwb-input
      v-model="name"
      required
      placeholder="enter your first name"
      label="First name"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { FwbInput } from '../../../../src/index'

const name = ref('')
</script>
