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
    <section id="top" className="relative min-h-[85vh] md:min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />

      {/* Premium Overlay - #07342F with gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            135deg,
            hsla(168, 79%, 11%, 0.72) 0%,
            hsla(168, 79%, 11%, 0.58) 50%,
            hsla(168, 79%, 11%, 0.65) 100%
          )`
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container-narrow py-16 md:py-20 lg:py-24">
        <div className="max-w-[600px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.12] text-white mb-6 animate-fade-in">
            Erfaringen bak NIVI Analyse.{" "}
            <span className="block mt-2">Nå direkte til deg.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-[540px] animate-fade-in-delay-1">
            Håvard Moe og Geir Vinsand tilbyr spisskompetanse på kommunal forvaltning og rådgivning – direkte til din kommune.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-2 border-white text-white bg-transparent hover:bg-white/10 font-medium"
              onClick={() => scrollToSection("#fagomrader")}
            >
              Se våre fagområder
            </Button>
            <Button 
              variant="cta" 
              size="lg" 
              className="w-full sm:w-auto font-semibold shadow-lg"
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
