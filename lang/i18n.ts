import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import resources from './index.ts';

const i18n = i18next.createInstance();

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
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
