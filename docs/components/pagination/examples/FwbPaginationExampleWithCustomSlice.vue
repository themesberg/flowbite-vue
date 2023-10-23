<template>
  <div class="vp-raw flex justify-center">
    <fwb-pagination
      v-model="currentPage"
      :slice-length="4"
      :total-pages="100"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbPagination } from '../../../../src/index'

const currentPage = ref<number>(1)
</script>
