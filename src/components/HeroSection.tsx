import { Button } from "@/components/ui/button";
import heroImage from "@/assets/nivi-team-hero.jpg";

const heroTitle = "NIVI Analyse tilbyr spisskompetanse på kommunal utvikling og omstilling";
const heroLead = "Uavhengig rådgivning for kommuner som vil styrke økonomi, styring og tjenesteutvikling.";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="top" className="relative">
      {/* Desktop (>=1024px): 2-column grid, min-height 70vh */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1fr] items-center" style={{ minHeight: '70vh', maxHeight: '820px' }}>
        {/* Left column – content */}
        <div className="flex items-center justify-center bg-background px-12 lg:px-20 h-full">
          <div style={{ maxWidth: '640px' }} className="text-left">
            <h1
              className="font-semibold text-foreground animate-fade-in"
              style={{ fontSize: 'clamp(2.2rem, 3vw, 3.6rem)', lineHeight: 1.15, letterSpacing: '-0.01em' }}
            >
            {heroTitle}
            </h1>

            <p
              className="text-muted-foreground max-w-[480px] animate-fade-in-delay-1"
              style={{ fontSize: 'clamp(1.05rem, 1.2vw, 1.25rem)', lineHeight: 1.6, marginTop: '44px' }}
            >
              {heroLead}
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
        <div className="relative overflow-hidden h-full" style={{ minHeight: '70vh', maxHeight: '820px' }}>
          <img
            src={heroImage}
            alt="NIVI Analyse konsulenter"
            width={1200}
            height={800}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-[center_40%]"
          />
        </div>
      </div>

      {/* Tablet (768px–1023px): vertical stack */}
      <div className="hidden md:flex md:flex-col lg:hidden bg-background">
        <div className="flex items-center justify-center px-10 py-16">
          <div className="max-w-[560px] text-left">
            <h1
              className="text-3xl font-semibold text-foreground animate-fade-in"
              style={{ lineHeight: 1.2, letterSpacing: '-0.01em' }}
            >
              {heroTitle}
            </h1>
            <p
              className="text-base text-muted-foreground max-w-[460px] animate-fade-in-delay-1"
              style={{ lineHeight: 1.65, marginTop: '32px' }}
            >
              {heroLead}
            </p>
            <div className="flex gap-5 animate-fade-in-delay-2 mt-8">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/95 text-accent-foreground font-medium shadow-md px-7 py-3.5 h-auto text-[15px] rounded-lg transition-all duration-200"
                onClick={() => scrollToSection("#kontakt")}
              >
                Kontakt oss
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border border-border text-foreground bg-transparent hover:bg-muted font-medium px-7 py-3.5 h-auto text-[15px] rounded-lg transition-all duration-200"
                onClick={() => scrollToSection("#fagomrader")}
              >
                Se våre fagområder
              </Button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden" style={{ maxHeight: '420px' }}>
          <img
            src={heroImage}
            alt="NIVI Analyse konsulenter"
            width={1200}
            height={420}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-[center_40%]"
            style={{ height: '420px' }}
          />
        </div>
      </div>

      {/* Mobile (<768px): clean text-only hero */}
      <div className="md:hidden bg-background">
        <div className="flex flex-col items-center text-center px-6 pt-24 pb-16">
          <div className="max-w-[340px]">
            <h1
              className="text-2xl font-semibold text-foreground animate-fade-in"
              style={{ lineHeight: 1.2, letterSpacing: '-0.01em' }}
            >
              {heroTitle}
            </h1>
            <p
              className="text-[15px] text-muted-foreground animate-fade-in-delay-1"
              style={{ lineHeight: 1.65, marginTop: '20px' }}
            >
              {heroLead}
            </p>

            {/* Hero image (samme kilde som desktop) */}
            <div className="flex justify-center mt-8 animate-fade-in-delay-1">
              <img
                src={heroImage}
                alt="NIVI Analyse konsulenter"
                width={1200}
                height={675}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>


            <div className="animate-fade-in-delay-2 mt-8">
              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/95 text-accent-foreground font-medium shadow-md px-8 py-4 h-auto text-[15px] rounded-lg transition-all duration-200"
                onClick={() => scrollToSection("#kontakt")}
              >
                Kontakt oss
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
