<script setup>
import H1 from './typography/heading/H1.vue'
import H2 from './typography/heading/H2.vue'
import H3 from './typography/heading/H3.vue'
import H4 from './typography/heading/H4.vue'
import H5 from './typography/heading/H5.vue'
import H6 from './typography/heading/H6.vue'
import HColor from './typography/heading/HColor.vue'
import HCustom from './typography/heading/HCustom.vue'
</script>

# Svelte Heading - Flowbite

#### The heading component defines six levels of title elements from H1 to H6 that are used as titles and subtitles on a web page based on multiple styles and layouts

## Heading one (H1)

Use the `tag="h1"` as the most important text element to indicate the title of your web page.

```vue
<template>
  <Heading tag="h1">This is my heading</Heading>
</template>

<script setup>
import Heading from 'flowbite-vue'
</script>
```

<H1 />

## Heading one (H2)

The H2 tag can be used as subtitles of the page’s sections.

```vue
<template>
  <Heading tag="h2">This is my heading</Heading>
</template>

<script setup>
import Heading from 'flowbite-vue'
</script>
```

<H2 />

## Heading one (H3)

Use the H3 tags inside sections that already have a H2 available.

```vue
<template>
  <Heading tag="h3">This is my heading</Heading>
</template>

<script setup>
import Heading from 'flowbite-vue'
</script>
```

<H3 />

## Heading one (H4)

The H4 can be generally used after H2 and H3 tags are already present and you need a more in-depth hierarchy.

```vue
<template>
  <Heading tag="h4">This is my heading</Heading>
</template>

<script setup>
import Heading from 'flowbite-vue'
</script>
```

<H4 />

## Heading one (H5)

The H5 tag is most often used in longer articles with other heading already available or in sidebars.

```vue
<template>
  <Heading tag="h5">This is my heading</Heading>
</template>

<script setup>
import Heading from 'flowbite-vue'
</script>
```

<H5 />

## Heading one (H6)

Using the H6 tag is quite rare because it means that you’ve already used all heading from H1 to H5, but you can still use it if you have a very complex article with lots of headings.

```vue
<template>
  <Heading tag="h6">This is my heading</Heading>
</template>

<script setup>
import Heading from 'flowbite-vue'
</script>
```

<H6 />

## Color

Use the `color` prop to set the text color.

```vue
<template>
  <Heading color="text-green-400" tag="h1">This is my heading</Heading>
</template>

<script setup>
import Heading from 'flowbite-vue'
</script>
```

<HColor />

## Custom classes

Use the `class` attribute to apply the tailwind classes.

```vue
<template>
  <Heading class="!text-xl italic underline" tag="h1">This is my heading</Heading>
</template>

<script setup>
import Heading from 'flowbite-vue'
</script>
```

<HCustom />
