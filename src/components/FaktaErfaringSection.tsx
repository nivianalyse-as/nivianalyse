import faktaBg from "@/assets/fakta-bg-new.jpg";

const fakta = [
  { tall: "60+", beskrivelse: "Års samlet erfaring" },
  { tall: "200+", beskrivelse: "Utredninger og analyser" },
  { tall: "300+", beskrivelse: "Kommuner bistått" },
];

const FaktaErfaringSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      {/* Background image – clean, no overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${faktaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto px-5 sm:px-6 lg:px-8 flex justify-end" style={{ maxWidth: '1100px' }}>
        <div
          style={{
            maxWidth: '560px',
            width: '100%',
            marginRight: '14%',
            padding: '40px',
            backgroundColor: 'rgba(0, 0, 0, 0.14)',
            borderRadius: '8px',
          }}
        >
          <h2
            className="font-semibold"
            style={{ fontSize: '2.7rem', lineHeight: 1.2, marginBottom: '8px', color: 'hsl(0, 0%, 100%)' }}
          >
            Fakta og erfaring
          </h2>

          <p
            className="font-medium"
            style={{ fontSize: '1.25rem', lineHeight: 1.4, marginBottom: '12px', color: 'hsla(0, 0%, 100%, 0.75)', letterSpacing: '0.02em' }}
          >
            2006 — 2026
          </p>

          <div style={{ width: '70px', height: '2.5px', backgroundColor: 'hsl(17, 90%, 45%)', marginBottom: '32px' }} />

          <p
            style={{ fontSize: '1.065rem', lineHeight: 1.6, marginBottom: '56px', color: 'hsla(0, 0%, 100%, 0.75)' }}
          >
            Analyse- og utredningsvirksomhet i kommunesektoren siden 2006.
          </p>

          <div className="grid grid-cols-2" style={{ gap: '48px 32px' }}>
            {fakta.map((item) => (
              <div key={item.beskrivelse}>
                <div
                  className="font-black"
                  style={{ fontSize: '2.875rem', lineHeight: 1.1, marginBottom: '14px', color: 'hsl(0, 0%, 100%)', textShadow: '0 1px 4px rgba(0,0,0,0.25)' }}
                >
                  {item.tall}
                </div>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'hsla(0, 0%, 100%, 0.65)' }}>
                  {item.beskrivelse}
                </p>
              </div>
            ))}

            <div>
              <div className="font-semibold" style={{ fontSize: '1.5rem', lineHeight: 1.25, marginBottom: '4px', color: 'hsl(0, 0%, 100%)' }}>
                Nasjonale
              </div>
              <div className="font-semibold" style={{ fontSize: '1.5rem', lineHeight: 1.25, marginBottom: '8px', color: 'hsl(0, 0%, 100%)' }}>
                oppdragsgivere
              </div>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'hsla(0, 0%, 100%, 0.65)' }}>
                Departementer, statsforvaltere og KS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaktaErfaringSection;
