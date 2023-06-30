<template>
  <div class="flex gap-3">
    <Radio v-model="picked" value="first" label="Inline 1" />
    <Radio v-model="picked" value="sec" label="Inline 2" />
    <Radio v-model="picked" value="third" label="Inline 3" />
    <Radio v-model="picked" value="fourth" label="Inline 4" />
  </div>
</template>

<script setup>
import Radio from '../../../../src/components/Radio/Radio.vue'
import { ref } from 'vue'

const picked = ref('first')
</script>