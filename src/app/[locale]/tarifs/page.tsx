import { Download, Info } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Grille Tarifaire | SPEC OIC-Togo",
  description: "Consultez nos conditions tarifaires pour l'ensemble de nos services financiers.",
};

export default function TarifsPage() {
  const t = useTranslations("Tarifs");

  const fees = [
    { service: t("fee1s"), cost: t("fee1c") },
    { service: t("fee2s"), cost: t("fee2c") },
    { service: t("fee3s"), cost: t("fee3c") },
    { service: t("fee4s"), cost: t("fee4c") },
    { service: t("fee5s"), cost: t("fee5c") },
    { service: t("fee6s"), cost: t("fee6c") },
    { service: t("fee7s"), cost: t("fee7c") },
    { service: t("fee8s"), cost: t("fee8c") },
    { service: t("fee9s"), cost: t("fee9c") },
  ];

  return (
    <main className="pt-28 pb-20 min-h-screen bg-gray-50 dark:bg-spec-black transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spec-blue/10 text-spec-blue dark:text-spec-blue-light text-xs font-bold uppercase tracking-wider mb-4 border border-spec-blue/20">
            {t("badge")}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-spec-black dark:text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {t("desc")}
          </p>
          
          {/* Download button */}
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-spec-blue text-white rounded-xl font-bold shadow-lg shadow-spec-blue/30 hover:bg-spec-blue-dark transition-all">
            <Download className="w-5 h-5" />
            {t("downloadBtn")}
          </a>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-white/5 border-b border-gray-200 dark:border-white/10">
                <th className="py-4 px-6 font-bold text-spec-black dark:text-white uppercase tracking-wider text-sm">{t("tableService")}</th>
                <th className="py-4 px-6 font-bold text-spec-black dark:text-white uppercase tracking-wider text-sm">{t("tableCost")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-white/5">
              {fees.map((fee, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300 font-medium">
                    {fee.service}
                  </td>
                  <td className="py-4 px-6 text-spec-blue dark:text-spec-blue-light font-bold">
                    {fee.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="mt-8 flex gap-3 p-4 bg-blue-50 dark:bg-spec-blue/10 border border-blue-100 dark:border-spec-blue/20 rounded-xl">
          <Info className="w-6 h-6 text-spec-blue shrink-0" />
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {t("disclaimer")}
          </p>
        </div>

      </div>
    </main>
  );
}
