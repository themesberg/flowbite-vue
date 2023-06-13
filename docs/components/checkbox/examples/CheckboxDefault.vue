<template>
  <div class="flex flex-col gap-2">
    <Checkbox v-model:value="ref1" label="Default checkbox" />
    {{ ref1 }}
    <Checkbox v-model:value="ref2" label="Disabled checkbox" :disabled="true" />
    {{ ref2 }}
    <Checkbox v-model:value="ref3" label="Checked checkbox" />
    {{ ref3 }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox from '../../../../src/components/Checkbox/Checkbox.vue'

const ref1 = ref(false)
const ref2 = ref(false)
const ref3 = ref(true)
</script>