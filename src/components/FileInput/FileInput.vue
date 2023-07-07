<template>
  <div>  
    <label :class="labelClasses" for="file_input">{{ label }}</label>
    <input :class="fileInpClasses" @change="handleChange" id="file_input" type="file">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFileInputClasses } from '@/components/FileInput/composables/useFileInputClasses'

interface FileInputProps {
  modelValue?: string;
  label?: string;
  size?: string;
}
const props = withDefaults(defineProps<FileInputProps>(), {
  value: '',
  label: '',
  size: 'sm',
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

const { fileInpClasses, labelClasses } = useFileInputClasses(props.size)
</script>
