import { Button } from "@/components/ui/button";
import heroImage from "@/assets/nivi-team-hero.webp";
import { type ReactNode } from "react";

const heroData = {
  title: "NIVI\u00A0Analyse tilbyr spisskompetanse på kommunal utvikling og omstilling",
  lead: "Uavhengig rådgivning for kommuner som vil styrke økonomi, styring og tjenesteutvikling.",
  primaryButton: {
    label: "Kontakt oss",
    href: "#kontakt",
  },
  secondaryButton: {
    label: "Se våre fagområder",
    href: "#fagomrader",
  },
  image: {
    src: heroImage,
    alt: "NIVI Analyse konsulenter",
    width: 1200,
    height: 800,
  },
};

const HeroButtons = ({ className }: { className?: string }) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={className}>
      <Button
        size="lg"
        className="bg-accent hover:bg-accent/95 text-accent-foreground font-medium shadow-md hover:shadow-lg px-8 py-4 h-auto text-[15px] rounded-lg transition-all duration-200"
        onClick={() => scrollToSection(heroData.primaryButton.href)}
      >
        {heroData.primaryButton.label}
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="border border-border text-foreground bg-transparent hover:bg-muted font-medium px-8 py-4 h-auto text-[15px] rounded-lg transition-all duration-200"
        onClick={() => scrollToSection(heroData.secondaryButton.href)}
      >
        {heroData.secondaryButton.label}
      </Button>
    </div>
  );
};

const HeroImage = ({
  className,
  style,
  loading,
  height,
  layout,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  loading?: "eager" | "lazy";
  height?: number;
  layout?: "cover" | "responsive";
  children?: ReactNode;
}) => {
  if (layout === "responsive") {
    return (
      <div className={className} style={style}>
        <img
          src={heroData.image.src}
          alt={heroData.image.alt}
          width={heroData.image.width}
          height={height ?? heroData.image.height}
          fetchPriority={loading === "eager" ? "high" : undefined}
          loading={loading ?? "lazy"}
          decoding="async"
          className="w-full h-auto rounded-lg object-cover"
        />
        {children}
      </div>
    );
  }

  return (
    <div className={className} style={style}>
      <img
        src={heroData.image.src}
        alt={heroData.image.alt}
        width={heroData.image.width}
        height={height ?? heroData.image.height}
        fetchPriority={loading === "eager" ? "high" : undefined}
        loading={loading ?? "lazy"}
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-[center_40%]"
      />
      {children}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="top" className="relative">
      {/* Desktop (>=1024px): 2-column grid, min-height 70vh */}
      <div className="hidden lg:grid lg:grid-cols-[0.94fr_1.06fr] items-center" style={{ minHeight: '70vh', maxHeight: '820px' }}>
        {/* Left column – content */}
        <div className="flex items-center justify-center bg-background px-12 lg:px-20 h-full">
          <div style={{ maxWidth: '640px' }} className="text-left">
            <h1
              className="font-semibold text-foreground animate-fade-in"
              style={{ fontSize: 'clamp(2.2rem, 3vw, 3.6rem)', lineHeight: 1.15, letterSpacing: '-0.01em', textWrap: 'balance' }}
            >
              {heroData.title}
            </h1>

            <p
              className="text-muted-foreground max-w-[480px] animate-fade-in-delay-1"
              style={{ fontSize: 'clamp(1.05rem, 1.2vw, 1.25rem)', lineHeight: 1.6, marginTop: '44px' }}
            >
              {heroData.lead}
            </p>

            <HeroButtons className="flex gap-6 animate-fade-in-delay-2 mt-10" />
          </div>
        </div>

        {/* Right column – image (full motif, no cropping of people) */}
        <div className="h-full bg-background flex items-center justify-center overflow-hidden">
          <HeroImage
            className="w-full flex items-center justify-center pl-2 pr-10 py-10"
            style={{ transform: 'translateX(-16px) scale(1.04)', transformOrigin: 'center' }}
            loading="eager"
            height={800}
            layout="responsive"
          />
        </div>



      </div>

      {/* Tablet (768px–1023px): vertical stack */}
      <div className="hidden md:flex md:flex-col lg:hidden bg-background">
        <div className="flex items-center justify-center px-10 py-16">
          <div className="max-w-[560px] text-left">
            <h1
              className="text-3xl font-semibold text-foreground animate-fade-in"
              style={{ lineHeight: 1.2, letterSpacing: '-0.01em', textWrap: 'balance' }}
            >
              {heroData.title}
            </h1>
            <p
              className="text-base text-muted-foreground max-w-[460px] animate-fade-in-delay-1"
              style={{ lineHeight: 1.65, marginTop: '32px' }}
            >
              {heroData.lead}
            </p>
            <HeroButtons className="flex gap-5 animate-fade-in-delay-2 mt-8" />
          </div>
        </div>
        <HeroImage
          className="px-10 pb-12"
          height={420}
          layout="responsive"
        />

      </div>

      {/* Mobile (<768px): clean text-only hero */}
      <div className="md:hidden bg-background">
        <div className="flex flex-col items-center text-center px-6 pt-24 pb-16">
          <div className="max-w-[340px]">
            <h1
              className="text-2xl font-semibold text-foreground animate-fade-in"
              style={{ lineHeight: 1.2, letterSpacing: '-0.01em' }}
            >
              {heroData.title}
            </h1>
            <p
              className="text-[15px] text-muted-foreground animate-fade-in-delay-1"
              style={{ lineHeight: 1.65, marginTop: '20px' }}
            >
              {heroData.lead}
            </p>

            <HeroImage
              className="flex justify-center mt-8 animate-fade-in-delay-1"
              layout="responsive"
              height={675}
            />

            <div className="animate-fade-in-delay-2 mt-8">
              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/95 text-accent-foreground font-medium shadow-md px-8 py-4 h-auto text-[15px] rounded-lg transition-all duration-200"
                onClick={() => {
                  const element = document.querySelector(heroData.primaryButton.href);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {heroData.primaryButton.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
