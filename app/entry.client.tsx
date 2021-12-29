import i18next from "i18next";
import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";
import { RemixI18NextProvider } from "remix-i18next";
import { initI18n } from "~/services/i18n";

initI18n().then(() =>
  hydrate(
    <RemixI18NextProvider i18n={i18next}>
      <RemixBrowser />
    </RemixI18NextProvider>,
    document
  ));
