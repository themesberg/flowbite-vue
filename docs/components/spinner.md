<script setup>
import FwbSpinnerExample from './spinner/examples/FwbSpinnerExample.vue'
import FwbSpinnerExampleColor from './spinner/examples/FwbSpinnerExampleColor.vue'
import FwbSpinnerExampleSize from './spinner/examples/FwbSpinnerExampleSize.vue'
</script>

# Spinner - Flowbite Vue

#### Use the spinner component as a loader indicator in your projects when fetching data based on an animated SVG using the utility classes from Tailwind CSS

---

:::tip Spinner - Flowbite
Original reference: [https://flowbite.com/docs/components/spinner/](https://flowbite.com/docs/components/spinner/)
:::

The spinner component can be used as a loading indicator which comes in multiple colors, sizes, and styles separately or inside elements such as buttons to improve the user experience whenever data is being fetched from your server.

## Default

Use `FwbSpinner` to display a circular loading indicator.

<fwb-spinner-example />
```vue
<template>
  <fwb-spinner />
</template>

<script setup>
import { FwbSpinner } from 'flowbite-vue'
</script>
```

## Sizes

Use the `size` prop to control the spinner dimensions using a Tailwind spacing unit (e.g. `'4'` = 1rem, `'8'` = 2rem).

<fwb-spinner-example-size />
```vue
<template>
  <fwb-spinner />
  <fwb-spinner size="6" />
  <fwb-spinner size="8" />
  <fwb-spinner size="10" />
  <fwb-spinner size="12" />
</template>

<script setup>
import { FwbSpinner } from 'flowbite-vue'
</script>
```

## Colors

Use the `color` prop to choose from named colors or pass any hex string (e.g. `'#3fb984'`) for a fully custom fill color.

<fwb-spinner-example-color />
```vue
<template>
  <fwb-spinner color="blue" />
  <fwb-spinner color="gray" />
  <fwb-spinner color="green" />
  <fwb-spinner color="pink" />
  <fwb-spinner color="purple" />
  <fwb-spinner color="red" />
  <fwb-spinner color="white" />
  <fwb-spinner color="yellow" />
  <fwb-spinner color="#3fb984" /> <!-- Custom color -->
</template>

<script setup>
import { FwbSpinner } from 'flowbite-vue'
</script>
```

## Spinner component API

### FwbSpinner Props

| Name  | Type                                                                              | Default  | Description                                                                        |
| ----- | --------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------- |
| color | `'blue' \| 'gray' \| 'green' \| 'pink' \| 'purple' \| 'red' \| 'white' \| 'yellow' \| String` | `'blue'` | Fill color of the spinner. Accepts a named color or any hex string (e.g. `'#3fb984'`). |
| size  | `'0' \| '0.5' \| '1' \| '1.5' \| '2' \| '2.5' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' \| '10' \| '11' \| '12'` | `'4'` | Spinner size mapped to a Tailwind spacing unit. |
