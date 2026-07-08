import { CTA } from "@/components/CTA";
import { HelpCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Foire Aux Questions (FAQ) | SPEC OIC-Togo",
  description: "Trouvez les réponses à vos questions concernant les services, l'adhésion et le fonctionnement de la SPEC OIC-Togo.",
};

export default function FAQPage() {
  const t = useTranslations("FAQ");

  const faqs = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
    { q: t("q5"), a: t("a5") },
  ];

  return (
    <>
      <div className="bg-spec-black pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-spec-blue/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <div className="w-16 h-16 bg-spec-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-spec-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            {t("desc")}
          </p>
        </div>
      </div>
      
      <section className="py-24 bg-background dark:bg-spec-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 dark:bg-spec-dark rounded-2xl p-8 border border-gray-100 dark:border-white/5 shadow-sm">
                <h3 className="text-xl font-bold text-spec-black dark:text-white flex items-start gap-4 mb-4">
                  <HelpCircle className="w-6 h-6 text-spec-blue shrink-0 mt-1" />
                  {faq.q}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 pl-10 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
