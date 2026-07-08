import { LockKeyhole, Smartphone, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Espace Client - SPEC OIC-Togo",
  description: "Connectez-vous à votre espace client SPEC OIC-Togo pour gérer vos comptes et suivre vos transactions.",
};

export default function EspaceClientPage() {
  return (
    <main className="min-h-screen pt-20 bg-gray-50 dark:bg-spec-black flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white dark:bg-spec-dark rounded-3xl p-8 shadow-2xl shadow-spec-blue/5 border border-gray-100 dark:border-white/5 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-spec-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-spec-blue-light/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-spec-blue transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>

          <div className="w-16 h-16 bg-spec-blue/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <LockKeyhole className="w-8 h-8 text-spec-blue" />
          </div>

          <h1 className="text-2xl font-bold text-center text-spec-black dark:text-white mb-2">
            Espace Membre
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm mb-8">
            Connectez-vous pour gérer votre épargne et suivre vos crédits.
          </p>

          <form className="space-y-4 mb-8 relative">
            {/* Overlay that blocks the form */}
            <div className="absolute inset-0 z-20 bg-white/60 dark:bg-spec-dark/60 backdrop-blur-[2px] rounded-xl flex items-center justify-center border border-spec-blue/20">
              <div className="bg-white dark:bg-spec-black p-4 rounded-xl shadow-lg border border-spec-blue/30 max-w-[80%] text-center">
                <div className="flex justify-center mb-2">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spec-blue opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-spec-blue"></span>
                  </span>
                </div>
                <h3 className="text-sm font-bold text-spec-blue mb-1">Bientôt disponible</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">Notre nouveau portail de digitalisation est en cours de déploiement.</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Identifiant</label>
              <input disabled type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-black/50" placeholder="Votre numéro de membre" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mot de passe</label>
              <input disabled type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-black/50" placeholder="••••••••" />
            </div>
            <button disabled className="w-full py-3 bg-spec-blue text-white rounded-xl font-bold opacity-50 cursor-not-allowed">
              Se connecter
            </button>
          </form>

          <div className="pt-6 border-t border-gray-100 dark:border-white/10">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">Nos futurs services en ligne</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-gray-50 dark:bg-spec-black/30">
                <Smartphone className="w-5 h-5 text-spec-blue mb-2" />
                <span className="text-xs text-gray-600 dark:text-gray-400">Mobile Money</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-gray-50 dark:bg-spec-black/30">
                <ShieldCheck className="w-5 h-5 text-spec-blue mb-2" />
                <span className="text-xs text-gray-600 dark:text-gray-400">100% Sécurisé</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
