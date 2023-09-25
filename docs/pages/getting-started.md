# Flowbite Vue - Quickstart

Get started with Flowbite by including it into your project using NPM

Flowbite is a library of components built on top of the utility-classes from Tailwind CSS and it also includes a JavaScript file that makes interactive elements works, such as modals, dropdowns, and more. Learn how to get started by following this quickstart guide.

## Require via NPM

Make sure that you have [Node.js](https://nodejs.org/en/) and [Tailwind CSS](https://tailwindcss.com/) installed.

1. Install `flowbite` and `flowbite-vue` as a dependency using NPM by running the following command:

```bash
npm i flowbite flowbite-vue
```

2. Require Flowbite as a plugin inside the tailwind.config.js and add flowbite-vue dist folder to tailwind content:

```javascript
module.exports = {
  content: [
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [
      require('flowbite/plugin')
  ],
  theme: {}
}
```

3. Now you can use `flowbite-vue` anywhere in your project and build awesome interfaces:
```vue
<template>
  <dropdown text="Click me" placement="top">
    <list-group>
      <list-group-item>Item #1</list-group-item>
      <list-group-item>Item #2</list-group-item>
      <list-group-item>Item #3</list-group-item>
    </list-group>
  </dropdown>
</template>
<script setup>
import { Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'
</script>
```
