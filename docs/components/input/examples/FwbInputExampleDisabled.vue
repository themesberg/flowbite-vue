<template>
  <fwb-input
    v-model="name"
    disabled
    label="First name"
    placeholder="enter your first name"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbInput } from '../../../../src/index'

const name = ref('')
</script>
