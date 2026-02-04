import { Link } from "react-router-dom";
import { ArrowRight, Newspaper, Video, MessageSquare, FileText } from "lucide-react";
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
  const ctaText = entry.type === "video" || entry.type === "debate" 
    ? "Se innslag" 
    : "Les omtalen";

  return (
    <Link
      to={`/i-media/${entry.slug}`}
      className="group block bg-card border border-primary/[0.08] rounded-[18px] p-6 md:p-7 shadow-[0_2px_8px_-2px_rgba(7,52,47,0.06)] hover:shadow-[0_8px_24px_-8px_rgba(7,52,47,0.12)] hover:-translate-y-1 hover:border-primary/[0.15] transition-all duration-300"
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
        {entry.source} <span className="mx-1.5 text-primary/20">·</span> {formatDate(entry.date)}
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
