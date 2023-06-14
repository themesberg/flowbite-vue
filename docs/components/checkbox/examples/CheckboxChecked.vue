<template>
  <div>
    <Checkbox v-model:value="ref3" label="Checked checkbox" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox from '../../../../src/components/Checkbox/Checkbox.vue'

const ref3 = ref(true)
</script>