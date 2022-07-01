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
    { text: 'Button', link: '/guide/button/button.md' },
    { text: 'Spinner', link: '/guide/spinner/spinner.md' },
  ]
}

/**
 * This can be used as an example
 * https://github.com/vuejs/vitepress/blob/master/docs/.vitepress/config.js
 */
export default {
  title: 'flowbite-vue vitepress',
  themeConfig: {
    docsDir: 'docs',
    sidebar: buildSidebar(),
  },
}
