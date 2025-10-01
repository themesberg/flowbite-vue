<template>
  <div
    ref="rootEl"
    :class="wrapperClasses"
    data-testid="fwb-autocomplete-wrapper"
  >
    <div class="relative">
      <component
        :is="inputComponent"
        v-model="inputValue"
        v-bind="{
          placeholder,
          disabled,
          size,
          label,
          ...inputProps,
          ...$attrs,
        }"
        :label-class="labelClass"
        :validation-status="validationStatus"
        data-testid="fwb-autocomplete-input"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
      >
        <template #suffix>
          <slot
            name="suffix"
            :loading="loading"
            :clear="clear"
          >
            <div class="flex items-center">
              <div
                v-if="loading"
                class="border-2 border-t-transparent border-blue-600 rounded-full w-4 h-4 animate-spin"
                data-testid="fwb-autocomplete-loading-spinner"
              />
              <svg
                v-else-if="inputValue"
                class="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                data-testid="fwb-autocomplete-clear-button"
                @click="clear"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <svg
                v-else
                class="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                data-testid="fwb-autocomplete-search-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </slot>
        </template>
      </component>

      <div
        v-if="
          dropdownOpen &&
            (filteredOptions.length > 0 || loading || noResultsFound)
        "
        :class="dropdownClasses"
        data-testid="fwb-autocomplete-dropdown"
      >
        <div
          v-if="loading"
          :class="messageClasses"
          data-testid="fwb-autocomplete-loading-message"
        >
          <div class="flex justify-center items-center gap-2">
            <div
              class="border-2 border-t-transparent border-blue-600 rounded-full w-4 h-4 animate-spin"
            />
            {{ loadingText }}
          </div>
        </div>

        <div
          v-else-if="noResultsFound"
          :class="messageClasses"
          data-testid="fwb-autocomplete-no-results"
        >
          {{ noResultsText }}
        </div>

        <div
          v-for="(option, index) in filteredOptions"
          v-else
          :key="getOptionKey(option)"
          :class="getDropdownItemClasses(highlightedIndex === index)"
          :data-testid="`fwb-autocomplete-option-${index}`"
          class="fwb-autocomplete-option"
          @mousedown="isSelectingOption = true"
          @mouseup="isSelectingOption = false"
          @mouseleave="isSelectingOption = false"
          @click="select(option)"
          @mouseenter="highlightedIndex = index"
        >
          <slot
            name="option"
            :option="option"
            :index="index"
          >
            {{ getOptionLabel(option) }}
          </slot>
        </div>
      </div>
    </div>

    <p
      v-if="$slots.validationMessage"
      class="mt-2 text-red-600 dark:text-red-500 text-sm"
      data-testid="fwb-autocomplete-validation-message"
    >
      <slot name="validationMessage" />
    </p>
    <p
      v-if="$slots.helper"
      class="mt-2 text-gray-500 dark:text-gray-400 text-sm"
      data-testid="fwb-autocomplete-helper-text"
    >
      <slot name="helper" />
    </p>
  </div>
</template>

<script setup lang="ts" generic="T extends Record<string, any>">
import {
  type Component,
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  toRefs,
  watch,
} from 'vue'

import FwbInput from '../FwbInput/FwbInput.vue'

import { useAutocompleteClasses } from './composables/useAutocompleteClasses'

import type { AutocompleteEmits, AutocompleteProps } from './types'

defineOptions({ inheritAttrs: true })

const props = withDefaults(
  defineProps<
    AutocompleteProps<T> & {
      inputComponent?: Component
      inputProps?: Record<string, any>
    }
  >(),
  {
    placeholder: 'Search...',
    disabled: false,
    searchFields: () => [],
    loadingText: 'Loading...',
    noResultsText: 'No results found',
    minChars: 0,
    remote: false,
    debounce: 300,
    size: 'md',
    class: '',
    wrapperClass: '',
    labelClass: '',
    dropdownClass: '',
    inputComponent: FwbInput,
    inputProps: () => ({}),
    zIndex: 100,
  },
)

const emit = defineEmits<AutocompleteEmits<T>>()

