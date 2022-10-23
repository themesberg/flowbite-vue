const progressColorClasses: ProgressClassMap<ProgressVariant> = {
  default: {
    default: '',
    blue: 'bg-blue-600',
    alternative: '',
    dark: 'bg-gray-600 dark:bg-gray-300',
    light: '',
    green: 'bg-green-600 dark:bg-green-500',
    red: 'bg-red-600 dark:bg-red-500',
    yellow: 'bg-yellow-400',
    purple: 'bg-purple-600 dark:bg-purple-500',
    pink: '',
  },
}

export type UseProgressClassesProps = {
  color: Ref<progressColor>
}

export function useProgressClasses(props: UseProgressClassesProps): { wrapperClasses: Ref<string>} {
  let colorClasses = '';
  colorClasses = progressColorClasses(props.gradient.value as unknown as keyof typeof progressColorClasses.default)
}