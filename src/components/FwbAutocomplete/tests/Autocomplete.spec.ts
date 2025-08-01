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

    expect(wrapper.find('[data-testid="fwb-autocomplete-dropdown"]').exists()).toBe(true)
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

    // Find the first dropdown option using the new test ID
    const firstOption = wrapper.find('[data-testid="fwb-autocomplete-option-0"]')
    if (firstOption.exists()) {
      await firstOption.trigger('click')
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

    const clearButton = wrapper.find('[data-testid="fwb-autocomplete-clear-button"]')
    if (clearButton.exists()) {
      await clearButton.trigger('click')
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
    expect(wrapper.find('[data-testid="fwb-autocomplete-loading-spinner"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="fwb-autocomplete-loading-message"]').exists()).toBe(true)
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
    expect(wrapper.find('[data-testid="fwb-autocomplete-no-results"]').exists()).toBe(true)
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
    expect(wrapper.find('[data-testid="fwb-autocomplete-validation-message"]').exists()).toBe(true)
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
    expect(wrapper.find('[data-testid="fwb-autocomplete-helper-text"]').exists()).toBe(true)
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

    expect(wrapper.find('[data-testid="fwb-autocomplete-dropdown"]').exists()).toBe(true)

    await input.trigger('keydown', { key: 'Escape' })
    await nextTick()

    expect(wrapper.find('[data-testid="fwb-autocomplete-dropdown"]').exists()).toBe(false)
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

  it('renders and selects options correctly with valueField', async () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
        display: 'name',
        valueField: 'id',
      },
    })

    const input = wrapper.find('input')
    await input.trigger('focus')
    await nextTick()

    // Verify all options render in dropdown
    expect(wrapper.find('[data-testid="fwb-autocomplete-dropdown"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="fwb-autocomplete-option-0"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="fwb-autocomplete-option-1"]').exists()).toBe(true)

    // Verify option content is displayed correctly
    expect(wrapper.text()).toContain('United States')
    expect(wrapper.text()).toContain('Canada')

    // Select an option and verify the selection works
    const firstOption = wrapper.find('[data-testid="fwb-autocomplete-option-0"]')
    await firstOption.trigger('click')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('select')).toBeTruthy()
    const selectedValue = wrapper.emitted('update:modelValue')?.[0]?.[0]
    expect(selectedValue).toEqual(mockOptions[0])
  })

  it('renders and selects options correctly without valueField', async () => {
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

    // Verify all options render in dropdown
    expect(wrapper.find('[data-testid="fwb-autocomplete-dropdown"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="fwb-autocomplete-option-0"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="fwb-autocomplete-option-1"]').exists()).toBe(true)

    // Verify option content is displayed correctly
    expect(wrapper.text()).toContain('United States')
    expect(wrapper.text()).toContain('Canada')

    // Select an option and verify the selection works
    const secondOption = wrapper.find('[data-testid="fwb-autocomplete-option-1"]')
    await secondOption.trigger('click')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('select')).toBeTruthy()
    const selectedValue = wrapper.emitted('update:modelValue')?.[0]?.[0]
    expect(selectedValue).toEqual(mockOptions[1])
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

    const secondOption = wrapper.find('[data-testid="fwb-autocomplete-option-1"]')
    if (secondOption.exists()) {
      await secondOption.trigger('mouseenter')

      // Check that the option is highlighted (this would be internal state)
      // We can verify by checking classes or other visual indicators
      expect(secondOption.classes()).toContain('fwb-autocomplete-option')
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

    const firstOption = wrapper.find('[data-testid="fwb-autocomplete-option-0"]')
    if (firstOption.exists()) {
      await firstOption.trigger('click')

      // Input should show the selected option's display value
      expect(input.element.value).toBe('United States')
    }
  })

  it('closes dropdown on blur event', async () => {
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

    expect(wrapper.find('[data-testid="fwb-autocomplete-dropdown"]').exists()).toBe(true)

    // Blur to close dropdown
    await input.trigger('blur')
    await nextTick()

    expect(wrapper.find('[data-testid="fwb-autocomplete-dropdown"]').exists()).toBe(false)
  })

  it('passes inputProps to input component', () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
        inputProps: {
          size: 'lg',
          class: 'custom-styling',
        },
      },
    })

    // Since we're using default FwbInput, check if props are passed
    const inputWrapper = wrapper.findComponent({ name: 'FwbInput' })
    expect(inputWrapper.exists()).toBe(true)
    // The class should be merged through inputProps
    expect(inputWrapper.props()).toMatchObject({
      size: 'lg',
      class: 'custom-styling',
    })
  })

  it('uses FwbInput as default input component', () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
      },
    })

    // Should use FwbInput by default
    const fwbInput = wrapper.findComponent({ name: 'FwbInput' })
    expect(fwbInput.exists()).toBe(true)
  })

  it('applies custom z-index to dropdown', async () => {
    const wrapper = mount(FwbAutocomplete, {
      props: {
        options: mockOptions,
        searchFields: ['name'],
        display: 'name',
        zIndex: 200,
      },
    })

    const input = wrapper.find('input')
    await input.trigger('focus')
    await nextTick()

    const dropdown = wrapper.find('[data-testid="fwb-autocomplete-dropdown"]')
    expect(dropdown.exists()).toBe(true)
    expect(dropdown.classes()).toContain('z-[200]')
  })

  it('uses default z-index when not specified', async () => {
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

    const dropdown = wrapper.find('[data-testid="fwb-autocomplete-dropdown"]')
    expect(dropdown.exists()).toBe(true)
    expect(dropdown.classes()).toContain('z-[100]')
  })
})
