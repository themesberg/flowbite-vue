<template>
  <div>
    <radio
      v-model="picked"
      name="disabled-radio"
      value="one"
      label="Disabled radio"
      :disabled="true"
    />
    <radio
      v-model="picked"
      name="disabled-radio"
      value="two"
      label="Disabled checked"
      :disabled="true"
    />
  </div>
</template>

<script setup>
import Radio from '../../../../src/components/Radio/Radio.vue'
import { ref } from 'vue'

const picked = ref('one')
</script>
