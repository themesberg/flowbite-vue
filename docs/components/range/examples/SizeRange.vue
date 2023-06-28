<template>
  <div class="flex flex-col gap-3">
    <Range v-model="value1" label="Small range" size="sm" />
    <Range v-model="value2" label="Medium range" size="md" />
    <Range v-model="value3" label="Large range" size="lg" />
  </div>
</template>

<script setup>
import Range from '../../../../src/components/Range/Range.vue'
import { ref } from 'vue'

const value1 = ref(10)
const value2 = ref('10')
const value3 = ref('10')
</script>
