<script setup>
import FwbProgressExample from './progress/examples/FwbProgressExample.vue'
import FwbProgressExampleSize from './progress/examples/FwbProgressExampleSize.vue'
import FwbProgressExampleLabelInside from './progress/examples/FwbProgressExampleLabelInside.vue'
import FwbProgressExampleLabelOutside from './progress/examples/FwbProgressExampleLabelOutside.vue'
import FwbProgressExampleColor from './progress/examples/FwbProgressExampleColor.vue'
import FwbProgressExampleFileSize from './progress/examples/FwbProgressExampleFileSize.vue'
import FwbProgressExampleTimeRemaining from './progress/examples/FwbProgressExampleTimeRemaining.vue'
import FwbProgressExampleIndeterminate from './progress/examples/FwbProgressExampleIndeterminate.vue'
import FwbProgressExampleCustom from './progress/examples/FwbProgressExampleCustom.vue'
</script>

# Progress Bar - Flowbite Vue

#### Use the progress bar component to show the completion status of a task or process based on Tailwind CSS utility classes

---

:::tip Progress Bar - Flowbite
Original reference: [https://flowbite.com/docs/components/progress/](https://flowbite.com/docs/components/progress/)
:::

The progress bar component can be used to show the completion percentage of a task or process, with support for colors, sizes, an indeterminate loading state, and both inside and outside value variants styled with Tailwind CSS utility classes.

## Default Progress Bar

Use `FwbProgress` with the `progress` prop (0–100) to render a basic horizontal progress bar. `showValue` and `valuePosition="outside"` render the current value next to the `label`, and the default `#value` slot content (<span v-pre>`{{ progress }}%`</span>) can be overridden to format it however you like — here it updates on an interval to demonstrate the bar responding to live data.

Both bars below are bound to the same animating `progress` value, one with the value outside and one with it inside. Watch the second bar as it sweeps through very small values (near `0`) and back — this is the case that used to lose its rounded corner and render an unreadable label, before the fix described in [Value Inside](#value-inside).

<fwb-progress-example />

```vue
<template>
  <fwb-progress
    :progress="progress"
    value-position="outside"
    show-value
    label="Basic Percentage"
  >
    <template #value="{ progress: value }">
      {{ value.toFixed(1) }}%
    </template>
  </fwb-progress>
  <fwb-progress
    :progress="progress"
    value-position="inside"
    show-value
    size="lg"
    label="Same value, shown inside the bar"
  >
    <template #value="{ progress: value }">
      {{ value.toFixed(1) }}%
    </template>
  </fwb-progress>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { FwbProgress } from 'flowbite-vue'

const progress = ref(0)
let timer

onMounted(() => {
  timer = setInterval(() => {
    progress.value = progress.value >= 100 ? 0 : Math.min(100, progress.value + 4.5)
  }, 400)
})

onUnmounted(() => clearInterval(timer))
</script>
```

## Sizes

Use the `size` prop to control the height of the progress bar track. Available sizes are `sm`, `md` (default), `lg`, and `xl`. Combine with `label` to show a description above the bar.

<fwb-progress-example-size />

```vue
<template>
  <div class="grid gap-2">
    <fwb-progress :progress="25" size="sm" label="Small" />
    <fwb-progress :progress="50" size="md" label="Medium" />
    <fwb-progress :progress="75" size="lg" label="Large" />
    <fwb-progress :progress="100" size="xl" label="Extra Large" />
  </div>
</template>

<script setup>
import { FwbProgress } from 'flowbite-vue'
</script>
```

## Value Inside

Set `value-position="inside"` and `show-value` to render the percentage value inside the progress bar. Use `size="lg"` or larger to ensure there is enough space for it. At very small `progress` values the bar is too narrow to fit the value text — it's clipped to the bar's own width rather than spilling onto the track, and is skipped entirely at exactly `0`.

<fwb-progress-example-label-inside />

```vue
<template>
  <fwb-progress
    :progress="50"
    value-position="inside"
    show-value
    size="lg"
  />
</template>

<script setup>
import { FwbProgress } from 'flowbite-vue'
</script>
```

## Value Outside

Set `value-position="outside"` and `show-value` to render the percentage value to the right of the `label` text above the bar.

<fwb-progress-example-label-outside />

```vue
<template>
  <fwb-progress
    :progress="42"
    value-position="outside"
    show-value
    label="Flowbite Vue 3"
  />
</template>

<script setup>
import { FwbProgress } from 'flowbite-vue'
</script>
```

## Custom value formatting

The `value` slot receives the current `progress` as a scoped prop, so you can replace the default <span v-pre>`{{ progress }}%`</span> text with anything — file sizes, time remaining, step counts, and so on. The bar's width still tracks the numeric `progress` prop; only the displayed text changes.

<fwb-progress-example-file-size />

```vue
<template>
  <fwb-progress
    :progress="percentage"
    value-position="outside"
    show-value
    label="File Size Progress"
    color="green"
  >
    <template #value>
      {{ (loaded / 1024).toFixed(2) }} KB / {{ (total / 1024).toFixed(2) }} KB
    </template>
  </fwb-progress>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { FwbProgress } from 'flowbite-vue'

const total = 5000
const loaded = ref(0)
const percentage = computed(() => Math.min(100, (loaded.value / total) * 100))
let timer

onMounted(() => {
  timer = setInterval(() => {
    loaded.value = loaded.value >= total ? 0 : loaded.value + total / 20
  }, 400)
})

onUnmounted(() => clearInterval(timer))
</script>
```

<fwb-progress-example-time-remaining />

```vue
<template>
  <fwb-progress
    :progress="percentage"
    value-position="outside"
    show-value
    label="Time Remaining"
    color="purple"
  >
    <template #value>
      {{ Math.round(percentage) }}% ({{ secondsRemaining }}s remaining)
    </template>
  </fwb-progress>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { FwbProgress } from 'flowbite-vue'

const totalSeconds = 25
const secondsRemaining = ref(totalSeconds)
const percentage = computed(() => ((totalSeconds - secondsRemaining.value) / totalSeconds) * 100)
let timer

onMounted(() => {
  timer = setInterval(() => {
    secondsRemaining.value = secondsRemaining.value <= 0 ? totalSeconds : secondsRemaining.value - 1
  }, 1000)
})

onUnmounted(() => clearInterval(timer))
</script>
```

## Indeterminate

Set the `indeterminate` prop when the completion percentage isn't known yet — e.g. while waiting on a response before real upload/download progress is available. The bar ignores `progress` and animates instead. Pair it with `label` for a status message.

<fwb-progress-example-indeterminate />

```vue
<template>
  <fwb-progress
    indeterminate
    label="Uploading file..."
  />
</template>

<script setup>
import { FwbProgress } from 'flowbite-vue'
</script>
```

## Colors

Use the `color` prop to change the fill color of the progress bar: `default`, `dark`, `blue`, `red`, `green`, `yellow`, `purple`, or `pink`. This is a subset of `FwbButton`'s `color` prop — `alternative` and `light` are excluded, since a white/bordered fill isn't distinguishable from the plain gray track.

<fwb-progress-example-color />

```vue
<template>
  <div class="grid gap-2">
    <fwb-progress :progress="12.5" label="Default" value-position="inside" show-value size="lg" />
    <fwb-progress :progress="25" color="dark" label="Dark" value-position="inside" show-value size="lg" />
    <fwb-progress :progress="37.5" color="blue" label="Blue" value-position="inside" show-value size="lg" />
    <fwb-progress :progress="50" color="red" label="Red" value-position="inside" show-value size="lg" />
    <fwb-progress :progress="62.5" color="green" label="Green" value-position="inside" show-value size="lg" />
    <fwb-progress :progress="75" color="yellow" label="Yellow" value-position="inside" show-value size="lg" />
    <fwb-progress :progress="87.5" color="purple" label="Purple" value-position="inside" show-value size="lg" />
    <fwb-progress :progress="100" color="pink" label="Pink" value-position="inside" show-value size="lg" />
  </div>
</template>

<script setup>
import { FwbProgress } from 'flowbite-vue'
</script>
```

## Custom Styling

Use `inner-classes`, `outer-classes`, and `outside-label-classes` to override any part of the progress bar's default styling with your own Tailwind utilities — useful for one-off colors outside the `color` palette.

<fwb-progress-example-custom />

```vue
<template>
  <fwb-progress
    :progress="50"
    value-position="inside"
    show-value
    size="lg"
    inner-classes="bg-amber-900 dark:bg-green-200 text-amber-100 dark:text-green-900"
    outer-classes="bg-amber-200 dark:bg-green-900"
    outside-label-classes="font-bold text-amber-900 dark:text-green-200"
    label="Custom"
  />
</template>

<script setup>
import { FwbProgress } from 'flowbite-vue'
</script>
```

## Progress Bar component API

### FwbProgress Props

| Name                | Type                                                                                  | Default     | Description                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| color               | `'default' \| 'dark' \| 'blue' \| 'red' \| 'green' \| 'yellow' \| 'purple' \| 'pink'` | `'default'` | Fill color of the inner progress bar. Subset of `FwbButton`'s `color` prop (excludes `alternative`/`light`). |
| indeterminate       | `Boolean`                                                                             | `false`     | Renders an animated, indefinite-length bar instead of a `progress`-driven one, for unknown durations.        |
| innerClasses        | `String \| Object`                                                                    | `''`        | Overrides or extends classes on the inner progress bar element.                                              |
| label               | `String`                                                                              | `''`        | Descriptive text rendered above the bar on the left side.                                                    |
| outerClasses        | `String \| Object`                                                                    | `''`        | Overrides or extends classes on the outer progress track element.                                            |
| outsideLabelClasses | `String \| Object`                                                                    | `''`        | Overrides or extends classes on the label/value text rendered outside the bar.                               |
| progress            | `Number`                                                                              | `0`         | The current completion value (0–100). Ignored when `indeterminate` is set.                                   |
| showValue           | `Boolean`                                                                             | `false`     | When `true`, renders the value (`progress`, or the `value` slot) next to or inside the bar.                  |
| size                | `'sm' \| 'md' \| 'lg' \| 'xl'`                                                        | `'md'`      | Controls the height of the progress bar track.                                                               |
| valuePosition       | `'none' \| 'inside' \| 'outside'`                                                     | `'none'`    | Controls where the value is rendered relative to the bar.                                                    |

### FwbProgress Slots

| Name  | Scope                  | Description                                                                              |
| ----- | ---------------------- | ---------------------------------------------------------------------------------------- |
| value | `{ progress: number }` | Overrides the default <span v-pre>`{{ progress }}%`</span> text wherever the value is shown (inside or outside the bar). |
