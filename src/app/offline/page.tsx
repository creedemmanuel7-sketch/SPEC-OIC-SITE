import Link from "next/link";
import Image from "next/image";
import { WifiOff, Home, Calculator, BookOpen, Phone } from "lucide-react";

export const metadata = {
  title: "Hors Connexion | SPEC OIC-Togo",
  description: "Vous êtes actuellement hors connexion.",
};

export default function OfflinePage() {
  const availableOffline = [
    { href: "/", label: "Accueil", icon: Home },
    { href: "/simulateur", label: "Simulateur de Crédit", icon: Calculator },
    { href: "/services", label: "Nos Services", icon: BookOpen },
    { href: "/a-propos", label: "À Propos", icon: BookOpen },
    { href: "/faq", label: "FAQ", icon: BookOpen },
    { href: "/reseau", label: "Nos Agences", icon: Phone },
    { href: "/publications", label: "Publications", icon: BookOpen },
  ];

  return (
    <main className="min-h-screen bg-spec-black flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="w-24 h-24 bg-spec-blue/10 border border-spec-blue/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <WifiOff className="w-12 h-12 text-spec-blue" />
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/icons/icon-96x96.png"
            alt="SPEC OIC-Togo"
            width={64}
            height={64}
            className="rounded-xl"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Vous êtes hors connexion
        </h1>
        <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          Pas d&apos;inquiétude — certaines pages sont disponibles sans Internet.
          Reconnectez-vous pour accéder à toutes les fonctionnalités.
        </p>

        {/* Pages disponibles offline */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-spec-blue uppercase tracking-wider mb-4">
            Pages disponibles hors-ligne
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {availableOffline.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 hover:bg-spec-blue/10 hover:border-spec-blue/30 hover:text-white transition-all"
              >
                <Icon className="w-4 h-4 text-spec-blue shrink-0" />
                <span className="text-left">{label}</span>
              </Link>
            ))}
          </div>
        </div>

        <p className="text-gray-600 text-sm">
          Numéro d&apos;urgence SPEC OIC : <span className="text-gray-400">(+228) 70 44 70 17</span>
        </p>
      </div>
    </main>
  );
}
