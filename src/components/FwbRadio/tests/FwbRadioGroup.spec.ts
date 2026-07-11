import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { h } from 'vue'

import FwbRadio from '../FwbRadio.vue'
import FwbRadioGroup from '../FwbRadioGroup.vue'

const radioSlot = (props?: Record<string, unknown>) => () => h(FwbRadio, { label: 'Apple', value: 'apple', ...props })

describe('FwbRadioGroup', () => {
  describe('structure', () => {
    it('renders a fieldset', () => {
      const wrapper = mount(FwbRadioGroup, { props: { name: 'fruit' } })
      expect(wrapper.element.tagName).toBe('FIELDSET')
    })

    it('renders a legend when label prop is provided', () => {
      const wrapper = mount(FwbRadioGroup, { props: { name: 'fruit', label: 'Pick a fruit' } })
      expect(wrapper.find('legend').text()).toBe('Pick a fruit')
    })

    it('renders legend slot content when provided', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit' },
        slots: { legend: 'Rich <strong>legend</strong>' },
      })
      expect(wrapper.find('legend').html()).toContain('<strong>legend</strong>')
    })

    it('legend slot takes priority over label prop', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit', label: 'prop label' },
        slots: { legend: 'slot label' },
      })
      expect(wrapper.find('legend').text()).toBe('slot label')
    })

    it('renders no legend when neither label nor legend slot is provided', () => {
      const wrapper = mount(FwbRadioGroup, { props: { name: 'fruit' } })
      expect(wrapper.find('legend').exists()).toBe(false)
    })
  })

  describe('provide/inject — name', () => {
    it('provides name to child FwbRadio so name prop on radio can be omitted', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit' },
        slots: { default: radioSlot() },
      })
      expect(wrapper.find('input[type="radio"]').attributes('name')).toBe('fruit')
    })

    it('child radio name prop overrides group name', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit' },
        slots: { default: radioSlot({ name: 'override' }) },
      })
      expect(wrapper.find('input[type="radio"]').attributes('name')).toBe('override')
    })
  })

  describe('provide/inject — validationStatus', () => {
    it('sets aria-invalid on child radio inputs when validationStatus is "error"', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit', validationStatus: 'error' },
        slots: { default: radioSlot() },
      })
      expect(wrapper.find('input[type="radio"]').attributes('aria-invalid')).toBe('true')
    })

    it('does not set aria-invalid on child radios when validationStatus is "success"', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit', validationStatus: 'success' },
        slots: { default: radioSlot() },
      })
      expect(wrapper.find('input[type="radio"]').attributes('aria-invalid')).toBeUndefined()
    })
  })

  describe('slots', () => {
    it('renders validationMessage slot', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit', validationStatus: 'error' },
        slots: { validationMessage: 'Required field' },
      })
      expect(wrapper.text()).toContain('Required field')
    })

    it('renders helper slot', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit' },
        slots: { helper: 'Choose one option' },
      })
      expect(wrapper.text()).toContain('Choose one option')
    })
  })

  describe('aria-describedby', () => {
    it('is absent when no validationMessage or helper slots are provided', () => {
      const wrapper = mount(FwbRadioGroup, { props: { name: 'fruit' } })
      expect(wrapper.element.getAttribute('aria-describedby')).toBeNull()
    })

    it('points to the helper paragraph id when helper slot is provided', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit' },
        slots: { helper: 'Hint' },
      })
      const helperP = wrapper.find('p')
      expect(wrapper.element.getAttribute('aria-describedby')).toBe(helperP.attributes('id'))
    })

    it('points to the validationMessage paragraph id when that slot is provided', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit', validationStatus: 'error' },
        slots: { validationMessage: 'Required' },
      })
      const msgP = wrapper.find('p')
      expect(wrapper.element.getAttribute('aria-describedby')).toBe(msgP.attributes('id'))
    })

    it('includes both IDs when both slots are rendered', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit', validationStatus: 'error' },
        slots: { validationMessage: 'Required', helper: 'Choose one' },
      })
      const describedby = wrapper.element.getAttribute('aria-describedby') ?? ''
      const ids = describedby.split(' ')
      expect(ids).toHaveLength(2)
      ids.forEach((id: string) => expect(wrapper.find(`#${id}`).exists()).toBe(true))
    })
  })

  describe('validationMessage prop', () => {
    it('renders the prop text when no validationMessage slot is provided', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit', validationStatus: 'error', validationMessage: 'Required' },
      })
      expect(wrapper.find('p').text()).toBe('Required')
    })

    it('is overridden by the validationMessage slot when both are provided', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit', validationStatus: 'error', validationMessage: 'Prop message' },
        slots: { validationMessage: 'Slot message' },
      })
      expect(wrapper.find('p').text()).toBe('Slot message')
    })

    it('points aria-describedby to the validation paragraph when only the prop is set', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit', validationStatus: 'error', validationMessage: 'Required' },
      })
      const msgP = wrapper.find('p')
      expect(wrapper.element.getAttribute('aria-describedby')).toBe(msgP.attributes('id'))
    })
  })

  describe('validation styling', () => {
    it('applies error color to legend when validationStatus is "error"', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit', label: 'Pick fruit', validationStatus: 'error' },
      })
      expect(wrapper.find('legend').classes()).toContain('text-red-700')
    })

    it('applies success color to legend when validationStatus is "success"', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit', label: 'Pick fruit', validationStatus: 'success' },
      })
      expect(wrapper.find('legend').classes()).toContain('text-green-700')
    })

    it('applies neutral color to legend when validationStatus is not set', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit', label: 'Pick fruit' },
      })
      expect(wrapper.find('legend').classes()).toContain('text-gray-900')
    })

    it('applies error color to validationMessage text', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit', validationStatus: 'error' },
        slots: { validationMessage: 'Required' },
      })
      expect(wrapper.find('p').classes()).toContain('text-red-700')
    })

    it('applies error color to child radio label text when validationStatus is "error"', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit', validationStatus: 'error' },
        slots: { default: radioSlot() },
      })
      expect(wrapper.find('label span').classes()).toContain('text-red-700')
    })

    it('applies success color to child radio label text when validationStatus is "success"', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit', validationStatus: 'success' },
        slots: { default: radioSlot() },
      })
      expect(wrapper.find('label span').classes()).toContain('text-green-700')
    })

    it('applies neutral color to child radio label text when validationStatus is not set', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit' },
        slots: { default: radioSlot() },
      })
      expect(wrapper.find('label span').classes()).toContain('text-gray-900')
    })
  })

  describe('styling props', () => {
    it('applies wrapperClass to the fieldset', () => {
      const wrapper = mount(FwbRadioGroup, { props: { name: 'fruit', wrapperClass: 'p-4' } })
      expect(wrapper.element.classList).toContain('p-4')
    })

    it('applies legendClass to the legend', () => {
      const wrapper = mount(FwbRadioGroup, {
        props: { name: 'fruit', label: 'Pick fruit', legendClass: 'font-bold' },
      })
      expect(wrapper.find('legend').classes()).toContain('font-bold')
    })
  })
})
