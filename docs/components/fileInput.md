<script setup>
import FileInpDefault from './fileInput/examples/FileInpDefault.vue'
import FileInpHelper from './fileInput/examples/FileInpHelper.vue'
import FileInpSize from './fileInput/examples/FileInpSize.vue'
import FileInpDropZone from './fileInput/examples/FileInpDropZone.vue'
</script>

# Vue FileInput - Flowbite

#### Get started with the file input component to let the user to upload one or more files from their device storage based on multiple styles and sizes

:::tip
Original reference: [https://flowbite.com/docs/forms/file-input/](https://flowbite.com/docs/forms/file-input/)
:::

## File upload example

```vue
<template>
  <FileInput v-model="file" label="Upload file" />
</template>

<script setup>
import FileInput from 'flowbite-vue'
import { ref } from 'vue'

const file = ref('')
</script>
```

<FileInpDefault />

## Helper text

```vue
<template>
  <FileInput label="Upload file">
    <p class='!mt-1 text-sm text-gray-500 dark:text-gray-300'>SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
  </FileInput>
</template>

<script setup>
import FileInput from 'flowbite-vue'
</script>
```

<FileInpHelper />

## Sizes

```vue
<template>
  <div>
    <FileInput size="xs" label="Small size" />
    <FileInput size="sm" label="Default size" />
    <FileInput size="lg" label="Large size" />
  </div>
</template>

<script setup>
import FileInput from 'flowbite-vue'
</script>
```

<FileInpSize />

## Dropone


```vue
<template>
  <FileInput :dropzone="true">
    <p class="!mt-1 text-xs text-gray-500 dark:text-gray-400">
      SVG, PNG, JPG or GIF (MAX. 800x400px)
    </p>
  </FileInput>
</template>

<script setup>
import FileInput from 'flowbite-vue'
</script>
```

<FileInpDropZone />
