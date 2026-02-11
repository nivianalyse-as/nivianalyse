import SectionHeader from "@/components/SectionHeader";

const ReferencesSection = () => {
  const references = [
    "Viken fylkeskommune",
    "Oslo kommune",
    "Trondheim kommune",
    "Bergen kommune",
    "Stavanger kommune",
    "Drammen kommune",
    "KS",
    "Kommunaldepartementet",
  ];

  return (
    <section id="referanser" className="section-padding bg-alt">
      <div className="container-narrow">
        <div className="mb-10 md:mb-14">
          <SectionHeader
            title="Referanser"
            subtitle="Vi har samarbeidet med kommuner, fylkeskommuner og departementer over hele Norge."
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {references.map((ref, i) => (
            <div
              key={i}
              className="h-20 md:h-24 card-premium flex items-center justify-center px-4"
            >
              <span className="text-primary font-medium text-sm md:text-base text-center">
                {ref}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
