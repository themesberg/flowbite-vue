<template>
    <div class="flex flex-col gap-2">
        <Toggle classes="peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 peer-checked:bg-pink-600" v-model="toggle" label="Toggle me" />
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { Toggle } from '../../../../src/index'

const toggle = ref(false)
</script>
  