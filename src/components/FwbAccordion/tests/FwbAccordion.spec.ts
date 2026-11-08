import { enableAutoUnmount, flushPromises, mount, type VueWrapper } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import { type App, createApp, createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'

import FwbAccordion from '../FwbAccordion.vue'
import FwbAccordionContent from '../FwbAccordionContent.vue'
import FwbAccordionHeader from '../FwbAccordionHeader.vue'
import FwbAccordionPanel from '../FwbAccordionPanel.vue'

const panel = (title: string) => h(FwbAccordionPanel, null, () => [
  h(FwbAccordionHeader, null, () => title),
  h(FwbAccordionContent, null, () => `${title} body`),
])

const accordion = (titles: string[], props: Record<string, unknown> = {}) => ({
  render: () => h(FwbAccordion, props, () => titles.map(panel)),
})

const mountAccordion = async (props: Record<string, unknown> = {}) => {
  const wrapper = mount(accordion(['First', 'Second', 'Third'], props), { attachTo: document.body })
  // Headers and content render only once each panel has mounted.
  await flushPromises()
  return wrapper
}

// Titles of the panels whose content is shown. A panel is [header wrapper, content wrapper];
// closed content carries the `hidden` class.
const openPanels = (root: Element) => Array.from(root.querySelectorAll('[data-panel-id]'))
  .filter(panel => !panel.lastElementChild?.firstElementChild?.classList.contains('hidden'))
  .map(panel => panel.querySelector('button')?.textContent)

const clickHeader = async (root: Element, title: string) => {
  const header = Array.from(root.querySelectorAll('button')).find(button => button.textContent === title)
  if (!header) throw new Error(`No accordion header titled "${title}"`)
  header.click()
  await flushPromises()
}

// Vue's hydration mismatch check ignores data-* attributes, so comparing the
// IDs directly is the only way to tell that server and client agree.
const accordionAndPanelIds = (root: ParentNode) => Array.from(
  root.querySelectorAll('[data-accordion-id], [data-panel-id]'),
  el => (el as HTMLElement).dataset.accordionId ?? (el as HTMLElement).dataset.panelId,
)

enableAutoUnmount(afterEach)

describe('FwbAccordion', () => {
  describe('toggling panels', () => {
    const open = (wrapper: VueWrapper) => openPanels(wrapper.element)

    it('opens the first panel by default', async () => {
      const wrapper = await mountAccordion()
      expect(open(wrapper)).toEqual(['First'])
    })

    it('opens the clicked panel and closes the others', async () => {
      const wrapper = await mountAccordion()
      await clickHeader(wrapper.element, 'Second')
      expect(open(wrapper)).toEqual(['Second'])
    })

    it('closes an open panel when its header is clicked again', async () => {
      const wrapper = await mountAccordion()
      await clickHeader(wrapper.element, 'First')
      expect(open(wrapper)).toEqual([])
    })

    it('keeps other panels open in persistent mode', async () => {
      const wrapper = await mountAccordion({ persistent: true })
      await clickHeader(wrapper.element, 'Third')
      expect(open(wrapper)).toEqual(['First', 'Third'])
    })

    it('starts with every panel closed when collapsed', async () => {
      const wrapper = await mountAccordion({ collapsed: true })
      expect(open(wrapper)).toEqual([])
    })
  })

  describe('show and hide events', () => {
    it('emits show when a panel opens and hide when it closes, but not for panels that start closed', async () => {
      const events: string[] = []
      const tracked = (title: string) => h(FwbAccordionPanel, {
        onShow: () => events.push(`show ${title}`),
        onHide: () => events.push(`hide ${title}`),
      }, () => [
        h(FwbAccordionHeader, null, () => title),
        h(FwbAccordionContent, null, () => `${title} body`),
      ])
      const wrapper = mount({ render: () => h(FwbAccordion, null, () => [tracked('First'), tracked('Second')]) })
      await flushPromises()

      expect(events).toEqual(['show First'])

      await clickHeader(wrapper.element, 'Second')

      expect(events).toEqual(['show First', 'hide First', 'show Second'])
    })
  })

  describe('several Vue apps on one page', () => {
    const apps: App[] = []
    afterEach(() => {
      apps.splice(0).forEach(app => app.unmount())
      document.body.innerHTML = ''
    })

    const mountApp = (titles: string[]) => {
      const root = document.body.appendChild(document.createElement('div'))
      const app = createApp(accordion(titles))
      app.mount(root)
      apps.push(app)
      return root
    }

    it('keeps each app\'s accordion state separate', async () => {
      const first = mountApp(['A1', 'A2'])
      const second = mountApp(['B1', 'B2'])
      await flushPromises()

      await clickHeader(first, 'A2')

      expect(openPanels(first)).toEqual(['A2'])
      expect(openPanels(second)).toEqual(['B1'])
    })
  })
  describe('SSR', () => {
    it('generates the same accordion and panel IDs on the client as on the server', async () => {
      const page = accordion(['First', 'Second'])
      const html = await renderToString(createSSRApp(page))
      const serverMarkup = document.createElement('div')
      serverMarkup.innerHTML = html

      const container = document.body.appendChild(document.createElement('div'))
      container.innerHTML = html
      const app = createSSRApp(page)
      app.mount(container)

      expect(accordionAndPanelIds(container)).toHaveLength(3)
      expect(accordionAndPanelIds(container)).toEqual(accordionAndPanelIds(serverMarkup))

      app.unmount()
      container.remove()
    })
  })
})
