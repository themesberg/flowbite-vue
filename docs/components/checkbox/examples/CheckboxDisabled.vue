<template>
  <div>
    <checkbox
      v-model="ref2"
      label="Disabled checkbox"
      :disabled="true"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox from '../../../../src/components/Checkbox/Checkbox.vue'

const ref2 = ref(false)
</script>
