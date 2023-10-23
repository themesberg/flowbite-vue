// function to simplify tailwind classes, can be upgraded with RegExp and by minimizing of using array methods
// example:
// simplifyClasses('dark:background-red-600 background-red text-black', 'dark:background-blue')

export type TailwindClassMatcherMap = Record<string, (c: string) => string>

const classTypeMatchers: TailwindClassMatcherMap = {
  border: (_class: string): string => {
    return _class.substring(0, _class.lastIndexOf('-')) // for splitting border-b-2 and border-red
  },
}

const getTypeFromClass = (_class: string, matchers: TailwindClassMatcherMap = classTypeMatchers) => {
  const classesToMatch = Object.keys(matchers)
  const matchClass = classesToMatch.find(_matchClass => _class.includes(_matchClass)) // TODO: maybe need to filter instead of find
  if (!matchClass) return _class.substring(0, _class.indexOf('-'))

  return matchers[matchClass as keyof typeof matchers](_class)
}

export function simplifyTailwindClasses (...classes: (string | string[])[]): string {
  return classes.filter(_ => _).reduce((acc: { types: string[], classes: string[] }, value: string | string[]) => {
    const currentClasses = Array.isArray(value)
      ? Array.from(value).map(_ => _.split(' ')).flat() // to support args like ['text-white background-red', 'flex'] etc.
      : value.split(' ')
    const currentTypes = currentClasses.map(_class => getTypeFromClass(_class))

    const typesToAdd = currentTypes.filter(_ => !acc.types.includes(_))
    const typesToReplace = currentTypes.filter(_ => acc.types.includes(_))
    const newTypes = [...typesToReplace, ...typesToAdd]

    const types = [...new Set([...acc.types, ...newTypes])]
    const classes = types.map(type => {
      if (newTypes.includes(type)) {
        const classIndex = currentTypes.indexOf(type)
        if (classIndex >= 0) { return currentClasses[classIndex] || '' }
      }
      const classIndex = acc.types.indexOf(type)
      if (classIndex >= 0) { return acc.classes[classIndex] || '' }
      return ''
    }).filter(_ => !!_)

    return {
      types,
      classes,
    }
  }, { types: [], classes: [] }).classes.join(' ')
}

// simplifyClasses('dark:background-red-600 background-red text-400-black', 'dark:background-blue', 'text-600-white', 'dark:background-red-600')
