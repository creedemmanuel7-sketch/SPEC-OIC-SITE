"use client";

import { useState } from "react";
import { Briefcase, Send, MapPin, Clock } from "lucide-react";

export default function CarrieresPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xvgzyjbk", { // Reusing existing formspree
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

  const jobs = [
    {
      title: "Agent de Crédit Agricole",
      location: "Région des Plateaux",
      type: "Temps Plein",
      desc: "Accompagnement des groupements paysans dans la constitution des dossiers de crédit et suivi des remboursements post-récolte."
    },
    {
      title: "Caissier(ère)",
      location: "Lomé",
      type: "Temps Plein",
      desc: "Accueil de la clientèle, opérations de dépôt/retrait et gestion rigoureuse de la caisse quotidienne."
    },
    {
      title: "Agent de Collecte (Tontine)",
      location: "Kpalimé",
      type: "Temps Plein",
      desc: "Collecte journalière de l'épargne auprès des commerçants du marché central."
    }
  ];

  return (
    <main className="pt-28 pb-20 min-h-screen bg-gray-50 dark:bg-spec-black transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spec-blue/10 text-spec-blue dark:text-spec-blue-light text-xs font-bold uppercase tracking-wider mb-4 border border-spec-blue/20">
            Rejoignez-nous
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-spec-black dark:text-white mb-6">
            Faites carrière à la SPEC
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Contribuez à une mission qui a du sens. Nous recherchons des talents passionnés par l'inclusion financière et le développement du Togo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Offres */}
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-2xl font-bold text-spec-black dark:text-white mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-spec-blue" />
              Offres Actuelles
            </h2>
            
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-spec-black dark:text-white mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {job.desc}
                </p>
                <a href="#postuler" className="text-spec-blue dark:text-spec-blue-light font-bold text-sm hover:underline">
                  Postuler à cette offre &rarr;
                </a>
              </div>
            ))}
          </div>

          {/* Formulaire Candidature Spontanée */}
          <div className="lg:col-span-2" id="postuler">
            <div className="bg-white dark:bg-white/[0.02] rounded-3xl p-8 border border-gray-100 dark:border-white/5 shadow-xl shadow-black/5 dark:shadow-none sticky top-32">
              <h2 className="text-2xl font-bold text-spec-black dark:text-white mb-2">Candidature</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                Postulez à une offre ou envoyez une candidature spontanée.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-6 rounded-2xl text-center border border-green-200 dark:border-green-800/30">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Candidature Envoyée !</h3>
                  <p className="text-sm">Notre équipe RH vous recontactera très prochainement.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-spec-blue font-semibold hover:underline text-sm"
                  >
                    Envoyer une autre candidature
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="Subject" value="Candidature Emploi SPEC OIC" />
                  
                  <div>
                    <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Nom complet</label>
                    <input 
                      type="text" 
                      id="nom" 
                      name="Nom" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-spec-black dark:text-white focus:ring-2 focus:ring-spec-blue outline-none transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="Email" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-spec-black dark:text-white focus:ring-2 focus:ring-spec-blue outline-none transition-all"
                      placeholder="jean@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="poste" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Poste visé</label>
                    <input 
                      type="text" 
                      id="poste" 
                      name="Poste Vise" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-spec-black dark:text-white focus:ring-2 focus:ring-spec-blue outline-none transition-all"
                      placeholder="Ex: Agent de Crédit ou Spontanée"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Lien CV (LinkedIn ou Drive)</label>
                    <input 
                      type="url" 
                      id="cv" 
                      name="Lien CV" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-spec-black dark:text-white focus:ring-2 focus:ring-spec-blue outline-none transition-all text-sm"
                      placeholder="https://..."
                    />
                    <p className="text-xs text-gray-500 mt-1">Collez un lien public vers votre CV</p>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-spec-blue text-white rounded-xl font-bold shadow-lg shadow-spec-blue/30 hover:bg-spec-blue-dark transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma candidature"}
                  </button>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
