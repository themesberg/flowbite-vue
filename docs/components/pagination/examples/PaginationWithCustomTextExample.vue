<template>
  <div class="vp-raw flex flex-col items-center">
    <Pagination v-model="currentPage" :total-pages="100" previous-label="<<<" next-label=">>>"></Pagination>
  </div>
</template>
<script lang="ts" setup>
import { Pagination } from '../../../../src/index'
import { ref } from 'vue'

const currentPage = ref<number>(1)
</script>
