import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import ThreePillars from "@/components/ThreePillars";
import BrandStatement from "@/components/BrandStatement";
import ForIndividuals from "@/components/ForIndividuals";
import ForAthletes from "@/components/ForAthletes";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050507]">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <ThreePillars />
      <BrandStatement />
      <ForIndividuals />
      <ForAthletes />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
