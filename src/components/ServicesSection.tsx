import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

interface Fagomrade {
  title: string;
  description: string;
}

const fagomrader: Fagomrade[] = [
  {
    title: "Kommuneøkonomi og omstilling",
    description: "Analyser, styringsgrunnlag og beslutningsstøtte for bærekraftig økonomi.",
  },
  {
    title: "Organisasjonsutvikling",
    description: "Struktur, ledelse og gjennomførbare omstillingsprosesser.",
  },
  {
    title: "Interkommunalt samarbeid",
    description: "Kartlegging, analyse og utvikling av robuste samarbeidsmodeller.",
  },
  {
    title: "Strukturreformer",
    description: "Utredning og prosessledelse ved kommunesammenslåing og systemendringer.",
  },
  {
    title: "Beredskap og samfunnssikkerhet",
    description: "Organisering, innbyggerundersøkelser og styrking av beredskapsfunksjoner.",
  },
  {
    title: "Foredrag og debatt",
    description: "Faglige innlegg, analyser og perspektiver på kommunesystemets utvikling.",
  },
];

const ServicesSection = () => {
  return (
    <section id="fagomrader" className="py-16 md:py-24 bg-[#F5F5F3] md:bg-background">
      <div className="mx-auto px-5 sm:px-6 lg:px-8" style={{ maxWidth: '1100px' }}>
        <div className="mb-12 md:mb-12">
          <SectionHeader
            title="Våre fagområder"
            subtitle="Skreddersydd rådgivning basert på tiår med erfaring fra norsk kommunesektor."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fagomrader.map((fag) => (
            <div
              key={fag.title}
              className="group bg-card border border-border/60 p-5 md:p-7 flex flex-col justify-between rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-200 cursor-pointer md:hover:-translate-y-1 md:hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] md:hover:border-primary/40"
            >
              <div>
                <h3 className="text-primary font-bold text-xl leading-tight mb-2">
                  {fag.title}
                </h3>
                <p className="leading-snug mb-3" style={{ fontSize: '15px', color: '#3A4F46' }}>
                  {fag.description}
                </p>
              </div>
              <ArrowRight
                className="w-4 h-4 text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 mt-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
