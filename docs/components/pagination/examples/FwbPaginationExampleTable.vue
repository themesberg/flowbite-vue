<template>
  <div class="vp-raw flex flex-col items-center justify-center text-center">
    <fwb-pagination
      v-model="currentPageA"
      :layout="'table'"
      :per-page="20"
      :total-items="998"
      class="mb-2"
    />
    <fwb-pagination
      v-model="currentPageB"
      :layout="'table'"
      :per-page="100"
      :total-items="750"
      large
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FwbPagination } from '../../../../src/index'

const currentPageA = ref<number>(1)
const currentPageB = ref<number>(1)
</script>
