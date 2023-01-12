<script setup>
import FooterExample from './footer/examples/FooterExample.vue'
import FooterWithLogoExample from './footer/examples/FooterWithLogoExample.vue'
import FooterSocialMediaIconsExample from './footer/examples/FooterSocialMediaIconsExample.vue'
</script>
# Vue Footer Component - Flowbite

## Default footer

<FooterExample />

```vue
<script setup>
import { Footer } from 'flowbite-vue'
</script>
<template>
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
          About
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
```

## Footer with logo

<FooterWithLogoExample />

## Social media icons

<FooterSocialMediaIconsExample />

## Sitemap links

## Sticky footer