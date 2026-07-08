import { Check, ArrowRight, Briefcase, Wallet, Building } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function ProduitsPage() {
  const t = useTranslations("ProductsPage");

  const products = [
    {
      id: "epargne",
      title: t("epargneTitle"),
      icon: <Wallet className="w-8 h-8 text-spec-blue" />,
      description: t("epargneDesc"),
      features: [
        t("epargneF1"),
        t("epargneF2"),
        t("epargneF3"),
        t("epargneF4")
      ],
      link: "/ouvrir-compte"
    },
    {
      id: "credit",
      title: t("creditTitle"),
      icon: <Briefcase className="w-8 h-8 text-spec-blue" />,
      description: t("creditDesc"),
      features: [
        t("creditF1"),
        t("creditF2"),
        t("creditF3"),
        t("creditF4"),
        t("creditF5")
      ],
      link: "/demande-de-pret"
    },
    {
      id: "tontine",
      title: t("tontineTitle"),
      icon: <Building className="w-8 h-8 text-spec-blue" />,
      description: t("tontineDesc"),
      features: [
        t("tontineF1"),
        t("tontineF2"),
        t("tontineF3"),
        t("tontineF4")
      ],
      link: "/contact"
    }
  ];

  return (
    <main className="pt-28 pb-20 min-h-screen bg-gray-50 dark:bg-spec-black transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spec-blue/10 text-spec-blue dark:text-spec-blue-light text-xs font-bold uppercase tracking-wider mb-4 border border-spec-blue/20">
            {t("badge")}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-spec-black dark:text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t("desc")}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg shadow-black/5 dark:shadow-none hover:shadow-xl transition-shadow flex flex-col">
              <div className="p-8 flex-1">
                <div className="w-16 h-16 bg-spec-blue/10 dark:bg-spec-blue/20 rounded-2xl flex items-center justify-center mb-6 border border-spec-blue/20">
                  {product.icon}
                </div>
                <h2 className="text-2xl font-bold text-spec-black dark:text-white mb-4">{product.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {product.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link href={product.link} className="inline-flex items-center gap-2 text-spec-blue dark:text-spec-blue-light font-bold hover:underline group">
                  {t("learnMore")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-24 bg-spec-blue rounded-3xl p-10 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">{t("needAdvice")}</h3>
            <p className="text-blue-100 mb-8 text-lg">
              {t("adviceDesc")}
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/reseau" className="px-8 py-3 bg-white text-spec-blue rounded-xl font-bold shadow-lg hover:bg-gray-10 transition-colors">
                {t("findAgency")}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
