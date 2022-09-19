<template>
  <div class="vp-raw flex flex-col">
    <Breadcrumb solid>
      <BreadcrumbItem href="#" home>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#">
        Projects
      </BreadcrumbItem>
      <BreadcrumbItem>
        Flowbite
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
<script setup>
import { Breadcrumb, BreadcrumbItem } from '../../../../src/index'
</script>
