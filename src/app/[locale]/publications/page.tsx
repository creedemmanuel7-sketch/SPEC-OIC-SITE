import { FileText, Download, ShieldCheck } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function PublicationsPage() {
  const t = useTranslations("Publications");

  const documents = [
    {
      category: t("cat1"),
      items: [
        { id: 1, title: t("doc1Title"), size: "2.4 MB", date: t("doc1Date") },
        { id: 2, title: t("doc2Title"), size: "1.1 MB", date: t("doc2Date") },
        { id: 3, title: t("doc3Title"), size: "2.1 MB", date: t("doc3Date") },
      ]
    },
    {
      category: t("cat2"),
      items: [
        { id: 4, title: t("doc4Title"), size: "850 KB", date: t("doc4Date") },
        { id: 5, title: t("doc5Title"), size: "600 KB", date: t("doc5Date") },
        { id: 6, title: t("doc6Title"), size: "450 KB", date: t("doc6Date") },
      ]
    }
  ];

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
              {t("title")} <br/>
              <span className="text-spec-blue">{t("titleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t("desc")}
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
                            <span>{t("publishedIn")} {doc.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-spec-dark text-spec-blue border border-gray-200 dark:border-white/10 rounded-xl font-medium hover:bg-spec-blue hover:text-white hover:border-spec-blue transition-all group shrink-0">
                        <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                        {t("download")}
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
              {t("infoNote")} <Link href="/contact" className="text-spec-blue font-bold hover:underline">{t("contactFormLink")}</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
