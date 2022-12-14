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
    { text: 'Accordion', link: 'components/accordion/accordion.md' },
    { text: 'Alert', link: '/components/alert/alert.md' },
    { text: 'Avatar', link: 'components/avatar/avatar.md' },
    { text: 'Breadcrumb', link: 'components/breadcrumb/breadcrumb.md' },
    { text: 'Button', link: '/components/button/button.md' },
    { text: 'Badge', link: 'components/badge/badge.md' },
    { text: 'Button Group', link: '/components/buttonGroup/buttonGroup.md' },
    { text: 'Card', link: 'components/card/card.md' },
    { text: 'Carousel', link: 'components/carousel/carousel.md' },
    { text: 'Dropdown', link: '/components/dropdown/dropdown.md' },
    { text: 'Progress', link: 'components/progress/progress.md' },
    { text: 'Rating', link: 'components/rating/rating.md' },
    { text: 'Spinner', link: '/components/spinner/spinner.md' },
    { text: 'Tabs', link: '/components/tabs/tabs.md' },
    { text: 'ListGroup', link: 'components/listGroup/listGroup.md' },
    { text: 'Toast', link: 'components/toast/toast.md' },
    { text: 'Tooltip', link: 'components/tooltip/tooltip.md' },
    { text: 'Modal', link: 'components/modal/modal.md' },
    { text: 'Navbar', link: 'components/navbar/navbar.md' },

    { text: '- Footer', link: 'components/footer/footer.md' },
    { text: '- Pagination', link: 'components/pagination/pagination.md' },
    { text: '- Sidebar', link: 'components/sidebar/sidebar.md' },
    { text: '- Table', link: 'components/table/table.md' },
    { text: '- Timeline', link: 'components/timeline/timeline.md' },
  ]
}

function getFormComponents() {
  return [
    { text: 'Input', link: 'components/input/input.md' },
  ]
}

function getUtils() {
  return [
    { text: 'Flowbite Themable', link: '/components/flowbiteThemable/flowbiteThemable.md' },
    { text: 'Toast Provider', link: '/components/toastProvider/toastProvider.md' },
    { text: 'PLAYGROUND', link: '/components/PLAYGROUND/PLAYGROUND.md' },
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
