import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbToggle from '../FwbToggle.vue'

describe('FwbToggle', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(FwbToggle)

    const label = wrapper.find('label')
    const input = wrapper.find('input')
    const toggleSpan = wrapper.find('span')

    expect(label.exists()).toBe(true)
    expect(input.exists()).toBe(true)
    expect(toggleSpan.exists()).toBe(true)
    expect(input.attributes('type')).toBe('checkbox')
    expect(input.classes()).toContain('sr-only')
  })

  it('emits update:modelValue when toggled', async () => {
    const wrapper = mount(FwbToggle, {
      props: { modelValue: false },
    })

    const input = wrapper.find('input')
    await input.setValue(true)

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
  })

  it('reflects modelValue prop in input checked state', () => {
    const wrapper = mount(FwbToggle, {
      props: { modelValue: true },
    })

    const input = wrapper.find('input')
    expect(input.element.checked).toBe(true)
  })

  it('renders with label', () => {
    const wrapper = mount(FwbToggle, {
      props: { label: 'Enable notifications' },
    })

    expect(wrapper.text()).toContain('Enable notifications')
    expect(wrapper.findAll('span')).toHaveLength(2) // toggle span + label span
  })

  it('handles disabled state', () => {
    const wrapper = mount(FwbToggle, {
      props: { disabled: true },
    })

    const input = wrapper.find('input')
    expect(input.attributes('disabled')).toBeDefined()
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const

    sizes.forEach((size) => {
      const wrapper = mount(FwbToggle, {
        props: { size },
      })

      const toggleSpan = wrapper.find('span')
      const classes = toggleSpan.classes()

      if (size === 'sm') {
        expect(classes).toContain('w-9')
        expect(classes).toContain('h-5')
      } else if (size === 'md') {
        expect(classes).toContain('w-11')
        expect(classes).toContain('h-6')
      } else if (size === 'lg') {
        expect(classes).toContain('w-14')
        expect(classes).toContain('h-7')
      }
    })
  })

  it('renders with different colors', () => {
    const colors = ['blue', 'green', 'red', 'yellow', 'purple'] as const

    colors.forEach((color) => {
      const wrapper = mount(FwbToggle, {
        props: { color, modelValue: true },
      })

      const toggleSpan = wrapper.find('span')
      const classes = toggleSpan.classes()

      if (color === 'blue') {
        expect(classes).toContain('peer-checked:bg-blue-600')
      } else if (color === 'green') {
        expect(classes).toContain('peer-checked:bg-green-600')
      } else if (color === 'red') {
        expect(classes).toContain('peer-checked:bg-red-600')
      } else if (color === 'yellow') {
        expect(classes).toContain('peer-checked:bg-yellow-400')
      } else if (color === 'purple') {
        expect(classes).toContain('peer-checked:bg-purple-600')
      }
    })
  })

  it('handles reverse prop correctly', () => {
    const wrapper = mount(FwbToggle, {
      props: {
        label: 'Test label',
        reverse: true,
      },
    })

    const label = wrapper.find('label')
    expect(label.classes()).toContain('flex-row-reverse')
  })

  it('applies base toggle classes', () => {
    const wrapper = mount(FwbToggle)

    const toggleSpan = wrapper.find('span')
    const classes = toggleSpan.classes()

    expect(classes).toContain('relative')
    expect(classes).toContain('bg-gray-200')
    expect(classes).toContain('rounded-full')
    expect(classes).toContain('peer-focus:outline-none')
    expect(classes).toContain('peer-focus:ring-4')
    expect(classes).toContain('dark:bg-gray-700')
  })

  it('handles label positioning', () => {
    // Default (label on right)
    const wrapperDefault = mount(FwbToggle, {
      props: { label: 'Default position' },
    })
    expect(wrapperDefault.find('label').classes()).toContain('inline-flex')

    // Reverse (label on left)
    const wrapperReverse = mount(FwbToggle, {
      props: { label: 'Reverse position', reverse: true },
    })
    expect(wrapperReverse.find('label').classes()).toContain('flex-row-reverse')
  })

  it('supports v-model functionality', async () => {
    const wrapper = mount(FwbToggle, {
      props: {
        modelValue: false,
        'onUpdate:modelValue': (value: boolean) => wrapper.setProps({ modelValue: value }),
      },
    })

    const input = wrapper.find('input')

    // Initially false
    expect(input.element.checked).toBe(false)

    // Toggle to true
    await input.setValue(true)
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])

    // Update prop to reflect change
    await wrapper.setProps({ modelValue: true })
    expect(input.element.checked).toBe(true)
  })
})