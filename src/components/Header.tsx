"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useState } from "react";
import { useTranslations } from "next-intl";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // States for mobile accordions
  const [openSection, setOpenSection] = useState<string | null>(null);
  
  const t = useTranslations("Navigation");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-spec-black/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 relative">
          <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
            <Image src="/logo-icon.png" alt="SPEC OIC-Togo Logo" fill sizes="(max-width: 768px) 64px, 80px" className="object-contain" />
          </div>
          <span className="text-xl md:text-2xl font-extrabold text-spec-black dark:text-white tracking-tight hidden sm:block">SPEC OIC-Togo</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-2">
          
          {/* Produits & Services - Mega Menu */}
          <div className="group relative">
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-spec-blue dark:hover:text-spec-blue transition-colors">
              {t.has("products_services") ? t("products_services") : "Produits & Services"}
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white dark:bg-spec-dark rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 flex overflow-hidden">
              <div className="w-1/2 p-6 bg-gray-50/50 dark:bg-white/5 border-r border-gray-100 dark:border-white/5">
                <h3 className="text-spec-blue font-bold mb-4 text-sm uppercase tracking-wider">{t.has("individuals") ? t("individuals") : "Particuliers & Pros"}</h3>
                <ul className="space-y-3">
                  <li><Link href="/produits#epargne-classique" className="text-gray-600 dark:text-gray-400 hover:text-spec-blue dark:hover:text-spec-blue font-medium text-sm block">{t.has("prod_savings") ? t("prod_savings") : "Épargne Classique"}</Link></li>
                  <li><Link href="/produits#tontine" className="text-gray-600 dark:text-gray-400 hover:text-spec-blue dark:hover:text-spec-blue font-medium text-sm block">{t.has("prod_tontine") ? t("prod_tontine") : "Tontine"}</Link></li>
                  <li><Link href="/produits#credit-solidaire" className="text-gray-600 dark:text-gray-400 hover:text-spec-blue dark:hover:text-spec-blue font-medium text-sm block">{t.has("prod_credit_solidaire") ? t("prod_credit_solidaire") : "Crédit Solidaire"}</Link></li>
                  <li><Link href="/produits#credit-individuel" className="text-gray-600 dark:text-gray-400 hover:text-spec-blue dark:hover:text-spec-blue font-medium text-sm block">{t.has("prod_credit_individuel") ? t("prod_credit_individuel") : "Crédit Individuel"}</Link></li>
                  <li><Link href="/services#transferts" className="text-gray-600 dark:text-gray-400 hover:text-spec-blue dark:hover:text-spec-blue font-medium text-sm block">{t.has("prod_transfers") ? t("prod_transfers") : "Transferts d'argent"}</Link></li>
                </ul>
              </div>
              <div className="w-1/2 p-6">
                <h3 className="text-spec-blue font-bold mb-4 text-sm uppercase tracking-wider">{t.has("businesses") ? t("businesses") : "Entreprises"}</h3>
                <ul className="space-y-3">
                  <li><Link href="/produits#compte-courant" className="text-gray-600 dark:text-gray-400 hover:text-spec-blue dark:hover:text-spec-blue font-medium text-sm block">{t.has("prod_commercial") ? t("prod_commercial") : "Compte Courant Commercial"}</Link></li>
                  <li><Link href="/produits#credit-agricole" className="text-gray-600 dark:text-gray-400 hover:text-spec-blue dark:hover:text-spec-blue font-medium text-sm block">{t.has("prod_agri") ? t("prod_agri") : "Crédit Agricole"}</Link></li>
                  <li><Link href="/produits#depot-terme" className="text-gray-600 dark:text-gray-400 hover:text-spec-blue dark:hover:text-spec-blue font-medium text-sm block">{t.has("prod_term") ? t("prod_term") : "Dépôt à Terme"}</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Outils & Tarifs - Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-spec-blue dark:hover:text-spec-blue transition-colors">
              {t.has("tools_rates") ? t("tools_rates") : "Outils & Tarifs"}
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 w-64 bg-white dark:bg-spec-dark rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-4">
              <ul className="space-y-2">
                <li><Link href="/simulateur" className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-spec-blue/5 hover:text-spec-blue transition-colors">{t("simulator")}</Link></li>
                <li><Link href="/tarifs" className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-spec-blue/5 hover:text-spec-blue transition-colors">{t("rates")}</Link></li>
              </ul>
            </div>
          </div>

          {/* À Propos - Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-spec-blue dark:hover:text-spec-blue transition-colors">
              {t.has("about_spec") ? t("about_spec") : "À Propos"}
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 w-56 bg-white dark:bg-spec-dark rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-4">
              <ul className="space-y-2">
                <li><Link href="/a-propos" className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-spec-blue/5 hover:text-spec-blue transition-colors">{t.has("aboutUs") ? t("aboutUs") : "Qui sommes-nous"}</Link></li>
                <li><Link href="/gouvernance" className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-spec-blue/5 hover:text-spec-blue transition-colors">{t("governance")}</Link></li>
                <li><Link href="/reseau" className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-spec-blue/5 hover:text-spec-blue transition-colors">{t.has("network") ? t("network") : "Notre Réseau"}</Link></li>
                <li><Link href="/carrieres" className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-spec-blue/5 hover:text-spec-blue transition-colors">{t("careers")}</Link></li>
                <li><Link href="/actualites" className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-spec-blue/5 hover:text-spec-blue transition-colors">{t.has("news") ? t("news") : "Actualités"}</Link></li>
                <li><Link href="/faq" className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-spec-blue/5 hover:text-spec-blue transition-colors">{t.has("faq") ? t("faq") : "FAQ"}</Link></li>
                <li><Link href="/contact" className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-spec-blue/5 hover:text-spec-blue transition-colors">{t("contact")}</Link></li>
              </ul>
            </div>
          </div>

          <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-2" />
          
          <LanguageSwitcher />
          <ThemeToggle />
          
          <div className="flex items-center gap-3 ml-2">
            <Link href="/espace-client" className="px-5 py-2.5 rounded-full bg-spec-blue/10 text-spec-blue text-sm font-bold hover:bg-spec-blue/20 transition-colors">
              {t("mySpace")}
            </Link>
            <Link href="/ouvrir-compte" className="px-5 py-2.5 rounded-full bg-spec-blue text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-spec-blue/30 whitespace-nowrap">
              {t("openAccount")}
            </Link>
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-spec-black dark:text-white ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-20 left-0 right-0 h-[calc(100vh-80px)] overflow-y-auto bg-white dark:bg-spec-black border-t border-gray-200 dark:border-white/10 shadow-xl px-6 py-6 pb-24 flex flex-col gap-2">
          
          {/* Produits & Services Accordion */}
          <div className="border-b border-gray-100 dark:border-white/5 pb-2">
            <button onClick={() => toggleSection('produits')} className="flex items-center justify-between w-full py-3 text-lg font-bold text-spec-black dark:text-white">
              {t.has("products_services") ? t("products_services") : "Produits & Services"}
              <ChevronDown className={`w-5 h-5 transition-transform ${openSection === 'produits' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'produits' && (
              <div className="flex flex-col gap-3 pl-4 pb-4">
                <p className="text-xs font-bold text-spec-blue uppercase">{t.has("individuals") ? t("individuals") : "Particuliers & Pros"}</p>
                <Link href="/produits#epargne-classique" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-400">{t.has("prod_savings") ? t("prod_savings") : "Épargne Classique"}</Link>
                <Link href="/produits#tontine" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-400">{t.has("prod_tontine") ? t("prod_tontine") : "Tontine"}</Link>
                <Link href="/produits#credit-solidaire" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-400">{t.has("prod_credit_solidaire") ? t("prod_credit_solidaire") : "Crédit Solidaire"}</Link>
                <Link href="/produits#credit-individuel" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-400">{t.has("prod_credit_individuel") ? t("prod_credit_individuel") : "Crédit Individuel"}</Link>
                <Link href="/services#transferts" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-400">{t.has("prod_transfers") ? t("prod_transfers") : "Transferts d'argent"}</Link>
                
                <p className="text-xs font-bold text-spec-blue uppercase mt-2">{t.has("businesses") ? t("businesses") : "Entreprises"}</p>
                <Link href="/produits#compte-courant" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-400">{t.has("prod_commercial") ? t("prod_commercial") : "Compte Courant Commercial"}</Link>
                <Link href="/produits#credit-agricole" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-400">{t.has("prod_agri") ? t("prod_agri") : "Crédit Agricole"}</Link>
                <Link href="/produits#depot-terme" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-400">{t.has("prod_term") ? t("prod_term") : "Dépôt à Terme"}</Link>
              </div>
            )}
          </div>

          {/* Outils & Tarifs Accordion */}
          <div className="border-b border-gray-100 dark:border-white/5 pb-2">
            <button onClick={() => toggleSection('outils')} className="flex items-center justify-between w-full py-3 text-lg font-bold text-spec-black dark:text-white">
              {t.has("tools_rates") ? t("tools_rates") : "Outils & Tarifs"}
              <ChevronDown className={`w-5 h-5 transition-transform ${openSection === 'outils' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'outils' && (
              <div className="flex flex-col gap-3 pl-4 pb-4">
                <Link href="/simulateur" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-400">{t("simulator")}</Link>
                <Link href="/tarifs" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-400">{t("rates")}</Link>
              </div>
            )}
          </div>

          {/* À Propos Accordion */}
          <div className="border-b border-gray-100 dark:border-white/5 pb-2">
            <button onClick={() => toggleSection('apropos')} className="flex items-center justify-between w-full py-3 text-lg font-bold text-spec-black dark:text-white">
              {t.has("about_spec") ? t("about_spec") : "À Propos de la SPEC"}
              <ChevronDown className={`w-5 h-5 transition-transform ${openSection === 'apropos' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'apropos' && (
              <div className="flex flex-col gap-3 pl-4 pb-4">
                <Link href="/a-propos" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-400">{t.has("aboutUs") ? t("aboutUs") : "Qui sommes-nous"}</Link>
                <Link href="/gouvernance" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-400">{t("governance")}</Link>
                <Link href="/reseau" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-400">{t.has("network") ? t("network") : "Notre Réseau"}</Link>
                <Link href="/carrieres" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-400">{t("careers")}</Link>
                <Link href="/actualites" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-400">{t.has("news") ? t("news") : "Actualités"}</Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-400">{t("contact")}</Link>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Link href="/espace-client" onClick={() => setIsMobileMenuOpen(false)} className="px-5 py-4 text-center rounded-xl bg-spec-blue/10 text-spec-blue font-bold text-lg">
              {t("mySpace")}
            </Link>
            <Link href="/ouvrir-compte" onClick={() => setIsMobileMenuOpen(false)} className="px-5 py-4 text-center rounded-xl bg-spec-blue text-white font-bold text-lg shadow-lg shadow-spec-blue/30">
              {t("openAccount")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
