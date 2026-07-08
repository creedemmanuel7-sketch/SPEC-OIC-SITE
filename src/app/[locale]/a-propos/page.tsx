import { About as AboutSection } from "@/components/About";
import { CTA } from "@/components/CTA";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const metadata = {
  title: "À Propos de SPEC OIC-Togo | Histoire et Mission",
  description: "Découvrez l'histoire de la SPEC OIC-Togo, née du programme PARAT et officiellement lancée en octobre 2002.",
};

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <>
      <div className="bg-spec-black py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/team_meeting.png" alt="Equipe" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-spec-black to-transparent" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("heroTitle")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("heroDesc")}
          </p>
        </div>
      </div>
      
      <AboutSection />

      <section className="py-24 bg-gray-50 dark:bg-spec-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-spec-black dark:text-white mb-12">{t("missionVisionTitle")}</h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white dark:bg-spec-black p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5">
                <div className="w-12 h-12 rounded-xl bg-spec-blue/10 flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-spec-black dark:text-white mb-4">{t("missionTitle")}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("missionDesc")}
                </p>
              </div>

              <div className="bg-white dark:bg-spec-black p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5">
                <div className="w-12 h-12 rounded-xl bg-spec-blue/10 flex items-center justify-center mb-6">
                  <span className="text-2xl">🔭</span>
                </div>
                <h3 className="text-2xl font-bold text-spec-black dark:text-white mb-4">{t("visionTitle")}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("visionDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white dark:bg-spec-black">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-spec-black dark:text-white">{t("teamTitle")}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              {t("teamDesc")}
            </p>
            <Link href="/gouvernance" className="inline-flex items-center gap-2 px-8 py-4 bg-spec-blue text-white rounded-xl font-bold shadow-lg shadow-spec-blue/30 hover:bg-spec-blue-dark transition-all">
              {t("teamBtn")}
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
