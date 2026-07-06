import { PiggyBank, HandCoins, GraduationCap, ArrowRight, ShieldCheck, Smartphone } from "lucide-react";
import Link from "next/link";

export function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-spec-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-spec-black dark:text-white">Nos Services Financiers</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Des solutions adaptées pour tous : commerçants, agriculteurs, artisans, femmes et jeunes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1: Épargne */}
          <div className="bg-white dark:bg-spec-dark rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-xl transition-all group border border-gray-100 dark:border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <PiggyBank className="w-24 h-24 text-spec-blue" />
            </div>
            <div className="w-14 h-14 bg-blue-50 dark:bg-spec-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <PiggyBank className="w-7 h-7 text-spec-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-spec-black dark:text-white">Épargne & Dépôts</h3>
            <ul className="space-y-3 mb-6 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-spec-blue"></div>Dépôt à vue (Compte courant)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-spec-blue"></div>Dépôt à terme</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-spec-blue"></div>Tontine ordinaire</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-spec-blue"></div>Tontine fête</li>
            </ul>
          </div>

          {/* Card 2: Crédit */}
          <div className="bg-white dark:bg-spec-dark rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-xl transition-all group border border-gray-100 dark:border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <HandCoins className="w-24 h-24 text-spec-blue" />
            </div>
            <div className="w-14 h-14 bg-blue-50 dark:bg-spec-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <HandCoins className="w-7 h-7 text-spec-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-spec-black dark:text-white">Crédits Adaptés</h3>
            <ul className="space-y-3 mb-6 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-spec-blue"></div>Crédit Agricole & Commercial</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-spec-blue"></div>Crédit Tontine & Prépayé</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-spec-blue"></div>Crédit Stockage</li>
              <li className="flex items-center gap-2 text-sm text-gray-500 mt-2 font-medium">De 30 000 FCFA à 60 Millions FCFA</li>
            </ul>
          </div>

          {/* Card 3: Autres Services */}
          <div className="bg-white dark:bg-spec-dark rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-xl transition-all group border border-gray-100 dark:border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck className="w-24 h-24 text-spec-blue" />
            </div>
            <div className="w-14 h-14 bg-blue-50 dark:bg-spec-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-7 h-7 text-spec-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-spec-black dark:text-white">Assurances & Innovations</h3>
            <ul className="space-y-3 mb-6 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-spec-blue"></div>Assurance liée aux crédits</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-spec-blue"></div>Formation continue des membres</li>
              <li className="flex items-start gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-white/5">
                <Smartphone className="w-5 h-5 text-spec-blue shrink-0" />
                <span className="text-sm">Digitalisation et paiement Mobile Money en cours de déploiement.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
