<template>
  <div
    v-if="!dropzone"
    :class="wrapperClass"
  >
    <label
      v-if="label"
      :for="inputId"
      :class="labelClass"
    >{{ label }}</label>
    <input
      v-bind="inputAttributes"
      :accept="accept"
      :aria-describedby="ariaDescribedby"
      :aria-invalid="validationStatus === 'error' ? true : undefined"
      :class="inputClass"
      :disabled="disabled"
      :multiple="multiple"
      type="file"
      @change="handleChange"
    >
    <p
      v-if="$slots.validationMessage || validationMessage"
      :id="validationMessageId"
      :class="validationMessageClass"
    >
      <slot name="validationMessage">
        {{ validationMessage }}
      </slot>
    </p>
    <p
      v-if="$slots.helper"
      :id="helperId"
      :class="helperMessageClass"
    >
      <slot name="helper" />
    </p>
    <slot />
  </div>
  <div
    v-else
    :class="['flex flex-col justify-center items-center', wrapperClass]"
    @dragover="dragOverHandler"
    @drop="dropFileHandler"
  >
    <span
      v-if="label"
      :id="`${inputId}-label`"
      :class="labelClass"
    >{{ label }}</span>
    <label :class="dropzoneLabelClass">
      <div :class="dropzoneWrapClass">
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
        <div v-if="!model || (Array.isArray(model) && model.length === 0)">
          <p :class="dropzoneTextClass">
            <slot name="dropzonePlaceholder">
              <span class="font-semibold">Click to upload</span>
              or drag and drop
            </slot>
          </p>
          <slot />
        </div>
        <p
          v-else
          class="text-center"
        >
          File: {{ dropZoneText }}
        </p>
      </div>
      <input
        v-bind="inputAttributes"
        :accept="accept"
        :aria-describedby="ariaDescribedby"
        :aria-invalid="validationStatus === 'error' ? true : undefined"
        :aria-labelledby="label ? `${inputId}-label` : undefined"
        :disabled="disabled"
        :multiple="multiple"
        class="hidden"
        type="file"
        @change="handleChange"
      >
    </label>
    <p
      v-if="$slots.validationMessage || validationMessage"
      :id="validationMessageId"
      :class="validationMessageClass"
    >
      <slot name="validationMessage">
        {{ validationMessage }}
      </slot>
    </p>
    <p
      v-if="$slots.helper"
      :id="helperId"
      :class="helperMessageClass"
    >
      <slot name="helper" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { isArray } from 'lodash-es'
import { computed, toRefs } from 'vue'

import { useFileInputClasses } from './composables/useFileInputClasses'

import type { FormElementSize, ValidationStatus } from '@/types/form'

import { useElementAttributes } from '@/composables/useElementAttributes'
import { useFormFieldIds } from '@/composables/useFormFieldIds'

defineOptions({ inheritAttrs: false })

interface FileInputProps {
  accept?: string
  class?: string | Record<string, boolean>
  disabled?: boolean
  dropzone?: boolean
  label?: string
  labelClass?: string | Record<string, boolean>
  multiple?: boolean
  size?: FormElementSize
  validationMessage?: string
  validationStatus?: ValidationStatus
  wrapperClass?: string | Record<string, boolean>
}

const props = withDefaults(defineProps<FileInputProps>(), {
  accept: '',
  class: '',
  disabled: false,
  dropzone: false,
  label: '',
  labelClass: '',
  multiple: false,
  size: 'md',
  validationMessage: undefined,
  validationStatus: undefined,
  wrapperClass: '',
})

const model = defineModel<File | File[] | null>({ default: null })

const dropZoneText = computed(() => {
  if (isArray(model.value)) {
    return model.value.map(el => el.name).join(', ')
  } else if (model.value instanceof File) {
    return model.value.name || ''
  }
  return ''
})

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (props.multiple) {
    const newFiles = Array.from(target.files ?? [])
    if (Array.isArray(model.value) && model.value.length > 0) {
      model.value = [...model.value, ...newFiles]
    } else {
      model.value = newFiles
    }
  } else {
    model.value = target.files?.[0] ?? null
  }
}

const dropFileHandler = (event: DragEvent) => {
  event.preventDefault()
  if (props.disabled) return
  const arr: File[] = []
  if (event.dataTransfer?.items) {
    Array.from(event.dataTransfer.items).forEach((item: DataTransferItem) => {
      if (item.kind === 'file') {
        const file = item.getAsFile()
        if (file) arr.push(file)
      }
    })
    if (props.multiple) {
      model.value = Array.isArray(model.value) && model.value.length > 0
        ? [...model.value, ...arr]
        : arr
    } else {
      model.value = arr[0] || null
    }
  } else if (event.dataTransfer?.files) {
    const files = Array.from(event.dataTransfer.files)
    if (props.multiple) {
      model.value = Array.isArray(model.value) && model.value.length > 0
        ? [...model.value, ...files]
        : files
    } else {
      model.value = files[0] || null
    }
  }
}

const dragOverHandler = (event: Event) => {
  event.preventDefault()
}

const { elementId: inputId, elementAttributes: inputAttributes } = useElementAttributes()
const { ariaDescribedby, helperId, validationMessageId } = useFormFieldIds(inputId, computed(() => props.validationMessage))

const {
  dropzoneLabelClass,
  dropzoneTextClass,
  dropzoneWrapClass,
  helperMessageClass,
  inputClass,
  labelClass,
  validationMessageClass,
  wrapperClass,
} = useFileInputClasses(toRefs(props))
</script>
