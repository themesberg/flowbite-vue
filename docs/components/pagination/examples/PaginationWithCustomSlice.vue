<template>
  <div class="vp-raw">
    <Pagination v-model="currentPage" :total-pages="100" :slice-length="4"></Pagination>
  </div>
</template>
<script lang="ts" setup>
import { Pagination } from '../../../../src/index'
import { ref } from 'vue'

const currentPage = ref<number>(1)
</script>
