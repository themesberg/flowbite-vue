<script setup>
import FwbNavbarExample from './navbar/examples/FwbNavbarExample.vue'
import FwbNavbarExampleSolid from './navbar/examples/FwbNavbarExampleSolid.vue'
import FwbNavbarExampleActionButton from './navbar/examples/FwbNavbarExampleActionButton.vue'
import FwbNavbarExampleCustomMobileIcon from './navbar/examples/FwbNavbarExampleCustomMobileIcon.vue'
</script>

# Navbar - Flowbite Vue

#### Use the navbar component to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns

---

:::tip Navbar - Flowbite
Original reference: [https://flowbite.com/docs/components/navbar/](https://flowbite.com/docs/components/navbar/)
:::

The navbar component can be used to create a responsive navigation bar at the top of your page with support for a logo, navigation links, a collapsible mobile menu, and an optional call-to-action button.

## Default Navbar

Use `FwbNavbar` as the outer shell, `FwbNavbarLogo` in the `logo` slot, and `FwbNavbarLink` components inside `FwbNavbarCollapse` in the default slot. The default slot exposes `isShowMenu` to wire up the collapse visibility.

<fwb-navbar-example />

```vue
<template>
  <fwb-navbar>
    <template #logo>
      <fwb-navbar-logo alt="Flowbite logo" image-url="/images/logo.svg" link="#">
        Flowbite
      </fwb-navbar-logo>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link is-active link="#">
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
  </fwb-navbar>
</template>

<script setup>
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from 'flowbite-vue'
</script>
```

## Solid Navbar

Add the `solid` prop to switch from the default white navbar to a solid gray background with a dark mode variant.

<fwb-navbar-example-solid />

```vue
<template>
  <fwb-navbar solid>
    <template #logo>
      <fwb-navbar-logo alt="Flowbite logo" image-url="/images/logo.svg" link="#">
        Flowbite
      </fwb-navbar-logo>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link is-active link="#">
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
  </fwb-navbar>
</template>

<script setup>
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from 'flowbite-vue'
</script>
```

## Navbar with Action Button

Use the `right-side` slot to place a button or any other element on the right side of the navbar, shown alongside the links on desktop and hidden on mobile.

<fwb-navbar-example-action-button />

```vue
<template>
  <fwb-navbar>
    <template #logo>
      <fwb-navbar-logo alt="Flowbite logo" image-url="/images/logo.svg" link="#">
        Flowbite
      </fwb-navbar-logo>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link is-active link="#">
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
    <template #right-side>
      <fwb-button>
        Get started
      </fwb-button>
    </template>
  </fwb-navbar>
</template>

<script setup>
import {
  FwbButton,
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from 'flowbite-vue'
</script>
```

## Navbar with Custom Mobile Icon

Use the `menu-icon` slot to replace the default hamburger icon on the mobile toggle button with any SVG or custom element.

<fwb-navbar-example-custom-mobile-icon />

```vue
<template>
  <fwb-navbar>
    <template #logo>
      <fwb-navbar-logo alt="Flowbite logo" image-url="/images/logo.svg" link="#">
        Flowbite
      </fwb-navbar-logo>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link is-active link="#">
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
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
      </svg>
    </template>
  </fwb-navbar>
</template>

<script setup>
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from 'flowbite-vue'
</script>
```

## Navbar component API

### FwbNavbar Props

| Name    | Type      | Default | Description                                              |
| ------- | --------- | ------- | -------------------------------------------------------- |
| class   | `String`  | `''`    | Additional classes applied to the `<nav>` element.       |
| rounded | `Boolean` | `false` | Adds a rounded style to the navbar container.            |
| solid   | `Boolean` | `false` | Applies a solid gray background instead of white.        |
| sticky  | `Boolean` | `false` | Fixes the navbar to the top of the viewport.             |

### FwbNavbar Slots

| Name       | Description                                                                        |
| ---------- | ---------------------------------------------------------------------------------- |
| default    | Navigation content. Exposes `{ isShowMenu: boolean }` for wiring up the collapse. |
| logo       | Brand logo area, typically a `FwbNavbarLogo` component.                            |
| menu-icon  | Replaces the default hamburger SVG in the mobile toggle button.                    |
| right-side | Content rendered to the right of the nav links on desktop (e.g. a CTA button).    |

### FwbNavbarCollapse Props

| Name       | Type      | Default | Description                                                       |
| ---------- | --------- | ------- | ----------------------------------------------------------------- |
| isShowMenu | `Boolean` | `false` | Controls whether the mobile menu is expanded. Pass from `FwbNavbar`'s `isShowMenu` slot prop. |

### FwbNavbarCollapse Slots

| Name    | Description                           |
| ------- | ------------------------------------- |
| default | One or more `FwbNavbarLink` elements. |

### FwbNavbarLink Props

| Name      | Type      | Default  | Description                                              |
| --------- | --------- | -------- | -------------------------------------------------------- |
| component | `String`  | `'a'`    | Root element tag or component name (e.g. `'router-link'`). |
| disabled  | `Boolean` | `false`  | Suppresses the `click` event when set.                   |
| isActive  | `Boolean` | `false`  | Highlights the link as the current page.                 |
| link      | `String`  | `'/'`    | The URL or route passed to the link element.             |
| linkAttr  | `String`  | `'href'` | Attribute name used to pass `link` (e.g. `'to'` for router-link). |

### FwbNavbarLink Events

| Name  | Description                            |
| ----- | -------------------------------------- |
| click | Emitted when the link item is clicked. |

### FwbNavbarLink Slots

| Name    | Description        |
| ------- | ------------------ |
| default | The link label text. |

### FwbNavbarLogo Props

| Name      | Type     | Default             | Description                                                           |
| --------- | -------- | ------------------- | --------------------------------------------------------------------- |
| alt       | `String` | `'Logo'`            | Alt text for the logo image.                                          |
| component | `String` | `'a'`               | Root element tag or component name.                                   |
| imageUrl  | `String` | `'/assets/logo.svg'` | URL of the logo image.                                               |
| link      | `String` | `'/'`               | The URL or route passed to the logo link.                             |
| linkAttr  | `String` | `'href'`            | Attribute name used to pass `link` (e.g. `'to'` for router-link).    |

### FwbNavbarLogo Slots

| Name    | Description                                 |
| ------- | ------------------------------------------- |
| default | Brand name text displayed next to the logo. |
