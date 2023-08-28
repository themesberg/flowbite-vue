<template>
    <Select classes="focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500" :options="countries" label="Select a country" />
</template>
  
<script setup>
import { Select } from '../../../../src/index'
  
const countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' },
]
</script>