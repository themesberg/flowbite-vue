<script setup>
import FwbDatepickerExampleDefault from './datepicker/examples/FwbDatepickerExampleDefault.vue'
import FwbDatepickerExampleCustomIcon from './datepicker/examples/FwbDatepickerExampleCustomIcon.vue'
</script>

# Vue Datepicker - Flowbite

#### Get started with the datepicker component to let the user choose dates in the form with multiple styles and colors

:::tip
Original reference: [https://flowbite.com/docs/plugins/datepicker/](https://flowbite.com/docs/components/accordion/)\
Options: [https://github.com/themesberg/flowbite-datepicker/blob/master/docs/options.md](https://github.com/themesberg/flowbite-datepicker/blob/master/docs/options.md)
:::

<fwb-datepicker-example-default></fwb-datepicker-example-default>

```vue
<template>
  <fwb-datepicker></fwb-datepicker>
</template>

<script setup lang="ts">
import { FwbDatepicker } from '../../../../src/index'
</script>
```

Here is an example with some more customization.
<fwb-datepicker-example-custom-icon></fwb-datepicker-example-custom-icon>

```vue
<template>
  <fwb-datepicker
      v-model="model"
      autohide
      format="DD dd MM yyyy"
      clear-btn
      today-btn
      :today-btn-mode="1"
      title="Example datepicker"
      :week-start="1"
  >
    <template #calendar-icon>
      <calendar-icon></calendar-icon>
    </template>
  </fwb-datepicker>
</template>

<script setup lang="ts">
import { FwbDatepicker } from '../../../../src/index'
import CalendarIcon from '../assets/CalendarIcon.vue'

const model = defineModel({ default: new Date() })
</script>
```
