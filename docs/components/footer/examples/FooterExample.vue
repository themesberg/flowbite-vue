<template>
  <div class="vp-raw flex flex-col">
    <Footer>
      <FooterCopyright
      year="2023"
      by="Flowbite™"
      href="https://flowbite.com/"
      suffix=". All Rights Reserved."
      >
      </FooterCopyright>
      <FooterLinkGroup>
        <FooterLink href="#">
          About2
        </FooterLink>
        <FooterLink href="#">
          Privacy Policy
        </FooterLink>
        <FooterLink href="#">
          Licensing
        </FooterLink>
        <FooterLink href="#">
          Contact
        </FooterLink>
      </FooterLinkGroup>
    </Footer>
  </div>
</template>

<script setup>
import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from '../../../../src/index'
</script>
