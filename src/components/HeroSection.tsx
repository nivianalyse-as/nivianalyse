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
      {/* Mobile: stacked with background image */}
      <div className="md:hidden relative overflow-hidden aspect-[4/5]">
        <img
          src={heroMobileImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/30 to-transparent"
          aria-hidden="true"
        />
        <div className="relative z-10 px-6 pt-24 py-16 w-full flex items-end h-full">
          <div className="max-w-[85%]">
            <h1 className="font-bold leading-tight text-white animate-fade-in tracking-tight text-3xl">
              Spisskompetanse på kommunal utvikling og omstilling
            </h1>
            <p className="text-base text-white leading-relaxed animate-fade-in-delay-1 mt-4">
              Håvard Moe og Geir Vinsand tilbyr uavhengig rådgivning for kommuner som vil styrke økonomi, styring og tjenesteutvikling.
            </p>
            <div className="flex flex-col gap-4 animate-fade-in-delay-2 mt-6">
              <Button 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/95 text-accent-foreground font-medium shadow-md hover:shadow-lg px-8 py-4 h-auto text-[15px] rounded-xl transition-all duration-200"
                onClick={() => scrollToSection("#kontakt")}
              >
                Kontakt oss
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border border-white/60 text-white bg-transparent hover:bg-white/15 hover:border-white font-medium px-6 py-3 h-auto text-[15px] rounded-xl transition-all duration-200"
                onClick={() => scrollToSection("#fagomrader")}
              >
                Se våre fagområder
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: side-by-side with image left, text right */}
      <div className="hidden md:block bg-primary">
        <div className="max-w-7xl mx-auto flex items-stretch min-h-[620px] lg:min-h-[680px]">
          {/* Image left */}
          <div className="w-1/2 relative overflow-hidden">
            <img
              src={heroImage}
              alt="Håvard Moe og Geir Vinsand"
              className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
            />
          </div>

          {/* Text right */}
          <div className="w-1/2 flex items-center px-10 lg:px-16 xl:px-20 py-20">
            <div className="max-w-xl">
              <h1 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-bold leading-tight text-white mb-7 animate-fade-in tracking-tight">
                Håvard Moe og Geir Vinsand tilbyr spisskompetanse på kommunal utvikling og omstilling
              </h1>
              <p className="text-[17px] lg:text-[18px] text-white/90 mb-10 leading-[1.65] max-w-[460px] animate-fade-in-delay-1">
                Uavhengig rådgivning for kommuner som vil styrke økonomi, styring og tjenesteutvikling.
              </p>
              <div className="flex flex-row gap-5 animate-fade-in-delay-2">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/95 text-accent-foreground font-medium shadow-md hover:shadow-lg px-8 py-4 h-auto text-[15px] rounded-xl transition-all duration-200"
                  onClick={() => scrollToSection("#kontakt")}
                >
                  Kontakt oss
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border border-white/60 text-white bg-transparent hover:bg-white/15 hover:border-white font-medium px-8 py-4 h-auto text-[15px] rounded-xl transition-all duration-200"
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
