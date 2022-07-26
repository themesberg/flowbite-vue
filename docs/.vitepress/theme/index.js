import './tailwind.css'

import DefaultTheme from 'vitepress/theme'

import './clear.css'

import { TransitionGroup } from "vue";

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        // strange thing, but there is no global transition-group component inside vitepress app
        app.component('TransitionGroup', TransitionGroup)
    }
}
