import type { ServicePageData } from "@/types/services";

const consultationImage = {
  src: "/consultant.jpg",
  alt: "Consultant assisting a customer with documentation services",
};

const createDocumentationService = (
  service: Omit<ServicePageData, "heroImage" | "cta">,
): ServicePageData => ({
  ...service,
  heroImage: consultationImage,
  cta: {
    heading: `Need help with ${service.title}?`,
    description: "Get clear guidance on the documents and next steps.",
    label: "Get Assistance",
    href: "/#contact",
  },
});

export const documentationServices: ServicePageData[] = [
  createDocumentationService({
    slug: "passport",
    title: "Passport",
    shortDescription: "Guidance for a new passport, renewal or reissue.",
    heroHeadline: "Make your passport application easier",
    heroDescription:
      "Get organised support for your passport application, renewal or reissue process.",
    overview:
      "A passport is an essential travel identity document. We help you understand the application requirements, organise documents and prepare for the next steps.",
    requiredDocuments: [
      {
        title: "Identity proof",
        description: "Aadhaar card, PAN card or another accepted photo ID.",
      },
      {
        title: "Address proof",
        description: "A current document showing your residential address.",
      },
      {
        title: "Date of birth proof",
        description:
          "Birth certificate, school certificate or other accepted proof.",
      },
      {
        title: "Photographs",
        description:
          "Recent passport-size photographs, if required for your application.",
      },
    ],
    process: [
      {
        title: "Understand your requirement",
        description:
          "We confirm whether you need a new passport, renewal or reissue.",
      },
      {
        title: "Prepare documents",
        description: "We help you check and organise the required documents.",
      },
      {
        title: "Complete application details",
        description:
          "We guide you through the information required for submission.",
      },
      {
        title: "Prepare for the next step",
        description:
          "Receive guidance on appointment, verification and status tracking.",
      },
    ],
    faq: [
      {
        question: "Can I renew an expired passport?",
        answer:
          "Yes, an expired passport can generally be reissued. The documents and process depend on your circumstances.",
      },
      {
        question: "Do I need to visit an office?",
        answer:
          "Most applications require an appointment at a Passport Seva Kendra or related centre for verification and biometrics.",
      },
    ],
  }),
  createDocumentationService({
    slug: "pan-card",
    title: "PAN Card",
    shortDescription:
      "Support for new PAN applications, corrections and updates.",
    heroHeadline: "Apply for or update your PAN card",
    heroDescription:
      "Get simple help with PAN card applications, corrections and document preparation.",
    overview:
      "A PAN card is commonly needed for tax, banking and financial transactions. We help you understand the application or correction process and keep your documents in order.",
    requiredDocuments: [
      {
        title: "Identity proof",
        description:
          "Aadhaar card, voter ID or another accepted identity document.",
      },
      {
        title: "Address proof",
        description: "A current proof of your address.",
      },
      {
        title: "Date of birth proof",
        description: "A document confirming your date of birth.",
      },
      {
        title: "Existing PAN",
        description: "Your PAN details or card, when requesting a correction.",
      },
    ],
    process: [
      {
        title: "Confirm your request",
        description:
          "We identify whether you need a new PAN, correction or duplicate card.",
      },
      {
        title: "Review documents",
        description: "We check the proofs needed for your application.",
      },
      {
        title: "Prepare application details",
        description: "We assist with accurate information for submission.",
      },
      {
        title: "Track the application",
        description: "Keep the acknowledgement details for status updates.",
      },
    ],
    faq: [
      {
        question: "Can I correct details on my PAN card?",
        answer:
          "Yes. Corrections such as name, date of birth or address can be requested with supporting documents.",
      },
      {
        question: "Is Aadhaar required for a PAN application?",
        answer:
          "Aadhaar is commonly used for identity verification. Requirements can vary based on the application type.",
      },
    ],
  }),
  createDocumentationService({
    slug: "driving-licence",
    title: "Driving Licence",
    shortDescription:
      "Guidance for learner's licences, renewals and licence updates.",
    heroHeadline: "Get help with driving licence services",
    heroDescription:
      "Understand the documents and steps for a learner's licence, renewal or licence update.",
    overview:
      "A driving licence is the official authorisation to drive a vehicle. We help you organise your application information and understand the applicable process.",
    requiredDocuments: [
      {
        title: "Identity proof",
        description: "Aadhaar card or another accepted photo ID.",
      },
      {
        title: "Address proof",
        description: "A current document confirming your address.",
      },
      {
        title: "Age proof",
        description: "A document showing your date of birth.",
      },
      {
        title: "Existing licence",
        description:
          "Your current licence, when applying for renewal or an update.",
      },
    ],
    process: [
      {
        title: "Identify the service",
        description:
          "We confirm whether you need a learner's licence, renewal or update.",
      },
      {
        title: "Check eligibility",
        description:
          "Review the relevant age, vehicle category and document requirements.",
      },
      {
        title: "Prepare application details",
        description: "We help organise the details required for submission.",
      },
      {
        title: "Plan the next step",
        description:
          "Receive guidance on appointments, tests or verification, where applicable.",
      },
    ],
    faq: [
      {
        question: "Can I renew an expired driving licence?",
        answer:
          "Yes, renewal may be possible. The process can depend on how long the licence has been expired.",
      },
      {
        question: "Is a learner's licence required first?",
        answer:
          "For a new driving licence, a learner's licence and the applicable test are generally required.",
      },
    ],
  }),
  createDocumentationService({
    slug: "aadhaar-services",
    title: "Aadhaar Services",
    shortDescription:
      "Assistance with Aadhaar updates, corrections and related guidance.",
    heroHeadline: "Keep your Aadhaar details up to date",
    heroDescription:
      "Get practical guidance for Aadhaar corrections and update requests.",
    overview:
      "Keeping Aadhaar information accurate helps avoid issues with identity verification and linked services. We help you understand which documents support the update you need.",
    requiredDocuments: [
      {
        title: "Existing Aadhaar",
        description: "Your Aadhaar number or card details.",
      },
      {
        title: "Supporting proof",
        description: "Documents supporting the detail you want to update.",
      },
      {
        title: "Identity proof",
        description: "Accepted photo identification, when required.",
      },
      {
        title: "Address proof",
        description: "A current address document for address updates.",
      },
    ],
    process: [
      {
        title: "Review the requested update",
        description:
          "We identify which Aadhaar detail needs to be corrected or changed.",
      },
      {
        title: "Check supporting proof",
        description:
          "We help verify that the available document supports the update.",
      },
      {
        title: "Prepare for submission",
        description:
          "We explain the online or centre-based steps that may apply.",
      },
      {
        title: "Keep acknowledgement details",
        description: "Save the update request details for status tracking.",
      },
    ],
    faq: [
      {
        question: "Which Aadhaar details can be updated?",
        answer:
          "Depending on UIDAI rules, updates may include address, name, date of birth, mobile number and biometric details.",
      },
      {
        question: "Do all updates need a visit to a centre?",
        answer:
          "Some updates can be initiated online, while others require a visit to an Aadhaar enrolment or update centre.",
      },
    ],
  }),
  createDocumentationService({
    slug: "gst-registration",
    title: "GST Registration",
    shortDescription:
      "Support for understanding and preparing a GST registration application.",
    heroHeadline: "Start your GST registration with clarity",
    heroDescription:
      "Get organised guidance on the documents and information needed for GST registration.",
    overview:
      "GST registration may be required for businesses based on their turnover, business type or transactions. We help you prepare the essential details before you begin the official application.",
    requiredDocuments: [
      {
        title: "PAN card",
        description: "PAN details for the business owner or entity.",
      },
      {
        title: "Business address proof",
        description: "Proof of the principal place of business.",
      },
      {
        title: "Bank details",
        description: "Bank account information or supporting proof.",
      },
      {
        title: "Business constitution proof",
        description:
          "Relevant registration or formation documents, as applicable.",
      },
    ],
    process: [
      {
        title: "Understand your requirement",
        description: "We discuss your business activity and registration need.",
      },
      {
        title: "Organise business details",
        description:
          "Prepare the required identity, address and bank information.",
      },
      {
        title: "Review application information",
        description:
          "We help ensure your details are complete before submission.",
      },
      {
        title: "Follow the official process",
        description:
          "Receive guidance on verification and next steps from the GST portal.",
      },
    ],
    faq: [
      {
        question: "Who needs GST registration?",
        answer:
          "Registration requirements depend on turnover, state, business activity and other legal criteria. Consult a qualified tax professional for advice specific to your business.",
      },
      {
        question: "Can a sole proprietor apply for GST?",
        answer:
          "Yes, a sole proprietor may apply using their business and personal PAN-related details, subject to eligibility.",
      },
    ],
  }),
  createDocumentationService({
    slug: "shop-act-registration",
    title: "Shop Act Registration",
    shortDescription:
      "Guidance for Shop and Establishment registration requirements.",
    heroHeadline: "Set up your business documentation with confidence",
    heroDescription:
      "Understand the information and documents commonly needed for Shop Act registration.",
    overview:
      "Shop and Establishment registration helps document a business establishment under applicable local rules. We help you prepare the essential business information for the official process.",
    requiredDocuments: [
      {
        title: "Identity proof",
        description:
          "Photo identification for the proprietor, partners or authorised person.",
      },
      {
        title: "Business address proof",
        description: "Proof for the business premises.",
      },
      {
        title: "Business details",
        description:
          "Information about the nature and commencement of the business.",
      },
      {
        title: "Photographs",
        description:
          "Photographs of the applicant or establishment, if requested.",
      },
    ],
    process: [
      {
        title: "Review business details",
        description:
          "We understand the type and location of your establishment.",
      },
      {
        title: "Organise documents",
        description:
          "Prepare identity and premises proofs for the application.",
      },
      {
        title: "Complete application information",
        description: "We help you prepare the required registration details.",
      },
      {
        title: "Understand the next step",
        description:
          "Receive guidance on submission and local authority follow-up.",
      },
    ],
    faq: [
      {
        question: "Does every business need Shop Act registration?",
        answer:
          "Requirements depend on the business type and applicable local regulations. We can help you understand the documentation process.",
      },
      {
        question: "Can I register a home-based business?",
        answer:
          "Eligibility and documentation can vary by local rules and the nature of the activity.",
      },
    ],
  }),
  createDocumentationService({
    slug: "income-certificate",
    title: "Income Certificate",
    shortDescription:
      "Help preparing documents for an income certificate application.",
    heroHeadline: "Prepare your income certificate application",
    heroDescription:
      "Get clear support in organising the documents typically needed for an income certificate.",
    overview:
      "An income certificate is used for various government schemes, education applications and other official purposes. We help you prepare your supporting documents before applying through the appropriate authority.",
    requiredDocuments: [
      {
        title: "Identity proof",
        description: "Aadhaar card or other accepted photo ID.",
      },
      {
        title: "Address proof",
        description: "A current residential address proof.",
      },
      {
        title: "Income proof",
        description: "Salary, pension, business or other income documents.",
      },
      {
        title: "Photograph",
        description: "A recent photograph, if required by the authority.",
      },
    ],
    process: [
      {
        title: "Confirm the purpose",
        description:
          "We understand why the certificate is needed and which authority applies.",
      },
      {
        title: "Collect income details",
        description: "Organise the relevant income and identity proofs.",
      },
      {
        title: "Prepare application information",
        description: "We help you check that the details are complete.",
      },
      {
        title: "Submit to the authority",
        description:
          "Follow the official portal or local office process for the certificate.",
      },
    ],
    faq: [
      {
        question: "What is an income certificate used for?",
        answer:
          "It may be used for government schemes, scholarships, fee concessions and other official applications.",
      },
      {
        question: "How long is an income certificate valid?",
        answer:
          "Validity can vary by issuing authority and purpose. Check the requirement for your specific application.",
      },
    ],
  }),
  createDocumentationService({
    slug: "domicile-certificate",
    title: "Domicile Certificate",
    shortDescription:
      "Guidance for preparing a domicile certificate application.",
    heroHeadline: "Prepare your domicile certificate request",
    heroDescription:
      "Get practical support to organise the documents needed for a domicile certificate application.",
    overview:
      "A domicile certificate establishes a person's residence connection with a state or region and may be needed for education, employment or government services. We help you prepare the relevant documentation.",
    requiredDocuments: [
      {
        title: "Identity proof",
        description: "Aadhaar card, voter ID or other accepted photo ID.",
      },
      {
        title: "Address proof",
        description:
          "Documents supporting your residence in the relevant state or area.",
      },
      {
        title: "Residence history proof",
        description: "School, utility or other documents, where requested.",
      },
      {
        title: "Photograph",
        description: "A recent photograph, if required by the authority.",
      },
    ],
    process: [
      {
        title: "Understand the requirement",
        description: "We confirm the purpose and relevant issuing authority.",
      },
      {
        title: "Review residence proof",
        description: "Organise documents that support your domicile claim.",
      },
      {
        title: "Prepare application details",
        description:
          "We help you check the information before official submission.",
      },
      {
        title: "Follow the authority process",
        description:
          "Receive guidance on the portal, office or verification steps.",
      },
    ],
    faq: [
      {
        question: "Why might I need a domicile certificate?",
        answer:
          "It may be requested for education admissions, government schemes, employment or other state-related services.",
      },
      {
        question: "What proof of residence is accepted?",
        answer:
          "Accepted documents vary by authority. Common examples can include Aadhaar, voter ID, utility bills or school records.",
      },
    ],
  }),
];

export const documentationServiceOptions = documentationServices.map(
  ({ slug, title, shortDescription }) => ({ slug, title, shortDescription }),
);

export function getDocumentationService(slug: string) {
  return documentationServices.find((service) => service.slug === slug);
}
