<template>
  <div class="vp-raw">
    <fwb-navbar>
      <template #logo>
        <fwb-navbar-logo
          alt="Flowbite logo"
          image-url="https://flowbite.com/docs/images/logo.svg"
          link="https://www.google.com/"
        >
          Flowbite
        </fwb-navbar-logo>
      </template>
      <template #default="{isShowMenu}">
        <fwb-navbar-collapse :is-show-menu="isShowMenu">
          <fwb-navbar-link
            is-active
            link="#"
          >
            Home
          </fwb-navbar-link>
          <fwb-navbar-link link="#">
            Services
          </fwb-navbar-link>
          <fwb-navbar-link link="#">
            Pricing
          </fwb-navbar-link>
          <fwb-navbar-link link="#">
            Contact
          </fwb-navbar-link>
        </fwb-navbar-collapse>
      </template>
      <template #right-side>
        <fwb-button>
          Get started
        </fwb-button>
      </template>
    </fwb-navbar>
  </div>
</template>

<script setup>
import {
  FwbButton,
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from '../../../../src/index'
</script>
