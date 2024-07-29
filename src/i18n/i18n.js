import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationsInEng from "../locales/en/translation.json";
import translationsInFrench from "../locales/fr/translation.json";
import translationsInRussian from "../locales/ru/translation.json";

// the translations
const resources = {
  fr: {
    translation: translationsInFrench,
  },
  en: {
    translation: translationsInEng,
  },
  ru: {
    translation: translationsInRussian,
  },
};

i18n
  .use(HttpApi) // load translation using http
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    resources,
    debug: true,
    supportedLngs: ["en", "fr", "ru"],
    fallbackLng: "en",
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
      lookupLocalStorage: "lang",
      lookupCookie: "i18next",
    },
  });

export default i18n;
