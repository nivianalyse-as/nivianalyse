import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import rogerImage from "@/assets/roger-antonsen.jpg";

const expertise = [
  "Ledelse",
  "Økonomi og regnskap",
  "Interimledelse (Management for Hire)",
  "Kommuneøkonomi",
  "Omstilling",
];

const utdanning = [
  { periode: "1997–1998", tekst: "Forsvarets stabsskole – høyere leder- og forvaltningsutdanning, med vekt på strategi og endringsledelse" },
  { periode: "1991", tekst: "Sjøkrigsskolen, KS-II" },
  { periode: "1996–2001", tekst: "Cand.scient. i ernæringsbiologi, Universitetet i Oslo (deltid)" },
  { periode: "1992–1996", tekst: "Ernæringsfysiolog, Universitetet i Oslo" },
  { periode: "2002–2004", tekst: "Praktisk-pedagogisk utdanning (PPU), Høgskolen i Akershus" },
  { periode: "1985–1987", tekst: "Kostøkonom, cand.mag., Høgskolen i Akershus" },
  { periode: "1983–1984", tekst: "Sjøforsvarets økonomi- og administrasjonsskole" },
  { periode: "1981–1987", tekst: "Sjømilitære Korps – seksårig befalsutdanning med integrert sivil utdanning" },
];

const erfaring = [
  { periode: "2026–", tekst: "Seniorrådgiver, NIVI Analyse AS" },
  { periode: "2020–2026", tekst: "Økonomisjef og assisterende kommunedirektør, Frøya kommune" },
  { periode: "2017–2019", tekst: "Kommunalsjef oppvekst, Frøya kommune" },
  { periode: "2015–2016", tekst: "Konsernkoordinator, BEWI AS" },
  { periode: "2010–2014", tekst: "Kommunedirektør, Hitra kommune" },
  { periode: "2004–2009", tekst: "Rektor, Fillan sentralskole / Hitra ungdomsskole" },
  { periode: "2002–2004", tekst: "Generalintendant og sjef for Forsvarets intendanturforvaltning" },
  { periode: "1999–2002", tekst: "Sjef for Forsvarets forpleiningstjeneste" },
  { periode: "1996–1999", tekst: "Sjef for Sjøforsvarets forpleiningstjeneste" },
  { periode: "1989–1992", tekst: "Administrasjonssjef, kystvaktskipet Senja" },
  { periode: "1987–1989", tekst: "Fagoffiser, Ramsund orlogsstasjon" },
  { periode: "1984–1985", tekst: "Forpleinings- og forsyningsoffiser, Kongeskipet Norge" },
];

const EkspertRogerAntonsen = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Roger A. Antonsen – Seniorrådgiver | NIVI Analyse"
        description="Roger A. Antonsen er seniorrådgiver i NIVI Analyse med lang ledererfaring fra Forsvaret og kommunesektoren innen økonomistyring, omstilling og interimledelse."
      />
      <Header />
      <main id="main-content">
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto">
              <div className="grid sm:grid-cols-[240px_1fr] gap-8 items-start">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={rogerImage}
                    alt="Roger A. Antonsen, seniorrådgiver i NIVI Analyse"
                    width={600}
                    height={750}
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-1">
                    Roger A. Antonsen
                  </h1>
                  <p className="text-primary font-semibold text-sm mb-4">Seniorrådgiver</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {expertise.map((skill) => (
                      <span key={skill} className="chip chip-default">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Roger A. Antonsen har lang ledererfaring fra Forsvaret og kommunesektoren. Han
                    tilbyr økonomisk rådgivning til kommuner med behov for bedre styring,
                    prioritering og omstilling, og bistår ledere og folkevalgte med å utvikle
                    bærekraftige løsninger.
                  </p>

                  <div className="text-sm text-muted-foreground space-y-1 mb-6">
                    <p>
                      Mobil:{" "}
                      <a href="tel:+4791670409" className="hover:text-accent transition-colors">
                        +47 916 70 409
                      </a>
                    </p>
                    <p>
                      E-post:{" "}
                      <a href="mailto:ra@nivianalyse.no" className="hover:text-accent transition-colors">
                        ra@nivianalyse.no
                      </a>
                    </p>
                  </div>

                  <a href="/docs/CV_Roger_Antonsen.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-3.5 h-3.5" />
                      Last ned full CV (PDF)
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-alt">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Bakgrunn</h2>
                <div className="card-premium p-6 md:p-8 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Roger A. Antonsen har 22 års erfaring fra Forsvaret, der han avsluttet som
                    generalintendant og sjef for Forsvarets intendantur i 2004. Deretter var han
                    rektor i seks år og kommunedirektør i Hitra kommune i fem år. I Frøya kommune
                    har han vært kommunalsjef i tre år, og økonomisjef og assisterende
                    kommunedirektør i seks år.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Han arbeider med kommuner i økonomisk ubalanse eller med behov for bedre
                    styring, prioritering og omstilling, og bistår kommunale ledere og folkevalgte
                    med å skape oversikt, utforme realistiske tiltak og utvikle handlingsrom for
                    bærekraftig drift og varig forbedring. Han påtar seg også oppdrag som
                    interimleder, blant annet som økonomisjef i Os kommune i 2026.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Utdanning</h2>
                <div className="card-premium p-6 md:p-8">
                  <ul className="space-y-3">
                    {utdanning.map((item) => (
                      <li key={item.periode + item.tekst} className="grid sm:grid-cols-[120px_1fr] gap-1 sm:gap-4 text-sm">
                        <span className="font-semibold text-primary">{item.periode}</span>
                        <span className="text-muted-foreground leading-relaxed">{item.tekst}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                  Arbeidserfaring
                </h2>
                <div className="card-premium p-6 md:p-8">
                  <ul className="space-y-3">
                    {erfaring.map((item) => (
                      <li key={item.periode + item.tekst} className="grid sm:grid-cols-[120px_1fr] gap-1 sm:gap-4 text-sm">
                        <span className="font-semibold text-primary">{item.periode}</span>
                        <span className="text-muted-foreground leading-relaxed">{item.tekst}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EkspertRogerAntonsen;
