import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Afiwa Mensah",
    role: "Commerçante",
    location: "Notsè",
    initials: "AM",
    color: "bg-blue-500",
    text: "Grâce au crédit commercial de la SPEC OIC-Togo, j'ai pu tripler le stock de ma boutique en moins de deux ans. Leur accompagnement m'a permis de mieux gérer mes finances et de développer mon activité.",
    stars: 5,
  },
  {
    name: "Kossi Agbéko",
    role: "Agriculteur",
    location: "Kpékplémé",
    initials: "KA",
    color: "bg-green-600",
    text: "Le crédit agricole et l'accompagnement de la SPEC ont transformé mon exploitation. Aujourd'hui, je produis plus et je sécurise les revenus de ma famille pour l'année entière.",
    stars: 5,
  },
  {
    name: "Yawa Kpohou",
    role: "Artisane couturière",
    location: "Atakpamé",
    initials: "YK",
    color: "bg-purple-600",
    text: "J'ai commencé avec une petite épargne de 5 000 FCFA. La confiance que la SPEC m'a accordée m'a permis d'ouvrir mon propre atelier de couture et d'employer deux apprenties.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-spec-black text-white relative overflow-hidden">
      {/* Ambient decorations */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 rounded-full border-[12px] border-spec-blue/10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full border-[16px] border-spec-blue/10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-spec-blue/20 text-blue-300 border border-spec-blue/30 text-sm font-semibold mb-4">
            Témoignages membres
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos membres</h2>
          <p className="text-gray-400 text-lg">
            Des milliers de Togolais nous font confiance pour bâtir leur avenir.
          </p>
          <p className="text-xs text-gray-600 mt-3 italic">
            * Noms et prénoms rendus anonymes pour respecter la vie privée des membres.
          </p>
        </div>

        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col gap-6 hover:bg-white/10 sm:hover:-translate-y-1 transition-all duration-300 relative shrink-0 w-[85vw] sm:w-auto snap-center"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-spec-blue/15" />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-gray-300 leading-relaxed flex-1 text-sm md:text-base">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-spec-blue-light text-xs">{t.role} · {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
