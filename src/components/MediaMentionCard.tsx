import { Link } from "react-router-dom";
import { Newspaper, Calendar, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MediaMention } from "@/types/content";

interface MediaMentionCardProps {
  mention: MediaMention;
  variant?: "compact" | "full";
}

const MediaMentionCard = ({ mention, variant = "compact" }: MediaMentionCardProps) => {
  if (variant === "compact") {
    return (
      <Link
        to={`/inspirasjon/${mention.slug}`}
        className="group card-premium p-5 md:p-6 block"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="flex items-center gap-1.5 px-3 py-1 bg-secondary/40 rounded-full text-xs font-medium text-primary">
            <Newspaper className="w-3 h-3" />
            {mention.outlet}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {mention.date}
          </span>
        </div>
        
        <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
          {mention.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {mention.summary}
        </p>
      </Link>
    );
  }

  // Full variant for featured display
  return (
    <div className="card-premium p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary/40 rounded-full text-sm font-medium text-primary">
          <Newspaper className="w-4 h-4" />
          {mention.outlet}
        </span>
        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          {mention.date}
        </span>
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold mb-3">
        {mention.title}
      </h3>
      
      <p className="text-muted-foreground text-base leading-relaxed mb-6">
        {mention.summary}
      </p>
      
      <div className="flex flex-wrap gap-3">
        {mention.sourceUrl && (
          <Button variant="outline" size="default" asChild>
            <a href={mention.sourceUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Les omtalen
            </a>
          </Button>
        )}
        {mention.pdfUrl && (
          <Button variant="outline" size="default" asChild>
            <a href={mention.pdfUrl} download>
              <Download className="w-4 h-4 mr-2" />
              Last ned PDF
            </a>
          </Button>
        )}
        {!mention.sourceUrl && !mention.pdfUrl && (
          <Link to={`/inspirasjon/${mention.slug}`}>
            <Button variant="outline" size="default">
              Les mer
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MediaMentionCard;
