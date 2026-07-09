import { useTranslations } from "next-intl";

import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "Legal" });
  return {
    title: `${t("title")} | SPEC OIC-Togo`,
    description: t.raw("section1_text").replace(/<[^>]+>/g, "").substring(0, 150) + "...",
  };
}

export default function MentionsLegalesPage() {
  const t = useTranslations("Legal");

  return (
    <div className="bg-background dark:bg-spec-black min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-spec-black dark:text-white mb-10">{t("title")}</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-spec-black dark:text-white mt-8 mb-4">{t("section1_title")}</h2>
          <p dangerouslySetInnerHTML={{ __html: t.raw("section1_text") }}></p>

          <h2 className="text-2xl font-bold text-spec-black dark:text-white mt-8 mb-4">{t("section2_title")}</h2>
          <p dangerouslySetInnerHTML={{ __html: t.raw("section2_text") }}></p>

          <h2 className="text-2xl font-bold text-spec-black dark:text-white mt-8 mb-4">{t("section3_title")}</h2>
          <p>{t("section3_text1")}</p>
          <p>{t("section3_text2")}</p>

          <h2 className="text-2xl font-bold text-spec-black dark:text-white mt-8 mb-4">{t("section4_title")}</h2>
          <p>{t("section4_text")}</p>

          <h2 className="text-2xl font-bold text-spec-black dark:text-white mt-8 mb-4">{t("section5_title")}</h2>
          <p>{t("section5_text")}</p>
        </div>
      </div>
    </div>
  );
}
