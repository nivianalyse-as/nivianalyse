import geirImage from "@/assets/geir-vinsand.jpg";
import havardImage from "@/assets/havard-moe.jpg";

const experts = [
  {
    name: "Geir Vinsand",
    title: "Seniorrådgiver",
    image: geirImage,
    description:
      "Geir har over 30 års erfaring med kommunal forvaltning og er en av landets fremste eksperter på interkommunalt samarbeid og kommunestruktur. Han har ledet en rekke store utredningsprosjekter for kommuner og departementer.",
  },
  {
    name: "Håvard Moe",
    title: "Seniorrådgiver",
    image: havardImage,
    description:
      "Håvard er en erfaren analytiker med bred kompetanse innen kommuneøkonomi, organisasjonsutvikling og strategisk planlegging. Han har bistått over 100 kommuner med økonomiske analyser og utviklingsprosjekter.",
  },
];

const ExpertsSection = () => {
  return (
    <section id="eksperter" className="section-padding bg-muted">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Møt personene bak kompetansen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Med over 60 års samlet erfaring fra kommunesektoren tilbyr vi innsikt
            og rådgivning på høyeste nivå.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {experts.map((expert) => (
            <div
              key={expert.name}
              className="bg-card rounded-lg overflow-hidden border border-border card-hover"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1">{expert.name}</h3>
                <p className="text-accent font-medium mb-4">{expert.title}</p>
                <p className="text-muted-foreground leading-relaxed">
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
