const fakta = [
  { tall: "60+", beskrivelse: "Års samlet erfaring" },
  { tall: "200+", beskrivelse: "Utredninger og analyser" },
  { tall: "300+", beskrivelse: "Kommuner bistått" },
];

const FaktaErfaringSection = () => {
  return (
    <section style={{ paddingTop: '120px', paddingBottom: '110px', backgroundColor: '#EEF3F1' }}>
      <div className="mx-auto px-5 sm:px-6 lg:px-8" style={{ maxWidth: '1100px' }}>
        {/* Grafisk anker */}
        <div className="relative" style={{ marginBottom: '48px' }}>
          <div className="w-full" style={{ height: '1px', backgroundColor: 'hsl(210, 15%, 90%)' }} />
          <div
            className="absolute bg-accent rounded-full"
            style={{ width: '8px', height: '8px', top: '-3.5px', left: '20%' }}
          />
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
