<template>
  <div class="vp-raw flex items-center justify-center text-center">
    <Pagination v-model="currentPage" :total-pages="100" :layout="'navigation'"></Pagination>
  </div>
</template>
<script lang="ts" setup>
import { Pagination } from '../../../../src/index'
import { ref } from 'vue'

const currentPage = ref<number>(1)
</script>
