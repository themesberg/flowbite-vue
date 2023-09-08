<template>
  <div class="vp-raw">
    <Input v-model='name' size="lg" placeholder="enter your search query" label="Search">
      <template #prefix>
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </template>
      <template #suffix>
        <Button>Search</Button>
      </template>
    </Input>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Input, Button } from '../../../../src/index'

const name = ref('')
</script>
