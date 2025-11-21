import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbProgress from '../FwbProgress.vue'

describe('FwbProgress', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(FwbProgress)

    const outerDiv = wrapper.find('[class*="w-full"]')
    const innerDiv = wrapper.find('[class*="rounded-full"][class*="bg-blue-600"]')

    expect(outerDiv.exists()).toBe(true)
    expect(innerDiv.exists()).toBe(true)
    expect(innerDiv.attributes('style')).toContain('width: 0%')
  })

  it('renders with specified progress value', () => {
    const wrapper = mount(FwbProgress, {
      props: { progress: 75 },
    })

    const innerDiv = wrapper.find('[class*="bg-blue-600"]')
    expect(innerDiv.attributes('style')).toContain('width: 75%')
  })

  it('renders with label', () => {
    const wrapper = mount(FwbProgress, {
      props: {
        label: 'Loading progress',
        progress: 50,
      },
    })

    expect(wrapper.text()).toContain('Loading progress')
  })

  it('renders with outside label progress', () => {
    const wrapper = mount(FwbProgress, {
      props: {
        label: 'Upload',
        labelProgress: true,
        labelPosition: 'outside',
        progress: 60,
      },
    })

    expect(wrapper.text()).toContain('Upload')
    expect(wrapper.text()).toContain('60%')

    const labelSpans = wrapper.findAll('span')
    expect(labelSpans).toHaveLength(2) // label and progress
  })

  it('renders with inside label progress', () => {
    const wrapper = mount(FwbProgress, {
      props: {
        labelProgress: true,
        labelPosition: 'inside',
        progress: 45,
      },
    })

    const innerDiv = wrapper.find('div > div > div')
    expect(innerDiv.text()).toBe('45%')
  })

  it('renders with different colors', () => {
    const colors = ['default', 'dark', 'blue', 'green', 'red', 'yellow', 'purple'] as const

    colors.forEach((color) => {
      const wrapper = mount(FwbProgress, {
        props: { color, progress: 50 },
      })

      // Find the inner progress bar (second div with rounded-full)
      const innerDiv = wrapper.findAll('[class*="rounded-full"]')[1]
      const classes = innerDiv?.classes() || []

      if (color === 'default' || color === 'blue') {
        expect(classes).toContain('bg-blue-600')
      } else if (color === 'dark') {
        expect(classes).toContain('bg-gray-600')
      } else if (color === 'green') {
        expect(classes).toContain('bg-green-600')
      } else if (color === 'red') {
        expect(classes).toContain('bg-red-600')
      } else if (color === 'yellow') {
        expect(classes).toContain('bg-yellow-400')
      } else if (color === 'purple') {
        expect(classes).toContain('bg-purple-600')
      }
    })
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg', 'xl'] as const

    sizes.forEach((size) => {
      const wrapper = mount(FwbProgress, {
        props: { size, progress: 50 },
      })

      const outerDiv = wrapper.find('[class*="w-full"]')
      const classes = outerDiv.classes()

      if (size === 'sm') {
        expect(classes).toContain('h-1.5')
      } else if (size === 'md') {
        expect(classes).toContain('h-2.5')
      } else if (size === 'lg') {
        expect(classes).toContain('h-4')
      } else if (size === 'xl') {
        expect(classes).toContain('h-6')
      }
    })
  })

  it('applies base classes correctly', () => {
    const wrapper = mount(FwbProgress, {
      props: { progress: 30 },
    })

    const outerDiv = wrapper.find('[class*="w-full"]')
    const innerDiv = wrapper.find('[class*="bg-blue-600"]')

    // Outer div classes
    expect(outerDiv.classes()).toContain('bg-gray-200')
    expect(outerDiv.classes()).toContain('rounded-full')
    expect(outerDiv.classes()).toContain('dark:bg-gray-700')

    // Inner div classes
    expect(innerDiv.classes()).toContain('text-xs')
    expect(innerDiv.classes()).toContain('font-medium')
    expect(innerDiv.classes()).toContain('text-center')
    expect(innerDiv.classes()).toContain('rounded-full')
  })

  it('handles edge cases for progress values', () => {
    // Test 0%
    const wrapper0 = mount(FwbProgress, {
      props: { progress: 0 },
    })
    expect(wrapper0.find('[class*="bg-blue-600"]').attributes('style')).toContain('width: 0%')

    // Test 100%
    const wrapper100 = mount(FwbProgress, {
      props: { progress: 100 },
    })
    expect(wrapper100.find('[class*="bg-blue-600"]').attributes('style')).toContain('width: 100%')
  })

  it('applies custom classes', () => {
    const wrapper = mount(FwbProgress, {
      props: {
        progress: 50,
        outerClasses: 'custom-outer',
        innerClasses: 'custom-inner',
        outsideLabelClasses: 'custom-label',
        label: 'Test',
      },
    })

    const outerDiv = wrapper.find('[class*="w-full"]')
    const innerDiv = wrapper.find('[class*="bg-blue-600"]')
    const labelSpan = wrapper.find('span')

    expect(outerDiv.classes()).toContain('custom-outer')
    expect(innerDiv.classes()).toContain('custom-inner')
    expect(labelSpan.classes()).toContain('custom-label')
  })
})
