<template>
  <div class="vp-raw flex flex-col items-center justify-center text-center">
    <Pagination v-model="currentPage" :layout="'table'" :per-page="20" :total-items="998" class="mb-2" />
    <Pagination v-model="currentPage" :layout="'table'" :per-page="20" :total-items="998" large />
  </div>
</template>
<script lang="ts" setup>
import { Pagination } from '../../../../src/index'
import { ref } from 'vue'

const currentPage = ref<number>(1)
</script>
