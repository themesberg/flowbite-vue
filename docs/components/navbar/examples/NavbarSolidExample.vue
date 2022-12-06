<template>
  <div class="vp-raw flex flex-col">
    <Navbar solid>
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
    </Navbar>
  </div>
</template>
<script setup>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from '../../../../src/index'
</script>
