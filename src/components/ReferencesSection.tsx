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
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: 'linear-gradient(180deg, #E6EEE9 0%, #EFF5F1 100%)',
      }}
    >
      <div className="container-narrow">
        <div style={{ marginBottom: '64px' }}>
          <SectionHeader
            title="Våre oppdragsgivere"
            subtitle="Vi har samarbeidet med kommuner, fylkeskommuner og departementer over hele Norge."
          />
        </div>

        {/* Panels */}
        <div className="max-w-4xl mx-auto flex flex-col" style={{ gap: '56px' }}>
          {groups.map((group) => (
            <div
              key={group.label}
              className="bg-white"
              style={{
                borderRadius: '12px',
                padding: '54px 46px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
              }}
            >
              <h3
                className="text-center"
                style={{
                  fontWeight: 600,
                  fontSize: '18px',
                  letterSpacing: '0.3px',
                  color: 'hsl(168, 79%, 11%)',
                  marginBottom: '0',
                }}
              >
                {group.label}
              </h3>
              {/* Accent line matching SectionHeader */}
              <div
                className="mx-auto rounded-full bg-accent/80"
                style={{ height: '2px', width: '40px', margin: '16px auto 24px auto' }}
                aria-hidden="true"
              />
              <div className="flex flex-wrap justify-center" style={{ gap: '10px', rowGap: '14px' }}>
                {group.items.map((ref, i) => (
                  <span
                    key={i}
                    className="inline-block rounded-full select-none cursor-default transition-colors duration-150"
                    style={{
                      padding: '8px 16px',
                      fontSize: '14px',
                      fontWeight: 500,
                      backgroundColor: '#F6F8F7',
                      color: 'hsl(168, 79%, 11%)',
                      border: '1px solid #DCE5E1',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#EEF2F0';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#F6F8F7';
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
          style={{ color: 'hsl(168, 50%, 25%)', textUnderlineOffset: '4px' }}
        >
          Se fullstendig oppdragsoversikt i CV
        </p>
      </div>
    </section>
  );
};

export default ReferencesSection;
