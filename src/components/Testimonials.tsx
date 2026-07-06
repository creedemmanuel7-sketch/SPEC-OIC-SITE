import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Afiwa Mensah",
    role: "Commerçante à Notsè",
    text: "Grâce au crédit commercial de la SPEC OIC-Togo, j'ai pu tripler le stock de ma boutique en moins de deux ans. Leur accompagnement m'a permis de mieux gérer mes finances.",
    stars: 5,
  },
  {
    name: "Kossi Agbéko",
    role: "Agriculteur",
    text: "Le crédit agricole et les formations techniques de la SPEC ont transformé mon exploitation. Aujourd'hui, je produis plus et je sécurise les revenus de ma famille.",
    stars: 5,
  },
  {
    name: "Jeanne Kpohou",
    role: "Artisane",
    text: "J'ai commencé avec une petite épargne de 5000 FCFA. La confiance que la SPEC m'a accordée par la suite m'a aidé à ouvrir mon propre atelier de couture.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-spec-black text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full border-[10px] border-spec-blue/10" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full border-[15px] border-spec-blue/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos membres</h2>
          <p className="text-gray-400 text-lg">
            Des milliers de togolais nous font confiance pour bâtir leur avenir. Voici quelques-uns de leurs témoignages.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-colors relative">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-spec-blue/20" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-spec-blue text-spec-blue" />
                ))}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-bold text-white text-lg">{t.name}</p>
                <p className="text-spec-blue text-sm uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
