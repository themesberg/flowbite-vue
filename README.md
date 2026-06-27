<div align="center">
  <h1>flowbite-vue</h1>
  <p>
    <a href="https://flowbite.com">
      <img alt="Flowbite - Tailwind CSS components" width="350" src="./docs/assets/github.png">
    </a>
  </p>
  <p>
    Build websites even faster with components on top of Vue and Tailwind CSS
  </p>
  <p>
    <a href="https://codecov.io/gh/themesberg/flowbite-vue">
      <img src="https://codecov.io/gh/themesberg/flowbite-vue/branch/main/graph/badge.svg?token=wnw40SeY4k"/>
    </a>
    <a href="https://discord.com/invite/4eeurUVvTy">
      <img src="https://img.shields.io/discord/902911619032576090?color=%237289da&label=Discord" alt="Discord">
    </a>
    <a href="https://www.npmjs.com/package/flowbite-vue">
      <img src="https://img.shields.io/npm/dt/flowbite-vue.svg" alt="Total Downloads">
    </a>
    <a href="https://badge.fury.io/js/flowbite-vue">
      <img alt="Latest release" src="https://badge.fury.io/js/flowbite-vue.svg">
    </a>
    <a href="https://flowbite.com/getting-started/license/">
      <img src="https://img.shields.io/badge/license-MIT-blue" alt="Licenese">
    </a>
  </p>
</div>

---

### `flowbite-vue` is an open source collection of UI components, built in Vue, with utility classes from Tailwind CSS that you can use as a starting point for user interfaces and websites.

## Table of Contents

