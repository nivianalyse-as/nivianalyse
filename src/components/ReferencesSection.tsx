import SectionHeader from "@/components/SectionHeader";

const ReferencesSection = () => {
  const references = [
    "Asker kommune",
    "Bergen kommune",
    "Bodø kommune",
    "Bærum kommune",
    "Direktoratet for forvaltningsutvikling og IKT",
    "Direktoratet for strålevern og atomsikkerhet",
    "Drammen kommune",
    "Fredrikstad kommune",
    "Kommunaldepartementet",
    "Kommunal- og moderniseringsdepartementet",
    "Kristiansand kommune",
    "KS",
    "Listersamarbeidet",
    "Lofotrådet",
    "Moskenes kommune",
    "Nordland fylkeskommune",
    "Nærings- og fiskeridepartementet",
    "Oslo kommune",
    "Porsanger kommune",
    "Sandefjord kommune",
    "Sarpsborg kommune",
    "Statsforvalteren i Troms og Finnmark",
    "Statsforvalteren i Trøndelag",
    "Statsforvalteren i Østfold, Buskerud, Oslo og Akershus",
    "Stavanger kommune",
    "Tana kommune",
    "Trondheim kommune",
    "Tromsø kommune",
    "Vestland fylkeskommune",
    "Vestvågøy kommune",
    "Viken fylkeskommune",
    "Østre Agder-samarbeidet",
  ];

  return (
    <section id="referanser" className="py-16 md:py-24 bg-[#F7F7F5]">
      <div className="container-narrow">
        <div className="mb-10 md:mb-14">
          <SectionHeader
            title="Våre oppdragsgivere"
            subtitle="Vi har samarbeidet med kommuner, fylkeskommuner og departementer over hele Norge."
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {references.map((ref, i) => (
            <span
              key={i}
              className="inline-block px-4 py-2 rounded-full bg-white shadow-sm text-primary/80 text-sm font-medium select-none"
            >
              {ref}
            </span>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          (Se CV for mange flere oppdrag og oppdragsgivere.)
        </p>
      </div>
    </section>
  );
};

export default ReferencesSection;
