import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import PublikasjonAutoritet from "@/components/PublikasjonAutoritet";
import FaktaErfaringSection from "@/components/FaktaErfaringSection";
import ServicesSection from "@/components/ServicesSection";
import ArticlesSection from "@/components/ArticlesSection";
import MediaSection from "@/components/MediaSection";
import ReferencesSection from "@/components/ReferencesSection";
import ReferenceProjectsSection from "@/components/ReferenceProjectsSection";

import ExpertsSection from "@/components/ExpertsSection";
import ContactSection from "@/components/ContactSection";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, { 
  geirVinsandSchema, 
  havardMoeSchema 
} from "@/components/SchemaMarkup";

const Index = () => {

  return (
    <div className="min-h-screen">
      <SEOHead />
      
      <SchemaMarkup schema={geirVinsandSchema} />
      <SchemaMarkup schema={havardMoeSchema} />
      
      <main id="main-content">
        <HeroSection />
        <TrustStrip />
        <PublikasjonAutoritet />
        <FaktaErfaringSection />
        <ServicesSection />
        <ReferenceProjectsSection />
        <MediaSection />
        <ReferencesSection />
        <ArticlesSection />

        <ExpertsSection />
        <ContactSection />
      </main>
      <div className="h-10 md:hidden bg-gradient-to-b from-background to-[#0E3B32]" aria-hidden="true" />
      <div style={{ height: '32px', backgroundColor: 'hsl(var(--background))' }} className="hidden md:block" aria-hidden="true" />
    </div>
  );
};

export default Index;
