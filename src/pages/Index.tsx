import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import ArticlesSection from "@/components/ArticlesSection";
import MediaSection from "@/components/MediaSection";
import ReferencesSection from "@/components/ReferencesSection";
import ReferenceProjectsSection from "@/components/ReferenceProjectsSection";
import VisualBreakSection from "@/components/VisualBreakSection";
import ExpertsSection from "@/components/ExpertsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, { 
  niviOrganizationSchema, 
  geirVinsandSchema, 
  havardMoeSchema 
} from "@/components/SchemaMarkup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead />
      <SchemaMarkup schema={niviOrganizationSchema} />
      <SchemaMarkup schema={geirVinsandSchema} />
      <SchemaMarkup schema={havardMoeSchema} />
      
      <Header />
      <main id="main-content">
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <ArticlesSection />
        <MediaSection />
        <ReferencesSection />
        <ReferenceProjectsSection />
        <VisualBreakSection />
        <ExpertsSection />
        <ContactSection />
      </main>
      {/* Soft gradient transition to footer (mobile) */}
      <div className="h-8 bg-gradient-to-b from-background to-[#0E3B32] md:hidden" aria-hidden="true" />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
