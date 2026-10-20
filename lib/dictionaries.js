export const locales = ['en', 'bn'];
export const defaultLocale = 'en';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  bn: () => import('@/dictionaries/bn.json').then((module) => module.default),
};

export const hasLocale = (locale) => locale in dictionaries;

export const getDictionary = async (locale) => {
  const selectedLocale = hasLocale(locale) ? locale : defaultLocale;
  return dictionaries[selectedLocale]();
};
