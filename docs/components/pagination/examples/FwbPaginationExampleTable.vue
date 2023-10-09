<template>
  <div class="vp-raw flex flex-col items-center justify-center text-center">
    <fwb-pagination
      v-model="currentPage"
      :layout="'table'"
      :per-page="20"
      :total-items="998"
      class="mb-2"
    />
    <fwb-pagination
      v-model="currentPage"
      :layout="'table'"
      :per-page="20"
      :total-items="998"
      large
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbPagination } from '../../../../src/index'

const currentPage = ref<number>(1)
</script>
