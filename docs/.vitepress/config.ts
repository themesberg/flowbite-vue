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
  }]
}

function getComponents() {
  return [
    { text: 'Alert', link: '/guide/alert/alert.md' },
    { text: 'Button', link: '/guide/button/button.md' },
    { text: 'Button Group', link: '/guide/buttonGroup/buttonGroup.md' },
    { text: 'Spinner', link: '/guide/spinner/spinner.md' },
    { text: 'Tabs', link: '/guide/tabs/tabs.md' },
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
