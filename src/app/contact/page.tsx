import { MapPin, Phone, Mail, Clock, Send, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-spec-dark pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-spec-blue transition-colors">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-spec-black dark:text-white font-medium">Contact</span>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-spec-black dark:text-white mb-6">Contactez-nous</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Notre équipe est à votre disposition pour vous accompagner dans vos projets d'épargne et de crédit.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2 bg-white dark:bg-spec-black rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-white/5">
            <h2 className="text-2xl font-bold text-spec-black dark:text-white mb-8">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Nom complet</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-dark/50 focus:ring-2 focus:ring-spec-blue focus:border-transparent outline-none transition-all dark:text-white" placeholder="Jean Dupont" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">Numéro de téléphone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-dark/50 focus:ring-2 focus:ring-spec-blue focus:border-transparent outline-none transition-all dark:text-white" placeholder="(+228) 00 00 00 00" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Adresse email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-dark/50 focus:ring-2 focus:ring-spec-blue focus:border-transparent outline-none transition-all dark:text-white" placeholder="jean@exemple.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Sujet</label>
                <select id="subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-dark/50 focus:ring-2 focus:ring-spec-blue focus:border-transparent outline-none transition-all dark:text-white">
                  <option value="credit">Demande de crédit</option>
                  <option value="epargne">Ouverture de compte / Épargne</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Votre message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-dark/50 focus:ring-2 focus:ring-spec-blue focus:border-transparent outline-none transition-all resize-none dark:text-white" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>

              <button type="button" className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-spec-blue text-white font-bold text-lg hover:bg-blue-700 transition-colors shadow-xl shadow-spec-blue/30">
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            <div className="bg-spec-black text-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6">Informations</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-spec-blue" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Siège Social</p>
                    <p className="text-gray-400 text-sm">Tegbé, BP 106<br/>Notsè, Togo</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-spec-blue" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Téléphone</p>
                    <p className="text-gray-400 text-sm">(+228) 70 44 70 12</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-spec-blue" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-gray-400 text-sm">secretariat.dg.specoic@...</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-spec-blue" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Horaires d'ouverture</p>
                    <p className="text-gray-400 text-sm">Lundi au Vendredi<br/>07h00 - 12h00<br/>14h00 - 17h00</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="bg-white dark:bg-spec-black rounded-3xl p-4 shadow-xl border border-gray-100 dark:border-white/5 h-64 overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15833.568266497214!2d1.1578335!3d6.9538335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1026d30026dd372b%3A0xc3b8ab9f8c62c3e4!2sNots%C3%A8%2C%20Togo!5e0!3m2!1sfr!2sfr!4v1717540234567!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1rem' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
