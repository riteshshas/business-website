import type { ServicePageData } from "@/types/services";

const consultationImage = {
  src: "/consultant.jpg",
  alt: "Ayurvedic consultant discussing wellness guidance with a client",
};

const preparationItems = [
  {
    title: "Previous prescriptions",
    description: "Bring them if available so your current care can be understood.",
  },
  {
    title: "Medical reports",
    description: "Share relevant reports you already have, if applicable.",
  },
  {
    title: "Current medications",
    description: "A list or photographs of medicines and supplements you use.",
  },
  {
    title: "Health notes",
    description: "A brief note of your concerns, routine and any questions you have.",
  },
];

const createAyurvedicConsultationService = (
  service: Omit<ServicePageData, "heroImage" | "cta">,
): ServicePageData => ({
  ...service,
  heroImage: consultationImage,
  cta: {
    heading: `Ready to discuss ${service.title}?`,
    description: "Book a consultation for thoughtful, personalised Ayurvedic guidance.",
    label: "Get Assistance",
    href: "/#contact",
  },
});

export const ayurvedicConsultationServices: ServicePageData[] = [
  createAyurvedicConsultationService({
    slug: "personal-health-consultation",
    title: "Personal Health Consultation",
    shortDescription: "A personalised discussion of your health concerns and daily routine.",
    heroHeadline: "Start with a thoughtful health conversation",
    heroDescription: "Discuss your concerns, routine and wellness priorities in a personalised Ayurvedic consultation.",
    overview: "A personal health consultation creates space to understand your current concerns and everyday habits. Guidance is tailored to your situation and can complement appropriate medical care.",
    requiredDocuments: preparationItems,
    process: [{ title: "Book your consultation", description: "Choose a convenient time to speak with the consultant." }, { title: "Discuss your concerns", description: "Share the health or wellness concerns you would like to address." }, { title: "Review your history", description: "Discuss relevant routine, history, medications and reports if available." }, { title: "Receive personalised guidance", description: "Understand suitable Ayurvedic lifestyle and wellness recommendations." }, { title: "Follow up if needed", description: "Discuss progress and next steps when appropriate." }],
    faq: [{ question: "What should I bring to the consultation?", answer: "Bring any relevant prescriptions, reports and a list of current medications if you have them. A short note of your concerns is also helpful." }, { question: "Can Ayurvedic guidance replace medical treatment?", answer: "No. Continue prescribed medical care and consult a qualified medical professional for diagnosis, treatment or urgent concerns." }],
  }),
  createAyurvedicConsultationService({
    slug: "digestive-health-guidance",
    title: "Digestive Health Guidance",
    shortDescription: "Explore everyday Ayurvedic habits that support digestive wellness.",
    heroHeadline: "Understand your digestive wellness routine",
    heroDescription: "Discuss eating habits, routine and digestive concerns to receive practical Ayurvedic wellness guidance.",
    overview: "Digestive wellness can be influenced by meals, sleep, stress and daily routine. This consultation focuses on understanding your habits and suggesting appropriate Ayurvedic lifestyle practices.",
    requiredDocuments: preparationItems,
    process: [{ title: "Book your consultation", description: "Arrange a time to discuss your digestive wellness concerns." }, { title: "Share your routine", description: "Discuss meal timing, food preferences, sleep and daily habits." }, { title: "Review relevant history", description: "Share medications or medical reports where relevant and available." }, { title: "Receive wellness guidance", description: "Understand practical routine and dietary guidance suited to your discussion." }, { title: "Follow up if needed", description: "Review how the recommendations fit into your routine." }],
    faq: [{ question: "Will I receive a diagnosis?", answer: "The consultation provides Ayurvedic wellness guidance. For diagnosis, persistent symptoms or urgent concerns, consult a qualified medical professional." }, { question: "Do I need medical reports?", answer: "No. Reports are only useful if you already have relevant ones and would like them considered during the discussion." }],
  }),
  createAyurvedicConsultationService({
    slug: "weight-management-guidance",
    title: "Weight Management Guidance",
    shortDescription: "Build sustainable daily habits that support your wellness goals.",
    heroHeadline: "Take a balanced approach to weight management",
    heroDescription: "Discuss your routine and wellness goals to explore practical Ayurvedic lifestyle guidance.",
    overview: "Weight management is often connected to food habits, activity, sleep and consistency. This consultation focuses on realistic routines and supportive Ayurvedic wellness practices rather than quick fixes.",
    requiredDocuments: preparationItems,
    process: [{ title: "Book your consultation", description: "Set a time to discuss your wellness and routine goals." }, { title: "Discuss current habits", description: "Share information about meals, activity, sleep and daily schedule." }, { title: "Review relevant history", description: "Discuss current medications and relevant reports if available." }, { title: "Receive practical guidance", description: "Explore sustainable routine and lifestyle recommendations." }, { title: "Follow up if needed", description: "Review progress and adapt habits thoughtfully over time." }],
    faq: [{ question: "Will the consultation promise rapid weight loss?", answer: "No. Guidance focuses on sustainable habits and overall wellness, not guaranteed or rapid results." }, { question: "Can I continue my current medical care?", answer: "Yes. Continue prescribed care and discuss any medical concerns with your qualified healthcare professional." }],
  }),
  createAyurvedicConsultationService({
    slug: "joint-bone-care",
    title: "Joint & Bone Care",
    shortDescription: "Discuss supportive wellness habits for comfort, mobility and daily routine.",
    heroHeadline: "Support comfortable movement in daily life",
    heroDescription: "Explore Ayurvedic lifestyle guidance that can support everyday mobility and joint wellness.",
    overview: "Joint and bone wellness can be affected by activity, posture, routine and overall health. This consultation discusses supportive lifestyle practices while recognising that persistent pain needs medical assessment.",
    requiredDocuments: preparationItems,
    process: [{ title: "Book your consultation", description: "Arrange a time to discuss your comfort and mobility concerns." }, { title: "Discuss daily movement", description: "Share your routine, activity level and the situations that concern you." }, { title: "Review relevant information", description: "Discuss medications, past guidance or reports if available." }, { title: "Receive supportive guidance", description: "Explore appropriate lifestyle and wellness practices for daily routine." }, { title: "Follow up if needed", description: "Review your experience and discuss suitable next steps." }],
    faq: [{ question: "Can this consultation treat an injury?", answer: "No. Injuries, severe pain, swelling or loss of movement need prompt assessment by a qualified medical professional." }, { question: "Should I bring imaging or reports?", answer: "Bring relevant reports if you already have them. They are not required for every consultation." }],
  }),
  createAyurvedicConsultationService({
    slug: "immunity-wellness",
    title: "Immunity & Wellness",
    shortDescription: "Explore daily routines that support general wellbeing and resilience.",
    heroHeadline: "Build a steadier everyday wellness routine",
    heroDescription: "Discuss sleep, food, activity and routine to explore Ayurvedic approaches to general wellbeing.",
    overview: "General wellness is supported by consistent habits around rest, nourishment, movement and stress management. This consultation offers thoughtful Ayurvedic guidance for your daily routine without making claims about preventing illness.",
    requiredDocuments: preparationItems,
    process: [{ title: "Book your consultation", description: "Choose a suitable time for your wellness discussion." }, { title: "Discuss your routine", description: "Share your current sleep, food, activity and stress patterns." }, { title: "Review relevant history", description: "Discuss medications and existing medical guidance where relevant." }, { title: "Receive wellness guidance", description: "Explore practical Ayurvedic routine recommendations." }, { title: "Follow up if needed", description: "Revisit your routine and discuss how it is working for you." }],
    faq: [{ question: "Can Ayurvedic wellness guidance prevent illness?", answer: "No approach can guarantee prevention. This consultation focuses on supportive daily wellness habits." }, { question: "Are reports required?", answer: "No. Bring reports only if they are relevant and already available." }],
  }),
  createAyurvedicConsultationService({
    slug: "lifestyle-preventive-care",
    title: "Lifestyle & Preventive Care",
    shortDescription: "Create a more mindful routine for long-term everyday wellbeing.",
    heroHeadline: "Make your everyday routine work better for you",
    heroDescription: "Discuss your lifestyle and wellbeing priorities to develop practical, preventive Ayurvedic habits.",
    overview: "Lifestyle and preventive care focuses on the everyday choices that support general wellbeing over time. The consultation helps you identify manageable changes around sleep, food, movement and self-care.",
    requiredDocuments: preparationItems,
    process: [{ title: "Book your consultation", description: "Arrange a convenient time to discuss your routine." }, { title: "Explore your lifestyle", description: "Talk through sleep, meals, work patterns, activity and stress." }, { title: "Review your priorities", description: "Identify the habits you would most like to strengthen." }, { title: "Receive personalised guidance", description: "Explore practical Ayurvedic suggestions for your daily routine." }, { title: "Follow up if needed", description: "Review progress and refine habits at a comfortable pace." }],
    faq: [{ question: "Is preventive care a substitute for health check-ups?", answer: "No. Continue regular health check-ups and seek qualified medical advice for health concerns." }, { question: "How soon will I see changes?", answer: "Experiences differ. The focus is on consistent, manageable habits rather than promises about outcomes." }],
  }),
];

export const ayurvedicConsultationServiceOptions = ayurvedicConsultationServices.map(
  ({ slug, title, shortDescription }) => ({ slug, title, shortDescription }),
);

export function getAyurvedicConsultationService(slug: string) {
  return ayurvedicConsultationServices.find((service) => service.slug === slug);
}
