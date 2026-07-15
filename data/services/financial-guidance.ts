import type { ServicePageData } from "@/types/services";

const consultationImage = {
  src: "/consultant.jpg",
  alt: "Financial consultant discussing planning options with a client",
};

const createFinancialGuidanceService = (
  service: Omit<ServicePageData, "heroImage" | "cta">,
): ServicePageData => ({
  ...service,
  heroImage: consultationImage,
  cta: {
    heading: `Need guidance with ${service.title}?`,
    description:
      "Speak with us for clear, practical support before your next step.",
    label: "Get Assistance",
    href: "/#contact",
  },
});

export const financialGuidanceServices: ServicePageData[] = [
  createFinancialGuidanceService({
    slug: "investment-planning",
    title: "Investment Planning",
    shortDescription:
      "Plan investments around your goals, timeline and comfort level.",
    heroHeadline: "Make investment decisions with more clarity",
    heroDescription:
      "Understand investment options and create a practical approach for your short- and long-term goals.",
    overview:
      "Investment planning helps connect your savings with goals such as buying a home, building a reserve or preparing for the future. We help you understand your options in simple language.",
    requiredDocuments: [
      {
        title: "Identity proof",
        description: "PAN card, Aadhaar card or another accepted photo ID.",
      },
      {
        title: "Address proof",
        description: "A current document confirming your residential address.",
      },
      {
        title: "Bank details",
        description: "Bank account details for relevant investment processes.",
      },
      {
        title: "Income details",
        description:
          "Basic income information to help understand your planning needs.",
      },
    ],
    process: [
      {
        title: "Discuss your goals",
        description:
          "We understand what you are planning for and your preferred timeline.",
      },
      {
        title: "Review your current position",
        description:
          "Discuss existing savings, investments and financial commitments.",
      },
      {
        title: "Understand suitable options",
        description:
          "We explain relevant options and their features in clear terms.",
      },
      {
        title: "Plan your next step",
        description: "Leave with a practical direction for moving forward.",
      },
    ],
    faq: [
      {
        question: "Do I need a large amount to start investing?",
        answer:
          "Not always. Many investment approaches can begin with a modest amount, depending on the option and your financial situation.",
      },
      {
        question: "How do I choose an investment timeline?",
        answer:
          "Your timeline should be based on when you expect to need the money and the purpose of the goal.",
      },
    ],
  }),
  createFinancialGuidanceService({
    slug: "tax-planning",
    title: "Tax Planning",
    shortDescription:
      "Understand tax-saving options as part of your wider financial plan.",
    heroHeadline: "Plan your tax-saving approach thoughtfully",
    heroDescription:
      "Explore tax-saving options that can fit your income, goals and applicable financial commitments.",
    overview:
      "Tax planning can help you understand available tax-saving investment and expense options. We provide practical guidance to help you prepare before consulting a qualified tax professional where needed.",
    requiredDocuments: [
      {
        title: "PAN card",
        description: "PAN details for tax-related planning.",
      },
      {
        title: "Income details",
        description: "Salary, business or other income information.",
      },
      {
        title: "Investment details",
        description: "Information about your current eligible investments.",
      },
      {
        title: "Tax documents",
        description:
          "Previous returns, Form 16 or related documents, if available.",
      },
    ],
    process: [
      {
        title: "Review your income",
        description:
          "Understand the sources of income relevant to your planning.",
      },
      {
        title: "Check existing commitments",
        description:
          "Review current investments, insurance and eligible expenses.",
      },
      {
        title: "Explore available options",
        description:
          "Discuss options that may support your overall tax planning.",
      },
      {
        title: "Prepare for professional filing",
        description:
          "Keep the relevant information organised for filing or specialist advice.",
      },
    ],
    faq: [
      {
        question: "Is tax planning the same as filing a return?",
        answer:
          "No. Tax planning focuses on preparing and understanding options, while return filing is the formal submission of tax information.",
      },
      {
        question: "When should I start tax planning?",
        answer:
          "Planning earlier in the financial year can give you more time to review suitable options.",
      },
    ],
  }),
  createFinancialGuidanceService({
    slug: "retirement-planning",
    title: "Retirement Planning",
    shortDescription:
      "Build a more prepared plan for income and goals after retirement.",
    heroHeadline: "Prepare for retirement with a clear plan",
    heroDescription:
      "Understand how your savings, expected expenses and timeline can shape your retirement preparation.",
    overview:
      "Retirement planning helps you think ahead about expenses, income needs and financial independence after work. We help you start the conversation with practical, easy-to-understand guidance.",
    requiredDocuments: [
      {
        title: "Identity proof",
        description: "PAN card, Aadhaar card or another accepted photo ID.",
      },
      {
        title: "Income details",
        description:
          "Current income and expected retirement income information.",
      },
      {
        title: "Savings details",
        description:
          "Information about existing savings, investments or pension plans.",
      },
      {
        title: "Expense overview",
        description:
          "A basic picture of current and anticipated future expenses.",
      },
    ],
    process: [
      {
        title: "Discuss your retirement goals",
        description:
          "Consider your preferred retirement age and lifestyle needs.",
      },
      {
        title: "Review savings and income",
        description:
          "Understand your current financial position and potential income sources.",
      },
      {
        title: "Identify planning priorities",
        description:
          "Discuss areas such as healthcare, regular income and long-term goals.",
      },
      {
        title: "Create next steps",
        description:
          "Leave with a clearer direction for your retirement preparation.",
      },
    ],
    faq: [
      {
        question: "When should I begin retirement planning?",
        answer:
          "Starting earlier can provide more time to prepare, but meaningful planning can begin at any stage.",
      },
      {
        question: "How much money will I need after retirement?",
        answer:
          "The amount depends on your lifestyle, health needs, location and expected sources of income.",
      },
    ],
  }),
  createFinancialGuidanceService({
    slug: "child-education-planning",
    title: "Child Education Planning",
    shortDescription:
      "Prepare steadily for your child's future education costs.",
    heroHeadline: "Plan confidently for your child's education",
    heroDescription:
      "Understand how regular savings and a clear timeline can support future education goals.",
    overview:
      "Education planning helps families prepare for future school, college or professional course expenses. We help you think through the goal amount, timeline and a consistent saving approach.",
    requiredDocuments: [
      {
        title: "Parent's identity proof",
        description: "PAN card, Aadhaar card or another accepted photo ID.",
      },
      {
        title: "Child's age proof",
        description:
          "Birth certificate or another accepted proof of date of birth.",
      },
      {
        title: "Income details",
        description:
          "Basic income information to understand your planning capacity.",
      },
      {
        title: "Existing savings details",
        description:
          "Information on any funds already set aside for education.",
      },
    ],
    process: [
      {
        title: "Define the education goal",
        description: "Discuss the likely course, location and time horizon.",
      },
      {
        title: "Estimate future needs",
        description:
          "Consider the expected cost and the savings gap to be addressed.",
      },
      {
        title: "Explore a saving approach",
        description:
          "Understand options for building savings steadily over time.",
      },
      {
        title: "Review as goals evolve",
        description:
          "Revisit the plan as your child's needs and timeline change.",
      },
    ],
    faq: [
      {
        question: "How early should I start saving for education?",
        answer:
          "Beginning early can provide more time for regular savings, but a plan can be adjusted at different stages.",
      },
      {
        question: "Can the plan change if my child's goals change?",
        answer:
          "Yes. Reviewing the plan periodically helps keep it aligned with changing education goals.",
      },
    ],
  }),
  createFinancialGuidanceService({
    slug: "wealth-management",
    title: "Wealth Management",
    shortDescription:
      "Organise your financial priorities for long-term wealth building.",
    heroHeadline: "Bring your financial goals into one clear view",
    heroDescription:
      "Get practical guidance to organise savings, investments and long-term financial priorities.",
    overview:
      "Wealth management is about taking a coordinated view of your financial goals, savings and investments. We help you organise the conversation so you can make more informed decisions over time.",
    requiredDocuments: [
      {
        title: "Identity proof",
        description: "PAN card, Aadhaar card or another accepted photo ID.",
      },
      {
        title: "Income details",
        description: "Information about current income sources.",
      },
      {
        title: "Asset details",
        description:
          "A summary of savings, investments or property, if relevant.",
      },
      {
        title: "Liability details",
        description:
          "Information about loans or regular financial commitments.",
      },
    ],
    process: [
      {
        title: "Understand your priorities",
        description:
          "Discuss the goals that matter most to you and your family.",
      },
      {
        title: "Review your financial picture",
        description:
          "Organise income, savings, assets and existing commitments.",
      },
      {
        title: "Identify planning areas",
        description:
          "Consider opportunities to improve structure and goal alignment.",
      },
      {
        title: "Set practical next steps",
        description:
          "Create a clear starting point for future financial decisions.",
      },
    ],
    faq: [
      {
        question: "Is wealth management only for high-income families?",
        answer:
          "No. The core idea is to organise financial goals and resources, which can be useful at many income levels.",
      },
      {
        question: "What information should I bring to a discussion?",
        answer:
          "A basic overview of income, savings, investments, loans and your goals is a useful starting point.",
      },
    ],
  }),
  createFinancialGuidanceService({
    slug: "sip-mutual-fund-guidance",
    title: "SIP & Mutual Fund Guidance",
    shortDescription:
      "Understand systematic investing and mutual fund basics before you begin.",
    heroHeadline: "Understand SIPs and mutual funds with confidence",
    heroDescription:
      "Get clear, simple guidance on systematic investment plans and mutual fund concepts.",
    overview:
      "A SIP is a way to invest a fixed amount regularly in a mutual fund. We help you understand how regular investing works, the information you need and how it can relate to your goals.",
    requiredDocuments: [
      {
        title: "PAN card",
        description:
          "PAN is generally required for investment-related processes.",
      },
      {
        title: "Identity proof",
        description: "Aadhaar card or another accepted photo ID.",
      },
      {
        title: "Bank details",
        description: "Bank account details for investment and payment setup.",
      },
      {
        title: "Address proof",
        description: "A current proof of your residential address.",
      },
    ],
    process: [
      {
        title: "Discuss your goal",
        description:
          "Understand what you are saving for and your preferred timeline.",
      },
      {
        title: "Explain the basics",
        description:
          "Learn how SIPs, mutual funds and regular contributions work.",
      },
      {
        title: "Review required details",
        description:
          "Keep the documents and bank information ready for the process.",
      },
      {
        title: "Decide your next step",
        description:
          "Move forward with a clearer understanding of your options.",
      },
    ],
    faq: [
      {
        question: "What is a SIP?",
        answer:
          "A systematic investment plan allows you to invest a fixed amount at regular intervals in a mutual fund.",
      },
      {
        question: "Are mutual fund returns guaranteed?",
        answer:
          "No. Mutual fund values can rise or fall with market conditions, and returns are not guaranteed.",
      },
    ],
  }),
];

export const financialGuidanceServiceOptions = financialGuidanceServices.map(
  ({ slug, title, shortDescription }) => ({ slug, title, shortDescription }),
);

export function getFinancialGuidanceService(slug: string) {
  return financialGuidanceServices.find((service) => service.slug === slug);
}
