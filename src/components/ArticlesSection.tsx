import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Newspaper } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { articles } from "@/data/inspirasjonContent";
import { mediaEntries } from "@/data/mediaContent";
import { ArticleContent } from "@/types/content";
import { MediaEntry } from "@/types/media";

type MixedItem = 
  | { kind: "article"; data: ArticleContent }
  | { kind: "media"; data: MediaEntry };

const ArticlesSection = () => {
  // Combine articles and media, sort by date, take latest 3
  const articleItems: MixedItem[] = articles.map(a => ({ kind: "article", data: a }));
  const mediaItems: MixedItem[] = mediaEntries
    .filter(e => e.date)
    .map(m => ({ kind: "media", data: m }));
  
  const allItems = [...articleItems, ...mediaItems];
  const latestItems = allItems
    .sort((a, b) => {
      const getDate = (item: MixedItem) => {
        if (item.kind === "article") {
          return new Date(item.data.date.split(".").reverse().join("-"));
        }
        return new Date(item.data.date!);
      };
      return getDate(b).getTime() - getDate(a).getTime();
    })
    .slice(0, 3);

  return (
    <section id="inspirasjon" className="py-16 md:section-padding pb-16 bg-background">
      <div className="container-narrow">
        <div className="mb-10 md:mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <SectionHeader
              title="Inspirasjon & Faglig påfyll"
              subtitle="Fagartikler og analyser fra våre eksperter"
            />
            <Link
              to="/inspirasjon"
              className="group flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors text-sm"
            >
              Se alle artikler
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-5 lg:gap-6">
          {latestItems.map((item) => {
            if (item.kind === "media") {
              const m = item.data;
              return (
                <Link
                  key={`m-${m.id}`}
                  to={`/i-media/${m.slug}`}
                  className="group card-premium p-5 md:p-6 block"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="chip chip-default text-xs">
                      <Newspaper className="w-3 h-3 mr-1" />
                      {m.source}
                    </span>
                    {m.date && (
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(m.date).toLocaleDateString("nb-NO")}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {m.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {m.excerpt}
                  </p>
                </Link>
              );
            }

            const a = item.data;
            return (
              <Link
                key={`a-${a.id}`}
                to={`/inspirasjon/${a.slug}`}
                className="group card-premium p-5 md:p-6 block"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="chip chip-default text-xs">
                    {a.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {a.date}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {a.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {a.excerpt}
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
