import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GraceName from "@/components/GraceName";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Maintenance from "@/components/Maintenance";
import Trust from "@/components/Trust";
import DemoScheduler from "@/components/DemoScheduler";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <GraceName />
      <Features />
      <HowItWorks />
      <Maintenance />
      <Trust />
      <DemoScheduler />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
