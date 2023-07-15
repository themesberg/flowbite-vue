<template>
  <div>
    <div v-if="!dropzone">
      <label>
        <span :class="labelClasses">{{ label }}</span>
        <input :class="fileInpClasses" @change="handleChange" type="file">
      </label>
      <slot />
    </div>
    <div v-else @change="handleChange" @drop="dropFileHandler" @dragover="dragOverHandler"
      class="flex items-center justify-center">
      <label :class="dropzoneLabelClasses">
        <div :class="dropzoneWrapClasses">
          <svg class="w-8 h-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
          </svg>
          <div v-if="!model">
            <p :class="dropzoneTextClasses"><span class="font-semibold">Click to upload</span> or
              drag and drop
            </p>
            <slot />
          </div>
          <p v-else>File: {{ model }}</p>
        </div>
        <input type="file" class="hidden" />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFileInputClasses } from '@/components/FileInput/composables/useFileInputClasses'

interface FileInputProps {
  modelValue?: string;
  label?: string;
  size?: string;
  dropzone?: boolean;
}
const props = withDefaults(defineProps<FileInputProps>(), {
  value: '',
  label: '',
  size: 'sm',
  dropzone: false,
})

const emit = defineEmits(['update:modelValue'])
const model = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  model.value = target.files?.[0]?.name
}

const dropFileHandler = (event: any) => {
  event.preventDefault()

  if (event.dataTransfer.items) {
    [...event.dataTransfer.items].forEach((item, i) => {
      if (item.kind === 'file') {
        const file = item.getAsFile()
        model.value = file.name
      }
    })
  } else {
    [...event.dataTransfer.files].forEach((file, i) => {
      model.value = file.name
    })
  }
}

const dragOverHandler = (event: Event) => {
  event.preventDefault()
}

const {
  fileInpClasses,
  labelClasses,
  dropzoneLabelClasses,
  dropzoneWrapClasses,
  dropzoneTextClasses,
} = useFileInputClasses(props.size)
</script>
