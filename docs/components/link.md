<script setup>
import A from './typography/link/A.vue'
import APara from './typography/link/APara.vue'
import ACustom from './typography/link/ACustom.vue'
</script>

# Vue Links - Flowbite

#### The link component can be used to set hyperlinks from one page to another or to an external website when clicking on an inline text item, button, or card

## Default link

Use this example to set default styles to an inline link element.

```vue
<template>
  <A href="/"> Flowbite-vue </A>
</template>

<script setup>
import A from 'flowbite-vue'
</script>
```

<A />

## Para link

Use this example to set a link inside a paragraph with an underline style.

```vue
<template>
  <P>
    The free updates that will be provided is based on the <A href="/" class="underline hover:no-underline">roadmap</A> that we have laid out for this project. It is also possible that we will provide
    extra updates outside of the roadmap as well.
  </P>
</template>

<script setup>
import { P, A } from 'flowbite-vue'
</script>
```

<APara />

## Custom classes

Use `class` attribute prop to apply the tailwind classes.

```vue
<template>
  <A class="underline italic" href="/"> Flowbite-vue </A>
</template>

<script setup>
import A from 'flowbite-vue'
</script>
```

<ACustom />
