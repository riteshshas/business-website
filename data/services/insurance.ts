import type { ServicePageData } from "@/types/services";

export const insuranceServices: ServicePageData[] = [
  {
    slug: "life-insurance",
    title: "Life Insurance",
    shortDescription: "Financial protection for the people who depend on you.",
    heroHeadline: "Protect your family's financial future",
    heroDescription:
      "Get clear guidance to choose a life insurance policy that matches your family's needs and long-term goals.",
    heroImage: {
      src: "/consultant.jpg",
      alt: "Insurance consultant discussing coverage options",
    },
    overview:
      "Life insurance provides financial support to your family if something unexpected happens to you. We help you understand suitable coverage, premiums and policy terms before you decide.",
    requiredDocuments: [
      {
        title: "Identity proof",
        description:
          "Aadhaar card, PAN card or another government-issued photo ID.",
      },
      {
        title: "Address proof",
        description: "A current document confirming your residential address.",
      },
      {
        title: "Income proof",
        description:
          "Salary slips, bank statements or income tax returns, as applicable.",
      },
      {
        title: "Medical details",
        description:
          "Health information or medical reports requested by the insurer.",
      },
    ],
    process: [
      {
        title: "Understand your needs",
        description:
          "We discuss your family responsibilities, goals and preferred budget.",
      },
      {
        title: "Compare suitable plans",
        description:
          "We explain policy options, coverage and premium terms clearly.",
      },
      {
        title: "Complete the application",
        description:
          "We help you prepare the documents and submit the proposal.",
      },
      {
        title: "Receive policy support",
        description:
          "We remain available to help with policy questions after issuance.",
      },
    ],
    faq: [
      {
        question: "How much life cover do I need?",
        answer:
          "The right cover depends on your income, debts, family responsibilities and future goals. We help you assess these factors before choosing a plan.",
      },
      {
        question: "Can I buy life insurance without a medical test?",
        answer:
          "Some policies may not require a medical test, depending on age, coverage and insurer requirements. We will explain what applies to your application.",
      },
    ],
    cta: {
      heading: "Need help choosing life insurance?",
      description:
        "Speak with us for simple, practical guidance before you apply.",
      label: "Get Assistance",
      href: "/#contact",
    },
  },
  {
    slug: "health-insurance",
    title: "Health Insurance",
    shortDescription:
      "Coverage that helps manage medical expenses for you and your family.",
    heroHeadline: "Plan for medical expenses with confidence",
    heroDescription:
      "Choose health insurance with a clear understanding of coverage, waiting periods and cashless hospital options.",
    heroImage: {
      src: "/consultant.jpg",
      alt: "Consultant helping a family understand health insurance",
    },
    overview:
      "Health insurance can reduce the financial burden of planned and unexpected medical treatment. We help you compare plans based on your family's health needs and budget.",
    requiredDocuments: [
      {
        title: "Identity proof",
        description: "Government-issued photo identification.",
      },
      {
        title: "Address proof",
        description: "A current proof of residential address.",
      },
      {
        title: "Age proof",
        description: "Date-of-birth proof for every person to be covered.",
      },
      {
        title: "Medical history",
        description:
          "Existing health information, if requested by the insurer.",
      },
    ],
    process: [
      {
        title: "Discuss coverage needs",
        description:
          "We understand who needs cover and the level of protection you prefer.",
      },
      {
        title: "Review plan features",
        description:
          "We explain benefits, exclusions, waiting periods and network hospitals.",
      },
      {
        title: "Submit your proposal",
        description:
          "We help complete the application accurately with the required details.",
      },
      {
        title: "Get policy assistance",
        description:
          "We can guide you on policy documents and next steps after issuance.",
      },
    ],
    faq: [
      {
        question: "What is a waiting period?",
        answer:
          "It is the period before certain conditions or treatments become eligible for a claim. The duration differs by plan and condition.",
      },
      {
        question: "Can I include my parents in the policy?",
        answer:
          "Many insurers offer individual or family options for parents. Eligibility, premiums and benefits depend on age and medical history.",
      },
    ],
    cta: {
      heading: "Find health cover that fits your family",
      description: "Get help comparing suitable health insurance options.",
      label: "Get Assistance",
      href: "/#contact",
    },
  },
  {
    slug: "motor-insurance",
    title: "Motor Insurance",
    shortDescription:
      "Protection for your car or two-wheeler, on and off the road.",
    heroHeadline: "Keep your vehicle protected",
    heroDescription:
      "Get help choosing or renewing motor insurance with the coverage your vehicle needs.",
    heroImage: {
      src: "/consultant.jpg",
      alt: "Consultant explaining motor insurance coverage",
    },
    overview:
      "Motor insurance helps protect you from costs arising from accidents, theft and third-party liability. We make it easier to understand comprehensive and third-party coverage.",
    requiredDocuments: [
      {
        title: "Vehicle registration certificate",
        description: "A copy of the RC for the vehicle.",
      },
      {
        title: "Previous policy",
        description: "Your existing policy details, if this is a renewal.",
      },
      {
        title: "Identity proof",
        description: "Government-issued photo identification.",
      },
      {
        title: "Vehicle inspection details",
        description:
          "Photos or inspection information, when required for the policy.",
      },
    ],
    process: [
      {
        title: "Share vehicle details",
        description:
          "Tell us the vehicle type, registration and current policy status.",
      },
      {
        title: "Review coverage options",
        description:
          "We explain third-party, comprehensive and add-on coverage.",
      },
      {
        title: "Complete renewal or purchase",
        description: "We help submit the information needed by the insurer.",
      },
      {
        title: "Keep your policy ready",
        description:
          "Receive your policy details and guidance for future support.",
      },
    ],
    faq: [
      {
        question: "Is third-party motor insurance mandatory?",
        answer:
          "Yes. Third-party motor insurance is required by law for vehicles used on public roads in India.",
      },
      {
        question: "What is a no-claim bonus?",
        answer:
          "It is a renewal discount that may apply when no claim was made during the previous policy period, subject to policy terms.",
      },
    ],
    cta: {
      heading: "Ready to renew or protect your vehicle?",
      description: "We can help you understand your motor insurance options.",
      label: "Get Assistance",
      href: "/#contact",
    },
  },
  {
    slug: "term-insurance",
    title: "Term Insurance",
    shortDescription:
      "High life cover for a defined period at a focused premium.",
    heroHeadline: "Simple protection for the years that matter most",
    heroDescription:
      "Understand term insurance and choose a cover amount that supports your family's future.",
    heroImage: {
      src: "/consultant.jpg",
      alt: "Consultant discussing term insurance with a client",
    },
    overview:
      "Term insurance offers life cover for a chosen period and is designed to provide financial protection to your family. We help you compare options without confusing jargon.",
    requiredDocuments: [
      {
        title: "Identity proof",
        description: "Aadhaar card, PAN card or equivalent ID.",
      },
      {
        title: "Income proof",
        description: "Documents that help determine eligible cover.",
      },
      { title: "Address proof", description: "A current proof of residence." },
      {
        title: "Medical information",
        description: "Health declarations or reports required by the insurer.",
      },
    ],
    process: [
      {
        title: "Assess your cover",
        description: "We discuss income, liabilities and family goals.",
      },
      {
        title: "Select policy terms",
        description: "Choose an appropriate cover amount and policy duration.",
      },
      {
        title: "Prepare your application",
        description: "We guide you through documents and health declarations.",
      },
      {
        title: "Review policy details",
        description: "Understand the issued policy and how to keep it active.",
      },
    ],
    faq: [
      {
        question: "Does term insurance have a maturity benefit?",
        answer:
          "A standard term policy is primarily designed for protection and usually pays a benefit on death during the term. Return-of-premium variants may differ.",
      },
      {
        question: "When should I buy term insurance?",
        answer:
          "Buying earlier can often mean lower premiums, but the right timing depends on your responsibilities and financial situation.",
      },
    ],
    cta: {
      heading: "Secure meaningful term cover",
      description:
        "Talk to us about cover that supports the people you care about.",
      label: "Get Assistance",
      href: "/#contact",
    },
  },
  {
    slug: "child-plans",
    title: "Child Plans",
    shortDescription:
      "Build a financial foundation for your child's future milestones.",
    heroHeadline: "Prepare for your child's important goals",
    heroDescription:
      "Plan steadily for education and future needs with guidance that keeps your family's priorities in view.",
    heroImage: {
      src: "/consultant.jpg",
      alt: "Consultant helping parents plan for their child's future",
    },
    overview:
      "Child plans can help you prepare for expenses such as education and future milestones while providing protection against unexpected events. We help you understand the commitment and benefits involved.",
    requiredDocuments: [
      {
        title: "Parent's identity proof",
        description: "Government-issued photo identification.",
      },
      {
        title: "Child's age proof",
        description: "Birth certificate or other accepted proof.",
      },
      {
        title: "Address proof",
        description: "A current document confirming residential address.",
      },
      {
        title: "Income proof",
        description: "Income documents where required by the insurer.",
      },
    ],
    process: [
      {
        title: "Discuss future goals",
        description:
          "We understand the timeline and purpose of the savings goal.",
      },
      {
        title: "Explore suitable plans",
        description: "We explain features, premiums and the policy term.",
      },
      {
        title: "Complete documentation",
        description: "We help organise and submit the application.",
      },
      {
        title: "Track your plan",
        description:
          "Keep policy details handy and review them as your goals evolve.",
      },
    ],
    faq: [
      {
        question: "Can a child plan help with education costs?",
        answer:
          "Many child-focused plans are designed around long-term savings goals such as education. Benefits and payout timing depend on the selected plan.",
      },
      {
        question: "Who is the policyholder?",
        answer:
          "Usually a parent or guardian is the policyholder, while the child is named as the beneficiary, depending on the plan.",
      },
    ],
    cta: {
      heading: "Start planning for your child's future",
      description: "Get straightforward guidance on child plan options.",
      label: "Get Assistance",
      href: "/#contact",
    },
  },
  {
    slug: "pension-plans",
    title: "Pension Plans",
    shortDescription: "Create a more prepared and independent retirement.",
    heroHeadline: "Take practical steps toward retirement",
    heroDescription:
      "Understand pension planning options and create a plan that reflects the retirement lifestyle you want.",
    heroImage: {
      src: "/consultant.jpg",
      alt: "Consultant helping a client plan for retirement",
    },
    overview:
      "Pension plans can help create a regular income stream after retirement. We explain how contributions, vesting and payout options work so you can make an informed choice.",
    requiredDocuments: [
      {
        title: "Identity proof",
        description: "Government-issued photo identification.",
      },
      {
        title: "Address proof",
        description: "A current proof of residential address.",
      },
      {
        title: "Age proof",
        description: "A document confirming your date of birth.",
      },
      {
        title: "Income proof",
        description: "Income documents required for your chosen plan.",
      },
    ],
    process: [
      {
        title: "Understand retirement goals",
        description:
          "We discuss your preferred retirement age and income expectations.",
      },
      {
        title: "Review pension options",
        description:
          "We explain contributions, policy terms and payout choices.",
      },
      {
        title: "Submit your application",
        description: "We assist with documentation and the proposal process.",
      },
      {
        title: "Stay informed",
        description:
          "Keep your policy information accessible for future reviews.",
      },
    ],
    faq: [
      {
        question: "When should I start pension planning?",
        answer:
          "Starting earlier can give your plan more time to build, but a suitable approach can be considered at different life stages.",
      },
      {
        question: "Will a pension plan guarantee a fixed income?",
        answer:
          "Payouts depend on the type of plan and its terms. We will explain the applicable benefits and conditions before you choose.",
      },
    ],
    cta: {
      heading: "Plan your retirement with clarity",
      description:
        "Let us help you review pension plan options for your goals.",
      label: "Get Assistance",
      href: "/#contact",
    },
  },
];

export const insuranceServiceOptions = insuranceServices.map(
  ({ slug, title, shortDescription }) => ({ slug, title, shortDescription }),
);

export function getInsuranceService(slug: string) {
  return insuranceServices.find((service) => service.slug === slug);
}
