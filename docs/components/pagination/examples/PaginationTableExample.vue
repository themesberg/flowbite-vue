<template>
  <div class="vp-raw flex items-center justify-center text-center">
    <Pagination
      v-model="currentPage"
      :layout="'table'"
      :per-page="10"
      :total-items="998"
    ></Pagination>
  </div>
</template>
<script lang="ts" setup>
import { Pagination } from '../../../../src/index'
import { ref } from 'vue'

const currentPage = ref<number>(1)
</script>
