<template>
  <div class="vp-raw">
    <Input v-model='name' placeholder="enter your first name" label="First name">
      <template #helper>
        We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.
      </template>
    </Input>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Input } from '../../../../src/index'

const name = ref('')
</script>
