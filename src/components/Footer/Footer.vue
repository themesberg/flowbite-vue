<template>
  <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
      </li>
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
      </li>
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
      </li>
      <li>
        <a href="#" class="hover:underline">Contact</a>
      </li>
    </ul>
  </footer>
</template>
<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  children: {
    type: Array,
    default() {
      return []
    },
  },
  bgDark: {
    type: Boolean,
    default: false,
  },
  container: {
    type: Boolean,
    default: false,
  },
})

</script>
