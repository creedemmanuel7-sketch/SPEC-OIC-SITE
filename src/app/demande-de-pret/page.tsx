"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DemandePretPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Pour l'instant, même configuration Formspree que la page Contact
      const response = await fetch("https://formspree.io/f/VOTRE_ID_FORMSPREE", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 8000);
      } else {
        alert("Erreur lors de l'envoi de la demande. Veuillez réessayer.");
      }
    } catch (error) {
      alert("Erreur réseau. Veuillez vérifier votre connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-20 bg-gray-50 dark:bg-spec-black pb-24">
      {/* Header Section */}
      <section className="bg-spec-black text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero_agriculture.png')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Demande de Crédit</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Remplissez ce formulaire pour initier votre demande. Un agent vous contactera sous 48h.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 -mt-8 relative z-20">
        <div className="max-w-3xl mx-auto bg-white dark:bg-spec-dark rounded-3xl p-8 md:p-12 shadow-2xl shadow-spec-blue/5 border border-gray-100 dark:border-white/5 relative overflow-hidden">
          
          {isSuccess ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-spec-dark z-30 p-8 text-center animate-in fade-in duration-300">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-spec-black dark:text-white mb-4">Demande envoyée !</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                Votre demande de crédit a été transmise avec succès à notre équipe. Un chargé de clientèle vous contactera sous 48h pour analyser votre dossier.
              </p>
              <Link href="/" className="px-6 py-3 bg-spec-blue text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-spec-blue-dark transition-colors">
                Retour à l'accueil <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            {/* Section 1: Infos Personnelles */}
            <div>
              <h3 className="text-lg font-bold text-spec-blue mb-4 border-b border-gray-100 dark:border-white/10 pb-2">1. Informations Personnelles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Nom et Prénoms *</label>
                  <input required type="text" name="nom" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-black/50 focus:ring-2 focus:ring-spec-blue outline-none dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Téléphone (WhatsApp de préférence) *</label>
                  <input required type="tel" name="telephone" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-black/50 focus:ring-2 focus:ring-spec-blue outline-none dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Ville / Localité *</label>
                  <input required type="text" name="ville" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-black/50 focus:ring-2 focus:ring-spec-blue outline-none dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Agence SPEC la plus proche *</label>
                  <select required name="agence" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-black/50 focus:ring-2 focus:ring-spec-blue outline-none dark:text-white">
                    <option value="">Sélectionnez une agence...</option>
                    <option value="Notsè">Notsè (Siège)</option>
                    <option value="Atakpamé">Atakpamé</option>
                    <option value="Kpékplémé">Kpékplémé</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Détails du Crédit */}
            <div>
              <h3 className="text-lg font-bold text-spec-blue mb-4 border-b border-gray-100 dark:border-white/10 pb-2">2. Votre Projet</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Montant souhaité (FCFA) *</label>
                  <input required type="number" name="montant" min="30000" step="5000" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-black/50 focus:ring-2 focus:ring-spec-blue outline-none dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Durée de remboursement (Mois) *</label>
                  <select required name="duree" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-black/50 focus:ring-2 focus:ring-spec-blue outline-none dark:text-white">
                    <option value="6">6 mois</option>
                    <option value="12">12 mois</option>
                    <option value="18">18 mois</option>
                    <option value="24">24 mois</option>
                    <option value="36">36 mois</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Type de Crédit *</label>
                  <select required name="type_credit" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-black/50 focus:ring-2 focus:ring-spec-blue outline-none dark:text-white">
                    <option value="">Sélectionnez le type de crédit...</option>
                    <option value="Agricole">Crédit Agricole (Campagne, Matériel)</option>
                    <option value="Commercial">Crédit Commercial (Stock, Boutique)</option>
                    <option value="Tontine">Crédit Tontine / Prépayé</option>
                    <option value="Artisanat">Crédit Artisanat</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Description brève de l'activité ou du projet *</label>
                  <textarea required name="description" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-black/50 focus:ring-2 focus:ring-spec-blue outline-none dark:text-white resize-none" placeholder="Ex: Achat d'intrants pour 2 hectares de maïs..."></textarea>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-spec-blue/10 p-4 rounded-xl flex gap-3 text-sm text-spec-blue dark:text-blue-300">
              <span className="font-bold">Note :</span>
              <p>Cette demande en ligne est une pré-qualification. L'octroi du crédit est soumis à l'étude approfondie de votre dossier par le comité de crédit et à l'ouverture d'un compte (si non membre).</p>
            </div>

            <button disabled={isSubmitting} type="submit" className="w-full py-4 bg-spec-blue text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-xl shadow-spec-blue/30 disabled:opacity-70 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>Traitement en cours...</>
              ) : (
                <>Soumettre la demande <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
