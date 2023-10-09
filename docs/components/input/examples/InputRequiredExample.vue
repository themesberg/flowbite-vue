<template>
  <div class="vp-raw">
    <input
      v-model="name"
      required
      placeholder="enter your first name"
      label="First name"
    >
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Input } from '../../../../src/index'

const name = ref('')
</script>
