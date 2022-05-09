import i18n from "i18next";
import en from "./locale/en";
import ar from "./locale/ar";

import { initReactI18next } from "react-i18next";

const resources = {
  ...en,
  ...ar,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
