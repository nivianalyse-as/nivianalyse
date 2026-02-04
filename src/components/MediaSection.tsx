import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MediaCard from "@/components/MediaCard";
import { getFeaturedMedia } from "@/data/mediaContent";

const MediaSection = () => {
  const featuredMedia = getFeaturedMedia();

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              I media
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Utvalgte artikler, omtaler og debatter der NIVI Analyse bidrar med innsikt og faglige vurderinger.
            </p>
          </div>
          <Link 
            to="/i-media" 
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors whitespace-nowrap"
          >
            Se alt i media
            <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMedia.map((entry) => (
            <MediaCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
