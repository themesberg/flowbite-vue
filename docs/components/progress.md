<script setup>
import ProgressExample from './progress/examples/ProgressExample.vue'
import ProgressSizeExample from './progress/examples/ProgressSizeExample.vue'
import ProgressInsideLabelExample from './progress/examples/ProgressInsideLabelExample.vue'
import ProgressOutsideLabelExample from './progress/examples/ProgressOutsideLabelExample.vue'
import ProgressColorExample from './progress/examples/ProgressColorExample.vue'


</script>
# Vue Progress Bar - Flowbite

## Default

```vue
<script setup>
import { Progress } from 'flowbite-vue'
</script>
<template>
  <Progress progress="45"></Progress>
</template>
```

<ProgressExample />

## Sizes
You can also use different sizes by using various sizing.

```vue
<script setup>
import { Progress } from 'flowbite-vue'
</script>
<template>
  <!-- small size -->
  <Progress size="sm" label="Small" progress="45"></Progress>
  <!-- medium size -->
  <Progress size="md" label="Medium" progress="45"></Progress>
  <!-- large size -->
  <Progress size="lg" label="Large" progress="45"></Progress>
  <!-- extra large size -->
  <Progress size="xl" label="Extra Large" progress="45"></Progress>
</template>
```

<ProgressSizeExample />

## With label inside
Here is an example of using a progress bar with the label inside the bar.

```vue
<script setup>
import { Progress } from 'flowbite-vue'
</script>
<template>
  <Progress labelProgress="true" labelPosition="inside" size="lg" progress="45"></Progress>
</template>
```

<ProgressInsideLabelExample />

## With label outside
And this is an example of using a progress bar outside the bar.

```vue
<script setup>
import { Progress } from 'flowbite-vue'
</script>
<template>
  <Progress labelProgress="true" labelPosition="outside" label="Flowbite Vue 3" progress="45"></Progress>
</template>
```

<ProgressOutsideLabelExample />

## Colors
You can also apply color.

```vue
<script setup>
import { Progress } from 'flowbite-vue'
</script>
<template>
  <!-- Default color -->
  <Progress label="Default" progress="45"></Progress>
  <!-- Dark -->
  <Progress color="dark" label="Dark" progress="45"></Progress>
  <!-- Blue -->
  <Progress color="blue" label="Blue" progress="45"></Progress>
  <!-- Red -->
  <Progress color="red" label="Red" progress="45"></Progress>
  <!-- Green -->
  <Progress color="green" label="Green" progress="45"></Progress>
  <!-- Yellow -->
  <Progress color="yellow" label="Yellow" progress="45"></Progress>
  <!-- Indigo -->
  <Progress color="indigo" label="Indigo" progress="45"></Progress>
  <!-- Purple -->
  <Progress color="purple" label="Purple" progress="45"></Progress>

</template>
```

<ProgressColorExample />
