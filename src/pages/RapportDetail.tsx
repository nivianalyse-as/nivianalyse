import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, Calendar, FileText, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { rapporter } from "@/data/rapporter";
import { themeToSlug } from "@/types/rapport";
import { useEffect } from "react";

const RapportDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const rapport = rapporter.find((r) => r.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!rapport) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container-narrow section-padding text-center">
          <h1 className="text-2xl font-semibold text-primary mb-4">Rapport ikke funnet</h1>
          <Link to="/rapportarkiv" className="text-accent hover:text-accent/80">
            ← Tilbake til rapportarkivet
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // JSON-LD Report schema
  const reportSchema = {
    "@context": "https://schema.org",
    "@type": "Report",
    name: rapport.title,
    description: rapport.summary,
    datePublished: `${rapport.year}-01-01`,
    author: rapport.authors.map((a) => ({ "@type": "Person", name: a })),
    publisher: { "@type": "Organization", name: "NIVI Analyse AS" },
    about: rapport.themes.map((t) => ({ "@type": "Thing", name: t })),
    url: `https://nivianalyse.lovable.app/rapport/${rapport.slug}`,
    ...(rapport.pdfUrl ? { encoding: { "@type": "MediaObject", contentUrl: rapport.pdfUrl, encodingFormat: "application/pdf" } } : {}),
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title={rapport.seoTitle}
        description={rapport.seoDescription}
        type="article"
        author={rapport.authors.join(", ")}
        publishedTime={`${rapport.year}-01-01`}
      />
      {/* Inject Report schema directly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }}
        style={{ display: "none" }}
      />
      <Header />
      <main id="main-content">
        <article className="bg-background" style={{ paddingTop: "72px", paddingBottom: "96px" }}>
          <div className="container-content">
            {/* Back link */}
            <Link
              to="/rapportarkiv"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Tilbake til rapportarkivet
            </Link>

            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-semibold text-primary mb-4" style={{ lineHeight: 1.25 }}>
              {rapport.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {rapport.year}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                {rapport.type}
              </span>
              {rapport.client !== "Eget initiativ" && (
                <span className="inline-flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" />
                  {rapport.client}
                </span>
              )}
            </div>

            <div className="h-px bg-border mb-8" />

            {/* Summary / Ingress */}
            <p className="text-base text-foreground leading-relaxed mb-8" style={{ fontSize: "1.05rem" }}>
              {rapport.summary}
            </p>

            {/* Problemstilling */}
            {rapport.problemstilling && (
              <section className="mb-8">
                <h2 className="text-lg font-semibold text-primary mb-3">Problemstilling</h2>
                <p className="text-muted-foreground leading-relaxed">{rapport.problemstilling}</p>
              </section>
            )}

            {/* Bakgrunn */}
            {rapport.bakgrunn && (
              <section className="mb-8">
                <h2 className="text-lg font-semibold text-primary mb-3">Bakgrunn og kontekst</h2>
                <p className="text-muted-foreground leading-relaxed">{rapport.bakgrunn}</p>
              </section>
            )}

            {/* Hovedfunn */}
            {rapport.hovedfunn && (
              <section className="mb-8">
                <h2 className="text-lg font-semibold text-primary mb-3">Hovedfunn</h2>
                <p className="text-muted-foreground leading-relaxed">{rapport.hovedfunn}</p>
              </section>
            )}

            {/* Themes */}
            <section className="mb-8">
              <h2 className="text-lg font-semibold text-primary mb-3">Relevante tema</h2>
              <div className="flex flex-wrap gap-2">
                {rapport.themes.map((t) => (
                  <Link key={t} to={`/tema/${themeToSlug(t)}`}>
                    <Badge variant="secondary" className="text-sm hover:bg-secondary/80 cursor-pointer">
                      {t}
                    </Badge>
                  </Link>
                ))}
              </div>
            </section>

            {/* Authors */}
            {rapport.authors.length > 0 && (
              <section className="mb-8">
                <h2 className="text-lg font-semibold text-primary mb-3">Forfattere</h2>
                <p className="text-muted-foreground">{rapport.authors.join(", ")}</p>
              </section>
            )}

            {/* Geography */}
            {rapport.geography.length > 0 && (
              <section className="mb-8">
                <h2 className="text-lg font-semibold text-primary mb-3">Geografi</h2>
                <p className="text-muted-foreground">{rapport.geography.join(", ")}</p>
              </section>
            )}

            <div className="h-px bg-border mb-8" />

            {/* Download */}
            {rapport.pdfUrl ? (
              <a href={rapport.pdfUrl} download>
                <Button variant="cta" size="lg" className="gap-2">
                  <Download className="w-5 h-5" />
                  Last ned PDF
                </Button>
              </a>
            ) : (
              <p className="text-sm text-muted-foreground italic">PDF er ikke tilgjengelig for denne rapporten ennå.</p>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default RapportDetail;
