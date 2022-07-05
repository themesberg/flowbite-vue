<template>
  <div class="vp-raw inline-flex items-center gap-2 flex-wrap">
    <Button gradient="purple-blue" outline :disabled="loading" :loading="loading" @click="loading = !loading" size="xs">
      Click me
    </Button>
    <Button gradient="red-yellow" :loading="loading" @click="loading = !loading" size="sm">
      Click me
    </Button>
    <Button outline color="default" loading-position="suffix" :loading="loading" @click="loading = !loading">
      Click me
      <template #suffix>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
        </svg>
      </template>
    </Button>
    <Button gradient="green-blue" :loading="loading" @click="loading = !loading" size="lg">
      Click me
    </Button>
    <Button gradient="pink" :loading="loading" @click="loading = !loading" size="xl">
      Click me
    </Button>
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import {Button} from '../../../../src/index'

const loading = ref(false)
</script>
