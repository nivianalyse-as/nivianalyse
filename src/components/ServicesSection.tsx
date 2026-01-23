import { BarChart3, Building2, Users, Scale } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Strategisk Analyse",
    description:
      "Dybdeanalyser som gir kommuner og fylkeskommuner det kunnskapsgrunnlaget de trenger for å ta gode beslutninger om fremtiden.",
  },
  {
    icon: Building2,
    title: "Kommuneøkonomi",
    description:
      "Økonomiske utredninger og analyser som sikrer bærekraftig drift og gir grunnlag for langsiktig økonomisk planlegging.",
  },
  {
    icon: Users,
    title: "Organisasjonsutvikling",
    description:
      "Rådgivning for effektivisering og omstilling som styrker kommunens evne til å levere gode tjenester.",
  },
  {
    icon: Scale,
    title: "Politisk Rådgivning",
    description:
      "Uavhengig rådgivning til folkevalgte som sikrer at politiske prosesser er godt forankret og gjennomtenkt.",
  },
];

const ServicesSection = () => {
  return (
    <section id="fagomrader" className="section-padding section-alt-bg">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Våre fagområder</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi tilbyr skreddersydd rådgivning basert på mange års erfaring med
            norsk kommunesektor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card p-6 md:p-8 rounded-lg border border-border/60 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-secondary/60 rounded-lg flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
