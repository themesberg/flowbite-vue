<template>
  <div class="flex flex-col gap-2">
    <toggle
      v-model="toggle"
      label="Toggle me"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Toggle } from '../../../../src/index'

const toggle = ref(false)
</script>
