import { Services } from "@/components/Services";
import { CTA } from "@/components/CTA";

export const metadata = {
  title: "Nos Services | SPEC OIC-Togo",
  description: "Découvrez nos solutions de microfinance : épargne, crédit agricole, transfert d'argent (Ria, Wari) pour vous accompagner dans votre développement.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-spec-blue/5 dark:bg-spec-blue/10 py-20 border-b border-gray-100 dark:border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-spec-black dark:text-white mb-6">Nos Services Financiers</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Des solutions adaptées aux réalités du Togo rural et urbain. Épargne, crédits sur-mesure et transferts d'argent internationaux.
          </p>
        </div>
      </div>
      
      <Services />

      <section className="py-24 bg-white dark:bg-spec-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center bg-gray-50 dark:bg-spec-dark rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-white/5">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-spec-black dark:text-white mb-6">Transfert d'Argent</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Besoin d'envoyer ou de recevoir de l'argent depuis l'étranger ou partout au Togo ? Nos guichets sont équipés pour traiter vos opérations rapidement et en toute sécurité avec nos partenaires.
              </p>
              <ul className="space-y-3 font-semibold text-spec-black dark:text-white mb-8">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-spec-blue"></span> Ria Money Transfer</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-spec-blue"></span> Wari</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-spec-blue"></span> Dépôts et Retraits bancaires</li>
              </ul>
            </div>
            <div className="flex-1 w-full relative min-h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <img src="/teller_window.png" alt="Guichet de transfert d'argent SPEC OIC" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
