"use client";

import { useState } from "react";
import { CheckCircle2, Send, FileText, UserPlus } from "lucide-react";
import { useTranslations } from "next-intl";

export default function OuvrirComptePage() {
  const t = useTranslations("OpenAccount");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xvgzyjbk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (error) {
      alert(t("errorConn"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-28 pb-20 min-h-screen bg-gray-50 dark:bg-spec-black transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spec-blue/10 text-spec-blue dark:text-spec-blue-light text-xs font-bold uppercase tracking-wider mb-4 border border-spec-blue/20">
            {t("badge")}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-spec-black dark:text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Section Informations / Conditions (Option 3) */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-spec-blue/10 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-spec-blue" />
              </div>
              <h2 className="text-2xl font-bold text-spec-black dark:text-white mb-6">{t("condTitle")}</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-spec-blue dark:text-spec-blue-light mb-2">{t("indivTitle")}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{t("indiv1")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{t("indiv2")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{t("indiv3")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{t("indiv4")}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-100 dark:border-white/10 pt-6">
                  <h3 className="font-bold text-spec-blue dark:text-spec-blue-light mb-2">{t("bizTitle")}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{t("biz1")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{t("biz2")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de Contact Amélioré (Option 1) */}
          <div>
            <div className="bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-xl shadow-black/5 dark:shadow-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-spec-blue/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <UserPlus className="w-7 h-7 text-spec-blue" />
                  <h2 className="text-2xl font-bold text-spec-black dark:text-white">{t("formTitle")}</h2>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                  {t("formSubtitle")}
                </p>

                {isSubmitted ? (
                  <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-6 rounded-2xl text-center border border-green-200 dark:border-green-800/30">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("successTitle")}</h3>
                    <p className="text-sm">{t("successDesc")}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="Subject" value="Demande d'Ouverture de Compte" />
                    
                    <div>
                      <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">{t("fieldName")}</label>
                      <input 
                        type="text" 
                        id="nom" 
                        name="Nom" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-spec-black dark:text-white focus:ring-2 focus:ring-spec-blue outline-none transition-all"
                        placeholder="Ex: Kodjo Mensah"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="tel" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">{t("fieldPhone")}</label>
                        <input 
                          type="tel" 
                          id="tel" 
                          name="Telephone" 
                          required
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-spec-black dark:text-white focus:ring-2 focus:ring-spec-blue outline-none transition-all"
                          placeholder="+228..."
                        />
                      </div>
                      <div>
                        <label htmlFor="ville" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">{t("fieldCity")}</label>
                        <input 
                          type="text" 
                          id="ville" 
                          name="Ville" 
                          required
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-spec-black dark:text-white focus:ring-2 focus:ring-spec-blue outline-none transition-all"
                          placeholder="Lomé, Kpalimé..."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="produit" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">{t("fieldProduct")}</label>
                      <select 
                        id="produit" 
                        name="Produit Souhaite"
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-spec-black dark:text-white focus:ring-2 focus:ring-spec-blue outline-none transition-all appearance-none"
                      >
                        <option value="" disabled>{t("selectProduct")}</option>
                        <option value="Epargne Classique">{t("product1")}</option>
                        <option value="Compte Courant Commercial">{t("product2")}</option>
                        <option value="Tontine">{t("product3")}</option>
                        <option value="Epargne Bloquee">{t("product4")}</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-4 bg-spec-blue text-white rounded-xl font-bold shadow-lg shadow-spec-blue/30 hover:bg-spec-blue-dark transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? t("sending") : t("cta")}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
