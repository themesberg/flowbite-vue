<template>
  <div class="vp-raw flex flex-col align-center gap-2 flex-wrap">
    <Input size="sm" placeholder="enter your first name" label="Small" />
    <Input size="md" placeholder="enter your last name" label="Medium" />
    <Input size="lg" placeholder="enter your second name" label="Large" />
  </div>
</template>
<script lang="ts" setup>
import { Input } from '../../../../src/index'
</script>
