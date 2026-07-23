"use client";

import { useState } from "react";
import Link from "next/link";

import { faqs } from "@/data/faq";
import { useLanguage } from "@/context/LanguageContext";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useLanguage();

  return (
    <section id="faq" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.faq.heading}
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            {t.faq.description}
          </p>
        </header>

        <div className="mt-14 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((faq, index) => {
            const translatedFaq = t.faq.items[index];
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            const questionId = `faq-question-${index}`;

            return (
              <div key={faq.question}>
                <h3 id={questionId}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-inset"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                  >
                    <span className="text-lg font-semibold text-slate-900">
                      {translatedFaq?.[0] ?? faq.question}
                    </span>

                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </h3>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="leading-7 text-slate-600">
                      {translatedFaq?.[1] ?? faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-10 text-center">
          <h3 className="text-2xl font-semibold text-slate-900">
            {t.faq.moreHeading}
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            {t.faq.moreDescription}
          </p>

          <Link
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            {t.faq.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