const rootEl = ref<HTMLElement | null>(null)
const inputValue = ref('')
const dropdownOpen = ref(false)
const highlightedIndex = ref(-1)
const debounceTimer = ref<ReturnType<typeof setTimeout> | null>(null)
const isSelectingOption = ref(false)

const {
  wrapperClasses,
  dropdownClasses,
  getDropdownItemClasses,
  messageClasses,
} = useAutocompleteClasses(toRefs(props))

const filteredOptions = computed(() => {
  if (props.remote || inputValue.value.length < props.minChars) {
    return props.options
  }

  const query = inputValue.value.toLowerCase()

  if (!props.searchFields?.length) return props.options

  return props.options.filter(opt =>
    props.searchFields?.some(field =>
      String(opt[field] ?? '')
        .toLowerCase()
        .includes(query),
    ),
  )
})

const noResultsFound = computed(
  () =>
    !props.loading
    && inputValue.value.length >= props.minChars
    && filteredOptions.value.length === 0,
)

const getOptionKey = (opt: T): string => {
  return props.valueField && opt[props.valueField] !== undefined
    ? String(opt[props.valueField])
    : JSON.stringify(opt)
}

const getOptionLabel = (opt: T): string => {
  if (typeof props.display === 'function') return props.display(opt)
  if (props.display && typeof props.display === 'string') {
    return String(opt[props.display])
  }
  return String(opt)
}

const handleInput = () => {
  dropdownOpen.value = true
  highlightedIndex.value = -1
  emit('update:modelValue', null)

  if (debounceTimer.value) {
    clearTimeout(debounceTimer.value)
  }

  if (props.remote && props.debounce > 0) {
    debounceTimer.value = setTimeout(() => {
      emit('search', inputValue.value)
    }, props.debounce)
  } else {
    emit('search', inputValue.value)
  }
}

const handleFocus = () => {
  dropdownOpen.value = true
  emit('search', inputValue.value)
}

const handleBlur = () => {
  if (!isSelectingOption.value) {
    dropdownOpen.value = false
    highlightedIndex.value = -1
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (!dropdownOpen.value && event.key === 'ArrowDown') {
    dropdownOpen.value = true
    emit('search', inputValue.value)
    if (filteredOptions.value.length > 0) highlightedIndex.value = 0
    return
  }

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      if (filteredOptions.value.length > 0) {
        highlightedIndex.value
          = (highlightedIndex.value + 1) % filteredOptions.value.length
        scrollToHighlightedOption()
      }
      break
    case 'ArrowUp':
      event.preventDefault()
      if (filteredOptions.value.length > 0) {
        highlightedIndex.value
          = (highlightedIndex.value - 1 + filteredOptions.value.length)
          % filteredOptions.value.length
        scrollToHighlightedOption()
      }
      break
    case 'Enter':
      event.preventDefault()
      if (highlightedIndex.value >= 0) {
        const option = filteredOptions.value[highlightedIndex.value]
        if (option !== undefined) {
          select(option)
        }
      }
      break
    case 'Escape':
      dropdownOpen.value = false
      highlightedIndex.value = -1
      break
  }
}

const select = (opt: T) => {
  inputValue.value = getOptionLabel(opt)
  dropdownOpen.value = false
  highlightedIndex.value = -1
  emit('update:modelValue', opt)
  emit('select', opt)
}

const clear = () => {
  inputValue.value = ''
  dropdownOpen.value = false
  emit('update:modelValue', null)
}

const scrollToHighlightedOption = async () => {
  await nextTick()
  if (highlightedIndex.value >= 0 && rootEl.value) {
    const highlightedElement = rootEl.value.querySelector(
      `[data-testid="fwb-autocomplete-option-${highlightedIndex.value}"]`,
    ) as HTMLElement

    if (highlightedElement && typeof highlightedElement.scrollIntoView === 'function') {
      highlightedElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    }
  }
}

const handleClickOutside = (event: Event) => {
  if (rootEl.value && !rootEl.value.contains(event.target as Node)) {
    dropdownOpen.value = false
    highlightedIndex.value = -1
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  if (debounceTimer.value) {
    clearTimeout(debounceTimer.value)
  }
})

watch(
  () => props.modelValue,
  (newVal) => {
    inputValue.value = newVal ? getOptionLabel(newVal) : ''
  },
  { immediate: true },
)
</script>
