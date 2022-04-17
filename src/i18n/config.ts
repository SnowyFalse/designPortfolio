import i18n from 'i18next';

import translationEN from './en/translation.json';
import translationDE from './de/translation.json';

export const resources = {
  en: {
    translationEN
  },
  de: {
    translationDE
  },
} as const;

i18n.init({
  react: {
    useSuspense: false
  }
});