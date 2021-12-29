import { json, LoaderFunction, useLoaderData } from "remix";
import { i18n } from "~/i18n.server";
import { useTranslation } from "react-i18next";

export const loader: LoaderFunction = async ({ request }) => json({
  date: new Date(),
  i18n: await i18n.getTranslations(request, "common"),
});

export default function MyTestRoute() {
  const { date } = useLoaderData<{ date: string }>();
  const { t } = useTranslation("common");
  return (
    <div>
      <div>{date}</div>
      <div>{t("Test")}</div>
    </div>
  );
}
