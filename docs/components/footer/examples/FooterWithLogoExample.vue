<template>
  <div class="vp-raw">
    <Footer footer-type="logo">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <FooterBrand href="https://flowbite.com" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" name="Flowbite" />
          <FooterLinkGroup class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <FooterLink href="/">About</FooterLink>
            <FooterLink href="/">Privacy Policy</FooterLink>
            <FooterLink href="/">Licensing</FooterLink>
            <FooterLink href="/">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <FooterCopyright href="/" by="Flowbite™" />
      </div>
    </Footer>
  </div>
</template>

<script setup>
import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand } from '../../../../src/index'
</script>
