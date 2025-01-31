<template>
  <div>
    <div v-if="!dropzone">
      <label>
        <span :class="labelClasses">{{ label }}</span>
        <input
          :class="fileInpClasses"
          :multiple="multiple"
          type="file"
          :accept="accept"
          @change="handleChange"
        >
      </label>
      <slot />
    </div>
    <div
      v-else
      class="flex items-center justify-center"
      @change="handleChange"
      @dragover="dragOverHandler"
      @drop="dropFileHandler"
    >
      <label :class="dropzoneLabelClasses">
        <div :class="dropzoneWrapClasses">
          <svg
            aria-hidden="true"
            class="size-8 text-gray-500 dark:text-gray-400"
            fill="none"
            viewBox="0 0 20 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
            />
          </svg>
          <div v-if="!model">
            <p :class="dropzoneTextClasses">
              <span class="font-semibold">Click to upload</span>
              or drag and drop
            </p>
            <slot />
          </div>
          <p v-else>File: {{ dropZoneText }}</p>
        </div>
        <input
          :multiple="multiple"
          type="file"
          :accept="accept"
          class="hidden"
        >
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isArray } from 'lodash-es'
import { computed } from 'vue'

import { useFileInputClasses } from './composables/useFileInputClasses'

interface FileInputProps {
  dropzone?: boolean
  label?: string
  modelValue?: File | File[] | null
  multiple?: boolean
  size?: string
  accept?: string
}

const props = withDefaults(defineProps<FileInputProps>(), {
  dropzone: false,
  label: '',
  modelValue: null,
  multiple: false,
  size: 'sm',
  accept: '',
})

const dropZoneText = computed(() => {
  if (isArray(props.modelValue)) {
    return props.modelValue.map(el => el.name).join(', ')
  } else if (props.modelValue instanceof FileList) {
    return Array.from(props.modelValue)
      .map(el => el.name)
      .join(',')
  } else if (props.modelValue instanceof File) {
    return props.modelValue.name || ''
  }

  return ''
})

const emit = defineEmits(['update:modelValue'])
const model = computed({
  get () {
    return props.modelValue
  },
  set (val) {
    emit('update:modelValue', val)
  },
})

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (props.multiple) {
    model.value = Array.from(target.files ?? [])
  } else {
    model.value = target.files?.[0] ?? null
  }
}

const dropFileHandler = (event: DragEvent) => {
  event.preventDefault()
  const arr: File[] = []
  if (event.dataTransfer?.items) {
    Object.values(event.dataTransfer.items).forEach((item: DataTransferItem) => {
      if (item.kind === 'file') {
        arr.push(item.getAsFile() as File)
      }
    })
    if (props.multiple) {
      model.value = arr
    } else {
      model.value = arr[0]
    }
  } else if (event.dataTransfer?.files) {
    Object.values(event.dataTransfer.files).forEach((file: File) => {
      model.value = file
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
