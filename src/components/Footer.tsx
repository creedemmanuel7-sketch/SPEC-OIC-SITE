import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="bg-spec-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-lg inline-flex">
                <Image src="/logo-icon.png" alt="Logo" width={40} height={40} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-2xl font-bold">SPEC OIC-Togo</h3>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Structure de Promotion d'Épargne et de Crédit.
              <br/>Née de l'Opportunities Industrialization Center (OIC) Togo et du programme PARAT pour le développement de l'agriculteur togolais.
            </p>
            <div className="text-sm text-gray-500 font-medium">
              <p>Tutelle : Ministère des Finances & BCEAO</p>
              <p>Membre de : APSFD Togo</p>
              <p>Partenaire institutionnel : FNFI</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-spec-blue-light">Coordonnées</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-spec-blue shrink-0 mt-0.5" />
                <span>Siège : Tegbé<br/>BP 106<br/>Notsè - Togo</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-spec-blue shrink-0" />
                <span>(+228) 70 44 70 12</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-spec-blue shrink-0" />
                <span>secretariat.dg.specoic@...</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 pt-2 border-t border-white/10">
                <Clock className="w-5 h-5 text-spec-blue shrink-0" />
                <span>Lun-Ven: 7h-12h, 14h-17h</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-spec-blue-light">Nous trouver</h4>
            <a 
              href="https://maps.app.goo.gl/f6QKSQqytCrAzEs67" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block relative w-full h-32 bg-spec-dark rounded-xl overflow-hidden border border-white/10 hover:border-spec-blue/50 transition-colors"
            >
              <div className="absolute inset-0 bg-spec-blue/5 group-hover:bg-spec-blue/10 transition-colors flex flex-col items-center justify-center gap-2">
                <MapPin className="w-8 h-8 text-spec-blue group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-spec-blue-light">Ouvrir Google Maps</span>
              </div>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SPEC OIC-Togo. Tous droits réservés.</p>
          <p>Conçu pour l'inclusion financière depuis 2002.</p>
        </div>
      </div>
    </footer>
  );
}
