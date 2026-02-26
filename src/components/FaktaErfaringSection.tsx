import faktaBg from "@/assets/fakta-bg.jpg";

const fakta = [
  { tall: "60+", beskrivelse: "Års samlet erfaring" },
  { tall: "200+", beskrivelse: "Utredninger og analyser" },
  { tall: "300+", beskrivelse: "Kommuner bistått" },
];

const FaktaErfaringSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '110px' }}>
      {/* Blurred background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${faktaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(10px)',
          transform: 'scale(1.04)',
        }}
      />
      {/* Dark green overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'hsl(168, 70%, 11%)', opacity: 0.58 }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto px-5 sm:px-6 lg:px-8" style={{ maxWidth: '1100px' }}>
        {/* Tidslinje 2006–2026 */}
        <div style={{ marginBottom: '40px' }}>
          <div className="flex justify-between" style={{ marginBottom: '4px', padding: '0 2px' }}>
            <span style={{ fontSize: '0.7rem', lineHeight: 1, color: 'hsla(0, 0%, 100%, 0.45)' }}>2006</span>
            <span style={{ fontSize: '0.7rem', lineHeight: 1, color: 'hsla(0, 0%, 100%, 0.45)' }}>2026</span>
          </div>
          <div className="relative w-full" style={{ height: '2px', backgroundColor: 'hsla(0, 0%, 100%, 0.15)' }}>
            <div
              className="absolute top-0"
              style={{ width: '10%', height: '2px', right: '3%', backgroundColor: 'hsl(17, 90%, 45%)' }}
            />
          </div>
        </div>

        {/* Overskrift og undertekst */}
        <div style={{ marginBottom: '64px' }}>
          <h2
            className="font-semibold"
            style={{ fontSize: '2.1rem', lineHeight: 1.25, marginBottom: '16px', color: 'hsl(0, 0%, 100%)' }}
          >
            Fakta og erfaring
          </h2>
          <p
            style={{ fontSize: '1.065rem', lineHeight: 1.6, color: 'hsla(0, 0%, 100%, 0.7)' }}
          >
            Analyse- og utredningsvirksomhet i kommunesektoren siden 2006.
          </p>
        </div>

        {/* Tall-grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: '48px 32px' }}>
          {fakta.map((item) => (
            <div key={item.beskrivelse}>
              <div
                className="font-bold"
                style={{ fontSize: '2.875rem', lineHeight: 1.1, marginBottom: '8px', color: 'hsl(0, 0%, 100%)' }}
              >
                {item.tall}
              </div>
              <p
                style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'hsla(0, 0%, 100%, 0.6)' }}
              >
                {item.beskrivelse}
              </p>
            </div>
          ))}

          {/* Siste blokk: Nasjonale oppdragsgivere */}
          <div>
            <div
              className="font-semibold"
              style={{ fontSize: '1.5rem', lineHeight: 1.25, marginBottom: '4px', color: 'hsl(0, 0%, 100%)' }}
            >
              Nasjonale
            </div>
            <div
              className="font-semibold"
              style={{ fontSize: '1.5rem', lineHeight: 1.25, marginBottom: '8px', color: 'hsl(0, 0%, 100%)' }}
            >
              oppdragsgivere
            </div>
            <p
              style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'hsla(0, 0%, 100%, 0.6)' }}
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
