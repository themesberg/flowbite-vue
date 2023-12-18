<script setup>
import FwbJumbotronExample from './jumbotron/examples/FwbJumbotronExample.vue';
import FwbJumbotronFormExample from './jumbotron/examples/FwbJumbotronFormExample.vue';
import FwbJumbotronGradientExample from './jumbotron/examples/FwbJumbotronGradientExample.vue';
import FwbJumbotronBackgroundImageExample from './jumbotron/examples/FwbJumbotronBackgroundImageExample.vue';
import FwbJumbotronVideoExample from './jumbotron/examples/FwbJumbotronVideoExample.vue';
</script>

# Vue Jumbotron - Flowbite

#### Use the jumbotron component to show a marketing message to your users based on a headline and image inside of a card box based on Tailwind CSS

---

:::tip
Original reference: [https://flowbite.com/docs/components/jumbotron/](https://flowbite.com/docs/components/jumbotron/)
:::

The Jumbotron (hero) component can be used as the first section of your website with a focus on a marketing message to increase the likelihood of the user to continue browsing your website.

This UI component features a heading title, a short description, an optional CTA button, background image, gradient or solid background color and it’s generally inside of a card element.

The jumbotron component from Flowbite is responsive on all devices, natively supports dark mode and is coded with the utility classes from Tailwind CSS.


## Default Jumbotron
Use this default example to show a title, description, and two CTA buttons for the jumbotron component.

<fwb-jumbotron-example />
```vue
<template>
  <div
  >
    <fwb-jumbotron
      header-text="We invest in the world’s potential"
      sub-text="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
    >
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <a
          href="#"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Get started
          <svg
            class="w-3.5 h-3.5 ml-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <a
          href="#"
          class="inline-flex justify-center items-center py-3 px-5 sm:ml-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Learn more
        </a>
      </div>
    </fwb-jumbotron>
  </div>
</template>

<script setup>
import FwbJumbotron from '@/components/FwbJumbotron/FwbJumbotron.vue'
</script>

```

## Background image
Use this jumbotron to apply a background image with a darkening opacity effect to improve readability.

<fwb-jumbotron-background-image-example />
```vue
<template>
  <div
  >
    <fwb-jumbotron
      class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] dark:bg-gray-700 bg-gray-700 bg-blend-multiply"
      header-classes="text-white"
      sub-text-classes="text-gray-300 dark:text-gray-300"
      header-text="We invest in the world’s potential"
      sub-text="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
    >
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <a
          href="#"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Get started
          <svg
            class="w-3.5 h-3.5 ml-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <a
          href="#"
          class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ml-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
        >
          Learn more
        </a>
      </div>
    </fwb-jumbotron>
  </div>
</template>

<script setup>
import FwbJumbotron from '@/components/FwbJumbotron/FwbJumbotron.vue'
</script>

```

## Featured video
This component can be used to feature a video together with a heading title, description, and CTA buttons.

<fwb-jumbotron-video-example />
```vue
<template>
  <div
  >
    <fwb-jumbotron
      class="lg:py-8 px-4 "
      header-classes="text-left"
      sub-text-classes="lg:px-0"
      header-text="We invest in the world’s potential"
      sub-text="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
    >
      <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 mb-8">
        <a
          href="#"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Get started
          <svg
            class="w-3.5 h-3.5 ml-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <a
          href="#"
          class="inline-flex justify-center items-center py-3 px-5 sm:ml-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Learn more
        </a>
      </div>
      <div>
        <iframe
          class="mx-auto w-full h-64 rounded-lg sm:h-96 shadow-xl"
          src="https://www.youtube.com/embed/KaLxCiilHns"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </fwb-jumbotron>
  </div>
</template>

<script setup>
import FwbJumbotron from '@/components/FwbJumbotron/FwbJumbotron.vue'
</script>

```

## Authentication form
Use this component to show a sign in or register form as the first section of your website.

<fwb-jumbotron-form-example />
```vue
<template>
  <div
  >
    <fwb-jumbotron
      class="lg:py-8 px-4 text-start "
      header-classes="text-left"
      sub-text-classes="lg:px-0"
      header-text="We invest in the world’s potential"
      sub-text="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
    >
      <a
        href="#"
        class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center mb-8"
      >Read more about our app
        <svg
          class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
      <div>
        <div class="w-full p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Sign in to Flowbite
          </h2>
          <form
            class="mt-8 space-y-6"
            action="#"
          >
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Your email</label>
              <input
                id="email"
                type="email"
                name="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              >
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Your password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  name="remember"
                  type="checkbox"
                  class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  required
                >
              </div>
              <div class="ms-3 text-sm">
                <label
                  for="remember"
                  class="font-medium text-gray-500 dark:text-gray-400"
                >Remember this device</label>
              </div>
              <a
                href="#"
                class="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >Lost Password?</a>
            </div>
            <button
              type="submit"
              class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <div class="text-sm font-medium text-gray-900 dark:text-white">
              Not registered yet? <a class="text-blue-600 hover:underline dark:text-blue-500">Create account</a>
            </div>
          </form>
        </div>
      </div>
    </fwb-jumbotron>
  </div>
</template>

<script setup>
import FwbJumbotron from '@/components/FwbJumbotron/FwbJumbotron.vue'
</script>

```

## API

### Props
| Name           | Values                      | Default |
|----------------|-----------------------------|---------|
| headerLevel    | `1`, `2`, `3`,`4`, `5`, `6` | `1`     |
| subText        | `string`                    | ``      |
| subTextClasses | `string`                    | ``      |
| headerText     | `string`                    | ``      |
| headerClasses  | `string`                    | ``      |

### Slots
| Name          | Description                  |
|---------------|------------------------------|
| default       | jumbotron content            |
