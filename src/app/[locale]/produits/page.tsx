import { Check, ArrowRight, Briefcase, Wallet, Building } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Nos Produits | SPEC OIC-Togo",
  description: "Découvrez l'ensemble de nos produits financiers : Épargne, Crédit et Tontine.",
};

const products = [
  {
    id: "epargne",
    title: "Épargne",
    icon: <Wallet className="w-8 h-8 text-spec-blue" />,
    description: "Des solutions d'épargne sécurisées et flexibles pour constituer un capital à votre rythme et préparer l'avenir sereinement.",
    features: [
      "Ouverture de compte rapide (dès 5 000 FCFA)",
      "Rémunération attractive selon le type d'épargne",
      "Épargne bloquée ou disponible à tout moment",
      "Pas de frais de tenue de compte mensuels"
    ],
    link: "/ouvrir-compte"
  },
  {
    id: "credit",
    title: "Crédit",
    icon: <Briefcase className="w-8 h-8 text-spec-blue" />,
    description: "Des financements adaptés à vos projets, que vous soyez agriculteur, commerçant, ou artisan. Nous vous accompagnons.",
    features: [
      "Crédit Agricole (Campagne, équipement)",
      "Crédit Commercial & Artisanat",
      "Étude de dossier rapide",
      "Taux d'intérêt compétitifs et transparents",
      "Accompagnement personnalisé par nos conseillers"
    ],
    link: "/demande-de-pret"
  },
  {
    id: "tontine",
    title: "Tontine (Épargne Journalière)",
    icon: <Building className="w-8 h-8 text-spec-blue" />,
    description: "Une collecte de proximité directement sur votre lieu d'activité pour vous faciliter l'épargne au quotidien sans vous déplacer.",
    features: [
      "Collecte journalière sur le marché ou en boutique",
      "Montant de cotisation libre",
      "Sécurité totale de vos fonds",
      "Accès facilité au micro-crédit après 3 mois"
    ],
    link: "/contact"
  }
];

export default function ProduitsPage() {
  return (
    <main className="pt-28 pb-20 min-h-screen bg-gray-50 dark:bg-spec-black transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spec-blue/10 text-spec-blue dark:text-spec-blue-light text-xs font-bold uppercase tracking-wider mb-4 border border-spec-blue/20">
            Nos Offres
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-spec-black dark:text-white mb-6">
            Produits et Services
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Des solutions financières pensées pour vous, que vous souhaitiez sécuriser votre argent, financer un projet agricole ou développer votre commerce.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg shadow-black/5 dark:shadow-none hover:shadow-xl transition-shadow flex flex-col">
              <div className="p-8 flex-1">
                <div className="w-16 h-16 bg-spec-blue/10 dark:bg-spec-blue/20 rounded-2xl flex items-center justify-center mb-6 border border-spec-blue/20">
                  {product.icon}
                </div>
                <h2 className="text-2xl font-bold text-spec-black dark:text-white mb-4">{product.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {product.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link href={product.link} className="inline-flex items-center gap-2 text-spec-blue dark:text-spec-blue-light font-bold hover:underline group">
                  En savoir plus ou souscrire
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-24 bg-spec-blue rounded-3xl p-10 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Besoin de conseils ?</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Nos conseillers clientèle sont à votre disposition dans nos 13 agences pour vous orienter vers la solution la plus adaptée à vos besoins.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/reseau" className="px-8 py-3 bg-white text-spec-blue rounded-xl font-bold shadow-lg hover:bg-gray-10 transition-colors">
                Trouver une agence
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
