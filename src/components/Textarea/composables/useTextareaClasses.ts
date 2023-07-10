import { simplifyTailwindClasses } from '@/utils/simplifyTailwindClasses'
import { computed } from 'vue'

const textareaWrapperClasses = 'w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600'
const textareaDefaultClasses = 'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
const textareaLabelClasses = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
const textareaFooterClasses = 'py-2 px-3 border-gray-200 dark:border-gray-600'

export function useTextareaClasses(custom: boolean) {
  const textareaClasses = computed(() => {
    return simplifyTailwindClasses(textareaDefaultClasses, custom? 'bg-white dark:bg-gray-800 border-none': 'border')
  })

  const labelClasses = computed(() => {
    return textareaLabelClasses
  })

  const wrapperClasses = computed(() => {
    if(custom) return textareaWrapperClasses
    return ''
  })

  const footerClasses = computed(() => {
    return textareaFooterClasses
  })

  return {
    textareaClasses,
    labelClasses,
    wrapperClasses,
    footerClasses,
  }
}
