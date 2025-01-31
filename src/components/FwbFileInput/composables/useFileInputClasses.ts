import { computed } from 'vue'

import { simplifyTailwindClasses } from '@/utils/simplifyTailwindClasses'

const fileInpDefaultClasses = 'block w-full text-sm text-gray-900 border-[1px] border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
const fileInpLabelClasses = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
const fileInpDropzoneClasses = 'flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
const fileDropzoneWrapClasses = 'flex flex-col items-center justify-center pt-5 pb-6'
const fileDropzoneDefaultTextClasses = '!-mb-2 text-sm text-gray-500 dark:text-gray-400'

export function useFileInputClasses (size: string) {
  const fileInpClasses = computed(() => simplifyTailwindClasses(
    fileInpDefaultClasses,
    'text-' + size,
  ))

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
