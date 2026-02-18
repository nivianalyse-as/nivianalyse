import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import ArticlesSection from "@/components/ArticlesSection";
import MediaSection from "@/components/MediaSection";
import ReferencesSection from "@/components/ReferencesSection";
import ReferenceProjectsSection from "@/components/ReferenceProjectsSection";

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
  // ProfessionalService schema
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "schema-professional-service";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "NIVI Analyse AS",
      url: "https://nivianalyse.lovable.app",
      description: "Uavhengig analyse og rådgivning innen kommuneøkonomi, interkommunalt samarbeid, strukturreformer og beredskap.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Solløkkaveien 73",
        addressLocality: "Sandefjord",
        postalCode: "3233",
        addressCountry: "NO",
      },
      telephone: "+47 22 12 34 56",
      email: "post@nivianalyse.no",
    });
    document.head.appendChild(script);
    return () => { document.getElementById("schema-professional-service")?.remove(); };
  }, []);

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
        <ReferenceProjectsSection />
        <MediaSection />
        <ReferencesSection />
        <ArticlesSection />
        <ExpertsSection />
        <ContactSection />
      </main>
      <div className="h-10 md:hidden bg-gradient-to-b from-background to-[#0E3B32]" aria-hidden="true" />
      <div style={{ height: '32px', backgroundColor: 'hsl(var(--background))' }} className="hidden md:block" aria-hidden="true" />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
