import { computed } from 'vue'

import { useMergeClasses } from '@/composables/useMergeClasses'

const fileInpDefaultClasses = 'block bg-gray-50 dark:bg-gray-700 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none w-full text-gray-900 dark:text-gray-400 text-sm cursor-pointer dark:placeholder-gray-400'
const fileInpLabelClasses = 'block mb-2 font-medium text-gray-900 dark:text-white text-sm'
const fileInpDropzoneClasses = 'flex flex-col justify-center items-center bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 border-2 border-gray-300 dark:border-gray-600 dark:hover:border-gray-500 border-dashed rounded-lg w-full h-64 cursor-pointer'
const fileDropzoneWrapClasses = 'flex flex-col justify-center items-center pt-5 pb-6'
const fileDropzoneDefaultTextClasses = '-mb-2! text-gray-500 dark:text-gray-400 text-sm'

export function useFileInputClasses (size: string) {
  const fileInpClasses = computed(() => useMergeClasses([
    fileInpDefaultClasses,
    'text-' + size,
  ]))

  const labelClasses = computed(() => fileInpLabelClasses)
  const dropzoneLabelClasses = computed(() => fileInpDropzoneClasses)
  const dropzoneWrapClasses = computed(() => fileDropzoneWrapClasses)
  const dropzoneTextClasses = computed(() => fileDropzoneDefaultTextClasses)

  return {
    fileInpClasses,
    labelClasses,
    dropzoneLabelClasses,
    dropzoneWrapClasses,
    dropzoneTextClasses,
  }
}
