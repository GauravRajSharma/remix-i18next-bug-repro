import i18next from "i18next";
import { initReactI18next } from "react-i18next";

export const FALLBACK_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = [FALLBACK_LANGUAGE, "no", "es", "de", "fr"];

export async function initI18n() {
  await i18next
    .use(initReactI18next)
    .init({
      supportedLngs: SUPPORTED_LANGUAGES,
      defaultNS: "common",
      fallbackLng: FALLBACK_LANGUAGE,
      react: { useSuspense: false },
    })
  return i18next;
}