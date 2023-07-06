<template>
  <Radio v-model="picked" value="first" name="with-link">
    I agree with the <a href="/" class="text-primary-600 dark:text-primary-500 hover:underline ml-1">terms and conditions</a>.
  </Radio>
</template>

<script setup>
import Radio from '../../../../src/components/Radio/Radio.vue'
import { ref } from 'vue'

const picked = ref('first')
</script>
