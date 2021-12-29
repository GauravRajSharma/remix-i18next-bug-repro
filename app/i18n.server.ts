import { Backend, RemixI18Next } from "remix-i18next";
import { FALLBACK_LANGUAGE, SUPPORTED_LANGUAGES } from "~/services/i18n";

class InMemoryBackend implements Backend {
  constructor(
    private readonly data: {
      [locale: string]: {
        [namespace: string]: {
          [key: string]: string;
        };
      };
    }
  ) {}

  async getTranslations(namespace: string, locale: string) {
    return this.data[locale][namespace];
  }
}

function createLanguage(lng: string) {
  return {
    common: {
      Test: `Test, but in ${lng}`
    }
  }
}

const backend = new InMemoryBackend({
  en: {
    common: {},
  },
  no: createLanguage("norwegian"),
  es: createLanguage("spanish"),
  de: createLanguage("german"),
  fr: createLanguage("french")
});

export const i18n = new RemixI18Next(backend, {
  fallbackLng: FALLBACK_LANGUAGE,
  supportedLanguages: SUPPORTED_LANGUAGES,
});
