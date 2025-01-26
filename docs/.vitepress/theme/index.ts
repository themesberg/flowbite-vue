// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme'
import { h } from 'vue'

import './tailwind.css'
import './clear.css'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
}
