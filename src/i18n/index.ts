import english from './en.json'
import spanish from './es.json'
import deutsch from './de.json'

const LANGUAGES = {
          ENGLISH: 'en',
          SPANISH: 'es',
          DEUTSCH: 'de'
}

export const getI18N = ({
          currentLocale = 'es'
}: {
          currentLocale: string | undefined
}) => {
          if (currentLocale === LANGUAGES.ENGLISH) return english
          if (currentLocale === LANGUAGES.SPANISH) return spanish
          if (currentLocale === LANGUAGES.DEUTSCH) return deutsch
          return spanish
}