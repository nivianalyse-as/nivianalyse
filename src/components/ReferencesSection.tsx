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
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#F3F8F6' }}
    >
      {/* Subtle radial depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(7, 52, 47, 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="container-narrow relative z-10">
        <div className="mb-12 md:mb-16">
          <SectionHeader
            title="Våre oppdragsgivere"
            subtitle="Vi har samarbeidet med kommuner, fylkeskommuner og departementer over hele Norge."
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-10 md:space-y-14">
          {groups.map((group) => (
            <div key={group.label}>
              <p
                className="font-semibold text-center mb-3"
                style={{ fontSize: '0.9375rem', letterSpacing: '0.02em', color: '#0A3D36' }}
              >
                {group.label}
              </p>
              <div
                className="mx-auto mb-4"
                style={{ width: '48px', height: '1px', backgroundColor: 'rgba(7, 52, 47, 0.15)' }}
                aria-hidden="true"
              />
              <div className="flex flex-wrap justify-center gap-3">
                {group.items.map((ref, i) => (
                  <span
                    key={i}
                    className="inline-block px-4 py-2 rounded-full bg-white text-primary/80 text-sm font-medium select-none"
                    style={{
                      border: '1px solid rgba(7, 52, 47, 0.10)',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                    }}
                  >
                    {ref}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 hover:underline cursor-default transition-all">
          Se fullstendig oppdragsoversikt i CV
        </p>
      </div>
    </section>
  );
};

export default ReferencesSection;
