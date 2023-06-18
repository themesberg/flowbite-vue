<template>
  <div>
    <Range v-model="value" :steps="5" :size="lg" />
    <Range v-model="value" :steps="5" :disabled="true" />
    <Range v-model="value" :steps="5" size="sm" />
    <Range v-model="value" :steps="5" size="md" />
    <Range v-model="value" :steps="5" size="lg" />
    {{ value }}
  </div>
</template>

<script setup>
import Range from '../../../../src/components/Range/Range.vue'
import { ref } from 'vue'

const value = ref(10)
</script>
