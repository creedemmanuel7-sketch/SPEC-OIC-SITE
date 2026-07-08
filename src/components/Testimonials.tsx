"use client";

import { Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

const getTestimonials = (t: any) => [
  {
    name: "Afiwa Mensah",
    role: t("role1"),
    location: "Notsè",
    initials: "AM",
    color: "bg-blue-500",
    text: t("quote1"),
    stars: 5,
  },
  {
    name: "Kossi Agbéko",
    role: t("role2"),
    location: "Kpékplémé",
    initials: "KA",
    color: "bg-green-600",
    text: t("quote2"),
    stars: 5,
  },
  {
    name: "Yawa Kpohou",
    role: t("role3"),
    location: "Atakpamé",
    initials: "YK",
    color: "bg-purple-600",
    text: t("quote3"),
    stars: 5,
  },
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Testimonials");
  const testimonials = getTestimonials(t);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // Si le conteneur ne déborde pas (ex: sur desktop), on ne fait rien
        if (scrollWidth <= clientWidth) return;

        // Si on est à la fin du défilement, on revient au début
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Sinon on avance d'une carte
          const card = scrollRef.current.children[0] as HTMLElement;
          const cardWidth = card ? card.offsetWidth + 24 /* gap = 24px */ : clientWidth;
          scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-spec-black text-spec-black dark:text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 dark:opacity-10" />
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 rounded-full border-[12px] border-spec-blue/10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full border-[16px] border-spec-blue/10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-spec-blue/20 text-spec-blue dark:text-blue-300 border border-spec-blue/30 text-sm font-semibold mb-4">
            {t("tag")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.rich("title", {
              blue: (chunks) => <span className="text-spec-blue">{chunks}</span>
            })}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl">
            {t("desc")}
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-7 flex flex-col w-[85vw] max-w-[320px] sm:w-auto sm:max-w-none flex-shrink-0 snap-center"
            >
              <Quote className="w-10 h-10 text-spec-blue/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1 text-sm md:text-base whitespace-normal">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-spec-black dark:text-white text-sm">{t.name}</p>
                  <p className="text-spec-blue dark:text-spec-blue-light text-xs">{t.role} · {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
