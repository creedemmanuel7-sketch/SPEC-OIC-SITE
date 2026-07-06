import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-spec-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-icon.png" alt="SPEC OIC-Togo Logo" width={40} height={40} className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold text-spec-black dark:text-white tracking-tight">SPEC OIC-Togo</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#services" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-spec-blue dark:hover:text-spec-blue transition-colors">
            Services
          </Link>
          <Link href="/#impact" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-spec-blue dark:hover:text-spec-blue transition-colors">
            Impact
          </Link>
          <Link href="/#about" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-spec-blue dark:hover:text-spec-blue transition-colors">
            À Propos
          </Link>
          <Link href="/contact" className="px-5 py-2.5 rounded-full bg-spec-blue text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-spec-blue/30">
            Nous Contacter
          </Link>
        </nav>

        <button className="md:hidden p-2 text-spec-black dark:text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
