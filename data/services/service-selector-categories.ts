import { documentationServiceOptions } from "@/data/services/documentation";
import { financialGuidanceServiceOptions } from "@/data/services/financial-guidance";
import { insuranceServiceOptions } from "@/data/services/insurance";
import type { ServiceSelectorOption } from "@/types/services";

type ServiceCategoryInteraction = "selector" | "unavailable";

export type ServiceCategory = {
  id: "insurance" | "documentation" | "financial-guidance" | "ayurvedic-consultation";
  title: string;
  description: string;
  icon: "shield" | "document" | "financial" | "leaf";
  routeBase: string;
  interaction: ServiceCategoryInteraction;
  services: ServiceSelectorOption[];
  selectorDescription?: string;
};

export const serviceSelectorCategories: ServiceCategory[] = [
  {
    id: "insurance",
    title: "Insurance",
    description: "Life, health, motor, term and other insurance solutions.",
    icon: "shield",
    routeBase: "/insurance",
    interaction: "selector",
    selectorDescription: "Select the type of insurance support you need.",
    services: insuranceServiceOptions,
  },
  {
    id: "documentation",
    title: "Documentation",
    description: "Government documentation including Passport, PAN, Aadhaar and more.",
    icon: "document",
    routeBase: "/documentation",
    interaction: "selector",
    selectorDescription: "Select the documentation service you need help with.",
    services: documentationServiceOptions,
  },
  {
    id: "financial-guidance",
    title: "Financial Guidance",
    description: "Professional guidance for financial planning and related services.",
    icon: "financial",
    routeBase: "/financial-guidance",
    interaction: "selector",
    selectorDescription: "Select the financial guidance you would like to explore.",
    services: financialGuidanceServiceOptions,
  },
  {
    id: "ayurvedic-consultation",
    title: "Ayurvedic Consultation",
    description: "Ayurvedic products and wellness consultation based on individual needs.",
    icon: "leaf",
    routeBase: "/ayurvedic-consultation",
    interaction: "unavailable",
    services: [],
  },
];
