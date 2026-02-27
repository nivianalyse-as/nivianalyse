import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, Calendar, FileText, Building2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { rapporter } from "@/data/reports";
import { themeToSlug } from "@/types/rapport";
import { useEffect, useMemo } from "react";

const RapportDetail = () => {
  const { slug, param } = useParams<{ slug?: string; param?: string }>();
  const resolvedSlug = param || slug;
  const rapport = rapporter.find((r) => r.slug === resolvedSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [resolvedSlug]);

  // Related publications: share at least one theme, max 3
  const related = useMemo(() => {
    if (!rapport) return [];
    return rapporter
      .filter((r) => r.id !== rapport.id && r.themes.some((t) => rapport.themes.includes(t)))
      .sort((a, b) => b.year - a.year)
      .slice(0, 3);
  }, [rapport]);

  if (!rapport) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container-narrow section-padding text-center">
          <h1 className="text-2xl font-semibold text-primary mb-4">Rapport ikke funnet</h1>
          <Link to="/publikasjoner" className="text-accent hover:text-accent/80">
            ← Tilbake til publikasjoner
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const canonicalUrl = `https://nivi.no/publikasjoner/${resolvedSlug}`;

  const reportSchema = {
    "@context": "https://schema.org",
    "@type": "Report",
    name: rapport.title,
    description: rapport.summary,
    datePublished: `${rapport.year}-01-01`,
    author: rapport.authors.map((a) => ({ "@type": "Person", name: a })),
    publisher: { "@type": "Organization", name: "NIVI Analyse AS" },
    about: rapport.themes.map((t) => ({ "@type": "Thing", name: t })),
    url: canonicalUrl,
    ...(rapport.pdfUrl
      ? {
          encoding: {
            "@type": "MediaObject",
            contentUrl: `https://nivi.no${rapport.pdfUrl}`,
            encodingFormat: "application/pdf",
          },
        }
      : {}),
  };

  // Parse hovedfunn into bullet points if it contains newlines or bullet markers
  const hovedfunnItems = rapport.hovedfunn
    ? rapport.hovedfunn
        .split(/\n|•|–/)
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={rapport.seoTitle}
        description={rapport.seoDescription}
        type="article"
        author={rapport.authors.join(", ")}
        publishedTime={`${rapport.year}-01-01`}
        canonical={canonicalUrl}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }}
        style={{ display: "none" }}
      />
      <Header />
      <main id="main-content">
        <article style={{ paddingTop: "72px", paddingBottom: "96px" }}>
          <div className="mx-auto max-w-[860px] px-5 md:px-8">
            {/* Back link */}
            <Link
              to="/publikasjoner"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Tilbake til publikasjoner
            </Link>

            {/* H1 */}
            <h1
              className="text-2xl md:text-3xl font-semibold text-primary mb-4"
              style={{ lineHeight: 1.25 }}
            >
              {rapport.title}
            </h1>

            {/* Meta line */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground mb-6">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {rapport.year}
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                {rapport.type}
              </span>
              {rapport.client !== "Eget initiativ" && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    {rapport.client}
                  </span>
                </>
              )}
            </div>

            <div className="h-px bg-border mb-8" />

            {/* Ingress / Summary */}
            <p
              className="text-foreground leading-relaxed mb-10"
              style={{ fontSize: "1.08rem", lineHeight: 1.7 }}
            >
              {rapport.summary}
            </p>

            {/* Problemstilling */}
            {rapport.problemstilling && (
              <section className="mb-10">
                <h2 className="text-lg font-semibold text-primary mb-3">Problemstilling</h2>
                <p className="text-muted-foreground" style={{ lineHeight: 1.7 }}>
                  {rapport.problemstilling}
                </p>
              </section>
            )}

            {/* Bakgrunn og kontekst */}
            {rapport.bakgrunn && (
              <section className="mb-10">
                <h2 className="text-lg font-semibold text-primary mb-3">Bakgrunn og kontekst</h2>
                <p className="text-muted-foreground" style={{ lineHeight: 1.7 }}>
                  {rapport.bakgrunn}
                </p>
              </section>
            )}

            {/* Hovedfunn */}
            {hovedfunnItems.length > 0 && (
              <section className="mb-10">
                <h2 className="text-lg font-semibold text-primary mb-3">Hovedfunn</h2>
                {hovedfunnItems.length === 1 ? (
                  <p className="text-muted-foreground" style={{ lineHeight: 1.7 }}>
                    {hovedfunnItems[0]}
                  </p>
                ) : (
                  <ul className="space-y-2 text-muted-foreground" style={{ lineHeight: 1.7 }}>
                    {hovedfunnItems.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-accent mt-1 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            {/* Metodisk tilnærming */}
            {rapport.metodikk && rapport.metodikk.length > 0 && (
              <section className="mb-10">
                <h2 className="text-lg font-semibold text-primary mb-3">Metodisk tilnærming</h2>
                <ul className="space-y-1.5 text-muted-foreground" style={{ lineHeight: 1.7 }}>
                  {rapport.metodikk.map((m, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent mt-1 shrink-0">•</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Geography */}
            {rapport.geography.length > 0 && (
              <section className="mb-10">
                <h2 className="text-lg font-semibold text-primary mb-3">Geografi</h2>
                <p className="text-muted-foreground">{rapport.geography.join(", ")}</p>
              </section>
            )}

            {/* Authors */}
            {rapport.authors.length > 0 && (
              <section className="mb-10">
                <h2 className="text-lg font-semibold text-primary mb-3">Forfattere</h2>
                <p className="text-muted-foreground">{rapport.authors.join(", ")}</p>
              </section>
            )}

            {/* Themes */}
            <section className="mb-10">
              <h2 className="text-lg font-semibold text-primary mb-3">Relevante tema</h2>
              <div className="flex flex-wrap gap-2">
                {rapport.themes.map((t) => (
                  <Link key={t} to={`/tema/${themeToSlug(t)}`}>
                    <Badge
                      variant="secondary"
                      className="text-sm hover:bg-secondary/80 cursor-pointer"
                    >
                      {t}
                    </Badge>
                  </Link>
                ))}
              </div>
            </section>

            <div className="h-px bg-border mb-10" />

            {/* Download */}
            {rapport.pdfUrl ? (
              <>
                <a href={rapport.pdfUrl} target="_blank" rel="noopener">
                  <Button variant="cta" size="lg" className="gap-2">
                    <Download className="w-5 h-5" />
                    Last ned rapport (PDF)
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  Rapporten kan også leses som strukturert sammendrag på denne siden.
                </p>
              </>
            ) : (
              <p className="text-sm text-muted-foreground italic">
                Full rapport er ikke digitalt tilgjengelig i arkivet. Ta kontakt for tilgang.
              </p>
            )}

            {/* Related publications */}
            {related.length > 0 && (
              <section className="mt-16">
                <div className="h-px bg-border mb-10" />
                <h2 className="text-lg font-semibold text-primary mb-6">
                  Relaterte publikasjoner
                </h2>
                <div className="space-y-4">
                  {related.map((r) => (
                    <article key={r.id} className="card-premium p-5">
                      <Link
                        to={`/publikasjoner/${r.slug}`}
                        className="text-base font-semibold text-primary hover:text-accent transition-colors leading-snug block mb-1.5"
                      >
                        {r.title}
                      </Link>
                      <p className="text-xs text-muted-foreground mb-2">
                        {r.year} · {r.type}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                        {r.summary}
                      </p>
                      <Link
                        to={`/publikasjoner/${r.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent transition-colors"
                      >
                        Les mer <ArrowRight className="w-3 h-3" />
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default RapportDetail;
