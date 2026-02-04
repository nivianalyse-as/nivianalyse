import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-consultants.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="top" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay - lighter for better readability */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container-narrow py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white mb-6 animate-fade-in">
            Erfaringen bak NIVI Analyse.{" "}
            <span className="block mt-2">Nå direkte til deg.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl animate-fade-in-delay-1">
            Håvard Moe og Geir Vinsand tilbyr spisskompetanse på kommunal forvaltning og rådgivning – direkte til din kommune.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <Button 
              variant="heroOutline" 
              size="lg" 
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 font-medium"
              onClick={() => scrollToSection("#fagomrader")}
            >
              Se våre fagområder
            </Button>
            <Button 
              variant="heroCta" 
              size="lg" 
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg"
              onClick={() => scrollToSection("#kontakt")}
            >
              Kontakt oss
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
