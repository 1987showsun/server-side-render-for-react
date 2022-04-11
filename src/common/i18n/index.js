export const defaultLang = 'en';

export const supportedLangs = {
  en: 'English',
  ar: 'Arabic (عربي)',
  tw: '台灣',
};

export function determineUserLang(acceptedLangs, path = null) {
  // check url for /en/foo where en is a supported language code
  if (path !== null) {
    const urlLang = path.trim().split('/')[1];
    const matchingUrlLang = findFirstSupported([stripCountry(urlLang)]);
    if (matchingUrlLang) {
      return matchingUrlLang;
    }
    return defaultLang;
  }

  // check browser-set accepted langs
  const matchingAcceptedLang = findFirstSupported(
    acceptedLangs.map(stripCountry),
  );

  return matchingAcceptedLang || defaultLang;
}

export function dir(lang) {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

function findFirstSupported(langs) {
  const supported = Object.keys(supportedLangs);
  return langs.find((code) => supported.includes(code));
}

function stripCountry(lang) {
  return lang
    .trim()
    .replace('_', '-')
    .split('-')[0];
}
