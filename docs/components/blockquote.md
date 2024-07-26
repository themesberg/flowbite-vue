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

#### Get started with a collection of blockquote components when quoting external sources such as quotes inside an article, user reviews, and testimonials based on multiple examples of layouts, styles, and contexts. Each example will demonstrate different ways to customize the blockquote using props like `size`, `align`, `type`, and `cite`.

## Default blockquote

Use this example to quote an external source inside a `<FwbBlockquote>` component.

<FwbBlockquoteExample/>

```vue
<FwbBlockquote>
    "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. 
    Perfect choice for your next SaaS application."
</FwbBlockquote>
```

## Solid background
This example can be used as an alternative style to the default style by applying a solid background color with `type="solid"`.

<FwbBlockquoteSolidExample />

```vue
<FwbBlockquote type="solid">
    "Flowbite is just awesome.Perfect choice for your next SaaS application."
</FwbBlockquote>
```

## Alignment

From the examples below, select the blockquote text alignment based on the `align`prop, starting from the left and moving from middle to right.

<FwbBlockquoteAlignExample align="left" />
<hr />
<br/>
<FwbBlockquoteAlignExample align="center" />
<hr />
<br/>
<FwbBlockquoteAlignExample align="right" />

```vue
<FwbBlockquote align="left">
    "Flowbite is just awesome. Perfect choice for your next SaaS application."
</FwbBlockquote>
<FwbBlockquote align="center">
    "Flowbite is just awesome. Perfect choice for your next SaaS application."
</FwbBlockquote>
<FwbBlockquote align="right">
    "Flowbite is just awesome. Perfect choice for your next SaaS application."
</FwbBlockquote>
```

## Size

Choose from multiple sizes with the `size` prop for the default blockquote component based on surrounding elements and dimensions.

<FwbBlockquoteSizeExample size="sm" />
<hr />
<br/>
<FwbBlockquoteSizeExample size="md" />
<hr />
<br/>
<FwbBlockquoteSizeExample size="lg" />

```vue
<FwbBlockquote size="sm">
    "Flowbite is just awesome. Perfect choice for your next SaaS application."
</FwbBlockquote>
<FwbBlockquote size="md">
    "Flowbite is just awesome. Perfect choice for your next SaaS application."
</FwbBlockquote>
<FwbBlockquote size="lg">
    "Flowbite is just awesome. Perfect choice for your next SaaS application."
</FwbBlockquote>
```