<script setup>
import FwbBannerDefaultExample from './banner/examples/FwbBannerDefaultExample.vue'
import FwbBannerBottomExample from './banner/examples/FwbBannerBottomExample.vue'
</script>

# Vue Banner - Flowbite

## Use the banner component to show marketing messages and CTA buttons at the top or bottom side of your website based on the utility classes from Tailwind CSS

---

:::tip
Original reference: [https://flowbite.com/docs/components/banner/](https://flowbite.com/docs/components/banner/)
:::

Get started with the sticky banner component coded with Tailwind CSS and Flowbite to show marketing, informational and CTA messages to your website visitors fixed to the top or bottom part of the page as the user scrolls down the main content area.

## Default sticky banner

Use this free example to show a text message for an announcement with a CTA link, an icon element and a close button to dismiss the banner.

<fwb-banner-default-example />


```vue
<template>
<fwb-banner closable>
      <div class="bg-gray-50 p-4 dark:bg-gray-700">
        <p class="flex items-center gap-2 text-sm font-normal text-gray-500 dark:text-gray-400">
          <svg class="w-6 h-6 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd"
              d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
              clip-rule="evenodd" />
          </svg>
          <span class="[&_p]:inline">
            New brand identity has been launched for the&nbsp;
            <a href="https://flowbite.com"
              class="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500">
              Flowbite Library
            </a>
          </span>
        </p>
      </div>
    </fwb-banner>
</template>
```

## Bottom banner position

This example can be used to position the sticky banner on the bottom side of the page instead of the top side.

<fwb-banner-bottom-example />

```vue
<template>
<fwb-banner position="bottom" closable>
      <div class="bg-gray-50 p-4 dark:bg-gray-700">
        <p class="flex items-center gap-2 text-sm font-normal text-gray-500 dark:text-gray-400">
          <svg class="w-6 h-6 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd"
              d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
              clip-rule="evenodd" />
          </svg>
          <span class="[&_p]:inline">
            New brand identity has been launched for the&nbsp;
            <a href="https://flowbite.com"
              class="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500">
              Flowbite Library
            </a>
          </span>
        </p>
      </div>
    </fwb-banner>
</template>
```

## More Examples

For more sticky banner examples you can check [banner sections](https://flowbite.com/blocks/marketing/banner/) from Flowbite Blocks.