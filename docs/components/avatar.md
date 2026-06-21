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

# Avatar - Flowbite Vue

#### Use the avatar component to show a visual representation of a user profile using an image element or SVG object based on multiple styles and sizes

---

:::tip Avatar - Flowbite
Original reference: [https://flowbite.com/docs/components/avatar/](https://flowbite.com/docs/components/avatar/)
:::

The avatar component can be used to display a user's profile picture, initials placeholder, icon fallback, or a stacked group of avatars — with support for sizing, border rings, and online/offline status indicators.

## Default Avatar

Use the `img` prop to display a profile image. Add `rounded` for a pill shape instead of the default circle.

<fwb-avatar-example />

```vue
<template>
  <div class="flex justify-center space-x-4">
    <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
    <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" rounded />
  </div>
</template>

<script setup>
import { FwbAvatar } from 'flowbite-vue'
</script>
```

## Bordered

Add the `bordered` prop to apply a ring around the avatar to make it stand out against surrounding content.

<fwb-avatar-example-bordered />

```vue
<template>
  <div class="flex justify-center space-x-4">
    <fwb-avatar bordered img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
    <fwb-avatar bordered img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" rounded />
  </div>
</template>

<script setup>
import { FwbAvatar } from 'flowbite-vue'
</script>
```

## Dot Indicator

Use the `status` prop to show a coloured dot indicating the user's current availability — `online`, `busy`, `away`, or `offline`.

<fwb-avatar-example-status />

```vue
<template>
  <div class="flex justify-center space-x-4">
    <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" status="online" />
    <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" status="busy" />
    <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" status="away" />
    <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" status="offline" />
  </div>
</template>

<script setup>
import { FwbAvatar } from 'flowbite-vue'
</script>
```

## Dot Indicator Position

Use the `status-position` prop to control where the dot appears relative to the avatar. Accepts `top-right` (default), `top-left`, `bottom-right`, and `bottom-left`.

<fwb-avatar-example-status-position />

```vue
<template>
  <div class="flex justify-center space-x-4">
    <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" status="online" status-position="top-left" />
    <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" status="online" status-position="top-right" />
    <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" status="online" status-position="bottom-left" />
    <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" status="online" status-position="bottom-right" />
  </div>
</template>

<script setup>
import { FwbAvatar } from 'flowbite-vue'
</script>
```

## Sizes

Use the `size` prop to control the avatar dimensions. Accepts `xs`, `sm`, `md` (default), `lg`, and `xl`.

<fwb-avatar-example-size />

```vue
<template>
  <div class="flex justify-center items-center space-x-4">
    <fwb-avatar size="xs" img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
    <fwb-avatar size="sm" img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
    <fwb-avatar size="md" img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
    <fwb-avatar size="lg" img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
    <fwb-avatar size="xl" img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
  </div>
</template>

<script setup>
import { FwbAvatar } from 'flowbite-vue'
</script>
```

## Alternative Text

Use the `alt` prop to set the image's alternative text for accessibility. Defaults to `'Avatar'`.

<fwb-avatar-example-alt />

```vue
<template>
  <div class="flex justify-center">
    <fwb-avatar alt="User profile picture" img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" />
  </div>
</template>

<script setup>
import { FwbAvatar } from 'flowbite-vue'
</script>
```

## Stacked Avatars

Wrap multiple `FwbAvatar` components in `FwbAvatarStack` with the `stacked` prop to create an overlapping group. Use `FwbAvatarStackCounter` to show a count of additional users that don't fit.

<fwb-avatar-example-stack />

```vue
<template>
  <div class="grid gap-2">
    <fwb-avatar-stack>
      <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" rounded stacked />
      <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" rounded stacked />
      <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded stacked />
      <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-4.jpg" rounded stacked />
      <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded stacked />
    </fwb-avatar-stack>
    <fwb-avatar-stack>
      <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" rounded stacked />
      <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" rounded stacked />
      <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded stacked />
      <fwb-avatar img="https://flowbite.com/docs/images/people/profile-picture-4.jpg" rounded stacked />
      <fwb-avatar-stack-counter href="#" :total="99" />
    </fwb-avatar-stack>
  </div>
</template>

<script setup>
import { FwbAvatar, FwbAvatarStack, FwbAvatarStackCounter } from 'flowbite-vue'
</script>
```

## Placeholder Icon

When no `img` or `initials` prop is provided, a default person silhouette icon is shown as the avatar placeholder.

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

## Placeholder Initials

Use the `initials` prop to display text (typically one or two letters) as a placeholder instead of the default icon.

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

## Custom Placeholder Icon

Use the `#placeholder` slot to replace the default silhouette with any SVG or element. This has no effect when `initials` is set.

<fwb-avatar-example-icon />

```vue
<template>
  <div class="flex justify-center space-x-4">
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

## Avatar component API

### FwbAvatar Props

| Name           | Type                                                         | Default       | Description                                                  |
| -------------- | ------------------------------------------------------------ | ------------- | ------------------------------------------------------------ |
| alt            | `String`                                                     | `'Avatar'`    | Alt text for the image element.                              |
| bordered       | `Boolean`                                                    | `false`       | Applies a ring border around the avatar.                     |
| img            | `String`                                                     | `''`          | URL of the profile image. Shows placeholder when empty.      |
| initials       | `String`                                                     | `null`        | Text displayed as placeholder instead of the default icon.   |
| rounded        | `Boolean`                                                    | `false`       | Uses a rounded (pill) shape instead of a circle.             |
| size           | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                      | `'md'`        | Controls the avatar dimensions.                              |
| stacked        | `Boolean`                                                    | `false`       | Adds negative margin for use inside `FwbAvatarStack`.        |
| status         | `'online' \| 'busy' \| 'away' \| 'offline'`                  | `null`        | Shows a coloured dot indicator for user availability.        |
| statusPosition | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top-right'` | Controls the position of the status dot.                  |

### FwbAvatar Slots

| Name        | Description                                                        |
| ----------- | ------------------------------------------------------------------ |
| placeholder | Custom icon or element shown when no `img` or `initials` is set.   |

### FwbAvatarStackCounter Props

| Name  | Type     | Default | Description                                      |
| ----- | -------- | ------- | ------------------------------------------------ |
| total | `Number` | `1`     | Number displayed inside the counter badge.       |
| href  | `String` | `'#'`   | URL the counter badge links to when clicked.     |
