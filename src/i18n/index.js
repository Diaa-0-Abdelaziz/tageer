import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ar from './locales/ar.json';

export const LANGUAGES = {
  en: { label: 'English', flag: '🇬🇧', dir: 'ltr' },
  ar: { label: 'العربية', flag: '🇦🇪', dir: 'rtl' },
};
const STORAGE_KEY = 'lang';

const readSaved = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return LANGUAGES[saved] ? saved : null;
  } catch (e) {
    return null;
  }
};

const initial = readSaved() || 'en';

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, ar: { translation: ar } },
  lng: initial,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

const applyDocumentLanguage = (lng) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = LANGUAGES[lng].dir;
};
applyDocumentLanguage(initial);

// Bootstrap ships separate LTR/RTL builds (copied to /public/bootstrap by
// scripts/copy-bootstrap.js). The new sheet is added before the old one is removed so
// the page never renders unstyled.
const BOOTSTRAP_ID = 'bootstrap-css';
export const loadBootstrap = (dir) =>
  new Promise((resolve) => {
    const file = dir === 'rtl' ? 'bootstrap.rtl.min.css' : 'bootstrap.min.css';
    const href = `${process.env.PUBLIC_URL || ''}/bootstrap/${file}`;
    const current = document.getElementById(BOOTSTRAP_ID);
    if (current && current.getAttribute('href') === href) return resolve();
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = link.onerror = () => {
      if (current) current.remove();
      link.id = BOOTSTRAP_ID;
      resolve();
    };
    document.head.appendChild(link);
  });

export const changeLanguage = async (lng) => {
  if (!LANGUAGES[lng] || lng === i18n.language) return;
  try { localStorage.setItem(STORAGE_KEY, lng); } catch (e) { /* storage unavailable */ }
  await loadBootstrap(LANGUAGES[lng].dir);
  applyDocumentLanguage(lng);
  await i18n.changeLanguage(lng);
};

export default i18n;
