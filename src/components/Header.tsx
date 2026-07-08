"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useState } from "react";
import { useTranslations } from "next-intl";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("Navigation");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-spec-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 relative">
          {/* Logo plus grand, déborde légèrement si nécessaire pour l'effet visuel */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
            <Image src="/logo-icon.png" alt="SPEC OIC-Togo Logo" fill className="object-contain" />
          </div>
          <span className="text-2xl md:text-3xl font-extrabold text-spec-black dark:text-white tracking-tight">SPEC OIC-Togo</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/produits" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-spec-blue dark:hover:text-spec-blue transition-colors">
            {t("products")}
          </Link>
          <Link href="/simulateur" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-spec-blue dark:hover:text-spec-blue transition-colors">
            {t("simulator")}
          </Link>
          <Link href="/tarifs" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-spec-blue dark:hover:text-spec-blue transition-colors">
            {t("rates")}
          </Link>
          <Link href="/gouvernance" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-spec-blue dark:hover:text-spec-blue transition-colors">
            {t("governance")}
          </Link>
          <Link href="/carrieres" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-spec-blue dark:hover:text-spec-blue transition-colors">
            {t("careers")}
          </Link>
          <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-2" />
          
          <LanguageSwitcher />
          <ThemeToggle />
          
          <Link href="/espace-client" className="px-5 py-2.5 rounded-full bg-spec-blue/10 text-spec-blue text-sm font-bold hover:bg-spec-blue/20 transition-colors">
            {t("mySpace")}
          </Link>
          <Link href="/ouvrir-compte" className="px-5 py-2.5 rounded-full bg-spec-blue text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-spec-blue/30">
            {t("openAccount")}
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-spec-black dark:text-white ml-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-spec-black border-b border-gray-200 dark:border-white/10 shadow-xl p-6 flex flex-col gap-4">
          <Link href="/produits" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-spec-black dark:text-white">{t("products")}</Link>
          <Link href="/simulateur" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-spec-black dark:text-white">{t("simulator")}</Link>
          <Link href="/tarifs" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-spec-black dark:text-white">{t("rates")}</Link>
          <Link href="/gouvernance" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-spec-black dark:text-white">{t("governance")}</Link>
          <Link href="/carrieres" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-spec-black dark:text-white">{t("careers")}</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-spec-black dark:text-white">{t("contact")}</Link>
          <hr className="border-gray-200 dark:border-white/10 my-2" />
          <Link href="/espace-client" onClick={() => setIsMobileMenuOpen(false)} className="px-5 py-3 text-center rounded-xl bg-spec-blue/10 text-spec-blue font-bold">
            {t("mySpace")}
          </Link>
          <Link href="/ouvrir-compte" onClick={() => setIsMobileMenuOpen(false)} className="px-5 py-3 text-center rounded-xl bg-spec-blue text-white font-bold">
            {t("openAccount")}
          </Link>
        </div>
      )}
    </header>
  );
}
