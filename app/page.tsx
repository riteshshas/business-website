import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import MeetConsultant from "@/components/home/MeetConsultant";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <MeetConsultant />
    </main>
  );
}


