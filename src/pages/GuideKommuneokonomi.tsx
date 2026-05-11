import { useEffect } from "react";
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
      name: "Hva betyr det at en kommune er i ROBEK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ROBEK (Register om betinget godkjenning og kontroll) er et statlig register over kommuner som ikke klarer å overholde lovkrav til økonomiforvaltning. Kommuner i ROBEK må ha statlig godkjenning for å ta opp lån og er underlagt skjerpet statlig tilsyn.",
      },
    },
    {
      "@type": "Question",
      name: "Hva er et disposisjonsfond i en kommune?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Disposisjonsfondet er kommunens sparekonto — midler satt av fra tidligere år med overskudd. Et solid disposisjonsfond gir kommunen handlingsrom til å møte uforutsette utgifter eller håndtere år med underskudd uten å ty til lån.",
      },
    },
    {
      "@type": "Question",
      name: "Hva er netto driftsresultat og hva er et godt nivå?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Netto driftsresultat er det viktigste nøkkeltallet i kommuneøkonomi og viser hva kommunen sitter igjen med etter å ha dekket alle driftsutgifter og renter og avdrag. Et nivå på minst 1,75 % av driftsinntektene regnes som et minstekrav for finansiell bærekraft over tid.",
      },
    },
    {
      "@type": "Question",
      name: "Hva er forskjellen på driftsbudsjett og investeringsbudsjett?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Driftsbudsjettet dekker løpende utgifter som lønn, kjøp av tjenester og vedlikehold. Investeringsbudsjettet dekker større anskaffelser og prosjekter som nye bygg og infrastruktur. Kommuner kan låne til investeringer, men må finansiere driften over eget budsjett.",
      },
    },
  ],
};

const styrer = [
  {
    label: "Inntekter",
    text: "Norske kommuner finansieres primært gjennom skatteinntekter fra innbyggerne (inntektsskatt og formuesskatt), rammetilskudd fra staten og eiendomsskatt. Kraftkommuner og fiskerikommuner kan i tillegg ha store inntekter fra næringsskatter — noe som kan gjøre økonomien sårbar for svingninger.",
  },
  {
    label: "Utgifter",
    text: "De største utgiftspostene er helse og omsorg, oppvekst (barnehage og skole), og administrasjon. Kommuner med en aldrende befolkning opplever gjerne raskt voksende utgifter til helse og omsorg, mens skatteinntektene stagnerer.",
  },
  {
    label: "Netto driftsresultat",
    text: "Det viktigste nøkkeltallet i kommuneøkonomi. Et netto driftsresultat på minst 1,75 % av driftsinntektene regnes som et minstekrav for finansiell bærekraft. Kommuner med vedvarende negativt resultat vil over tid tære på fondene eller øke lånegjelden.",
  },
];

const faqVisible = [
  {
    q: "Hva betyr det at en kommune er i ROBEK?",
    a: "ROBEK (Register om betinget godkjenning og kontroll) er et statlig register over kommuner som ikke klarer å overholde lovkrav til økonomiforvaltning. Kommuner i ROBEK må ha statlig godkjenning for å ta opp lån og er underlagt skjerpet statlig tilsyn. Per 2025 er et tosifret antall norske kommuner i ROBEK.",
  },
  {
    q: "Hva er et disposisjonsfond?",
    a: "Disposisjonsfondet er kommunens «sparekonto» — midler satt av fra tidligere år med overskudd. Et solid disposisjonsfond gir kommunen handlingsrom til å møte uforutsette utgifter eller håndtere år med underskudd uten å ty til lån.",
  },
  {
    q: "Hva er forskjellen på driftsbudsjett og investeringsbudsjett?",
    a: "Driftsbudsjettet dekker løpende utgifter som lønn, kjøp av tjenester og vedlikehold. Investeringsbudsjettet dekker større anskaffelser og prosjekter som nye bygg, infrastruktur og IT-systemer. Kommuner kan låne til investeringer, men må finansiere driften over eget budsjett.",
  },
];

const sectionStyle = { paddingTop: "32px", paddingBottom: "48px" } as const;
const h2Class = "text-xl md:text-2xl font-semibold text-primary";
const h2Style = { lineHeight: 1.3, marginBottom: "12px" } as const;
const accentLine = "h-[2px] w-10 bg-accent/80 rounded-full";
const proseStyle = { fontSize: "1.05rem", lineHeight: 1.7, color: "hsl(168, 30%, 30%)" } as const;

