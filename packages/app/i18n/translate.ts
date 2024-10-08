import i18next from 'i18next'

import enj from './en.json'

export function translate(key: string, options?: object) {
  if (!i18next.isInitialized) {
    i18next.init({
      lng: 'en', // if you're using a language detector, do not define the lng option
      debug: true,
      resources: {
        en: {
          translation: enj,
        },
      },
    })
  }
  return key ? i18next.t(key) : ''
}
