"use client";

import { useState } from "react";
import { CheckCircle2, Send, FileText, UserPlus } from "lucide-react";

export default function OuvrirComptePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xvgzyjbk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (error) {
      alert("Erreur de connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-28 pb-20 min-h-screen bg-gray-50 dark:bg-spec-black transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spec-blue/10 text-spec-blue dark:text-spec-blue-light text-xs font-bold uppercase tracking-wider mb-4 border border-spec-blue/20">
            Onboarding
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-spec-black dark:text-white mb-6">
            Ouvrir un Compte
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Rejoignez plus de 64 000 Togolais qui font confiance à la SPEC OIC. Consultez les conditions ci-dessous et laissez-nous vos coordonnées, un conseiller vous rappellera rapidement pour finaliser.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Section Informations / Conditions (Option 3) */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-spec-blue/10 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-spec-blue" />
              </div>
              <h2 className="text-2xl font-bold text-spec-black dark:text-white mb-6">Conditions et Documents Requis</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-spec-blue dark:text-spec-blue-light mb-2">Pour les Particuliers</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Copie de la Carte Nationale d'Identité ou Passeport en cours de validité</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">2 photos d'identité récentes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Un justificatif de domicile (facture CEET/TdE de moins de 3 mois)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Versement initial minimum de 5 000 FCFA</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-100 dark:border-white/10 pt-6">
                  <h3 className="font-bold text-spec-blue dark:text-spec-blue-light mb-2">Pour les Entreprises / Commerçants</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Documents d'enregistrement (Carte CFE, RCCM, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Pièces d'identité des signataires</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de Contact Amélioré (Option 1) */}
          <div>
            <div className="bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-xl shadow-black/5 dark:shadow-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-spec-blue/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <UserPlus className="w-7 h-7 text-spec-blue" />
                  <h2 className="text-2xl font-bold text-spec-black dark:text-white">Pré-ouverture en ligne</h2>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                  Remplissez ce formulaire et notre équipe vous contactera sous 24h ouvrées pour préparer votre dossier avant votre passage en agence.
                </p>

                {isSubmitted ? (
                  <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-6 rounded-2xl text-center border border-green-200 dark:border-green-800/30">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Demande envoyée !</h3>
                    <p className="text-sm">Un conseiller vous rappellera très vite pour finaliser votre ouverture de compte.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="Subject" value="Demande d'Ouverture de Compte" />
                    
                    <div>
                      <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Nom complet</label>
                      <input 
                        type="text" 
                        id="nom" 
                        name="Nom" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-spec-black dark:text-white focus:ring-2 focus:ring-spec-blue outline-none transition-all"
                        placeholder="Ex: Kodjo Mensah"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="tel" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Numéro de téléphone</label>
                        <input 
                          type="tel" 
                          id="tel" 
                          name="Telephone" 
                          required
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-spec-black dark:text-white focus:ring-2 focus:ring-spec-blue outline-none transition-all"
                          placeholder="+228..."
                        />
                      </div>
                      <div>
                        <label htmlFor="ville" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Ville / Quartier</label>
                        <input 
                          type="text" 
                          id="ville" 
                          name="Ville" 
                          required
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-spec-black dark:text-white focus:ring-2 focus:ring-spec-blue outline-none transition-all"
                          placeholder="Lomé, Kpalimé..."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="produit" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Produit souhaité</label>
                      <select 
                        id="produit" 
                        name="Produit Souhaite"
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-spec-black dark:text-white focus:ring-2 focus:ring-spec-blue outline-none transition-all appearance-none"
                      >
                        <option value="" disabled>Sélectionnez un produit...</option>
                        <option value="Epargne Classique">Compte Épargne Classique</option>
                        <option value="Compte Courant Commercial">Compte Courant Commercial</option>
                        <option value="Tontine">Tontine (Épargne Journalière)</option>
                        <option value="Epargne Bloquee">Dépôt à Terme / Épargne Bloquée</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-4 bg-spec-blue text-white rounded-xl font-bold shadow-lg shadow-spec-blue/30 hover:bg-spec-blue-dark transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Envoi en cours..." : "Me faire rappeler par un conseiller"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
