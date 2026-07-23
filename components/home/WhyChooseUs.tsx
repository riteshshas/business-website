"use client";

import { whyChooseUs } from "@/data/why-choose-us";
import { useLanguage } from "@/context/LanguageContext";

const icons: Record<string, React.ReactNode> = {
  Experience: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 4 7v5c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V7l-8-4Z" />
      <path d="m9.5 12 1.7 1.7 3.8-4" />
    </svg>
  ),

  Guidance: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s7-4.5 7-10V5l-7-2-7 2v6c0 5.5 7 10 7 10Z" />
      <path d="M12 8v5" />
      <circle cx="12" cy="16" r=".5" fill="currentColor" stroke="none" />
    </svg>
  ),

  Support: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 10a6 6 0 1 0-12 0v5a2 2 0 0 0 2 2h2v-5H6" />
      <path d="M18 17h-4v-5h4v5Z" />
      <path d="M18 17a2 2 0 0 1-2 2h-2" />
    </svg>
  ),

  Trust: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 5 6v5c0 5 3.5 8.5 7 10 3.5-1.5 7-5 7-10V6l-7-3Z" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </svg>
  ),

  Transparency: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v18" />
      <path d="M5 12h14" />
      <circle cx="12" cy="12" r="8" />
    </svg>
  ),

  Reliability: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 7 9 18l-5-5" />
    </svg>
  ),
};

const defaultIcon = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default function WhyChooseUs() {
  const { t } = useLanguage();
  return (
    <section id="why-choose-us" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.why.heading}
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            {t.why.description}
          </p>
        </header>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((reason, index) => (
            <article
              key={reason.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md"
            >
              <div className="inline-flex rounded-lg bg-slate-100 p-3 text-slate-700">
                {icons[reason.icon] ?? defaultIcon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {t.why.items[index]?.[0] ?? reason.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {t.why.items[index]?.[1] ?? reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
