import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEn from './en/translation.json'
import translationPl from './pl/translation.json'
import translationUk from './uk/translation.json'

const resources = {
  en: {
    translation: translationEn,
  },
  pl: {
    translation: translationPl,
  },
  uk: {
    translation: translationUk,
  },
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'pl',

    debug: true,

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
