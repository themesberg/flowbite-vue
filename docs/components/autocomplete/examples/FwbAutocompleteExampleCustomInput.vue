<template>
  <div class="vp-raw">
    <div class="mb-6">
      <h3 class="text-lg font-semibold mb-4">
        Custom Input Component
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Use any input component by passing it to the <code>inputComponent</code> prop.
      </p>

      <!-- Using custom input component -->
      <fwb-autocomplete
        v-model="selectedUser"
        :options="users"
        :search-fields="['name', 'email']"
        :loading="loading"
        :input-component="CustomInput"
        :input-props="{
          prefixIcon: 'search',
          class: 'custom-search-input',
          theme: 'rounded'
        }"
        display="name"
        placeholder="Search users with custom input..."
        class="mb-4"
        @search="handleSearch"
      >
        <template #suffix="{ loading, clear }">
          <div class="flex items-center space-x-2">
            <div
              v-if="loading"
              class="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"
            />
            <button
              v-else-if="selectedUser"
              class="text-gray-400 hover:text-purple-600 transition-colors"
              @click="clear"
            >
              <svg
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </template>

        <template #option="{ option }">
          <div class="flex items-center space-x-3">
            <svg
              class="w-8 h-8 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                {{ option.name }}
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ option.email }}
              </p>
            </div>
          </div>
        </template>
      </fwb-autocomplete>
    </div>

    <div class="mb-6">
      <h3 class="text-lg font-semibold mb-4">
        Customizing FwbInput with Props
      </h3>

      <!-- Using standard FwbInput with custom props -->
      <div class="mb-4">
        <label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
          Standard FwbInput with custom styling:
        </label>
        <fwb-autocomplete
          v-model="selectedProduct"
          :options="products"
          :search-fields="['name', 'category']"
          :input-props="{
            size: 'lg',
            class: 'border-purple-300 focus:border-purple-500 focus:ring-purple-200'
          }"
          display="name"
          placeholder="Search products..."
        >
          <template #suffix="{ loading }">
            <div class="flex items-center">
              <svg
                v-if="loading"
                class="w-5 h-5 text-purple-600 animate-spin"
                fill="none"
                viewBox="0 0 100 101"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C0 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <svg
                v-else
                class="w-5 h-5 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </template>

          <template #option="{ option }">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <svg
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div>
                  <p class="font-medium">
                    {{ option.name }}
                  </p>
                  <p class="text-sm text-gray-500">
                    {{ option.category }}
                  </p>
                </div>
              </div>
              <span class="text-lg font-bold text-green-600">${{ option.price }}</span>
            </div>
          </template>
        </fwb-autocomplete>
      </div>
    </div>

    <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h4 class="font-semibold mb-2">
        Selected Values:
      </h4>
      <p><strong>User:</strong> {{ selectedUser?.name || 'None' }}</p>
      <p><strong>Product:</strong> {{ selectedProduct?.name || 'None' }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h, ref } from 'vue'

import { FwbAutocomplete } from '../../../../src/index'

// Custom input component example
const CustomInput = defineComponent({
  props: {
    modelValue: String,
    placeholder: String,
    disabled: Boolean,
    prefixIcon: String,
    theme: String,
    class: String,
  },
  emits: ['update:modelValue', 'input', 'focus', 'keydown'],
  setup (props, { emit, attrs }) {
    const handleInput = (event: Event) => {
      const value = (event.target as HTMLInputElement).value
      emit('update:modelValue', value)
      emit('input', event)
    }

    const getIconPath = () => {
      if (props.prefixIcon === 'search') {
        return 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
      }
      return ''
    }

    const inputClasses = [
      'block w-full pl-10 pr-4 py-3 text-gray-900 bg-white border border-gray-300',
      'focus:ring-2 focus:ring-purple-500 focus:border-purple-500',
      'dark:bg-gray-700 dark:border-gray-600 dark:text-white',
      props.theme === 'rounded' ? 'rounded-full' : 'rounded-lg',
      props.class,
    ].filter(Boolean).join(' ')

    return () => h('div', { class: 'relative' }, [
      // Prefix icon
      props.prefixIcon && h('div', {
        class: 'absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none',
      }, [
        h('svg', {
          class: 'w-5 h-5 text-gray-400',
          fill: 'none',
          stroke: 'currentColor',
          viewBox: '0 0 24 24',
        }, [
          h('path', {
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': '2',
            'd': getIconPath(),
          }),
        ]),
      ]),
      // Input
      h('input', {
        ...attrs,
        value: props.modelValue,
        placeholder: props.placeholder,
        disabled: props.disabled,
        class: inputClasses,
        onInput: handleInput,
        onFocus: (e: Event) => emit('focus', e),
        onKeydown: (e: KeyboardEvent) => emit('keydown', e),
      }),
    ])
  },
})

// Sample data
const users = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com' },
])

const products = ref([
  { id: 1, name: 'MacBook Pro', category: 'Laptops', price: 1999 },
  { id: 2, name: 'iPhone 15', category: 'Phones', price: 999 },
  { id: 3, name: 'iPad Air', category: 'Tablets', price: 599 },
  { id: 4, name: 'AirPods Pro', category: 'Audio', price: 249 },
])

type User = { id: number, name: string, email: string }
type Product = { id: number, name: string, category: string, price: number }

const selectedUser = ref<User | null>(null)
const selectedProduct = ref<Product | null>(null)
const loading = ref(false)

const handleSearch = (query: string) => {
  if (!query) return

  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 500)
}
</script>
