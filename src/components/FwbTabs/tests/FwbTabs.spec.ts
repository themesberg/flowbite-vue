import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbTab from '../FwbTab.vue'
import FwbTabs from '../FwbTabs.vue'

const mountTabs = (props = {}, tabProps = '') => mount(FwbTabs, {
  props: { modelValue: 'first', ...props },
  slots: { default: `<fwb-tab name="first" title="First" ${tabProps}>content</fwb-tab><fwb-tab name="second" title="Second">content</fwb-tab>` },
  global: { components: { FwbTab } },
})

const mountTabsWithIcon = (iconPosition: 'left' | 'right' = 'left') => mount(FwbTabs, {
  props: { modelValue: 'first', iconPosition },
  slots: {
    default: '<fwb-tab name="first" title="First"><template #icon><span class="test-icon">★</span></template>content</fwb-tab><fwb-tab name="second" title="Second">content</fwb-tab>',
  },
  global: { components: { FwbTab } },
})

describe('FwbTabs', () => {
  describe('tabClass prop', () => {
    it('merges tabClass onto the <ul> element', () => {
      const wrapper = mountTabs({ tabClass: 'gap-4' })
      expect(wrapper.find('ul').classes()).toContain('gap-4')
    })

    it('preserves default ul classes when tabClass is not set', () => {
      const wrapper = mountTabs()
      expect(wrapper.find('ul').classes()).toContain('flex')
    })
  })

  describe('itemClass prop', () => {
    it('merges itemClass onto each tab button', () => {
      const wrapper = mountTabs({ itemClass: 'font-bold' })
      expect(wrapper.find('button').classes()).toContain('font-bold')
    })
  })

  describe('variant prop', () => {
    it('applies underline border and -mb-px to the ul', () => {
      const wrapper = mountTabs({ variant: 'underline' })
      const ul = wrapper.find('ul')
      expect(ul.classes()).toContain('-mb-px')
      expect(ul.classes()).toContain('border-b')
    })

    it('applies default variant border class to the ul', () => {
      const wrapper = mountTabs({ variant: 'default' })
      expect(wrapper.find('ul').classes()).toContain('border-b')
    })

    it('does not apply border-b to pills variant', () => {
      const wrapper = mountTabs({ variant: 'pills' })
      expect(wrapper.find('ul').classes()).not.toContain('border-b')
    })
  })

  describe('ARIA attributes', () => {
    it('sets role="tablist" on the ul', () => {
      const wrapper = mountTabs()
      expect(wrapper.find('ul').attributes('role')).toBe('tablist')
    })

    it('sets role="tab" on tab buttons', () => {
      const wrapper = mountTabs()
      wrapper.findAll('button[role="tab"]').forEach((btn) => {
        expect(btn.attributes('role')).toBe('tab')
      })
    })

    it('sets aria-selected="true" on the active tab', () => {
      const wrapper = mountTabs({ modelValue: 'first' })
      expect(wrapper.find('#tab-first').attributes('aria-selected')).toBe('true')
    })

    it('sets aria-selected="false" on inactive tabs', () => {
      const wrapper = mountTabs({ modelValue: 'first' })
      expect(wrapper.find('#tab-second').attributes('aria-selected')).toBe('false')
    })

    it('links tab button to its panel via aria-controls', () => {
      const wrapper = mountTabs()
      expect(wrapper.find('#tab-first').attributes('aria-controls')).toBe('panel-first')
    })

    it('sets tabindex="0" on the active tab and "-1" on inactive', () => {
      const wrapper = mountTabs({ modelValue: 'first' })
      expect(wrapper.find('#tab-first').attributes('tabindex')).toBe('0')
      expect(wrapper.find('#tab-second').attributes('tabindex')).toBe('-1')
    })
  })

  describe('panel ARIA attributes', () => {
    it('sets role="tabpanel" on the active panel', () => {
      const wrapper = mountTabs({ modelValue: 'first' })
      expect(wrapper.find('#panel-first').attributes('role')).toBe('tabpanel')
    })

    it('links panel to its tab via aria-labelledby', () => {
      const wrapper = mountTabs({ modelValue: 'first' })
      expect(wrapper.find('#panel-first').attributes('aria-labelledby')).toBe('tab-first')
    })
  })

  describe('vertical prop', () => {
    it('applies flex-col to the ul', () => {
      const wrapper = mountTabs({ vertical: true })
      expect(wrapper.find('ul').classes()).toContain('flex-col')
    })

    it('applies border-r instead of border-b in default variant', () => {
      const wrapper = mountTabs({ vertical: true })
      expect(wrapper.find('ul').classes()).toContain('border-r')
      expect(wrapper.find('ul').classes()).not.toContain('border-b')
    })

    it('applies flex and w-full to tab buttons', () => {
      const wrapper = mountTabs({ vertical: true })
      const btn = wrapper.find('button')
      expect(btn.classes()).toContain('flex')
      expect(btn.classes()).toContain('w-full')
    })
  })

  describe('fullWidth prop', () => {
    it('applies flex-1 to each li', () => {
      const wrapper = mountTabs({ fullWidth: true })
      expect(wrapper.find('li').classes()).toContain('flex-1')
    })

    it('applies w-full to the tab button', () => {
      const wrapper = mountTabs({ fullWidth: true })
      expect(wrapper.find('button').classes()).toContain('w-full')
    })
  })

  describe('icon slot', () => {
    it('renders icon slot content inside the tab button', () => {
      const wrapper = mountTabsWithIcon()
      expect(wrapper.find('#tab-first .test-icon').exists()).toBe(true)
    })

    it('sets aria-label from name when icon is present but title is empty', () => {
      const wrapper = mount(FwbTabs, {
        props: { modelValue: 'first' },
        slots: {
          default: '<fwb-tab name="profile" title=""><template #icon><span class="test-icon">★</span></template>content</fwb-tab>',
        },
        global: { components: { FwbTab } },
      })
      expect(wrapper.find('#tab-profile').attributes('aria-label')).toBe('profile')
    })
  })
})
