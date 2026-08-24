import { useEffect } from "react";
import { Link } from "@/lib/router-compat";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import KortSvar from "@/components/KortSvar";

const leveranser = [
  {
    title: "KOSTRA-analyse",
    text: "Sammenligning av kommunens nøkkeltall mot sammenlignbare kommuner og nasjonalt gjennomsnitt. Avdekker hvor ressursbruken avviker og hvor det er potensial for forbedring.",
  },
  {
    title: "Kommunekompassevaluering",
    text: "Systematisk gjennomgang av kommunens forvaltningspraksis på tvers av styring, økonomi, personal og tjenesteutvikling. Gir et helhetlig bilde og konkrete anbefalinger.",
  },
  {
    title: "Omstillingsstøtte",
    text: "Ekstern prosessledelse gjennom hele omstillingsprosessen — analyse, forankring hos ledelse og politikere, lederverksteder, tiltaksplaner og oppfølging.",
  },
  {
    title: "Rammesak til kommunestyret",
    text: "Utarbeidelse av beslutningsgrunnlag som gir kommunestyret et solid og forankret grunnlag for vedtak om omstilling.",
  },
];

const resultater = [
  {
    title: "Karasjok kommune",
    text: "Snudd fra minus 12 millioner kroner (2018) til pluss 18 millioner kroner (2022) etter flerårig omstillingsprosess med NIVI Analyse.",
  },
  {
    title: "Lindesnes kommune",
    text: "Identifisert omstillingspotensial på 100 millioner kroner gjennom strukturert prosess med politisk og administrativ forankring (2024–2025).",
  },
  {
    title: "Lillehammer kommune",
    text: "Netto driftsresultat på 2,2 % — best av byene i Innlandet — etter Balanse '24-prosjektet (2020–2022).",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hva koster kommuneøkonomi-rådgivning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prisen avhenger av oppdragets omfang. En avgrenset KOSTRA-analyse er et kortere oppdrag, mens flerårig omstillingsstøtte er et langsiktig partnerskap. NIVI Analyse tilpasser oppdraget til kommunens behov og budsjett. Ta kontakt på post@nivianalyse.no for en uforpliktende samtale.",
      },
    },
    {
      "@type": "Question",
      name: "Hvor lang tid tar en kommuneøkonomi-analyse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En KOSTRA-analyse eller kommunekompassevaluering gjennomføres typisk over 4–8 uker. En full omstillingsprosess med politisk forankring og tiltaksplan tar gjerne 6–18 måneder avhengig av kommunens størrelse og kompleksitet.",
      },
    },
    {
      "@type": "Question",
      name: "Hva skiller NIVI Analyse fra andre kommuneøkonomi-rådgivere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NIVI Analyse er et uavhengig selskap der Håvard Moe og Geir Vinsand personlig leder alle oppdrag. Det gir direkte seniorkompetanse uten juniorledd, og faglig uavhengighet som sikrer at anbefalingene alltid er i kommunens interesse. Med 300+ bistådde kommuner og 200+ analyser er erfaringsbasen bred.",
      },
    },
  ],
};

