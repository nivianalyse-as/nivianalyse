import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Newspaper, Radio, ExternalLink, FileText, Play } from "lucide-react";
import { allContent, articles, mediaMentions, debattEntries } from "@/data/inspirasjonContent";
import { ContentCategory, ContentItem } from "@/types/content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories: ContentCategory[] = [
  "Analyse",
  "Kommuneøkonomi",
  "Organisasjon",
  "Politisk rådgivning",
  "Interkommunalt samarbeid",
  "Kommunestruktur",
  "I media",
  "Debatt/NRK"
];

const InspirasjonListing = () => {
  const [activeFilter, setActiveFilter] = useState<ContentCategory | "Alle">("Alle");
  const [activeTab, setActiveTab] = useState("alle");

  const getContentForTab = () => {
    switch (activeTab) {
      case "artikler":
        return articles;
      case "media":
        return [...mediaMentions, ...debattEntries];
      default:
        return allContent;
    }
  };

  const filteredContent = useMemo(() => {
    const tabContent = getContentForTab();
    if (activeFilter === "Alle") {
      return tabContent;
    }
    return tabContent.filter((item) => item.category === activeFilter);
  }, [activeFilter, activeTab]);

  // Sort by date (newest first)
  const sortedContent = useMemo(() => {
    return [...filteredContent].sort((a, b) => {
      const dateA = new Date(a.date.split(".").reverse().join("-"));
      const dateB = new Date(b.date.split(".").reverse().join("-"));
      return dateB.getTime() - dateA.getTime();
    });
  }, [filteredContent]);

  return (
    <section id="inspirasjon" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 tracking-tight leading-[1.15]">
            Inspirasjon & Faglig påfyll
          </h1>
          <div className="heading-line" />
          <p className="text-muted-foreground max-w-2xl text-base md:text-lg mt-3 leading-relaxed">
            Analyser, artikler og medieomtaler fra NIVI Analyse. Følg med på våre faglige bidrag til debatten om kommunal sektor.
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="h-auto p-1 bg-muted/50 rounded-xl inline-flex">
            <TabsTrigger 
              value="alle" 
              className="px-5 py-2.5 text-sm font-medium rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Alle
            </TabsTrigger>
            <TabsTrigger 
              value="artikler"
              className="px-5 py-2.5 text-sm font-medium rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Artikler
            </TabsTrigger>
            <TabsTrigger 
              value="media"
              className="px-5 py-2.5 text-sm font-medium rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              I media
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveFilter("Alle")}
            className={`chip transition-all ${
              activeFilter === "Alle" 
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary/30 text-primary hover:bg-secondary/50"
            }`}
          >
            Alle
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`chip transition-all ${
                activeFilter === category 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary/30 text-primary hover:bg-secondary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {sortedContent.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>

        {sortedContent.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Ingen innhold funnet for valgt filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

const ContentCard = ({ item }: { item: ContentItem }) => {
  const isArticle = item.type === "article";
  const isMedia = item.type === "media";
  const isDebatt = item.type === "debatt";

  return (
    <article className="group bg-card rounded-2xl p-5 md:p-6 transition-all duration-200" style={{ border: '1px solid hsl(168 40% 20% / 0.12)', boxShadow: 'var(--shadow-soft)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-hover)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-soft)'; }}>
      {/* Category & Date */}
      <div className="flex items-center justify-between mb-3">
        <span className={`chip text-xs ${
          isMedia ? "bg-[#BDD1DE]/40 text-primary" : 
          isDebatt ? "bg-[#FFAB91]/30 text-primary" : 
          "bg-secondary/30 text-primary"
        }`}>
          {isMedia && <Newspaper className="w-3 h-3 mr-1" />}
          {isDebatt && <Radio className="w-3 h-3 mr-1" />}
          {isMedia && item.outlet}
          {isDebatt && item.channel}
          {isArticle && item.category}
        </span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          {item.date}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-primary mb-2 leading-snug group-hover:text-accent transition-colors line-clamp-2">
        {isDebatt ? item.programName : item.title}
      </h3>

      {/* Excerpt / Summary */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
        {isArticle && item.excerpt}
        {isMedia && item.summary}
        {isDebatt && `${item.topic} – ${item.participant}`}
      </p>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-2">
        {isArticle && (
          <Link 
            to={`/inspirasjon/${item.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            Les mer
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
        
        {isMedia && (
          <>
            {item.sourceUrl ? (
              <a 
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                Les omtalen
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <Link 
                to={`/inspirasjon/${item.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                Les mer
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            {item.pdfUrl && (
              <a 
                href={item.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                PDF
              </a>
            )}
          </>
        )}
        
        {isDebatt && (
          <>
            {item.videoUrl ? (
              <a 
                href={item.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                <Play className="w-3.5 h-3.5" />
                Se klippet
              </a>
            ) : (
              <Link 
                to={`/inspirasjon/${item.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                Les mer
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </>
        )}
      </div>
    </article>
  );
};

export default InspirasjonListing;
