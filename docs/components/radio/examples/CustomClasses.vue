<template>
    <div>
      <Radio classes="!w-6 !h-6 text-green-600 focus:ring-green-500 dark:focus:ring-green-500 dark:ring-offset-gray-800" name="default radio" v-model="picked" value="one" label="Default radio" />
      <Radio classes="!w-6 !h-6 text-green-600 focus:ring-green-500 dark:focus:ring-green-500 dark:ring-offset-gray-800" name="default radio" v-model="picked" value="two" label="Checked state" />
    </div>
</template>

<script setup>
import Radio from '../../../../src/components/Radio/Radio.vue'
import { ref } from 'vue'

const picked = ref('one')
</script>
  