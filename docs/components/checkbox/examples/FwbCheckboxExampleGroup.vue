<template>
  <div class="vp-raw">
    <div class="space-y-2">
      <fwb-checkbox
        v-for="fruit, i in fruits"
        :key="i"
        v-model="selectedFruits"
        :label="fruit"
        :value="fruit"
        name="fruits"
      />
      <p class="mb-4 text-gray-500 text-sm">
        Selected fruits: {{ selectedFruits }}
      </p>
      <fwb-checkbox
        v-for="(name, id) in planets"
        :key="id"
        v-model="selectedPlanets"
        :label="name"
        :value="id"
        name="planets"
      />
      <p class="text-gray-500 text-sm">
        Selected planets: {{ selectedPlanets }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { FwbCheckbox } from '../../../../src/index'

const selectedFruits = ref(['Banana', 'Strawberry'])
const fruits = [
  'Apple',
  'Banana',
  'Orange',
  'Strawberry',
]

const selectedPlanets = ref(['3'])
const planets = {
  1: 'Mercury',
  2: 'Venus',
  3: 'Earth',
  4: 'Mars',
  5: 'Jupiter',
  6: 'Saturn',
  7: 'Uranus',
  8: 'Neptune',
}
</script>
