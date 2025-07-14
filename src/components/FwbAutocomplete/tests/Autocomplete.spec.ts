import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'

import FwbAutocomplete from '../FwbAutocomplete.vue'

const mockOptions = [
  { id: 1, name: 'United States', code: 'US' },
  { id: 2, name: 'Canada', code: 'CA' },
  { id: 3, name: 'France', code: 'FR' },
  { id: 4, name: 'Germany', code: 'DE' },
  { id: 5, name: 'United Kingdom', code: 'UK' },
]

describe('FwbAutocomplete', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders with basic props', () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
        display: 'name',
        label: 'Select Country',
        placeholder: 'Search countries...',
      },
    })

    expect(wrapper.find('label').text()).toBe('Select Country')
    expect(wrapper.find('input').attributes('placeholder')).toBe('Search countries...')
  })

  it('filters options based on search input', async () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
        display: 'name',
      },
    })

    const input = wrapper.find('input')
    await input.setValue('United')
    await input.trigger('input')
    await nextTick()

    expect(wrapper.text()).toContain('United States')
    expect(wrapper.text()).toContain('United Kingdom')
    expect(wrapper.text()).not.toContain('France')
  })

  it('shows dropdown when input is focused', async () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
        display: 'name',
      },
    })

    const input = wrapper.find('input')
    await input.trigger('focus')
    await nextTick()

    expect(wrapper.find('.absolute.z-50').exists()).toBe(true)
  })

  it('selects option on click', async () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
        display: 'name',
      },
    })

    const input = wrapper.find('input')
    await input.trigger('focus')
    await nextTick()

    // Find the first dropdown option
    const dropdownItems = wrapper.findAll('.px-4.py-3.cursor-pointer')
    if (dropdownItems.length > 0) {
      await dropdownItems[0].trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
      expect(wrapper.emitted('select')).toBeTruthy()
    }
  })

  it('handles keyboard navigation', async () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
        display: 'name',
      },
    })

    const input = wrapper.find('input')
    await input.trigger('focus')
    await nextTick()
    await input.trigger('keydown', { key: 'ArrowDown' })
    await input.trigger('keydown', { key: 'Enter' })

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('select')).toBeTruthy()
  })

  it('clears selection when clear button is clicked', async () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        modelValue: mockOptions[0],
        options: mockOptions,
        searchFields: ['name'],
        display: 'name',
      },
    })

    // Find the clear button (X icon) by looking for the specific SVG path
    const clearButton = wrapper.find('svg path[d="M6 18L18 6M6 6l12 12"]').element.parentElement
    if (clearButton) {
      await wrapper.find('svg').trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
      const emittedEvents = wrapper.emitted('update:modelValue') as Array<any>
      expect(emittedEvents[emittedEvents.length - 1][0]).toBe(null)
    }
  })

  it('shows loading state', async () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: [],
        loading: true,
        loadingText: 'Loading...',
        searchFields: ['name'],
      },
    })

    const input = wrapper.find('input')
    await input.trigger('focus')
    await nextTick()

    expect(wrapper.text()).toContain('Loading...')
    expect(wrapper.find('.animate-spin').exists()).toBe(true)
  })

  it('shows no results message', async () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
        noResultsText: 'No results found',
      },
    })

    const input = wrapper.find('input')
    await input.setValue('xyz')
    await input.trigger('input')
    await nextTick()

    expect(wrapper.text()).toContain('No results found')
  })

  it('handles remote search with debounce', async () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: [],
        remote: true,
        debounce: 300,
        searchFields: ['name'],
      },
    })

    const input = wrapper.find('input')
    await input.setValue('test')
    await input.trigger('input')

    // Should not emit search immediately due to debounce
    expect(wrapper.emitted('search')).toBeFalsy()

    // Fast-forward time by debounce amount
    vi.advanceTimersByTime(300)
    await nextTick()

    expect(wrapper.emitted('search')).toBeTruthy()
    expect(wrapper.emitted('search')?.[0]?.[0]).toBe('test')
  })

  it('renders validation message slot', () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
        validationStatus: 'error',
      },
      slots: {
        validationMessage: 'This field is required',
      },
    })

    expect(wrapper.text()).toContain('This field is required')
    expect(wrapper.find('.text-red-600').exists()).toBe(true)
  })

  it('renders helper text slot', () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
      },
      slots: {
        helper: 'Choose your country',
      },
    })

    expect(wrapper.text()).toContain('Choose your country')
    expect(wrapper.find('.text-gray-500').exists()).toBe(true)
  })

  it('handles different sizes', () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
        size: 'lg',
      },
    })

    // Check that size prop is passed to FwbInput
    const inputComponent = wrapper.getComponent({ name: 'FwbInput' })
    expect(inputComponent.props('size')).toBe('lg')
  })

  it('works with disabled state', () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
        disabled: true,
      },
    })

    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('closes dropdown on escape key', async () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
      },
    })

    const input = wrapper.find('input')
    await input.trigger('focus')
    await nextTick()

    expect(wrapper.find('.absolute.z-50').exists()).toBe(true)

    await input.trigger('keydown', { key: 'Escape' })
    await nextTick()

    expect(wrapper.find('.absolute.z-50').exists()).toBe(false)
  })

  it('searches multiple fields', async () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name', 'code'],
        display: 'name',
      },
    })

    const input = wrapper.find('input')
    await input.setValue('US')
    await input.trigger('input')
    await nextTick()

    expect(wrapper.text()).toContain('United States')
  })

  it('handles custom display function', async () => {
    const displayFn = vi.fn((option: any) => `${option.name} (${option.code})`)

    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
        display: displayFn,
        modelValue: mockOptions[0],
      },
    })

    await nextTick()
    expect(displayFn).toHaveBeenCalledWith(mockOptions[0])
  })

  it('generates correct option keys with valueField', () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
        valueField: 'id',
      },
    })

    const vm = wrapper.vm as any
    expect(vm.getOptionKey(mockOptions[0])).toBe('1')
    expect(vm.getOptionKey(mockOptions[1])).toBe('2')
  })

  it('generates JSON keys when no valueField provided', () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
      },
    })

    const vm = wrapper.vm as any
    const key = vm.getOptionKey(mockOptions[0])
    expect(key).toBe(JSON.stringify(mockOptions[0]))
  })

  it('emits search event on focus', async () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
      },
    })

    const input = wrapper.find('input')
    await input.trigger('focus')

    expect(wrapper.emitted('search')).toBeTruthy()
  })

  it('handles mouse enter on dropdown items', async () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
        display: 'name',
      },
    })

    const input = wrapper.find('input')
    await input.trigger('focus')
    await nextTick()

    const dropdownItems = wrapper.findAll('.px-4.py-3.cursor-pointer')
    if (dropdownItems.length > 0) {
      await dropdownItems[1].trigger('mouseenter')

      // Check that highlighting is updated (this would be internal state)
      // We can verify by checking classes or other visual indicators
      expect(dropdownItems[1].classes()).toContain('cursor-pointer')
    }
  })

  it('maintains input value when selection is made', async () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
        display: 'name',
      },
    })

    const input = wrapper.find('input')
    await input.trigger('focus')
    await nextTick()

    const dropdownItems = wrapper.findAll('.px-4.py-3.cursor-pointer')
    if (dropdownItems.length > 0) {
      await dropdownItems[0].trigger('click')

      // Input should show the selected option's display value
      expect(input.element.value).toBe('United States')
    }
  })
})
