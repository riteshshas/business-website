import Image from "next/image";
import Link from "next/link";
import ServiceCategoryCards from "@/components/home/ServiceCategoryCards";
import { heroContent } from "@/data/hero";
import { serviceSelectorCategories } from "@/data/services/service-selector-categories";

export default function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:px-8 lg:py-24">
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
            <ServiceCategoryCards categories={serviceSelectorCategories} />
          </section>
        </div>
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
