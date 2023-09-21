<template>
  <div class="vp-raw flex flex-col items-center">
    <Pagination v-model="currentPage" :total-items="100" class="mb-2"></Pagination>
    <Pagination v-model="currentPage" :total-items="100" large></Pagination>
  </div>
</template>
<script lang="ts" setup>
import { Pagination } from '../../../../src/index'
import { ref } from 'vue'

const currentPage = ref<number>(1)
</script>
