<template>
  <div>
    <Radio name="default radio" v-model="picked" value="one" label="Default radio" />
    <Radio name="default radio" v-model="picked" value="two" label="Checked state" />
  </div>
</template>

<script setup>
import Radio from '../../../../src/components/Radio/Radio.vue'
import { ref } from 'vue'

const picked = ref('one')
</script>
