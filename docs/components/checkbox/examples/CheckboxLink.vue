<template>
  <div>
    <Checkbox v-model="ref1">
      <a href="/" class="text-primary-600 dark:text-primary-500 hover:underline ml-1">I agree with the terms and conditions.</a>
    </Checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox from '../../../../src/components/Checkbox/Checkbox.vue'

const ref1 = ref(false)
</script>