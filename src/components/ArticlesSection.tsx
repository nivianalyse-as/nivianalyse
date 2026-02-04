import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Newspaper, Radio } from "lucide-react";
import { articles, mediaMentions, debattEntries } from "@/data/inspirasjonContent";
import { ContentItem } from "@/types/content";

const ArticlesSection = () => {
  // Get latest 3 items from all content
  const allItems: ContentItem[] = [...articles, ...mediaMentions, ...debattEntries];
  const latestItems = allItems
    .sort((a, b) => {
      const dateA = new Date(a.date.split(".").reverse().join("-"));
      const dateB = new Date(b.date.split(".").reverse().join("-"));
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 3);

  const getIcon = (item: ContentItem) => {
    if (item.type === "media") return Newspaper;
    if (item.type === "debatt") return Radio;
    return null;
  };

  return (
    <section id="inspirasjon" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 md:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Inspirasjon & Faglig påfyll
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Fagartikler og analyser fra våre eksperter
            </p>
          </div>
          <Link
            to="/inspirasjon"
            className="group flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors text-sm"
          >
            Se alle artikler
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {latestItems.map((item) => {
            const Icon = getIcon(item);
            
            return (
              <Link
                key={item.id}
                to={`/inspirasjon/${item.slug}`}
                className="group card-premium p-5 md:p-6 block"
              >
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
                <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {item.type === "debatt" ? item.programName : item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {item.type === "article" && item.excerpt}
                  {item.type === "media" && item.summary}
                  {item.type === "debatt" && `${item.topic} – ${item.channel}`}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
