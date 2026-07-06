import { About as AboutSection } from "@/components/About";
import { CTA } from "@/components/CTA";

export const metadata = {
  title: "À Propos de SPEC OIC-Togo | Histoire et Mission",
  description: "Découvrez l'histoire de la SPEC OIC-Togo, née du programme PARAT et officiellement lancée en octobre 2002.",
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-spec-black py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/team_meeting.png" alt="Equipe" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-spec-black to-transparent" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Notre Institution</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Plus de deux décennies d'engagement pour l'inclusion financière au Togo. De notre héritage avec l'OIC jusqu'à notre transition en coopérative prévue pour 2027.
          </p>
        </div>
      </div>
      
      <AboutSection />

      <section className="py-24 bg-gray-50 dark:bg-spec-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-spec-black dark:text-white mb-12">Notre Mission & Notre Vision</h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white dark:bg-spec-black p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5">
                <div className="w-12 h-12 rounded-xl bg-spec-blue/10 flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-spec-black dark:text-white mb-4">La Mission</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Offrir des services financiers de proximité, accessibles et adaptés aux populations exclues du système bancaire classique, en particulier les agriculteurs et les femmes entrepreneures, afin de favoriser la création de richesses et la réduction de la pauvreté.
                </p>
              </div>

              <div className="bg-white dark:bg-spec-black p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5">
                <div className="w-12 h-12 rounded-xl bg-spec-blue/10 flex items-center justify-center mb-6">
                  <span className="text-2xl">🔭</span>
                </div>
                <h3 className="text-2xl font-bold text-spec-black dark:text-white mb-4">La Vision</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Devenir l'institution de microfinance coopérative de référence au Togo d'ici 2027, reconnue pour son innovation, sa transparence et son impact durable sur le développement socio-économique de ses membres.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
