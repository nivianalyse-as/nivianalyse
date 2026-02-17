import SectionHeader from "@/components/SectionHeader";

interface Fagomrade {
  title: string;
  description: string;
}

const fagomrader: Fagomrade[] = [
  {
    title: "Kommuneøkonomi og omstilling",
    description: "Analyse og styringsgrunnlag for bærekraftig kommuneøkonomi.",
  },
  {
    title: "Organisasjonsutvikling",
    description: "Struktur og ledelse i krevende omstillingsprosesser.",
  },
  {
    title: "Interkommunalt samarbeid",
    description: "Kartlegging og analyse av formalisert interkommunalt samarbeid.",
  },
  {
    title: "Strukturreformer",
    description: "Utredning og prosessledelse ved kommunesammenslåing.",
  },
  {
    title: "Beredskap og samfunnssikkerhet",
    description: "Organisering og styrking av kommunal beredskap.",
  },
  {
    title: "Foredrag og debatt",
    description: "Faglige analyser og bidrag i offentlig debatt.",
  },
];

const ServicesSection = () => {
  return (
    <section id="fagomrader" className="bg-[#F5F5F3] md:bg-background" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="mx-auto px-5 sm:px-6 lg:px-8" style={{ maxWidth: '1100px' }}>
        <div style={{ marginBottom: '64px' }}>
          <SectionHeader
            title="Våre fagområder"
            subtitle="Skreddersydd rådgivning basert på tiår med erfaring fra norsk kommunesektor."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fagomrader.map((fag) => (
            <div
              key={fag.title}
              className="group bg-card border border-border/50 p-5 md:p-7 flex flex-col rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-200 ease-in-out cursor-pointer md:hover:-translate-y-1 md:hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] md:hover:border-primary/30"
            >
              <h3
                className="text-primary font-semibold group-hover:underline underline-offset-4 decoration-primary/40"
                style={{ fontSize: '22px', letterSpacing: '-0.2px', lineHeight: 1.3, marginBottom: '12px' }}
              >
                {fag.title}
              </h3>
              <p style={{ fontSize: '15px', color: 'hsl(168, 20%, 28%)', lineHeight: 1.65 }}>
                {fag.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
