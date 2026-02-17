import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import MediaCard from "@/components/MediaCard";
import { getFeaturedMedia } from "@/data/mediaContent";

const MediaSection = () => {
  const featuredMedia = getFeaturedMedia();

  return (
    <section className="bg-background" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="container-narrow">
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <SectionHeader
              title="I media"
              subtitle="Utvalgte omtaler, debatter og artikler der NIVI Analyse bidrar med innsikt."
            />
            <Link 
              to="/i-media" 
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-primary hover:text-accent hover:underline underline-offset-4 transition-colors duration-200 whitespace-nowrap"
            >
              Se alt i media
              <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-12 gap-x-6 lg:gap-x-7">
          {featuredMedia.map((entry) => (
            <MediaCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
