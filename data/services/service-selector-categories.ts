import { documentationServiceOptions } from "@/data/services/documentation";
import { insuranceServiceOptions } from "@/data/services/insurance";
import type { ServiceSelectorOption } from "@/types/services";

export type ServiceSelectorCategory = {
  title: string;
  description: string;
  routeBase: string;
  services: ServiceSelectorOption[];
};

export const serviceSelectorCategories: ServiceSelectorCategory[] = [
  {
    title: "Insurance",
    description: "Select the type of insurance support you need.",
    routeBase: "/insurance",
    services: insuranceServiceOptions,
  },
  {
    title: "Documentation",
    description: "Select the documentation service you need help with.",
    routeBase: "/documentation",
    services: documentationServiceOptions,
  },
];
