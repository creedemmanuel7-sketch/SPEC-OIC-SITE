"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useState, useTransition, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const languages = [
  {
    code: 'fr',
    label: 'Français',
    shortLabel: 'FR',
    flag: (
      <svg viewBox="0 0 30 20" className="w-5 h-4 rounded-sm overflow-hidden">
        <rect width="10" height="20" fill="#002395"/>
        <rect x="10" width="10" height="20" fill="#FFFFFF"/>
        <rect x="20" width="10" height="20" fill="#ED2939"/>
      </svg>
    ),
  },
  {
    code: 'en',
    label: 'English',
    shortLabel: 'EN',
    flag: (
      <svg viewBox="0 0 60 40" className="w-5 h-4 rounded-sm overflow-hidden">
        <rect width="60" height="40" fill="#012169"/>
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8"/>
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="5"/>
        <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="12"/>
        <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="8"/>
      </svg>
    ),
  },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === locale) ?? languages[0];

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (nextLocale: string) => {
    setIsOpen(false);
    if (nextLocale === locale) return;

    startTransition(() => {
      // next-intl useRouter.replace will automatically prefix with the new locale
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={`
          flex items-center gap-2 px-3 py-2 rounded-xl
          bg-gray-100 dark:bg-white/10
          hover:bg-gray-200 dark:hover:bg-white/20
          border border-gray-200 dark:border-white/10
          transition-all duration-200
          ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
        aria-label="Changer de langue / Change language"
      >
        {currentLang.flag}
        <span className="text-xs font-bold text-spec-black dark:text-white tracking-wider">
          {currentLang.shortLabel}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="
            absolute right-0 top-full mt-2 w-44
            bg-white dark:bg-spec-dark
            rounded-2xl shadow-2xl
            border border-gray-100 dark:border-white/10
            overflow-hidden z-[100]
            animate-in fade-in slide-in-from-top-2 duration-150
          "
        >
          {/* Header */}
          <div className="px-4 py-2.5 border-b border-gray-100 dark:border-white/10">
            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500">
              Langue / Language
            </p>
          </div>

          {/* Options */}
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 text-left
                hover:bg-gray-50 dark:hover:bg-white/5
                transition-colors duration-150
                ${locale === lang.code ? 'bg-blue-50 dark:bg-spec-blue/10' : ''}
              `}
            >
              <div className="flex-shrink-0">{lang.flag}</div>
              <span className={`text-sm flex-1 ${locale === lang.code ? 'font-bold text-spec-blue' : 'font-medium text-gray-700 dark:text-gray-200'}`}>
                {lang.label}
              </span>
              {locale === lang.code && (
                <Check className="w-4 h-4 text-spec-blue flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
