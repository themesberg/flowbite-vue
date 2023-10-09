<template>
  <div>
    <range
      v-model="value"
      label="Steps range"
      steps="5"
    />
  </div>
</template>

<script setup>
import Range from '../../../../src/components/Range/Range.vue'
import { ref } from 'vue'

const value = ref('10')
</script>
