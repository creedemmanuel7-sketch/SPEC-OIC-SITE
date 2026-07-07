import Image from "next/image";

const partners = [
  { name: "Orabank", logo: "/partners/orabank.png" },
  { name: "FNFI", logo: "/partners/fnfi.png" },
  { name: "APSFD", logo: "/partners/apsfd.png" },
  { name: "État Togolais", logo: "/partners/etat.png" },
];

export function Partners() {
  // Dupliquer le tableau pour l'effet de boucle infinie
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-12 bg-gray-50 dark:bg-white/[0.02] border-b border-gray-200 dark:border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500">
          Nos partenaires institutionnels et financiers
        </h3>
      </div>
      
      {/* Container pour le défilement (Marquee) */}
      <div className="relative w-full flex overflow-hidden">
        {/* Un masque pour adoucir les bords gauche et droit */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 dark:from-spec-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 dark:from-spec-black to-transparent z-10"></div>
        
        <div className="flex items-center w-max animate-marquee hover:[animation-play-state:paused]">
          {duplicatedPartners.map((partner, idx) => (
            <div key={idx} className="flex-shrink-0 flex items-center justify-center px-12 md:px-24">
              <div className="relative w-32 h-16 md:w-40 md:h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                <Image 
                  src={partner.logo} 
                  alt={`Logo ${partner.name}`} 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
