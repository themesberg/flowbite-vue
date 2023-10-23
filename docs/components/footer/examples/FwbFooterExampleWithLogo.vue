<template>
  <div class="vp-raw">
    <fwb-footer footer-type="logo">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <fwb-footer-brand
            alt="Flowbite Logo"
            href="https://flowbite.com"
            name="Flowbite"
            src="https://flowbite.com/docs/images/logo.svg"
          />
          <fwb-footer-link-group class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <fwb-footer-link href="/">
              About
            </fwb-footer-link>
            <fwb-footer-link href="/">
              Privacy Policy
            </fwb-footer-link>
            <fwb-footer-link href="/">
              Licensing
            </fwb-footer-link>
            <fwb-footer-link href="/">
              Contact
            </fwb-footer-link>
          </fwb-footer-link-group>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
        <fwb-footer-copyright
          by="Flowbite™"
          href="/"
        />
      </div>
    </fwb-footer>
  </div>
</template>

<script setup>
import {
  FwbFooter,
  FwbFooterBrand,
  FwbFooterCopyright,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from '../../../../src/index'
</script>
