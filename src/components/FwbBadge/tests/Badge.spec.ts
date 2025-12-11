import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbBadge from '../FwbBadge.vue'

describe('FwbBadge', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(FwbBadge, {
      slots: { default: 'Badge text' },
    })
    expect(wrapper.text()).toBe('Badge text')
    expect(wrapper.element.tagName.toLowerCase()).toBe('span')
  })

  it('renders as anchor when href is provided', () => {
    const wrapper = mount(FwbBadge, {
      props: { href: 'https://example.com' },
      slots: { default: 'Link badge' },
    })
    expect(wrapper.element.tagName.toLowerCase()).toBe('a')
    expect(wrapper.attributes('href')).toBe('https://example.com')
  })

  it('renders with different types', () => {
    const types = ['default', 'dark', 'red', 'green', 'yellow', 'indigo', 'purple', 'pink'] as const

    types.forEach((type) => {
      const wrapper = mount(FwbBadge, {
        props: { type },
        slots: { default: `${type} badge` },
      })

      const classes = wrapper.classes()

      // Check for type-specific classes
      if (type === 'default') {
        expect(classes).toContain('bg-blue-100')
        expect(classes).toContain('text-blue-800')
      } else if (type === 'dark') {
        expect(classes).toContain('bg-gray-100')
        expect(classes).toContain('text-gray-800')
      } else if (type === 'red') {
        expect(classes).toContain('bg-red-100')
        expect(classes).toContain('text-red-800')
      } else if (type === 'green') {
        expect(classes).toContain('bg-green-100')
        expect(classes).toContain('text-green-800')
      } else if (type === 'yellow') {
        expect(classes).toContain('bg-yellow-100')
        expect(classes).toContain('text-yellow-800')
      } else if (type === 'indigo') {
        expect(classes).toContain('bg-indigo-100')
        expect(classes).toContain('text-indigo-800')
      } else if (type === 'purple') {
        expect(classes).toContain('bg-purple-100')
        expect(classes).toContain('text-purple-800')
      } else if (type === 'pink') {
        expect(classes).toContain('bg-pink-100')
        expect(classes).toContain('text-pink-800')
      }
    })
  })

  it('renders with different sizes', () => {
    const sizes = ['xs', 'sm'] as const

    sizes.forEach((size) => {
      const wrapper = mount(FwbBadge, {
        props: { size },
        slots: { default: `${size} badge` },
      })

      const classes = wrapper.classes()

      if (size === 'xs') {
        expect(classes).toContain('text-xs')
      } else if (size === 'sm') {
        expect(classes).toContain('text-sm')
      }
    })
  })

  it('renders icon slot correctly', () => {
    const wrapper = mount(FwbBadge, {
      slots: {
        icon: '<svg class="test-icon"></svg>',
        default: 'Badge with icon',
      },
    })

    expect(wrapper.find('.test-icon').exists()).toBe(true)
    expect(wrapper.text()).toContain('Badge with icon')
  })

  it('renders as icon-only badge when no default slot content', () => {
    const wrapper = mount(FwbBadge, {
      slots: {
        icon: '<svg class="icon-only"></svg>',
      },
    })

    expect(wrapper.find('.icon-only').exists()).toBe(true)
    const classes = wrapper.classes()
    expect(classes).toContain('p-1') // Icon-only padding
  })

  it('applies correct base classes', () => {
    const wrapper = mount(FwbBadge, {
      slots: { default: 'Badge' },
    })

    const classes = wrapper.classes()
    expect(classes).toContain('font-semibold') // default size is xs which uses font-semibold
    expect(classes).toContain('flex')
    expect(classes).toContain('items-center')
    expect(classes).toContain('justify-center')
  })

  it('applies rounded classes', () => {
    const wrapper = mount(FwbBadge, {
      slots: { default: 'Rounded badge' },
    })

    const classes = wrapper.classes()
    expect(classes).toContain('rounded')
  })

  it('applies correct padding for badge with content', () => {
    const wrapper = mount(FwbBadge, {
      slots: { default: 'Badge content' },
    })

    const classes = wrapper.classes()
    expect(classes).toContain('px-2.5')
    expect(classes).toContain('py-0.5')
  })

  it('combines icon and text correctly', () => {
    const wrapper = mount(FwbBadge, {
      slots: {
        icon: '<span>🎯</span>',
        default: 'Target',
      },
    })

    expect(wrapper.text()).toContain('🎯')
    expect(wrapper.text()).toContain('Target')
  })
})
