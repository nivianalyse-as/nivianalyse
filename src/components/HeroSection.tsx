import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-consultants.jpg";

const HeroSection = () => {
  return (
    <section id="top" className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay - using #07342F */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container-narrow py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-5 md:mb-6 animate-fade-in">
            Erfaringen bak NIVI Analyse.{" "}
            <span className="block mt-1 md:mt-2">Nå direkte til deg.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed max-w-2xl animate-fade-in-delay-1">
            Håvard Moe og Geir Vinsand, drivkreftene bak store deler av
            konsulentleveransene til kommune-Norge, tilbyr nå sin
            spisskompetanse direkte.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-delay-2">
            <Button variant="heroOutline" size="lg" asChild className="w-full sm:w-auto">
              <a href="#fagomrader">Se våre fagområder</a>
            </Button>
            <Button variant="heroCta" size="lg" asChild className="w-full sm:w-auto">
              <a href="#kontakt">Kontakt oss</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
