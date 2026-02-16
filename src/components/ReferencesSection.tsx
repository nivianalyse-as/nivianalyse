import SectionHeader from "@/components/SectionHeader";

const groups = [
  {
    label: "Kommuner og fylkeskommuner",
    items: [
      "Asker kommune", "Frøya kommune", "Hole kommune", "Moskenes kommune",
      "Nesodden kommune", "Porsanger kommune", "Skjervøy kommune",
      "Steigen kommune", "Tana kommune", "Ullensaker kommune",
      "Vanylven kommune", "Vestvågøy kommune", "Vinje kommune",
      "Østre Toten kommune", "Åmot kommune",
      "Nordland fylkeskommune", "Oppland fylkeskommune",
      "Vestland fylkeskommune", "Viken fylkeskommune", "Østfold fylkeskommune",
    ],
  },
  {
    label: "Regionale samarbeid og organisasjoner",
    items: [
      "KS", "Listersamarbeidet", "Lofotrådet", "Østre Agder-samarbeidet",
    ],
  },
  {
    label: "Statlige aktører",
    items: [
      "Statsforvalteren i Trøndelag",
      "Statsforvalteren i Troms og Finnmark",
      "Statsforvalteren i Østfold, Buskerud, Oslo og Akershus",
      "Kommunaldepartementet",
      "Kommunal- og moderniseringsdepartementet",
      "Nærings- og fiskeridepartementet",
      "Direktoratet for strålevern og atomsikkerhet",
      "Direktoratet for forvaltningsutvikling og IKT",
    ],
  },
];

const ReferencesSection = () => {
  return (
    <section id="referanser" className="py-16 md:py-24 bg-[#F7F7F5]">
      <div className="container-narrow">
        <div className="mb-10 md:mb-14">
          <SectionHeader
            title="Våre oppdragsgivere"
            subtitle="Vi har samarbeidet med kommuner, fylkeskommuner og departementer over hele Norge."
          />
        </div>

        <div className="max-w-4xl mx-auto">
          {groups.map((group, idx) => (
            <div key={group.label} className={idx === 0 ? "pt-6" : "pt-10"}>
              <p className="font-semibold text-primary text-center mb-3" style={{ fontSize: '0.9375rem', letterSpacing: '0.02em' }}>
                {group.label}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {group.items.map((ref, i) => (
                  <span
                    key={i}
                    className="inline-block px-4 py-2 rounded-full bg-white shadow-sm text-primary/80 text-sm font-medium select-none"
                  >
                    {ref}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 hover:underline cursor-default transition-all">
          Se fullstendig oppdragsoversikt i CV
        </p>
      </div>
    </section>
  );
};

export default ReferencesSection;
