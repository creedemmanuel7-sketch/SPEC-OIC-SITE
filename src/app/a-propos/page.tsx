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
          <img src="/team_meeting.png" alt="Equipe" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-spec-black to-transparent" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Notre Institution</h1>
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

      {/* Team Section */}
      <section className="py-24 bg-white dark:bg-spec-black">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-spec-black dark:text-white">Notre Équipe Dirigeante</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Une gouvernance solide et expérimentée, au service de l'inclusion financière.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Jean Koffi", role: "Directeur Général", init: "JK" },
              { name: "Afiwa Mensah", role: "Directrice des Opérations", init: "AM" },
              { name: "Kodjo Agbéko", role: "Responsable Crédit", init: "KA" },
              { name: "Yawa Kpohou", role: "Responsable Financier", init: "YK" }
            ].map((member, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-spec-dark rounded-2xl p-6 text-center border border-gray-100 dark:border-white/5 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-24 h-24 rounded-full bg-spec-blue/10 flex items-center justify-center mx-auto mb-4 border-4 border-white dark:border-spec-black shadow-lg">
                  <span className="text-2xl font-bold text-spec-blue">{member.init}</span>
                </div>
                <h3 className="text-lg font-bold text-spec-black dark:text-white">{member.name}</h3>
                <p className="text-sm text-spec-blue font-medium mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
