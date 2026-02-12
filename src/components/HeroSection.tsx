import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-consultants.jpg";
import heroMobileImage from "@/assets/hero-mobile.png";

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
        <div className="relative rounded-[22px] overflow-hidden h-[520px] md:h-[650px] lg:min-h-[620px] flex items-center shadow-[0_4px_32px_-8px_rgba(7,52,47,0.15)]">
          {/* Desktop Background Image */}
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02] hidden md:block"
          />

          {/* Mobile Background Image */}
          <img
            src={heroMobileImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-top md:hidden"
          />

          {/* Mobile overlay - gradient for readability */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/30 to-transparent md:hidden"
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
          <div className="relative z-10 px-7 sm:px-10 md:px-14 lg:px-16 pt-24 md:pt-0 py-16 md:py-18 lg:py-20">
            <div className="max-w-[560px]">
              {/* Mobile heading - without names */}
              <h1 
                className="md:hidden font-bold leading-tight text-white animate-fade-in tracking-tight text-3xl max-w-[90%] mx-auto"
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
              <p className="md:hidden text-base text-white leading-relaxed max-w-[90%] mx-auto animate-fade-in-delay-1 mt-4">
                Håvard Moe og Geir Vinsand tilbyr uavhengig rådgivning for kommuner som vil styrke økonomi, styring og tjenesteutvikling.
              </p>

              {/* Desktop paragraph */}
              <p className="hidden md:block text-[18px] text-white mb-11 leading-[1.65] max-w-[480px] animate-fade-in-delay-1">
                Uavhengig rådgivning for kommuner som vil styrke økonomi, styring og tjenesteutvikling.
              </p>

              <div className="flex flex-col gap-4 md:flex-row md:gap-4 animate-fade-in-delay-2 mt-10 md:mt-0">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto bg-accent hover:bg-accent/95 text-accent-foreground font-medium shadow-md hover:shadow-lg px-8 py-4 h-auto text-[15px] rounded-xl transition-all duration-200"
                  onClick={() => scrollToSection("#kontakt")}
                >
                  Kontakt oss
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full md:w-auto border border-white/50 text-white bg-transparent hover:bg-white/10 hover:border-white/80 font-medium px-8 py-4 h-auto text-[15px] rounded-xl transition-all duration-200"
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
