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
    <section id="eksperter" className="section-padding section-alt-bg">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Møt personene bak kompetansen
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Med over 60 års samlet erfaring fra kommunesektoren tilbyr vi innsikt
            og rådgivning på høyeste nivå.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto">
          {experts.map((expert) => (
            <div
              key={expert.name}
              className="bg-card rounded-lg overflow-hidden border border-border/60 card-hover"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5 md:p-7">
                <h3 className="text-xl md:text-2xl font-bold mb-1">{expert.name}</h3>
                <p className="text-primary font-medium mb-3 text-sm md:text-base">{expert.title}</p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
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
