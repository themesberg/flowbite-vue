<template>
  <div class="vp-raw">
    <fwb-input
      v-model="name"
      label="First name"
      placeholder="enter your first name"
      class="bg-green-200"
      block-classes="border-2 border-green-500 p-2 rounded-lg"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbInput } from '../../../../src/index'

const name = ref('')
</script>
