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
      className="group block bg-card border border-border/60 rounded-[18px] p-5 md:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-border transition-all duration-200"
    >
      <div className="flex items-center gap-3 mb-3">
        <Badge 
          variant="secondary" 
          className="flex items-center gap-1.5 bg-secondary/50 text-primary font-medium text-xs"
        >
          {getTypeIcon(entry.type)}
          {mediaTypeLabels[entry.type]}
        </Badge>
      </div>
      
      <p className="text-xs text-muted-foreground mb-2">
        {entry.source} · {formatDate(entry.date)}
      </p>
      
      <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
        {entry.title}
      </h3>
      
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
        {entry.excerpt}
      </p>
      
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
        {ctaText}
        <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  );
};

export default MediaCard;
