import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { TRANSLATIONS_EN } from "./en/translations";
import { TRANSLATIONS_PL } from "./pl/translations";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: TRANSLATIONS_EN,
    },
    pl: {
      translation: TRANSLATIONS_PL,
    },
  },
});

export default i18n;