- [Documentation](#documentation)
- [Getting started](#getting-started)
    - [Require via `npm`](#require-via--npm-)
    - [Include via CDN](#include-via-cdn)
- [Components](#components)
- [Community](#community)
- [Contributing](#contributing)
- [Figma](#figma)
- [Copyright and license](#copyright-and-license)

## Documentation

Documentation for `flowbite-vue` is not yet finished.

If you want to browse the components, visit [flowbite.com](https://flowbite.com/).

If you want to learn more about Flowbite, visit [Flowbite docs](https://flowbite.com/docs/getting-started/introduction/).

## Getting started

To use `flowbite-vue`, you just need to setup `flowbite` normally and install `flowbite-vue` from `npm`.

`flowbite` can be included as a plugin into an existing Tailwind CSS project.

### Require via `npm`

Make sure that you have <a href="https://nodejs.org/en/" rel="nofollow" >Node.js</a> and <a href="https://tailwindcss.com/" rel="nofollow" >Tailwind CSS</a> installed.

1. Install `flowbite` as a dependency using `npm` by running the following command:

```bash
npm i flowbite flowbite-vue
```

2. Require `flowbite` as a plugin inside the `tailwind.config.js` file:

```javascript
module.exports = {
  content: [
    ...,
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [..., require('flowbite/plugin')],
};
```

## Components

<table>
  <tr>
    <td width="33.3333%">Alerts</td>
    <td width="33.3333%">Badge</td>
    <td width="33.3333%">Breadcrumbs</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/alert">
            <img alt="Tailwind CSS Alerts" src="./docs/assets/github/alerts.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/badge">
            <img alt="Tailwind CSS Badge" src="./docs/assets/github/badge.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/breadcrumb">
            <img alt="Tailwind CSS Breadcrumbs" src="./docs/assets/github/breadcrumbs.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Buttons</td>
    <td width="33.3333%">Button group</td>
    <td width="33.3333%">Cards</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/button">
            <img alt="Tailwind CSS Buttons" src="./docs/assets/github/buttons.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/button-group">
            <img alt="Tailwind CSS Button Group" src="./docs/assets/github/button-group.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/card">
            <img alt="Tailwind CSS Cards" src="./docs/assets/github/cards.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Dropdown</td>
    <td width="33.3333%">:construction: Forms</td>
    <td width="33.3333%">List group</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/dropdown">
            <img alt="Tailwind CSS Dropdown" src="./docs/assets/github/dropdown.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/input">
            <img alt="Tailwind CSS Forms" src="./docs/assets/github/forms.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/list-group">
            <img alt="Tailwind CSS List group" src="./docs/assets/github/list-group.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">:construction: Typography</td>
    <td width="33.3333%">Modal</td>
    <td width="33.3333%">Tabs</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/components/typography/">
            <img alt="Tailwind CSS Typography" src="./docs/assets/github/typography.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/modal">
            <img alt="Tailwind CSS Modal" src="./docs/assets/github/modal.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/tabs">
            <img alt="Tailwind CSS Tabs" src="./docs/assets/github/tabs.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Navbar</td>
    <td width="33.3333%">Pagination</td>
    <td width="33.3333%">Timeline</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/navbar">
            <img alt="Tailwind CSS Navbar" src="./docs/assets/github/navbar.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/pagination">
            <img alt="Tailwind CSS Pagination" src="./docs/assets/github/pagination.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/timeline">
            <img alt="Tailwind CSS Timeline" src="./docs/assets/github/timeline.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Progress bar</td>
    <td width="33.3333%">Tables</td>
    <td width="33.3333%">Toast</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/progress">
            <img alt="Tailwind CSS Progress Bar" src="./docs/assets/github/progress.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/table">
            <img alt="Tailwind CSS Tables" src="./docs/assets/github/tables.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/alert">
            <img alt="Tailwind CSS Toast" src="./docs/assets/github/toast.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Tooltips</td>
    <td width="33.3333%">:construction: Datepicker</td>
    <td width="33.3333%">Spinner</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/tooltip">
            <img alt="Tailwind CSS Tooltips" src="./docs/assets/github/tooltips.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/plugins/datepicker">
            <img alt="Tailwind CSS Datepicker" src="./docs/assets/github/datepicker.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/spinner">
            <img alt="Tailwind CSS Spinner" src="./docs/assets/github/spinner.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Footer</td>
    <td width="33.3333%">Accordion</td>
    <td width="33.3333%">:construction: Sidebar</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/footer">
            <img alt="Tailwind CSS Footer" src="./docs/assets/github/footer.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/accordion">
            <img alt="Tailwind CSS Accordion" src="./docs/assets/github/accordion.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/sidebar">
            <img alt="Tailwind CSS Sidebar" src="./docs/assets/github/sidebar.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Carousel</td>
    <td width="33.3333%">Avatar</td>
    <td width="33.3333%">Rating</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/carousel">
            <img alt="Tailwind CSS Carousel" src="./docs/assets/github/carousel.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/avatar">
            <img alt="Tailwind CSS Avatar" src="./docs/assets/github/avatar.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/rating">
            <img alt="Tailwind CSS Rating" src="./docs/assets/github/rating.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Input Field</td>
    <td width="33.3333%">File Input</td>
    <td width="33.3333%">:construction: Search Input</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/input">
            <img alt="Tailwind CSS Input Field" src="./docs/assets/github/input-field.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/fileInput">
            <img alt="Tailwind CSS File Input" src="./docs/assets/github/file-input.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/forms/search-input/">
            <img alt="Tailwind CSS Search Input" src="./docs/assets/github/search-input.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Select</td>
    <td width="33.3333%">Textarea</td>
    <td width="33.3333%">Checkbox</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/select">
            <img alt="Tailwind CSS Select" src="./docs/assets/github/select.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/textarea">
            <img alt="Tailwind CSS Textarea" src="./docs/assets/github/textarea.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/checkbox">
            <img alt="Tailwind CSS Checkbox" src="./docs/assets/github/checkbox.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Radio</td>
    <td width="33.3333%">Toggle</td>
    <td width="33.3333%">Range Slider</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/radio">
            <img alt="Tailwind CSS Radio" src="./docs/assets/github/radio.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-vue.com/components/toggle">
            <img alt="Tailwind CSS Toggle" src="./docs/assets/github/toggle.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/forms/range/">
            <img alt="Tailwind CSS Range Slider" src="./docs/assets/github/range-slider.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">:construction: Floating Label</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite.com/docs/forms/floating-label/">
            <img alt="Tailwind CSS Floating Label" src="./docs/assets/github/floating-label.jpg">
        </a>
    </td>
  </tr>
</table>

## Community

If you need help or just want to discuss about the library join the community on Github:

⌨️ [Discuss about Flowbite on GitHub](https://github.com/themesberg/flowbite/discussions)

For casual chatting with others using the library:

💬 [Join the Flowbite Discord Server](https://discord.gg/4eeurUVvTy)

## Contributing

Thank you for your interest in helping! Visit our [guide on contributing](https://github.com/themesberg/flowbite-vue/blob/main/CONTRIBUTING.md) to get started.

## Figma

If you need the Figma files for the components you can check out our website for more information:

🎨 [Get access to the Figma design files](https://flowbite.com/figma/)

## Copyright and license

The Flowbite name and logos are trademarks of Crafty Dwarf Inc.

📝 [Read about the licensing terms](https://flowbite.com/getting-started/license/)
