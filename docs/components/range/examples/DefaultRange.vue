<template>
  <div>
    <Range v-model="value" :steps="5" />
    {{ value }}
  </div>
</template>

<script setup>
import Range from '../../../../src/components/Range/Range.vue'
import { ref } from 'vue'

const value = ref(10)
</script>
