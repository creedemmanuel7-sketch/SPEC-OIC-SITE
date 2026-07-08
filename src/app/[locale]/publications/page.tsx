import { FileText, Download, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Transparence & Publications - SPEC OIC-Togo",
  description: "Téléchargez les rapports annuels, statuts et autres publications officielles de la SPEC OIC-Togo.",
};

const documents = [
  {
    category: "Rapports Annuels",
    items: [
      { id: 1, title: "Rapport Annuel d'Activités 2024", size: "2.4 MB", date: "Janvier 2025" },
      { id: 2, title: "États Financiers Audités 2024", size: "1.1 MB", date: "Mars 2025" },
      { id: 3, title: "Rapport Annuel d'Activités 2023", size: "2.1 MB", date: "Janvier 2024" },
    ]
  },
  {
    category: "Textes & Règlements",
    items: [
      { id: 4, title: "Statuts de la Coopérative SPEC OIC-Togo", size: "850 KB", date: "Octobre 2002" },
      { id: 5, title: "Règlement Intérieur", size: "600 KB", date: "Mis à jour en 2020" },
      { id: 6, title: "Code d'Éthique et de Déontologie", size: "450 KB", date: "Février 2018" },
    ]
  }
];

export default function PublicationsPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="bg-spec-black text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-spec-blue/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-spec-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8 text-spec-blue" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Transparence & <br/>
              <span className="text-spec-blue">Publications</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              La confiance se bâtit par la clarté. Accédez à nos rapports financiers et nos textes réglementaires en toute transparence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-spec-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {documents.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-bold text-spec-black dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-spec-blue rounded-full"></span>
                  {section.category}
                </h2>
                
                <div className="bg-white dark:bg-spec-black border border-gray-100 dark:border-white/5 rounded-2xl shadow-sm overflow-hidden">
                  {section.items.map((doc, docIdx) => (
                    <div 
                      key={doc.id}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between p-6 gap-4 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors
                        ${docIdx !== section.items.length - 1 ? 'border-b border-gray-100 dark:border-white/5' : ''}
                      `}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-red-50 dark:bg-red-500/10 text-red-500 rounded-xl shrink-0">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-spec-black dark:text-white text-lg mb-1">{doc.title}</h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
                            <span>PDF • {doc.size}</span>
                            <span>Publié en {doc.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-spec-dark text-spec-blue border border-gray-200 dark:border-white/10 rounded-xl font-medium hover:bg-spec-blue hover:text-white hover:border-spec-blue transition-all group shrink-0">
                        <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                        Télécharger
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto mt-12 p-6 bg-spec-blue/10 dark:bg-spec-blue/5 border border-spec-blue/20 rounded-2xl flex gap-4">
            <span className="text-2xl">ℹ️</span>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Ces documents sont mis à votre disposition à titre consultatif. Pour toute question concernant nos rapports ou nos statuts, n'hésitez pas à contacter la Direction Générale via notre <Link href="/contact" className="text-spec-blue font-bold hover:underline">formulaire de contact</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
