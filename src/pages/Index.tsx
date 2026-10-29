import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurModel from "@/components/OurModel";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import DemoScheduler from "@/components/DemoScheduler";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <OurModel />
      <Features />
      <HowItWorks />
      <DemoScheduler />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
