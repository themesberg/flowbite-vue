<template>
    <div>
        <Range classes="dark:bg-blue-200 bg-blue-200" v-model="value" />
    </div>
</template>
  
<script setup>
import Range from '../../../../src/components/Range/Range.vue'
import { ref } from 'vue'

const value = ref('10')
</script>
