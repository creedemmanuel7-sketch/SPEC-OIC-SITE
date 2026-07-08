import { PiggyBank, HandCoins, ShieldCheck, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";

export function Services() {
  const t = useTranslations("Services");

  return (
    <section id="services" className="py-24 bg-background dark:bg-spec-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-spec-black dark:text-white">
            {t("title")} <br className="hidden sm:block" /> {t("subtitle")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1: Épargne */}
          <div className="bg-white dark:bg-spec-dark rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-xl transition-all group border border-gray-100 dark:border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <PiggyBank className="w-24 h-24 text-spec-blue" />
            </div>
            <div className="w-14 h-14 bg-blue-50 dark:bg-spec-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <PiggyBank className="w-7 h-7 text-spec-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-spec-black dark:text-white">{t("savings")}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{t("savingsDesc")}</p>
            <ul className="space-y-3 mb-6 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-spec-blue"></div>{t("savingsItem1")}</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-spec-blue"></div>{t("savingsItem2")}</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-spec-blue"></div>{t("savingsItem3")}</li>
            </ul>
          </div>

          {/* Card 2: Crédit */}
          <div className="bg-white dark:bg-spec-dark rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-xl transition-all group border border-gray-100 dark:border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <HandCoins className="w-24 h-24 text-spec-blue" />
            </div>
            <div className="w-14 h-14 bg-blue-50 dark:bg-spec-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <HandCoins className="w-7 h-7 text-spec-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-spec-black dark:text-white">{t("loans")}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{t("loansDesc")}</p>
            <ul className="space-y-3 mb-6 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-spec-blue"></div>{t("loansItem1")}</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-spec-blue"></div>{t("loansItem2")}</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-spec-blue"></div>{t("loansItem3")}</li>
            </ul>
          </div>

          {/* Card 3: Transferts */}
          <div className="bg-white dark:bg-spec-dark rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-xl transition-all group border border-gray-100 dark:border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck className="w-24 h-24 text-spec-blue" />
            </div>
            <div className="w-14 h-14 bg-blue-50 dark:bg-spec-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-7 h-7 text-spec-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-spec-black dark:text-white">{t("transfers")}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{t("transfersDesc")}</p>
            <ul className="space-y-3 mb-6 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-spec-blue"></div>{t("transfersItem1")}</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-spec-blue"></div>{t("transfersItem2")}</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-spec-blue"></div>{t("transfersItem3")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
