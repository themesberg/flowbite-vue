<script setup>
import FwbJumbotronExample from './jumbotron/examples/FwbJumbotronExample.vue'
import FwbJumbotronFormExample from './jumbotron/examples/FwbJumbotronFormExample.vue'
import FwbJumbotronGradientExample from './jumbotron/examples/FwbJumbotronGradientExample.vue'
import FwbJumbotronBackgroundImageExample from './jumbotron/examples/FwbJumbotronBackgroundImageExample.vue'
import FwbJumbotronVideoExample from './jumbotron/examples/FwbJumbotronVideoExample.vue'
</script>

# Jumbotron - Flowbite Vue

#### Use the jumbotron component to show a marketing message to your users based on a headline and image inside of a card box based on Tailwind CSS

---

:::tip Jumbotron - Flowbite
Original reference: [https://flowbite.com/docs/components/jumbotron/](https://flowbite.com/docs/components/jumbotron/)
:::

The jumbotron (hero) component can be used as the first section of your website with a focus on a marketing message to increase the likelihood of the user to continue browsing. It features a heading, a short description, an optional CTA button, and supports background images, gradients, and video content.

## Default Jumbotron

Use `header-text` and `sub-text` props to define the heading and body copy. Place CTA buttons or any other content in the default slot.

<fwb-jumbotron-example />

```vue
<template>
  <fwb-jumbotron
    header-text="We invest in the world's potential"
    sub-text="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
  >
    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
      <a
        href="#"
        class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        Get started
      </a>
      <a
        href="#"
        class="inline-flex justify-center items-center py-3 px-5 sm:ml-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Learn more
      </a>
    </div>
  </fwb-jumbotron>
</template>

<script setup>
import { FwbJumbotron } from 'flowbite-vue'
</script>
```

## Background Image

Use the `class` prop and Tailwind's `bg-[url(...)]` utility to apply a darkened background image. Override heading and sub-text colors via `headerClasses` and `subTextClasses`.

<fwb-jumbotron-background-image-example />

```vue
<template>
  <fwb-jumbotron
    class="bg-center bg-no-repeat bg-[url('/assets/jumbotron/conference.jpg')] dark:bg-gray-700 bg-gray-700 bg-blend-multiply"
    header-classes="text-white"
    sub-text-classes="text-gray-300 dark:text-gray-300"
    header-text="We invest in the world's potential"
    sub-text="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
  >
    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
      <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
        Get started
      </a>
      <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ml-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
        Learn more
      </a>
    </div>
  </fwb-jumbotron>
</template>

<script setup>
import { FwbJumbotron } from 'flowbite-vue'
</script>
```

## Gradient Background

Use a patterned SVG background and a gradient overlay via an absolutely-positioned element inside the default slot to create a gradient hero section.

<fwb-jumbotron-gradient-example />

```vue
<template>
  <fwb-jumbotron
    header-text="We invest in the world's potential"
    sub-text="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
    class="relative bg-white bg-[url('/assets/jumbotron/hero-pattern.svg')] dark:bg-gray-900 dark:bg-[url('/assets/jumbotron/hero-pattern-dark.svg')]"
  >
    <form class="mx-auto w-full max-w-md">
      <input type="email" class="block w-full rounded-lg border border-gray-300 bg-white p-4 text-sm" placeholder="Enter your email here..." required>
    </form>
    <div class="absolute left-0 top-0 z-0 size-full bg-linear-to-b from-blue-50 to-transparent dark:from-blue-900" />
  </fwb-jumbotron>
</template>

<script setup>
import { FwbJumbotron } from 'flowbite-vue'
</script>
```

## Featured Video

Place a video inside the default slot alongside CTA buttons to highlight media content in the hero section.

<fwb-jumbotron-video-example />

```vue
<template>
  <fwb-jumbotron
    class="lg:py-8 px-4"
    header-classes="text-left"
    sub-text-classes="lg:px-0"
    header-text="We invest in the world's potential"
    sub-text="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
  >
    <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 mb-8">
      <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
        Get started
      </a>
      <a href="#" class="inline-flex justify-center items-center py-3 px-5 sm:ml-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
        Learn more
      </a>
    </div>
    <iframe
      class="mx-auto w-full h-64 rounded-lg sm:h-96 shadow-xl"
      src="https://www.youtube.com/embed/KaLxCiilHns"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </fwb-jumbotron>
</template>

<script setup>
import { FwbJumbotron } from 'flowbite-vue'
</script>
```

## Authentication Form

Use the jumbotron as a full-page hero background and place a sign-in card in the default slot.

<fwb-jumbotron-form-example />

```vue
<template>
  <fwb-jumbotron
    class="lg:py-8 px-4 text-start"
    header-classes="text-left"
    sub-text-classes="lg:px-0"
    header-text="We invest in the world's potential"
    sub-text="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
  >
    <div class="w-full p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Sign in to Flowbite</h2>
      <!-- form content -->
    </div>
  </fwb-jumbotron>
</template>

<script setup>
import { FwbJumbotron } from 'flowbite-vue'
</script>
```

## Jumbotron component API

### FwbJumbotron Props

| Name           | Type                           | Default | Description                                                                    |
| -------------- | ------------------------------ | ------- | ------------------------------------------------------------------------------ |
| headerLevel    | `1 \| 2 \| 3 \| 4 \| 5 \| 6`  | `1`     | HTML heading level rendered for the header text.                               |
| headerText     | `String`                       | `''`    | The main heading text.                                                         |
| headerClasses  | `String`                       | `''`    | Additional Tailwind classes applied to the heading element.                    |
| subText        | `String`                       | `''`    | The body/description text displayed below the heading.                         |
| subTextClasses | `String`                       | `''`    | Additional Tailwind classes applied to the sub-text wrapper.                   |

### FwbJumbotron Slots

| Name    | Description                                                             |
| ------- | ----------------------------------------------------------------------- |
| default | CTA buttons, forms, videos, or any other content below the description. |
