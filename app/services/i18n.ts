import i18next from "i18next";
import { initReactI18next } from "react-i18next";

export const FALLBACK_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = [FALLBACK_LANGUAGE, "no", "es", "de", "fr"];

export function initI18n() {
  return i18next
    .use(initReactI18next)
    .init({
      supportedLngs: SUPPORTED_LANGUAGES,
      defaultNS: "common",
      fallbackLng: FALLBACK_LANGUAGE,
      react: { useSuspense: false },
    })
}