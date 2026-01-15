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
    <section id="fagomrader" className="section-padding bg-muted">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Våre fagområder</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi tilbyr skreddersydd rådgivning basert på mange års erfaring med
            norsk kommunesektor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card p-8 rounded-lg border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
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
