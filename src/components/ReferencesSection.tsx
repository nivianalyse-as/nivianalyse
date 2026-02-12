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
    "Kristiansand kommune",
    "Tromsø kommune",
    "Bodø kommune",
    "Fredrikstad kommune",
    "Sarpsborg kommune",
    "Bærum kommune",
    "Asker kommune",
    "Sandefjord kommune",
    "Nordland fylkeskommune",
    "Vestland fylkeskommune",
  ];

  return (
    <section id="referanser" className="section-padding bg-alt">
      <div className="container-narrow">
        <div className="mb-10 md:mb-14">
          <SectionHeader
            title="Våre oppdragsgivere"
            subtitle="Vi har samarbeidet med kommuner, fylkeskommuner og departementer over hele Norge."
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
          {references.map((ref, i) => (
            <span
              key={i}
              className="inline-block px-4 py-2 rounded-full bg-secondary/40 text-primary/80 text-sm font-medium select-none"
            >
              {ref}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
