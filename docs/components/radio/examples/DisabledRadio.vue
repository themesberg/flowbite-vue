<template>
  <div>
    <Radio name="disabled-radio" v-model="picked" value="one" label="Disabled radio" :disabled="true" />
    <Radio name="disabled-radio" v-model="picked" value="two" label="Disabled checked" :disabled="true" />
  </div>
</template>

<script setup>
import Radio from '../../../../src/components/Radio/Radio.vue'
import { ref } from 'vue'

const picked = ref('one')
</script>
