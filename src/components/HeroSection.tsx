import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-consultants-new.jpg";
import heroMobileImage from "@/assets/hero-mobile.png";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="top" className="relative bg-black">
      {/* Desktop + iPad: 2-column grid */}
      <div className="hidden md:grid md:grid-cols-[60%_40%] md:h-[85vh] lg:h-[85vh]">
        {/* Left column – content */}
        <div className="flex items-center justify-center bg-background px-12 lg:px-20">
          <div className="max-w-[600px] text-left">
            <h1
              className="text-3xl lg:text-4xl font-semibold text-foreground animate-fade-in"
              style={{ lineHeight: 1.2, letterSpacing: '-0.01em' }}
            >
              Håvard Moe og Geir&nbsp;Vinsand tilbyr spisskompetanse på kommunal utvikling og omstilling
            </h1>

            <p
              className="text-base lg:text-lg text-muted-foreground max-w-[480px] animate-fade-in-delay-1"
              style={{ lineHeight: 1.65, marginTop: '44px' }}
            >
              Uavhengig rådgivning for kommuner som vil styrke økonomi, styring og tjenesteutvikling.
            </p>

            <div className="flex gap-6 animate-fade-in-delay-2 mt-10">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/95 text-accent-foreground font-medium shadow-md hover:shadow-lg px-8 py-4 h-auto text-[15px] rounded-lg transition-all duration-200"
                onClick={() => scrollToSection("#kontakt")}
              >
                Kontakt oss
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border border-border text-foreground bg-transparent hover:bg-muted font-medium px-8 py-4 h-auto text-[15px] rounded-lg transition-all duration-200"
                onClick={() => scrollToSection("#fagomrader")}
              >
                Se våre fagområder
              </Button>
            </div>
          </div>
        </div>

        {/* Right column – image */}
        <div className="relative overflow-hidden">
          <img
            src={heroImage}
            alt="NIVI Analyse konsulenter"
            className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
          />
        </div>
      </div>

      {/* Mobile layout – unchanged */}
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
        <div className="relative z-10 px-6 pt-24 py-16 w-full flex flex-col justify-end h-full">
          <div className="max-w-[85%] text-left">
            <h1
              className="text-3xl font-bold text-white animate-fade-in"
              style={{ lineHeight: 1.18, letterSpacing: '-0.01em' }}
            >
              Spisskompetanse på kommunal utvikling og omstilling
            </h1>
            <p className="text-base text-white animate-fade-in-delay-1" style={{ lineHeight: 1.6, marginTop: '24px' }}>
              Håvard Moe og Geir Vinsand tilbyr uavhengig rådgivning for kommuner som vil styrke økonomi, styring og tjenesteutvikling.
            </p>
            <div className="flex flex-col gap-4 animate-fade-in-delay-2 mt-6">
              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/95 text-accent-foreground font-medium shadow-md hover:shadow-lg px-8 py-4 h-auto text-[15px] rounded-lg transition-all duration-200"
                onClick={() => scrollToSection("#kontakt")}
              >
                Kontakt oss
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full border border-white/60 text-white bg-transparent hover:bg-white/20 hover:border-white font-medium px-6 py-3 h-auto text-[15px] rounded-lg transition-all duration-200"
                onClick={() => scrollToSection("#fagomrader")}
              >
                Se våre fagområder
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
