<template>
  <div class="vp-raw flex flex-col">
    <Pagination v-model="currentPage" :total-pages="100" show-icons></Pagination>
  </div>
</template>
<script lang="ts" setup>
import { Pagination } from '../../../../src/index'
import { ref } from 'vue'

const currentPage = ref<number>(1)
</script>
