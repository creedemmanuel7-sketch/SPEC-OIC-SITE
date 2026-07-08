"use client";

import { useState } from "react";
import { Briefcase, Send, MapPin, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CarrieresPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = useTranslations("Careers");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xvgzyjbk", { // Reusing existing formspree
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
      alert("Erreur de connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const jobs = [
    {
      title: t("job1Title"),
      location: t("job1Location"),
      type: t("job1Type"),
      desc: t("job1Desc")
    },
    {
      title: t("job2Title"),
      location: t("job2Location"),
      type: t("job2Type"),
      desc: t("job2Desc")
    },
    {
      title: t("job3Title"),
      location: t("job3Location"),
      type: t("job3Type"),
      desc: t("job3Desc")
    }
  ];

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
            {t("desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Offres */}
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-2xl font-bold text-spec-black dark:text-white mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-spec-blue" />
              {t("currentOffers")}
            </h2>
            
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-spec-black dark:text-white mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {job.desc}
                </p>
                <a href="#postuler" className="text-spec-blue dark:text-spec-blue-light font-bold text-sm hover:underline">
                  {t("apply")} &rarr;
                </a>
              </div>
            ))}
          </div>

          {/* Formulaire Candidature Spontanée */}
          <div className="lg:col-span-2" id="postuler">
            <div className="bg-white dark:bg-white/[0.02] rounded-3xl p-8 border border-gray-100 dark:border-white/5 shadow-xl shadow-black/5 dark:shadow-none sticky top-32">
              <h2 className="text-2xl font-bold text-spec-black dark:text-white mb-2">{t("application")}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                {t("applicationDesc")}
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-6 rounded-2xl text-center border border-green-200 dark:border-green-800/30">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("successTitle")}</h3>
                  <p className="text-sm">{t("successDesc")}</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-spec-blue font-semibold hover:underline text-sm"
                  >
                    {t("anotherApplication")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="Subject" value="Candidature Emploi SPEC OIC" />
                  
                  <div>
                    <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">{t("name")}</label>
                    <input 
                      type="text" 
                      id="nom" 
                      name="Nom" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-spec-black dark:text-white focus:ring-2 focus:ring-spec-blue outline-none transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="Email" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-spec-black dark:text-white focus:ring-2 focus:ring-spec-blue outline-none transition-all"
                      placeholder="jean@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="poste" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">{t("targetJob")}</label>
                    <input 
                      type="text" 
                      id="poste" 
                      name="Poste Vise" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-spec-black dark:text-white focus:ring-2 focus:ring-spec-blue outline-none transition-all"
                      placeholder={t("targetJobPlaceholder")}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">{t("cvLink")}</label>
                    <input 
                      type="url" 
                      id="cv" 
                      name="Lien CV" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-spec-black dark:text-white focus:ring-2 focus:ring-spec-blue outline-none transition-all text-sm"
                      placeholder="https://..."
                    />
                    <p className="text-xs text-gray-500 mt-1">{t("cvHelp")}</p>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-spec-blue text-white rounded-xl font-bold shadow-lg shadow-spec-blue/30 hover:bg-spec-blue-dark transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? t("submitting") : t("submitBtn")}
                  </button>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
