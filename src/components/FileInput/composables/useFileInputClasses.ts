import { simplifyTailwindClasses } from '@/utils/simplifyTailwindClasses'
import { computed } from 'vue'

const fileInpDefaultClasses = 'block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
const fileInpLabelClasses = 'block mb-2 !text-sm font-medium text-gray-900 dark:text-white'

export function useFileInputClasses(size: string) {
	const fileInpClasses = computed(() => {
		return simplifyTailwindClasses(fileInpDefaultClasses, 'text-' + size)
	})

	const labelClasses = computed(() => {
		return fileInpLabelClasses
	})

	return {
		fileInpClasses,
		labelClasses,
	}
}
