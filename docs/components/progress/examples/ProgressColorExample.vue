<template>
  <div class="vp-raw flex flex-col grid gap-4">
    <Progress label="Default" progress="45"></Progress>
    <Progress color="dark" label="Dark" progress="45"></Progress>
    <Progress color="blue" label="Blue" progress="45"></Progress>
    <Progress color="red" label="Red" progress="45"></Progress>
    <Progress color="green" label="Green" progress="45"></Progress>
    <Progress color="yellow" label="Yellow" progress="45"></Progress>
    <Progress color="indigo" label="Indigo" progress="45"></Progress>
    <Progress color="purple" label="Purple" progress="45"></Progress>
  </div>
</template>
<script setup>
import { Progress } from '../../../../src/index'
</script>
