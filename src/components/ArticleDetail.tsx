import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { articles, mediaMentions, debattEntries } from "@/data/inspirasjonContent";
import { ContentItem } from "@/types/content";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the content item
  const allItems: ContentItem[] = [...articles, ...mediaMentions, ...debattEntries];
  const item = allItems.find((i) => i.slug === slug);

  if (!item) {
    return (
      <div className="section-padding bg-background">
        <div className="container-content text-center">
          <h1 className="text-2xl font-bold mb-4">Innhold ikke funnet</h1>
          <Link to="/inspirasjon" className="text-primary hover:text-accent transition-colors">
            ← Tilbake til Inspirasjon
          </Link>
        </div>
      </div>
    );
  }

  // Render based on content type
  if (item.type === "article") {
    return (
      <article className="bg-background">
        {/* Hero */}
        <div className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container-content">
            <Link 
              to="/inspirasjon" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Tilbake til Inspirasjon
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                {item.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/80">
                <Calendar className="w-4 h-4" />
                {item.date}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
              {item.title}
            </h1>
            
            {item.ingress && (
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                {item.ingress}
              </p>
            )}
            
            {item.authors && item.authors.length > 0 && (
              <div className="flex items-center gap-2 mt-6 text-sm text-white/80">
                <User className="w-4 h-4" />
                <span>Av {item.authors.join(" og ")}</span>
              </div>
            )}
          </div>
        </div>

        {/* Content sections */}
        <div className="section-padding">
          <div className="container-content">
            {item.sections?.map((section, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <h2 className="text-xl md:text-2xl font-bold mb-4">{section.title}</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            {/* Related topics */}
            {item.relatedTopics && item.relatedTopics.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Relevante fagområder
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.relatedTopics.map((topic) => (
                    <span key={topic} className="chip chip-default">
                      <Tag className="w-3 h-3 mr-1.5" />
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA box */}
            <div className="mt-16 p-8 md:p-10 bg-secondary/30 rounded-2xl text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Ønsker du en lignende analyse?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Ta kontakt for en uforpliktende samtale om hvordan vi kan bistå din kommune.
              </p>
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => {
                  const footer = document.getElementById("kontakt");
                  footer?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Kontakt oss
              </Button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Media mention
  if (item.type === "media") {
    return (
      <article className="bg-background">
        <div className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container-content">
            <Link 
              to="/inspirasjon" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Tilbake til Inspirasjon
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                {item.outlet}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/80">
                <Calendar className="w-4 h-4" />
                {item.date}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
              {item.title}
            </h1>
          </div>
        </div>

        <div className="section-padding">
          <div className="container-content">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              {item.summary}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {item.sourceUrl && (
                <Button variant="outline" size="lg" asChild>
                  <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
                    Les omtalen
                  </a>
                </Button>
              )}
            {item.pdfUrl && (
              <Button variant="outline" size="lg" asChild>
                <a href={item.pdfUrl} download>
                  Last ned PDF
                </a>
              </Button>
            )}
              {!item.sourceUrl && !item.pdfUrl && (
                <p className="text-muted-foreground text-sm italic">
                  Lenke til artikkelen kommer snart.
                </p>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Debatt entry
  if (item.type === "debatt") {
    return (
      <article className="bg-background">
        <div className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container-content">
            <Link 
              to="/inspirasjon" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Tilbake til Inspirasjon
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                {item.channel}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/80">
                <Calendar className="w-4 h-4" />
                {item.date}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-4">
              {item.programName}
            </h1>
            
            <p className="text-lg md:text-xl text-white/90">
              Tema: {item.topic}
            </p>
            
            {item.participant && (
              <p className="text-white/80 mt-4">
                Med: {item.participant}
              </p>
            )}
          </div>
        </div>

        <div className="section-padding">
          <div className="container-content">
            {item.videoUrl ? (
              <Button variant="cta" size="lg" asChild>
                <a href={item.videoUrl} target="_blank" rel="noopener noreferrer">
                  Se sendingen
                </a>
              </Button>
            ) : (
              <p className="text-muted-foreground text-sm italic">
                Lenke til sendingen kommer snart.
              </p>
            )}
          </div>
        </div>
      </article>
    );
  }

  return null;
};

export default ArticleDetail;
