import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BusinessModelsSection from "@/components/BusinessModelsSection";
import WhatWeProvideSection from "@/components/WhatWeProvideSection";
import GallerySection from "@/components/GallerySection";
import FounderSection from "@/components/FounderSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <BusinessModelsSection />
      <WhatWeProvideSection />
      <GallerySection />
      <FounderSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
