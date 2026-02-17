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
    <section
      id="referanser"
      className="py-20 md:py-32"
      style={{
        background: 'linear-gradient(180deg, #F7FAF8 0%, #EEF5F1 50%, #F7FAF8 100%)',
      }}
    >
      <div className="container-narrow">
        {/* Header with editorial spacing */}
        <div className="mb-14 md:mb-20">
          <SectionHeader
            title="Våre oppdragsgivere"
            subtitle="Vi har samarbeidet med kommuner, fylkeskommuner og departementer over hele Norge."
          />
        </div>

        {/* Panels */}
        <div className="max-w-4xl mx-auto flex flex-col gap-10 md:gap-16">
          {groups.map((group) => (
            <div
              key={group.label}
              className="bg-white rounded-xl px-7 py-7 md:px-10 md:py-10"
              style={{
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
              }}
            >
              <h3
                className="font-semibold text-primary text-center mb-1"
                style={{ fontSize: '1.0625rem', letterSpacing: '0.015em' }}
              >
                {group.label}
              </h3>
              <div
                className="mx-auto mt-4 mb-6"
                style={{ width: '40px', height: '2px', backgroundColor: 'rgba(7, 52, 47, 0.20)', borderRadius: '1px' }}
                aria-hidden="true"
              />
              <div className="flex flex-wrap justify-center" style={{ gap: '10px', rowGap: '14px' }}>
                {group.items.map((ref, i) => (
                  <span
                    key={i}
                    className="inline-block rounded-full text-primary/80 text-sm font-medium select-none transition-colors duration-150 hover:bg-[#E9F3EE] cursor-default"
                    style={{
                      padding: '8px 18px',
                      backgroundColor: '#F8FBF9',
                      border: '1px solid rgba(7, 52, 47, 0.08)',
                    }}
                  >
                    {ref}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center text-sm mt-10 md:mt-14 cursor-default transition-all hover:underline"
          style={{ color: '#2A5C52', textUnderlineOffset: '4px' }}
        >
          Se fullstendig oppdragsoversikt i CV
        </p>
      </div>
    </section>
  );
};

export default ReferencesSection;
