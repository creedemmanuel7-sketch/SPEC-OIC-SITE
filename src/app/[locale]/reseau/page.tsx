import { Network } from "@/components/Network";
import { CTA } from "@/components/CTA";

export const metadata = {
  title: "Notre Réseau d'Agences | SPEC OIC-Togo",
  description: "Trouvez l'agence ou le guichet SPEC OIC-Togo le plus proche de chez vous parmi nos 3 agences et 13 guichets au Togo.",
};

export default function ReseauPage() {
  return (
    <>
      <div className="bg-spec-blue/5 dark:bg-spec-blue/10 py-20 border-b border-gray-100 dark:border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-spec-black dark:text-white mb-6">Nos Agences et Guichets</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Toujours plus proches de vous. Découvrez notre réseau de 3 agences principales et 13 guichets déployés dans les régions des Plateaux et de la Centrale.
          </p>
        </div>
      </div>
      
      <Network />

      <CTA />
    </>
  );
}
