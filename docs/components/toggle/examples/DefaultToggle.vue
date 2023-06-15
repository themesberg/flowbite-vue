<template>
  <div class="flex flex-col gap-2">
    <Toggle v-model="toggle" label="Toggle me" size="lg" color="red" />
    {{ toggle }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Toggle } from '../../../../src/index'

const toggle = ref(false)
</script>