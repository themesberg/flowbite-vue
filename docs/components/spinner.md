<script setup>
import FwbSpinnerExample from './spinner/examples/FwbSpinnerExample.vue'
import FwbSpinnerExampleColor from './spinner/examples/FwbSpinnerExampleColor.vue'
import FwbSpinnerExampleSize from './spinner/examples/FwbSpinnerExampleSize.vue'
</script>

# Vue Spinner - Flowbite

#### Use the spinner component as a loader indicator in your projects when fetching data based on an animated SVG using the utility classes from Tailwind CSS

---

:::tip
Original reference: [https://flowbite.com/docs/components/spinner/](https://flowbite.com/docs/components/spinner/)
:::

The spinner component can be used as a loading indicator which comes in multiple colors, sizes, and styles separately or inside elements such as buttons to improve the user experience whenever data is being fetched from your server.

## Basic example

<fwb-spinner-example />
```vue
<template>
  <fwb-spinner />
</template>

<script setup>
import { FwbSpinner } from 'flowbite-vue'
</script>
```

## Prop - size

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

## Prop - color

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
</template>

<script setup>
import { FwbSpinner } from 'flowbite-vue'
</script>
```

## API

### Props
| Name  | Values                                                                                  | Default |
|-------|-----------------------------------------------------------------------------------------|---------|
| color | `blue`, `gray`, `green`, `pink`, `purple`, `red`, `white`, `yellow`                     | `blue`  |
| size  | `0`, `0.5`, `1`, `1.5`, `10`, `11`, `12`, `2`, `2.5`, `3`, `4`, `5`, `6`, `7`, `8`, `9` | `4`     |
