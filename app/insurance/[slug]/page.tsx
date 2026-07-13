import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceCallToAction from "@/components/service/ServiceCallToAction";
import ServiceFaq from "@/components/service/ServiceFaq";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceProcess from "@/components/service/ServiceProcess";
import RequiredDocuments from "@/components/service/RequiredDocuments";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import {
  getInsuranceService,
  insuranceServices,
} from "@/data/services/insurance";

type PageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return insuranceServices.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const service = getInsuranceService((await params).slug);
  return service
    ? { title: service.title, description: service.shortDescription }
    : {};
}
export default async function InsuranceServicePage({ params }: PageProps) {
  const service = getInsuranceService((await params).slug);
  if (!service) notFound();
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero service={service} />
        <section className="bg-white pb-16 sm:pb-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              About {service.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {service.overview}
            </p>
          </div>
        </section>
        <RequiredDocuments documents={service.requiredDocuments} />
        <ServiceProcess steps={service.process} />
        <ServiceFaq items={service.faq} />
        <ServiceCallToAction cta={service.cta} />
      </main>
      <Footer />
    </>
  );
}