const GuideKommuneokonomi = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-jsonld-guide-kommuneokonomi";
    script.textContent = JSON.stringify(faqJsonLd);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Kommuneøkonomi i norske kommuner — en faglig guide | NIVI Analyse"
        description="Faglig guide til kommuneøkonomi: inntekter, utgifter, netto driftsresultat, KOSTRA, ROBEK og omstilling i norske kommuner — fra NIVI Analyse."
      />
      <Header />
      <main id="main-content">
        <section className="bg-background" style={{ paddingTop: "72px", paddingBottom: "32px" }}>
          <div className="container-narrow">
            <h1
              className="text-2xl md:text-3xl font-semibold text-primary mb-4"
              style={{ lineHeight: 1.25 }}
            >
              Kommuneøkonomi i norske kommuner — en faglig guide
            </h1>
            <div className="h-[2px] w-10 bg-accent/80 rounded-full mb-5" />
          </div>
        </section>

        <section style={{ paddingTop: "8px", paddingBottom: "32px" }}>
          <div className="container-narrow">
            <KortSvar
              ingress="Hva er kommuneøkonomi?"
              text="Kommuneøkonomi handler om en norsk kommunes inntekter, utgifter, gjeld og driftsresultat. En bærekraftig kommuneøkonomi betyr at kommunen kan levere gode tjenester til innbyggerne over tid uten å bygge opp gjeld eller tære på fondene. NIVI Analyse bistår kommuner med å analysere og forbedre sin økonomi."
            />
          </div>
        </section>

        <section style={{ paddingTop: "16px", paddingBottom: "48px" }}>
          <div className="container-narrow">
            <p className="max-w-[720px]" style={proseStyle}>
              Kommuneøkonomien i Norge er under press. Demografiske endringer, statlige krav og
              svake inntektsgrunnlag gjør at stadig flere kommuner sliter med å få budsjettene i
              balanse. Denne guiden forklarer de viktigste begrepene og mekanismene i
              kommuneøkonomien.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <div className="container-narrow">
            <h2 className={h2Class} style={h2Style}>Hva styrer en kommunes økonomi?</h2>
            <div className={accentLine} style={{ marginBottom: "24px" }} />
            <div className="space-y-5 max-w-[780px]">
              {styrer.map((s) => (
                <p key={s.label} style={proseStyle}>
                  <strong className="text-primary">{s.label}:</strong> {s.text}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div className="container-narrow">
            <h2 className={h2Class} style={h2Style}>Hva er KOSTRA?</h2>
            <div className={accentLine} style={{ marginBottom: "24px" }} />
            <p className="max-w-[780px]" style={proseStyle}>
              KOSTRA (Kommune-Stat-Rapportering) er et nasjonalt system der alle norske kommuner
              rapporterer ressursbruk og tjenesteproduksjon. Tallene publiseres av Statistisk
              sentralbyrå og gjør det mulig å sammenligne kommuner på tvers. En KOSTRA-analyse fra
              NIVI Analyse avdekker om en kommune bruker mer eller mindre enn sammenlignbare
              kommuner på ulike tjenesteområder — og hva det betyr for omstillingspotensialet.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <div className="container-narrow">
            <h2 className={h2Class} style={h2Style}>Hva er omstilling i kommunal sektor?</h2>
            <div className={accentLine} style={{ marginBottom: "24px" }} />
            <p className="max-w-[780px]" style={proseStyle}>
              Omstilling i kommunal sektor er en planlagt prosess for å tilpasse ressursbruk og
              organisering til endrede forutsetninger. Det kan dreie seg om å redusere utgifter,
              effektivisere tjenester, reorganisere administrasjonen eller endre skolestruktur. En
              god omstillingsprosess krever solid analyse, bred forankring og tydelig politisk
              beslutning.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <div className="container-narrow">
            <h2 className={h2Class} style={h2Style}>Vanlige spørsmål om kommuneøkonomi</h2>
            <div className={accentLine} style={{ marginBottom: "24px" }} />
            <div className="space-y-5 max-w-[780px]">
              {faqVisible.map((f) => (
                <div
                  key={f.q}
                  className="bg-card border border-border/50 rounded-xl p-5 md:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
                >
                  <h3
                    className="text-primary font-semibold"
                    style={{ fontSize: "17px", lineHeight: 1.35, marginBottom: "8px" }}
                  >
                    {f.q}
                  </h3>
                  <p style={{ fontSize: "15px", color: "hsl(168, 20%, 28%)", lineHeight: 1.65 }}>
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "16px", paddingBottom: "96px" }}>
          <div className="container-narrow">
            <p className="max-w-[720px]" style={proseStyle}>
              NIVI Analyse bistår kommuner med å forstå og forbedre kommuneøkonomien. Ta kontakt
              på{" "}
              <a className="text-accent hover:underline" href="mailto:post@nivianalyse.no">
                post@nivianalyse.no
              </a>{" "}
              eller{" "}
              <a className="text-accent hover:underline" href="tel:+4748148813">
                +47 48 14 88 13
              </a>{" "}
              for en uforpliktende samtale.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GuideKommuneokonomi;
