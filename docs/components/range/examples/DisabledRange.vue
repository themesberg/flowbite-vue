<template>
  <div>
    <range
      v-model="value"
      label="Disabled range"
      :disabled="true"
    />
  </div>
</template>

<script setup>
import Range from '../../../../src/components/Range/Range.vue'
import { ref } from 'vue'

const value = ref('10')
</script>
