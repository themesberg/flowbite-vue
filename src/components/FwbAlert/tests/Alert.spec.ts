import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbAlert from '../FwbAlert.vue'

describe('FwbAlert', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(FwbAlert, {
      slots: { default: 'Test alert message' },
    })
    expect(wrapper.text()).toContain('Test alert message')
    expect(wrapper.attributes('role')).toBe('alert')
  })

  it('renders with different types', () => {
    const types = ['info', 'danger', 'success', 'warning', 'dark'] as const

    types.forEach((type) => {
      const wrapper = mount(FwbAlert, {
        props: { type },
        slots: { default: `${type} alert` },
      })

      const classes = wrapper.classes()

      // Check for type-specific classes
      if (type === 'info') {
        expect(classes).toContain('text-blue-800')
        expect(classes).toContain('bg-blue-50')
      } else if (type === 'danger') {
        expect(classes).toContain('text-red-800')
        expect(classes).toContain('bg-red-50')
      } else if (type === 'success') {
        expect(classes).toContain('text-green-800')
        expect(classes).toContain('bg-green-50')
      } else if (type === 'warning') {
        expect(classes).toContain('text-yellow-800')
        expect(classes).toContain('bg-yellow-50')
      } else if (type === 'dark') {
        expect(classes).toContain('text-gray-800')
        expect(classes).toContain('bg-gray-50')
      }
    })
  })

  it('shows icon when icon prop is true', () => {
    const wrapper = mount(FwbAlert, {
      props: { icon: true },
      slots: { default: 'Alert with icon' },
    })

    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('shows close button when closable prop is true', () => {
    const wrapper = mount(FwbAlert, {
      props: { closable: true },
      slots: { default: 'Closable alert' },
    })

    expect(wrapper.find('button[aria-label="Close"]').exists()).toBe(true)
  })

  it('emits close event when close button is clicked', async () => {
    const wrapper = mount(FwbAlert, {
      props: { closable: true },
      slots: { default: 'Closable alert' },
    })

    const closeButton = wrapper.find('button[aria-label="Close"]')
    await closeButton.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('close')
    expect(wrapper.emitted('close')).toHaveLength(1)
  })

  it('hides alert when close button is clicked', async () => {
    const wrapper = mount(FwbAlert, {
      props: { closable: true },
      slots: { default: 'Closable alert' },
    })

    expect(wrapper.find('[role="alert"]').exists()).toBe(true)

    const closeButton = wrapper.find('button[aria-label="Close"]')
    await closeButton.trigger('click')

    expect(wrapper.find('[role="alert"]').exists()).toBe(false)
  })

  it('renders with border when border prop is true', () => {
    const wrapper = mount(FwbAlert, {
      props: { border: true, type: 'info' },
      slots: { default: 'Alert with border' },
    })

    const classes = wrapper.classes()
    expect(classes).toContain('border')
    expect(classes).toContain('border-blue-500')
  })

  it('renders title slot correctly', () => {
    const wrapper = mount(FwbAlert, {
      slots: {
        title: 'Alert Title',
        default: 'Alert content',
      },
    })

    expect(wrapper.text()).toContain('Alert Title')
    expect(wrapper.text()).toContain('Alert content')
  })

  it('renders custom icon slot', () => {
    const wrapper = mount(FwbAlert, {
      slots: {
        icon: '<svg class="custom-icon"></svg>',
        default: 'Alert with custom icon',
      },
    })

    expect(wrapper.find('.custom-icon').exists()).toBe(true)
  })

  it('applies custom classes via attrs', () => {
    const wrapper = mount(FwbAlert, {
      attrs: { class: 'custom-class' },
      slots: { default: 'Alert with custom class' },
    })

    expect(wrapper.classes()).toContain('custom-class')
  })
})
