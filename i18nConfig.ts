import { Config } from "next-i18n-router/dist/types";

const i18nConfig: Config = {
  locales: ["uk", "en", "fr"],
  defaultLocale: "uk",
  // localeDetector: (request, config) => {
  //   return "uk";
  // },
  prefixDefault: false,
  localeCookie: "NEXT_LOCALE",
};

export default i18nConfig;
