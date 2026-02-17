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
      className="py-14 md:py-24"
      style={{
        background: 'linear-gradient(180deg, #F0F7F3 0%, #E8F0EB 100%)',
      }}
    >
      <div className="container-narrow">
        <div className="mb-10 md:mb-16">
          <SectionHeader
            title="Våre oppdragsgivere"
            subtitle="Vi har samarbeidet med kommuner, fylkeskommuner og departementer over hele Norge."
          />
        </div>

        {/* Panels */}
        <div className="max-w-4xl mx-auto flex flex-col" style={{ gap: '64px' }}>
          {groups.map((group) => (
            <div
              key={group.label}
              className="bg-white"
              style={{
                borderRadius: '20px',
                padding: '48px 40px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.03)',
                border: '1px solid rgba(0, 0, 0, 0.04)',
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
              {/* Green accent line matching SectionHeader */}
              <div
                className="mx-auto rounded-full"
                style={{ height: '2px', width: '40px', backgroundColor: 'hsl(168, 79%, 11%, 0.20)', margin: '12px auto 28px auto' }}
                aria-hidden="true"
              />
              <div className="flex flex-wrap justify-center" style={{ gap: '10px', rowGap: '14px' }}>
                {group.items.map((ref, i) => (
                  <span
                    key={i}
                    className="inline-block rounded-full select-none cursor-default transition-all duration-200 hover:text-white hover:-translate-y-0.5"
                    style={{
                      padding: '8px 16px',
                      fontSize: '14px',
                      fontWeight: 500,
                      backgroundColor: '#F6F8F7',
                      color: 'hsl(168, 79%, 11%)',
                      border: '1px solid #DCE5E1',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = 'hsl(168, 79%, 11%)';
                      el.style.color = '#FFFFFF';
                      el.style.borderColor = 'hsl(168, 79%, 11%)';
                      el.style.boxShadow = '0 6px 14px rgba(20, 60, 50, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = '#F6F8F7';
                      el.style.color = 'hsl(168, 79%, 11%)';
                      el.style.borderColor = '#DCE5E1';
                      el.style.boxShadow = 'none';
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
