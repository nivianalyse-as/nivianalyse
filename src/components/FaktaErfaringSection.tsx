const fakta = [
  { tall: "60+", beskrivelse: "Års samlet erfaring" },
  { tall: "200+", beskrivelse: "Utredninger og analyser" },
  { tall: "300+", beskrivelse: "Kommuner bistått" },
];

const FaktaErfaringSection = () => {
  return (
    <section style={{ paddingTop: '120px', paddingBottom: '110px', backgroundColor: '#EEF3F1' }}>
      <div className="mx-auto px-5 sm:px-6 lg:px-8" style={{ maxWidth: '1100px' }}>
        {/* Tidslinje 2006–2026 */}
        <div style={{ marginBottom: '40px' }}>
          <div className="flex justify-between" style={{ marginBottom: '4px', padding: '0 2px' }}>
            <span style={{ fontSize: '0.7rem', lineHeight: 1, color: 'hsl(168, 15%, 55%)' }}>2006</span>
            <span style={{ fontSize: '0.7rem', lineHeight: 1, color: 'hsl(168, 15%, 55%)' }}>2026</span>
          </div>
          <div className="relative w-full" style={{ height: '2px', backgroundColor: 'hsl(210, 15%, 88%)' }}>
            <div
              className="absolute top-0"
              style={{ width: '10%', height: '2px', right: '3%', backgroundColor: 'hsl(17, 90%, 45%)' }}
            />
          </div>
        </div>

        {/* Overskrift og undertekst */}
        <div style={{ marginBottom: '64px' }}>
          <h2
            className="text-primary font-semibold"
            style={{ fontSize: '2.1rem', lineHeight: 1.25, marginBottom: '16px' }}
          >
            Fakta og erfaring
          </h2>
          <p
            className="text-muted-foreground"
            style={{ fontSize: '1.065rem', lineHeight: 1.6, color: 'hsl(168, 30%, 30%)' }}
          >
            Analyse- og utredningsvirksomhet i kommunesektoren siden 2006.
          </p>
        </div>

        {/* Tall-grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: '48px 32px' }}>
          {fakta.map((item) => (
            <div key={item.beskrivelse}>
              <div
                className="text-primary font-bold"
                style={{ fontSize: '2.875rem', lineHeight: 1.1, marginBottom: '8px' }}
              >
                {item.tall}
              </div>
              <p
                className="text-muted-foreground"
                style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'hsl(168, 30%, 38%)' }}
              >
                {item.beskrivelse}
              </p>
            </div>
          ))}

          {/* Siste blokk: Nasjonale oppdragsgivere */}
          <div>
            <div
              className="text-primary font-semibold"
              style={{ fontSize: '1.5rem', lineHeight: 1.25, marginBottom: '4px' }}
            >
              Nasjonale
            </div>
            <div
              className="text-primary font-semibold"
              style={{ fontSize: '1.5rem', lineHeight: 1.25, marginBottom: '8px' }}
            >
              oppdragsgivere
            </div>
            <p
              className="text-muted-foreground"
              style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'hsl(168, 30%, 38%)' }}
            >
              Departementer, statsforvaltere og KS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaktaErfaringSection;
