import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FwbButton from '../FwbButton.vue'

describe('FwbButton', () => {
  it('renders correct text', () => {
    const wrapper = mount(FwbButton, { props: {}, slots: { default: 'test' } })
    expect(wrapper.text()).toBe('test')
  })

  it('provides correct classes for default color button', () => {
    const defaultButtonClasses = [
      'text-white',
      'bg-blue-700',
      'hover:bg-blue-800',
      'focus:ring-4',
      'focus:ring-blue-300',
      'font-medium',
      'rounded-lg',
      'dark:bg-blue-600',
      'dark:hover:bg-blue-700',
      'focus:outline-none',
      'dark:focus:ring-blue-800',
      'text-sm',
      'px-4',
      'py-2',
    ]

    const wrapper = mount(FwbButton, { props: { color: 'default' } })
    const classes = wrapper.classes()

    defaultButtonClasses.forEach(cl => expect(classes).toContain(cl))
  })

  it('provides correct classes for XL size', () => {
    const xlButtonSizeClasses = [
      'text-base', 'px-6', 'py-3',
    ]

    const wrapper = mount(FwbButton, { props: { size: 'xl' } })
    const classes = wrapper.classes()

    xlButtonSizeClasses.forEach(cl => expect(classes).toContain(cl))
  })
})