const KommuneokonomiRadgivning = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-jsonld-kommuneokonomi-radgivning";
    script.textContent = JSON.stringify(faqJsonLd);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Kommuneøkonomi-rådgivning for norske kommuner — NIVI Analyse"
        description="NIVI Analyse tilbyr KOSTRA-analyse, kommunekompassevaluering og omstillingsstøtte. 300+ bistådde kommuner. Ta kontakt for en uforpliktende samtale."
        canonical="https://nivianalyse.no/kommuneokonomi-radgivning"
      />
      <Header />
      <main id="main-content">
        <section className="bg-background" style={{ paddingTop: "72px", paddingBottom: "32px" }}>
          <div className="container-narrow">
            <h1
              className="text-2xl md:text-3xl font-semibold text-primary mb-4"
              style={{ lineHeight: 1.25 }}
            >
              Kommuneøkonomi-rådgivning for norske kommuner
            </h1>
            <div className="h-[2px] w-10 bg-accent/80 rounded-full mb-5" />
          </div>
        </section>

        <section style={{ paddingTop: "8px", paddingBottom: "32px" }}>
          <div className="container-narrow">
            <KortSvar
              ingress="Hva er kommuneøkonomi-rådgivning?"
              text="Kommuneøkonomi-rådgivning er ekstern bistand til kommuner som trenger analyse, styringsgrunnlag og prosessledelse for å oppnå bærekraftig økonomi. NIVI Analyse tilbyr dette med direkte seniorkompetanse, uten mellomledd — basert på 200+ gjennomførte analyser i norsk kommunesektor."
            />
          </div>
        </section>

        <section style={{ paddingTop: "16px", paddingBottom: "48px" }}>
          <div className="container-narrow">
            <p
              className="text-muted-foreground max-w-[720px]"
              style={{ fontSize: "1.065rem", lineHeight: 1.7, color: "hsl(168, 30%, 30%)" }}
            >
              Norske kommuner møter stadig tøffere krav til ressursbruk og tjenesteleveranse.
              NIVI Analyse bistår kommunedirektører og politisk ledelse med å forstå og forbedre
              kommuneøkonomien — fra første analyse til vedtatt rammesak.
            </p>
          </div>
        </section>

        <section style={{ paddingTop: "32px", paddingBottom: "48px" }}>
          <div className="container-narrow">
            <h2
              className="text-xl md:text-2xl font-semibold text-primary"
              style={{ lineHeight: 1.3, marginBottom: "12px" }}
            >
              Hva inngår i kommuneøkonomi-rådgivning?
            </h2>
            <div className="h-[2px] w-10 bg-accent/80 rounded-full" style={{ marginBottom: "24px" }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {leveranser.map((l) => (
                <div
                  key={l.title}
                  className="bg-card border border-border/50 rounded-xl p-5 md:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
                >
                  <h3
                    className="text-primary font-semibold"
                    style={{ fontSize: "18px", lineHeight: 1.35, marginBottom: "8px" }}
                  >
                    {l.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "hsl(168, 20%, 28%)", lineHeight: 1.65 }}>
                    {l.text}
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
              Dokumenterte resultater
            </h2>
            <div className="h-[2px] w-10 bg-accent/80 rounded-full" style={{ marginBottom: "24px" }} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {resultater.map((r) => (
                <div
                  key={r.title}
                  className="bg-card border border-border/50 rounded-xl p-5 md:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
                >
                  <h3
                    className="text-primary font-semibold"
                    style={{ fontSize: "17px", lineHeight: 1.35, marginBottom: "8px" }}
                  >
                    {r.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "hsl(168, 20%, 28%)", lineHeight: 1.65 }}>
                    {r.text}
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
              Hvem passer dette for?
            </h2>
            <div className="h-[2px] w-10 bg-accent/80 rounded-full" style={{ marginBottom: "24px" }} />
            <p
              className="max-w-[720px]"
              style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "hsl(168, 30%, 30%)" }}
            >
              Kommuneøkonomi-rådgivning fra NIVI Analyse passer for kommuner som opplever
              vedvarende merforbruk eller svak driftsmargin, kommuner som ønsker et eksternt og
              uavhengig blikk på ressursbruken, kommunestyrer som trenger et solid
              beslutningsgrunnlag, og statsforvaltere eller fylkeskommuner som bestiller analyser
              for et fylke eller en region.
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
                Ta kontakt for en uforpliktende samtale
              </h2>
              <p
                style={{ fontSize: "1.05rem", lineHeight: 1.65, color: "hsl(168, 30%, 30%)", marginBottom: "20px" }}
              >
                Håvard Moe og Geir Vinsand stiller gjerne opp for en innledende samtale om
                kommunens situasjon.
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

export default KommuneokonomiRadgivning;
