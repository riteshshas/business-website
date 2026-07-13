import Link from "next/link";
import type { ServiceCta } from "@/types/services";
export default function ServiceCallToAction({ cta }: { cta: ServiceCta }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-10 text-center sm:px-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            {cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            {cta.description}
          </p>
          <Link
            href={cta.href}
            className="mt-8 inline-flex rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
