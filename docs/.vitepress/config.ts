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
    { text: 'ListGroup', link: 'guide/listGroup/listGroup.md' },

    { text: '- Accordion', link: 'guide/accordion/accordion.md' },
    { text: '- Avatar', link: 'guide/avatar/avatar.md' },
    { text: '- Badge', link: 'guide/badge/badge.md' },
    { text: '- Breadcrumb', link: 'guide/breadcrumb/breadcrumb.md' },
    { text: '- Card', link: 'guide/card/card.md' },
    { text: '- Carousel', link: 'guide/carousel/carousel.md' },
    { text: '- Footer', link: 'guide/footer/footer.md' },
    { text: '- Modal', link: 'guide/modal/modal.md' },
    { text: '- Navbar', link: 'guide/navbar/navbar.md' },
    { text: '- Pagination', link: 'guide/pagination/pagination.md' },
    { text: '- Progress', link: 'guide/progress/progress.md' },
    { text: '- Rating', link: 'guide/rating/rating.md' },
    { text: '- Sidebar', link: 'guide/sidebar/sidebar.md' },
    { text: '- Table', link: 'guide/table/table.md' },
    { text: '- Timeline', link: 'guide/timeline/timeline.md' },
    { text: '- Toast', link: 'guide/toast/toast.md' },
    { text: '- Tooltip', link: 'guide/tooltip/tooltip.md' },
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
  title: 'Flowbite Vue 3',
  outDir: '../public_html',
  head: [
    ['link', { rel: "icon", type: "image/svg", href: "../assets/logo.svg"}],
  ],
  themeConfig: {
    docsDir: 'docs',
    sidebar: buildSidebar(),
    logo: '../assets/logo.svg'
  },
}
