<script setup>
import ToastExample from './examples/ToastExample.vue'
</script>
# Toast

```vue
<script setup>
import { Toast } from 'flowbite-vue'
</script>
<template>
  <Toast type="warning">
    Improve password difficulty.
  </Toast>
  <Toast type="success">
    Item moved successfully.
  </Toast>
  <Toast type="danger">
    Item has been deleted.
  </Toast>
</template>
```

<ToastExample />
