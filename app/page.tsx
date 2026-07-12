import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import MeetConsultant from "@/components/home/MeetConsultant";
import Faq from "@/components/home/Faq";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <MeetConsultant />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}


