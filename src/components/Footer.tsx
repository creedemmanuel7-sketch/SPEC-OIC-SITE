import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Nos Services" },
  { href: "/simulateur", label: "Simulateur de Crédit" },
  { href: "/demande-de-pret", label: "Demande de Prêt" },
  { href: "/actualites", label: "Actualités" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/reseau", label: "Notre Réseau" },
  { href: "/publications", label: "Transparence & Publications" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/mentions-legales", label: "Mentions Légales" },
];

export function Footer() {
  return (
    <footer className="bg-spec-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand column */}
          <div className="sm:col-span-2 space-y-5">
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-lg inline-flex">
                <Image src="/logo-icon.png" alt="Logo SPEC OIC-Togo" width={40} height={40} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-2xl font-bold">SPEC OIC-Togo</h3>
            </div>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              Structure de Promotion d'Épargne et de Crédit, née de l'OIC-Togo (programme PARAT). Au service de l'inclusion financière au Togo depuis le 17 octobre 2002.
            </p>
            <div className="text-xs text-gray-500 space-y-1 font-medium">
              <p>Tutelle : Ministère des Finances & BCEAO</p>
              <p>Membre de : APSFD Togo</p>
              <p>Partenaire institutionnel : FNFI</p>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className="text-sm font-bold mb-5 uppercase tracking-wider text-spec-blue-light">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-spec-blue/60 shrink-0"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-sm font-bold mb-5 uppercase tracking-wider text-spec-blue-light">Coordonnées</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-spec-blue shrink-0 mt-0.5" />
                <span>Tegbé, BP 106<br />Notsè, Préf. Haho — Togo</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-spec-blue shrink-0" />
                <a href="tel:+22870447012" className="hover:text-white transition-colors">(+228) 70 44 70 12</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-spec-blue shrink-0" />
                <a href="mailto:creedemmanuel7@gmail.com" className="hover:text-white transition-colors break-all">creedemmanuel7@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 pt-3 border-t border-white/10">
                <Clock className="w-4 h-4 text-spec-blue shrink-0 mt-0.5" />
                <span>Lun–Ven : 7h30–12h30 & 14h30–17h30</span>
              </li>
            </ul>

            {/* Google Maps CTA */}
            <a
              href="https://maps.app.goo.gl/f6QKSQqytCrAzEs67"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 text-xs text-spec-blue hover:text-blue-300 transition-colors font-semibold"
            >
              <MapPin className="w-4 h-4" />
              Voir sur Google Maps →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} SPEC OIC-Togo. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-gray-300 transition-colors">Mentions légales & Confidentialité</Link>
            <span className="hidden sm:inline">·</span>
            <span>Inclusion financière depuis 2002</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
