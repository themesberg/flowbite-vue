function buildSidebar() {
  return [
    {
      items: [
        { text: 'Home', link: '/' }
      ],
    },
    {
      text: 'Components',
      collapsible: true,
      items: [
        ...getComponents(),
      ],
    },
    {
      text: 'Utils',
      collapsible: true,
      items: [
        ...getUtils(),
      ],
    },
  ]
}

function getComponents() {
  return [
    { text: 'Alert', link: '/guide/alert/alert.md' },
    { text: 'Button', link: '/guide/button/button.md' },
    { text: 'Button Group', link: '/guide/buttonGroup/buttonGroup.md' },
    { text: 'Dropdown', link: '/guide/dropdown/dropdown.md' },
    { text: 'Spinner', link: '/guide/spinner/spinner.md' },
    { text: 'Tabs', link: '/guide/tabs/tabs.md' },
  ]
}

function getUtils() {
  return [
    { text: 'Flowbite Themable', link: '/guide/flowbiteThemable/flowbiteThemable.md' },
  ]
}

/**
 * This can be used as an example
 * https://github.com/vuejs/vitepress/blob/master/docs/.vitepress/config.js
 */
export default {
  title: 'Flowbite Vue 3 Components',
  themeConfig: {
    docsDir: 'docs',
    sidebar: buildSidebar(),
  },
}
