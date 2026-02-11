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
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight leading-[1.15]">
            Referanser
          </h2>
          <div className="heading-line mx-auto" />
          <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base mt-3">
            Vi har samarbeidet med kommuner, fylkeskommuner og departementer over hele Norge.
          </p>
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
