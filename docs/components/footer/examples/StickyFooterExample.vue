<template>
  <div class="vp-raw relative">
    <div style="height: 300px" class="overflow-scroll pb-16 pt-4 px-4 bg-white dark:bg-gray-900">Some content</div>
    <Footer sticky class="rounded-none">
      <FooterCopyright by="Flowbite™" href="https://flowbite.com/" copyright-message="All Rights Reserved." />
      <FooterLinkGroup>
        <FooterLink href="#"> About </FooterLink>
        <FooterLink href="#"> Privacy Policy </FooterLink>
        <FooterLink href="#"> Licensing </FooterLink>
        <FooterLink href="#"> Contact </FooterLink>
      </FooterLinkGroup>
    </Footer>
  </div>
</template>

<script setup>
import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from '../../../../src/index'
</script>
