export type ServiceSelectorOption = {
  slug: string;
  title: string;
  shortDescription: string;
};

export type ServiceDocument = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServiceCta = {
  heading: string;
  description: string;
  label: string;
  href: string;
};

export type ServicePageData = ServiceSelectorOption & {
  heroHeadline: string;
  heroDescription: string;
  heroImage: {
    src: string;
    alt: string;
  };
  overview: string;
  requiredDocuments: ServiceDocument[];
  process: ServiceProcessStep[];
  faq: ServiceFaqItem[];
  cta: ServiceCta;
};
