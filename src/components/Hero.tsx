import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center bg-spec-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero_agriculture.png" 
          alt="Agriculture Togo" 
          fill 
          className="object-cover opacity-60 object-center dark:opacity-40 transition-opacity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-spec-black via-spec-black/80 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-10 py-16">
        <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-spec-blue/20 text-blue-300 border border-spec-blue/30 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-spec-blue animate-pulse" />
            <span className="text-xs md:text-sm font-semibold tracking-wide uppercase">Institution Agréée N° T/0123/2002 — Depuis 2002</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
            Construire <span className="text-spec-blue">l'Avenir</span><br />
            Ensemble
          </h1>
          
          <p className="text-base md:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
            La SPEC OIC-Togo s'engage à réduire la pauvreté en offrant des services financiers inclusifs, de l'épargne au crédit agricole.
          </p>
          
          <div className="flex items-center gap-4 justify-center lg:justify-start text-sm font-medium text-blue-200 mt-2">
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
              <span className="text-spec-blue">✓</span> Ouverture de compte dès 5 000 FCFA
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
              <span className="text-spec-blue">✓</span> Taux de base attractifs
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link href="/services" className="w-full sm:w-auto px-7 py-4 bg-spec-blue text-white rounded-xl font-bold shadow-lg shadow-spec-blue/30 hover:bg-spec-blue-dark transition-all flex items-center justify-center gap-2 group">
              Découvrir nos services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-7 py-4 bg-white/10 text-white backdrop-blur-sm rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20 text-center">
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
              Agréée par le Ministère de l'Économie et des Finances
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
