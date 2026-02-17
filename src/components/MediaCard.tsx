import { Link } from "react-router-dom";
import { ArrowRight, Newspaper, Video, MessageSquare, FileText, Headphones } from "lucide-react";
import { MediaEntry, mediaTypeLabels } from "@/types/media";
import { Badge } from "@/components/ui/badge";

interface MediaCardProps {
  entry: MediaEntry;
}

const getTypeIcon = (type: MediaEntry["type"]) => {
  switch (type) {
    case "article":
      return <Newspaper className="w-3 h-3" />;
    case "video":
      return <Video className="w-3 h-3" />;
    case "debate":
      return <MessageSquare className="w-3 h-3" />;
    case "podcast":
      return <Headphones className="w-3 h-3" />;
    default:
      return <FileText className="w-3 h-3" />;
  }
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("nb-NO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
};

const MediaCard = ({ entry }: MediaCardProps) => {
  const ctaText = entry.type === "podcast"
    ? "Hør episoden"
    : entry.type === "video" || entry.type === "debate" 
      ? "Se innslag" 
      : "Les omtalen";

  // Podcasts with only an external URL link directly out
  const isExternalOnly = entry.type === "podcast" && entry.externalUrl && !entry.embedUrl;

  if (isExternalOnly) {
    return (
      <a
        href={entry.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-card rounded-xl p-6 md:p-7 transition-all duration-200"
        style={{
          border: '1px solid hsl(168 40% 20% / 0.10)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
          e.currentTarget.style.borderColor = 'hsl(168 40% 20% / 0.18)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)';
          e.currentTarget.style.borderColor = 'hsl(168 40% 20% / 0.10)';
        }}
      >
        <div className="flex items-center gap-2.5 mb-4">
          <Badge 
            variant="secondary" 
            className="flex items-center gap-1.5 bg-secondary/40 text-primary font-medium text-[11px] px-2.5 py-1 rounded-full"
          >
            {getTypeIcon(entry.type)}
            {mediaTypeLabels[entry.type]}
          </Badge>
        </div>
        
        {entry.source && (
          <p className="text-[12px] text-muted-foreground mb-2.5 tracking-wide">
            {entry.source}
          </p>
        )}
        
        <h3 className="text-[17px] md:text-lg font-semibold mb-3 text-primary leading-snug group-hover:text-accent transition-colors duration-200 line-clamp-2">
          {entry.title}
        </h3>
        
        <p className="text-[14px] text-muted-foreground leading-[1.65] line-clamp-2 mb-5">
          {entry.excerpt}
        </p>
        
        <span className="inline-flex items-center gap-2 text-[14px] font-medium text-primary group-hover:text-accent transition-colors duration-200">
          {ctaText}
          <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform duration-200" />
        </span>
      </a>
    );
  }

  return (
    <Link
      to={`/i-media/${entry.slug}`}
      className="group block bg-card rounded-xl p-6 md:p-7 transition-all duration-200"
      style={{
        border: '1px solid hsl(168 40% 20% / 0.10)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
        e.currentTarget.style.borderColor = 'hsl(168 40% 20% / 0.18)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)';
        e.currentTarget.style.borderColor = 'hsl(168 40% 20% / 0.10)';
      }}
    >
      <div className="flex items-center gap-2.5 mb-4">
        <Badge 
          variant="secondary" 
          className="flex items-center gap-1.5 bg-secondary/40 text-primary font-medium text-[11px] px-2.5 py-1 rounded-full"
        >
          {getTypeIcon(entry.type)}
          {mediaTypeLabels[entry.type]}
        </Badge>
      </div>
      
      <p className="text-[12px] text-muted-foreground mb-2.5 tracking-wide">
        {entry.source}{entry.date && <><span className="mx-1.5 text-primary/20">·</span>{formatDate(entry.date)}</>}
      </p>
      
      <h3 className="text-[17px] md:text-lg font-semibold mb-3 text-primary leading-snug group-hover:text-accent transition-colors duration-200 line-clamp-2">
        {entry.title}
      </h3>
      
      <p className="text-[14px] text-muted-foreground leading-[1.65] line-clamp-2 mb-5">
        {entry.excerpt}
      </p>
      
      <span className="inline-flex items-center gap-2 text-[14px] font-medium text-primary group-hover:text-accent transition-colors duration-200">
        {ctaText}
        <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform duration-200" />
      </span>
    </Link>
  );
};

export default MediaCard;
