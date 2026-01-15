import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ArticlesSection from "@/components/ArticlesSection";
import ReferencesSection from "@/components/ReferencesSection";
import ExpertsSection from "@/components/ExpertsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ArticlesSection />
        <ReferencesSection />
        <ExpertsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
