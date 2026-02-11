import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MediaCard from "@/components/MediaCard";
import { getFeaturedMedia } from "@/data/mediaContent";

const MediaSection = () => {
  const featuredMedia = getFeaturedMedia();

  return (
    <section className="py-20 md:py-28 bg-secondary/15">
      <div className="container-narrow">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-primary mb-3 tracking-tight leading-[1.15]">
              I media
            </h2>
            <div className="heading-line" />
            <p className="text-muted-foreground text-[15px] md:text-base max-w-xl leading-relaxed mt-3">
              Utvalgte omtaler, debatter og artikler der NIVI Analyse bidrar med innsikt.
            </p>
          </div>
          <Link 
            to="/i-media" 
            className="group inline-flex items-center gap-2 text-[14px] font-medium text-primary hover:text-accent transition-colors duration-200 whitespace-nowrap"
          >
            Se alt i media
            <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {featuredMedia.map((entry) => (
            <MediaCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
