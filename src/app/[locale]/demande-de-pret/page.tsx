"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function DemandePretPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const t = useTranslations("LoanRequest");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xvgzyjbk", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 8000);
      } else {
        alert(t("errorSubmit"));
      }
    } catch (error) {
      alert(t("errorConn"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-20 bg-gray-50 dark:bg-spec-black pb-24">
      {/* Header Section */}
      <section className="bg-spec-black text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero_agriculture.png')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{t("heroTitle")}</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            {t("heroDesc")}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 -mt-8 relative z-20">
        <div className="max-w-3xl mx-auto bg-white dark:bg-spec-dark rounded-3xl p-8 md:p-12 shadow-2xl shadow-spec-blue/5 border border-gray-100 dark:border-white/5 relative overflow-hidden">
          
          {isSuccess ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-spec-dark z-30 p-8 text-center animate-in fade-in duration-300">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-spec-black dark:text-white mb-4">{t("successTitle")}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                {t("successDesc")}
              </p>
              <Link href="/" className="px-6 py-3 bg-spec-blue text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-spec-blue-dark transition-colors">
                {t("backHome")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            {/* Section 1: Infos Personnelles */}
            <div>
              <h3 className="text-lg font-bold text-spec-blue mb-4 border-b border-gray-100 dark:border-white/10 pb-2">{t("section1")}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("nameLabel")}</label>
                  <input required type="text" name="nom" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-black/50 focus:ring-2 focus:ring-spec-blue outline-none dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("phoneLabel")}</label>
                  <input required type="tel" name="telephone" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-black/50 focus:ring-2 focus:ring-spec-blue outline-none dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("cityLabel")}</label>
                  <input required type="text" name="ville" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-black/50 focus:ring-2 focus:ring-spec-blue outline-none dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("agencyLabel")}</label>
                  <select required name="agence" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-black/50 focus:ring-2 focus:ring-spec-blue outline-none dark:text-white">
                    <option value="">{t("agencyPlaceholder")}</option>
                    <option value="Notsè">Notsè (Siège)</option>
                    <option value="Atakpamé">Atakpamé</option>
                    <option value="Kpékplémé">Kpékplémé</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Détails du Crédit */}
            <div>
              <h3 className="text-lg font-bold text-spec-blue mb-4 border-b border-gray-100 dark:border-white/10 pb-2">{t("section2")}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("amountLabel")}</label>
                  <input required type="number" name="montant" min="30000" step="5000" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-black/50 focus:ring-2 focus:ring-spec-blue outline-none dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("durationLabel")}</label>
                  <select required name="duree" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-black/50 focus:ring-2 focus:ring-spec-blue outline-none dark:text-white">
                     <option value="6">{t("duration6m")}</option>
                     <option value="12">{t("duration12m")}</option>
                     <option value="18">{t("duration18m")}</option>
                     <option value="24">{t("duration24m")}</option>
                     <option value="36">{t("duration36m")}</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("creditTypeLabel")}</label>
                  <select required name="type_credit" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-black/50 focus:ring-2 focus:ring-spec-blue outline-none dark:text-white">
                    <option value="">{t("creditTypePlaceholder")}</option>
                    <option value="Agricole">{t("creditType1")}</option>
                    <option value="Commercial">{t("creditType2")}</option>
                    <option value="Tontine">{t("creditType3")}</option>
                    <option value="Artisanat">{t("creditType4")}</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("descriptionLabel")}</label>
                  <textarea required name="description" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-black/50 focus:ring-2 focus:ring-spec-blue outline-none dark:text-white resize-none" placeholder={t("descriptionPlaceholder")}></textarea>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-spec-blue/10 p-4 rounded-xl flex gap-3 text-sm text-spec-blue dark:text-blue-300">
              <span className="font-bold">{t("noteLabel")}</span>
              <p>{t("noteText")}</p>
            </div>

            <button disabled={isSubmitting} type="submit" className="w-full py-4 bg-spec-blue text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-xl shadow-spec-blue/30 disabled:opacity-70 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>{t("submitting")}</>
              ) : (
                <>{t("submitBtn")} <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
