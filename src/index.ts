import type { App } from 'vue'
import * as components from './components'

export type ObjectKey = keyof typeof components;

export default {
    install(app: App, options: any) {
        Object.keys(components).forEach(component => {
            app.component(component, components[component as ObjectKey])
        })
    }
}