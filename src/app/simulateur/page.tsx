import { Calculator } from "@/components/Calculator";

export const metadata = {
  title: "Simulateur de Crédit et d'Épargne - SPEC OIC-Togo",
  description: "Estimez vos remboursements de crédit ou calculez vos revenus d'épargne avec le simulateur en ligne de la SPEC OIC-Togo.",
};

export default function SimulateurPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-white dark:bg-spec-black text-spec-black dark:text-white py-16 md:py-24 relative overflow-hidden border-b border-gray-200 dark:border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-spec-blue/5 dark:from-spec-blue/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Simulez votre <br/>
              <span className="text-spec-blue">Avenir Financier</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Planifiez votre avenir en toute sérénité. Que vous ayez besoin d'un financement pour votre projet ou que vous souhaitiez faire fructifier votre argent, notre outil vous donne une estimation immédiate.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <Calculator />
    </main>
  );
}
