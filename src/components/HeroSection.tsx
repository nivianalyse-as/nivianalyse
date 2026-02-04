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
    <section id="top" className="relative py-6 md:py-10 lg:py-12 bg-background">
      <div className="container-narrow">
        {/* Premium rounded frame container */}
        <div className="relative rounded-[22px] overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-[650px] flex items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-hidden="true"
          />

          {/* Premium Overlay - #07342F with 55-65% opacity */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                135deg,
                rgba(7, 52, 47, 0.65) 0%,
                rgba(7, 52, 47, 0.55) 50%,
                rgba(7, 52, 47, 0.60) 100%
              )`
            }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 px-6 sm:px-10 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
            <div className="max-w-[560px]">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] text-white mb-5 md:mb-6 animate-fade-in">
                Erfaringen bak NIVI Analyse.{" "}
                <span className="block mt-1.5">Nå direkte til deg.</span>
              </h1>

              <p className="text-base md:text-lg text-white/90 mb-8 md:mb-10 leading-relaxed max-w-[480px] animate-fade-in-delay-1">
                Håvard Moe og Geir Vinsand tilbyr spisskompetanse på kommunal forvaltning og rådgivning – direkte til din kommune.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-delay-2">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-[#DC4B0C] hover:bg-[#DC4B0C]/90 text-white font-semibold shadow-lg px-6"
                  onClick={() => scrollToSection("#kontakt")}
                >
                  Kontakt oss
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-2 border-white/60 text-white bg-transparent hover:bg-white/10 hover:border-white font-medium px-6"
                  onClick={() => scrollToSection("#fagomrader")}
                >
                  Se våre fagområder
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
