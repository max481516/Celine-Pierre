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

// Set default language to French if not found in localStorage
const defaultLanguage = localStorage.getItem("lang") || "fr";

i18n
  .use(HttpApi) // load translation using http
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    supportedLngs: ["en", "fr", "ru"],
    lng: defaultLanguage,
    fallbackLng: "en",
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
