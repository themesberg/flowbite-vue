<template>
  <div class="vp-raw flex flex-col">
    <Breadcrumb>
      <BreadcrumbItem href="#" home>
        <template #home-icon>
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>        </template>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#">
        <template #arrow-icon>
          <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </template>
        Projects
      </BreadcrumbItem>
      <BreadcrumbItem>
        <template #arrow-icon>
          <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </template>
        Flowbite
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
<script setup>
import { Breadcrumb, BreadcrumbItem } from '../../../../src/index'
</script>
