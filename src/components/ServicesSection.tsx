import SectionHeader from "@/components/SectionHeader";

interface Fagomrade {
  title: string;
  points?: string[];
}

const fagomrader: Fagomrade[] = [
  { title: "Kommuneøkonomi og omstilling" },
  { title: "Organisasjonsutvikling" },
  {
    title: "Interkommunalt samarbeid",
    points: [
      "Egen metodikk for kommunevis kartlegging og analyse av formalisert interkommunalt samarbeid",
      "200+ kommuner kartlagt etter 2019",
      "Oppdrag for statsforvaltere i åtte fylker",
      "Prinsipper for langsiktig samarbeid og styringsmodeller",
    ],
  },
  {
    title: "Strukturreformer",
    points: [
      "Kompetanse i alle faser av kommunesammenslåing",
      "Utredninger, innbyggerundersøkelser, intensjonsavtaler, styringsdokumenter",
      "Arbeid med nasjonale kriterier, finansieringssystem og kommunesystemets utvikling",
    ],
  },
  {
    title: "Beredskap og samfunnssikkerhet",
    points: [
      "Innbyggerundersøkelser",
      "Organisering av beredskapsfunksjoner",
      "Bidrag til DSBs kommunebarometer",
      "Prosjektlederrolle for Nasjonalt strålevernbarometer",
    ],
  },
  { title: "Foredrag og debatt" },
];

const ServicesSection = () => {
  return (
    <section id="fagomrader" className="py-16 md:py-24 bg-[#F5F5F3] md:bg-background">
      <div className="container-narrow">
        <div className="mb-12 md:mb-12">
          <SectionHeader
            title="Våre fagområder"
            subtitle="Skreddersydd rådgivning basert på tiår med erfaring fra norsk kommunesektor."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-5 lg:gap-6 max-w-4xl mx-auto">
          {fagomrader.map((fag) => (
            <div
              key={fag.title}
              className="bg-white border border-black/5 p-4 md:p-8 flex flex-col rounded-md md:rounded-lg shadow-sm transition-all duration-200 md:hover:shadow-md md:hover:-translate-y-1 hover:border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span className="text-primary font-semibold text-base md:text-lg leading-snug mb-2">
                {fag.title}
              </span>
              {fag.points && (
                <ul className="space-y-1.5 mt-1">
                  {fag.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
