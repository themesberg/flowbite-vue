<template>
  <div class="vp-raw flex-col">
    <StackedAvatars>
      <Avatar stacked img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" rounded />
      <Avatar stacked img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" rounded />
      <Avatar stacked img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded />
      <Avatar stacked img="https://flowbite.com/docs/images/people/profile-picture-4.jpg" rounded />
      <Avatar stacked img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
    </StackedAvatars>
    <StackedAvatars class="mt-2.5">
      <Avatar stacked img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" rounded />
      <Avatar stacked img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" rounded />
      <Avatar stacked img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded />
      <Avatar stacked img="https://flowbite.com/docs/images/people/profile-picture-4.jpg" rounded />
      <StackedAvatarsCounter total="99" href="#" />
    </StackedAvatars>
  </div>
</template>
<script setup>
import { StackedAvatars, Avatar, StackedAvatarsCounter } from '../../../../src/index'
</script>
