<template>
  <div class="vp-raw flex flex-col">
    <Footer>
      <FooterCopyright>
        © 2022 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
      </FooterCopyright>
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
      </Footer>
  </div>
</template>

<script setup>
// import { Footer  } from '../../../../src/index'
import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from '../../../../src/index'
</script>
