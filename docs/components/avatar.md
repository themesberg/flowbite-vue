<script setup>
import AvatarExample from './avatar/examples/AvatarExample.vue'
import AvatarAlternativePlaceholderExample from './avatar/examples/AvatarAlternativePlaceholderExample.vue'
import AvatarBorderedExample from './avatar/examples/AvatarBorderedExample.vue'
import AvatarDotIndicatorExample from './avatar/examples/AvatarDotIndicatorExample.vue'
import AvatarSizeExample from './avatar/examples/AvatarSizeExample.vue'
import AvatarDotIndicatorPositionExample from './avatar/examples/AvatarDotIndicatorPositionExample.vue'
import AvatarAlternativeTextExample from './avatar/examples/AvatarAlternativeTextExample.vue'
import StackedAvatarsExample from './avatar/examples/StackedAvatarsExample.vue'
import AvatarPlaceholderExample from './avatar/examples/AvatarPlaceholderExample.vue'
import AvatarPlaceholderInitialsExample from './avatar/examples/AvatarPlaceholderInitialsExample.vue'

</script>
# Vue Avatar - Flowbite
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
Use a dot element relative to the avatar component as an indicator for the user (eg. online or offline status).

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

## Sizes

Choose from multiple sizing options for the avatar component from this example.

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

## Alternative text

<AvatarAlternativeTextExample />

```vue
<script setup>
import { Avatar } from 'flowbite-vue'
</script>

<template>
    <Avatar status="online" alt="Alternative text" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"/>
</template>
```

## Stacked avatars
Use this example if you want to stack a group of users by overlapping the avatar components.

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

## Placeholder icon

<AvatarPlaceholderExample />

```vue
<script setup>
import { Avatar } from 'flowbite-vue'
</script>

<template>
  <div class="flex">
    <Avatar class="mr-2.5" />
    <Avatar rounded />
  </div>
</template>
```

## Placeholder initials

<AvatarPlaceholderInitialsExample />

```vue
<script setup>
import { Avatar } from 'flowbite-vue'
</script>

<template>
  <div class="flex">
    <Avatar initials="JD" class="mr-2.5" />
    <Avatar initials="JD" rounded />
  </div>
</template>
```

## Alternative Placeholder Icon
Use this example if you'd like to specify a different placeholder icon. Specify a `#placeholder` template slot to override the default placeholder icon. This has no effect if using initials.

<AvatarAlternativePlaceholderExample />

```vue
<template>
  <div class="vp-raw flex">
    <Avatar class="mr-2.5">
      <template #placeholder>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </template>
    </Avatar>
    <Avatar rounded>
      <template #placeholder>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </template>
    </Avatar>
  </div>
</template>
<script setup>
import { Avatar } from 'flowbite-vue'

</script>
```