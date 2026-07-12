import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { heroContent } from "@/data/hero";
import { serviceCategories } from "@/data/services";

const icons: Record<string, ReactNode> = {
  Insurance: (
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
      <path d="m9.5 12 1.8 1.8 3.7-4" />
    </svg>
  ),

  Documentation: (
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
      <path d="M8 3h6l5 5v13H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v5h5" />
      <path d="M10 13h6M10 17h6" />
    </svg>
  ),

  "Financial Guidance": (
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
      <path d="M17 7.5c0-1.9-2.2-3.5-5-3.5S7 5.6 7 7.5 8.9 10 12 10s5 1.6 5 3.5S14.8 17 12 17s-5-1.6-5-3.5" />
    </svg>
  ),

  "Ayurvedic Consultation": (
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
      <path d="M19 3c-5 0-9 4-9 9v9" />
      <path d="M19 3c0 6-4 10-10 10H5" />
    </svg>
  ),
};

export default function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        {/* Left Column */}
        <div className="w-full lg:w-[70%]">
          <header className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {heroContent.headline}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {heroContent.description}
            </p>

            <div className="mt-8">
              <Link
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 sm:w-auto"
              >
                {heroContent.primaryCTA.label}
              </Link>
            </div>
          </header>

          <section className="mt-12" aria-labelledby="hero-services-heading">
            <h2
              id="hero-services-heading"
              className="text-xl font-semibold text-slate-900"
            >
              How can we help you today?
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {serviceCategories.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group flex h-full items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-slate-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                >
                  <div className="rounded-lg bg-slate-100 p-3 text-slate-700">
                    {icons[category.title]}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-slate-900">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {category.description}
                    </p>
                  </div>

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 5 7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[30%]">
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
            <Image
              src="/hero-placeholder.jpeg"
              alt="Business owner assisting customers"
              width={600}
              height={800}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}