<script setup>
import FwbToggleExample from './toggle/examples/FwbToggleExample.vue'
import FwbToggleExampleChecked from './toggle/examples/FwbToggleExampleChecked.vue'
import FwbToggleExampleColors from './toggle/examples/FwbToggleExampleColors.vue'
import FwbToggleExampleDisabled from './toggle/examples/FwbToggleExampleDisabled.vue'
import FwbToggleExampleHelper from './toggle/examples/FwbToggleExampleHelper.vue'
import FwbToggleExampleOrder from './toggle/examples/FwbToggleExampleOrder.vue'
import FwbToggleExampleSize from './toggle/examples/FwbToggleExampleSize.vue'
import FwbToggleExampleStyling from './toggle/examples/FwbToggleExampleStyling.vue'
import FwbToggleExampleValidation from './toggle/examples/FwbToggleExampleValidation.vue'
</script>

# Vue Toggle - Flowbite

#### Use the toggle component to switch between a binary state of true or false using a single click available in multiple sizes, variants, and colors

---

:::tip
Original reference: [https://flowbite.com/docs/forms/toggle/](https://flowbite.com/docs/forms/toggle/)
:::

The toggle component can be used to receive a simple "yes" or "no" type of answer from the user by choosing a single option from two options available in multiple sizes, styles, and colors coded with the utility classes from Tailwind CSS and with dark mode support.

## Default toggle

<fwb-toggle-example />
```vue
<template>
  <fwb-toggle v-model="toggle" label="Toggle me" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbToggle } from 'flowbite-vue'

const toggle = ref(false)
</script>

```

## Checked toggle

<fwb-toggle-example-checked />
```vue
<template>
  <fwb-toggle v-model="toggle" label="Toggle me" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbToggle } from 'flowbite-vue'

const toggle = ref(true)
</script>
```

## Disabled toggle

<fwb-toggle-example-disabled />
```vue
<template>
  <fwb-toggle v-model="toggle" disabled label="Can't Toggle me" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbToggle } from 'flowbite-vue'

const toggle = ref(false)
</script>

```

## Colors

<fwb-toggle-example-colors />
```vue
<template>
  <fwb-toggle label="Red" color="red" />
  <fwb-toggle label="Green" color="green" />
  <fwb-toggle label="Purple" color="purple" />
  <fwb-toggle label="Yellow" color="yellow" />
  <fwb-toggle label="Teal" color="teal" />
  <fwb-toggle label="Orange" color="orange" />
</template>
```

## Size

<fwb-toggle-example-size />
```vue
<template>
  <fwb-toggle label="Small" size="sm" />
  <fwb-toggle label="Medium" size="md" />
  <fwb-toggle label="Large" size="lg" />
  <fwb-toggle label="Extra Large" size="xl" />
</template>
```

## Label position

<fwb-toggle-example-order />
```vue
<template>
  <fwb-toggle label="Toggle me" />
  <fwb-toggle label="Toggle me" reverse />
</template>
```

## Validation

Use `validationStatus` together with the `validationMessage` slot to show success or error feedback below the toggle.

<fwb-toggle-example-validation />
```vue
<template>
  <fwb-toggle v-model="toggle1" label="Notifications (success)" validation-status="success">
    <template #validationMessage>
      <span class="font-medium">Great!</span> Notifications are enabled.
    </template>
  </fwb-toggle>
  <fwb-toggle v-model="toggle2" label="Location (error)" validation-status="error">
    <template #validationMessage>
      <span class="font-medium">Required!</span> Location access must be enabled.
    </template>
  </fwb-toggle>
</template>
```

## Helper text

Use the `helper` slot to show a hint below the toggle.

<fwb-toggle-example-helper />
```vue
<template>
  <fwb-toggle v-model="toggle" label="Dark mode">
    <template #helper>
      Switches the interface between light and dark themes.
    </template>
  </fwb-toggle>
</template>
```

## Styling

Use dedicated props to pass classes to individual elements.

<fwb-toggle-example-styling />
```vue
<template>
  <fwb-toggle
    v-model="toggle"
    label="Enable feature"
    class="bg-amber-200 dark:bg-green-900 peer-checked:bg-amber-600 dark:peer-checked:bg-green-500 peer-focus:ring-amber-300 dark:peer-focus:ring-green-800"
    label-class="font-bold text-amber-900 dark:text-green-200"
    wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg p-3"
  />
</template>
```

## Toggle component API

### FwbToggle Props

:::tip Native attribute passthrough
`FwbToggle` sets `inheritAttrs: false` and forwards all extra attributes (e.g. `name`, `form`, `aria-label`) directly to the `<input type="checkbox">` element.
:::

| Name             | Type                           | Default     | Description                                                                      |
| ---------------- | ------------------------------ | ----------- | -------------------------------------------------------------------------------- |
| class            | `String \| Object`             | `''`        | Added to the toggle background element.                                          |
| color            | `String`                       | `''`        | Accent color when checked: `red`, `green`, `purple`, `yellow`, `teal`, `orange`. |
| disabled         | `Boolean`                      | `false`     | Disables the toggle.                                                             |
| label            | `String`                       | `''`        | Label text rendered next to the toggle. When empty, no text is rendered.         |
| labelClass       | `String \| Object`             | `''`        | Added to the label text element.                                                 |
| modelValue       | `Boolean`                      | `false`     | The current value (use with `v-model`).                                          |
| reverse          | `Boolean`                      | `false`     | Places the label text to the left of the toggle.                                 |
| size             | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`      | Controls the size of the toggle track and thumb.                                 |
| validationStatus | `'success' \| 'error'`         | `undefined` | Applies success or error colour styles to the label text.                        |
| wrapperClass     | `String \| Object`             | `''`        | Added to the outer root `<div>`.                                                 |

:::tip Accessibility
`aria-invalid="true"` is set automatically on the native checkbox when `validationStatus="error"`. `aria-describedby` is wired to the IDs of any rendered `validationMessage` and `helper` slots, and is merged with any `aria-describedby` value you pass as an attribute. When no `label` prop is provided, pass `aria-label` as an attribute to maintain an accessible name — it is forwarded directly to the `<input>`.
:::

### FwbToggle Slots

| Name              | Description                                                                   |
| ----------------- | ----------------------------------------------------------------------------- |
| helper            | Helper text rendered below the toggle.                                        |
| validationMessage | Validation feedback rendered below the toggle (styled by `validationStatus`). |
