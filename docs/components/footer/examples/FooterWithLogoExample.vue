<template>
  <div class="vp-raw flex flex-col">
    <Footer>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
          />
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
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <FooterCopyright
        year="2023"
        by="Flowbite™"
        href="https://flowbite.com/"
        suffix=". All Rights Reserved."
        >
        </FooterCopyright>
      </div>
    </Footer>
  </div>
</template>

<script setup>
import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand } from '../../../../src/index'
</script>
