import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ServicePage from "@/components/service/ServicePage";
import {
  financialGuidanceServices,
  getFinancialGuidanceService,
} from "@/data/services/financial-guidance";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export function generateStaticParams() {
  return financialGuidanceServices.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = getFinancialGuidanceService((await params).slug);

  return service
    ? { title: service.title, description: service.shortDescription }
    : {};
}

export default async function FinancialGuidanceServicePage({ params }: PageProps) {
  const service = getFinancialGuidanceService((await params).slug);

  if (!service) notFound();

  return <ServicePage service={service} />;
}
