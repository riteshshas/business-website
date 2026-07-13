import Image from "next/image";
import Link from "next/link";
import type { ServicePageData } from "@/types/services";

export default function ServiceHero({ service }: { service: ServicePageData }) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            {service.title}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {service.heroHeadline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {service.heroDescription}
          </p>
          <Link
            href={service.cta.href}
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            Get Assistance
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
          <Image
            src={service.heroImage.src}
            alt={service.heroImage.alt}
            width={640}
            height={520}
            priority
            className="h-full min-h-72 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
