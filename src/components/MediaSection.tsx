import { Link } from "@/lib/router-compat";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import MediaCard from "@/components/MediaCard";
import { getFeaturedMedia } from "@/data/media";
import visualBreakImage from "@/assets/nivi-havard-bente.webp";
import visualBreak640 from "@/assets/nivi-havard-bente-640.webp";
import visualBreak960 from "@/assets/nivi-havard-bente-960.webp";
import visualBreak1280 from "@/assets/nivi-havard-bente-1280.webp";

const MediaSection = () => {
  const featuredMedia = getFeaturedMedia();

  return (
    <section style={{ paddingTop: '70px', paddingBottom: '70px', backgroundColor: '#FFFFFF' }}>
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

      {/* Visual break image integrated as a natural part of the section */}
      <div className="max-w-6xl mx-auto px-6 mt-10 md:mt-12">
        <div className="rounded-2xl overflow-hidden shadow-xs">
          <img
            src={visualBreak960}
            srcSet={`${visualBreak640} 640w, ${visualBreak960} 960w, ${visualBreak1280} 1280w`}
            sizes="(max-width: 767px) 92vw, 1152px"
            alt="Håvard Moe og Bente Rudrud Herdlevær i samtale – NIVI Analyse"
            width={800}
            height={533}
            className="w-full h-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
