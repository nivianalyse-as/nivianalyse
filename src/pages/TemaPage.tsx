import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { rapporter } from "@/data/reports";
import { slugToTheme, themeToSlug } from "@/types/rapport";

const themeDescriptions: Record<string, string> = {
  "Interkommunalt samarbeid": "NIVI Analyse har gjennom flere tiår kartlagt og analysert interkommunalt samarbeid i hele Norge. Vi har utviklet en systematisk kartleggingsmetodikk som er benyttet i de fleste fylker.",
  "Kommunestruktur": "Kommunestrukturen er et sentralt tema i norsk forvaltningspolitikk. NIVI Analyse har levert utredninger og analyser om kommunestruktur for departementer, fylkesmenn og kommuner.",
  "Kommunereform": "NIVI Analyse bidro aktivt med kunnskapsgrunnlag under kommunereformen. Vi har analysert reformens forutsetninger, prosesser og konsekvenser.",
  "Kommuneøkonomi": "Analyse av kommuneøkonomi er et kjerneområde for NIVI Analyse. Vi gjennomfører økonomiske analyser, benchmarking og identifiserer omstillingsbehov.",
  "Regional utvikling": "NIVI Analyse har bred erfaring med analyser av regional utvikling, regionalpolitikk og regionale samarbeidsstrukturer.",
  "Beredskap": "NIVI Analyse har analysert kommunal beredskapskapasitet og interkommunalt samarbeid om samfunnssikkerhet og beredskap.",
  "Organisasjonsutvikling": "NIVI Analyse bistår kommuner med organisasjonsgjennomganger, ledelsesutvikling og omstillingsarbeid.",
  "Demokrati og styring": "NIVI Analyse analyserer sammenhenger mellom kommunestruktur, styringsmodeller og lokaldemokrati.",
  "Plan og miljø": "NIVI Analyse har evaluert interkommunalt plansamarbeid og analysert samarbeid om plan- og miljøoppgaver.",
  "Kollektivtransport": "NIVI Analyse har bidratt med analyser av kollektivtransport i et regionalt perspektiv.",
  "Helse og omsorg": "NIVI Analyse har analysert interkommunalt samarbeid om helse- og omsorgstjenester.",
  "Oppvekst og utdanning": "NIVI Analyse har kartlagt interkommunalt samarbeid om oppvekst- og utdanningstjenester.",
  "Fylkeskommuner": "NIVI Analyse har analysert fylkeskommunenes rolle, oppgaver og utvikling i det norske forvaltningssystemet.",
  "Forvaltningsstruktur": "NIVI Analyse har gjennom en rekke utredninger bidratt til kunnskapsgrunnlaget om den norske forvaltningsstrukturen.",
};

const TemaPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const theme = slugToTheme(slug || "");

  if (!theme) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container-narrow section-padding text-center">
          <h1 className="text-2xl font-semibold text-primary mb-4">Tema ikke funnet</h1>
           <Link to="/publikasjoner" className="text-accent hover:text-accent/80">
            ← Tilbake til publikasjoner
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const themeRapporter = rapporter.filter((r) => r.themes.includes(theme)).sort((a, b) => b.year - a.year);
  const description = themeDescriptions[theme] || `Oversikt over rapporter fra NIVI Analyse innen temaet ${theme}.`;

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`${theme} – Rapportoversikt | NIVI Analyse`}
        description={`${description.substring(0, 155)}...`}
      />
      <Header />
      <main id="main-content">
        <section className="bg-background" style={{ paddingTop: "72px", paddingBottom: "96px" }}>
          <div className="container-narrow">
            <Link
              to="/publikasjoner"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Tilbake til rapportarkivet
            </Link>

            <h1 className="text-2xl md:text-3xl font-semibold text-primary mb-4" style={{ lineHeight: 1.25 }}>
              {theme} – Rapportoversikt
            </h1>
            <div className="h-[2px] w-10 bg-accent/80 rounded-full mb-5" />
            <p className="text-muted-foreground max-w-[680px] mb-10" style={{ fontSize: "1.05rem", lineHeight: 1.65 }}>
              {description}
            </p>

            <p className="text-sm text-muted-foreground mb-6">
              {themeRapporter.length} {themeRapporter.length === 1 ? "rapport" : "rapporter"}
            </p>

            <div className="space-y-4 max-w-4xl">
              {themeRapporter.map((r) => (
                <article key={r.id} className="card-premium p-5 md:p-6">
                  <Link
                    to={`/publikasjoner/${r.slug}`}
                    className="text-base font-semibold text-primary hover:text-accent transition-colors leading-snug block mb-1.5"
                  >
                    {r.title}
                  </Link>
                  <p className="text-xs text-muted-foreground mb-2">
                    {r.year} · {r.type}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-3">
                    {r.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {r.themes.map((t) => (
                      <Link key={t} to={`/tema/${themeToSlug(t)}`}>
                        <Badge
                          variant={t === theme ? "default" : "secondary"}
                          className="text-xs font-normal cursor-pointer"
                        >
                          {t}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      to={`/publikasjoner/${r.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent transition-colors"
                    >
                      Les mer <ArrowRight className="w-3 h-3" />
                    </Link>
                    {r.pdfUrl && (
                      <a href={r.pdfUrl} download className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent/80 transition-colors">
                        <Download className="w-3 h-3" />
                        Last ned PDF
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TemaPage;
