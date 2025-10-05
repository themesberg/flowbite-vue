import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbSpinner from '../FwbSpinner.vue'

describe('FwbSpinner', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(FwbSpinner)
    const svg = wrapper.find('svg')

    expect(svg.exists()).toBe(true)
    expect(svg.attributes('role')).toBe('status')
    expect(svg.attributes('viewBox')).toBe('0 0 100 101')
  })

  it('renders with different colors', () => {
    const colors = ['blue', 'gray', 'green', 'red', 'yellow', 'pink', 'purple'] as const

    colors.forEach((color) => {
      const wrapper = mount(FwbSpinner, {
        props: { color },
      })

      const svg = wrapper.find('svg')
      const classes = svg.classes()

      if (color === 'blue') {
        expect(classes).toContain('fill-blue-600')
      } else if (color === 'gray') {
        expect(classes).toContain('fill-gray-600')
      } else if (color === 'green') {
        expect(classes).toContain('fill-green-500')
      } else if (color === 'red') {
        expect(classes).toContain('fill-red-600')
      } else if (color === 'yellow') {
        expect(classes).toContain('fill-yellow-400')
      } else if (color === 'pink') {
        expect(classes).toContain('fill-pink-600')
      } else if (color === 'purple') {
        expect(classes).toContain('fill-purple-600')
      }
    })
  })

  it('renders with different sizes', () => {
    const sizes = ['4', '6', '8', '10', '12'] as const

    sizes.forEach((size) => {
      const wrapper = mount(FwbSpinner, {
        props: { size },
      })

      const svg = wrapper.find('svg')
      const classes = svg.classes()

      if (size === '4') {
        expect(classes).toContain('w-4')
        expect(classes).toContain('h-4')
      } else if (size === '6') {
        expect(classes).toContain('w-6')
        expect(classes).toContain('h-6')
      } else if (size === '8') {
        expect(classes).toContain('w-8')
        expect(classes).toContain('h-8')
      } else if (size === '10') {
        expect(classes).toContain('w-10')
        expect(classes).toContain('h-10')
      } else if (size === '12') {
        expect(classes).toContain('w-12')
        expect(classes).toContain('h-12')
      }
    })
  })

  it('applies animation classes', () => {
    const wrapper = mount(FwbSpinner)
    const svg = wrapper.find('svg')
    const classes = svg.classes()

    expect(classes).toContain('animate-spin')
  })

  it('has correct SVG structure', () => {
    const wrapper = mount(FwbSpinner)
    const svg = wrapper.find('svg')
    const paths = wrapper.findAll('path')

    expect(svg.attributes('fill')).toBe('none')
    expect(svg.attributes('xmlns')).toBe('http://www.w3.org/2000/svg')
    expect(paths).toHaveLength(2)

    // Check first path (background)
    expect(paths[0]?.attributes('fill')).toBe('currentColor')

    // Check second path (animated part)
    expect(paths[1]?.attributes('fill')).toBe('currentFill')
  })

  it('applies custom color styles', () => {
    const wrapper = mount(FwbSpinner, {
      props: { color: '#ff0000' as any },
    })

    const svg = wrapper.find('svg')
    const style = svg.attributes('style')

    expect(style).toContain('--custom-fill')
  })
})
