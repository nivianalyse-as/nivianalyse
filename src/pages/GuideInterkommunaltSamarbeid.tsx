import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import KortSvar from "@/components/KortSvar";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hva er interkommunalt samarbeid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Interkommunalt samarbeid er formelle ordninger der to eller flere norske kommuner løser oppgaver i fellesskap. Formene varierer fra enkle samarbeidsavtaler til egne selskaper (IKS) og vertskommunemodeller. En typisk norsk kommune er involvert i mellom 30 og 50 slike ordninger.",
      },
    },
    {
      "@type": "Question",
      name: "Hva er et interkommunalt selskap (IKS)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Et interkommunalt selskap (IKS) er et eget rettssubjekt eid av to eller flere kommuner i fellesskap. Det styres av et representantskap og et styre, og er vanlig for oppgaver som renovasjon, vann og avløp og havneforvaltning.",
      },
    },
    {
      "@type": "Question",
      name: "Hva er vertskommunemodellen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I vertskommunemodellen utfører én kommune (vertskommunen) en oppgave på vegne av en eller flere andre kommuner. De andre kommunene betaler for tjenesten og har innflytelse gjennom avtalen, men selve tjenesteproduksjonen skjer i vertskommunen. Modellen er vanlig for barnevern, legevakt og PP-tjeneste.",
      },
    },
    {
      "@type": "Question",
      name: "Er det mulig å ha for mye interkommunalt samarbeid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Når omfanget av samarbeidsordninger blir svært stort og uoversiktlig, kan det svekke den demokratiske kontrollen og gjøre det vanskelig for kommunestyret å ha full oversikt over hva kommunen er forpliktet til. NIVI Analyse anbefaler i slike tilfeller gjerne en strukturert gjennomgang med mål om å redusere antall ordninger og styrke koordineringen.",
      },
    },
  ],
};

const former = [
  {
    title: "Interkommunale selskaper (IKS)",
    text: "Egne rettssubjekter eid av kommunene i fellesskap. Vanlig for renovasjon, vann og avløp, og havneforvaltning.",
  },
  {
    title: "Vertskommunemodellen",
    text: "Én kommune (vertskommunen) utfører en oppgave på vegne av andre kommuner. Vanlig for barnevern, legevakt og PP-tjeneste.",
  },
  {
    title: "Samarbeidsavtaler",
    text: "Enklere, kontraktsbaserte ordninger uten eget selskap. Brukes for fagnettverk, kompetansedeling og prosjektsamarbeid.",
  },
  {
    title: "Regionråd",
    text: "Politiske samarbeidsorganer for kommunene i en region. Koordinerer samarbeid og er pådriver for nye felles løsninger.",
  },
];

const sectionStyle = { paddingTop: "32px", paddingBottom: "48px" } as const;
const h2Class = "text-xl md:text-2xl font-semibold text-primary";
const h2Style = { lineHeight: 1.3, marginBottom: "12px" } as const;
const accentLine = "h-[2px] w-10 bg-accent/80 rounded-full";
const proseStyle = { fontSize: "1.05rem", lineHeight: 1.7, color: "hsl(168, 30%, 30%)" } as const;

