"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  return <div className="inline-flex overflow-hidden rounded-md border border-slate-300 text-sm font-medium" aria-label={t.language.label}>
    <button type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"} className={`px-3 py-2 transition-colors ${language === "en" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-50"}`}>{t.language.english}</button>
    <button type="button" onClick={() => setLanguage("hi")} aria-pressed={language === "hi"} className={`border-l border-slate-300 px-3 py-2 transition-colors ${language === "hi" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-50"}`}>{t.language.hindi}</button>
  </div>;
}
