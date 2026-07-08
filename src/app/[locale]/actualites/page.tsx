import { ArrowRight, Calendar, User, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Actualités & Éducation Financière - SPEC OIC-Togo",
  description: "Suivez l'actualité de la SPEC OIC-Togo et découvrez nos conseils en gestion financière.",
};

const articles = [
  {
    id: 1,
    title: "Lancement de la Campagne Agricole 2026",
    excerpt: "La SPEC OIC-Togo accompagne plus de 500 agriculteurs de la région des Plateaux pour la nouvelle saison. Découvrez nos offres de crédit de campagne.",
    date: "15 Juin 2026",
    category: "Institution",
    author: "La Direction",
    image: "/hero_agriculture.png",
  },
  {
    id: 2,
    title: "5 astuces pour bien gérer son épargne Tontine",
    excerpt: "La tontine est un excellent moyen d'économiser, mais savez-vous comment optimiser vos cotisations pour réaliser vos projets ? Nos conseils pratiques.",
    date: "02 Juin 2026",
    category: "Éducation Financière",
    author: "Service Client",
    image: "/team_meeting.png",
  },
  {
    id: 3,
    title: "Modernisation de nos services et Guichet Mobile",
    excerpt: "Dans le cadre de sa transition, la SPEC déploie de nouveaux outils pour faciliter vos dépôts et retraits. Focus sur le projet Mobile Money.",
    date: "20 Mai 2026",
    category: "Innovation",
    author: "Équipe IT",
    image: "/teller_window.png",
  }
];

export default function ActualitesPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="bg-spec-black text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Actualités & <br/>
              <span className="text-spec-blue">Éducation Financière</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Suivez les dernières nouvelles de la SPEC OIC-Togo, nos conseils de gestion financière, et l'impact de nos actions sur le terrain.
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
                      Lire la suite 
                      <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-spec-blue text-white rounded-xl font-bold shadow-lg shadow-spec-blue/30 hover:bg-spec-blue-dark transition-colors">
              Charger plus d'articles
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
