import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-spec-black overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero.png" 
          alt="Agriculture Togo" 
          fill 
          className="object-cover opacity-40 object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-spec-black via-spec-black/80 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 pt-10">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-spec-blue/20 text-blue-300 border border-spec-blue/30 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-spec-blue animate-pulse" />
            <span className="text-sm font-semibold tracking-wide uppercase">Institution de Microfinance - Depuis 2002</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
            Construire <span className="text-spec-blue">l'Avenir</span><br />
            Ensemble
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
            La Structure de Promotion d'Épargne et de Crédit (SPEC OIC-Togo) s'engage à réduire la pauvreté en offrant des services financiers inclusifs, de l'épargne au crédit agricole.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <Link href="#services" className="px-8 py-4 bg-spec-blue text-white rounded-lg font-semibold shadow-lg shadow-spec-blue/25 hover:bg-spec-blue-dark transition-all flex items-center gap-2 group">
              Découvrir nos services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/10 text-white backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
              Nous contacter
            </Link>
          </div>
        </div>
        
        <div className="flex-1 hidden lg:flex justify-end w-full">
          {/* Logo large showcase with glassmorphism */}
          <div className="relative w-full max-w-md rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-10 shadow-2xl flex flex-col items-center">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none" />
            <Image 
              src="/logo-icon.png"
              alt="Logo SPEC OIC-Togo"
              width={250}
              height={250}
              className="relative z-10 w-full object-contain filter drop-shadow-xl"
            />
            <div className="mt-8 text-center text-white/80 font-medium">
              Agréée par les autorités togolaises
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
