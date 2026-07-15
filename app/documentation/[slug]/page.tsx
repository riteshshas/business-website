import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ServicePage from "@/components/service/ServicePage";
import {
  documentationServices,
  getDocumentationService,
} from "@/data/services/documentation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export function generateStaticParams() {
  return documentationServices.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = getDocumentationService((await params).slug);

  return service
    ? { title: service.title, description: service.shortDescription }
    : {};
}

export default async function DocumentationServicePage({ params }: PageProps) {
  const service = getDocumentationService((await params).slug);

  if (!service) notFound();

  return <ServicePage service={service} />;
}
