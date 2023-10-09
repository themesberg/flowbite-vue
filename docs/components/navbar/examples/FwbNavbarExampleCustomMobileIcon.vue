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
      <template #menu-icon>
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </template>
    </fwb-navbar>
  </div>
</template>

<script setup>
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from '../../../../src/index'
</script>
