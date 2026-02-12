import geirImage from "@/assets/geir-vinsand.jpg";
import havardImage from "@/assets/havard-moe.jpg";
import SectionHeader from "@/components/SectionHeader";

const experts = [
  {
    name: "Geir Vinsand",
    title: "Styreformann og seniorrådgiver",
    image: geirImage,
    expertise: [
      "Interkommunalt samarbeid",
      "Kommunestruktur og -reform",
      "Offentlig forvaltning og styring",
      "Kommunal organisering",
      "Kartlegging og utredning",
    ],
    description:
      "Over 30 års erfaring med analyse og rådgivning for kommunesektoren. En av Norges fremste eksperter på interkommunalt samarbeid og kommunestruktur, med oppdrag for departementer, KS og et stort antall kommuner og regioner.",
  },
  {
    name: "Håvard Moe",
    title: "Daglig leder og seniorrådgiver",
    image: havardImage,
    expertise: [
      "Kommuneøkonomi og ressursbruk",
      "Organisasjonsgjennomgang",
      "Strategisk planlegging",
      "Økonomisk analyse og benchmarking",
      "Tjenesteanalyse",
    ],
    description:
      "Erfaren analytiker med bred kompetanse innen økonomi, organisasjon og tjenesteutvikling. Har bistått over 100 kommuner med økonomiske analyser, omstillingsprosjekter og strategisk rådgivning.",
  },
];

const ExpertsSection = () => {
  return (
    <section id="eksperter" className="section-padding" style={{ backgroundColor: 'hsl(150 10% 97%)' }}>
      <div className="container-narrow">
        <div className="mb-12 md:mb-16">
          <SectionHeader
            title="Møt ekspertene"
            subtitle="Over 60 års samlet erfaring fra kommunesektoren."
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 max-w-3xl mx-auto">
          {experts.map((expert) => (
            <div
              key={expert.name}
              className="card-premium overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={expert.image}
                  alt={`${expert.name}, ${expert.title}`}
                  className="w-full h-full object-cover object-[center_15%]"
                />
              </div>
              <div className="p-5 md:p-7">
                <h3 className="text-xl md:text-2xl font-bold mb-1">
                  {expert.name}
                </h3>
                <p className="text-primary/70 font-medium mb-4 text-sm">
                  {expert.title}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {expert.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="chip chip-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {expert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
