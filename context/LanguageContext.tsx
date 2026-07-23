"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { defaultLanguage, translations, type Language } from "@/lib/language";

const STORAGE_KEY = "site-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return defaultLanguage;
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    return storedLanguage === "en" || storedLanguage === "hi"
      ? storedLanguage
      : defaultLanguage;
  });

  const setLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    setLanguageState(nextLanguage);
  };

  useEffect(() => { document.documentElement.lang = language; }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t: translations[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider.");
  return context;
}
