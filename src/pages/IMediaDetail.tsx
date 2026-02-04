import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronLeft, ExternalLink, Download, Play, Calendar, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MediaCard from "@/components/MediaCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getMediaBySlug, mediaEntries } from "@/data/mediaContent";
import { mediaTypeLabels } from "@/types/media";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
};

const IMediaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? getMediaBySlug(slug) : undefined;

  if (!entry) {
    return <Navigate to="/i-media" replace />;
  }

  // Get related entries (same type or source, excluding current)
  const relatedEntries = mediaEntries
    .filter(
      (e) =>
        e.id !== entry.id &&
        (e.type === entry.type || e.source === entry.source)
    )
    .slice(0, 3);

  // Short summary for "Kort oppsummert" box
  const shortSummary = entry.id === 1
    ? "NIVI Analyse styrker laget. Håvard Moe inn i miljøet sammen med Geir Vinsand, med mål om å levere enda tydeligere analyser og råd til kommuner og offentlig sektor."
    : entry.excerpt;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-secondary/20">
          <div className="container max-w-4xl mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-foreground transition-colors">
                    Startside
                  </Link>
                </li>
                <li>→</li>
                <li>
                  <Link to="/i-media" className="hover:text-foreground transition-colors">
                    I media
                  </Link>
                </li>
              </ol>
            </nav>

            {/* Type Badge */}
            <Badge 
              variant="secondary" 
              className="mb-4 bg-secondary/50 text-primary font-medium"
            >
              {mediaTypeLabels[entry.type]}
            </Badge>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {entry.title}
            </h1>

            {/* Meta Line */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4" />
                {entry.source}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(entry.date)}
              </span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl mx-auto px-4">
            {/* Excerpt */}
            <p className="text-lg text-foreground leading-relaxed mb-8">
              {entry.excerpt}
            </p>

            {/* Key Points */}
            {entry.keyPoints.length > 0 && (
              <div className="bg-secondary/30 border border-border/50 rounded-[18px] p-6 md:p-8 mb-8">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Nøkkelpunkter
                </h2>
                <ul className="space-y-3">
                  {entry.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-medium flex items-center justify-center mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Short Summary Box */}
            <div className="bg-primary/5 border-l-4 border-accent rounded-r-lg p-5 md:p-6 mb-8">
              <h3 className="text-sm font-semibold text-accent mb-2">
                Kort oppsummert
              </h3>
              <p className="text-foreground leading-relaxed">
                {shortSummary}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {entry.externalUrl && (
                <Button size="lg" asChild>
                  <a href={entry.externalUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Les originalen
                  </a>
                </Button>
              )}
              {entry.pdfUrl && (
                <Button variant="outline" size="lg" asChild>
                  <a href={entry.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Last ned PDF
                  </a>
                </Button>
              )}
              {entry.embedUrl && (
                <Button variant="outline" size="lg" asChild>
                  <a href={entry.embedUrl} target="_blank" rel="noopener noreferrer">
                    <Play className="w-4 h-4 mr-2" />
                    Se på NRK
                  </a>
                </Button>
              )}
              {!entry.externalUrl && !entry.pdfUrl && !entry.embedUrl && (
                <p className="text-sm text-muted-foreground italic">
                  Lenke til originalkilde kommer snart.
                </p>
              )}
            </div>

            {/* Back Link */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <Link 
                to="/i-media" 
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Tilbake til alle omtaler
              </Link>
            </div>
          </div>
        </section>

        {/* Related Items */}
        {relatedEntries.length > 0 && (
          <section className="py-12 md:py-16 bg-secondary/20">
            <div className="container max-w-6xl mx-auto px-4">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8">
                Relaterte omtaler
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedEntries.map((relatedEntry) => (
                  <MediaCard key={relatedEntry.id} entry={relatedEntry} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default IMediaDetail;
