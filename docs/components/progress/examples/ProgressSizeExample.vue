<template>
  <div class="flex flex-col grid gap-4">
    <Progress size="sm" label="Small" progress="45"></Progress>
    <Progress size="md" label="Medium" progress="45"></Progress>
    <Progress size="lg" label="Large" progress="45"></Progress>
    <Progress size="xl" label="Extra Large" progress="45"></Progress>
  </div>
</template>
<script setup>
import { Progress } from 'flowbite-vue'
</script>