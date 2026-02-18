import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { rapporter } from "@/data/rapporter";
import { themeToSlug } from "@/types/rapport";

const AarsPage = () => {
  const { year } = useParams<{ year: string }>();
  const yearNum = Number(year);

  const yearRapporter = rapporter.filter((r) => r.year === yearNum).sort((a, b) => a.title.localeCompare(b.title));

  if (!yearNum || yearRapporter.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container-narrow section-padding text-center">
          <h1 className="text-2xl font-semibold text-primary mb-4">Ingen rapporter for {year}</h1>
          <Link to="/publikasjoner" className="text-accent hover:text-accent/80">
            ← Tilbake til publikasjoner
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const allYears = Array.from(new Set(rapporter.map((r) => r.year))).sort((a, b) => b - a);
  const currentIdx = allYears.indexOf(yearNum);
  const prevYear = currentIdx < allYears.length - 1 ? allYears[currentIdx + 1] : null;
  const nextYear = currentIdx > 0 ? allYears[currentIdx - 1] : null;

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`Rapporter fra ${yearNum} | NIVI Analyse`}
        description={`Oversikt over rapporter og utredninger publisert av NIVI Analyse i ${yearNum}.`}
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
              Tilbake til publikasjoner
            </Link>

            <h1 className="text-2xl md:text-3xl font-semibold text-primary mb-4" style={{ lineHeight: 1.25 }}>
              Rapporter fra {yearNum}
            </h1>
            <div className="h-[2px] w-10 bg-accent/80 rounded-full mb-5" />
            <p className="text-muted-foreground max-w-[680px] mb-10" style={{ fontSize: "1.05rem", lineHeight: 1.65 }}>
              NIVI Analyse publiserte {yearRapporter.length} {yearRapporter.length === 1 ? "rapport" : "rapporter"} i {yearNum}.
            </p>

            <div className="space-y-4 max-w-4xl">
              {yearRapporter.map((r) => (
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
                        <Badge variant="secondary" className="text-xs font-normal cursor-pointer hover:bg-secondary/80">
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

            {/* Year navigation */}
            <div className="flex items-center justify-between mt-12 max-w-4xl">
              {prevYear ? (
                <Link to={`/publikasjoner/${prevYear}`} className="text-sm text-primary hover:text-accent transition-colors">
                  ← {prevYear}
                </Link>
              ) : <div />}
              {nextYear ? (
                <Link to={`/publikasjoner/${nextYear}`} className="text-sm text-primary hover:text-accent transition-colors">
                  {nextYear} →
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AarsPage;
