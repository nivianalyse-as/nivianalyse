import geirImage from "@/assets/geir-vinsand.jpg";
import havardImage from "@/assets/havard-moe.jpg";

const experts = [
  {
    name: "Geir Vinsand",
    title: "Seniorrådgiver",
    image: geirImage,
    expertise: [
      "Interkommunalt samarbeid",
      "Kommunestruktur",
      "Offentlig forvaltning",
    ],
    description:
      "Over 30 års erfaring med kommunal forvaltning. En av landets fremste eksperter på interkommunalt samarbeid.",
  },
  {
    name: "Håvard Moe",
    title: "Seniorrådgiver",
    image: havardImage,
    expertise: [
      "Kommuneøkonomi",
      "Organisasjonsutvikling",
      "Strategisk planlegging",
    ],
    description:
      "Erfaren analytiker med bred kompetanse. Har bistått over 100 kommuner med økonomiske analyser.",
  },
];

const ExpertsSection = () => {
  return (
    <section id="eksperter" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Møt ekspertene
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
            Over 60 års samlet erfaring fra kommunesektoren.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {experts.map((expert) => (
            <div
              key={expert.name}
              className="bg-card rounded-xl overflow-hidden border border-border/50 hover:border-border hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5 md:p-7">
                <h3 className="text-xl md:text-2xl font-bold mb-1">
                  {expert.name}
                </h3>
                <p className="text-primary/80 font-medium mb-4 text-sm">
                  {expert.title}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {expert.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-section-alt text-primary text-xs font-medium rounded-full"
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
