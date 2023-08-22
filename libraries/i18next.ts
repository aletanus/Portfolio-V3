import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../locales/en.json';
import ptTranslations from '../locales/pt.json';
// import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      pt: {
        translation: ptTranslations,
      },
    },
    lng:"pt",
    // fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
