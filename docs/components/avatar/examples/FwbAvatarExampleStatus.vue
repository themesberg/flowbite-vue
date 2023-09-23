<template>
  <div class="vp-raw flex justify-center space-x-4">
    <fwb-avatar
      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      status="online"
    />
    <fwb-avatar
      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      status="busy"
    />
    <fwb-avatar
      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      status="away"
    />
    <fwb-avatar
      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      status="offline"
    />
  </div>
</template>

<script setup>
import { FwbAvatar } from '../../../../src/index'
</script>
