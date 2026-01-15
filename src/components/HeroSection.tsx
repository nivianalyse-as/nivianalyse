import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-consultants.jpg";

const HeroSection = () => {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container-narrow py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-6 animate-fade-in">
            Erfaringen bak NIVI Analyse.{" "}
            <span className="block">Nå direkte til deg.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed max-w-2xl animate-fade-in-delay-1">
            Håvard Moe og Geir Vinsand, drivkreftene bak store deler av
            konsulentleveransene til kommune-Norge, tilbyr nå sin
            spisskompetanse direkte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#fagomrader">Se våre fagområder</a>
            </Button>
            <Button variant="heroCta" size="xl" asChild>
              <a href="#kontakt">Kontakt oss</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
