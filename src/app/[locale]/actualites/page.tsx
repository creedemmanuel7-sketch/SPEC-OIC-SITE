import { ArrowRight, Calendar, User, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Actualités & Éducation Financière - SPEC OIC-Togo",
  description: "Suivez l'actualité de la SPEC OIC-Togo et découvrez nos conseils en gestion financière.",
};

export default function ActualitesPage() {
  const t = useTranslations("Actualites");

  const articles = [
    {
      id: 1,
      title: t("art1Title"),
      excerpt: t("art1Excerpt"),
      date: t("art1Date"),
      category: t("art1Cat"),
      author: t("art1Author"),
      image: "/hero_agriculture.png",
    },
    {
      id: 2,
      title: t("art2Title"),
      excerpt: t("art2Excerpt"),
      date: t("art2Date"),
      category: t("art2Cat"),
      author: t("art2Author"),
      image: "/team_meeting.png",
    },
    {
      id: 3,
      title: t("art3Title"),
      excerpt: t("art3Excerpt"),
      date: t("art3Date"),
      category: t("art3Cat"),
      author: t("art3Author"),
      image: "/teller_window.png",
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="bg-spec-black text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
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
          <div className="grid lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white dark:bg-spec-black rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/5 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <Image 
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-spec-blue text-white text-xs font-bold rounded-full shadow-lg">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {article.author}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-spec-black dark:text-white mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 text-sm">
                    {article.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/10">
                    <Link href="#" className="inline-flex items-center text-sm font-bold text-spec-blue hover:text-spec-blue-dark transition-colors group/link">
                      {t("readMore")}
                      <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-spec-blue text-white rounded-xl font-bold shadow-lg shadow-spec-blue/30 hover:bg-spec-blue-dark transition-colors">
              {t("loadMore")}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

