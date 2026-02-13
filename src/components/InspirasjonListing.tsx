import { useState, useMemo } from "react";
import { Calendar, Newspaper, Radio, ArrowRight, ExternalLink, FileText, Play } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "@/components/SectionHeader";
import MediaCard from "@/components/MediaCard";
import { articles } from "@/data/inspirasjonContent";
import { mediaEntries } from "@/data/mediaContent";
import { ContentCategory, ArticleContent } from "@/types/content";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  // Sort media entries by date (newest first)
  const sortedMedia = useMemo(() => {
    return [...mediaEntries].sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, []);

  // Sort articles by date (newest first)
  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => {
      const dateA = new Date(a.date.split(".").reverse().join("-"));
      const dateB = new Date(b.date.split(".").reverse().join("-"));
      return dateB.getTime() - dateA.getTime();
    });
  }, []);

  // Filter articles by category
  const filteredArticles = useMemo(() => {
    if (activeFilter === "Alle") return sortedArticles;
    return sortedArticles.filter((item) => item.category === activeFilter);
  }, [activeFilter, sortedArticles]);

  return (
    <section id="inspirasjon" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <SectionHeader
            title="Faglige innsikter"
            subtitle="Utvalgte faglige refleksjoner, prinsipper og analyser om kommunal utvikling, samarbeid, struktur og beredskap."
            as="h1"
          />
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

        {/* Filter chips (only for artikler/alle tabs) */}
        {activeTab !== "media" && (
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
        )}

        {/* Content grid */}
        {activeTab === "media" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {sortedMedia.map((entry) => (
              <MediaCard key={entry.id} entry={entry} />
            ))}
          </div>
        ) : activeTab === "artikler" ? (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {filteredArticles.map((item) => (
                <ArticleCard key={item.id} item={item} />
              ))}
            </div>
            {filteredArticles.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  Ingen innhold funnet for valgt filter.
                </p>
              </div>
            )}
          </>
        ) : (
          <>
            {/* "Alle" tab: articles first, then media */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {filteredArticles.map((item) => (
                <ArticleCard key={`a-${item.id}`} item={item} />
              ))}
              {sortedMedia.map((entry) => (
                <MediaCard key={`m-${entry.id}`} entry={entry} />
              ))}
            </div>
            {filteredArticles.length === 0 && sortedMedia.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  Ingen innhold funnet for valgt filter.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

const ArticleCard = ({ item }: { item: ArticleContent }) => {
  return (
    <article className="group bg-card rounded-2xl p-5 md:p-6 transition-all duration-200" style={{ border: '1px solid hsl(168 40% 20% / 0.12)', boxShadow: 'var(--shadow-soft)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-hover)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-soft)'; }}>
      <div className="flex items-center justify-between mb-3">
        <span className="chip text-xs bg-secondary/30 text-primary">
          {item.category}
        </span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          {item.date}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-primary mb-2 leading-snug group-hover:text-accent transition-colors line-clamp-2">
        {item.title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
        {item.excerpt}
      </p>

      <div className="flex items-center gap-3 pt-2">
        <Link 
          to={`/inspirasjon/${item.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
        >
          Les mer
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};

export default InspirasjonListing;
