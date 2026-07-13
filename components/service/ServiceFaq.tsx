"use client";
import { useState } from "react";
import type { ServiceFaqItem } from "@/types/services";
export default function ServiceFaq({ items }: { items: ServiceFaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);
  return <section className="bg-slate-50 py-16 sm:py-20"><div className="mx-auto max-w-4xl px-6 lg:px-8"><h2 className="text-3xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h2><div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">{items.map((item, index) => { const isOpen = openIndex === index; const contentId = `service-faq-${index}`; return <div key={item.question}><h3><button type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)} aria-expanded={isOpen} aria-controls={contentId} className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-inset"><span className="font-semibold text-slate-900">{item.question}</span><span aria-hidden="true" className={`text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}>⌄</span></button></h3><div id={contentId} className={isOpen ? "px-6 pb-6" : "hidden"}><p className="leading-7 text-slate-600">{item.answer}</p></div></div>; })}</div></div></section>;
}
