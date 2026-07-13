"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type ReactNode } from "react";
import ServiceSelector from "@/components/service-selector/ServiceSelector";
import { insuranceServiceOptions } from "@/data/services/insurance";

type Category = { title: string; description: string; href: string };

const icons: Record<string, ReactNode> = {
  Insurance: <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 5 6v5c0 5 3.5 8.5 7 10 3.5-1.5 7-5 7-10V6l-7-3Z" /><path d="m9.5 12 1.8 1.8 3.7-4" /></svg>,
  Documentation: <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3h6l5 5v13H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" /><path d="M14 3v5h5M10 13h6M10 17h6" /></svg>,
  "Financial Guidance": <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M17 7.5c0-1.9-2.2-3.5-5-3.5S7 5.6 7 7.5 8.9 10 12 10s5 1.6 5 3.5S14.8 17 12 17s-5-1.6-5-3.5" /></svg>,
  "Ayurvedic Consultation": <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 3c-5 0-9 4-9 9v9M19 3c0 6-4 10-10 10H5" /></svg>,
};

export default function ServiceCategoryCards({ categories }: { categories: Category[] }) {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const router = useRouter();
  const cardClassName = "group flex h-full items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all hover:border-slate-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2";
  return <><div className="mt-6 grid gap-4 sm:grid-cols-2">{categories.map((category) => {
    const content = <><span className="rounded-lg bg-slate-100 p-3 text-slate-700">{icons[category.title]}</span><span className="min-w-0 flex-1"><span className="block font-semibold text-slate-900">{category.title}</span><span className="mt-2 block text-sm leading-6 text-slate-600">{category.description}</span></span><span aria-hidden="true" className="mt-1 text-slate-400 transition-transform group-hover:translate-x-1">→</span></>;
    return category.title === "Insurance" ? <button key={category.title} type="button" onClick={() => setIsSelectorOpen(true)} className={cardClassName}>{content}</button> : <Link key={category.title} href={category.href} className={cardClassName}>{content}</Link>;
  })}</div><ServiceSelector title="Choose an insurance service" description="Select the type of insurance support you need." services={insuranceServiceOptions} isOpen={isSelectorOpen} onClose={() => setIsSelectorOpen(false)} onSelect={(service) => router.push(`/insurance/${service.slug}`)} /></>;
}
