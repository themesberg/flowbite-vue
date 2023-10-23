<template>
  <div class="vp-raw flex justify-center">
    <fwb-pagination
      v-model="currentPage"
      :layout="'navigation'"
      :total-pages="100"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbPagination } from '../../../../src/index'

const currentPage = ref<number>(1)
</script>
