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
# Vue Avatar Component - Flowbite
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
    <Avatar rounded>
      <template #placeholder>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" id="profile">
          <path fill="#000" fill-rule="evenodd" d="M338.083 1965c0-2.206-1.831-4-4.083-4-2.252 0-4.083 1.794-4.083 4s1.831 4 4.083 4c2.252 0 4.083-1.794 4.083-4m3.863 14h-1.821a1.01 1.01 0 0 1-1.021-1c0-.552.457-1 1.02-1h.439c.706 0 1.228-.697.96-1.338-1.236-2.964-4.14-4.662-7.523-4.662-3.384 0-6.287 1.698-7.523 4.662-.268.641.254 1.338.96 1.338h.438c.564 0 1.021.448 1.021 1s-.457 1-1.02 1h-1.822c-1.276 0-2.28-1.143-2.01-2.364.743-3.359 3.064-5.838 6.12-6.963-1.394-1.099-2.289-2.783-2.289-4.673 0-3.551 3.148-6.381 6.859-5.958 2.689.306 4.916 2.405 5.32 5.028.346 2.261-.598 4.326-2.218 5.603 3.056 1.125 5.377 3.604 6.12 6.963.27 1.221-.734 2.364-2.01 2.364m-4.884-1c0 .552-.457 1-1.02 1h-4.084a1.01 1.01 0 0 1-1.02-1c0-.552.457-1 1.02-1h4.084c.563 0 1.02.448 1.02 1" transform="translate(-324 -1959)"></path>
        </svg>
      </template>
    </Avatar>
  </div>
</template>
<script setup>
import { Avatar } from 'flowbite-vue'

</script>
```