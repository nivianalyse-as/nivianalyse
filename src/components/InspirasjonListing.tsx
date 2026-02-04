import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Newspaper, Radio } from "lucide-react";
import { allContent, articles, mediaMentions, debattEntries } from "@/data/inspirasjonContent";
import { ContentCategory, ContentItem } from "@/types/content";

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

  const filteredContent = useMemo(() => {
    if (activeFilter === "Alle") {
      return allContent;
    }
    return allContent.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  // Sort by date (newest first)
  const sortedContent = useMemo(() => {
    return [...filteredContent].sort((a, b) => {
      const dateA = new Date(a.date.split(".").reverse().join("-"));
      const dateB = new Date(b.date.split(".").reverse().join("-"));
      return dateB.getTime() - dateA.getTime();
    });
  }, [filteredContent]);

  const getIcon = (item: ContentItem) => {
    if (item.type === "media") return Newspaper;
    if (item.type === "debatt") return Radio;
    return null;
  };

  const getItemLink = (item: ContentItem) => {
    return `/inspirasjon/${item.slug}`;
  };

  return (
    <section id="inspirasjon" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Inspirasjon & Faglig påfyll
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Fagartikler, analyser og medieomtale fra våre eksperter
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12">
          <button
            onClick={() => setActiveFilter("Alle")}
            className={`chip ${activeFilter === "Alle" ? "chip-active" : "chip-default"}`}
          >
            Alle
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`chip ${activeFilter === category ? "chip-active" : "chip-default"}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {sortedContent.map((item) => {
            const Icon = getIcon(item);
            
            return (
              <Link
                key={item.id}
                to={getItemLink(item)}
                className="group card-premium p-5 md:p-6 block"
              >
                {/* Meta row */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="chip chip-default text-xs">
                    {Icon && <Icon className="w-3 h-3 mr-1" />}
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {item.type === "debatt" ? item.programName : item.title}
                </h3>

                {/* Excerpt/Summary */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {item.type === "article" && item.excerpt}
                  {item.type === "media" && item.summary}
                  {item.type === "debatt" && `${item.topic} – ${item.channel}`}
                </p>

                {/* Read more link */}
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-accent transition-colors">
                  Les mer
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>

        {sortedContent.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Ingen innhold i denne kategorien ennå.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InspirasjonListing;
