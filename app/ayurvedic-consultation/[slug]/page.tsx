import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ServicePage from "@/components/service/ServicePage";
import {
  ayurvedicConsultationServices,
  getAyurvedicConsultationService,
} from "@/data/services/ayurvedic-consultation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export function generateStaticParams() {
  return ayurvedicConsultationServices.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = getAyurvedicConsultationService((await params).slug);

  return service
    ? { title: service.title, description: service.shortDescription }
    : {};
}

export default async function AyurvedicConsultationServicePage({
  params,
}: PageProps) {
  const service = getAyurvedicConsultationService((await params).slug);

  if (!service) notFound();

  return <ServicePage service={service} />;
}
