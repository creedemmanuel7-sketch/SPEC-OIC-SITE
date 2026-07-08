import { Download, Info } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Grille Tarifaire | SPEC OIC-Togo",
  description: "Consultez nos conditions tarifaires pour l'ensemble de nos services financiers.",
};

const fees = [
  { service: "Ouverture de compte (Épargne)", cost: "Gratuit" },
  { service: "Ouverture de compte (Tontine)", cost: "Gratuit" },
  { service: "Frais de tenue de compte annuel", cost: "1 500 FCFA" },
  { service: "Dépôt en agence", cost: "Gratuit" },
  { service: "Retrait en agence", cost: "Gratuit" },
  { service: "Frais d'étude de dossier (Crédit)", cost: "2% du montant demandé" },
  { service: "Assurance crédit", cost: "Variable selon la durée" },
  { service: "Relevé de compte (1 par mois)", cost: "Gratuit" },
  { service: "Relevé de compte supplémentaire", cost: "500 FCFA / page" },
];

export default function TarifsPage() {
  return (
    <main className="pt-28 pb-20 min-h-screen bg-gray-50 dark:bg-spec-black transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spec-blue/10 text-spec-blue dark:text-spec-blue-light text-xs font-bold uppercase tracking-wider mb-4 border border-spec-blue/20">
            Transparence
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-spec-black dark:text-white mb-6">
            Notre Grille Tarifaire
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            À la SPEC OIC-Togo, nous croyons en une tarification juste et transparente. Retrouvez ci-dessous les conditions tarifaires de nos principaux services.
          </p>
          
          {/* Download button */}
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-spec-blue text-white rounded-xl font-bold shadow-lg shadow-spec-blue/30 hover:bg-spec-blue-dark transition-all">
            <Download className="w-5 h-5" />
            Télécharger la grille complète (PDF)
          </a>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-white/5 border-b border-gray-200 dark:border-white/10">
                <th className="py-4 px-6 font-bold text-spec-black dark:text-white uppercase tracking-wider text-sm">Service ou Opération</th>
                <th className="py-4 px-6 font-bold text-spec-black dark:text-white uppercase tracking-wider text-sm">Tarification TTC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-white/5">
              {fees.map((fee, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300 font-medium">
                    {fee.service}
                  </td>
                  <td className="py-4 px-6 text-spec-blue dark:text-spec-blue-light font-bold">
                    {fee.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="mt-8 flex gap-3 p-4 bg-blue-50 dark:bg-spec-blue/10 border border-blue-100 dark:border-spec-blue/20 rounded-xl">
          <Info className="w-6 h-6 text-spec-blue shrink-0" />
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Cette grille tarifaire est donnée à titre indicatif et peut être soumise à modification. Pour les conditions exactes et détaillées, notamment sur les taux d'intérêts de crédit, veuillez vous rapprocher de votre conseiller en agence.
          </p>
        </div>

      </div>
    </main>
  );
}
