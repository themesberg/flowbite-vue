import { defineConfig } from 'vitepress'

function buildSidebar() {
  return [
    {
      items: [
        { text: 'Home', link: '/' },
        { text: 'Quickstart', link: '/pages/getting-started' },
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
      text: 'Form',
      collapsible: true,
      items: [
        ...getFormComponents(),
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
    { text: 'Accordion', link: 'components/accordion' },
    { text: 'Alert', link: '/components/alert' },
    { text: 'Avatar', link: 'components/avatar' },
    { text: 'Breadcrumb', link: 'components/breadcrumb' },
    { text: 'Button', link: '/components/button' },
    { text: 'Badge', link: 'components/badge' },
    { text: 'Button Group', link: '/components/button-group' },
    { text: 'Card', link: 'components/card.md' },
    { text: 'Carousel', link: 'components/carousel' },
    { text: 'Dropdown', link: '/components/dropdown' },
    { text: 'Progress', link: 'components/progress' },
    { text: 'Rating', link: 'components/rating' },
    { text: 'Spinner', link: '/components/spinner' },
    { text: 'Tabs', link: '/components/tabs' },
    { text: 'ListGroup', link: 'components/list-group' },
    { text: 'Timeline', link: 'components/timeline' },
    { text: 'Toast', link: 'components/toast' },
    { text: 'Tooltip', link: 'components/tooltip' },
    { text: 'Modal', link: 'components/modal' },
    { text: 'Navbar', link: 'components/navbar' },

    { text: '- Footer', link: 'components/footer' },
    { text: '- Pagination', link: 'components/pagination' },
    { text: '- Sidebar', link: 'components/sidebar' },
    { text: '- Table', link: 'components/table' },
    { text: 'Timeline', link: 'components/timeline' },
  ]
}

function getFormComponents() {
  return [
    { text: 'Input', link: 'components/input' },
  ]
}

function getUtils() {
  return [
    { text: 'Flowbite Themable', link: '/components/flowbiteThemable/flowbiteThemable.md' },
    { text: 'Toast Provider', link: '/components/toastProvider/toastProvider.md' }
  ]
}

/**
 * This can be used as an example
 * https://github.com/vuejs/vitepress/blob/master/docs/.vitepress/config.js
 */
export default defineConfig({
  title: 'Flowbite Vue 3',
  cleanUrls: 'without-subfolders',
  head: [
    ['link', { rel: "icon", type: "image/svg", href: "/assets/logo.svg"}],
  ],
  themeConfig: {
    sidebar: buildSidebar(),
    logo: '/assets/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/themesberg/flowbite-vue' },
      { icon: 'discord', link: 'https://discord.gg/4eeurUVvTy' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022 Flowbite™'
    },

  },
})
