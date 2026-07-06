import { CheckCircle2, TrendingUp, Users, ExternalLink, Milestone, Target } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-spec-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          {/* Text Column History */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-spec-blue/10 text-spec-blue border border-spec-blue/20 text-sm font-semibold tracking-wide uppercase">
              Notre Histoire
            </div>
            <h2 className="text-4xl font-bold text-spec-black dark:text-white">De PARAT à la SPEC OIC-Togo</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              La SPEC OIC-Togo est fière d'être la fille de l'OIC-Togo (Opportunities Industrialization Center). À l'origine, le département de l'agriculture américain avait créé le programme PARAT (Programme de Revenu de l'Agriculteur Togolais) au sein de l'OIC.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Pour pérenniser ces actions, une partie des financements a servi de fonds de dotation pour créer la Structure de Promotion d'Épargne et de Crédit. Après une phase de lancement et de formation via OEDIS en mai 2001, la SPEC a officiellement démarré ses propres activités de manière indépendante le <span className="font-bold text-spec-blue">17 octobre 2002</span>.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="border-l-4 border-spec-blue pl-4">
                <div className="flex items-center gap-2 text-xl font-bold text-spec-black dark:text-white mb-1">
                  <Milestone className="w-5 h-5 text-spec-blue" />
                  2027
                </div>
                <div className="text-sm text-gray-500 font-medium leading-snug">Migration prévue vers le statut de coopérative selon la nouvelle loi togolaise</div>
              </div>
              <div className="border-l-4 border-spec-blue pl-4">
                <div className="flex items-center gap-2 text-xl font-bold text-spec-black dark:text-white mb-1">
                  <Target className="w-5 h-5 text-spec-blue" />
                  13 Guichets
                </div>
                <div className="text-sm text-gray-500 font-medium leading-snug">Notsè, Atakpamé, Wahala, Tohoun... et un 14e en construction !</div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex-1 relative w-full lg:w-auto mt-10 lg:mt-0">
            <div className="relative min-h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/team_meeting.png" 
                alt="SPEC OIC-Togo Équipe" 
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-spec-blue/10 dark:bg-spec-blue/5 border border-spec-blue/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
