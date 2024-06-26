import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './index.ts';

const i18n = i18next.createInstance();

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  debug: true,
  backend: {
    loadPath: '/lang/{{lng}}.json'
  },
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
