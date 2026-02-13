import { ArrowRight } from "lucide-react";
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
    <section id="fagomrader" className="pt-20 pb-16 md:pt-28 md:pb-24 bg-[#F5F5F3] md:bg-background">
      <div className="mx-auto px-5 sm:px-6 lg:px-8" style={{ maxWidth: '1100px' }}>
        <div className="mb-14 md:mb-16">
          <SectionHeader
            title="Våre fagområder"
            subtitle="Skreddersydd rådgivning basert på tiår med erfaring fra norsk kommunesektor."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fagomrader.map((fag) => (
            <div
              key={fag.title}
              className="group bg-card border border-border/60 p-5 md:p-7 flex flex-col rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-200 cursor-pointer md:hover:-translate-y-1 md:hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] md:hover:border-primary/40"
            >
              <h3
                className="text-primary font-bold leading-tight mb-2"
                style={{ fontSize: '22px', letterSpacing: '-0.2px' }}
              >
                {fag.title}
              </h3>
              <p className="leading-snug flex items-center gap-1.5" style={{ fontSize: '15px', color: '#3A4F46' }}>
                <span>{fag.description}</span>
                <ArrowRight
                  className="w-3.5 h-3.5 flex-shrink-0 text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200"
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
