import { Link } from "react-router-dom";
import SectionHeader from "@/components/SectionHeader";

const punkter = [
  "122 publikasjoner (2008–2025)",
  "Oppdrag for departementer, statsforvaltere og fylkeskommuner",
  "Dokumentert metodikk for kartlegging og strukturvurdering",
];

const PublikasjonAutoritet = () => {
  return (
    <section className="bg-background" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
      <div className="mx-auto px-5 sm:px-6 lg:px-8" style={{ maxWidth: '1100px' }}>
        <div style={{ marginBottom: '40px' }}>
          <SectionHeader title="Dokumentert utvikling i kommunesektoren siden 2008" />
        </div>

        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-muted-foreground" style={{ fontSize: '1.065rem', lineHeight: 1.7, color: 'hsl(168, 30%, 30%)' }}>
            NIVI Analyse ble etablert sommeren 2007. De første rapportene ble publisert i 2008.
            Arkivet inneholder 122 analyser og utredninger fra 2008 til 2025 om kommunestruktur,
            interkommunalt samarbeid og regional forvaltning, og dokumenterer sentrale reformer og
            utviklingsløp i norsk kommunesektor.
          </p>

          <ul className="mt-8 space-y-3 text-left inline-block">
            {punkter.map((punkt) => (
              <li key={punkt} className="flex items-start gap-3" style={{ fontSize: '1.02rem', lineHeight: 1.6, color: 'hsl(168, 30%, 28%)' }}>
                <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-accent shrink-0" />
                <span>{punkt}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link
              to="/publikasjoner"
              className="text-primary font-semibold hover:underline underline-offset-4 decoration-primary/40"
              style={{ fontSize: '1.05rem' }}
            >
              Se publikasjonsarkivet →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublikasjonAutoritet;
