<template>
  <div class="vp-raw">
    <fwb-footer footer-type="logo">
      <div class="mx-auto w-full max-w-(--breakpoint-xl) p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <fwb-footer-brand
            alt="Flowbite Logo"
            href="https://flowbite.com"
            name="Flowbite"
            src="https://flowbite.com/docs/images/logo.svg"
          />
          <fwb-footer-link-group class="mb-6 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
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
        <hr class="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8">
        <fwb-footer-copyright
          by="Flowbite™"
          href="/"
        />
      </div>
    </fwb-footer>
  </div>
</template>

<script lang="ts" setup>
import {
  FwbFooter,
  FwbFooterBrand,
  FwbFooterCopyright,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from '../../../../src/index'
</script>
