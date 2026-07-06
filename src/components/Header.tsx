"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-spec-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-icon.png" alt="SPEC OIC-Togo Logo" width={40} height={40} className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold text-spec-black dark:text-white tracking-tight">SPEC OIC-Togo</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/services" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-spec-blue dark:hover:text-spec-blue transition-colors">
            Services
          </Link>
          <Link href="/a-propos" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-spec-blue dark:hover:text-spec-blue transition-colors">
            À Propos
          </Link>
          <Link href="/reseau" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-spec-blue dark:hover:text-spec-blue transition-colors">
            Notre Réseau
          </Link>
          <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-2" />
          <ThemeToggle />
          <Link href="/contact" className="px-5 py-2.5 rounded-full bg-spec-blue text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-spec-blue/30">
            Nous Contacter
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-spec-black dark:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-spec-black border-b border-gray-200 dark:border-white/10 shadow-xl p-6 flex flex-col gap-4">
          <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-spec-black dark:text-white">Services</Link>
          <Link href="/a-propos" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-spec-black dark:text-white">À Propos</Link>
          <Link href="/reseau" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-spec-black dark:text-white">Notre Réseau</Link>
          <hr className="border-gray-200 dark:border-white/10 my-2" />
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-5 py-3 text-center rounded-xl bg-spec-blue text-white font-bold">
            Nous Contacter
          </Link>
        </div>
      )}
    </header>
  );
}
