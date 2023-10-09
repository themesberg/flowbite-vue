<template>
  <div class="vp-raw">
    <fwb-breadcrumb>
      <fwb-breadcrumb-item
        home
        href="#"
      >
        <template #home-icon>
          <svg
            class="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          /></svg>
        </template>
        Home
      </fwb-breadcrumb-item>
      <fwb-breadcrumb-item href="#">
        <template #arrow-icon>
          <svg
            class="w-4 h-4 text-gray-400 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          /></svg>
        </template>
        Projects
      </fwb-breadcrumb-item>
      <fwb-breadcrumb-item>
        <template #arrow-icon>
          <svg
            class="w-4 h-4 text-gray-400 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          /></svg>
        </template>
        Flowbite
      </fwb-breadcrumb-item>
    </fwb-breadcrumb>
  </div>
</template>

<script setup>
import { FwbBreadcrumb, FwbBreadcrumbItem } from '../../../../src/index'
</script>
