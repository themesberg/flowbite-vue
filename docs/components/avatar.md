<script setup>
import FwbAvatarExample from './avatar/examples/FwbAvatarExample.vue'
import FwbAvatarExampleAlt from './avatar/examples/FwbAvatarExampleAlt.vue'
import FwbAvatarExampleBordered from './avatar/examples/FwbAvatarExampleBordered.vue'
import FwbAvatarExampleIcon from './avatar/examples/FwbAvatarExampleIcon.vue'
import FwbAvatarExampleInitials from './avatar/examples/FwbAvatarExampleInitials.vue'
import FwbAvatarExamplePlaceholder from './avatar/examples/FwbAvatarExamplePlaceholder.vue'
import FwbAvatarExampleSize from './avatar/examples/FwbAvatarExampleSize.vue'
import FwbAvatarExampleStack from './avatar/examples/FwbAvatarExampleStack.vue'
import FwbAvatarExampleStatus from './avatar/examples/FwbAvatarExampleStatus.vue'
import FwbAvatarExampleStatusPosition from './avatar/examples/FwbAvatarExampleStatusPosition.vue'
</script>
# Vue Avatar - Flowbite
Use the avatar component to show a visual representation of a user profile using an image element or SVG object based on multiple styles and sizes

## Default avatar
Use this example to create a circle and rounded avatar on an image element.

<fwb-avatar-example />
```vue
<template>
  <div class="flex justify-center space-x-4">
    <fwb-avatar img="/images/avatar-1.jpg" />
    <fwb-avatar img="/images/avatar-1.jpg" rounded />
  </div>
</template>

<script setup>
import { FwbAvatar } from 'flowbite-vue'
</script>
```

## Bordered
Use this example to create a circle and rounded avatar on an image element.

<fwb-avatar-example-bordered />
```vue
<template>
  <div class="flex justify-center space-x-4">
    <fwb-avatar bordered img="/images/avatar-1.jpg" />
    <fwb-avatar bordered img="/images/avatar-1.jpg" rounded />
  </div></template>

<script setup>
import { FwbAvatar } from 'flowbite-vue'
</script>
```

## Dot indicator
Use a dot element relative to the avatar component as an indicator for the user (eg. online or offline status).

<fwb-avatar-example-status />
```vue
<template>
  <div class="flex justify-center space-x-4">
    <fwb-avatar img="/images/avatar-1.jpg" status="online" />
    <fwb-avatar img="/images/avatar-1.jpg" status="busy" />
    <fwb-avatar img="/images/avatar-1.jpg" status="away" />
    <fwb-avatar img="/images/avatar-1.jpg" status="offline" />
  </div>
</template>

<script setup>
import { FwbAvatar } from 'flowbite-vue'
</script>
```

## Dot indicator position

<fwb-avatar-example-status-position />
```vue
<template>
  <div class="flex justify-center space-x-4">
    <fwb-avatar
      img="/images/avatar-1.jpg"
      status-position="top-left"
      status="online"
    />
    <fwb-avatar
      img="/images/avatar-1.jpg"
      rounded
      status-position="top-left"
      status="online"
    />
    <fwb-avatar
      img="/images/avatar-1.jpg"
      status-position="top-right"
      status="online"
    />
    <fwb-avatar
      img="/images/avatar-1.jpg"
      rounded
      status-position="top-right"
      status="online"
    />
    <fwb-avatar
      img="/images/avatar-1.jpg"
      status-position="bottom-left"
      status="online"
    />
    <fwb-avatar
      img="/images/avatar-1.jpg"
      rounded
      status-position="bottom-left"
      status="online"
    />
    <fwb-avatar
      img="/images/avatar-1.jpg"
      status-position="bottom-right"
      status="online"
    />
    <fwb-avatar
      img="/images/avatar-1.jpg"
      rounded
      status-position="bottom-right"
      status="online"
    />
  </div>
</template>

<script setup>
import { FwbAvatar } from 'flowbite-vue'
</script>
```

## Sizes
Choose from multiple sizing options for the avatar component from this example.

<fwb-avatar-example-size />
```vue
<template>
  <div class="flex justify-center items-center space-x-4">
    <fwb-avatar size="xs" img="/images/avatar-1.jpg" />
    <fwb-avatar size="sm" img="/images/avatar-1.jpg" />
    <fwb-avatar size="md" img="/images/avatar-1.jpg" />
    <fwb-avatar size="lg" img="/images/avatar-1.jpg" />
    <fwb-avatar size="xl" img="/images/avatar-1.jpg" />
  </div>
</template>

<script setup>
import { FwbAvatar } from 'flowbite-vue'
</script>
```

## Alternative text

<fwb-avatar-example-alt />
```vue
<template>
  <div class="flex justify-center">
    <fwb-avatar alt="Alternative text" img="/images/avatar-1.jpg" />
  </div>
</template>

<script setup>
import { FwbAvatar } from 'flowbite-vue'
</script>
```

## Stacked avatars
Use this example if you want to stack a group of users by overlapping the avatar components.

<fwb-avatar-example-stack />
```vue
<template>
  <div class="grid gap-2">
    <stacked-avatars>
      <fwb-avatar img="/images/avatar-1.jpg" rounded stacked />
      <fwb-avatar img="/images/avatar-2.jpg" rounded stacked />
      <fwb-avatar img="/images/avatar-3.jpg" rounded stacked />
      <fwb-avatar img="/images/avatar-4.jpg" rounded stacked />
      <fwb-avatar img="/images/avatar-5.jpg" rounded stacked />
    </stacked-avatars>
    <stacked-avatars>
      <fwb-avatar img="/images/avatar-1.jpg" rounded stacked />
      <fwb-avatar img="/images/avatar-2.jpg" rounded stacked />
      <fwb-avatar img="/images/avatar-3.jpg" rounded stacked />
      <fwb-avatar img="/images/avatar-4.jpg" rounded stacked />
      <stacked-avatars-counter href="#" total="99" />
    </stacked-avatars>
  </div>
</template>

<script setup>
import { FwbAvatar } from 'flowbite-vue'
</script>
```

## Placeholder icon

<fwb-avatar-example-placeholder />
```vue
<template>
  <div class="flex justify-center space-x-4">
    <fwb-avatar />
    <fwb-avatar rounded />
  </div>
</template>

<script setup>
import { FwbAvatar } from 'flowbite-vue'
</script>
```

## Placeholder initials

<fwb-avatar-example-initials />
```vue
<template>
  <div class="flex justify-center space-x-4">
    <fwb-avatar initials="JD" />
    <fwb-avatar initials="JD" rounded />
  </div>
</template>

<script setup>
import { FwbAvatar } from 'flowbite-vue'
</script>
```

## Alternative Placeholder Icon
Use this example if you'd like to specify a different placeholder icon. Specify a `#placeholder` template slot to override the default placeholder icon. This has no effect if using initials.

<fwb-avatar-example-icon />
```vue
<template>
  <div class="vp-raw flex justify-center space-x-4">
    <fwb-avatar>
      <template #placeholder>
        <svg class="w-12 h-12" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </template>
    </fwb-avatar>
    <fwb-avatar rounded>
      <template #placeholder>
        <svg class="w-12 h-12" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </template>
    </fwb-avatar>
  </div>
</template>

<script setup>
import { FwbAvatar } from 'flowbite-vue'
</script>
```
