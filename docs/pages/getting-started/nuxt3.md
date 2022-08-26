# Flowbite Vue - Quickstart with Nuxt 3

_Nuxt 3 is currently in release candidate status (rc3), and is subject to breaking changes. Should this guide no longer function, please let us know by [opening a github issue](https://github.com/themesberg/flowbite-vue/issues)._

## Install Nuxt 3

We'll be using npm for this example. Start by running the following command, which will generate a basic Nuxt 3 installation.

```text
npx nuxi init my-project
cd my-project
npm install
```

## Install NuxtTailwind

Next, install the [Nuxt Tailwind](https://tailwindcss.nuxtjs.org/) module with the following command. This will add TailwindCSS to your Nuxt 3 installation.

```text
npm install --save-dev @nuxtjs/tailwindcss
```

Now we need to tell Nuxt how to use Tailwind. Add the following module to your `nuxt.config.ts` configuration file.

```javascript
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
})
```

Finally, generate your `tailwind.config.js` file by running this command.

```text
npx tailwindcss init
```

## Install Flowbite-Vue

Now that we have a running instance of Nuxt 3 with Tailwind, we can install Flowbite Vue by following the [Flowbite-Vue Quickstart Guide](/pages/getting-started/vue)
