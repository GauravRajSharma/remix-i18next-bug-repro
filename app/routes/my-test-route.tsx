import { useTranslation } from "react-i18next";
import { json, Link, LoaderFunction, useLoaderData } from "remix";
import { i18n } from "~/i18n.server";

export const loader: LoaderFunction = async ({ request }) => {
  return json({
    date: new Date(),
    i18n: await i18n.getTranslations(request, "common"),
  });
};

export default function MyTestRoute() {
  const { date } = useLoaderData<{ date: string }>();
  const { t } = useTranslation("common");
  return (
    <div>
      <div>{date}</div>
      <div>{t("Test")}</div>

      <Link to="/my-test-route?lng=es">Reproduce bug (es)</Link>
      <Link to="/my-test-route">Reproduce bug (en)</Link>
    </div>
  );
}
