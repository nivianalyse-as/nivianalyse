import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import geirPortrait from "@/assets/geir-vinsand.jpg";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import ArticlesSection from "@/components/ArticlesSection";
import MediaSection from "@/components/MediaSection";
import ReferencesSection from "@/components/ReferencesSection";
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
        {/* TODO: remove debug block after confirmation */}
        <div style={{ background: "#ffe0e0", padding: 24, margin: 16, border: "3px solid red" }}>
          <h2 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>DEBUG: Geir portrait</h2>
          <img
            src={geirPortrait}
            alt="Geir Vinsand DEBUG"
            style={{ width: 180, height: 225, objectFit: "cover", border: "2px solid black" }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
              const parent = e.currentTarget.parentElement;
              if (parent) parent.insertAdjacentHTML("beforeend", '<div style="width:180px;height:225px;background:#ff0000;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:bold;">IMAGE FAILED TO LOAD</div>');
            }}
          />
          <p style={{ marginTop: 8, fontFamily: "monospace", fontSize: 12 }}>src: {String(geirPortrait)}</p>
        </div>
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <ArticlesSection />
        <MediaSection />
        <ReferencesSection />
        <ExpertsSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
