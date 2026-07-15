import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service/ServicePage";
import {
  getInsuranceService,
  insuranceServices,
} from "@/data/services/insurance";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";
export const dynamicParams = true;

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
  return <ServicePage service={service} />;
}
