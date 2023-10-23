<script setup>
import FwbHExampleLevel1 from './typography/heading/FwbHExampleLevel1.vue'
import FwbHExampleLevel2 from './typography/heading/FwbHExampleLevel2.vue'
import FwbHExampleLevel3 from './typography/heading/FwbHExampleLevel3.vue'
import FwbHExampleLevel4 from './typography/heading/FwbHExampleLevel4.vue'
import FwbHExampleLevel5 from './typography/heading/FwbHExampleLevel5.vue'
import FwbHExampleLevel6 from './typography/heading/FwbHExampleLevel6.vue'
import FwbHExampleColor from './typography/heading/FwbHExampleColor.vue'
import FwbHExampleCustom from './typography/heading/FwbHExampleCustom.vue'
</script>

# Vue Heading - Flowbite

#### The heading component defines six levels of title elements from H1 to H6 that are used as titles and subtitles on a web page based on multiple styles and layouts

## Heading one (H1)

Use the `tag="h1"` as the most important text element to indicate the title of your web page.


```vue
<template>
  <fwb-heading tag="h1">Heading 1</fwb-heading>
</template>

<script setup>
import { FwbHeading } from 'flowbite-vue'
</script>
```
<fwb-h-example-level1 />


## Heading two (H2)

The H2 tag can be used as subtitles of the page’s sections.

```vue
<template>
  <fwb-heading tag="h2">Heading 2</fwb-heading>
</template>

<script setup>
import { FwbHeading } from 'flowbite-vue'
</script>
```
<fwb-h-example-level2 />


## Heading three (H3)

Use the H3 tags inside sections that already have a H2 available.

```vue
<template>
  <fwb-heading tag="h3">Heading 3</fwb-heading>
</template>

<script setup>
import { FwbHeading } from 'flowbite-vue'
</script>
```
<fwb-h-example-level3 />


## Heading four (H4)

The H4 can be generally used after H2 and H3 tags are already present and you need a more in-depth hierarchy.

```vue
<template>
  <fwb-heading tag="h4">Heading 4</fwb-heading>
</template>

<script setup>
import { FwbHeading } from 'flowbite-vue'
</script>
```
<fwb-h-example-level4 />


## Heading five (H5)

The H5 tag is most often used in longer articles with other heading already available or in sidebars.

```vue
<template>
  <fwb-heading tag="h5">Heading 5</fwb-heading>
</template>

<script setup>
import { FwbHeading } from 'flowbite-vue'
</script>
```
<fwb-h-example-level5 />


## Heading six (H6)

Using the H6 tag is quite rare because it means that you’ve already used all heading from H1 to H5, but you can still use it if you have a very complex article with lots of headings.

```vue
<template>
  <fwb-heading tag="h6">Heading 6</fwb-heading>
</template>

<script setup>
import { FwbHeading } from 'flowbite-vue'
</script>
```
<fwb-h-example-level6 />


## Color

Use the `color` prop to set the text color.

```vue
<template>
  <fwb-heading color="text-green-400">Green eading</fwb-heading>
</template>

<script setup>
import { FwbHeading } from 'flowbite-vue'
</script>
```
<fwb-h-example-color />


## Custom classes

Use the `class` attribute to apply the tailwind classes.


```vue
<template>
  <fwb-heading class="!text-xl italic underline">Custom heading</fwb-heading>
</template>

<script setup>
import { FwbHeading } from 'flowbite-vue'
</script>
```
<fwb-h-example-custom />
