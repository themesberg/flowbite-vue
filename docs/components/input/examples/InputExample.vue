<template>
  <Input v-model="name" placeholder="enter your first name" label="First name" />
</template>
<script lang="ts" setup>
import { Input } from '../../../../src/index'
import { ref } from 'vue'

const name = ref('')
</script>
