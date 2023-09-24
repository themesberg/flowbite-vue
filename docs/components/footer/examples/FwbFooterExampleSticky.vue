<template>
  <div class="vp-raw  relative">
    <div
      class="overflow-scroll bg-white dark:bg-gray-900"
      style="height: 200px"
    >
      <div
        class="px-20 py-5"
        style="height: 800px;"
      >
        <p class="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>Perferendis, ducimus laboriosam veritatis dolorem culpa fugiat eum voluptate fugit, enim eaque aspernatur optio saepe doloremque hic voluptates est dignissimos ex quae?</p>
      </div>
      <fwb-footer
        class="rounded-none"
        sticky
      >
        <fwb-footer-copyright
          by="Flowbite™"
          copyright-message="All Rights Reserved."
          href="https://flowbite.com/"
        />
        <fwb-footer-link-group>
          <fwb-footer-link href="#">
            About
          </fwb-footer-link>
          <fwb-footer-link href="#">
            Privacy Policy
          </fwb-footer-link>
          <fwb-footer-link href="#">
            Licensing
          </fwb-footer-link>
          <fwb-footer-link href="#">
            Contact
          </fwb-footer-link>
        </fwb-footer-link-group>
      </fwb-footer>
    </div>
  </div>
</template>

<script setup>
import {
  FwbFooter,
  FwbFooterCopyright,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from '../../../../src/index'
</script>
