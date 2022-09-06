<script setup>
import AvatarExample from './examples/AvatarExample.vue'
import AvatarBorderedExample from './examples/AvatarBorderedExample.vue'
import AvatarDotIndicatorExample from './examples/AvatarDotIndicatorExample.vue'
import AvatarSizeExample from './examples/AvatarSizeExample.vue'
import AvatarDotIndicatorPositionExample from './examples/AvatarDotIndicatorPositionExample.vue'
import AvatarAlternativeTextExample from './examples/AvatarAlternativeTextExample.vue'
import StackedAvatarsExample from './examples/StackedAvatarsExample.vue'

</script>
# Avatar
Use the avatar component to show a visual representation of a user profile using an image element or SVG object based on multiple styles and sizes

## Default avatar
Use this example to create a circle and rounded avatar on an image element.

<AvatarExample />

```vue
<script setup>
import { Avatar } from 'flowbite-vue'
</script>
<template>
    <div class="flex">
        <Avatar status="online" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
        <Avatar status="online" rounded img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
    </div>
</template>
```

## Bordered
Use this example to create a circle and rounded avatar on an image element.

<AvatarBorderedExample />

```vue
<script setup>
import { Avatar } from 'flowbite-vue'
</script>
<template>
    <div class="flex">
        <Avatar status="online" bordered img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
        <Avatar status="online" bordered rounded img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
    </div>
</template>
```

## Dot indicator

<AvatarDotIndicatorExample />

```vue
<script setup>
import { Avatar } from 'flowbite-vue'
</script>
<template>
    <div class="flex">
        <Avatar status="online" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
        <Avatar status="busy" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
        <Avatar status="away" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
        <Avatar status="offline" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
    </div>
</template>
```

## Sizes

<AvatarSizeExample />

```vue
<script setup>
import { Avatar } from 'flowbite-vue'
</script>
<template>
  <div class="flex items-center">
    <Avatar size="xs" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
    <Avatar size="sm" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
    <Avatar size="md" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
    <Avatar size="lg" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
    <Avatar size="xl" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
  </div>
</template>
```

## Dot indicator position

<AvatarDotIndicatorPositionExample />

```vue
<script setup>
import { Avatar } from 'flowbite-vue'
</script>
<template>
  <div class="flex items-center">
    <Avatar status="online" status-position="top-left" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
    <Avatar status="online" status-position="top-left" rounded img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
    <Avatar status="online" status-position="top-right" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
    <Avatar status="online" status-position="top-right" rounded img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
    <Avatar status="online" status-position="bottom-left" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
    <Avatar status="online" status-position="bottom-left" rounded img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
    <Avatar status="online" status-position="bottom-right" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
    <Avatar status="online" status-position="bottom-right" rounded img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="mr-2.5" />
  </div>
</template>
```
## Alternative text

<AvatarAlternativeTextExample />

## Stacked avatars

<StackedAvatarsExample />

```vue
<script setup>
import { StackedAvatars, Avatar, StackedAvatarsCounter } from 'flowbite-vue'
</script>

<template>
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
</template>
```
