import { enableAutoUnmount, flushPromises, mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { h } from 'vue'

import FwbModal from '../FwbModal.vue'

enableAutoUnmount(afterEach)

// focus-trap only treats elements with layout as tabbable, and jsdom has no
// layout. Give every element a client rect so the trap sees them as visible.
beforeEach(() => {
  vi.spyOn(HTMLElement.prototype, 'getClientRects').mockReturnValue([{}] as unknown as DOMRectList)
})
afterEach(() => {
  vi.restoreAllMocks()
  document.body.innerHTML = ''
})

// focus-trap moves the initial focus in a setTimeout.
const settle = async () => {
  await flushPromises()
  await new Promise(resolve => setTimeout(resolve))
}

const focusOpener = () => {
  const opener = document.body.appendChild(document.createElement('button'))
  opener.textContent = 'Open modal'
  opener.focus()
  return opener
}

const mountModal = async (props: Record<string, unknown> = {}) => {
  const wrapper = mount(FwbModal, {
    props,
    slots: {
      header: () => 'Title',
      body: () => h('input', { 'aria-label': 'Name' }),
      footer: () => h('button', 'Save'),
    },
    attachTo: document.body,
  })
  await settle()
  return wrapper
}

const pressTab = async (shiftKey = false) => {
  document.activeElement?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', shiftKey, bubbles: true, cancelable: true }))
  await settle()
}

const focused = () => document.activeElement as HTMLElement
const closeButton = () => document.querySelector<HTMLElement>('button[aria-label="close"]')
const saveButton = () => Array.from(document.querySelectorAll('button')).find(button => button.textContent === 'Save')

describe('FwbModal', () => {
  describe('with focusTrap', () => {
    it('moves focus to the close button when opened', async () => {
      focusOpener()
      await mountModal({ focusTrap: true })
      expect(focused()).toBe(closeButton())
    })

    it('moves focus to the modal itself when there is no close button', async () => {
      focusOpener()
      const wrapper = await mountModal({ focusTrap: true, persistent: true })
      expect(focused()).toBe(wrapper.find('[tabindex="0"]').element)
    })

    it('wraps Tab from the last focusable element to the first', async () => {
      await mountModal({ focusTrap: true })
      saveButton()?.focus()
      await pressTab()
      expect(focused()).toBe(closeButton())
    })

    it('wraps Shift+Tab from the first focusable element to the last', async () => {
      await mountModal({ focusTrap: true })
      closeButton()?.focus()
      await pressTab(true)
      expect(focused()).toBe(saveButton())
    })

    it('keeps trapping focus after Escape when the modal is not escapable', async () => {
      await mountModal({ focusTrap: true, notEscapable: true })
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
      saveButton()?.focus()
      await pressTab()
      expect(focused()).toBe(closeButton())
    })

    it('gives focus back to the element that had it before opening when closed', async () => {
      const opener = focusOpener()
      const wrapper = await mountModal({ focusTrap: true })
      wrapper.unmount()
      await settle()
      expect(focused()).toBe(opener)
    })
  })

  describe('without focusTrap', () => {
    it('leaves focus where it was', async () => {
      const opener = focusOpener()
      await mountModal()
      expect(focused()).toBe(opener)
    })
  })
})
