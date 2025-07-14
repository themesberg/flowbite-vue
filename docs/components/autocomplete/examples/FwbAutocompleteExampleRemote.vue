<template>
  <div class="vp-raw">
    <fwb-autocomplete
      v-model="selectedCountry"
      :options="countries"
      :loading="loading"
      :search-fields="['name']"
      display="name"
      label="Search countries"
      placeholder="Type to search countries..."
      remote
      :min-chars="2"
      :debounce="500"
      @search="searchCountries"
    >
      <template #option="{ option }">
        <div class="flex items-center space-x-3">
          <span class="text-2xl">{{ option.flag }}</span>
          <div>
            <div class="font-medium">
              {{ option.name }}
            </div>
            <div class="text-sm text-gray-500">
              {{ option.region }}
            </div>
          </div>
        </div>
      </template>
    </fwb-autocomplete>

    <div
      v-if="selectedCountry"
      class="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg"
    >
      <div class="flex items-center space-x-3">
        <span class="text-3xl">{{ selectedCountry.flag }}</span>
        <div>
          <div class="font-semibold">
            {{ selectedCountry.name }}
          </div>
          <div class="text-sm text-gray-600">
            Capital: {{ selectedCountry.capital }} • Population: {{ selectedCountry.population?.toLocaleString() }}
          </div>
        </div>
      </div>
    </div>

    <p
      v-if="error"
      class="mt-2 text-sm text-red-600"
    >
      {{ error }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbAutocomplete } from '../../../../src/index'

interface Country {
  name: string
  capital: string
  region: string
  population: number
  flag: string
}

const selectedCountry = ref<Country | null>(null)
const countries = ref<Country[]>([])
const loading = ref(false)
const error = ref('')

const searchCountries = async (query: string) => {
  if (query.length < 2) {
    countries.value = []
    error.value = ''
    return
  }

  loading.value = true
  error.value = ''

  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(query)}`)

    if (!response.ok) {
      if (response.status === 404) {
        countries.value = []
        return
      }
      throw new Error('Failed to fetch countries')
    }

    const data = await response.json()

    countries.value = data.slice(0, 10).map((country: any) => ({
      name: country.name.common,
      capital: country.capital?.[0] || 'N/A',
      region: country.region,
      population: country.population,
      flag: country.flag,
    }))
  } catch (err) {
    error.value = 'Failed to search countries. Please try again.'
    countries.value = []
  } finally {
    loading.value = false
  }
}
</script>
