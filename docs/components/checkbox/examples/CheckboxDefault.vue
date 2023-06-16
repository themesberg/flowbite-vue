<template>
  <div>
    <Checkbox v-model="ref1" label="Default checkbox" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox from '../../../../src/components/Checkbox/Checkbox.vue'

const ref1 = ref(false)
</script>