const GuideInterkommunaltSamarbeid = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-jsonld-guide-interkommunalt-samarbeid";
    script.textContent = JSON.stringify(faqJsonLd);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Interkommunalt samarbeid i Norge — hva det er og hvordan det fungerer | NIVI Analyse"
        description="Faglig guide til interkommunalt samarbeid i Norge: IKS, vertskommunemodellen, samarbeidsavtaler og regionråd — fordeler, utfordringer og kartlegging fra NIVI Analyse."
      />
      <Header />
      <main id="main-content">
        <section className="bg-background" style={{ paddingTop: "72px", paddingBottom: "32px" }}>
          <div className="container-narrow">
            <h1
              className="text-2xl md:text-3xl font-semibold text-primary mb-4"
              style={{ lineHeight: 1.25 }}
            >
              Interkommunalt samarbeid i Norge — hva det er og hvordan det fungerer
            </h1>
            <div className="h-[2px] w-10 bg-accent/80 rounded-full mb-5" />
          </div>
        </section>

        <section style={{ paddingTop: "8px", paddingBottom: "32px" }}>
          <div className="container-narrow">
            <KortSvar
              ingress="Hva er interkommunalt samarbeid?"
              text="Interkommunalt samarbeid er formelle ordninger der to eller flere norske kommuner løser oppgaver i fellesskap. Det kan dreie seg om IKT, barnevern, brannvesen, legevakt, renovasjon eller mange andre oppgaver. NIVI Analyse kartlegger og analyserer slikt samarbeid for Statsforvaltere og fylkeskommuner i hele landet."
            />
          </div>
        </section>

        <section style={{ paddingTop: "16px", paddingBottom: "48px" }}>
          <div className="container-narrow">
            <p className="max-w-[720px]" style={proseStyle}>
              Norske kommuner samarbeider om et bredt spekter av oppgaver. En typisk norsk kommune
              er involvert i mellom 30 og 50 formaliserte samarbeidsordninger. Omfanget er stort,
              men oversikten er ofte mangelfull — både lokalt og regionalt. Denne guiden forklarer
              de viktigste formene og mekanismene.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <div className="container-narrow">
            <h2 className={h2Class} style={h2Style}>Vanlige former for interkommunalt samarbeid</h2>
            <div className={accentLine} style={{ marginBottom: "24px" }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {former.map((f) => (
                <div
                  key={f.title}
                  className="bg-card border border-border/50 rounded-xl p-5 md:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
                >
                  <h3
                    className="text-primary font-semibold"
                    style={{ fontSize: "18px", lineHeight: 1.35, marginBottom: "8px" }}
                  >
                    {f.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "hsl(168, 20%, 28%)", lineHeight: 1.65 }}>
                    {f.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div className="container-narrow">
            <h2 className={h2Class} style={h2Style}>Fordeler og utfordringer</h2>
            <div className={accentLine} style={{ marginBottom: "24px" }} />
            <div className="space-y-5 max-w-[780px]">
              <p style={proseStyle}>
                <strong className="text-primary">Fordeler:</strong> Bedre utnyttelse av
                fagkompetanse og spesialiserte ressurser. Kostnadsbesparelser gjennom
                stordriftsfordeler. Styrket tjenesteleveranse for innbyggerne i alle
                deltakerkommuner.
              </p>
              <p style={proseStyle}>
                <strong className="text-primary">Utfordringer som ofte løftes frem:</strong>{" "}
                Svakere demokratisk kontroll og innsyn. Risiko for sentralisering av fagpersonell
                til vertskommunen. Mangel på koordinering mellom ulike samarbeidsordninger.
                Uoversiktlig styringslandskap for kommunestyret.
              </p>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div className="container-narrow">
            <h2 className={h2Class} style={h2Style}>Hvem kartlegger interkommunalt samarbeid?</h2>
            <div className={accentLine} style={{ marginBottom: "24px" }} />
            <p className="max-w-[780px]" style={proseStyle}>
              NIVI Analyse er ett av Norges ledende fagmiljøer på kartlegging av interkommunalt
              samarbeid. Vi gjennomfører fylkesvise kartlegginger på oppdrag fra Statsforvalterne
              og analyserer omfang, innhold og organisering — fra to-kommunesamarbeid til store
              regionale IKS-er. Resultatene brukes som grunnlag for politiske beslutninger om
              fremtidig samarbeidsstruktur.
            </p>
          </div>
        </section>

        <section style={{ paddingTop: "32px", paddingBottom: "96px" }}>
          <div className="container-narrow">
            <div
              className="rounded-xl p-8 md:p-10 border border-border/50"
              style={{ backgroundColor: "hsl(var(--bg-alt))" }}
            >
              <Link
                to="/#kontakt"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-semibold px-5 py-3 rounded-lg"
              >
                Kontakt oss <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GuideInterkommunaltSamarbeid;
