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
        background: 'linear-gradient(180deg, #E7F0EC 0%, #DEEAE5 100%)',
      }}
    >
      <div className="container-narrow">
        {/* Custom header with orange accent line */}
        <div className="max-w-6xl mx-auto px-6 text-center mb-14 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary">
            Våre oppdragsgivere
          </h2>
          <div
            className="mx-auto rounded-sm"
            style={{ width: '60px', height: '3px', background: '#E6541F', margin: '16px auto 24px auto' }}
          />
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Vi har samarbeidet med kommuner, fylkeskommuner og departementer over hele Norge.
          </p>
        </div>

        {/* Panels */}
        <div className="max-w-4xl mx-auto flex flex-col" style={{ gap: '64px' }}>
          {groups.map((group) => (
            <div
              key={group.label}
              className="bg-white"
              style={{
                borderRadius: '18px',
                padding: '48px 40px',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(0, 0, 0, 0.04)',
              }}
            >
              <h3
                className="text-center"
                style={{
                  fontWeight: 600,
                  fontSize: '18px',
                  letterSpacing: '0.3px',
                  color: '#143C32',
                  marginBottom: '0',
                }}
              >
                {group.label}
              </h3>
              {/* Orange accent line */}
              <div
                className="mx-auto rounded-sm"
                style={{ height: '2px', width: '40px', background: '#E6541F', margin: '12px auto 28px auto' }}
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
                      color: '#143C32',
                      border: '1px solid #DCE5E1',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = '#143C32';
                      el.style.color = '#FFFFFF';
                      el.style.borderColor = '#143C32';
                      el.style.boxShadow = '0 6px 14px rgba(20, 60, 50, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = '#F6F8F7';
                      el.style.color = '#143C32';
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
          style={{ color: '#2A5C52', textUnderlineOffset: '4px' }}
        >
          Se fullstendig oppdragsoversikt i CV
        </p>
      </div>
    </section>
  );
};

export default ReferencesSection;
