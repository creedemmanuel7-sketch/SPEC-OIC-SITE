import { Calculator } from "@/components/Calculator";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Simulateur de Crédit et d'Épargne - SPEC OIC-Togo",
  description: "Estimez vos remboursements de crédit ou calculez vos revenus d'épargne avec le simulateur en ligne de la SPEC OIC-Togo.",
};

export default function SimulateurPage() {
  const t = useTranslations("Simulateur");

  return (
    <main className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-spec-black text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-spec-blue/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              {t("title")} <br/>
              <span className="text-spec-blue">{t("titleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t("desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <Calculator />
    </main>
  );
}
