<script setup>
import FwbIndicatorExample from './indicator/examples/FwbIndicatorExample.vue'
import FwbIndicatorPositionExample from './indicator/examples/FwbIndicatorPositionExample.vue'
</script>

# Vue Indicator - Flowbite

#### Use the indicator component to show a number count, account status, or as a loading label positioned relative to the parent component coded with Tailwind CSS

---

:::tip
Original reference: [https://flowbite.com/docs/components/indicators/](https://flowbite.com/docs/components/indicators/)
:::

The indicator component can be used as a small element positioned absolutely relative to another component such as a button or card and show a number count, account status (red for offline, green for online) and other useful information.

Check out the following examples for multiple sizes, colors, positionings, styles, and more all coded with Tailwind CSS and Flowbite.

## Default Indicator

Use this example to create a simple indicator with multiple colors and position it anywhere on the website.

<fwb-indicator-example />
```vue
<template>
    <fwb-indicator />
    <fwb-indicator type="dark" />
    <fwb-indicator type="blue" />
    <fwb-indicator type="green" />
    <fwb-indicator type="red" />
    <fwb-indicator type="indigo" />
    <fwb-indicator type="purple" />
    <fwb-indicator type="yellow" />
    <fwb-indicator type="teal" />
</template>
```

## Indicator position

Use these examples to position the indicator component anywhere relative to the parent element.

<fwb-indicator-position-example />
<br />

```vue
<template>
    <div class='relative'>
        <fwb-indicator class="absolute top-0 -translate-y-1/2 -translate-x-1/2 text-xs w-auto px-2 h-4 text-white" type="blue">top-left</fwb-indicator>
        <fwb-indicator class="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 text-xs w-auto px-2 h-4 text-white" type="blue">top-center</fwb-indicator>
        <fwb-indicator class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 text-xs w-auto px-2 h-4 text-white" type="blue">top-right</fwb-indicator>
        <fwb-indicator class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 text-xs w-auto px-2 h-4 text-white" type="blue">middle-left</fwb-indicator>
        <fwb-indicator class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-xs w-auto px-2 h-4 text-white" type="blue">middle-center</fwb-indicator>
        <fwb-indicator class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 text-xs w-auto px-2 h-4 text-white" type="blue">middle-right</fwb-indicator>
        <fwb-indicator class="absolute bottom-0 translate-y-1/2 -translate-x-1/2 text-xs w-auto px-2 h-4 text-white" type="blue">bottom-left</fwb-indicator>
        <fwb-indicator class="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 text-xs w-auto px-2 h-4 text-white" type="blue">bottom-center</fwb-indicator>
        <fwb-indicator class="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 text-xs w-auto px-2 h-4 text-white" type="blue">bottom-right</fwb-indicator>
    </div>
</template>
```