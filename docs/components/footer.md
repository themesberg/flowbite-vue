<script setup>
import FwbFooterExample from './footer/examples/FwbFooterExample.vue'
import FwbFooterExampleSitemapLinks from './footer/examples/FwbFooterExampleSitemapLinks.vue'
import FwbFooterExampleSocialMediaIcons from './footer/examples/FwbFooterExampleSocialMediaIcons.vue'
import FwbFooterExampleSticky from './footer/examples/FwbFooterExampleSticky.vue'
import FwbFooterExampleWithLogo from './footer/examples/FwbFooterExampleWithLogo.vue'
</script>

# Footer - Flowbite Vue

#### Use the footer section at the bottom of every page to show valuable information to your users, such as sitemap links, a copyright notice, and a logo

---

:::tip Footer - Flowbite
Original reference: [https://flowbite.com/docs/components/footer/](https://flowbite.com/docs/components/footer/)
:::

The footer component can be used to show brand information, sitemap links, a copyright notice, and social media icons at the bottom of every page. Use the `footer-type` prop to switch between layout presets.

## Default Footer

Use `FwbFooter` as a wrapper with `FwbFooterCopyright` and `FwbFooterLinkGroup` to build a simple footer with a copyright notice and navigation links.

<fwb-footer-example />

```vue
<template>
  <fwb-footer>
    <fwb-footer-copyright
      by="Flowbite™"
      href="https://flowbite.com/"
      copyright-message="All Rights Reserved."
    />
    <fwb-footer-link-group>
      <fwb-footer-link href="#">
        About
      </fwb-footer-link>
      <fwb-footer-link href="#">
        Privacy Policy
      </fwb-footer-link>
      <fwb-footer-link href="#">
        Licensing
      </fwb-footer-link>
      <fwb-footer-link href="#">
        Contact
      </fwb-footer-link>
    </fwb-footer-link-group>
  </fwb-footer>
</template>

<script setup>
import {
  FwbFooter,
  FwbFooterCopyright,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from 'flowbite-vue'
</script>
```

## Footer with Logo

Use `footer-type="logo"` together with `FwbFooterBrand` to show a brand logo and name alongside navigation links and a copyright line.

<fwb-footer-example-with-logo />

```vue
<template>
  <fwb-footer footer-type="logo">
    <div class="w-full max-w-(--breakpoint-xl) mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <fwb-footer-brand href="https://flowbite.com" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" name="Flowbite" />
        <fwb-footer-link-group class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <fwb-footer-link href="/">
            About
          </fwb-footer-link>
          <fwb-footer-link href="/">
            Privacy Policy
          </fwb-footer-link>
          <fwb-footer-link href="/">
            Licensing
          </fwb-footer-link>
          <fwb-footer-link href="/">
            Contact
          </fwb-footer-link>
        </fwb-footer-link-group>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
      <fwb-footer-copyright href="/" by="Flowbite™" />
    </div>
  </fwb-footer>
</template>

<script setup>
import {
  FwbFooter,
  FwbFooterBrand,
  FwbFooterCopyright,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from 'flowbite-vue'
</script>
```

## Social Media Icons

Use `footer-type="socialmedia"` with `FwbFooterIcon` to render social platform links alongside multi-column link groups and a copyright line.

<fwb-footer-example-social-media-icons />

```vue
<template>
  <fwb-footer footer-type="socialmedia">
    <div class="md:flex md:justify-between">
      <fwb-footer-brand alt="Flowbite Logo" href="https://flowbite.com" name="Flowbite" src="https://flowbite.com/docs/images/logo.svg" />
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Resources
          </h2>
          <fwb-footer-link-group class="flex flex-col items-start">
            <fwb-footer-link class="mb-4" href="/">Flowbite</fwb-footer-link>
            <fwb-footer-link class="mb-4" href="/">Tailwind CSS</fwb-footer-link>
          </fwb-footer-link-group>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
            Follow us
          </h2>
          <fwb-footer-link-group class="flex flex-col items-start">
            <fwb-footer-link class="mb-4" href="/">GitHub</fwb-footer-link>
            <fwb-footer-link class="mb-4" href="/">Discord</fwb-footer-link>
          </fwb-footer-link-group>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
            Legal
          </h2>
          <fwb-footer-link-group class="flex flex-col items-start">
            <fwb-footer-link class="mb-4" href="/">Privacy Policy</fwb-footer-link>
            <fwb-footer-link class="mb-4" href="/">Terms &amp; Conditions</fwb-footer-link>
          </fwb-footer-link-group>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <fwb-footer-copyright by="Flowbite™" href="/" />
      <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <fwb-footer-icon href="/">...</fwb-footer-icon>
      </div>
    </div>
  </fwb-footer>
</template>

<script setup>
import {
  FwbFooter,
  FwbFooterBrand,
  FwbFooterCopyright,
  FwbFooterIcon,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from 'flowbite-vue'
</script>
```

## Sitemap Links

Use `footer-type="sitemap"` to render a dark full-width footer with multi-column link groups, social icons, and a copyright notice.

<fwb-footer-example-sitemap-links />

```vue
<template>
  <fwb-footer footer-type="sitemap">
    <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
        <fwb-footer-link-group class="text-gray-300 flex flex-col items-start">
          <fwb-footer-link class="mb-4" href="/">About</fwb-footer-link>
          <fwb-footer-link class="mb-4" href="/">Careers</fwb-footer-link>
        </fwb-footer-link-group>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Legal</h2>
        <fwb-footer-link-group class="text-gray-300 flex flex-col items-start">
          <fwb-footer-link class="mb-4" href="/">Privacy Policy</fwb-footer-link>
          <fwb-footer-link class="mb-4" href="/">Terms &amp; Conditions</fwb-footer-link>
        </fwb-footer-link-group>
      </div>
    </div>
    <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
      <fwb-footer-copyright by="Flowbite™" class="text-sm text-gray-300 sm:text-center" href="/" />
      <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
        <fwb-footer-icon href="/" sr-text="Facebook page">...</fwb-footer-icon>
      </div>
    </div>
  </fwb-footer>
</template>

<script setup>
import {
  FwbFooter,
  FwbFooterCopyright,
  FwbFooterIcon,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from 'flowbite-vue'
</script>
```

## Sticky Footer

Add the `sticky` prop to fix the footer to the bottom of the viewport regardless of scroll position.

<fwb-footer-example-sticky />

```vue
<template>
  <fwb-footer sticky>
    <fwb-footer-copyright
      by="Flowbite™"
      href="https://flowbite.com/"
      copyright-message="All Rights Reserved."
    />
    <fwb-footer-link-group>
      <fwb-footer-link href="#">About</fwb-footer-link>
      <fwb-footer-link href="#">Privacy Policy</fwb-footer-link>
      <fwb-footer-link href="#">Licensing</fwb-footer-link>
      <fwb-footer-link href="#">Contact</fwb-footer-link>
    </fwb-footer-link-group>
  </fwb-footer>
</template>

<script setup>
import {
  FwbFooter,
  FwbFooterCopyright,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from 'flowbite-vue'
</script>
```

## Footer component API

### FwbFooter Props

| Name       | Type                                               | Default     | Description                                             |
| ---------- | -------------------------------------------------- | ----------- | ------------------------------------------------------- |
| footerType | `'default' \| 'logo' \| 'socialmedia' \| 'sitemap'` | `'default'` | Controls the background and padding preset of the footer. |
| sticky     | `Boolean`                                          | `false`     | Fixes the footer to the bottom of the viewport.         |

### FwbFooterBrand Props

| Name       | Type     | Default | Description                                                     |
| ---------- | -------- | ------- | --------------------------------------------------------------- |
| href       | `String` | `''`    | URL the brand logo and name link to.                            |
| src        | `String` | `''`    | URL of the brand logo image.                                    |
| alt        | `String` | `''`    | Alt text for the logo image.                                    |
| name       | `String` | `''`    | Brand name displayed next to the logo.                          |
| imageClass | `String` | `''`    | Additional classes applied to the `<img>` element.              |
| nameClass  | `String` | `''`    | Additional classes applied to the brand name text element.      |
| aClass     | `String` | `''`    | Additional classes applied to the wrapping `<a>` element.       |

### FwbFooterCopyright Props

| Name             | Type              | Default                    | Description                                                            |
| ---------------- | ----------------- | -------------------------- | ---------------------------------------------------------------------- |
| by               | `String`          | `''`                       | Brand name displayed in the copyright notice.                          |
| href             | `String`          | `''`                       | When set, renders the brand name as a link to this URL.                |
| year             | `String \| Number` | current year               | Copyright year displayed before the brand name.                        |
| copyrightMessage | `String`          | `'All Rights Reserved.'`   | Text appended after the brand name.                                    |
| aClass           | `String`          | `''`                       | Additional classes applied to the brand name `<a>` or `<span>`.        |

### FwbFooterIcon Props

| Name      | Type     | Default | Description                                                       |
| --------- | -------- | ------- | ----------------------------------------------------------------- |
| href      | `String` | `''`    | When set, renders the icon wrapper as an `<a>` element.           |
| srText    | `String` | `''`    | Visually hidden text for screen readers (e.g. "Facebook page").   |

### FwbFooterIcon Slots

| Name    | Description                         |
| ------- | ----------------------------------- |
| default | The SVG icon or element to display. |

### FwbFooterLink Props

| Name      | Type     | Default | Description                                                                        |
| --------- | -------- | ------- | ---------------------------------------------------------------------------------- |
| href      | `String` | `''`    | URL the link navigates to.                                                         |
| component | `String` | `'a'`   | Root element tag. Use `'router-link'` for Vue Router integration.                  |
| aClass    | `String` | `''`    | Additional classes applied to the link element.                                    |

### FwbFooterLink Slots

| Name    | Description      |
| ------- | ---------------- |
| default | The link label.  |

### FwbFooterLinkGroup Slots

| Name    | Description                                               |
| ------- | --------------------------------------------------------- |
| default | One or more `FwbFooterLink` elements rendered as a group. |
