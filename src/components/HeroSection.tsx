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
    <section id="top" className="relative py-4 md:py-8 lg:py-10 bg-background">
      <div className="container-narrow">
        {/* Premium rounded frame container */}
        <div className="relative rounded-[22px] overflow-hidden min-h-[480px] md:min-h-[560px] lg:min-h-[620px] flex items-center shadow-[0_4px_32px_-8px_rgba(7,52,47,0.15)]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.02]"
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-hidden="true"
          />

          {/* Mobile overlay - darker for readability */}
          <div 
            className="absolute inset-0 bg-black/50 md:hidden"
            aria-hidden="true"
          />

          {/* Desktop overlay - original lighter gradient */}
          <div 
            className="absolute inset-0 hidden md:block"
            style={{
              background: `linear-gradient(
                145deg,
                rgba(7, 52, 47, 0.38) 0%,
                rgba(7, 52, 47, 0.25) 40%,
                rgba(7, 52, 47, 0.32) 100%
              )`
            }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 px-7 sm:px-10 md:px-14 lg:px-16 py-16 md:py-18 lg:py-20">
            <div className="max-w-[560px]">
              {/* Mobile heading - without names */}
              <h1 
                className="md:hidden font-bold leading-tight text-white mb-5 animate-fade-in tracking-[-0.025em] text-3xl max-w-[90%] mx-auto"
              >
                Spisskompetanse på kommunal utvikling og omstilling
              </h1>

              {/* Desktop heading - with names */}
              <h1 
                className="hidden md:block font-bold leading-[1.08] text-white mb-7 animate-fade-in tracking-[-0.025em]"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)' }}
              >
                Håvard Moe og Geir Vinsand tilbyr spisskompetanse på kommunal utvikling og omstilling
              </h1>

              {/* Mobile paragraph - includes names */}
              <p className="md:hidden text-[16px] text-white mb-9 leading-[1.65] max-w-[90%] mx-auto animate-fade-in-delay-1">
                Håvard Moe og Geir Vinsand tilbyr uavhengig rådgivning for kommuner som vil styrke økonomi, styring og tjenesteutvikling.
              </p>

              {/* Desktop paragraph */}
              <p className="hidden md:block text-[18px] text-white mb-11 leading-[1.65] max-w-[480px] animate-fade-in-delay-1">
                Uavhengig rådgivning for kommuner som vil styrke økonomi, styring og tjenesteutvikling.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 animate-fade-in-delay-2">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/20 px-7 py-3 h-auto text-[15px] rounded-xl transition-all duration-200"
                  onClick={() => scrollToSection("#kontakt")}
                >
                  Kontakt oss
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-2 border-white/50 text-white bg-white/[0.06] hover:bg-white/15 hover:border-white/70 font-medium px-7 py-3 h-auto text-[15px] rounded-xl backdrop-blur-sm transition-all duration-200"
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
