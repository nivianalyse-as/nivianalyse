import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import ArticlesSection from "@/components/ArticlesSection";
import MediaSection from "@/components/MediaSection";
import ReferencesSection from "@/components/ReferencesSection";
import ExpertsSection from "@/components/ExpertsSection";
import Footer from "@/components/Footer";
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
        <ExpertsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
