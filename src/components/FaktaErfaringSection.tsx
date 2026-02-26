import faktaBg from "@/assets/fakta-bg-new.jpg";

const fakta = [
  { tall: "60+", beskrivelse: "Års samlet erfaring" },
  { tall: "200+", beskrivelse: "Utredninger og analyser" },
  { tall: "300+", beskrivelse: "Kommuner bistått" },
];

const FaktaErfaringSection = () => {
  return (
    <>
      {/* 1. Full-width image – no text, no overlay */}
      <section className="w-full overflow-hidden" style={{ height: '70vh' }}>
        <img
          src={faktaBg}
          alt="NIVI Analyse grunnleggere"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
          loading="lazy"
        />
      </section>

      {/* 2. Text section below */}
      <section style={{ backgroundColor: '#F4F1EA', padding: '80px 0' }}>
        <div className="mx-auto px-5 sm:px-6 lg:px-8" style={{ maxWidth: '1100px' }}>
          <h2
            className="font-semibold"
            style={{ fontSize: '2.7rem', lineHeight: 1.2, marginBottom: '8px', color: 'hsl(220, 20%, 18%)' }}
          >
            Fakta og erfaring
          </h2>

          <p
            className="font-medium"
            style={{ fontSize: '1.25rem', lineHeight: 1.4, marginBottom: '12px', color: 'hsl(220, 10%, 45%)', letterSpacing: '0.02em' }}
          >
            2006 — 2026
          </p>

          <div style={{ width: '70px', height: '2.5px', backgroundColor: 'hsl(17, 90%, 45%)', marginBottom: '32px' }} />

          <p style={{ fontSize: '1.065rem', lineHeight: 1.6, marginBottom: '56px', color: 'hsl(220, 10%, 40%)', maxWidth: '600px' }}>
            Analyse- og utredningsvirksomhet i kommunesektoren siden 2006.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: '48px 32px' }}>
            {fakta.map((item) => (
              <div key={item.beskrivelse}>
                <div
                  className="font-black"
                  style={{ fontSize: '2.875rem', lineHeight: 1.1, marginBottom: '14px', color: 'hsl(220, 20%, 18%)' }}
                >
                  {item.tall}
                </div>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'hsl(220, 10%, 45%)' }}>
                  {item.beskrivelse}
                </p>
              </div>
            ))}

            <div>
              <div className="font-semibold" style={{ fontSize: '1.5rem', lineHeight: 1.25, marginBottom: '4px', color: 'hsl(220, 20%, 18%)' }}>
                Nasjonale
              </div>
              <div className="font-semibold" style={{ fontSize: '1.5rem', lineHeight: 1.25, marginBottom: '8px', color: 'hsl(220, 20%, 18%)' }}>
                oppdragsgivere
              </div>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'hsl(220, 10%, 45%)' }}>
                Departementer, statsforvaltere og KS
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaktaErfaringSection;
