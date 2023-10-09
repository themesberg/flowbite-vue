<template>
  <div>
    <radio
      v-model="picked"
      name="default radio"
      value="one"
      label="Default radio"
    />
    <radio
      v-model="picked"
      name="default radio"
      value="two"
      label="Checked state"
    />
  </div>
</template>

<script setup>
import Radio from '../../../../src/components/Radio/Radio.vue'
import { ref } from 'vue'

const picked = ref('one')
</script>
