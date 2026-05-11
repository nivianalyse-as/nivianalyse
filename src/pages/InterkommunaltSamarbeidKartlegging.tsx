import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import KortSvar from "@/components/KortSvar";

const innhold = [
  {
    title: "Oversikt over alle formaliserte samarbeidsordninger",
    text: "IKS, vertskommuneavtaler, samarbeidsavtaler, fagnettverk og andre former for samarbeid mellom kommunene i fylket.",
  },
  {
    title: "Analyse av omfang og organisering",
    text: "Hvor mange ordninger finnes, hvem deltar, hvem er vertskommune, og hvordan er styringen organisert?",
  },
  {
    title: "Erfaringsinnhenting",
    text: "Intervjuer og samtaler med kommunedirektører, regionrådsledere og andre nøkkelpersoner for å forstå hva som fungerer og hva som ikke fungerer.",
  },
  {
    title: "Anbefalinger",
    text: "Konkrete råd om videreutvikling, forenkling og mer strukturert samarbeid mellom faste partnere.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hva er forskjellen på interkommunalt samarbeid og kommunesammenslåing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Interkommunalt samarbeid betyr at to eller flere kommuner løser oppgaver i fellesskap mens de forblir selvstendige enheter. Kommunesammenslåing betyr at kommunene fusjonerer til én ny kommune. Begge kan styrke tjenesteleveransen, men har ulike konsekvenser for demokrati, styring og lokalt selvstyre.",
      },
    },
    {
      "@type": "Question",
      name: "Hvor mange interkommunale samarbeidsordninger har en typisk norsk kommune?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Basert på NIVIs kartlegginger deltar en typisk norsk kommune i mellom 30 og 50 formaliserte interkommunale samarbeidsordninger. Omfanget varierer med kommunestørrelse, geografi og regional tradisjon for samarbeid.",
      },
    },
    {
      "@type": "Question",
      name: "Hvilke fylker har NIVI Analyse kartlagt interkommunalt samarbeid i?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NIVI Analyse har gjennomført fylkesvise kartlegginger i Agder (2024), Østfold (2025), Møre og Romsdal (2023–2024), Trøndelag, Nordland, Troms og Finnmark og Viken, i tillegg til enkelt-regioner og kommunegrupper over hele landet.",
      },
    },
  ],
};

const InterkommunaltSamarbeidKartlegging = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-jsonld-interkommunalt-samarbeid-kartlegging";
    script.textContent = JSON.stringify(faqJsonLd);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Kartlegging av interkommunalt samarbeid | NIVI Analyse"
        description="NIVI Analyse er et ledende fagmiljø på fylkesvis kartlegging av interkommunalt samarbeid: oversikt, analyse, erfaringsinnhenting og anbefalinger for et mer strukturert samarbeidsbilde."
      />
      <Header />
      <main id="main-content">
        <section className="bg-background" style={{ paddingTop: "72px", paddingBottom: "32px" }}>
          <div className="container-narrow">
            <h1
              className="text-2xl md:text-3xl font-semibold text-primary mb-4"
              style={{ lineHeight: 1.25 }}
            >
              Kartlegging av interkommunalt samarbeid
            </h1>
            <div className="h-[2px] w-10 bg-accent/80 rounded-full mb-5" />
          </div>
        </section>

        <section style={{ paddingTop: "8px", paddingBottom: "32px" }}>
          <div className="container-narrow">
            <KortSvar
              ingress="Hva er kartlegging av interkommunalt samarbeid?"
              text="Kartlegging av interkommunalt samarbeid er en systematisk gjennomgang av alle formaliserte samarbeidsordninger mellom kommuner i et fylke eller en region. NIVI Analyse er ett av Norges ledende fagmiljøer på dette, og har gjennomført fylkesvise kartlegginger i Agder, Østfold, Møre og Romsdal, Trøndelag, Nordland og flere."
            />
          </div>
        </section>

        <section style={{ paddingTop: "16px", paddingBottom: "48px" }}>
          <div className="container-narrow">
            <p
              className="text-muted-foreground max-w-[720px]"
              style={{ fontSize: "1.065rem", lineHeight: 1.7, color: "hsl(168, 30%, 30%)" }}
            >
              Interkommunalt samarbeid er en sentral del av norsk kommunal organisering. Omfanget
              av slike ordninger er stort, variert og ofte lite oversiktlig — selv for kommunene
              selv. NIVI Analyse kartlegger, analyserer og gir anbefalinger for et mer strukturert
              og bærekraftig samarbeidsbilde.
            </p>
          </div>
        </section>

        <section style={{ paddingTop: "32px", paddingBottom: "48px" }}>
          <div className="container-narrow">
            <h2
              className="text-xl md:text-2xl font-semibold text-primary"
              style={{ lineHeight: 1.3, marginBottom: "12px" }}
            >
              Hva inngår i en kartlegging?
            </h2>
            <div className="h-[2px] w-10 bg-accent/80 rounded-full" style={{ marginBottom: "24px" }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {innhold.map((i) => (
                <div
                  key={i.title}
                  className="bg-card border border-border/50 rounded-xl p-5 md:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
                >
                  <h3
                    className="text-primary font-semibold"
                    style={{ fontSize: "18px", lineHeight: 1.35, marginBottom: "8px" }}
                  >
                    {i.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "hsl(168, 20%, 28%)", lineHeight: 1.65 }}>
                    {i.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "32px", paddingBottom: "48px" }}>
          <div className="container-narrow">
            <h2
              className="text-xl md:text-2xl font-semibold text-primary"
              style={{ lineHeight: 1.3, marginBottom: "12px" }}
            >
              Hvem bestiller slike kartlegginger?
            </h2>
            <div className="h-[2px] w-10 bg-accent/80 rounded-full" style={{ marginBottom: "24px" }} />
            <p
              className="max-w-[720px]"
              style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "hsl(168, 30%, 30%)" }}
            >
              Oppdragsgivere er typisk Statsforvaltere som ønsker et faktabasert grunnlag for
              dialog med kommunene, fylkeskommuner som vil forstå samarbeidsmønstrene i regionen,
              og KS-regioner eller enkelt-kommuner som ønsker å vurdere eget samarbeidsbilde.
              Resultatene presenteres gjerne på statsforvalterkonferanser og regionrådsmøter.
            </p>
          </div>
        </section>

        <section style={{ paddingTop: "32px", paddingBottom: "96px" }}>
          <div className="container-narrow">
            <div
              className="rounded-xl p-8 md:p-10 border border-border/50"
              style={{ backgroundColor: "hsl(var(--bg-alt))" }}
            >
              <h2
                className="text-xl md:text-2xl font-semibold text-primary"
                style={{ lineHeight: 1.3, marginBottom: "12px" }}
              >
                Planlegger dere en kartlegging?
              </h2>
              <p
                style={{ fontSize: "1.05rem", lineHeight: 1.65, color: "hsl(168, 30%, 30%)", marginBottom: "20px" }}
              >
                Ta kontakt med Geir Vinsand eller Håvard Moe for en innledende samtale om
                oppdragets omfang og gjennomføring.
              </p>
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

export default InterkommunaltSamarbeidKartlegging;
