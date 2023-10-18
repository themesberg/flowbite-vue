<script setup>
import FwbFileInputExample from './fileInput/examples/FwbFileInputExample.vue'
import FwbFileInputExampleHelper from './fileInput/examples/FwbFileInputExampleHelper.vue'
import FwbFileInputExampleSize from './fileInput/examples/FwbFileInputExampleSize.vue'
import FwbFileInputExampleDropZone from './fileInput/examples/FwbFileInputExampleDropZone.vue'
import FwbFileInputExampleMultiple from './fileInput/examples/FwbFileInputExampleMultiple.vue'
</script>

# Vue FileInput - Flowbite

#### Get started with the file input component to let the user to upload one or more files from their device storage based on multiple styles and sizes

:::tip
Original reference: [https://flowbite.com/docs/forms/file-input/](https://flowbite.com/docs/forms/file-input/)
:::

## File upload example

<fwb-file-input-example />
```vue
<template>
  <fwb-file-input v-model="file" label="Upload file" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const file = ref(null)
</script>
```

## Multiple File upload

<fwb-file-input-example-multiple />
```vue
<template>
  <fwb-file-input v-model="files" label="Upload file" multiple />
  <div v-if="files.length !== 0" class="mt-4 border-[1px] border-gray-300 dark:border-gray-600 p-2 rounded-md">
    <div v-for="file in files" :key="file">
      {{ file.name }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const files = ref([])
</script>
```

## Helper text

<fwb-file-input-example-helper />
```vue
<template>
  <fwb-file-input v-model="file" label="Upload file">
    <p class="!mt-1 text-sm text-gray-500 dark:text-gray-300">
      SVG, PNG, JPG or GIF (MAX. 800x400px).
    </p>
  </fwb-file-input>
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const file = ref(null)
</script>
```

## Sizes

<fwb-file-input-example-size />
```vue
<template>
  <fwb-file-input v-model="file" label="Small size" size="xs" />
  <fwb-file-input v-model="file" label="Default size" size="sm" />
  <fwb-file-input v-model="file" label="Large size" size="lg" />
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const file = ref(null)
</script>
```

## Dropone


<fwb-file-input-example-drop-zone />
```vue
<template>
  <fwb-file-input v-model="file" dropzone />
</template>

<script setup>
import { ref } from 'vue'
import { FwbFileInput } from 'flowbite-vue'

const file = ref(null)
</script>
```
