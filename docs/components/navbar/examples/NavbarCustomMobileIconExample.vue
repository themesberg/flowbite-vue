<template>
  <div class="vp-raw flex flex-col">
    <Navbar>
      <template #logo>
        <NavbarLogo link="https://www.google.com/" alt="Flowbite logo" image-url="https://flowbite.com/docs/images/logo.svg">
          Flowbite
        </NavbarLogo>
      </template>
      <template #default="{isShowMenu}">
        <NavbarCollapse :isShowMenu="isShowMenu">
          <NavbarLink is-active>Home</NavbarLink>
          <NavbarLink>Services</NavbarLink>
          <NavbarLink>Pricing</NavbarLink>
          <NavbarLink>Contact</NavbarLink>
        </NavbarCollapse>
      </template>
      <template #menu-icon>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
      </template>
    </Navbar>
  </div>
</template>
<script setup>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from '../../../../src/index'
</script>
