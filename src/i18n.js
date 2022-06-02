import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pageEn from './translation/pageEn.json';
import pageRu from './translation/pageRu.json';
import alternativePageEn from './translation/alternativePageEn.json';


const resources = {
  en: {
    main: pageEn,
    alt: alternativePageEn,
  },
  ru: {
    main: pageRu
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    }
  })