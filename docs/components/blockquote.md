<script setup>
import FwbBlockquoteExample from './typography/blockquote/FwbBlockquoteExample.vue'
import FwbBlockquoteSolidExample from './typography/blockquote/FwbBlockquoteSolidExample.vue'
import FwbBlockquoteAlignExample from './typography/blockquote/FwbBlockquoteAlignExample.vue'
import FwbBlockquoteSizeExample from './typography/blockquote/FwbBlockquoteSizeExample.vue'
</script>

# Vue Blockquote - Flowbite
---

:::tip
Original reference: [https://flowbite.com/docs/typography/blockquote/](https://flowbite.com/docs/typography/blockquote/)
:::

## Get started with a collection of blockquote components when quoting external sources such as quotes inside an article, user reviews, and testimonials based on multiple examples of layouts, styles, and contexts.

## Default blockquote

Use this example to quote an external source inside a `<fwb-blockquote>` component.

<fwb-blockquote-example/>

```vue
<fwb-blockquote>
    "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. 
    Perfect choice for your next SaaS application."
</fwb-blockquote>
```

## Solid background
This example can be used as an alternative style to the default style by applying a solid background color with `type="solid"`.

<fwb-blockquote-solid-example />

```vue
<fwb-blockquote type="solid">
    "Flowbite is just awesome. Perfect choice for your next SaaS application.Perfect choice for your next SaaS application."
</fwb-blockquote>
```

## Alignment

Choose from the following examples the blockquote text alignment from starting from left, center to right based on the utility classes from Tailwind CSS.

<fwb-blockquote-align-example />
```vue
<fwb-blockquote class="text-left">
    "Flowbite is just awesome. Perfect choice for your next SaaS application.Perfect choice for your next SaaS application."
</fwb-blockquote>
<fwb-blockquote class="text-center">
    "Flowbite is just awesome. Perfect choice for your next SaaS application.Perfect choice for your next SaaS application."
</fwb-blockquote>
<fwb-blockquote class="text-right">
    "Flowbite is just awesome. Perfect choice for your next SaaS application.Perfect choice for your next SaaS application."
</fwb-blockquote>
```

## Size

Choose from one of the multiple sizes for the default blockquote component based on the surrounding elements and sizes.

<fwb-blockquote-size-example />
```vue
<fwb-blockquote class="text-lg">
    "Flowbite is just awesome. Perfect choice for your next SaaS application.Perfect choice for your next SaaS application."
</fwb-blockquote>
<fwb-blockquote class="text-xl">
    "Flowbite is just awesome. Perfect choice for your next SaaS application.Perfect choice for your next SaaS application."
</fwb-blockquote>
<fwb-blockquote class="text-2xl">
    "Flowbite is just awesome. Perfect choice for your next SaaS application.Perfect choice for your next SaaS application."
</fwb-blockquote>
```