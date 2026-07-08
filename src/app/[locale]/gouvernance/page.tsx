import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Gouvernance | SPEC OIC-Togo",
  description: "Découvrez l'équipe dirigeante de la SPEC OIC-Togo, engagée pour l'inclusion financière.",
};

export default function GouvernancePage() {
  const t = useTranslations("Gouvernance");

  const team = [
    {
      name: "M. Kokou A.",
      role: t("member1Role"),
      image: "/team/dir_marketing.png",
      bio: t("member1Bio")
    },
    {
      name: "Mme. Afiwa E.",
      role: t("member2Role"),
      image: "/team/dir_tontine.png",
      bio: t("member2Bio")
    },
    {
      name: "M. Kodjo M.",
      role: t("member3Role"),
      image: "/team/dir_epargne.png",
      bio: t("member3Bio")
    },
    {
      name: "M. Yao S.",
      role: t("member4Role"),
      image: "/team/dir_operations.png",
      bio: t("member4Bio")
    }
  ];

  return (
    <main className="pt-28 pb-20 min-h-screen bg-gray-50 dark:bg-spec-black transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* En-tête de la page */}
        <div className="max-w-3xl mb-16">
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

        {/* Mot du DG */}
        <section className="bg-white dark:bg-white/[0.02] rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 dark:shadow-black/20 border border-gray-100 dark:border-white/5 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-spec-blue/5 dark:bg-spec-blue/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl mb-4 border-4 border-white dark:border-spec-black">
                <Image 
                  src="/team/dg.png" 
                  alt="Directeur Général SPEC OIC-Togo" 
                  fill 
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-spec-black dark:text-white">Dr. Emmanuel C.</h3>
              <p className="text-spec-blue font-medium">{t("dgTitle")}</p>
            </div>
            
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-spec-black dark:text-white mb-6">{t("dgWord")}</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed italic border-l-4 border-spec-blue pl-6">
                <p>{t("dgQuote1")}</p>
                <p>{t("dgQuote2")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* L'Équipe de Direction */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-spec-black dark:text-white mb-4">{t("committeeTitle")}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("committeeDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-black/5 dark:shadow-none group">
                <div className="relative h-64 w-full bg-gray-100 dark:bg-white/5">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-spec-black dark:text-white mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-spec-blue mb-3 uppercase tracking-wider">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
