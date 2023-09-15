<template>
  <div class="vp-raw">
    <Pagination v-model="currentPage" :total-pages="100" @page-changed="handlePageChange"></Pagination>
  </div>
</template>
<script lang="ts" setup>
import { Pagination } from '../../../../src/index'
import { ref } from 'vue'

const currentPage = ref<number>(1)

const handlePageChange = (page: number) => {
  console.log('page changed', page)
}
</script>
