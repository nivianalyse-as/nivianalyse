import { BarChart3, Building2, Users, Scale } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Strategisk Analyse",
    description:
      "Dybdeanalyser som gir kommuner kunnskapsgrunnlag for gode beslutninger.",
  },
  {
    icon: Building2,
    title: "Kommuneøkonomi",
    description:
      "Økonomiske utredninger for bærekraftig drift og langsiktig planlegging.",
  },
  {
    icon: Users,
    title: "Organisasjonsutvikling",
    description:
      "Rådgivning for effektivisering som styrker tjenesteleveransen.",
  },
  {
    icon: Scale,
    title: "Politisk Rådgivning",
    description:
      "Uavhengig rådgivning for godt forankrede politiske prosesser.",
  },
];

const ServicesSection = () => {
  return (
    <section id="fagomrader" className="section-padding bg-alt">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Våre fagområder
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Skreddersydd rådgivning basert på tiår med erfaring fra norsk kommunesektor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-premium p-6 md:p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-secondary/40 rounded-xl flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
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
