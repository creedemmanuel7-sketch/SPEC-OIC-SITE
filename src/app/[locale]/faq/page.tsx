import { CTA } from "@/components/CTA";
import { HelpCircle } from "lucide-react";

export const metadata = {
  title: "Foire Aux Questions (FAQ) | SPEC OIC-Togo",
  description: "Trouvez les réponses à vos questions concernant les services, l'adhésion et le fonctionnement de la SPEC OIC-Togo.",
};

const faqs = [
  {
    q: "Quel est l'âge minimum pour ouvrir un compte ?",
    a: "Il n'y a pas d'âge minimum strict pour ouvrir un compte chez nous. Nous proposons des comptes d'épargne adaptés aux jeunes pour encourager l'éducation financière dès le plus jeune âge, sous la supervision d'un tuteur légal pour les mineurs."
  },
  {
    q: "Proposez-vous des services bancaires en ligne ou mobiles ?",
    a: "Actuellement, nos services sont purement physiques dans nos 13 guichets. Cette approche nous permet de maintenir un contact humain et de proximité essentiel avec nos membres ruraux et commerçants. Des réflexions sont en cours pour l'intégration de services digitaux à l'avenir."
  },
  {
    q: "Qui supervise les activités de la SPEC OIC-Togo ?",
    a: "En tant qu'Institution de Microfinance reconnue, nous sommes sous la tutelle du Ministère de l'Économie et des Finances du Togo et de la Banque Centrale des États de l'Afrique de l'Ouest (BCEAO). Cela garantit la sécurité de vos fonds et le respect strict des réglementations financières."
  },
  {
    q: "Qu'est-ce que la transition coopérative de 2027 ?",
    a: "Pour nous conformer à la nouvelle législation togolaise sur les institutions de microfinance, nous préparons notre transformation en coopérative d'ici 2027. Cela renforcera l'implication de nos membres dans la gouvernance de l'institution."
  },
  {
    q: "Comment puis-je demander un crédit agricole ?",
    a: "Pour obtenir un crédit agricole, vous devez d'abord être membre et avoir un compte d'épargne actif à la SPEC. Rapprochez-vous de l'un de nos guichets avec votre pièce d'identité et les détails de votre projet (taille du champ, type de culture) pour qu'un agent de crédit étudie votre dossier."
  }
];

export default function FAQPage() {
  return (
    <>
      <div className="bg-spec-black pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-spec-blue/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <div className="w-16 h-16 bg-spec-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-spec-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Foire Aux Questions</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Retrouvez ici les réponses aux questions les plus fréquentes sur nos services, 
            le fonctionnement de la coopérative et les conditions d'adhésion.
          </p>
        </div>
      </div>
      
      <section className="py-24 bg-white dark:bg-spec-black">
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
