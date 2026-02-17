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
    <section id="top" className="relative py-0 bg-background">
      <div>
        {/* Premium frame container */}
        <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto md:h-[720px] md:min-h-[720px] md:max-h-[720px]">
          {/* Desktop Background Image */}
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-[80%_center] hidden md:block"
          />

          {/* Mobile Background Image */}
          <img
            src={heroMobileImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
          />

          {/* Mobile overlay - gradient for readability */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/30 to-transparent md:hidden"
            aria-hidden="true"
          />

          {/* Desktop overlay - left-side gradient for text readability */}
          <div 
            className="absolute inset-0 hidden md:block"
            style={{
              background: `linear-gradient(
                90deg,
                rgba(15, 35, 30, 0.92) 0%,
                rgba(15, 35, 30, 0.72) 22%,
                rgba(15, 35, 30, 0.35) 38%,
                rgba(15, 35, 30, 0.0) 52%
              )`
            }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 px-6 md:pl-[6vw] md:px-0 pt-24 md:pt-0 py-16 md:py-24 w-full flex md:items-start md:justify-center md:flex-col md:h-full">
            <div className="max-w-[85%] md:max-w-[620px] text-left">
              {/* Mobile heading - without names */}
              <h1 
                className="md:hidden text-3xl font-bold text-white animate-fade-in"
                style={{ lineHeight: 1.18, letterSpacing: '-0.01em' }}
              >
                Spisskompetanse på kommunal utvikling og omstilling
              </h1>

              {/* Desktop heading - with names */}
              <h1 
                className="hidden md:block text-2xl lg:text-3xl font-bold text-white animate-fade-in"
                style={{ lineHeight: 1.18, letterSpacing: '-0.01em', marginBottom: '24px' }}
              >
                Håvard Moe og Geir&nbsp;Vinsand tilbyr spisskompetanse på kommunal utvikling og omstilling
              </h1>

              {/* Mobile paragraph - includes names */}
              <p className="md:hidden text-base text-white animate-fade-in-delay-1" style={{ lineHeight: 1.6, marginTop: '24px' }}>
                Håvard Moe og Geir Vinsand tilbyr uavhengig rådgivning for kommuner som vil styrke økonomi, styring og tjenesteutvikling.
              </p>

              {/* Desktop paragraph */}
              <p className="hidden md:block text-[16px] text-white max-w-[360px] animate-fade-in-delay-1" style={{ lineHeight: 1.65, marginBottom: '40px' }}>
                Uavhengig rådgivning for kommuner som vil styrke økonomi, styring og tjenesteutvikling.
              </p>

              <div className="flex flex-col gap-4 md:flex-row md:gap-6 animate-fade-in-delay-2 mt-6 md:mt-0">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto bg-accent hover:bg-accent/95 text-accent-foreground font-medium shadow-md hover:shadow-lg px-8 py-4 h-auto text-[15px] rounded-lg transition-all duration-200"
                  onClick={() => scrollToSection("#kontakt")}
                >
                  Kontakt oss
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full md:w-auto border border-white/60 text-white bg-transparent hover:bg-white/20 hover:border-white font-medium px-6 py-3 md:px-8 md:py-4 h-auto text-[15px] rounded-lg transition-all duration-200"
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
