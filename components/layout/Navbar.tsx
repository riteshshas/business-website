"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { businessInfo } from "@/data/business";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();
  const navigationLabels = [t.nav.services, t.nav.process, t.nav.faq, t.nav.contact];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="flex flex-col leading-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
        >
          <span className="text-xl font-bold text-slate-900">MS</span>
          <span className="text-xs text-slate-600 sm:text-sm">
            Insurance &amp; Documentation
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navigation.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 ${
                    isActive
                      ? "text-slate-900"
                      : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  {navigationLabels[index]}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href={`tel:+${businessInfo.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72l.32 2.57a2 2 0 0 1-.57 1.73l-1.27 1.27a16 16 0 0 0 6.87 6.87l1.27-1.27a2 2 0 0 1 1.73-.57l2.57.32A2 2 0 0 1 22 16.92Z" />
            </svg>
            <span>{t.nav.call}</span>
          </a>

          <a
            href={`https://wa.me/${businessInfo.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-4 w-4"
              fill="currentColor"
            >
              <path d="M19.11 17.34c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.71.63.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
              <path d="M16.02 3C8.84 3 3 8.75 3 15.85c0 2.49.72 4.92 2.08 7L3 29l6.34-2.02a13.1 13.1 0 0 0 6.68 1.82c7.18 0 13.02-5.75 13.02-12.85S23.2 3 16.02 3Zm0 23.45c-2.06 0-4.08-.55-5.85-1.6l-.42-.25-3.76 1.2 1.23-3.65-.28-.43a10.4 10.4 0 0 1-1.6-5.57c0-5.8 4.78-10.52 10.68-10.52s10.68 4.72 10.68 10.52-4.79 10.52-10.68 10.52Z" />
            </svg>
            <span>{t.nav.whatsapp}</span>
          </a>
        </div>

        <button
          type="button"
          aria-label={t.nav.toggleMenu}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-md p-2 text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 lg:hidden"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {isMenuOpen ? (
              <path d="M6 6 18 18M6 18 18 6" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 border-b border-gray-200 bg-white shadow-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={closeMenu}
                  className={`rounded-md px-3 py-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {navigationLabels[index]}
                </Link>
              );
            })}

            <div className="mt-4 flex flex-col gap-3 border-t border-gray-200 pt-4">
              <a
                href={`tel:+${businessInfo.phoneRaw}`}
                onClick={closeMenu}
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
              >
                {t.nav.call}
              </a>

              <a
                href={`https://wa.me/${businessInfo.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
              >
                {t.nav.whatsapp}
              </a>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
