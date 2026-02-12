import SectionHeader from "@/components/SectionHeader";

const fagomrader = [
  "Kommuneøkonomi og omstilling",
  "Organisasjonsutvikling",
  "Interkommunalt samarbeid og strukturreformer",
  "Beredskap og samfunnssikkerhet",
  "Foredrag og debatt",
];

const ServicesSection = () => {
  return (
    <section id="fagomrader" className="py-16 md:section-padding" style={{ backgroundColor: 'hsl(150 10% 97%)' }}>
      <div className="container-narrow">
        <div className="mb-12 md:mb-16">
          <SectionHeader
            title="Våre fagområder"
            subtitle="Skreddersydd rådgivning basert på tiår med erfaring fra norsk kommunesektor."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 max-w-4xl mx-auto">
          {fagomrader.map((label) => (
            <a
              key={label}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="card-premium p-5 md:p-6 flex items-center justify-center text-center rounded-lg md:rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span className="text-primary font-medium md:font-semibold text-base md:text-lg leading-snug">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
